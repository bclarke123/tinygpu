import { Color } from "../color";
import { DefaultTexture, Texture } from "../texture";
import { Material } from "./material";
import { UniformManager } from "../uniform-manager";

import shaderHeader from "../shaders/header.wgsl";
import basicMaterialShader from "../shaders/basic-material.wgsl";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial extends Material {
  constructor(device: GPUDevice, options: BasicMaterialOptions = {}) {
    BasicMaterial.precompile(device);

    const uniformManager = new UniformManager(
      device,
      {
        uniforms: [
          {
            name: "color",
            value: options.color || new Color(1, 1, 1),
          },
        ],
        textures: [
          {
            texture: options.map || DefaultTexture.instance,
            dimension: "2d",
            accessType: "sample"
          }
        ],
        label: "BasicMaterial",
      }
    );

    super(uniformManager);
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
