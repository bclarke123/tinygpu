import { uploadUniformBuffer } from "../uniform-utils";

export abstract class Material {
  protected _device: GPUDevice;
  protected _uniformBuffer?: GPUBuffer;

  protected _bindGroupLayout?: GPUBindGroupLayout;
  protected _bindGroup?: GPUBindGroup;

  constructor(device: GPUDevice) {
    this._device = device;
  }

  abstract get cacheKey(): string;
  abstract get shaderCode(): GPUShaderModule;

  abstract get uniformBuffer(): ArrayBuffer;

  abstract get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor;
  abstract get bindGroupDescriptor(): GPUBindGroupDescriptor;

  uploadUniforms(): GPUBuffer {
    this._uniformBuffer = uploadUniformBuffer(
      this.uniformBuffer,
      this._device,
      "Material uniform buffer",
      this._uniformBuffer,
    );
    return this._uniformBuffer;
  }

  get bindGroupLayout(): GPUBindGroupLayout {
    if (!this._bindGroupLayout) {
      this._bindGroupLayout = this._device.createBindGroupLayout(this.bindGroupLayoutDescriptor);
    }

    return this._bindGroupLayout;
  }

  get bindGroup(): GPUBindGroup {
    if (!this._bindGroup) {
      this._bindGroup = this._device.createBindGroup(this.bindGroupDescriptor);
    }

    return this._bindGroup;
  }
}
