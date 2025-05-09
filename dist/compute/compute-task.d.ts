import { Vec3 } from "wgpu-matrix";
import { Texture } from "../texture";
export interface ComputeBufferObj {
    type: GPUBufferBindingType;
    buffer: GPUBuffer;
}
export interface ComputeTextureObj {
    texture: Texture;
    accessType: "sample" | "storageRead" | "storageWrite" | "storageReadWrite";
    format?: GPUTextureFormat;
    dimension?: GPUTextureViewDimension;
}
export interface ComputeSamplerObj {
    type: GPUSamplerBindingType;
    sampler: GPUSampler;
}
export interface ComputeTaskOptions {
    label?: string;
    shader: GPUShaderModule;
    entryPoint: string;
    workgroupSize: Vec3;
    buffers?: ComputeBufferObj[];
    textures?: ComputeTextureObj[];
    samplers: ComputeSamplerObj[];
}
export declare class ComputeTask {
    private _options;
    private _cacheKey;
    private _bindGroup;
    private _bindGroupLayout;
    constructor(options: ComputeTaskOptions);
    get cacheKey(): string;
    get shaderModule(): GPUShaderModule;
    get label(): string;
    get workgroupSize(): Vec3;
    get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor;
    get bindGroupEntries(): GPUBindGroupEntry[];
    getBindGroupLayout(device: GPUDevice): GPUBindGroupLayout;
    getBindGroup(device: GPUDevice): GPUBindGroup;
}
