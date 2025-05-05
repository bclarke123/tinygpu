import { Color } from "../color";
import { DefaultTexture, Texture } from "../texture";

import basicMaterialShader from "../shaders/basic-material.wgsl";
import { Material } from "./material";
import { mat4 } from "wgpu-matrix";
import { packUniforms } from "../uniform-utils";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial extends Material {
  private _color: Color;
  private _map: Texture | null;
  private _uniformArr?: ArrayBuffer;

  constructor(device: GPUDevice, options: BasicMaterialOptions = {}) {
    super(device);
    this._color = options.color || new Color(1, 1, 1);
    this._map = options.map || DefaultTexture.instance;
    this._map.upload(device);
  }

  get cacheKey(): string {
    return "basic-material";
  }

  get color(): Color {
    return this._color;
  }

  get map(): Texture | null {
    return this._map;
  }

  get uniformBuffer(): ArrayBuffer {
    const uniforms = [
      { name: "model", value: mat4.identity() },
      { name: "color", value: this._color.uniformValue() },
    ];

    this._uniformArr = packUniforms(uniforms);

    return this._uniformArr;
  }

  bindGroupDescriptor(layout: GPUBindGroupLayout): GPUBindGroupDescriptor {
    const uniforms = this.uploadUniforms();

    return {
      layout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniforms },
        },
        {
          binding: 1,
          resource: this.map.sampler,
        },
        {
          binding: 2,
          resource: this.map.view,
        },
      ],
    };
  }

  get shaderCode(): GPUShaderModule {
    if (!BasicMaterial.shaderModule) {
      throw new Error("Shader module not compiled");
    }
    return BasicMaterial.shaderModule;
  }

  static shaderModule: GPUShaderModule | null = null;
  static precompile(device: GPUDevice) {
    if (!BasicMaterial.shaderModule) {
      BasicMaterial.shaderModule = device.createShaderModule({
        label: "basic-material-shader",
        code: basicMaterialShader,
      });
    }
  }
}
