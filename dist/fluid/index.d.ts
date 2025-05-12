import { Vec3 } from "wgpu-matrix";
import { ComputeTask } from "../compute/compute-task";
import { Renderer } from "../renderer";
import { UniformBufferItem } from "../uniform-manager";
interface FluidSimComputeStage {
    task: ComputeTask;
    bindGroup: GPUBindGroup;
    pipeline: GPUComputePipeline;
}
export declare class FluidSimulationOptions {
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
    constructor(particles: number, gridSize: number);
    asUniformItems(): {
        name: string;
        value: any;
        type: string;
    }[];
}
export declare class FluidSimulation {
    renderer: Renderer;
    options: FluidSimulationOptions;
    gridMomentumBuffer: GPUBuffer;
    gridMassBuffer: GPUBuffer;
    gridVelocityBuffer: GPUBuffer;
    particleBufferA: GPUBuffer;
    particleBufferB: GPUBuffer;
    pingpong: number;
    stage1: FluidSimComputeStage[];
    stage2: FluidSimComputeStage;
    stage3: FluidSimComputeStage[];
    uniformArr: ArrayBuffer;
    uniformBuffer: GPUBuffer;
    particleStagingBuffer: GPUBuffer;
    particleDataForReadback: ArrayBuffer;
    constructor(renderer: Renderer, options?: FluidSimulationOptions);
    initializeComputePass(label: string, dispatchCount: Vec3, shader: GPUShaderModule, buffers: UniformBufferItem[]): FluidSimComputeStage;
    initializeParticleBuffer(): GPUBuffer;
    tick(): void;
    inspectParticles(numParticlesToLog?: number): Promise<void>;
}
export {};
