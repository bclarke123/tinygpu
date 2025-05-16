import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { Vec2 } from "wgpu-matrix";
import { Renderer } from "./renderer";
export declare class Scene extends Transform {
    private _uniformManager;
    private _lightManager;
    constructor(renderer: Renderer);
    update(camera: Camera, resolution: Vec2): void;
    get bindGroupLayout(): GPUBindGroupLayout;
    get bindGroup(): GPUBindGroup;
    updateLights(): void;
}
