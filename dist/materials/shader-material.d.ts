import { Material } from "./material";
import { UniformObj } from "../uniform-utils";
import { Texture } from "../texture";
export interface ShaderMaterialOptions {
    code: string;
    uniforms?: UniformObj[];
    textures?: Texture[];
}
export declare class ShaderMaterial extends Material {
    private _options;
    private _shaderModule;
    constructor(device: GPUDevice, options: ShaderMaterialOptions);
    compile(device: GPUDevice): void;
    get cacheKey(): string;
    get shaderCode(): GPUShaderModule;
}
