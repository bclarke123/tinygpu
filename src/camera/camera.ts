import { mat4, Mat4, Vec2 } from "wgpu-matrix";
import { Transform } from "../transform";

export abstract class Camera extends Transform {
  // --- Calculated Matrices ---
  protected _projectionMatrix: Mat4;
  protected _viewMatrix: Mat4;

  // --- Dirty Flags ---
  protected _isProjectionDirty: boolean = true;
  protected _isViewDirty: boolean = true;

  constructor() {
    super();

    // Initialize matrices using wgpu-matrix identity
    this._projectionMatrix = mat4.identity();
    this._viewMatrix = mat4.identity();

    // Mark as dirty initially to force calculation on first access
    this._isProjectionDirty = true;
    this._isViewDirty = true;
  }

  // --- Getters for Matrices (with lazy calculation) ---

  public get projectionMatrix(): Mat4 {
    if (this._isProjectionDirty) {
      this.updateProjectionMatrix();
    }
    return this._projectionMatrix;
  }

  public get viewMatrix(): Mat4 {
    if (this._isViewDirty) {
      this.updateViewMatrix();
    }
    return this._viewMatrix;
  }

  abstract updateProjectionMatrix(): void;
  abstract updateViewMatrix(): void;

  // Optional: Method to force update both matrices if needed
  public updateMatrices(): void {
    if (this._isProjectionDirty) {
      this.updateProjectionMatrix();
    }
    if (this._isViewDirty) {
      this.updateViewMatrix();
    }

    this.updateLocalMatrix();
    this.updateWorldMatrix();
  }

  abstract viewportResized(size: Vec2);

  protected override makeDirty(): void {
    super.makeDirty();
    this._isViewDirty = true;
    this._isProjectionDirty = true;
  }
}
