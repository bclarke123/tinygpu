import { Material } from "./material";
import shaderHeader from "../shaders/header.wgsl";
import { packUniforms, UniformObj } from "../uniform-utils";
import { Texture } from "../texture";

export interface ShaderMaterialOptions {
  code: string;
  uniforms?: UniformObj[];
  textures?: Texture[];
}

export class ShaderMaterial extends Material {
  private _options: ShaderMaterialOptions;
  private _shaderModule: GPUShaderModule;
  private _uniformArr: ArrayBuffer;
  private _sampler: GPUSampler;

  constructor(device: GPUDevice, options: ShaderMaterialOptions) {
    super(device);
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

  get uniformBuffer(): ArrayBuffer {
    this._uniformArr = packUniforms(this._options.uniforms || []);
    return this._uniformArr;
  }

  get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
    const entries = [];

    let binding = 0;
    const { uniforms, textures } = this._options;

    if (uniforms?.length > 0) {
      entries.push({
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: {
          type: "uniform" as GPUBufferBindingType,
          hasDynamicOffset: false,
          minBindingSize: 0,
        },
      });
      binding++;
    }

    if (textures?.length > 0) {
      entries.push({
        binding,
        visibility: GPUShaderStage.FRAGMENT,
        sampler: { type: "filtering" },
      });

      binding++;

      for (let i = 0; i < textures?.length; i++) {
        entries.push({
          binding: i + binding,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "float",
            viewDimension: "2d",
            multisampled: false,
          },
        });
      }
    }

    const ret = {
      label: "Shader Material BindGroup Layout",
      entries,
    } as GPUBindGroupLayoutDescriptor;

    return ret;
  }

  get bindGroupDescriptor(): GPUBindGroupDescriptor {
    let binding = 0;
    const { uniforms, textures } = this._options;

    const entries = [];

    if (uniforms?.length > 0) {
      const uniformBuffer = this.uploadUniforms();

      entries.push({
        binding,
        resource: { buffer: uniformBuffer },
      });

      binding++;
    }

    if (textures?.length > 0) {
      if (!this._sampler) {
        this._sampler = this._device.createSampler({
          magFilter: "linear",
          minFilter: "linear",
        });
      }

      entries.push({
        binding,
        resource: this._sampler,
      });

      binding++;

      for (let i = 0; i < textures?.length; i++) {
        entries.push({
          binding: i + binding,
          resource: this._options.textures[i].view,
        });
      }
    }

    return {
      label: "Shader Material BindGroup",
      layout: this.bindGroupLayout,
      entries,
    };
  }
}
