import { Vec3 } from "wgpu-matrix";
import { UniformBufferItem, UniformSamplerItem, UniformTextureItem } from "../uniform-manager";
export interface ComputeTaskOptions {
    label?: string;
    shader: GPUShaderModule;
    entryPoint?: string;
    dispatchCount: Vec3;
    buffers?: UniformBufferItem[];
    textures?: UniformTextureItem[];
    samplers?: UniformSamplerItem[];
}
export declare class ComputeTask {
    private _options;
    private _uniformManager;
    constructor(device: GPUDevice, options: ComputeTaskOptions);
    get cacheKey(): string;
    get shaderModule(): GPUShaderModule;
    get label(): string;
    get dispatchCount(): Vec3;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
    get entryPoint(): string;
}
