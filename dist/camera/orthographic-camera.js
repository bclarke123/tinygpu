"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrthographicCamera = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
const camera_1 = require("./camera");
class OrthographicCamera extends camera_1.Camera {
    constructor({ left = -1, // Default frustum spans -1 to 1 in X and Y
    right = 1, bottom = -1, top = 1, near = 0.1, far = 1000.0, position = wgpu_matrix_1.vec3.create(0, 0, 10), // Default position
    target = wgpu_matrix_1.vec3.create(0, 0, 0), // Default target (origin)
    up = wgpu_matrix_1.vec3.create(0, 1, 0) // Default up vector (Y-axis)
     } = {}) {
        super();
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
        this.near = near;
        this.far = far;
        // Use create if available, otherwise copy
        this.position = wgpu_matrix_1.vec3.clone(position);
        this.target = wgpu_matrix_1.vec3.clone(target);
        this.up = wgpu_matrix_1.vec3.clone(up);
    }
    // --- Methods to Update Matrices ---
    updateProjectionMatrix() {
        console.log("Updating Orthographic Projection Matrix using wgpu-matrix"); // For debugging
        // Use wgpu-matrix ortho function
        // mat4.ortho(left, right, bottom, top, near, far, destinationMatrix?)
        // It returns a new matrix if destination is not provided.
        this._projectionMatrix = wgpu_matrix_1.mat4.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far
        // Optionally pass this._projectionMatrix as the last argument
        // mat4.ortho(this.left, ..., this.far, this._projectionMatrix);
        );
        this._isProjectionDirty = false;
    }
    updateViewMatrix() {
        console.log("Updating View Matrix using wgpu-matrix"); // For debugging
        // Use wgpu-matrix lookAt function
        this._viewMatrix = wgpu_matrix_1.mat4.lookAt(this.position, this.target, this.up
        // Optionally pass this._viewMatrix as the last argument
        // mat4.lookAt(this.position, this.target, this.up, this._viewMatrix);
        );
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
    // Setters for orthographic properties
    setLeft(newLeft) {
        if (this.left !== newLeft) {
            this.left = newLeft;
            this._isProjectionDirty = true;
        }
    }
    setRight(newRight) {
        if (this.right !== newRight) {
            this.right = newRight;
            this._isProjectionDirty = true;
        }
    }
    setBottom(newBottom) {
        if (this.bottom !== newBottom) {
            this.bottom = newBottom;
            this._isProjectionDirty = true;
        }
    }
    setTop(newTop) {
        if (this.top !== newTop) {
            this.top = newTop;
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
    viewportResized(_) {
        // nop
    }
}
exports.OrthographicCamera = OrthographicCamera;
