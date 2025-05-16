import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

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

    const faces = [
        { verts: [p0, p2, p1], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { verts: [p0, p1, p3], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { verts: [p0, p3, p2], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { verts: [p1, p2, p3], uvs: [[0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number], [0.5, 1.0] as [number, number]] },
    ];

    const vertexData: number[] = [];
    const indexData: number[] = [];
    let vertexCounter = 0;

    for (const face of faces) {
        const [vA, vB, vC] = face.verts; // e.g., for face 0: vA=p0, vB=p2, vC=p1
        const [uvA, uvB, uvC] = face.uvs;

        const edge1 = subtract(vB, vA); // For face 0: p2-p0
        const edge2 = subtract(vC, vA); // For face 0: p1-p0

        // Normal for the triangle (vA, vC, vB) should be cross(vC-vA, vB-vA)
        // This is cross(edge2, edge1)
        const normal = normalize(crossProduct(edge2, edge1));

        // Vertices are pushed in order vA, vB, vC as defined in face.verts
        vertexData.push(...vA, ...uvA, ...normal);
        vertexData.push(...vB, ...uvB, ...normal); // Note: normal is for face (vA,vC,vB)
        vertexData.push(...vC, ...uvC, ...normal); // but is applied to vA,vB,vC here.
        // This is okay for flat shading where each vertex can have the face normal.

        // Winding order for CCW (vA, vC, vB)
        indexData.push(vertexCounter, vertexCounter + 2, vertexCounter + 1);
        vertexCounter += 3;
    }

    const vertices = new Float32Array(vertexData);
    const indices = new Uint16Array(indexData);
    const vertexCount = vertexCounter;
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
        return [
            {
                arrayStride: this._arrayStride,
                attributes: [
                    {
                        shaderLocation: 0, // Position
                        offset: 0,
                        format: "float32x3",
                    },
                    {
                        shaderLocation: 1, // UV
                        offset: 3 * 4,
                        format: "float32x2",
                    },
                    {
                        shaderLocation: 2, // Normal
                        offset: (3 + 2) * 4,
                        format: "float32x3",
                    },
                ],
            },
        ];
    }
}
