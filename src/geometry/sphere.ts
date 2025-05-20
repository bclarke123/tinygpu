import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
import { vec3, Vec3 } from "wgpu-matrix"; // Using wgpu-matrix

interface SphereGeometryData {
  vertices: Float32Array;
  indices: Uint16Array;
  vertexCount: number;
  indexCount: number;
  arrayStride: number;
  floatsPerVertex: number;
}

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

function _createSphereGeometryData(
  radius: number = 0.5,
  latitudeBands: number = 32,
  longitudeBands: number = 64,
  flatShading: boolean = false,
): SphereGeometryData {
  const floatsPerVertex = 11; // position (3) + uv (2) + normal (3) + tangent (3)
  const arrayStride = floatsPerVertex * 4;

  const vertexData: number[] = [];
  const indexData: number[] = [];
  let finalVertexCount = 0;

  // Temporary vectors for calculations
  const edge1 = vec3.create();
  const edge2 = vec3.create();
  const triTangent = vec3.create();
  const tempVec = vec3.create();

  if (!flatShading) {
    // Smooth Shading Logic
    const numUniqueVertices = (latitudeBands + 1) * (longitudeBands + 1);
    finalVertexCount = numUniqueVertices;

    const rawPositions: Vec3[] = [];
    const rawNormals: Vec3[] = [];
    const rawUVs: Array<[number, number]> = [];
    // Initialize rawTangents with zero vectors
    const rawTangents: Vec3[] = new Array(numUniqueVertices)
      .fill(null)
      .map(() => vec3.create(0, 0, 0));

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

        rawPositions.push(vec3.fromValues(radius * x, radius * y, radius * z));
        rawNormals.push(vec3.fromValues(x, y, z)); // Normal is just normalized position for a sphere
        rawUVs.push([u, v]);
      }
    }

    for (let latNumber = 0; latNumber < latitudeBands; latNumber++) {
      for (let longNumber = 0; longNumber < longitudeBands; longNumber++) {
        const first = latNumber * (longitudeBands + 1) + longNumber;
        const second = first + longitudeBands + 1;

        // Triangle 1: (first, first + 1, second)
        const i0 = first;
        const i1 = first + 1;
        const i2 = second;
        indexData.push(i0, i1, i2);

        const p0_t1 = rawPositions[i0];
        const p1_t1 = rawPositions[i1];
        const p2_t1 = rawPositions[i2];
        const uv0_t1 = rawUVs[i0];
        const uv1_t1 = rawUVs[i1];
        const uv2_t1 = rawUVs[i2];

        vec3.subtract(p1_t1, p0_t1, edge1);
        vec3.subtract(p2_t1, p0_t1, edge2);
        const dUV1x_t1 = uv1_t1[0] - uv0_t1[0];
        const dUV1y_t1 = uv1_t1[1] - uv0_t1[1];
        const dUV2x_t1 = uv2_t1[0] - uv0_t1[0];
        const dUV2y_t1 = uv2_t1[1] - uv0_t1[1];
        let r_t1 = 1.0 / (dUV1x_t1 * dUV2y_t1 - dUV2x_t1 * dUV1y_t1);

        if (isFinite(r_t1)) {
          triTangent[0] = r_t1 * (dUV2y_t1 * edge1[0] - dUV1y_t1 * edge2[0]);
          triTangent[1] = r_t1 * (dUV2y_t1 * edge1[1] - dUV1y_t1 * edge2[1]);
          triTangent[2] = r_t1 * (dUV2y_t1 * edge1[2] - dUV1y_t1 * edge2[2]);
          // Do not normalize here, accumulate first
          vec3.add(rawTangents[i0], triTangent, rawTangents[i0]);
          vec3.add(rawTangents[i1], triTangent, rawTangents[i1]);
          vec3.add(rawTangents[i2], triTangent, rawTangents[i2]);
        }

        // Triangle 2: (second, first + 1, second + 1)
        const i3 = second;
        const i4 = first + 1;
        const i5 = second + 1;
        indexData.push(i3, i4, i5);

        const p0_t2 = rawPositions[i3];
        const p1_t2 = rawPositions[i4];
        const p2_t2 = rawPositions[i5];
        const uv0_t2 = rawUVs[i3];
        const uv1_t2 = rawUVs[i4];
        const uv2_t2 = rawUVs[i5];

        vec3.subtract(p1_t2, p0_t2, edge1);
        vec3.subtract(p2_t2, p0_t2, edge2);
        const dUV1x_t2 = uv1_t2[0] - uv0_t2[0];
        const dUV1y_t2 = uv1_t2[1] - uv0_t2[1];
        const dUV2x_t2 = uv2_t2[0] - uv0_t2[0];
        const dUV2y_t2 = uv2_t2[1] - uv0_t2[1];
        let r_t2 = 1.0 / (dUV1x_t2 * dUV2y_t2 - dUV2x_t2 * dUV1y_t2);

        if (isFinite(r_t2)) {
          triTangent[0] = r_t2 * (dUV2y_t2 * edge1[0] - dUV1y_t2 * edge2[0]);
          triTangent[1] = r_t2 * (dUV2y_t2 * edge1[1] - dUV1y_t2 * edge2[1]);
          triTangent[2] = r_t2 * (dUV2y_t2 * edge1[2] - dUV1y_t2 * edge2[2]);
          vec3.add(rawTangents[i3], triTangent, rawTangents[i3]);
          vec3.add(rawTangents[i4], triTangent, rawTangents[i4]);
          vec3.add(rawTangents[i5], triTangent, rawTangents[i5]);
        }
      }
    }

    // Normalize and orthogonalize accumulated tangents
    for (let i = 0; i < numUniqueVertices; i++) {
      const n = rawNormals[i];
      const t = rawTangents[i]; // Accumulated tangent

      // Orthogonalize: T' = T - N * dot(N, T)
      const nDotT = vec3.dot(n, t);
      vec3.scale(n, nDotT, tempVec); // tempVec = N * dot(N, T)
      vec3.subtract(t, tempVec, t); // t = T - (N * dot(N, T))
      vec3.normalize(t, t); // Normalize the result

      if (vec3.length(t) < 0.0001) {
        // If result is zero, generate arbitrary
        generateArbitraryTangent(n, t);
      }
      rawTangents[i] = t; // Store the final tangent
    }

    // Build final vertexData
    for (let i = 0; i < numUniqueVertices; i++) {
      vertexData.push(
        ...rawPositions[i],
        ...rawUVs[i],
        ...rawNormals[i],
        ...rawTangents[i],
      );
    }
  } else {
    // Flat Shading Logic
    let vertexCounter = 0;
    const p = [vec3.create(), vec3.create(), vec3.create(), vec3.create()];
    const uv = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const triNormal = vec3.create();
    const tangent = vec3.create();

    for (let latNumber = 0; latNumber < latitudeBands; latNumber++) {
      for (let longNumber = 0; longNumber < longitudeBands; longNumber++) {
        // Define the 4 vertices of the quad for this segment
        for (let i = 0; i < 2; i++) {
          // lat offset
          const currentLat = latNumber + i;
          const theta = (currentLat * Math.PI) / latitudeBands;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          for (let j = 0; j < 2; j++) {
            // lon offset
            const currentLong = longNumber + j;
            const phi = (currentLong * 2 * Math.PI) / longitudeBands;
            const sinPhi = Math.sin(phi);
            const cosPhi = Math.cos(phi);
            const x = cosPhi * sinTheta;
            const y = cosTheta;
            const z = sinPhi * sinTheta;
            const u_coord = 1 - currentLong / longitudeBands;
            const v_coord = 1 - currentLat / latitudeBands;

            const pointIndex = i * 2 + j;
            vec3.set(radius * x, radius * y, radius * z, p[pointIndex]);
            uv[pointIndex][0] = u_coord;
            uv[pointIndex][1] = v_coord;
          }
        }
        const p0 = p[0];
        const p1 = p[1];
        const p2 = p[2];
        const p3 = p[3];
        const uv0 = uv[0];
        const uv1 = uv[1];
        const uv2 = uv[2];
        const uv3 = uv[3];

        // Triangle 1: p0, p1, p2 (CCW)
        vec3.subtract(p1, p0, edge1);
        vec3.subtract(p2, p0, edge2);
        vec3.cross(edge1, edge2, triNormal);
        vec3.normalize(triNormal, triNormal);

        const dUV1x_t1 = uv1[0] - uv0[0];
        const dUV1y_t1 = uv1[1] - uv0[1];
        const dUV2x_t1 = uv2[0] - uv0[0];
        const dUV2y_t1 = uv2[1] - uv0[1];
        let r_t1 = 1.0 / (dUV1x_t1 * dUV2y_t1 - dUV2x_t1 * dUV1y_t1);
        if (isFinite(r_t1)) {
          tangent[0] = r_t1 * (dUV2y_t1 * edge1[0] - dUV1y_t1 * edge2[0]);
          tangent[1] = r_t1 * (dUV2y_t1 * edge1[1] - dUV1y_t1 * edge2[1]);
          tangent[2] = r_t1 * (dUV2y_t1 * edge1[2] - dUV1y_t1 * edge2[2]);
          vec3.normalize(tangent, tangent);
          const nDotT = vec3.dot(triNormal, tangent);
          vec3.scale(triNormal, nDotT, tempVec);
          vec3.subtract(tangent, tempVec, tangent);
          vec3.normalize(tangent, tangent);
          if (vec3.length(tangent) < 0.0001)
            generateArbitraryTangent(triNormal, tangent);
        } else {
          generateArbitraryTangent(triNormal, tangent);
        }

        vertexData.push(...p0, ...uv0, ...triNormal, ...tangent);
        vertexData.push(...p1, ...uv1, ...triNormal, ...tangent);
        vertexData.push(...p2, ...uv2, ...triNormal, ...tangent);
        indexData.push(vertexCounter, vertexCounter + 1, vertexCounter + 2);
        vertexCounter += 3;

        // Triangle 2: p2, p1, p3 -> re-order for CCW: p2, p3, p1 (if p0,p1,p2,p3 is quad BL,BR,TL,TR)
        // Using standard quad: p0 (BL), p1 (BR), p2 (TL), p3 (TR)
        // Tri1: p0, p1, p2.  Tri2: p2, p1, p3 (this is not CCW if p0,p1,p2 was CCW)
        // For CCW: p0,p1,p3 and p0,p3,p2. Or p0,p1,p2 and p2,p1,p3 (if using p0,p1,p2,p3 as BL,BR,TR,TL)
        // The original code used: p0,p1,p2 and p2,p1,p3.
        // Let's use p0, p1, p3 and p0, p3, p2. This means for the second triangle:
        // p0, p3, p2
        // For flat shading, recalculate normal and tangent for the second triangle
        vec3.subtract(p3, p0, edge1); // p0 -> p3
        vec3.subtract(p2, p0, edge2); // p0 -> p2
        vec3.cross(edge1, edge2, triNormal); // Normal for (p0, p3, p2)
        vec3.normalize(triNormal, triNormal);

        const dUV1x_t2 = uv3[0] - uv0[0];
        const dUV1y_t2 = uv3[1] - uv0[1]; // uv for p0->p3
        const dUV2x_t2 = uv2[0] - uv0[0];
        const dUV2y_t2 = uv2[1] - uv0[1]; // uv for p0->p2
        let r_t2 = 1.0 / (dUV1x_t2 * dUV2y_t2 - dUV2x_t2 * dUV1y_t2);

        if (isFinite(r_t2)) {
          tangent[0] = r_t2 * (dUV2y_t2 * edge1[0] - dUV1y_t2 * edge2[0]);
          tangent[1] = r_t2 * (dUV2y_t2 * edge1[1] - dUV1y_t2 * edge2[1]);
          tangent[2] = r_t2 * (dUV2y_t2 * edge1[2] - dUV1y_t2 * edge2[2]);
          vec3.normalize(tangent, tangent);
          const nDotT = vec3.dot(triNormal, tangent);
          vec3.scale(triNormal, nDotT, tempVec);
          vec3.subtract(tangent, tempVec, tangent);
          vec3.normalize(tangent, tangent);
          if (vec3.length(tangent) < 0.0001)
            generateArbitraryTangent(triNormal, tangent);
        } else {
          generateArbitraryTangent(triNormal, tangent);
        }

        vertexData.push(...p0, ...uv0, ...triNormal, ...tangent); // Re-push p0 for this triangle
        vertexData.push(...p3, ...uv3, ...triNormal, ...tangent);
        vertexData.push(...p2, ...uv2, ...triNormal, ...tangent);
        indexData.push(vertexCounter, vertexCounter + 1, vertexCounter + 2);
        vertexCounter += 3;
      }
    }
    finalVertexCount = vertexCounter; // Each vertex is unique for flat shading
  }

  const vertices = new Float32Array(vertexData);
  const indices = new Uint16Array(indexData);
  const indexCount = indices.length;

  return {
    vertices,
    indices,
    vertexCount: finalVertexCount,
    indexCount,
    arrayStride,
    floatsPerVertex,
  };
}

