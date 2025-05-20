import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
import { vec3, Vec3 } from "wgpu-matrix"; // Using wgpu-matrix

interface TetrahedronGeometryData {
  vertices: Float32Array;
  indices: Uint16Array;
  vertexCount: number;
  indexCount: number;
  arrayStride: number;
  floatsPerVertex: number;
}

// Define the 4 unique vertex positions for a tetrahedron
const TETRA_BASE_POSITIONS: Array<Vec3> = [
  vec3.fromValues(1, 1, 1),
  vec3.fromValues(1, -1, -1),
  vec3.fromValues(-1, 1, -1),
  vec3.fromValues(-1, -1, 1),
];

// Vertex normals for a smooth regular tetrahedron are just the normalized positions
const TETRA_SMOOTH_NORMALS: Array<Vec3> = TETRA_BASE_POSITIONS.map((pos) =>
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

  if (Math.abs(vec3.dot(normal, xAxis)) > 0.9999) {
    vec3.cross(normal, yAxis, out);
  } else {
    vec3.cross(normal, xAxis, out);
  }
  return vec3.normalize(out, out);
}

function _createTetrahedronGeometryData(
  radius: number = 0.5,
  useSmoothNormals: boolean = true,
): TetrahedronGeometryData {
  const floatsPerVertex = 11; // position (3) + uv (2) + normal (3) + tangent (3)
  const arrayStride = floatsPerVertex * 4;

  const scale = radius / vec3.length(TETRA_BASE_POSITIONS[0]); // Scale to fit radius
  const scaledPositions = TETRA_BASE_POSITIONS.map((p) =>
    vec3.scale(p, scale, vec3.create()),
  );

  const faces = [
    {
      posIndices: [0, 2, 1],
      uvs: [
        [0.5, 1.0],
        [0.0, 0.0],
        [1.0, 0.0],
      ],
    },
    {
      posIndices: [0, 1, 3],
      uvs: [
        [0.5, 1.0],
        [0.0, 0.0],
        [1.0, 0.0],
      ],
    },
    {
      posIndices: [0, 3, 2],
      uvs: [
        [0.5, 1.0],
        [0.0, 0.0],
        [1.0, 0.0],
      ],
    },
    {
      posIndices: [1, 2, 3],
      uvs: [
        [0.0, 0.0],
        [1.0, 0.0],
        [0.5, 1.0],
      ],
    },
  ];

  const vertexData: number[] = [];
  const indexData: number[] = [];
  let vertexCounter = 0;

  const edge1 = vec3.create();
  const edge2 = vec3.create();
  const faceNormal = vec3.create();
  const calculatedTangent = vec3.create();
  const tempTangent = vec3.create();

  for (const face of faces) {
    const pA_idx = face.posIndices[0];
    const pB_idx = face.posIndices[1];
    const pC_idx = face.posIndices[2];

    const vA_pos = scaledPositions[pA_idx];
    const vB_pos = scaledPositions[pB_idx];
    const vC_pos = scaledPositions[pC_idx];

    const uvA = face.uvs[0];
    const uvB = face.uvs[1];
    const uvC = face.uvs[2];

    // Calculate face normal (for flat shading or as a basis if smooth normals are different)
    // Winding order for indices is (idx, idx+2, idx+1) which corresponds to (vA, vC, vB)
    // So normal is cross(vC-vA, vB-vA)
    vec3.subtract(vC_pos, vA_pos, edge1); // Edge AC
    vec3.subtract(vB_pos, vA_pos, edge2); // Edge AB
    vec3.cross(edge1, edge2, faceNormal);
    vec3.normalize(faceNormal, faceNormal);

    // Calculate tangent for the face (vA, vB, vC as per original UV mapping)
    // For tangent: use (vA, vB, vC)
    vec3.subtract(vB_pos, vA_pos, edge1); // Edge AB for tangent
    vec3.subtract(vC_pos, vA_pos, edge2); // Edge AC for tangent

    const deltaUV1x = uvB[0] - uvA[0];
    const deltaUV1y = uvB[1] - uvA[1];
    const deltaUV2x = uvC[0] - uvA[0];
    const deltaUV2y = uvC[1] - uvA[1];

    const r = 1.0 / (deltaUV1x * deltaUV2y - deltaUV2x * deltaUV1y);
    if (isFinite(r)) {
      calculatedTangent[0] = r * (deltaUV2y * edge1[0] - deltaUV1y * edge2[0]);
      calculatedTangent[1] = r * (deltaUV2y * edge1[1] - deltaUV1y * edge2[1]);
      calculatedTangent[2] = r * (deltaUV2y * edge1[2] - deltaUV1y * edge2[2]);
      vec3.normalize(calculatedTangent, calculatedTangent);
    } else {
      generateArbitraryTangent(faceNormal, calculatedTangent);
    }

    const faceVerticesData = [
      { posIdx: pA_idx, uv: uvA },
      { posIdx: pB_idx, uv: uvB },
      { posIdx: pC_idx, uv: uvC },
    ];

    for (const vert of faceVerticesData) {
      const position = scaledPositions[vert.posIdx];
      const uv = vert.uv;
      const normal = useSmoothNormals
        ? TETRA_SMOOTH_NORMALS[vert.posIdx]
        : faceNormal;

      // Orthogonalize tangent
      const NdotT = vec3.dot(normal, calculatedTangent);
      vec3.scale(normal, NdotT, tempTangent);
      vec3.subtract(calculatedTangent, tempTangent, tempTangent);
      vec3.normalize(tempTangent, tempTangent);

      if (vec3.length(tempTangent) < 0.0001) {
        generateArbitraryTangent(normal, tempTangent);
      }
      vertexData.push(...position, ...uv, ...normal, ...tempTangent);
    }
    // Winding order for CCW based on original face.verts = [vA, vB, vC]
    // If normal is cross(vC-vA, vB-vA), then indices are (vA, vC, vB)
    indexData.push(vertexCounter + 0, vertexCounter + 2, vertexCounter + 1);
    vertexCounter += 3;
  }

  const vertices = new Float32Array(vertexData);
  const indices = new Uint16Array(indexData);
  const generatedVertexCount = 12; // 4 faces * 3 vertices/face

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
    const useSmoothNormals =
      options.useSmoothNormals !== undefined ? options.useSmoothNormals : true;

    const { vertices, indices, vertexCount, indexCount, arrayStride } =
      _createTetrahedronGeometryData(radius, useSmoothNormals);

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
    this._radius = radius;
    this._useSmoothNormals = useSmoothNormals;
  }

  get cacheKey(): string {
    return `TetrahedronGeometry_r${this._radius}_smooth:${this._useSmoothNormals}_tangents_v1`;
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
