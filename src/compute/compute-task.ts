import { vec3, Vec3 } from "wgpu-matrix";
import { UniformBufferItem, UniformManager, UniformSamplerItem, UniformTextureItem } from "../uniform-manager";

export interface ComputeTaskOptions {
  label?: string;
  shader: GPUShaderModule;
  entryPoint?: string;
  dispatchCount: Vec3;
  buffers?: UniformBufferItem[];
  textures?: UniformTextureItem[];
  samplers?: UniformSamplerItem[];
}

export class ComputeTask {
  private _options: ComputeTaskOptions;
  private _uniformManager: UniformManager;

  constructor(device: GPUDevice, options: ComputeTaskOptions) {
    this._options = options;
    this._uniformManager = new UniformManager(device, {
      uniformVisibility: GPUShaderStage.COMPUTE,
      buffers: this._options.buffers,
      textures: this._options.textures,
      samplers: this._options.samplers
    });
  }

  get cacheKey() {
    return `ComputeTask:${this.label}:${this._uniformManager.cacheKey}`;
  }

  get shaderModule(): GPUShaderModule {
    return this._options.shader;
  }

  get label(): string {
    return this._options.label || "Compute Task";
  }

  get dispatchCount(): Vec3 {
    return this._options.dispatchCount || vec3.create(8, 8, 1);
  }

  get bindGroupLayout(): GPUBindGroupLayout {
    return this._uniformManager.bindGroupLayout;
  }

  get bindGroup(): GPUBindGroup {
    return this._uniformManager.bindGroup;
  }

  get entryPoint() {
    return this._options.entryPoint;
  }
}
