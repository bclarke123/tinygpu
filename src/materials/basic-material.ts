import { Color } from "../color";
import { DefaultTexture, Texture } from "../texture";

import shaderHeader from "../shaders/header.wgsl";
import basicMaterialShader from "../shaders/basic-material.wgsl";

import { Material } from "./material";
import { UniformManager } from "../uniform-manager";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial extends Material {
  constructor(device: GPUDevice, options: BasicMaterialOptions = {}) {
    const uniformManager = new UniformManager(
      device,
      [{ name: "color", value: (options.color || new Color(1, 1, 1)).uniformValue() }],
      [options.map || DefaultTexture.instance],
      "BasicMaterial"
    )

    super(device, uniformManager);
  }

  get cacheKey(): string {
    return "basic-material";
  }

  get shaderCode(): GPUShaderModule {
    return BasicMaterial.shaderModule;
  }

  static shaderModule: GPUShaderModule | null = null;
  static precompile(device: GPUDevice) {
    if (!BasicMaterial.shaderModule) {
      BasicMaterial.shaderModule = device.createShaderModule({
        label: "basic-material-shader",
        code: `
${shaderHeader}
${basicMaterialShader}
`,
      });
    }
  }
}
