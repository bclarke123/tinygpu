import { mat4, Mat4 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { packUniforms, uploadUniformBuffer } from "./uniform-utils";

export class Mesh {
    material: Material;
    geometry: Geometry;
    pipeline: GPURenderPipeline;
    matrix: Mat4;
    uniformArr: ArrayBuffer;

    _device: GPUDevice;
    _uniformBuffer?: GPUBuffer;

    constructor(device: GPUDevice, mat: Material, geo: Geometry, pipeline: GPURenderPipeline) {
        this._device = device;
        this.material = mat;
        this.geometry = geo;
        this.pipeline = pipeline;
        this.matrix = mat4.identity();
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

    bindGroupDescriptor(layout: GPUBindGroupLayout): GPUBindGroupDescriptor {
        const uniforms = this.uploadUniforms();

        return {
            layout,
            entries: [
                {
                    binding: 0,
                    resource: { buffer: uniforms },
                }
            ]
        }
    }
}
