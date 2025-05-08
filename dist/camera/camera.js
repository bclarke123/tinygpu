"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
const transform_1 = require("../transform");
class Camera extends transform_1.Transform {
    constructor() {
        super();
        // --- Dirty Flags ---
        this._isProjectionDirty = true;
        this._isViewDirty = true;
        // Initialize matrices using wgpu-matrix identity
        this._projectionMatrix = wgpu_matrix_1.mat4.identity();
        this._viewMatrix = wgpu_matrix_1.mat4.identity();
        // Mark as dirty initially to force calculation on first access
        this._isProjectionDirty = true;
        this._isViewDirty = true;
    }
    // --- Getters for Matrices (with lazy calculation) ---
    get projectionMatrix() {
        if (this._isProjectionDirty) {
            this.updateProjectionMatrix();
        }
        return this._projectionMatrix;
    }
    get viewMatrix() {
        if (this._isViewDirty) {
            this.updateViewMatrix();
        }
        return this._viewMatrix;
    }
    // Optional: Method to force update both matrices if needed
    updateMatrices() {
        if (this._isProjectionDirty) {
            this.updateProjectionMatrix();
        }
        if (this._isViewDirty) {
            this.updateViewMatrix();
        }
    }
}
exports.Camera = Camera;
