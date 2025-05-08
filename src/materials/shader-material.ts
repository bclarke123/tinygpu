import { Material } from "./material";
import { UniformObj } from "../uniform-utils";
import { Texture } from "../texture";
import { UniformManager } from "../uniform-manager";

import shaderHeader from "../shaders/header.wgsl";

export interface ShaderMaterialOptions {
  code: string;
  uniforms?: UniformObj[];
  textures?: Texture[];
}

export class ShaderMaterial extends Material {
  private _options: ShaderMaterialOptions;
  private _shaderModule: GPUShaderModule;

  constructor(device: GPUDevice, options: ShaderMaterialOptions) {
    const uniformManager = new UniformManager(
      device,
      options.uniforms,
      options.textures,
      "ShaderMaterial",
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
    return btoa(this._options.code);
  }

  get shaderCode(): GPUShaderModule {
    return this._shaderModule;
  }
}
