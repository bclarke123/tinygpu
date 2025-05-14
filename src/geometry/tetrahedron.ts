import { Renderer } from "../renderer"; // Assuming this path is correct
import { Geometry } from "./geometry";

// Helper functions for vector math (can be moved to a utility file if not already)
// These were also used in the flat-shaded Sphere.
function crossProduct(a: [number, number, number], b: [number, number, number]): [number, number, number] {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
    ];
}

function normalize(v: [number, number, number]): [number, number, number] {
    const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    if (length === 0) return [0, 0, 0]; // Avoid division by zero
    return [v[0] / length, v[1] / length, v[2] / length];
}

function subtract(a: [number, number, number], b: [number, number, number]): [number, number, number] {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

interface TetrahedronGeometryData {
    vertices: Float32Array;
    indices: Uint16Array;
    vertexCount: number;
    indexCount: number;
    arrayStride: number;
    floatsPerVertex: number;
}

export interface TetrahedronGeometryOptions {
    radius: number;
}

function _createTetrahedronGeometryData(radius: number = 0.5): TetrahedronGeometryData {
    const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex

    const c = radius / Math.sqrt(3);

    const p0: [number, number, number] = [c, c, c];
    const p1: [number, number, number] = [c, -c, -c];
    const p2: [number, number, number] = [-c, c, -c];
    const p3: [number, number, number] = [-c, -c, c];

    // Define vertices for each face (pos, uv) and then calculate normals
    // Each face is a triangle, 3 vertices per face.
    // Total 4 faces * 3 vertices/face = 12 vertices in the buffer.
    const faces = [
        { verts: [p0, p2, p1], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] }, // Front-ish when looking from +Z towards origin, p0 top
        { verts: [p0, p1, p3], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] }, // Right-ish
        { verts: [p0, p3, p2], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] }, // Left-ish
        { verts: [p1, p2, p3], uvs: [[0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number], [0.5, 1.0] as [number, number]] }, // Bottom face
    ];

    const vertexData: number[] = [];
    const indexData: number[] = [];
    let vertexCounter = 0;

    for (const face of faces) {
        const [vA, vB, vC] = face.verts;
        const [uvA, uvB, uvC] = face.uvs;

        const edge1 = subtract(vB, vA);
        const edge2 = subtract(vC, vA);
        const normal = normalize(crossProduct(edge1, edge2));

        // Add vertex A for this face
        vertexData.push(...vA, ...uvA, ...normal);
        // Add vertex B for this face
        vertexData.push(...vB, ...uvB, ...normal);
        // Add vertex C for this face
        vertexData.push(...vC, ...uvC, ...normal);

        indexData.push(vertexCounter, vertexCounter + 1, vertexCounter + 2);
        vertexCounter += 3;
    }

    const vertices = new Float32Array(vertexData);
    const indices = new Uint16Array(indexData);
    const vertexCount = vertexCounter; // Total vertices written to the buffer
    const indexCount = indices.length;

    return {
        vertices,
        indices,
        vertexCount,
        indexCount,
        arrayStride,
        floatsPerVertex,
    };
}

export class TetrahedronGeometry extends Geometry {
    private readonly _arrayStride: number;
    private readonly _radius: number;

    constructor(renderer: Renderer, options: TetrahedronGeometryOptions = { radius: 0.5 }) {
        const { vertices, indices, vertexCount, indexCount, arrayStride } =
            _createTetrahedronGeometryData(options.radius);

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
        this._radius = options.radius;
    }

    get cacheKey(): string {
        return `TetrahedronGeometry_r${this._radius}`;
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
