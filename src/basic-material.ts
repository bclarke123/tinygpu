import { Color } from "./color";
import { DefaultTexture, Texture } from "./texture";

export interface BasicMaterialOptions {
  color?: Color;
  map?: Texture;
}

export class BasicMaterial {
  private _color: Color;
  private _map: Texture | null;

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
}
