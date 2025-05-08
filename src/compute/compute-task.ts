import { UniformObj } from "../uniform-utils";

export interface ComputeBufferObj {
  type: GPUBufferBindingType,
  buffer: GPUBuffer;
}

export interface ComputeTaskOptions {
  label?: string;
  shader: GPUShaderModule;
  entryPoint: string;
  buffers?: ComputeBufferObj[];
  textures?: GPUTexture[];
  uniforms?: UniformObj[];
}

export class ComputeTask {
  private _options: ComputeTaskOptions;
  private _cacheKey: string;
  private _sampler: GPUSampler;

  constructor(options: ComputeTaskOptions) {
    this._options = options;
  }

  get cacheKey() {
    if (this._cacheKey) {
      return this._cacheKey;
    }

    const keys = [
      "ComputeTask",
      this._options.shader.label,
      this._options.entryPoint,
    ];

    for (const buf of this._options.buffers) {
      keys.push(buf.buffer.label);
    }

    for (const tex of this._options.textures) {
      keys.push(tex.label);
    }

    this._cacheKey = keys.join(":");

    return this._cacheKey;
  }

  get shaderModule(): GPUShaderModule {
    return this._options.shader;
  }

  getPipelineLayout(device: GPUDevice): GPUPipelineLayoutDescriptor {

    const bindGroupLayoutDescriptor = this.bindGroupLayoutDescriptor;
    const bindGroupLayout = device.createBindGroupLayout({
      label: `${this._options.label} BindGroup Layout`,
      entries: bindGroupLayoutDescriptor
    });

    return {
      label: `${this._options.label} Pipeline Layout Descriptor`,
      bindGroupLayouts: [bindGroupLayout]
    };
  }

  get bindGroupLayoutDescriptor(): GPUBindGroupLayoutEntry[] {
    const entries = [];

    let binding = 0;
    const { uniforms, textures, buffers } = this._options;

    if (uniforms?.length > 0) {
      entries.push({
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
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
        visibility: GPUShaderStage.COMPUTE,
        sampler: { type: "filtering" },
      });

      binding++;

      for (let i = 0; i < textures?.length; i++) {
        entries.push({
          binding,
          visibility: GPUShaderStage.COMPUTE,
          texture: {
            sampleType: "float",
            viewDimension: "2d",
            multisampled: false,
          },
        });

        binding++;
      }
    }

    if (buffers?.length > 0) {
      for (let i = 0; i < buffers?.length; i++) {
        entries.push({
          binding,
          visibility: GPUShaderStage.COMPUTE,
          buffer: { type: buffers[i].type }
        });

        binding++;
      }
    }

    return entries;
  }
}
