import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
import { vec3, Vec3 } from "wgpu-matrix"; // Using wgpu-matrix

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
const CUBE_POSITIONS: Array<Vec3> = [
  vec3.fromValues(-CUBE_HALF_SIZE, -CUBE_HALF_SIZE, CUBE_HALF_SIZE), // 0: BLF
  vec3.fromValues(CUBE_HALF_SIZE, -CUBE_HALF_SIZE, CUBE_HALF_SIZE), // 1: BRF
  vec3.fromValues(CUBE_HALF_SIZE, CUBE_HALF_SIZE, CUBE_HALF_SIZE), // 2: TRF
  vec3.fromValues(-CUBE_HALF_SIZE, CUBE_HALF_SIZE, CUBE_HALF_SIZE), // 3: TLF
  vec3.fromValues(-CUBE_HALF_SIZE, -CUBE_HALF_SIZE, -CUBE_HALF_SIZE), // 4: BLB
  vec3.fromValues(CUBE_HALF_SIZE, -CUBE_HALF_SIZE, -CUBE_HALF_SIZE), // 5: BRB
  vec3.fromValues(CUBE_HALF_SIZE, CUBE_HALF_SIZE, -CUBE_HALF_SIZE), // 6: TRB
  vec3.fromValues(-CUBE_HALF_SIZE, CUBE_HALF_SIZE, -CUBE_HALF_SIZE), // 7: TLB
];

// Define vertex normals for a smooth cube (normalized positions)
const CUBE_SMOOTH_NORMALS: Array<Vec3> = CUBE_POSITIONS.map((pos) =>
  vec3.normalize(pos, vec3.create()),
);

/**
 * Generates an arbitrary tangent vector perpendicular to the given normal vector.
 * @param normal The normal vector. Must be normalized.
 * @param out The Vec3 to store the result in.
 * @returns The `out` vector.
 */
function generateArbitraryTangent(normal: Readonly<Vec3>, out: Vec3): Vec3 {
  const xAxis: Vec3 = vec3.fromValues(1, 0, 0);
  const yAxis: Vec3 = vec3.fromValues(0, 1, 0);

  // Check if normal is (almost) parallel to xAxis
  if (Math.abs(vec3.dot(normal, xAxis)) > 0.9999) {
    vec3.cross(normal, yAxis, out); // Use Y-axis to compute cross product
  } else {
    vec3.cross(normal, xAxis, out); // Use X-axis
  }
  return vec3.normalize(out, out);
}

