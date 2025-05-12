import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Transform } from "./transform";
import { UniformBufferItem, UniformManager } from "./uniform-manager";

export class Mesh extends Transform {
  _device: GPUDevice;
  _uniformManager: UniformManager;
  _instances: number;

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
    this._device = device;
    this.material = mat;
    this.geometry = geo;
    this._instances = instances;

    this._uniformManager = new UniformManager(
      device,
      [{ name: "model", value: this.worldMatrix }],
      [],
      buffers || [],
      "Mesh",
    );
  }

  get cacheKey(): string {
    return `${this.geometry.cacheKey}-${this.material.cacheKey}`;
  }

  update() {
    this.material.update();

    this._uniformManager.updateUniform({
      name: "model",
      value: this.worldMatrix,
    });
    this._uniformManager.update();
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
