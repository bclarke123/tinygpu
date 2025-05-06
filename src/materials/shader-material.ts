import { Material } from "./material";
import shaderHeader from "../shaders/header.wgsl";
import { UniformObj } from "../uniform-utils";
import { Texture } from "../texture";
import { UniformManager } from "../uniform-manager";

export interface ShaderMaterialOptions {
  code: string;
  uniforms?: UniformObj[];
  textures?: Texture[];
}

export class ShaderMaterial extends Material {
  private _options: ShaderMaterialOptions;
  private _shaderModule: GPUShaderModule;

  constructor(device: GPUDevice, options: ShaderMaterialOptions) {
    const uniformManager = new UniformManager(device, options.uniforms, options.textures, "ShaderMaterial");
    super(device, uniformManager);
    this._options = options;
  }

  get cacheKey(): string {
    return btoa(this._options.code);
  }

  get shaderCode(): GPUShaderModule {
    if (!this._shaderModule) {
      this._shaderModule = this._device.createShaderModule({
        label: "ShaderModule",
        code: `
  ${shaderHeader}
  ${this._options.code}
        `,
      });
    }

    return this._shaderModule;
  }

}
