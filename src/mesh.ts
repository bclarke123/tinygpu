import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";

export class Mesh extends Transform {
    _device: GPUDevice;
    _uniformManager: UniformManager;
    _instances: number;

    material: Material;
    geometry: Geometry;

    constructor(device: GPUDevice, mat: Material, geo: Geometry, instances: number = 1, buffers?: UniformBufferItem[]) {
        super();
        this._device = device;
        this.material = mat;
        this.geometry = geo;
        this._instances = instances;

        this._uniformManager = new UniformManager(device,
            [{ name: "model", value: this.worldMatrix }],
            [],
            buffers || [],
            "Mesh"
        );
    }

    get cacheKey(): string {
        return `${this.geometry.cacheKey}-${this.material.cacheKey}`;
    }

    update() {
        this.material.update();

        this._uniformManager.updateUniform({
            name: "model", value: this.worldMatrix
        });
        this._uniformManager.update();
    }

    get bindGroupLayout(): GPUBindGroupLayout {
        return this._uniformManager.bindGroupLayout;
    }

    get bindGroup(): GPUBindGroup {
        return this._uniformManager.bindGroup;
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        const layout = this.geometry.bufferLayout;
        const { buffers } = this._uniformManager;

        if (!(buffers && buffers.length > 0)) {
            return layout;
        }

        // geometry has reserved items 0 = position, 1 = uv, 2 = normal.
        // instance buffers start at 3.

        let shaderLocation = 3;

        for (let i = 0; i < buffers.length; i++) {
            const attributes = [];
            const buffer = buffers[i];

            for (let x = 0; x < buffer.attributes.length; x++) {
                attributes.push({
                    shaderLocation: shaderLocation++,
                    offset: buffer.attributes[x].offset,
                    format: buffer.attributes[x].format
                });
            }

            layout.push({
                attributes,
                arrayStride: buffer.stride,
                stepMode: buffer.stepMode
            });
        }

        return layout;
    }

    get buffers(): UniformBufferItem[] {
        return this._uniformManager.buffers;
    }

    get instanceCount(): number {
        return this._instances;
    }
}
