import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { mat4, vec2, Vec2, vec3 } from "wgpu-matrix";
import { UniformManager } from "./uniform-manager";

export class Scene extends Transform {
    private _uniformManager: UniformManager;

    constructor(device: GPUDevice) {
        super();

        this._uniformManager = new UniformManager(
            device,
            [
                { name: "projection matrix", value: mat4.create() },
                { name: "view matrix", value: mat4.create() },
                { name: "camera position", value: vec3.create() },
                { name: "resolution", value: vec2.create(1, 1) },
                { name: "time", value: performance.now() / 1000 },
            ]
        );
    }

    update(camera: Camera, resolution: Vec2) {
        this._uniformManager.updateUniform({ name: "projection matrix", value: camera.projectionMatrix });
        this._uniformManager.updateUniform({ name: "view matrix", value: camera.viewMatrix });
        this._uniformManager.updateUniform({ name: "camera position", value: camera.position });
        this._uniformManager.updateUniform({ name: "resolution", value: resolution });
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
