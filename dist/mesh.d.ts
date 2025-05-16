import { Mat3 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";
export declare class Mesh extends Transform {
    _device: GPUDevice;
    _uniformManager: UniformManager;
    _instances: number;
    _normalMatrix: Mat3;
    material: Material;
    geometry: Geometry;
    constructor(device: GPUDevice, mat: Material, geo: Geometry, instances?: number, buffers?: UniformBufferItem[]);
    get cacheKey(): string;
    update(): void;
    updateNormalMatrix(): void;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
    get bufferLayout(): GPUVertexBufferLayout[];
    get buffers(): UniformBufferItem[];
    get instanceCount(): number;
}
