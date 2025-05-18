import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

// Helper to normalize a 3D vector (if not already available from a math library)
function normalize(v: [number, number, number]): [number, number, number] {
  const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  if (length === 0) return [0, 0, 0];
  return [v[0] / length, v[1] / length, v[2] / length];
}

interface CubeGeometryData {
  vertices: Float32Array;
  indices: Uint16Array;
  vertexCount: number;
  indexCount: number;
  arrayStride: number;
  floatsPerVertex: number;
}

// Define the 8 unique vertex positions of a unit cube
const CUBE_HALF_SIZE = 0.5;
const CUBE_POSITIONS: Array<[number, number, number]> = [
  [-CUBE_HALF_SIZE, -CUBE_HALF_SIZE, CUBE_HALF_SIZE], // 0: BLF (Bottom Left Front)
  [CUBE_HALF_SIZE, -CUBE_HALF_SIZE, CUBE_HALF_SIZE], // 1: BRF
  [CUBE_HALF_SIZE, CUBE_HALF_SIZE, CUBE_HALF_SIZE], // 2: TRF
  [-CUBE_HALF_SIZE, CUBE_HALF_SIZE, CUBE_HALF_SIZE], // 3: TLF
  [-CUBE_HALF_SIZE, -CUBE_HALF_SIZE, -CUBE_HALF_SIZE], // 4: BLB (Bottom Left Back)
  [CUBE_HALF_SIZE, -CUBE_HALF_SIZE, -CUBE_HALF_SIZE], // 5: BRB
  [CUBE_HALF_SIZE, CUBE_HALF_SIZE, -CUBE_HALF_SIZE], // 6: TRB
  [-CUBE_HALF_SIZE, CUBE_HALF_SIZE, -CUBE_HALF_SIZE], // 7: TLB
];

// Define vertex normals for a smooth cube (normalized positions)
const CUBE_SMOOTH_NORMALS: Array<[number, number, number]> = CUBE_POSITIONS.map(
  pos => normalize(pos) // For a cube centered at origin, normal is normalized position
);


function _createCubeGeometryData(useSmoothNormals: boolean = true): CubeGeometryData {
  const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
  const arrayStride = floatsPerVertex * 4; // Bytes per vertex

  // Vertex data: pos.x, pos.y, pos.z, uv.u, uv.v, norm.x, norm.y, norm.z
  // We'll define 24 vertices because UVs are typically per-face-vertex.
  // Normals will either be face normals or smooth vertex normals.

  const verticesData: number[] = [];

  // Define faces by unique vertex indices (0-7) and UV coordinates
  // Order: BL, BR, TR, TL for each face (viewed from outside)
  // Normals are defined per face for flat shading, or per vertex for smooth
  const faces = [
    // Front face (+Z)
    { verts: [0, 1, 2, 3], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [0, 0, 1] as [number, number, number] },
    // Back face (-Z)
    { verts: [5, 4, 7, 6], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [0, 0, -1] as [number, number, number] }, // Note: vertex order 5,4,7,6 to keep UVs consistent when viewed from outside
    // Right face (+X)
    { verts: [1, 5, 6, 2], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [1, 0, 0] as [number, number, number] },
    // Left face (-X)
    { verts: [4, 0, 3, 7], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [-1, 0, 0] as [number, number, number] },
    // Top face (+Y)
    { verts: [3, 2, 6, 7], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [0, 1, 0] as [number, number, number] },
    // Bottom face (-Y)
    { verts: [4, 5, 1, 0], uvs: [[0, 1], [1, 1], [1, 0], [0, 0]], faceNormal: [0, -1, 0] as [number, number, number] },
  ];

  for (const face of faces) {
    for (let i = 0; i < 4; i++) { // For each of the 4 vertices of the face
      const posIndex = face.verts[i];
      const position = CUBE_POSITIONS[posIndex];
      const uv = face.uvs[i];
      const normal = useSmoothNormals ? CUBE_SMOOTH_NORMALS[posIndex] : face.faceNormal;

      verticesData.push(...position, ...uv, ...normal);
    }
  }

  const vertices = new Float32Array(verticesData);
  const generatedVertexCount = 24; // We always generate 24 distinct vertex entries (pos,uv,normal sets)

  // Indices are the same for both smooth and flat shading because we have 24 vertices
  const indicesArray: number[] = [];
  for (let i = 0; i < 6; i++) { // For each face
    const baseIndex = i * 4; // Each face has 4 vertices
    indicesArray.push(
      baseIndex + 0, baseIndex + 1, baseIndex + 2, // First triangle
      baseIndex + 0, baseIndex + 2, baseIndex + 3  // Second triangle
    );
  }
  const indices = new Uint16Array(indicesArray);
  const indexCount = indices.length; // 36 indices

  return {
    vertices,
    indices,
    vertexCount: generatedVertexCount, // Number of entries in the vertices Float32Array
    indexCount,
    arrayStride,
    floatsPerVertex,
  };
}

export interface CubeGeometryOptions {
  useSmoothNormals?: boolean;
}

export class CubeGeometry extends Geometry {
  private readonly _arrayStride: number;
  private readonly _useSmoothNormals: boolean;

  constructor(renderer: Renderer, options: CubeGeometryOptions = {}) {
    const useSmoothNormals = options.useSmoothNormals !== undefined ? options.useSmoothNormals : true; // Default to true

    const { vertices, indices, vertexCount, indexCount, arrayStride } =
      _createCubeGeometryData(useSmoothNormals);

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
      vertexCount, // This should be the number of vertices in the buffer for drawing
    );

    this._arrayStride = arrayStride;
    this._useSmoothNormals = useSmoothNormals;
  }

  get cacheKey(): string {
    return `CubeGeometry_smooth:${this._useSmoothNormals}`;
  }

  get bufferLayout(): GPUVertexBufferLayout[] {
    // This layout describes the single interleaved vertex buffer.
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
