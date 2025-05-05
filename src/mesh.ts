import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { packUniforms, uploadUniformBuffer } from "./uniform-utils";
import { Transform } from "./transform";

export class Mesh extends Transform {
    material: Material;
    geometry: Geometry;
    uniformArr: ArrayBuffer;

    _device: GPUDevice;
    _uniformBuffer?: GPUBuffer;
    _bindGroupLayout?: GPUBindGroupLayout;
    _bindGroup?: GPUBindGroup;

    constructor(device: GPUDevice, mat: Material, geo: Geometry) {
        super();
        this._device = device;
        this.material = mat;
        this.geometry = geo;
    }

    get cacheKey(): string {
        return this.geometry.cacheKey + this.material.cacheKey;
    }

    get uniformBuffer(): ArrayBuffer {
        const uniforms = [
            { name: "model", value: this.worldMatrix },
        ];

        this.uniformArr = packUniforms(uniforms);

        return this.uniformArr;
    }

    uploadUniforms(): GPUBuffer {
        this._uniformBuffer = uploadUniformBuffer(
            this.uniformBuffer,
            this._device,
            "Material uniform buffer",
            this._uniformBuffer,
        );
        return this._uniformBuffer;
    }

    get bindGroupLayout(): GPUBindGroupLayout {
        if (!this._bindGroupLayout) {
            const layoutDescriptor: GPUBindGroupLayoutDescriptor = {
                label: "Mesh Uniforms BindGroup Layout",
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                        buffer: {
                            type: 'uniform',
                            hasDynamicOffset: false,
                            minBindingSize: 0
                        }
                    }
                ]
            };

            this._bindGroupLayout = this._device.createBindGroupLayout(layoutDescriptor);

            console.log("Created Mesh BindGroupLayout:", this._bindGroupLayout);
        }
        return this._bindGroupLayout;
    }

    get bindGroup(): GPUBindGroup {
        const uniforms = this.uploadUniforms();

        if (!this._bindGroup) {
            const layoutDescriptor: GPUBindGroupDescriptor = {
                label: "Mesh BindGroup",
                layout: this.bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: { buffer: uniforms },
                    }
                ]
            }

            this._bindGroup = this._device.createBindGroup(layoutDescriptor);
        }

        return this._bindGroup;
    }
}
