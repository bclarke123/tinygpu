import { mat3, Vec3, vec3 } from "wgpu-matrix";
import { ComputeTask } from "../compute/compute-task";
import { Renderer } from "../renderer";

import shaderStructs from "./shaders/structs.wgsl";
import stage1Shader from "./shaders/stage1.wgsl";
import stage2Shader from "./shaders/stage2.wgsl";
import stage3Shader from "./shaders/stage3.wgsl";
import {
  packUniforms,
  UniformItem,
  UniformValue,
  uploadUniformBuffer,
} from "../uniform-utils";
import { UniformBufferItem } from "../uniform-manager";

// interface Particle {
//   position: Vec3;
//   velocity: Vec3;
//   affineMatrixC: Mat3;
//   deformationGradientF: Mat3;
//   mass: number;
//   Jp: number;
//   Jf: number;
//   materialIndex: number;
// }

interface FluidSimComputeStage {
  task: ComputeTask;
  bindGroup: GPUBindGroup;
  pipeline: GPUComputePipeline;
}

export class FluidSimulationOptions {
  dt: number;
  dx: number;
  invDx: number;
  gridSize: number;
  dimensions: number;
  particles: number;
  particleInitialVolume: number;
  particleMass: number;
  gravity: number;
  mu0: number;
  lambda0: number;
  fluidStiffnessEf: number;
  snowPlasticityHFactor: number;
  snowYieldMin: number;
  snowYieldMax: number;
  boundaryExtent: number;

  constructor(particles: number, gridSize: number) {
    this.particles = particles;
    this.gridSize = gridSize;
    this.dimensions = 3;

    this.dt = 1e-4;
    this.dx = 1.0 / this.gridSize;
    this.invDx = this.gridSize;
    this.particleInitialVolume = Math.pow(
      (1.0 / this.gridSize) * 0.5,
      this.dimensions,
    );
    this.particleMass = 1.0; // Math.pow((1.0 / this.gridSize) * 0.5, this.dimensions);
    this.gravity = 9.8;
    this.mu0 = 5e3 / (2.0 * (1.0 + 0.2));
    this.lambda0 = (5e3 * 0.2) / ((1.0 + 0.2) * (1.0 - 2.0 * 0.2));
    this.fluidStiffnessEf = 400;
    this.snowPlasticityHFactor = 10;
    this.snowYieldMin = 1.0 - 2.5e-2;
    this.snowYieldMax = 1.0 + 4.4e-3;
    this.boundaryExtent = 3;
  }

  asUniformItems() {
    const items: UniformItem[] = [
      { name: "dt", value: this.dt, type: "f32" },
      { name: "dx", value: this.dx, type: "f32" },
      { name: "inv_dx", value: this.invDx, type: "f32" }, // Name in WGSL is inv_dx
      { name: "grid_size", value: this.gridSize, type: "u32" },
      { name: "dimensions", value: this.dimensions, type: "u32" },
      { name: "num_particles", value: this.particles, type: "u32" }, // Name in WGSL is num_particles
      { name: "particle_initial_volume", value: this.particleInitialVolume, type: "f32" },
      { name: "particle_mass_param", value: this.particleMass, type: "f32" }, // Name in WGSL
      { name: "gravity", value: this.gravity, type: "f32" },
      { name: "mu_0", value: this.mu0, type: "f32" }, // Name in WGSL
      { name: "lambda_0", value: this.lambda0, type: "f32" }, // Name in WGSL
      { name: "fluid_stiffness_Ef", value: this.fluidStiffnessEf, type: "f32" }, // Name in WGSL
      { name: "snow_plasticity_h_factor", value: this.snowPlasticityHFactor, type: "f32" }, // Name in WGSL
      { name: "snow_yield_min", value: this.snowYieldMin, type: "f32" }, // Name in WGSL
      { name: "snow_yield_max", value: this.snowYieldMax, type: "f32" }, // Name in WGSL
      { name: "boundary_extent", value: this.boundaryExtent, type: "u32" }, // Name in WGSL
    ];

    return items;
  }
}

export class FluidSimulation {
  renderer: Renderer;
  options: FluidSimulationOptions;

