"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigTriangle = void 0;
const geometry_1 = require("./geometry");
class BigTriangle extends geometry_1.Geometry {
    constructor(renderer) {
        const vertexBuffer = renderer.createBuffer(new Float32Array([
            -1, -1, 0,
            3, -1, 0,
            -1, 3, 0
        ]), GPUBufferUsage.VERTEX);
        const indexBuffer = renderer.createBuffer(new Uint16Array([0, 1, 2]), GPUBufferUsage.INDEX);
        const uvBuffer = renderer.createBuffer(new Float32Array([
            0, 0,
            2, 0,
            0, 2
        ]), GPUBufferUsage.VERTEX);
        super(renderer, vertexBuffer, indexBuffer, uvBuffer, 3, 3);
    }
    get cacheKey() {
        return "big-triangle";
    }
    get bufferLayout() {
        return [
            {
                attributes: [
                    {
                        shaderLocation: 0,
                        offset: 0,
                        format: "float32x3",
                    }
                ],
                arrayStride: 3 * 4,
                stepMode: "vertex",
            },
            {
                attributes: [
                    {
                        shaderLocation: 1,
                        offset: 0,
                        format: "float32x2",
                    }
                ],
                arrayStride: 2 * 4,
                stepMode: "vertex",
            }
        ];
    }
}
exports.BigTriangle = BigTriangle;
