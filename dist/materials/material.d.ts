import { UniformManager } from "../uniform-manager";
export declare abstract class Material {
    protected _uniformManager: UniformManager;
    constructor(uniformManager?: UniformManager);
    abstract get cacheKey(): string;
    abstract get shaderCode(): GPUShaderModule;
    get bindGroupLayout(): GPUBindGroupLayout | undefined;
    get bindGroup(): GPUBindGroup | undefined;
    update(): void;
}
