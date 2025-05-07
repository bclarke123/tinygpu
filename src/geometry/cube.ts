import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

function _createCubeGeometryData(): {
    vertices: Float32Array;
    indices: Uint16Array;
    vertexCount: number; // Number of unique vertex entries in the vertices array
    indexCount: number;
    arrayStride: number;
    floatsPerVertex: number;
} {
    const floatsPerVertex = 8; // position (3) + normal (3) + uv (2)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex

    const faceData = [
        // Front face (+Z) - Normal: [0, 0, 1]
        // Vertices: BL, BR, TR, TL (BottomLeft, BottomRight, TopRight, TopLeft)
        [-0.5, -0.5, 0.5, 0, 1, 0, 0, 1], [0.5, -0.5, 0.5, 1, 1, 0, 0, 1],
        [0.5, 0.5, 0.5, 1, 0, 0, 0, 1], [-0.5, 0.5, 0.5, 0, 0, 0, 0, 1],

        // Back face (-Z) - Normal: [0, 0, -1]
        // Vertices: BR, BL, TL, TR (UVs are flipped for standard texture mapping on back)
        [0.5, -0.5, -0.5, 1, 1, 0, 0, -1], [-0.5, -0.5, -0.5, 0, 1, 0, 0, -1],
        [-0.5, 0.5, -0.5, 0, 0, 0, 0, -1], [0.5, 0.5, -0.5, 1, 0, 0, 0, -1],

        // Right face (+X) - Normal: [1, 0, 0]
        // Vertices: BL, BR, TR, TL
        [0.5, -0.5, 0.5, 0, 1, 1, 0, 0], [0.5, -0.5, -0.5, 1, 1, 1, 0, 0],
        [0.5, 0.5, -0.5, 1, 0, 1, 0, 0], [0.5, 0.5, 0.5, 0, 0, 1, 0, 0],

        // Left face (-X) - Normal: [-1, 0, 0]
        // Vertices: BR, BL, TL, TR
        [-0.5, -0.5, -0.5, 1, 1, -1, 0, 0], [-0.5, -0.5, 0.5, 0, 1, -1, 0, 0],
        [-0.5, 0.5, 0.5, 0, 0, -1, 0, 0], [-0.5, 0.5, -0.5, 1, 0, -1, 0, 0],

        // Top face (+Y) - Normal: [0, 1, 0]
        // Vertices: BL, BR, TR, TL
        [-0.5, 0.5, 0.5, 0, 1, 0, 1, 0], [0.5, 0.5, 0.5, 1, 1, 0, 1, 0],
        [0.5, 0.5, -0.5, 1, 0, 0, 1, 0], [-0.5, 0.5, -0.5, 0, 0, 0, 1, 0],

        // Bottom face (-Y) - Normal: [0, -1, 0]
        // Vertices: TL, TR, BR, BL
        [-0.5, -0.5, -0.5, 0, 1, 0, -1, 0], [0.5, -0.5, -0.5, 1, 1, 0, -1, 0],
        [0.5, -0.5, 0.5, 1, 0, 0, -1, 0], [-0.5, -0.5, 0.5, 0, 0, 0, -1, 0],
    ];

    const verticesArray: number[] = [];
    faceData.forEach(faceVertices => verticesArray.push(...faceVertices));
    const vertices = new Float32Array(verticesArray);
    const generatedVertexCount = faceData.length; // 24 vertices

    const indicesArray: number[] = [];
    for (let i = 0; i < 6; i++) {
        const baseIndex = i * 4;
        indicesArray.push(baseIndex + 0, baseIndex + 1, baseIndex + 2, baseIndex + 0, baseIndex + 2, baseIndex + 3);
    }
    const indices = new Uint16Array(indicesArray);
    const indexCount = indices.length; // 36 indices

    return { vertices, indices, vertexCount: generatedVertexCount, indexCount, arrayStride, floatsPerVertex };
}


export class CubeGeometry extends Geometry {
    private readonly _arrayStride: number;

    constructor(renderer: Renderer) {
        const {
            vertices,
            indices,
            vertexCount,
            indexCount,
            arrayStride
        } = _createCubeGeometryData();

        // Create GPU buffer for vertices (interleaved: position, normal, uv)
        const vertexGPUBuffer = renderer.device.createBuffer({
            label: "Cube Vertex Buffer",
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true, // Map at creation for initial data write
        });
        new Float32Array(vertexGPUBuffer.getMappedRange()).set(vertices);
        vertexGPUBuffer.unmap();

        // Create GPU buffer for indices
        const indexGPUBuffer = renderer.device.createBuffer({
            label: "Cube Index Buffer",
            size: indices.byteLength,
            usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true, // Map at creation for initial data write
        });
        new Uint16Array(indexGPUBuffer.getMappedRange()).set(indices);
        indexGPUBuffer.unmap();

        // Call super constructor.
        // Since UVs are interleaved in vertexGPUBuffer, we pass it as the uvBuffer argument.
        // The bufferLayout method will define how to access UVs from this buffer.
        super(renderer, vertexGPUBuffer, indexGPUBuffer, vertexGPUBuffer, indexCount, vertexCount);

        this._arrayStride = arrayStride;
    }

    get cacheKey(): string {
        return "CubeGeometry";
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        // This layout describes the single interleaved vertex buffer.
        return [
            {
                arrayStride: this._arrayStride,
                attributes: [
                    { // Position
                        shaderLocation: 0, // Corresponds to @location(0) in WGSL
                        offset: 0,
                        format: 'float32x3',
                    },
                    { // UV
                        shaderLocation: 1, // Corresponds to @location(1) in WGSL
                        offset: 3 * 4,     // Offset after 3 position floats
                        format: 'float32x2',
                    },
                    { // Normal
                        shaderLocation: 2, // Corresponds to @location(2) in WGSL
                        offset: (3 + 2) * 4, // Offset after 3 position floats + 2 UV floats
                        format: 'float32x3',
                    },
                ]
                // stepMode defaults to 'vertex', which is correct here.
            },
        ];
    }
}
