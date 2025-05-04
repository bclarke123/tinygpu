import { Color } from "./color";
import { DefaultTexture, Texture } from "./texture";

import basicMaterialShader from "./shaders/basic-material.wgsl";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial {
  private _color: Color;
  private _map: Texture | null;
  private _bindGroup: GPUBindGroup | null = null;
  private _module: GPUShaderModule | null = null;

  constructor(options: BasicMaterialOptions = {}) {
    this._color = options.color || new Color(1, 1, 1);
    this._map = options.map || DefaultTexture.instance;
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
  }

  get map(): Texture | null {
    return this._map;
  }

  set map(value: Texture | null) {
    this._map = value;
  }

  upload(device: GPUDevice): void {
    if (this._map) {
      this._map.upload(device);
    }

    if (!this._module) {
      this._module = device.createShaderModule({
        code: basicMaterialShader,
      });
    }

  }
}
