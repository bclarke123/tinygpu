import { mat3, vec3 } from "wgpu-matrix";
import { ComputeTask } from "../compute/compute-task";
import { Renderer } from "../renderer";

import stage1Shader from "../shaders/fluid/stage1.wgsl";
import stage2Shader from "../shaders/fluid/stage2.wgsl";
import stage3Shader from "../shaders/fluid/stage3.wgsl";
import { packUniforms, UniformValue } from "../uniform-utils";

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

export class FluidSimulationOptions {
  particles: number;
  gridSize: number;
  dimensions: number;
}

export class FluidSimulation {
  renderer: Renderer;
  options: FluidSimulationOptions;

  gridMomentumBuffer: GPUBuffer;
  gridMassBuffer: GPUBuffer;
  gridVelocityBuffer: GPUBuffer;

  particleBufferA: GPUBuffer;
  particleBufferB: GPUBuffer;

  stage1Task: ComputeTask;
  stage1Pipeline: GPUComputePipeline;
  stage1BindGroup: GPUBindGroup;

  stage2Task: ComputeTask;
  stage2Pipeline: GPUComputePipeline;
  stage2BindGroup: GPUBindGroup;

  stage3Task: ComputeTask;
  stage3Pipeline: GPUComputePipeline;
  stage3BindGroup: GPUBindGroup;

  constructor(
    renderer: Renderer,
    options: FluidSimulationOptions = {
      particles: 50_000,
      gridSize: 128,
      dimensions: 3,
    },
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
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    );

    this.particleBufferA = this.initializeParticleBuffer();
    this.particleBufferB = this.initializeParticleBuffer();

    this.stage1Task = new ComputeTask({
      shader: renderer.createShaderModule({ code: stage1Shader }),
      entryPoint: "main",
      dispatchCount: vec3.create(8, 8, 1),
      buffers: [
        { buffer: this.gridMassBuffer, type: "storage" },
        { buffer: this.gridMomentumBuffer, type: "storage" },
        { buffer: this.gridVelocityBuffer, type: "storage" },
        { buffer: this.particleBufferA, type: "storage" },
        { buffer: this.particleBufferB, type: "storage" },
      ],
    });

    this.stage1BindGroup = this.stage1Task.getBindGroup(this.renderer.device);
    this.stage1Pipeline = this.renderer.computePipelineFor(this.stage1Task);

    this.stage2Task = new ComputeTask({
      shader: renderer.createShaderModule({ code: stage2Shader }),
      entryPoint: "main",
      dispatchCount: vec3.create(8, 8, 1),
      buffers: [
        { buffer: this.gridMassBuffer, type: "storage" },
        { buffer: this.gridMomentumBuffer, type: "storage" },
        { buffer: this.gridVelocityBuffer, type: "storage" },
        { buffer: this.particleBufferA, type: "storage" },
        { buffer: this.particleBufferB, type: "storage" },
      ],
    });

    this.stage2BindGroup = this.stage2Task.getBindGroup(this.renderer.device);
    this.stage2Pipeline = this.renderer.computePipelineFor(this.stage2Task);

    this.stage3Task = new ComputeTask({
      shader: renderer.createShaderModule({ code: stage3Shader }),
      entryPoint: "main",
      dispatchCount: vec3.create(8, 8, 1),
      buffers: [
        { buffer: this.gridMassBuffer, type: "storage" },
        { buffer: this.gridMomentumBuffer, type: "storage" },
        { buffer: this.gridVelocityBuffer, type: "storage" },
        { buffer: this.particleBufferA, type: "storage" },
        { buffer: this.particleBufferB, type: "storage" },
      ],
    });

    this.stage3BindGroup = this.stage3Task.getBindGroup(this.renderer.device);
    this.stage3Pipeline = this.renderer.computePipelineFor(this.stage3Task);
  }

  initializeParticleBuffer() {
    const value: { [k: string]: UniformValue } = {
      position: vec3.create(),
      velocity: vec3.create(),
      affineMatrixC: mat3.create(),
      deformationGradientF: mat3.identity<Float32Array>(),
      Jf: 0,
      Jp: 0,
      mass: 0,
      materialIndex: 0,
    };

    const members = Object.keys(value).map((k) => ({ name: k }));

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

    for (let i = 0; i < this.options.particles; i++) {
      // Set buf[0] through buf[12] to set a position for this particle

      buf.set(packedArr, i * particleSize);
    }

    return this.renderer.createBuffer(
      buf,
      GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
    );
  }

  tick() {
    const commandEncoder = this.renderer.device.createCommandEncoder();
    const passEncoder = commandEncoder.beginComputePass();

    commandEncoder.clearBuffer(this.gridMassBuffer, 0);
    commandEncoder.clearBuffer(this.gridMomentumBuffer, 0);

    const stage1Size = this.stage1Task.dispatchCount;
    passEncoder.setPipeline(this.stage1Pipeline);
    passEncoder.setBindGroup(0, this.stage1BindGroup);
    passEncoder.dispatchWorkgroups(stage1Size[0], stage1Size[1], stage1Size[2]);

    const stage2Size = this.stage2Task.dispatchCount;
    passEncoder.setPipeline(this.stage2Pipeline);
    passEncoder.setBindGroup(0, this.stage2BindGroup);
    passEncoder.dispatchWorkgroups(stage2Size[0], stage2Size[1], stage2Size[2]);

    const stage3Size = this.stage3Task.dispatchCount;
    passEncoder.setPipeline(this.stage3Pipeline);
    passEncoder.setBindGroup(0, this.stage3BindGroup);
    passEncoder.dispatchWorkgroups(stage3Size[0], stage3Size[1], stage3Size[2]);

    passEncoder.end();

    this.renderer.device.queue.submit([commandEncoder.finish()]);
  }
}