function _createCubeGeometryData(
  useSmoothNormals: boolean = true,
): CubeGeometryData {
  const floatsPerVertex = 11; // position (3) + uv (2) + normal (3) + tangent (3)
  const arrayStride = floatsPerVertex * 4; // Bytes per vertex

  const verticesData: number[] = [];

  const faces = [
    {
      verts: [0, 1, 2, 3],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(0, 0, 1),
    },
    {
      verts: [5, 4, 7, 6],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(0, 0, -1),
    },
    {
      verts: [1, 5, 6, 2],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(1, 0, 0),
    },
    {
      verts: [4, 0, 3, 7],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(-1, 0, 0),
    },
    {
      verts: [3, 2, 6, 7],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(0, 1, 0),
    },
    {
      verts: [4, 5, 1, 0],
      uvs: [
        [0, 1],
        [1, 1],
        [1, 0],
        [0, 0],
      ],
      faceNormal: vec3.fromValues(0, -1, 0),
    },
  ];

  const edge1 = vec3.create();
  const edge2 = vec3.create();
  const calculatedTangent = vec3.create();
  const tempTangent = vec3.create();

  for (const face of faces) {
    const p0 = CUBE_POSITIONS[face.verts[0]];
    const p1 = CUBE_POSITIONS[face.verts[1]];
    const p2 = CUBE_POSITIONS[face.verts[2]];

    const uv0 = face.uvs[0];
    const uv1 = face.uvs[1];
    const uv2 = face.uvs[2];

    vec3.subtract(p1, p0, edge1);
    vec3.subtract(p2, p0, edge2);

    const deltaUV1x = uv1[0] - uv0[0];
    const deltaUV1y = uv1[1] - uv0[1];
    const deltaUV2x = uv2[0] - uv0[0];
    const deltaUV2y = uv2[1] - uv0[1];

    const r = 1.0 / (deltaUV1x * deltaUV2y - deltaUV2x * deltaUV1y);

    if (isFinite(r)) {
      calculatedTangent[0] = r * (deltaUV2y * edge1[0] - deltaUV1y * edge2[0]);
      calculatedTangent[1] = r * (deltaUV2y * edge1[1] - deltaUV1y * edge2[1]);
      calculatedTangent[2] = r * (deltaUV2y * edge1[2] - deltaUV1y * edge2[2]);
      vec3.normalize(calculatedTangent, calculatedTangent);
    } else {
      // If r is not finite, UVs might be degenerate. Use an arbitrary tangent.
      // For a cube face, a common tangent direction can be along one of its edges.
      // For example, if faceNormal is (0,0,1), tangent could be (1,0,0).
      // Here we'll use a simpler fallback based on the face normal.
      generateArbitraryTangent(face.faceNormal, calculatedTangent);
    }

    for (let i = 0; i < 4; i++) {
      const posIndex = face.verts[i];
      const position = CUBE_POSITIONS[posIndex];
      const uv = face.uvs[i];
      const normal = useSmoothNormals
        ? CUBE_SMOOTH_NORMALS[posIndex]
        : face.faceNormal;

      // Orthogonalize tangent: T' = normalize(T - N * dot(N, T))
      const NdotT = vec3.dot(normal, calculatedTangent);
      vec3.scale(normal, NdotT, tempTangent); // tempTangent = N * dot(N, T)
      vec3.subtract(calculatedTangent, tempTangent, tempTangent); // tempTangent = T - (N * dot(N, T))
      vec3.normalize(tempTangent, tempTangent);

      // If tangent is zero (e.g. calculatedTangent was parallel to normal), generate an arbitrary one
      if (vec3.length(tempTangent) < 0.0001) {
        generateArbitraryTangent(normal, tempTangent);
      }

      verticesData.push(...position, ...uv, ...normal, ...tempTangent);
    }
  }

  const vertices = new Float32Array(verticesData);
  const generatedVertexCount = 24;

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
  const indexCount = indices.length;

  return {
    vertices,
    indices,
    vertexCount: generatedVertexCount,
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
    const useSmoothNormals =
      options.useSmoothNormals !== undefined ? options.useSmoothNormals : true;

    const { vertices, indices, vertexCount, indexCount, arrayStride } =
      _createCubeGeometryData(useSmoothNormals);

    const vertexGPUBuffer = renderer.createBuffer(
      vertices,
      GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
    );
    const indexGPUBuffer = renderer.createBuffer(
      indices,
      GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
    );

    super(renderer, vertexGPUBuffer, indexGPUBuffer, indexCount, vertexCount);

    this._arrayStride = arrayStride;
    this._useSmoothNormals = useSmoothNormals;
  }

  get cacheKey(): string {
    return `CubeGeometry_smooth:${this._useSmoothNormals}_tangents_v1`;
  }

  get bufferLayout(): GPUVertexBufferLayout[] {
    return [
      {
        arrayStride: this._arrayStride, // 44
        attributes: [
          { shaderLocation: 0, offset: 0, format: "float32x3" }, // Position
          { shaderLocation: 1, offset: 3 * 4, format: "float32x2" }, // UV
          { shaderLocation: 2, offset: (3 + 2) * 4, format: "float32x3" }, // Normal
          { shaderLocation: 3, offset: (3 + 2 + 3) * 4, format: "float32x3" }, // Tangent
        ],
      },
    ];
  }
}
