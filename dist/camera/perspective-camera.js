"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerspectiveCamera = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
const camera_1 = require("./camera");
class PerspectiveCamera extends camera_1.Camera {
    constructor({ fov = Math.PI / 4, // Default: 45 degrees FOV
    aspect = 16 / 9, // Default: Common aspect ratio
    near = 0.1, far = 1000.0, position = wgpu_matrix_1.vec3.create(0, 0, 10), // Use vec3.create for default
    target = wgpu_matrix_1.vec3.create(0, 0, 0), // Use vec3.create for default
    up = wgpu_matrix_1.vec3.create(0, 1, 0) // Use vec3.create for default
     } = {}) {
        super();
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        // Use create if available, otherwise copy
        this.position = wgpu_matrix_1.vec3.clone(position);
        this.target = wgpu_matrix_1.vec3.clone(target);
        this.up = wgpu_matrix_1.vec3.clone(up);
    }
    // --- Methods to Update Matrices ---
    updateProjectionMatrix() {
        console.log("Updating Projection Matrix using wgpu-matrix");
        this._projectionMatrix = wgpu_matrix_1.mat4.perspective(this.fov, this.aspect, this.near, this.far);
        this._isProjectionDirty = false;
    }
    updateViewMatrix() {
        console.log("Updating View Matrix using wgpu-matrix");
        this._viewMatrix = wgpu_matrix_1.mat4.lookAt(this.position, this.target, this.up);
        this._isViewDirty = false;
    }
    // --- Methods to Modify Camera Properties (and mark dirty) ---
    // Using vec3.equals for comparison and vec3.copy for setting
    setPosition(newPosition) {
        if (!wgpu_matrix_1.vec3.equals(this.position, newPosition)) {
            // Use copy to avoid modifying the input array if it's reused elsewhere
            this.position = wgpu_matrix_1.vec3.copy(newPosition, this.position); // copy(src, dst?)
            this._isViewDirty = true;
        }
    }
    setTarget(newTarget) {
        if (!wgpu_matrix_1.vec3.equals(this.target, newTarget)) {
            this.target = wgpu_matrix_1.vec3.copy(newTarget, this.target);
            this._isViewDirty = true;
        }
    }
    setUp(newUp) {
        if (!wgpu_matrix_1.vec3.equals(this.up, newUp)) {
            this.up = wgpu_matrix_1.vec3.copy(newUp, this.up);
            this._isViewDirty = true;
        }
    }
    setFov(newFov) {
        if (this.fov !== newFov) {
            this.fov = newFov;
            this._isProjectionDirty = true;
        }
    }
    setAspect(newAspect) {
        if (this.aspect !== newAspect) {
            this.aspect = newAspect;
            this._isProjectionDirty = true;
        }
    }
    setNear(newNear) {
        if (this.near !== newNear) {
            this.near = newNear;
            this._isProjectionDirty = true;
        }
    }
    setFar(newFar) {
        if (this.far !== newFar) {
            this.far = newFar;
            this._isProjectionDirty = true;
        }
    }
    viewportResized(size) {
        this.setAspect(size[0] / size[1]);
    }
}
exports.PerspectiveCamera = PerspectiveCamera;
