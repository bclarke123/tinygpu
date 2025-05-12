import { Material } from "./material";
import { UniformItem } from "../uniform-utils";
import { Texture } from "../texture";
import { UniformBufferItem } from "../uniform-manager";
export interface ShaderMaterialOptions {
    code: string;
    uniforms?: UniformItem[];
    textures?: Texture[];
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
