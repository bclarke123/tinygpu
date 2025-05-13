import { Texture } from "./texture";
import { packUniforms, UniformItem, uploadUniformBuffer } from "./uniform-utils";

export interface UniformBufferAttribute {
    offset: number;
    format: string;
}

export interface UniformBufferItem {
    type: GPUBufferBindingType;
    buffer: GPUBuffer;
    attributes?: UniformBufferAttribute[];
    visibility?: GPUShaderStageFlags;
    stepMode?: GPUVertexStepMode;
    stride?: number;
}

export interface UniformTextureItem {
    texture: Texture;
    accessType?: GPUStorageTextureAccess | "sample";
    visibility?: GPUShaderStageFlags;
    format?: GPUTextureFormat;
    dimension?: GPUTextureViewDimension;
}

export interface UniformSamplerItem {
    type: GPUSamplerBindingType;
    visibility?: GPUShaderStageFlags;
    sampler: GPUSampler;
}

export interface UniformManagerOptions {
    uniforms?: UniformItem[];
    textures?: UniformTextureItem[];
    buffers?: UniformBufferItem[];
    samplers?: UniformSamplerItem[];
    label?: string;
    uniformVisibility?: GPUShaderStageFlags;
}

export class UniformManager {
    private _device: GPUDevice;
    private _uniforms?: UniformItem[];
    private _textures?: UniformTextureItem[];
    private _buffers?: UniformBufferItem[];

    private _uniformsDirty = true;
    private _texturesDirty = true;
    private _buffersDirty = true;

    private _uniformArr: ArrayBuffer;
    private _uniformBuffer: GPUBuffer;

    private _bindGroup: GPUBindGroup;
    private _bindGroupLayout: GPUBindGroupLayout;

    private _samplers: UniformSamplerItem[];

    private _label: string;
    private _cacheKey: string;

    private uniformVisibility: GPUShaderStageFlags = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT;

    constructor(device: GPUDevice, options: UniformManagerOptions) {
        this._device = device;

        const { uniforms, textures, buffers, samplers, label, uniformVisibility } = options;

        this._uniforms = uniforms;
        this._textures = textures;
        this._buffers = buffers;
        this._samplers = samplers;

        this._label = label;
        this._uniformsDirty = true;
        this._texturesDirty = true;

        if (uniformVisibility) {
            this.uniformVisibility = uniformVisibility;
        }

        // If you cannot afford a sampler, one will be appointed for you.
        if ((this._samplers || []).length < 1 && (this._textures || []).length > 0) {
            this._samplers = [
                {
                    sampler: this._device.createSampler({
                        magFilter: "linear",
                        minFilter: "linear",
                    }),
                    type: "filtering"
                }
            ];
        }
    }

    get cacheKey() {
        if (this._cacheKey) {
            return this._cacheKey;
        }

        const keys = [
            this._label,
        ];

        for (const uniform of this._uniforms || []) {
            keys.push(uniform.name);
        }

        for (const tex of this._textures || []) {
            keys.push(tex.texture.label);
        }

        for (const buf of this._buffers || []) {
            keys.push(buf.buffer.label);
        }

        for (const sampler of this._samplers || []) {
            keys.push(sampler.sampler.label);
        }

        this._cacheKey = keys.join(":");

        return this._cacheKey;
    }

    updateUniform(uniform: UniformItem) {
        const toUpdate = this._uniforms?.find((u) => u.name === uniform.name);
        toUpdate.value = uniform.value;
        this.setUniformsDirty();
    }

    updateUniforms(uniforms?: UniformItem[]) {
        this._uniforms = uniforms;
        this.setUniformsDirty();
    }

    updateTextures(textures?: UniformTextureItem[]) {
        this._textures = textures;
        this.setTexturesDirty();
    }

    updateBuffers(buffers?: UniformBufferItem[]) {
        this._buffers = buffers;
        this.setBuffersDirty();
    }

    update() {
        if (this._uniformsDirty) {
            this._uniformArr = packUniforms(this._uniforms || [], this._uniformArr);
            this._uniformBuffer = uploadUniformBuffer(this._uniformArr, this._device, this._label, this._uniformBuffer);
            this._uniformsDirty = false;
        }

        if (this._texturesDirty) {
            (this._textures || []).forEach((t) => t.texture.upload(this._device));
            this._texturesDirty = false;
        }

        if (this._buffersDirty) {
            this._bindGroup = undefined;
            this._bindGroupLayout = undefined;
        }
    }

