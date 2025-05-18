import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

// Helper functions (assuming these are available or local)
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

interface TetrahedronGeometryData {
    vertices: Float32Array;
    indices: Uint16Array;
    vertexCount: number; // Number of entries in the vertices Float32Array
    indexCount: number;
    arrayStride: number;
    floatsPerVertex: number;
}

// Define the 4 unique vertex positions for a tetrahedron
// These are standard positions for a regular tetrahedron centered at the origin.
const TETRA_POSITIONS: Array<[number, number, number]> = [
    [1, 1, 1],    // 0
    [1, -1, -1],   // 1
    [-1, 1, -1],  // 2
    [-1, -1, 1]   // 3
];

// Vertex normals for a smooth regular tetrahedron are just the normalized positions
// if it's centered at the origin.
const TETRA_SMOOTH_NORMALS: Array<[number, number, number]> = TETRA_POSITIONS.map(
    pos => normalize(pos)
);


function _createTetrahedronGeometryData(
    radius: number = 0.5,
    useSmoothNormals: boolean = true
): TetrahedronGeometryData {
    const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex

    // Scale positions by radius and adjust for a common centering if needed.
    // The traditional tetrahedron points (1,1,1), (1,-1,-1), (-1,1,-1), (-1,-1,1)
    // are not centered at origin if sqrt(3) is the distance from origin to vertex.
    // For this example, we'll scale the TETRA_POSITIONS directly by a factor.
    // A common scaling factor to make it fit within a 'radius' is more complex if radius
    // refers to an inscribed or circumscribed sphere. Let's assume 'radius' is a general size factor for now.
    const scale = radius / Math.sqrt(3); // Match previous scaling for consistency

    const scaledPositions = TETRA_POSITIONS.map(p => [p[0] * scale, p[1] * scale, p[2] * scale] as [number, number, number]);
    // Smooth normals are independent of scale, use the pre-normalized ones.

    // Define faces by indices into the TETRA_POSITIONS array
    // Each face definition includes the vertex indices (0-3), UVs for those vertices on that face,
    // and the calculated face normal (for flat shading).
    const faces = [
        // Original vertex order for faces (vA, vB, vC from your previous version)
        // The winding order for indices will handle CCW.
        { posIndices: [0, 2, 1], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { posIndices: [0, 1, 3], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { posIndices: [0, 3, 2], uvs: [[0.5, 1.0] as [number, number], [0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number]] },
        { posIndices: [1, 2, 3], uvs: [[0.0, 0.0] as [number, number], [1.0, 0.0] as [number, number], [0.5, 1.0] as [number, number]] }, // Original: p1, p2, p3
    ];

    const vertexData: number[] = [];
    const indexData: number[] = [];
    let vertexCounter = 0;

    for (const face of faces) {
        // Get the actual vertex positions for this face
        const vA_pos = scaledPositions[face.posIndices[0]];
        const vB_pos = scaledPositions[face.posIndices[1]];
        const vC_pos = scaledPositions[face.posIndices[2]];

        // Calculate face normal (used if useSmoothNormals is false)
        const edge1 = subtract(vB_pos, vA_pos);
        const edge2 = subtract(vC_pos, vA_pos);
        // The normal calculation needs to match the final winding order of indices.
        // If final indices are (idx, idx+2, idx+1) for CCW (vA,vC,vB from original vertex order),
        // then normal should be cross(vC-vA, vB-vA) = cross(edge2, edge1)
        const faceNormal = normalize(crossProduct(edge2, edge1));

        const faceVertices = [
            { posIdx: face.posIndices[0], uv: face.uvs[0] }, // vA
            { posIdx: face.posIndices[1], uv: face.uvs[1] }, // vB
            { posIdx: face.posIndices[2], uv: face.uvs[2] }, // vC
        ];

        for (const vert of faceVertices) {
            const position = scaledPositions[vert.posIdx];
            const uv = vert.uv;
            const normal = useSmoothNormals ? TETRA_SMOOTH_NORMALS[vert.posIdx] : faceNormal;
            vertexData.push(...position, ...uv, ...normal);
        }

        // Winding order for CCW based on the original face.verts = [vA, vB, vC]
        // If we want CCW for (vA, vC, vB) which matches the normal = cross(edge2, edge1)
        indexData.push(vertexCounter + 0, vertexCounter + 2, vertexCounter + 1);
        vertexCounter += 3; // 3 vertices per face
    }

    const vertices = new Float32Array(vertexData);
    const indices = new Uint16Array(indexData);
    // vertexCount is the total number of vertex entries in the buffer, which is 4 faces * 3 vertices/face = 12
    const generatedVertexCount = 12;

    return {
        vertices,
        indices,
        vertexCount: generatedVertexCount,
        indexCount: indices.length,
        arrayStride,
        floatsPerVertex,
    };
}

export interface TetrahedronGeometryOptions {
    radius?: number;
    useSmoothNormals?: boolean;
}

export class TetrahedronGeometry extends Geometry {
    private readonly _arrayStride: number;
    private readonly _radius: number;
    private readonly _useSmoothNormals: boolean;

    constructor(renderer: Renderer, options: TetrahedronGeometryOptions = {}) {
        const radius = options.radius !== undefined ? options.radius : 0.5;
        const useSmoothNormals = options.useSmoothNormals !== undefined ? options.useSmoothNormals : true; // Default to true

        const { vertices, indices, vertexCount, indexCount, arrayStride } =
            _createTetrahedronGeometryData(radius, useSmoothNormals);

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
            vertexCount, // This is the number of vertices in the buffer to draw
        );

        this._arrayStride = arrayStride;
        this._radius = radius;
        this._useSmoothNormals = useSmoothNormals;
    }

    get cacheKey(): string {
        // Ensure radius is part of the key if it affects geometry significantly beyond simple scaling
        // (which it does here as it's used in vertex position calculation)
        return `TetrahedronGeometry_r${this._radius}_smooth:${this._useSmoothNormals}`;
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        return [
            {
                arrayStride: this._arrayStride,
                attributes: [
                    { shaderLocation: 0, offset: 0, format: "float32x3" }, // Position
                    { shaderLocation: 1, offset: 3 * 4, format: "float32x2" }, // UV
                    { shaderLocation: 2, offset: (3 + 2) * 4, format: "float32x3" }, // Normal
                ],
            },
        ];
    }
}