  gridMomentumBuffer: GPUBuffer;
  gridMassBuffer: GPUBuffer;
  gridVelocityBuffer: GPUBuffer;

  particleBufferA: GPUBuffer;
  particleBufferB: GPUBuffer;

  pingpong: number = 0;
  stage1: FluidSimComputeStage[];
  stage2: FluidSimComputeStage;
  stage3: FluidSimComputeStage[];

  uniformArr: ArrayBuffer;
  uniformBuffer: GPUBuffer;

  particleStagingBuffer: GPUBuffer;
  particleDataForReadback: ArrayBuffer;

  gridVelocityStagingBuffer: GPUBuffer;

  constructor(
    renderer: Renderer,
    options: FluidSimulationOptions = new FluidSimulationOptions(
      40 * 40 * 40,
      128,
    ),
  ) {
    this.renderer = renderer;
    this.options = options;

    const gridElements = Math.pow(options.gridSize, options.dimensions);

    this.gridMassBuffer = renderer.createBuffer(
      new Uint32Array(gridElements),
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    );

    this.gridMomentumBuffer = renderer.createBuffer(
      new Uint32Array(gridElements * this.options.dimensions),
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    );

    this.gridVelocityBuffer = renderer.createBuffer(
      new Float32Array(gridElements * this.options.dimensions),
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    );

    this.uniformArr = packUniforms(
      this.options.asUniformItems(),
      this.uniformArr,
    );
    this.uniformBuffer = uploadUniformBuffer(
      this.uniformArr,
      this.renderer.device,
    );

    this.particleBufferA = this.initializeParticleBuffer();
    this.particleBufferB = this.initializeParticleBuffer();

    const stage1ShaderModule = renderer.createShaderModule({
      code: shaderStructs + stage1Shader,
      label: "Stage 1",
    });
    const stage2ShaderModule = renderer.createShaderModule({
      code: shaderStructs + stage2Shader,
      label: "Stage 2",
    });
    const stage3ShaderModule = renderer.createShaderModule({
      code: shaderStructs + stage3Shader,
      label: "Stage 3",
    });

    const particleWorkgroupSizeX = 64; // @workgroup_size(64,1,1)
    const s13Size = Math.ceil(this.options.particles / particleWorkgroupSizeX);
    const s2Size = Math.ceil(this.options.gridSize / 4); // @workgroup_size(4, 4, 4)

    this.stage1 = [
      this.initializeComputePass(
        "Stage 1 A",
        vec3.create(s13Size, 1, 1),
        stage1ShaderModule,
        [
          this.getBufferItem(this.uniformBuffer, "uniform"),
          this.getBufferItem(this.gridMassBuffer, "storage"),
          this.getBufferItem(this.gridMomentumBuffer, "storage"),
          this.getBufferItem(this.particleBufferA, "read-only-storage"),
          this.getBufferItem(this.particleBufferB, "storage"),
        ],
      ),
      this.initializeComputePass(
        "Stage 1 B",
        vec3.create(s13Size, 1, 1),
        stage1ShaderModule,
        [
          this.getBufferItem(this.uniformBuffer, "uniform"),
          this.getBufferItem(this.gridMassBuffer, "storage"),
          this.getBufferItem(this.gridMomentumBuffer, "storage"),
          this.getBufferItem(this.particleBufferB, "read-only-storage"),
          this.getBufferItem(this.particleBufferA, "storage"),
        ],
      ),
    ];

    this.stage2 = this.initializeComputePass(
      "Stage 2",
      vec3.create(s2Size, s2Size, s2Size),
      stage2ShaderModule,
      [
        this.getBufferItem(this.uniformBuffer, "uniform"),
        this.getBufferItem(this.gridMassBuffer, "storage"),
        this.getBufferItem(this.gridMomentumBuffer, "storage"),
        this.getBufferItem(this.gridVelocityBuffer, "storage"),
      ],
    );

    this.stage3 = [
      this.initializeComputePass(
        "Stage 3 A",
        vec3.create(s13Size, 1, 1),
        stage3ShaderModule,
        [
          this.getBufferItem(this.uniformBuffer, "uniform"),
          this.getBufferItem(this.gridVelocityBuffer, "read-only-storage"),
          this.getBufferItem(this.particleBufferA, "read-only-storage"),
          this.getBufferItem(this.particleBufferB, "storage"),
        ],
      ),
      this.initializeComputePass(
        "Stage 3 B",
        vec3.create(s13Size, 1, 1),
        stage3ShaderModule,
        [
          this.getBufferItem(this.uniformBuffer, "uniform"),
          this.getBufferItem(this.gridVelocityBuffer, "read-only-storage"),
          this.getBufferItem(this.particleBufferB, "read-only-storage"),
          this.getBufferItem(this.particleBufferA, "storage"),
        ],
      ),
    ];

    // In the constructor:
    const particleStructSizeBytes = 144;
    const totalParticleDataBytes =
      this.options.particles * particleStructSizeBytes;
    this.particleStagingBuffer = this.renderer.device.createBuffer({
      size: totalParticleDataBytes,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, // For copying to, and mapping for CPU read
      label: "ParticleStagingBuffer",
    });
    this.particleDataForReadback = new ArrayBuffer(totalParticleDataBytes);

    this.gridVelocityStagingBuffer = this.renderer.device.createBuffer({
      size: gridElements * options.dimensions * 4,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, // For copying to, and mapping for CPU read
      label: "VelocityStagingBuffer",
    })
  }

