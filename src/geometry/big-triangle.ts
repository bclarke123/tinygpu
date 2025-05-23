import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

export class BigTriangle extends Geometry {
    constructor(renderer: Renderer) {
        const vertexBuffer = renderer.createBuffer(
            new Float32Array([
                -1, -1, 0, /* */ 0, 0, /* */ 0, 0, 1, 0, 0, 0,
                3, -1, 0, /* */ 2, 0, /* */ 0, 0, 1, 0, 0, 0,
                -1, 3, 0,  /* */ 0, 2, /* */ 0, 0, 1, 0, 0, 0
            ]),
            GPUBufferUsage.VERTEX
        );

        const indexBuffer = renderer.createBuffer(
            new Uint16Array([0, 1, 2]),
            GPUBufferUsage.INDEX
        );

        super(renderer, vertexBuffer, indexBuffer, 3, 3);
    }

    get cacheKey(): string {
        return "big-triangle";
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        return [
            {
                attributes: [
                    { // Position
                        shaderLocation: 0,
                        offset: 0,
                        format: "float32x3",
                    },
                    { // UV
                        shaderLocation: 1,
                        offset: 3 * 4,
                        format: "float32x2",
                    },
                    { // Normal
                        shaderLocation: 2,
                        offset: 5 * 4,
                        format: "float32x3",
                    },
                    { // Tangent
                        shaderLocation: 3,
                        offset: 8 * 4,
                        format: "float32x3",
                    }
                ],
                arrayStride: 11 * 4,
                stepMode: "vertex",
            }
        ]
    }
}
