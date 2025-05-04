export class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  buffer?: Float32Array;

  constructor(r: number, g: number, b: number, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  uniformValue() {
    this.buffer ??= new Float32Array([0, 0, 0, 0]);
    this.buffer.set([this.r, this.g, this.b, this.a]);
    return this.buffer;
  }
}
