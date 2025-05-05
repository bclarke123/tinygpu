import { mat4, Mat4 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { packUniforms, uploadUniformBuffer } from "./uniform-utils";

export class Mesh {
    material: Material;
    geometry: Geometry;
    matrix: Mat4;
    uniformArr: ArrayBuffer;

    _device: GPUDevice;
    _uniformBuffer?: GPUBuffer;
    _bindGroupLayout?: GPUBindGroupLayout;
    _bindGroup?: GPUBindGroup;

    constructor(device: GPUDevice, mat: Material, geo: Geometry) {
        this._device = device;
        this.material = mat;
        this.geometry = geo;
        this.matrix = mat4.identity();
    }

    get cacheKey(): string {
        return this.geometry.cacheKey + this.material.cacheKey;
    }

    get uniformBuffer(): ArrayBuffer {
        const uniforms = [
            { name: "model", value: this.matrix },
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

        const meshBindGroupLayout = this._device.createBindGroupLayout(layoutDescriptor);

        console.log("Created Mesh BindGroupLayout:", meshBindGroupLayout);
        return meshBindGroupLayout;
    }

    get bindGroup(): GPUBindGroup {
        const uniforms = this.uploadUniforms();

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

        return this._device.createBindGroup(layoutDescriptor);
    }
}
