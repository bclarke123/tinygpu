import { Texture } from "./texture";
import { UniformObj } from "./uniform-utils";
export declare class UniformManager {
    private _device;
    private _uniforms?;
    private _textures?;
    private _uniformDirty;
    private _texturesDirty;
    private _uniformArr;
    private _uniformBuffer;
    private _bindGroup;
    private _bindGroupLayout;
    private _sampler;
    private _label;
    constructor(device: GPUDevice, uniforms?: UniformObj[], textures?: Texture[], label?: string);
    updateUniform(uniform: UniformObj): void;
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
}