export interface SphereGeometryOptions {
  radius?: number; // Optional because of default
  latitudeBands?: number;
  longitudeBands?: number;
  flatShading?: boolean;
}

export class SphereGeometry extends Geometry {
  private readonly _arrayStride: number;
  private readonly _radius: number;
  private readonly _latitudeBands: number;
  private readonly _longitudeBands: number;
  private readonly _flatShading: boolean;

  constructor(renderer: Renderer, options: SphereGeometryOptions = {}) {
    const radius = options.radius !== undefined ? options.radius : 0.5;
    const latitudeBands =
      options.latitudeBands !== undefined ? options.latitudeBands : 32;
    const longitudeBands =
      options.longitudeBands !== undefined ? options.longitudeBands : 64;
    const flatShading =
      options.flatShading !== undefined ? options.flatShading : false;

    const { vertices, indices, vertexCount, indexCount, arrayStride } =
      _createSphereGeometryData(
        radius,
        latitudeBands,
        longitudeBands,
        flatShading,
      );

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
    this._latitudeBands = latitudeBands;
    this._longitudeBands = longitudeBands;
    this._flatShading = flatShading;
  }

  get cacheKey(): string {
    return `SphereGeometry_r${this._radius}_lat${this._latitudeBands}_lon${this._longitudeBands}_flat${this._flatShading}_tangents_v1`;
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
