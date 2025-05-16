import { Texture } from "./texture";
import { UniformItem } from "./uniform-utils";
export interface UniformBufferAttribute {
    offset: number;
    format: string;
}
export interface UniformBufferItem {
    type: GPUBufferBindingType;
    buffer: GPUBuffer;
    attributes?: UniformBufferAttribute[];
    visibility?: GPUShaderStageFlags;
    stepMode?: GPUVertexStepMode;
    stride?: number;
}
export interface UniformTextureItem {
    texture: Texture;
    accessType?: GPUStorageTextureAccess | "sample";
    visibility?: GPUShaderStageFlags;
    format?: GPUTextureFormat;
    dimension?: GPUTextureViewDimension;
}
export interface UniformSamplerItem {
    type: GPUSamplerBindingType;
    visibility?: GPUShaderStageFlags;
    sampler: GPUSampler;
}
export interface UniformManagerOptions {
    uniforms?: UniformItem[];
    textures?: UniformTextureItem[];
    buffers?: UniformBufferItem[];
    samplers?: UniformSamplerItem[];
    label?: string;
    uniformVisibility?: GPUShaderStageFlags;
    compute?: boolean;
}
export declare class UniformManager {
    private _device;
    _uniforms?: UniformItem[];
    private _textures?;
    private _buffers?;
    private _uniformsDirty;
    private _texturesDirty;
    private _buffersDirty;
    private _compute;
    _uniformArr: ArrayBuffer;
    private _uniformBuffer;
    private _bindGroup;
    private _bindGroupLayout;
    private _samplers;
    private _label;
    private _cacheKey;
    private uniformVisibility;
    constructor(device: GPUDevice, options: UniformManagerOptions);
    get cacheKey(): string;
    updateUniform(uniform: UniformItem): void;
    updateUniforms(uniforms?: UniformItem[]): void;
    updateTextures(textures?: UniformTextureItem[]): void;
    updateBuffers(buffers?: UniformBufferItem[]): void;
    update(): void;
    setTexturesDirty(): void;
    setUniformsDirty(): void;
    setBuffersDirty(): void;
    setDirty(): void;
    get buffers(): UniformBufferItem[];
    get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroupDescriptor(): GPUBindGroupDescriptor;
    get bindGroup(): GPUBindGroup;
}
