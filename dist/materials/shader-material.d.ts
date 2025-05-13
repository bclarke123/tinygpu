import { Material } from "./material";
import { UniformItem } from "../uniform-utils";
import { UniformBufferItem, UniformTextureItem } from "../uniform-manager";
export interface ShaderMaterialOptions {
    code: string;
    uniforms?: UniformItem[];
    textures?: UniformTextureItem[];
    buffers?: UniformBufferItem[];
}
export declare class ShaderMaterial extends Material {
    private _options;
    private _shaderModule;
    constructor(device: GPUDevice, options: ShaderMaterialOptions);
    compile(device: GPUDevice): void;
    get cacheKey(): string;
    get shaderCode(): GPUShaderModule;
}
