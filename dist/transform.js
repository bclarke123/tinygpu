"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
function compose(position, rotation, scale, dst) {
    if (!dst) {
        dst = wgpu_matrix_1.mat4.create();
    }
    const [x, y, z, w] = rotation;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const yy = y * y2;
    const zz = z * z2;
    const xy = x * y2;
    const xz = x * z2;
    const yz = y * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const [sx, sy, sz] = scale;
    dst[0] = (1 - (yy + zz)) * sx;
    dst[1] = (xy + wz) * sx;
    dst[2] = (xz - wy) * sx;
    dst[3] = 0;
    dst[4] = (xy - wz) * sy;
    dst[5] = (1 - (xx + zz)) * sy;
    dst[6] = (yz + wx) * sy;
    dst[7] = 0;
    dst[8] = (xz + wy) * sz;
    dst[9] = (yz - wx) * sz;
    dst[10] = (1 - (xx + yy)) * sz;
    dst[11] = 0;
    dst[12] = position[0];
    dst[13] = position[1];
    dst[14] = position[2];
    dst[15] = 1;
    return dst;
}
class Transform {
    constructor() {
        // Hierarchy
        this._children = [];
        this._position = wgpu_matrix_1.vec3.create(0, 0, 0);
        this._rotation = wgpu_matrix_1.quat.identity();
        this._scale = wgpu_matrix_1.vec3.create(1, 1, 1);
        this._localMatrix = wgpu_matrix_1.mat4.identity();
        this._worldMatrix = wgpu_matrix_1.mat4.identity();
        this._localDirty = true; // Needs initial calculation
        this._worldDirty = true; // Needs initial calculation
    }
    // --- Getters for Local Components ---
    get position() {
        return this._position; // Return stored local value
    }
    get quaternion() {
        return this._rotation; // Return stored local value
    }
    get scale() {
        return this._scale; // Return stored local value
    }
    // --- Setters for Local Components (Mark Dirty) ---
    set position(value) {
        if (!wgpu_matrix_1.vec3.equals(this._position, value)) {
            this._position = wgpu_matrix_1.vec3.copy(value, this._position);
            this.makeDirty();
        }
    }
    set quaternion(value) {
        if (!wgpu_matrix_1.quat.equals(this._rotation, value)) {
            this._rotation = wgpu_matrix_1.quat.copy(value, this._rotation);
            this.makeDirty();
        }
    }
    setRotation(xValue, yValue, zValue, order = "xyz") {
        this._rotation = wgpu_matrix_1.quat.fromEuler(xValue, yValue, zValue, order);
        this.makeDirty();
    }
    set scale(value) {
        if (!wgpu_matrix_1.vec3.equals(this._scale, value)) {
            this._scale = wgpu_matrix_1.vec3.copy(value, this._scale);
            this.makeDirty();
        }
    }
    // --- Matrix Getters (Update if Dirty) ---
    /** Gets the local transformation matrix, recalculating if necessary. */
    get localMatrix() {
        if (this._localDirty) {
            this.updateLocalMatrix();
        }
        return this._localMatrix;
    }
    /** Gets the world transformation matrix, recalculating if necessary. */
    get worldMatrix() {
        // Force update if local or world is dirty.
        // Getting parent.worldMatrix will recursively update the chain if needed.
        if (this._localDirty || this._worldDirty) {
            this.updateWorldMatrix();
        }
        return this._worldMatrix;
    }
    // --- Update Logic ---
    /** Recalculates the local matrix from position, rotation, and scale. */
    updateLocalMatrix() {
        compose(this._position, this._rotation, this._scale, this._localMatrix);
        this._localDirty = false;
        // World matrix also becomes dirty whenever local matrix changes
        this._worldDirty = true;
    }
    /** Recalculates the world matrix based on parent and local matrices. */
    updateWorldMatrix() {
        // Ensure local matrix is up-to-date first
        if (this._localDirty) {
            this.updateLocalMatrix(); // This will also set _worldDirty = true, which is fine
        }
        if (this._parent) {
            // Calculate world matrix: parentWorld * local
            wgpu_matrix_1.mat4.multiply(this._parent.worldMatrix, this.localMatrix, this._worldMatrix);
        }
        else {
            // No parent, world matrix is the same as local matrix
            wgpu_matrix_1.mat4.copy(this.localMatrix, this._worldMatrix);
        }
        this._worldDirty = false; // World matrix is now up-to-date
        // Important: Notify children that their world matrices are now dirty
        for (const child of this._children) {
            child._worldDirty = true; // Or call child.makeDirty() if it handles propagation
        }
    }
    /** Marks this transform and its descendants as dirty. */
    makeDirty() {
        this._localDirty = true;
        this._worldDirty = true;
        // Propagate dirtiness down the hierarchy
        for (const child of this._children) {
            // Avoid infinite loops if child already marked dirty by parent update
            if (!child._worldDirty) {
                child.makeWorldDirty(); // Child only needs world update, not necessarily local
            }
        }
    }
    /** Marks this transform's world matrix and descendants' world matrices as dirty. */
    makeWorldDirty() {
        if (!this._worldDirty) { // Avoid redundant propagation
            this._worldDirty = true;
            for (const child of this._children) {
                child.makeWorldDirty();
            }
        }
    }
    // --- Hierarchy Management ---
    get children() {
        return this._children;
    }
    add(child) {
        if (child._parent === this)
            return; // Already a child
        if (child._parent) {
            child._parent.remove(child); // Remove from previous parent
        }
        if (this._children.indexOf(child) === -1) {
            this._children.push(child);
            child._parent = this;
            child.makeWorldDirty(); // Child's world transform is now relative to this one
        }
    }
    remove(child) {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
            child._parent = undefined;
            child.makeWorldDirty(); // Child's world transform needs recalculation (now relative to root)
        }
    }
    clear() {
        for (const child of this._children) {
            child._parent = undefined;
            child.makeWorldDirty();
        }
        this._children = [];
    }
    traverse(fn) {
        fn(this);
        for (const child of this._children) {
            child.traverse(fn);
        }
    }
}
exports.Transform = Transform;
