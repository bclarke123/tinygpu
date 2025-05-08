"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
class Color {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    uniformValue() {
        var _a;
        (_a = this.buffer) !== null && _a !== void 0 ? _a : (this.buffer = wgpu_matrix_1.vec4.create());
        this.buffer.set([this.r, this.g, this.b, this.a]);
        return this.buffer;
    }
}
exports.Color = Color;
