import { Mat3, mat3 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";

export class Mesh extends Transform {
  private _uniformManager: UniformManager;
  private _instances: number;
  private _normalMatrix: Mat3;

  cullMode: GPUCullMode = "back";

  material: Material;
  geometry: Geometry;

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
    return `${this.geometry.cacheKey}-${this.material.cacheKey}-${this._uniformManager.cacheKey}`;
  }

  update() {
    this.material.update();

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
