import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformManager } from "./uniform-manager";

export class Mesh extends Transform {
    _device: GPUDevice;
    _uniformManager: UniformManager;

    material: Material;
    geometry: Geometry;

    constructor(device: GPUDevice, mat: Material, geo: Geometry) {
        super();
        this._device = device;
        this.material = mat;
        this.geometry = geo;

        this._uniformManager = new UniformManager(device,
            [{ name: "model", value: this.worldMatrix }],
            [],
            "Mesh"
        );
    }

    get cacheKey(): string {
        return `${this.geometry.cacheKey}-${this.material.cacheKey}`;
    }

    update() {
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

}