    setTexturesDirty() {
        this._texturesDirty = true;
    }

    setUniformsDirty() {
        this._uniformsDirty = true;
    }

    setBuffersDirty() {
        this._buffersDirty = true;
    }

    setDirty() {
        this.setTexturesDirty();
        this.setUniformsDirty();
    }

    get buffers(): UniformBufferItem[] {
        return this._buffers;
    }

    get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
        const entries = [];

        let binding = 0;
        const { _uniforms, _textures, _samplers, _buffers } = this;

        if (_uniforms?.length > 0) {
            entries.push({
                binding: 0,
                visibility: this.uniformVisibility,
                buffer: {
                    type: "uniform",
                    hasDynamicOffset: false,
                    minBindingSize: 0,
                },
            });

            binding++;
        }

        if (_samplers?.length > 0) {
            const defaultVis = GPUShaderStage.FRAGMENT;
            for (let i = 0; i < _samplers.length; i++) {
                entries.push({
                    binding,
                    visibility: _samplers[i].visibility || defaultVis,
                    sampler: { type: _samplers[i].type },
                });

                binding++;
            }
        }

        if (_textures?.length > 0) {
            const defaultVis = GPUShaderStage.FRAGMENT;
            for (let i = 0; i < _textures?.length; i++) {
                const tex = _textures[i];
                const viewDimension = tex.dimension || tex.texture.dimension;

                if (tex.accessType === "sample") {
                    entries.push({
                        binding,
                        visibility: tex.visibility || defaultVis,
                        texture: {
                            sampleType: "float",
                            viewDimension,
                            multisampled: false,
                        },
                    });
                } else {
                    const access = tex.accessType;
                    const format = tex.format || tex.texture.format;

                    entries.push({
                        binding,
                        visibility: tex.visibility || defaultVis,
                        storageTexture: {
                            access,
                            format,
                            viewDimension,
                        },
                    });
                }

                binding++;
            }
        }

        if (_buffers?.length > 0) {
            for (let i = 0; i < _buffers?.length; i++) {
                entries.push({
                    binding,
                    visibility: _buffers[i].visibility,
                    buffer: { type: _buffers[i].type },
                });

                binding++;
            }
        }

        const ret = {
            label: `${this._label} BindGroup Layout`,
            entries,
        } as GPUBindGroupLayoutDescriptor;

        return ret;
    }

    get bindGroupLayout(): GPUBindGroupLayout {
        if (this._bindGroupLayout) {
            return this._bindGroupLayout;
        }

        this._bindGroupLayout = this._device.createBindGroupLayout(this.bindGroupLayoutDescriptor);

        return this._bindGroupLayout;
    }

    get bindGroupDescriptor(): GPUBindGroupDescriptor {
        let binding = 0;
        const { _uniforms, _textures, _samplers, _buffers } = this;

        const entries = [];

        if (_uniforms?.length > 0) {
            entries.push({
                binding,
                resource: { buffer: this._uniformBuffer },
            });

            binding++;
        }

        if (_samplers?.length > 0) {
            for (let i = 0; i < _samplers.length; i++) {
                entries.push({
                    binding,
                    resource: _samplers[i].sampler,
                });

                binding++;
            }
        }

        if (_textures?.length > 0) {
            for (let i = 0; i < _textures?.length; i++) {
                entries.push({
                    binding: i + binding,
                    resource: _textures[i].texture.view,
                });
            }
        }

        if (_buffers?.length > 0) {
            for (let i = 0; i < _buffers?.length; i++) {
                entries.push({
                    binding,
                    resource: { buffer: _buffers[i].buffer },
                });

                binding++;
            }
        }

        const ret = {
            label: `${this._label} BindGroup`,
            layout: this.bindGroupLayout,
            entries,
        };

        return ret;
    }

    get bindGroup(): GPUBindGroup {
        if (this._bindGroup) {
            return this._bindGroup;
        }

        this._bindGroup = this._device.createBindGroup(this.bindGroupDescriptor);

        return this._bindGroup;
    }
}