  getBufferItem(buffer: GPUBuffer, type: GPUBufferBindingType): UniformBufferItem {
    return { buffer, type, visibility: GPUShaderStage.COMPUTE };
  }

  initializeComputePass(
    label: string,
    dispatchCount: Vec3,
    shader: GPUShaderModule,
    buffers: UniformBufferItem[],
  ): FluidSimComputeStage {
    const task = this.renderer.createComputeTask({
      label,
      shader,
      entryPoint: "main",
      dispatchCount,
      buffers,
    });

    const bindGroup = task.bindGroup;
    const pipeline = this.renderer.computePipelineFor(task);

    return {
      task,
      bindGroup,
      pipeline,
    };
  }

  initializeParticleBuffer() {
    const now = performance.now();

    const value: { [k: string]: UniformValue } = {
      position: vec3.create(),
      velocity: vec3.create(),
      affineMatrixC: mat3.create(),
      deformationGradientF: mat3.identity<Float32Array>(),
      mass: this.options.particleMass,
      Jf: 1.0,
      Jp: 1.0,
      materialIndex: 0,
    };

    const members = Object.keys(value).map((k) => ({ name: k }));

    // console.log(value);

    const packed = packUniforms([
      {
        name: "Particle",
        type: "Particle",
        members,
        value,
      },
    ]);
    const packedArr = new Uint8Array(packed);

    const particleSize = packed.byteLength;
    const particleBufferSize = particleSize * this.options.particles;
    const buf = new Uint8Array(particleBufferSize);

    const scale = 2.0;
    const pos = vec3.create();
    const posBuf = new Uint8Array(pos.buffer);

    const sideLen = Math.ceil(Math.cbrt(this.options.particles));

    for (let i = 0; i < this.options.particles; i++) {
      const x = Math.floor(i / (sideLen * sideLen)) - sideLen * 0.5;
      const y = Math.floor((i % (sideLen * sideLen)) / sideLen) - sideLen * 0.5;
      const z = (i % sideLen) - sideLen * 0.5;

      pos.set([x, y, z]);
      vec3.mulScalar(pos, scale, pos);

      packedArr.set(posBuf, 0);
      buf.set(packedArr, i * particleSize);
    }

    const ret = this.renderer.createBuffer(
      buf,
      GPUBufferUsage.COPY_DST |
      GPUBufferUsage.COPY_SRC |
      GPUBufferUsage.STORAGE,
    );

    console.log(`Created position buffer in ${performance.now() - now}ms`);

    return ret;
  }

