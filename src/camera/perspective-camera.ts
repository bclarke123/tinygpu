import { mat4, Vec2, vec3, Vec3 } from "wgpu-matrix";
import { Camera } from "./camera";

export interface PerspectiveCameraProps {
  fov: number;
  aspect: number;
  near: number;
  far: number;
  position: Vec3;
  target: Vec3;
  up: Vec3;
}

export class PerspectiveCamera extends Camera {
  // --- Camera Properties ---
  public target: Vec3;
  public up: Vec3;

  public fov: number;
  public aspect: number;
  public near: number;
  public far: number;

  constructor({
    fov = Math.PI / 4, // Default: 45 degrees FOV
    aspect = 16 / 9, // Default: Common aspect ratio
    near = 0.1,
    far = 1000.0,
    position = vec3.create(0, 0, 10), // Use vec3.create for default
    target = vec3.create(0, 0, 0), // Use vec3.create for default
    up = vec3.create(0, 1, 0), // Use vec3.create for default
  } = {}) {
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;

    // Use create if available, otherwise copy
    this.position = vec3.clone(position);
    this.target = vec3.clone(target);
    this.up = vec3.clone(up);
  }

  // --- Methods to Update Matrices ---

  override updateProjectionMatrix(): void {
    console.log("Updating Projection Matrix using wgpu-matrix");
    this._projectionMatrix = mat4.perspective(
      this.fov,
      this.aspect,
      this.near,
      this.far,
    );
    this._isProjectionDirty = false;
  }

  override updateViewMatrix(): void {
    console.log("Updating View Matrix using wgpu-matrix");
    this._viewMatrix = mat4.lookAt(this.position, this.target, this.up);
    this._isViewDirty = false;
  }

  // --- Methods to Modify Camera Properties (and mark dirty) ---
  // Using vec3.equals for comparison and vec3.copy for setting

  public setPosition(x: number, y: number, z: number): void {
    const newPosition = vec3.create(x, y, z);
    if (!vec3.equals(this.position, newPosition)) {
      super.setPosition(x, y, z);
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

  public setFov(newFov: number): void {
    if (this.fov !== newFov) {
      this.fov = newFov;
      this._isProjectionDirty = true;
    }
  }

  public setAspect(newAspect: number): void {
    if (this.aspect !== newAspect) {
      this.aspect = newAspect;
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

  override viewportResized(size: Vec2) {
    this.setAspect(size[0] / size[1]);
  }
}
