import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";
export declare class Mesh extends Transform {
    _device: GPUDevice;
    _uniformManager: UniformManager;
    _instances: number;
    material: Material;
    geometry: Geometry;
    constructor(device: GPUDevice, mat: Material, geo: Geometry, instances?: number, buffers?: UniformBufferItem[]);
    get cacheKey(): string;
    update(): void;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
    get bufferLayout(): GPUVertexBufferLayout[];
    get buffers(): UniformBufferItem[];
    get instanceCount(): number;
}
