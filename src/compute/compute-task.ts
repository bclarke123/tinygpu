import { vec3, Vec3 } from "wgpu-matrix";
import { Texture } from "../texture";

export interface ComputeBufferObj {
  type: GPUBufferBindingType;
  buffer: GPUBuffer;
}

export interface ComputeTextureObj {
  texture: Texture;
  accessType: "sample" | "storageRead" | "storageWrite" | "storageReadWrite";
  format?: GPUTextureFormat;
  dimension?: GPUTextureViewDimension;
}

export interface ComputeSamplerObj {
  type: GPUSamplerBindingType;
  sampler: GPUSampler;
}

export interface ComputeTaskOptions {
  label?: string;
  shader: GPUShaderModule;
  entryPoint: string;
  dispatchCount: Vec3;
  buffers?: ComputeBufferObj[];
  textures?: ComputeTextureObj[];
  samplers: ComputeSamplerObj[];
}

export class ComputeTask {
  private _options: ComputeTaskOptions;
  private _cacheKey: string;
  private _bindGroup: GPUBindGroup;
  private _bindGroupLayout: GPUBindGroupLayout;

  constructor(options: ComputeTaskOptions) {
    this._options = options;
  }

  get cacheKey() {
    if (this._cacheKey) {
      return this._cacheKey;
    }

    const keys = [
      this.label,
      this._options.shader.label,
      this._options.entryPoint,
    ];

    for (const buf of this._options.buffers || []) {
      keys.push(buf.buffer.label);
    }

    for (const tex of this._options.textures || []) {
      keys.push(tex.texture.label);
    }

    this._cacheKey = keys.join(":");

    return this._cacheKey;
  }

  get shaderModule(): GPUShaderModule {
    return this._options.shader;
  }

  get label(): string {
    return this._options.label || "Compute Task";
  }

  get dispatchCount(): Vec3 {
    return this._options.dispatchCount || vec3.create(8, 8, 1);
  }

  get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
    const entries: GPUBindGroupLayoutEntry[] = [];

    let binding = 0;
    const { textures, buffers, samplers } = this._options;

    if (samplers?.length > 0) {
      for (let i = 0; i < samplers?.length; i++) {
        entries.push({
          binding,
          visibility: GPUShaderStage.COMPUTE,
          sampler: {
            type: samplers[i].type,
          },
        });

        binding++;
      }
    }

    if (textures?.length > 0) {
      for (let i = 0; i < textures?.length; i++) {
        if (textures[i].accessType === "sample") {
          entries.push({
            binding,
            visibility: GPUShaderStage.COMPUTE,
            texture: {
              sampleType: "float",
              viewDimension: textures[i].dimension,
              multisampled: false,
            },
          });
        } else {
          const { accessType } = textures[i];
          const access =
            accessType === "storageReadWrite"
              ? "read-write"
              : accessType === "storageWrite"
                ? "write-only"
                : "read-only";
          const format = textures[i].format || textures[i].texture.format
          entries.push({
            binding,
            visibility: GPUShaderStage.COMPUTE,
            storageTexture: {
              access,
              format,
              viewDimension: textures[i].dimension,
            },
          });
        }

        binding++;
      }
    }

    if (buffers?.length > 0) {
      for (let i = 0; i < buffers?.length; i++) {
        entries.push({
          binding,
          visibility: GPUShaderStage.COMPUTE,
          buffer: { type: buffers[i].type },
        });

        binding++;
      }
    }

    const ret = {
      label: `${this.label} BindGroup Layout`,
      entries,
    };

    return ret;
  }

  get bindGroupEntries(): GPUBindGroupEntry[] {
    let binding = 0;
    const { textures, buffers, samplers } = this._options;

    const entries = [];

    if (samplers?.length > 0) {
      for (let i = 0; i < samplers?.length; i++) {
        entries.push({
          binding,
          resource: samplers[i].sampler,
        });

        binding++;
      }
    }

    if (textures?.length > 0) {
      for (let i = 0; i < textures?.length; i++) {
        entries.push({
          binding,
          resource: textures[i].texture.view,
        });

        binding++;
      }
    }

    if (buffers?.length > 0) {
      for (let i = 0; i < buffers?.length; i++) {
        entries.push({
          binding,
          resource: { buffer: buffers[i].buffer },
        });

        binding++;
      }
    }

    return entries;
  }

  getBindGroupLayout(device: GPUDevice): GPUBindGroupLayout {
    if (this._bindGroupLayout) {
      return this._bindGroupLayout;
    }

    this._bindGroupLayout = device.createBindGroupLayout(
      this.bindGroupLayoutDescriptor,
    );

    return this._bindGroupLayout;
  }

  getBindGroup(device: GPUDevice): GPUBindGroup {
    if (this._bindGroup) {
      return this._bindGroup;
    }

    this._bindGroup = device.createBindGroup({
      label: this.label,
      layout: this._bindGroupLayout,
      entries: this.bindGroupEntries,
    });

    return this._bindGroup;
  }
}
