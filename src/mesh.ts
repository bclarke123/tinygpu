import { Mat3, mat3 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";
import { DebugVectorMaterial } from "./materials/debug-vector";

export interface DebugVisualizer {
  material: DebugVectorMaterial;
}

export class Mesh extends Transform {
  private _uniformManager: UniformManager;
  private _instances: number;
  private _normalMatrix: Mat3;

  cullMode: GPUCullMode = "back";
  depthWriteEnabled: boolean = true;
  depthCompare: GPUCompareFunction = "less";

  material: Material;
  geometry: Geometry;

  // Optional property for debug visualization
  public debugVisualizer?: DebugVisualizer;

  constructor(
    device: GPUDevice,
    mat: Material,
    geo: Geometry,
    instances: number = 1,
    buffers?: UniformBufferItem[],
  ) {
    super();
    this.material = mat;
    this.geometry = geo;
    this._instances = instances;
    this._normalMatrix = mat3.identity();
    this.updateNormalMatrix();

    this._uniformManager = new UniformManager(device, {
      uniforms: [
        { name: "model", value: this.worldMatrix },
        { name: "normalMatrix", value: this._normalMatrix },
      ],
      buffers: buffers || [],
      label: "Mesh",
    });
  }

  get cacheKey(): string {
    let key = `${this.geometry.cacheKey}-${this.material.cacheKey}-${this._uniformManager.cacheKey}-${this.depthWriteEnabled}-${this.depthCompare}`;
    if (this.debugVisualizer) {
      key += `-${this.debugVisualizer.material.cacheKey}`;
    }
    return key;
  }

  update() {
    this.material.update();
    this.debugVisualizer?.material.update();

    this.updateNormalMatrix();

    this._uniformManager.updateUniform({
      name: "model",
      value: this.worldMatrix,
    });
    this._uniformManager.updateUniform({
      name: "normalMatrix",
      value: this._normalMatrix,
    });
    this._uniformManager.update();
  }

  updateNormalMatrix() {
    // Ensure this.worldMatrix is a Mat4 before calling fromMat4
    mat3.fromMat4(this.worldMatrix, this._normalMatrix);
    mat3.invert(this._normalMatrix, this._normalMatrix);
    mat3.transpose(this._normalMatrix, this._normalMatrix);
  }

  get bindGroupLayout(): GPUBindGroupLayout {
    return this._uniformManager.bindGroupLayout;
  }

  get bindGroup(): GPUBindGroup {
    return this._uniformManager.bindGroup;
  }

  get bufferLayout(): GPUVertexBufferLayout[] {
    return this.geometry.bufferLayout;
  }

  get buffers(): UniformBufferItem[] {
    return this._uniformManager.buffers;
  }

  get instanceCount(): number {
    return this._instances;
  }
}