  tick() {
    const commandEncoder = this.renderer.device.createCommandEncoder();

    commandEncoder.clearBuffer(this.gridMassBuffer, 0);
    commandEncoder.clearBuffer(this.gridMomentumBuffer, 0);

    const passEncoder = commandEncoder.beginComputePass();

    const stage1 = this.stage1[this.pingpong];
    const stage2 = this.stage2;
    const stage3 = this.stage3[this.pingpong];

    const stage1Size = stage1.task.dispatchCount;
    passEncoder.setPipeline(stage1.pipeline);
    passEncoder.setBindGroup(0, stage1.bindGroup);
    passEncoder.dispatchWorkgroups(stage1Size[0], stage1Size[1], stage1Size[2]);

    const stage2Size = stage2.task.dispatchCount;
    passEncoder.setPipeline(stage2.pipeline);
    passEncoder.setBindGroup(0, stage2.bindGroup);
    passEncoder.dispatchWorkgroups(stage2Size[0], stage2Size[1], stage2Size[2]);

    const stage3Size = stage3.task.dispatchCount;
    passEncoder.setPipeline(stage3.pipeline);
    passEncoder.setBindGroup(0, stage3.bindGroup);
    passEncoder.dispatchWorkgroups(stage3Size[0], stage3Size[1], stage3Size[2]);

    passEncoder.end();

    // Inside tick(), after passEncoder.end()
    // Choose which particle buffer has the latest data. After pingpong, it's this.stage1[1-this.pingpong].task.buffers[4].buffer
    // or more simply, if pingpong flips at the end of tick, the "written-to" buffer in the *next* frame's P2G input
    // would be the one that was just fully updated.
    // Let's assume currentParticleReadBuffer (from your ping-pong logic) holds the data you want to inspect.
    // If pingpong is 0 before the flip, stage1[0] used A as input, B as output. stage3[0] used B as input, A as output.
    // So, if this.pingpong is 0 (meaning next frame it will be 1), then particleBufferA was the final output.
    // If this.pingpong is 1 (meaning next frame it will be 0), then particleBufferB was the final output.
    const finalOutputParticleBuffer =
      this.pingpong === 0 ? this.particleBufferA : this.particleBufferB;

    const particleStructSizeBytes = 144;
    const totalParticleDataBytes =
      this.options.particles * particleStructSizeBytes;

    commandEncoder.copyBufferToBuffer(
      finalOutputParticleBuffer, // Source: The GPU buffer with latest particle data
      0, // Source offset
      this.particleStagingBuffer, // Destination: The mappable staging buffer
      0, // Destination offset
      totalParticleDataBytes, // Size
    );

    // Now encode the copy for gridVelocityBuffer
    commandEncoder.copyBufferToBuffer(
      this.gridVelocityBuffer,
      0,
      this.gridVelocityStagingBuffer, // Your new staging buffer for velocities
      0,
      this.gridVelocityBuffer.size
    );

    this.renderer.device.queue.submit([commandEncoder.finish()]);

    this.pingpong = 1 - this.pingpong;
  }

