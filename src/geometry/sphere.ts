import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

interface SphereGeometryData {
    vertices: Float32Array;
    indices: Uint16Array;
    vertexCount: number;
    indexCount: number;
    arrayStride: number;
    floatsPerVertex: number;
}

function crossProduct(a: [number, number, number], b: [number, number, number]): [number, number, number] {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}

function normalize(v: [number, number, number]): [number, number, number] {
    const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    if (length === 0) return [0, 0, 0];
    return [v[0] / length, v[1] / length, v[2] / length];
}

function subtract(a: [number, number, number], b: [number, number, number]): [number, number, number] {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}


function _createSphereGeometryData(
    radius: number = 0.5,
    latitudeBands: number = 32,
    longitudeBands: number = 64,
    flatShading: boolean = false,
): SphereGeometryData {
    const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex

    const vertexData: number[] = [];
    const indexData: number[] = [];

    if (!flatShading) {
        // Smooth Shading Logic
        for (let latNumber = 0; latNumber <= latitudeBands; latNumber++) {
            const theta = (latNumber * Math.PI) / latitudeBands;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);

            for (let longNumber = 0; longNumber <= longitudeBands; longNumber++) {
                const phi = (longNumber * 2 * Math.PI) / longitudeBands;
                const sinPhi = Math.sin(phi);
                const cosPhi = Math.cos(phi);

                const x = cosPhi * sinTheta;
                const y = cosTheta;
                const z = sinPhi * sinTheta;

                const u = 1 - longNumber / longitudeBands;
                const v = 1 - latNumber / latitudeBands;

                vertexData.push(radius * x, radius * y, radius * z); // Position
                vertexData.push(u, v);                             // UV
                vertexData.push(x, y, z);                          // Normal (vertex normal)
            }
        }

        for (let latNumber = 0; latNumber < latitudeBands; latNumber++) {
            for (let longNumber = 0; longNumber < longitudeBands; longNumber++) {
                const first = latNumber * (longitudeBands + 1) + longNumber;
                const second = first + longitudeBands + 1;

                indexData.push(first, second, first + 1);
                indexData.push(second, second + 1, first + 1);
            }
        }
    } else {
        // Flat Shading Logic
        let vertexCounter = 0;
        for (let latNumber = 0; latNumber < latitudeBands; latNumber++) {
            for (let longNumber = 0; longNumber < longitudeBands; longNumber++) {
                // Define the 4 vertices of the quad for this segment
                const points: Array<{ pos: [number, number, number], uv: [number, number] }> = [];
                for (let i = 0; i < 2; i++) { // lat offset
                    const currentLat = latNumber + i;
                    const theta = (currentLat * Math.PI) / latitudeBands;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);

                    for (let j = 0; j < 2; j++) { // lon offset
                        const currentLong = longNumber + j;
                        const phi = (currentLong * 2 * Math.PI) / longitudeBands;
                        const sinPhi = Math.sin(phi);
                        const cosPhi = Math.cos(phi);

                        const x = cosPhi * sinTheta;
                        const y = cosTheta;
                        const z = sinPhi * sinTheta;
                        const u = 1 - currentLong / longitudeBands;
                        const v = 1 - currentLat / latitudeBands;
                        points.push({
                            pos: [radius * x, radius * y, radius * z],
                            uv: [u, v]
                        });
                    }
                }

                // Points for the quad:
                // p0: (lat, lon)
                // p1: (lat, lon+1)
                // p2: (lat+1, lon)
                // p3: (lat+1, lon+1)
                // Our points array is [p0, p1, p2, p3] effectively after remapping indices
                const p0 = points[0]; // lat, lon
                const p1 = points[1]; // lat, lon+1
                const p2 = points[2]; // lat+1, lon
                const p3 = points[3]; // lat+1, lon+1


                // Triangle 1: p0, p2, p1
                const tri1_v0 = p0.pos;
                const tri1_v1 = p2.pos;
                const tri1_v2 = p1.pos;
                const tri1_uv0 = p0.uv;
                const tri1_uv1 = p2.uv;
                const tri1_uv2 = p1.uv;

                let edge1 = subtract(tri1_v1, tri1_v0);
                let edge2 = subtract(tri1_v2, tri1_v0);
                let normal1 = normalize(crossProduct(edge1, edge2));

                vertexData.push(...tri1_v0, ...tri1_uv0, ...normal1);
                vertexData.push(...tri1_v1, ...tri1_uv1, ...normal1);
                vertexData.push(...tri1_v2, ...tri1_uv2, ...normal1);
                indexData.push(vertexCounter++, vertexCounter++, vertexCounter++);

                // Triangle 2: p1, p2, p3
                const tri2_v0 = p1.pos;
                const tri2_v1 = p2.pos; // same as tri1_v1
                const tri2_v2 = p3.pos;
                const tri2_uv0 = p1.uv;
                const tri2_uv1 = p2.uv;
                const tri2_uv2 = p3.uv;


                edge1 = subtract(tri2_v1, tri2_v0);
                edge2 = subtract(tri2_v2, tri2_v0);
                let normal2 = normalize(crossProduct(edge1, edge2));

                vertexData.push(...tri2_v0, ...tri2_uv0, ...normal2);
                vertexData.push(...tri2_v1, ...tri2_uv1, ...normal2);
                vertexData.push(...tri2_v2, ...tri2_uv2, ...normal2);
                indexData.push(vertexCounter++, vertexCounter++, vertexCounter++);
            }
        }
    }

    const vertices = new Float32Array(vertexData);
    const indices = new Uint16Array(indexData);
    const indexCount = indices.length;
    // For smooth shading, vertexCount is the number of unique vertices.
    // For flat shading, vertexCount is the number of vertices in the buffer (indexCount).
    const vertexCount = flatShading ? indexCount : (latitudeBands + 1) * (longitudeBands + 1);


    return {
        vertices,
        indices,
        vertexCount,
        indexCount,
        arrayStride,
        floatsPerVertex,
    };
}

