import { Color } from "../color";
import { Texture } from "../texture";
import { Material } from "./material";
export interface BasicMaterialOptions {
    color?: Color;
    map?: Texture;
}
export declare class BasicMaterial extends Material {
    constructor(device: GPUDevice, options?: BasicMaterialOptions);
    get cacheKey(): string;
    get shaderCode(): GPUShaderModule;
    static shaderModule: GPUShaderModule | null;
    static precompile(device: GPUDevice): void;
}
