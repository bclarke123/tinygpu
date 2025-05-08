import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformManager } from "./uniform-manager";
export declare class Mesh extends Transform {
    _device: GPUDevice;
    _uniformManager: UniformManager;
    material: Material;
    geometry: Geometry;
    constructor(device: GPUDevice, mat: Material, geo: Geometry);
    get cacheKey(): string;
    update(): void;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
}
