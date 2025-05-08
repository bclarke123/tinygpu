import { Material } from "./material";
export declare class UVMaterial extends Material {
    constructor(device: GPUDevice);
    get cacheKey(): string;
    get shaderCode(): GPUShaderModule;
    static shaderModule: GPUShaderModule | null;
    static precompile(device: GPUDevice): void;
}
