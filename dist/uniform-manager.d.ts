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
    visibility?: number;
    stepMode?: GPUVertexStepMode;
    stride?: number;
}
export declare class UniformManager {
    private _device;
    private _uniforms?;
    private _textures?;
    private _buffers?;
    private _uniformDirty;
    private _texturesDirty;
    private _uniformArr;
    private _uniformBuffer;
    private _bindGroup;
    private _bindGroupLayout;
    private _sampler;
    private _label;
    constructor(device: GPUDevice, uniforms?: UniformItem[], textures?: Texture[], buffers?: UniformBufferItem[], label?: string);
    updateUniform(uniform: UniformItem): void;
    updateTextures(textures?: Texture[]): void;
    update(): void;
    setTexturesDirty(): void;
    setUniformsDirty(): void;
    setDirty(): void;
    get sampler(): GPUSampler;
    get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroupDescriptor(): GPUBindGroupDescriptor;
    get bindGroup(): GPUBindGroup;
    get buffers(): UniformBufferItem[];
}