export interface SphereGeometryOptions {
    radius: number;
    latitudeBands: number;
    longitudeBands: number;
    flatShading: boolean;
}

export class SphereGeometry extends Geometry {
    private readonly _arrayStride: number;
    private readonly _radius: number;
    private readonly _latitudeBands: number;
    private readonly _longitudeBands: number;
    private readonly _flatShading: boolean;

    constructor(renderer: Renderer, options: SphereGeometryOptions = {
        radius: 0.5,
        latitudeBands: 32,
        longitudeBands: 64,
        flatShading: false,
    }) {
        const { radius, latitudeBands, longitudeBands, flatShading } = options;

        const { vertices, indices, vertexCount, indexCount, arrayStride } =
            _createSphereGeometryData(radius, latitudeBands, longitudeBands, flatShading);

        const vertexGPUBuffer = renderer.createBuffer(
            vertices,
            GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        );
        const indexGPUBuffer = renderer.createBuffer(
            indices,
            GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
        );

        super(
            renderer,
            vertexGPUBuffer,
            indexGPUBuffer,
            indexCount,
            vertexCount,
        );

        this._arrayStride = arrayStride;
        this._radius = radius;
        this._latitudeBands = latitudeBands;
        this._longitudeBands = longitudeBands;
        this._flatShading = flatShading;
    }

    get cacheKey(): string {
        return `SphereGeometry_r${this._radius}_lat${this._latitudeBands}_lon${this._longitudeBands}_flat${this._flatShading}`;
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        // This layout describes the single interleaved vertex buffer.
        return [
            {
                arrayStride: this._arrayStride,
                attributes: [
                    {
                        // Position
                        shaderLocation: 0, // Corresponds to @location(0) in WGSL
                        offset: 0,
                        format: "float32x3",
                    },
                    {
                        // UV
                        shaderLocation: 1, // Corresponds to @location(1) in WGSL
                        offset: 3 * 4, // Offset after 3 position floats
                        format: "float32x2",
                    },
                    {
                        // Normal
                        shaderLocation: 2, // Corresponds to @location(2) in WGSL
                        offset: (3 + 2) * 4, // Offset after 3 position floats + 2 UV floats
                        format: "float32x3",
                    },
                ],
            },
        ];
    }
}