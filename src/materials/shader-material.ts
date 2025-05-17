import { Material } from "./material";
import { UniformItem } from "../uniform-utils";
import { UniformBufferItem, UniformManager, UniformSamplerItem, UniformTextureItem } from "../uniform-manager";

import shaderHeader from "../shaders/header.wgsl";

export interface ShaderMaterialOptions {
  code: string;
  uniforms?: UniformItem[];
  textures?: UniformTextureItem[];
  buffers?: UniformBufferItem[];
  samplers?: UniformSamplerItem[];
}

export class ShaderMaterial extends Material {
  private _options: ShaderMaterialOptions;
  private _shaderModule: GPUShaderModule;

  constructor(device: GPUDevice, options: ShaderMaterialOptions) {
    const uniformManager = new UniformManager(
      device,
      {
        uniforms: options.uniforms,
        textures: options.textures,
        buffers: options.buffers,
        samplers: options.samplers,
        label: "ShaderMaterial",
      }
    );

    super(uniformManager);
    this._options = options;

    this.compile(device);
  }

  compile(device: GPUDevice) {
    this._shaderModule = device.createShaderModule({
      label: "ShaderModule",
      code: `
${shaderHeader}
${this._options.code}
      `,
    });
  }

  get cacheKey(): string {
    return this._uniformManager.cacheKey + "-" + btoa(this._options.code);
  }

  get shaderCode(): GPUShaderModule {
    return this._shaderModule;
  }
}
