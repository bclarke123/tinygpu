import { mat4, Vec2, vec3, Vec3 } from "wgpu-matrix";
import { Camera } from "./camera";

export interface OrthographicCameraProps {
  left: number;
  right: number;
  bottom: number;
  top: number;
  near: number;
  far: number;
  position: Vec3;
  target: Vec3;
  up: Vec3;
}

export class OrthographicCamera extends Camera {
  // --- Camera View Properties ---
  public target: Vec3; // The point the camera is looking at
  public up: Vec3; // The "up" direction for the camera

  // --- Orthographic Projection Properties ---
  public left: number; // Left plane coordinate
  public right: number; // Right plane coordinate
  public bottom: number; // Bottom plane coordinate
  public top: number; // Top plane coordinate
  public near: number; // Near clipping plane distance
  public far: number; // Far clipping plane distance

  constructor({
    left = -1, // Default frustum spans -1 to 1 in X and Y
    right = 1,
    bottom = -1,
    top = 1,
    near = 0.1,
    far = 1000.0,
    position = vec3.create(0, 0, 10), // Default position
    target = vec3.create(0, 0, 0), // Default target (origin)
    up = vec3.create(0, 1, 0), // Default up vector (Y-axis)
  } = {}) {
    super();

    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.top = top;
    this.near = near;
    this.far = far;

    // Use create if available, otherwise copy
    this.position = vec3.clone(position);
    this.target = vec3.clone(target);
    this.up = vec3.clone(up);
  }

  // --- Methods to Update Matrices ---

  override updateProjectionMatrix(): void {
    // console.trace();
    console.log("Updating Orthographic Projection Matrix"); // For debugging
    // Use wgpu-matrix ortho function
    // mat4.ortho(left, right, bottom, top, near, far, destinationMatrix?)
    // It returns a new matrix if destination is not provided.
    this._projectionMatrix = mat4.ortho(
      this.left,
      this.right,
      this.bottom,
      this.top,
      this.near,
      this.far,
      // Optionally pass this._projectionMatrix as the last argument
      // mat4.ortho(this.left, ..., this.far, this._projectionMatrix);
    );
    this._isProjectionDirty = false;
  }

  override updateViewMatrix(): void {
    console.log("Updating Orthographic View Matrix"); // For debugging
    // Use wgpu-matrix lookAt function
    this._viewMatrix = mat4.lookAt(
      this.position,
      this.target,
      this.up,
      // Optionally pass this._viewMatrix as the last argument
      // mat4.lookAt(this.position, this.target, this.up, this._viewMatrix);
    );
    this._isViewDirty = false;
  }

  // --- Methods to Modify Camera Properties (and mark dirty) ---
  // Using vec3.equals for comparison and vec3.copy for setting

  public setPosition(x: number, y: number, z: number): void {
    super.setPosition(x, y, z);
    const newPosition = vec3.create(x, y, z);
    if (!vec3.equals(this.position, newPosition)) {
      // Use copy to avoid modifying the input array if it's reused elsewhere
      this.position = vec3.copy(newPosition, this.position); // copy(src, dst?)
      this._isViewDirty = true;
    }
  }

  public setTarget(newTarget: Vec3): void {
    if (!vec3.equals(this.target, newTarget)) {
      this.target = vec3.copy(newTarget, this.target);
      this._isViewDirty = true;
    }
  }

  public setUp(newUp: Vec3): void {
    if (!vec3.equals(this.up, newUp)) {
      this.up = vec3.copy(newUp, this.up);
      this._isViewDirty = true;
    }
  }

  // Setters for orthographic properties
  public setLeft(newLeft: number): void {
    if (this.left !== newLeft) {
      this.left = newLeft;
      this._isProjectionDirty = true;
    }
  }

  public setRight(newRight: number): void {
    if (this.right !== newRight) {
      this.right = newRight;
      this._isProjectionDirty = true;
    }
  }

  public setBottom(newBottom: number): void {
    if (this.bottom !== newBottom) {
      this.bottom = newBottom;
      this._isProjectionDirty = true;
    }
  }

  public setTop(newTop: number): void {
    if (this.top !== newTop) {
      this.top = newTop;
      this._isProjectionDirty = true;
    }
  }

  public setNear(newNear: number): void {
    if (this.near !== newNear) {
      this.near = newNear;
      this._isProjectionDirty = true;
    }
  }

  public setFar(newFar: number): void {
    if (this.far !== newFar) {
      this.far = newFar;
      this._isProjectionDirty = true;
    }
  }

  override viewportResized(_: Vec2) {
    // nop
  }
}
