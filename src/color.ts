import { Vec4, vec4 } from "wgpu-matrix";

export class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  buffer?: Vec4;

  constructor(r: number, g: number, b: number, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  uniformValue() {
    this.buffer ??= vec4.create();
    this.buffer.set([this.r, this.g, this.b, this.a]);
    return this.buffer;
  }

  toPixelData() {
    const buffer = new Uint8Array([
      this.r * 255,
      this.g * 255,
      this.b * 255,
      this.a * 255,
    ]);
    return buffer;
  }

  toString() {
    this.uniformValue();
    return this.buffer.join(",");
  }
}