  // Add a method to your FluidSimulation class
  async inspectParticles(numParticlesToLog: number = 5) {
    // This should be called AFTER the queue.submit() containing the copyBufferToBuffer has processed.
    // A robust way is to use device.queue.onSubmittedWorkDone() if you're not doing it per frame.
    // For simplicity, if called right after a tick(), we hope the copy is done.
    // A better pattern is to do the mapAsync in the next frame's requestAnimationFrame callback,
    // or after onSubmittedWorkDone().

    try {
      await this.particleStagingBuffer.mapAsync(
        GPUMapMode.READ,
        0, // Offset
        this.particleStagingBuffer.size, // Size
      );

      const mappedRange = this.particleStagingBuffer.getMappedRange();
      // Create a copy of the data so we can unmap the buffer quickly
      const particleDataCopy = mappedRange.slice(0);
      this.particleStagingBuffer.unmap();

      const particles: any[] = []; // Or your defined Particle JS/TS object type
      const particleSize = 144; // Bytes per particle, from your setup

      const dataView = new DataView(particleDataCopy);

      for (
        let i = 0;
        i < Math.min(numParticlesToLog, this.options.particles);
        i++
      ) {
        const offset = i * particleSize;
        const p: any = {}; // Or new YourParticleClass();

        // Unpack fields based on your Particle struct order and alignment
        // This is the inverse of your packUniforms logic for a single particle
        // Assuming 'position' is first (vec3f, 12 bytes, 16-byte aligned block)
        p.position = vec3.fromValues(
          dataView.getFloat32(offset + 0, true),
          dataView.getFloat32(offset + 4, true),
          dataView.getFloat32(offset + 8, true),
        );
        // Assuming 'velocity' is next (vec3f, 12 bytes, 16-byte aligned block)
        p.velocity = vec3.fromValues(
          dataView.getFloat32(offset + 16, true),
          dataView.getFloat32(offset + 20, true),
          dataView.getFloat32(offset + 24, true),
        );
        // affineMatrixC: mat3x3f. Each column is vec3f, aligned to 16 bytes.
        // Total 3 * 16 = 48 bytes.
        // Column 0
        const c0x = dataView.getFloat32(offset + 32, true);
        const c0y = dataView.getFloat32(offset + 36, true);
        const c0z = dataView.getFloat32(offset + 40, true);
        // Column 1
        const c1x = dataView.getFloat32(offset + 32 + 16, true);
        const c1y = dataView.getFloat32(offset + 36 + 16, true);
        const c1z = dataView.getFloat32(offset + 40 + 16, true);
        // Column 2
        const c2x = dataView.getFloat32(offset + 32 + 32, true);
        const c2y = dataView.getFloat32(offset + 36 + 32, true);
        const c2z = dataView.getFloat32(offset + 40 + 32, true);
        p.affineMatrixC = mat3.create(
          c0x,
          c0y,
          c0z,
          c1x,
          c1y,
          c1z,
          c2x,
          c2y,
          c2z,
        );

        // deformationGradientF: mat3x3f (another 48 bytes)
        // Starts at offset + 32 + 48 = offset + 80
        const f0x = dataView.getFloat32(offset + 80, true);
        // ... (unpack all 9 components similarly to C) ...
        p.deformationGradientF = mat3.identity(); // Placeholder, unpack properly

        // mass: f32 (starts after F, i.e., offset + 80 + 48 = offset + 128)
        p.mass = dataView.getFloat32(offset + 128, true);
        // Jp: f32 (offset + 128 + 4 = offset + 132)
        p.Jp = dataView.getFloat32(offset + 132, true);
        // Jf: f32 (offset + 132 + 4 = offset + 136)
        p.Jf = dataView.getFloat32(offset + 136, true);
        // materialIndex: u32 (offset + 136 + 4 = offset + 140)
        p.materialIndex = dataView.getUint32(offset + 140, true);

        particles.push(p);
      }
      console.log("Readback Particles:", JSON.stringify(particles));
    } catch (e) {
      console.error("Failed to map staging buffer or read particles:", e);
    }
  }

  async inspectGridVelocities(numCellsToLog: number = 100) {
    try {
      await this.gridVelocityStagingBuffer.mapAsync(GPUMapMode.READ, 0, this.gridVelocityStagingBuffer.size);
      const mappedRange = this.gridVelocityStagingBuffer.getMappedRange();
      const dataCopy = mappedRange.slice(0);
      this.gridVelocityStagingBuffer.unmap();

      const velocities: { x: number, y: number, z: number }[] = [];
      const dataView = new DataView(dataCopy);
      const numGridCells = Math.pow(this.options.gridSize, this.options.dimensions);

      for (let i = 0; i < Math.min(numCellsToLog, numGridCells); i++) {
        const offset = i * 3 * 4; // 3 floats per cell, 4 bytes per float
        const vx = dataView.getFloat32(offset + 0, true);
        const vy = dataView.getFloat32(offset + 4, true);
        const vz = dataView.getFloat32(offset + 8, true);
        if (vx !== 0 || vy !== 0 || vz !== 0) { // Only log non-zero velocities
          velocities.push({ x: vx, y: vy, z: vz });
        }
      }
      if (velocities.length > 0) {
        console.log("Readback Grid Velocities (non-zero):", JSON.stringify(velocities, null, 2));
      } else {
        console.log("Readback Grid Velocities: All logged cells are zero.");
      }
    } catch (e) {
      console.error("Failed to map or read grid velocity staging buffer:", e);
    }
  }
}
