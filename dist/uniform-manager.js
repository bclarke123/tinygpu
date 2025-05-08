"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniformManager = void 0;
const uniform_utils_1 = require("./uniform-utils");
class UniformManager {
    constructor(device, uniforms, textures, label) {
        this._uniformDirty = true;
        this._texturesDirty = true;
        this._device = device;
        this._uniforms = uniforms;
        this._textures = textures;
        this._label = label;
    }
    updateUniform(uniform) {
        var _a;
        const toUpdate = (_a = this._uniforms) === null || _a === void 0 ? void 0 : _a.find((u) => u.name === uniform.name);
        toUpdate.value = uniform.value;
        this.setUniformsDirty();
    }
    updateTextures(textures) {
        this._textures = textures;
        this._texturesDirty = true;
    }
    update() {
        if (this._uniformDirty) {
            this._uniformArr = (0, uniform_utils_1.packUniforms)(this._uniforms || [], this._uniformArr);
            this._uniformBuffer = (0, uniform_utils_1.uploadUniformBuffer)(this._uniformArr, this._device, this._label, this._uniformBuffer);
            this._uniformDirty = false;
        }
        if (this._texturesDirty) {
            (this._textures || []).forEach((t) => t.upload(this._device));
            this._texturesDirty = false;
        }
    }
    setTexturesDirty() {
        this._texturesDirty = true;
    }
    setUniformsDirty() {
        this._uniformDirty = true;
    }
    setDirty() {
        this.setTexturesDirty();
        this.setUniformsDirty();
    }
    get sampler() {
        if (!this._sampler) {
            this._sampler = this._device.createSampler({
                magFilter: "linear",
                minFilter: "linear",
            });
        }
        return this._sampler;
    }
    get bindGroupLayoutDescriptor() {
        const entries = [];
        let binding = 0;
        const { _uniforms, _textures } = this;
        if ((_uniforms === null || _uniforms === void 0 ? void 0 : _uniforms.length) > 0) {
            entries.push({
                binding: 0,
                visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                buffer: {
                    type: "uniform",
                    hasDynamicOffset: false,
                    minBindingSize: 0,
                },
            });
            binding++;
        }
        if ((_textures === null || _textures === void 0 ? void 0 : _textures.length) > 0) {
            entries.push({
                binding,
                visibility: GPUShaderStage.FRAGMENT,
                sampler: { type: "filtering" },
            });
            binding++;
            for (let i = 0; i < (_textures === null || _textures === void 0 ? void 0 : _textures.length); i++) {
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
        };
        return ret;
    }
    get bindGroupLayout() {
        if (this._bindGroupLayout) {
            return this._bindGroupLayout;
        }
        this._bindGroupLayout = this._device.createBindGroupLayout(this.bindGroupLayoutDescriptor);
        return this._bindGroupLayout;
    }
    get bindGroupDescriptor() {
        let binding = 0;
        const { _uniforms, _textures } = this;
        const entries = [];
        if ((_uniforms === null || _uniforms === void 0 ? void 0 : _uniforms.length) > 0) {
            entries.push({
                binding,
                resource: { buffer: this._uniformBuffer },
            });
            binding++;
        }
        if ((_textures === null || _textures === void 0 ? void 0 : _textures.length) > 0) {
            entries.push({
                binding,
                resource: this.sampler,
            });
            binding++;
            for (let i = 0; i < (_textures === null || _textures === void 0 ? void 0 : _textures.length); i++) {
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
    get bindGroup() {
        if (this._bindGroup) {
            return this._bindGroup;
        }
        this._bindGroup = this._device.createBindGroup(this.bindGroupDescriptor);
        return this._bindGroup;
    }
}
exports.UniformManager = UniformManager;
