import { mat3, Vec3, vec3 } from "wgpu-matrix";
import { ComputeBufferObj, ComputeTask } from "../compute/compute-task";
import { Renderer } from "../renderer";

import stage1Shader from "../shaders/fluid/stage1.wgsl";
import stage2Shader from "../shaders/fluid/stage2.wgsl";
import stage3Shader from "../shaders/fluid/stage3.wgsl";
import { packUniforms, UniformItem, UniformValue, uploadUniformBuffer } from "../uniform-utils";

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
  task: ComputeTask,
  bindGroup: GPUBindGroup,
  pipeline: GPUComputePipeline
};

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
    this.particleInitialVolume = Math.pow((1.0 / this.gridSize) * 0.5, this.dimensions);
    this.particleMass = Math.pow((1.0 / this.gridSize) * 0.5, this.dimensions);
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
    const ret = Object.keys(this).map((k) => ({
      name: k,
      value: this[k],
      type: "f32"
    }));

    return ret;
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

  constructor(
    renderer: Renderer,
    options: FluidSimulationOptions = new FluidSimulationOptions(40 * 40 * 40, 128),
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

    this.uniformArr = packUniforms(this.options.asUniformItems(), this.uniformArr);
    this.uniformBuffer = uploadUniformBuffer(this.uniformArr, this.renderer.device);

    this.particleBufferA = this.initializeParticleBuffer();
    this.particleBufferB = this.initializeParticleBuffer();

    const stage1ShaderModule = renderer.createShaderModule({ code: stage1Shader });
    const stage2ShaderModule = renderer.createShaderModule({ code: stage2Shader });
    const stage3ShaderModule = renderer.createShaderModule({ code: stage3Shader });

    this.stage1 = [
      this.initializeComputePass(
        stage1ShaderModule,
        [
          { buffer: this.uniformBuffer, type: "uniform" },
          { buffer: this.gridMassBuffer, type: "storage" },
          { buffer: this.gridMomentumBuffer, type: "storage" },
          { buffer: this.particleBufferA, type: "read-only-storage" },
          { buffer: this.particleBufferB, type: "storage" },
        ]
      ),
      this.initializeComputePass(
        stage1ShaderModule,
        [
          { buffer: this.uniformBuffer, type: "uniform" },
          { buffer: this.gridMassBuffer, type: "storage" },
          { buffer: this.gridMomentumBuffer, type: "storage" },
          { buffer: this.particleBufferB, type: "read-only-storage" },
          { buffer: this.particleBufferA, type: "storage" },
        ]
      ),
    ];

    this.stage2 = this.initializeComputePass(
      stage2ShaderModule,
      [
        { buffer: this.uniformBuffer, type: "uniform" },
        { buffer: this.gridMassBuffer, type: "read-only-storage" },
        { buffer: this.gridMomentumBuffer, type: "read-only-storage" },
        { buffer: this.gridVelocityBuffer, type: "storage" },
      ]
    );

    this.stage3 = [
      this.initializeComputePass(
        stage3ShaderModule,
        [
          { buffer: this.uniformBuffer, type: "uniform" },
          { buffer: this.gridVelocityBuffer, type: "read-only-storage" },
          { buffer: this.particleBufferA, type: "read-only-storage" },
          { buffer: this.particleBufferB, type: "storage" },
        ]
      ),
      this.initializeComputePass(
        stage3ShaderModule,
        [
          { buffer: this.uniformBuffer, type: "uniform" },
          { buffer: this.gridVelocityBuffer, type: "read-only-storage" },
          { buffer: this.particleBufferB, type: "read-only-storage" },
          { buffer: this.particleBufferA, type: "storage" },
        ]
      ),
    ];
  }

  initializeComputePass(shader: GPUShaderModule, buffers: ComputeBufferObj[]): FluidSimComputeStage {
    const task = new ComputeTask({
      shader,
      entryPoint: "main",
      dispatchCount: vec3.create(8, 8, 1),
      buffers,
    });

    task.getBindGroupLayout(this.renderer.device);
    const bindGroup = task.getBindGroup(this.renderer.device);
    const pipeline = this.renderer.computePipelineFor(task);

    return {
      task,
      bindGroup,
      pipeline
    };
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

    const scale = 0.1;
    const posBuf = vec3.create();
    const sideLen = Math.ceil(Math.cbrt(this.options.particles));

    for (let i = 0; i < this.options.particles; i++) {
      const x = Math.floor(i / (sideLen * sideLen));
      const y = Math.floor((i % (sideLen * sideLen)) / sideLen);
      const z = i % sideLen;

      posBuf.set([x, y, z]);
      vec3.mulScalar(posBuf, scale);

      packedArr.set(posBuf, i * particleSize);
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

    this.renderer.device.queue.submit([commandEncoder.finish()]);

    this.pingpong = 1 - this.pingpong;
  }
}
