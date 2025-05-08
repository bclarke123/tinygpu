import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { Vec2 } from "wgpu-matrix";
export declare class Scene extends Transform {
    private _uniformManager;
    constructor(device: GPUDevice);
    update(camera: Camera, resolution: Vec2): void;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
}
