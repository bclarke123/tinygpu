import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { mat4, vec2, Vec2, vec3 } from "wgpu-matrix";
import { UniformManager } from "./uniform-manager";

export class Scene extends Transform {
    private _device: GPUDevice;
    private _resolution: Vec2;
    private _canvas: HTMLCanvasElement;
    private _observer: ResizeObserver;
    private _uniformManager: UniformManager;

    constructor(device: GPUDevice, canvas: HTMLCanvasElement) {
        super();

        this._device = device;
        this._canvas = canvas;

        this._resolution = vec2.create();
        this.canvasResize();

        this._uniformManager = new UniformManager(
            device,
            [
                { name: "projection matrix", value: mat4.create() },
                { name: "view matrix", value: mat4.create() },
                { name: "camera position", value: vec3.create() },
                { name: "resolution", value: this._resolution },
                { name: "time", value: performance.now() / 1000 },
            ]
        );
    }

    bindCanvasResize() {
        this._observer = new ResizeObserver(this.canvasResize);
        this._observer.observe(this._canvas);
    }

    canvasResize() {
        this._resolution.set([this._canvas.offsetWidth, this._canvas.offsetHeight]);
    }

    update(camera: Camera) {
        this._uniformManager.updateUniform({ name: "projection matrix", value: camera.projectionMatrix });
        this._uniformManager.updateUniform({ name: "view matrix", value: camera.viewMatrix });
        this._uniformManager.updateUniform({ name: "camera position", value: camera.position });
        this._uniformManager.updateUniform({ name: "resolution", value: this._resolution });
        this._uniformManager.updateUniform({ name: "time", value: performance.now() / 1000 });

        this._uniformManager.update();
    }

    get bindGroupLayout() {
        return this._uniformManager.bindGroupLayout;
    }

    get bindGroup() {
        return this._uniformManager.bindGroup;
    }
}
