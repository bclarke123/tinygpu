import { UniformManager } from "../uniform-manager";

export abstract class Material {
  protected _device: GPUDevice;
  protected _uniformManager: UniformManager;

  constructor(device: GPUDevice, uniformManager?: UniformManager) {
    this._device = device;
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
