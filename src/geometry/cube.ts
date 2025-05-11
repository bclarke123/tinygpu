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
  const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
  const arrayStride = floatsPerVertex * 4; // Bytes per vertex

  const faceData = [
    // Front face (+Z) - Normal: [0, 0, 1]
    // Vertices: BL, BR, TR, TL (BottomLeft, BottomRight, TopRight, TopLeft)
    [-0.5, -0.5, 0.5, 0, 1, 0, 0, 1],
    [0.5, -0.5, 0.5, 1, 1, 0, 0, 1],
    [0.5, 0.5, 0.5, 1, 0, 0, 0, 1],
    [-0.5, 0.5, 0.5, 0, 0, 0, 0, 1],

    // Back face (-Z) - Normal: [0, 0, -1]
    // Vertices: BR, BL, TL, TR (UVs are flipped for standard texture mapping on back)
    [0.5, -0.5, -0.5, 1, 1, 0, 0, -1],
    [-0.5, -0.5, -0.5, 0, 1, 0, 0, -1],
    [-0.5, 0.5, -0.5, 0, 0, 0, 0, -1],
    [0.5, 0.5, -0.5, 1, 0, 0, 0, -1],

    // Right face (+X) - Normal: [1, 0, 0]
    // Vertices: BL, BR, TR, TL
    [0.5, -0.5, 0.5, 0, 1, 1, 0, 0],
    [0.5, -0.5, -0.5, 1, 1, 1, 0, 0],
    [0.5, 0.5, -0.5, 1, 0, 1, 0, 0],
    [0.5, 0.5, 0.5, 0, 0, 1, 0, 0],

    // Left face (-X) - Normal: [-1, 0, 0]
    // Vertices: BR, BL, TL, TR
    [-0.5, -0.5, -0.5, 1, 1, -1, 0, 0],
    [-0.5, -0.5, 0.5, 0, 1, -1, 0, 0],
    [-0.5, 0.5, 0.5, 0, 0, -1, 0, 0],
    [-0.5, 0.5, -0.5, 1, 0, -1, 0, 0],

    // Top face (+Y) - Normal: [0, 1, 0]
    // Vertices: BL, BR, TR, TL
    [-0.5, 0.5, 0.5, 0, 1, 0, 1, 0],
    [0.5, 0.5, 0.5, 1, 1, 0, 1, 0],
    [0.5, 0.5, -0.5, 1, 0, 0, 1, 0],
    [-0.5, 0.5, -0.5, 0, 0, 0, 1, 0],

    // Bottom face (-Y) - Normal: [0, -1, 0]
    // Vertices: TL, TR, BR, BL
    [-0.5, -0.5, -0.5, 0, 1, 0, -1, 0],
    [0.5, -0.5, -0.5, 1, 1, 0, -1, 0],
    [0.5, -0.5, 0.5, 1, 0, 0, -1, 0],
    [-0.5, -0.5, 0.5, 0, 0, 0, -1, 0],
  ];

  const verticesArray: number[] = [];
  faceData.forEach((faceVertices) => verticesArray.push(...faceVertices));
  const vertices = new Float32Array(verticesArray);
  const generatedVertexCount = faceData.length; // 24 vertices

  const indicesArray: number[] = [];
  for (let i = 0; i < 6; i++) {
    const baseIndex = i * 4;
    indicesArray.push(
      baseIndex + 0,
      baseIndex + 1,
      baseIndex + 2,
      baseIndex + 0,
      baseIndex + 2,
      baseIndex + 3,
    );
  }
  const indices = new Uint16Array(indicesArray);
  const indexCount = indices.length; // 36 indices

  return {
    vertices,
    indices,
    vertexCount: generatedVertexCount,
    indexCount,
    arrayStride,
    floatsPerVertex,
  };
}

export class CubeGeometry extends Geometry {
  private readonly _arrayStride: number;

  constructor(renderer: Renderer) {
    const { vertices, indices, vertexCount, indexCount, arrayStride } =
      _createCubeGeometryData();

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
