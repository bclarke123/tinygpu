import { uploadUniformBuffer } from "../uniform-utils";

export abstract class Material {
  protected _device: GPUDevice;
  protected _uniformBuffer?: GPUBuffer;

  constructor(device: GPUDevice) {
    this._device = device;
  }

  abstract get cacheKey(): string;
  abstract get shaderCode(): GPUShaderModule;

  abstract get uniformBuffer(): ArrayBuffer;

  abstract bindGroupDescriptor(
    layout: GPUBindGroupLayout,
  ): GPUBindGroupDescriptor;

  uploadUniforms(): GPUBuffer {
    this._uniformBuffer = uploadUniformBuffer(
      this.uniformBuffer,
      this._device,
      "Material uniform buffer",
      this._uniformBuffer,
    );
    return this._uniformBuffer;
  }
}
