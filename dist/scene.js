"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const transform_1 = require("./transform");
const wgpu_matrix_1 = require("wgpu-matrix");
const uniform_manager_1 = require("./uniform-manager");
class Scene extends transform_1.Transform {
    constructor(device) {
        super();
        this._uniformManager = new uniform_manager_1.UniformManager(device, [
            { name: "projection matrix", value: wgpu_matrix_1.mat4.create() },
            { name: "view matrix", value: wgpu_matrix_1.mat4.create() },
            { name: "camera position", value: wgpu_matrix_1.vec3.create() },
            { name: "resolution", value: wgpu_matrix_1.vec2.create(1, 1) },
            { name: "time", value: performance.now() / 1000 },
        ]);
    }
    update(camera, resolution) {
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
exports.Scene = Scene;
