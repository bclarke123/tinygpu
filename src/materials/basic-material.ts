import { Color } from "../color";
import { DefaultTexture, Texture } from "../texture";

import basicMaterialShader from "../shaders/basic-material.wgsl";
import { Material } from "./material";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial extends Material {
  private _color: Color;
  private _map: Texture | null;

  constructor(device: GPUDevice, options: BasicMaterialOptions = {}) {
    super(device);
    this._color = options.color || new Color(1, 1, 1);
    this._map = options.map || DefaultTexture.instance;
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

  // get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
  //   return {
  //     label: "basic-material-bind-group-layout",
  //     entries: [
  //       {
  //         binding: 0,
  //         visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
  //         buffer: {
  //           type: "uniform",
  //           hasDynamicOffset: false,
  //           minBindingSize: 0,
  //         },
  //       },
  //       {
  //         binding: 1,
  //         visibility: GPUShaderStage.FRAGMENT,
  //         texture: {
  //           sampleType: "float",
  //           viewDimension: "2d",
  //           multisampled: false,
  //         },
  //       },
  //       {
  //         binding: 2,
  //         visibility: GPUShaderStage.FRAGMENT,
  //         sampler: {
  //           type: "filtering",
  //         },
  //       },
  //     ],
  //   }
  // }

  // getBindGroupDescriptor(): GPUBindGroupDescriptor {

  //   const bgl = this.bindGroupLayoutDescriptor;

  //   return {
  //     label: "basic-material-bind-group",
  //     entries: [
  //       {
  //         binding: 0,
  //         resource: {
  //           buffer: this._color.buffer,
  //         },
  //       },
  //       {
  //         binding: 1,
  //         resource: this._map!.view,
  //       },
  //       {
  //         binding: 2,
  //         resource: this._map!.sampler,
  //       },
  //     ],
  //   }
  // }

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

      console.log("BasicMaterial shader module compiled", BasicMaterial.shaderModule);
    }
  }
}
