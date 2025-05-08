import { UniformManager } from "../uniform-manager";

export abstract class Material {
  protected _uniformManager: UniformManager;

  constructor(uniformManager?: UniformManager) {
    this._uniformManager = uniformManager;
  }

  abstract get cacheKey(): string;
  abstract get shaderCode(): GPUShaderModule;

  get bindGroupLayout(): GPUBindGroupLayout | undefined {
    return this._uniformManager?.bindGroupLayout;
  }

  get bindGroup(): GPUBindGroup | undefined {
    return this._uniformManager?.bindGroup;
  }

  update() {
    this._uniformManager?.update();
  }
}
