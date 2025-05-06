import { Texture } from "./texture";
import { packUniforms, UniformObj, uploadUniformBuffer } from "./uniform-utils";

export class UniformManager {
    private _device: GPUDevice;
    private _uniforms?: UniformObj[];
    private _textures?: Texture[];
    private _uniformDirty = true;
    private _texturesDirty = true;

    private _uniformArr: ArrayBuffer;
    private _uniformBuffer: GPUBuffer;

    private _bindGroup: GPUBindGroup;
    private _bindGroupLayout: GPUBindGroupLayout;

    private _sampler: GPUSampler;

    private _label: string;

    constructor(device: GPUDevice, uniforms?: UniformObj[], textures?: Texture[], label?: string) {
        this._device = device;
        this._uniforms = uniforms;
        this._textures = textures;
        this._label = label;
    }

    updateUniform(uniform: UniformObj) {
        const toUpdate = this._uniforms?.find((u) => u.name === uniform.name);
        toUpdate.value = uniform.value;
        this._uniformDirty = true;
    }

    update() {
        if (this._uniformDirty) {
            this._uniformArr = packUniforms(this._uniforms || [], this._uniformArr);
            this._uniformBuffer = uploadUniformBuffer(this._uniformArr, this._device, this._label, this._uniformBuffer);
            this._uniformDirty = false;
        }

        if (this._texturesDirty) {
            (this._textures || []).forEach((t) => t.upload(this._device));
        }
    }

    get sampler(): GPUSampler {
        if (!this._sampler) {
            this._sampler = this._device.createSampler({
                magFilter: "linear",
                minFilter: "linear",
            });
        }

        return this._sampler;
    }

    get bindGroupLayoutDescriptor(): GPUBindGroupLayoutDescriptor {
        const entries = [];

        let binding = 0;
        const { _uniforms, _textures } = this;

        if (_uniforms?.length > 0) {
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

        if (_textures?.length > 0) {
            entries.push({
                binding,
                visibility: GPUShaderStage.FRAGMENT,
                sampler: { type: "filtering" },
            });

            binding++;

            for (let i = 0; i < _textures?.length; i++) {
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
        const { _uniforms, _textures } = this;

        const entries = [];

        if (_uniforms?.length > 0) {
            entries.push({
                binding,
                resource: { buffer: this._uniformBuffer },
            });

            binding++;
        }

        if (_textures?.length > 0) {
            entries.push({
                binding,
                resource: this.sampler,
            });

            binding++;

            for (let i = 0; i < _textures?.length; i++) {
                entries.push({
                    binding: i + binding,
                    resource: _textures[i].view,
                });
            }
        }

        return {
            label: `${this._label} BindGroup`,
            layout: this.bindGroupLayout,
            entries,
        };
    }

    get bindGroup(): GPUBindGroup {
        if (this._bindGroup) {
            return this._bindGroup;
        }

        this._bindGroup = this._device.createBindGroup(this.bindGroupDescriptor);

        return this._bindGroup;
    }
}
