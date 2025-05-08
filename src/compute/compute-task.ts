import { UniformObj } from "../uniform-utils";

export interface ComputeBufferObj {
  writable: boolean;
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

  get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
    const ret = {
      label: `${this._options.label || "ComputeTask"} BindGroup Layout`,
      entries: [],
    };

    // add uniforms, buffers, textures, samplers

    return ret;
  }
}
