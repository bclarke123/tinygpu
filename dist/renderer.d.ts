import { Vec2 } from "wgpu-matrix";
import { Camera } from "./camera/camera";
import { OrthographicCamera, OrthographicCameraProps } from "./camera/orthographic-camera";
import { PerspectiveCamera, PerspectiveCameraProps } from "./camera/perspective-camera";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Mesh } from "./mesh";
import { Scene } from "./scene";
import { ComputeTask } from "./compute/compute-task";
export interface RendererOptions {
    canvas?: HTMLCanvasElement;
}
export declare class Renderer {
    device?: GPUDevice;
    adapter: GPUAdapter | null;
    depthFormat: GPUTextureFormat;
    format: GPUTextureFormat;
    canvas?: HTMLCanvasElement;
    context?: GPUCanvasContext;
    resizeObserver: ResizeObserver;
    depthTexture: GPUTexture;
    depthTextureView: GPUTextureView;
    canvasSize: Vec2;
    sizeDirty: boolean;
    commandEncoder?: GPUCommandEncoder;
    queue?: GPUQueue;
    private _pipelineCache;
    private _computePipelineCache;
    constructor(options?: RendererOptions);
    init(): Promise<void>;
    initCanvas(canvas?: HTMLCanvasElement): void;
    createBuffer<T extends Float32Array | Uint16Array | Uint8Array>(arr: T, usage: number): GPUBuffer;
    pipelineFor(scene: Scene, mesh: Mesh): GPURenderPipeline;
    render(scene: Scene, camera: Camera): void;
    computePipelineFor(task: ComputeTask): GPUComputePipeline;
    compute(tasks: ComputeTask[]): void;
    createMaterial<T extends Material, O>(c: new (device: GPUDevice, o?: O) => T, o?: O): T;
    createGeometry<T extends Geometry>(c: new (renderer: Renderer) => T): T;
    createMesh(geo: Geometry, mat: Material): Mesh;
    createScene(): Scene;
    createPerspectiveCamera(options?: PerspectiveCameraProps): PerspectiveCamera;
    createOrthographicCamera(options?: OrthographicCameraProps): OrthographicCamera;
}
