import { Material } from "./material";
import { Vec3 } from "wgpu-matrix";
export interface BlinnPhongMaterialOptions {
    ambientColor?: Vec3;
    diffuseColor?: Vec3;
    specularColor?: Vec3;
    shininess?: number;
}
export declare class BlinnPhongMaterial extends Material {
    ambientColor: Vec3;
    diffuseColor: Vec3;
    specularColor: Vec3;
    shininess: number;
    private _device;
    constructor(device: GPUDevice, options: BlinnPhongMaterialOptions);
    get cacheKey(): string;
    get shaderCode(): GPUShaderModule;
    update(): void;
    static shaderModule: GPUShaderModule | null;
    static precompile(device: GPUDevice): void;
}
