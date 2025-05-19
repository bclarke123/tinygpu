import { Renderer } from "../renderer";
import { Geometry } from "./geometry";

interface PlaneGeometryData {
    vertices: Float32Array;
    indices: Uint16Array;
    vertexCount: number;
    indexCount: number;
    arrayStride: number;
    floatsPerVertex: number;
}

function _createPlaneGeometryData(
    width: number = 1,
    height: number = 1, // Corresponds to depth if plane is in XZ
    widthSegments: number = 1,
    heightSegments: number = 1,
): PlaneGeometryData {
    const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex

    const verticesData: number[] = [];
    const indicesData: number[] = [];

    const widthHalf = width / 2;
    const heightHalf = height / 2; // This will be depthHalf for XZ plane

    const gridX = Math.floor(widthSegments);
    const gridZ = Math.floor(heightSegments); // Using Z for segments in depth direction

    const gridX1 = gridX + 1;
    const gridZ1 = gridZ + 1;

    const segmentWidth = width / gridX;
    const segmentHeight = height / gridZ; // segmentDepth

    // Generate vertices
    for (let iz = 0; iz < gridZ1; iz++) {
        const z = iz * segmentHeight - heightHalf;
        for (let ix = 0; ix < gridX1; ix++) {
            const x = ix * segmentWidth - widthHalf;

            // Position (x, 0, z) for an XZ plane
            verticesData.push(x, 0, z);

            // UVs
            // U goes from 0 to 1 across the width (X-axis)
            // V goes from 0 to 1 across the height/depth (Z-axis)
            // Standard UV mapping often has V=0 at the "bottom" and V=1 at the "top"
            // If z increases from -heightHalf to +heightHalf, let's map V from 0 to 1 respectively.
            verticesData.push(ix / gridX, iz / gridZ);
            // Or, if you want V to be inverted (common for image textures where Y=0 is top):
            // verticesData.push(ix / gridX, 1 - (iz / gridZ));


            // Normal (all vertices point up in Y for an XZ plane)
            verticesData.push(0, 1, 0);
        }
    }

    // Generate indices
    for (let iz = 0; iz < gridZ; iz++) {
        for (let ix = 0; ix < gridX; ix++) {
            const a = ix + gridX1 * iz;
            const b = ix + gridX1 * (iz + 1);
            const c = (ix + 1) + gridX1 * (iz + 1);
            const d = (ix + 1) + gridX1 * iz;

            // Two triangles per quad cell (a, b, c, d define the quad)
            // In our grid:
            // d --- c
            // |  \  |
            // |   \ |
            // a --- b  (if iz increases "down" in UV space, or "forward" in Z world space)
            // No, let's use the vertex order from generation:
            // (ix, iz) *---* (ix+1, iz)
            //          | \ |
            // (ix,iz+1)*---* (ix+1, iz+1)
            //
            // Let v1 = current (ix, iz)
            // Let v2 = next col (ix+1, iz)
            // Let v3 = current col, next row (ix, iz+1)
            // Let v4 = next col, next row (ix+1, iz+1)
            //
            // v1 = (iz * gridX1) + ix;
            // v2 = v1 + 1;
            // v3 = ((iz + 1) * gridX1) + ix;
            // v4 = v3 + 1;

            // Triangle 1 (CCW): v1, v3, v2
            // Triangle 2 (CCW): v2, v3, v4 (No, this is v3,v4,v2 or v2,v3,v4)
            // Let's use the a,b,c,d from above, which were:
            // a = ix + gridX1 * iz;             // bottom-left of cell (current ix, current iz)
            // b = (ix+1) + gridX1 * iz;         // bottom-right of cell (next ix, current iz)
            // c = ix + gridX1 * (iz+1);         // top-left of cell (current ix, next iz)
            // d = (ix+1) + gridX1 * (iz+1);     // top-right of cell (next ix, next iz)
            //
            // Quad:
            // c --- d
            // | \   |
            // a --- b
            //
            // Triangle 1: a, b, d (CCW)
            // Triangle 2: a, d, c (CCW)

            // Corrected indices based on the vertex generation order:
            const v_ix_iz = iz * gridX1 + ix;             // Current vertex: (ix, iz)
            const v_ix1_iz = v_ix_iz + 1;                 // Right neighbor: (ix+1, iz)
            const v_ix_iz1 = (iz + 1) * gridX1 + ix;      // Vertex below: (ix, iz+1)
            const v_ix1_iz1 = v_ix_iz1 + 1;               // Diagonal vertex: (ix+1, iz+1)

            // Triangle 1 (CCW, assuming Y-up normal)
            indicesData.push(v_ix_iz, v_ix_iz1, v_ix1_iz);
            // Triangle 2 (CCW, assuming Y-up normal)
            indicesData.push(v_ix1_iz, v_ix_iz1, v_ix1_iz1);
        }
    }

    const vertices = new Float32Array(verticesData);
    const indices = new Uint16Array(indicesData);
    const vertexCount = vertices.length / floatsPerVertex;
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

export interface PlaneGeometryOptions {
    width?: number;
    height?: number; // This will effectively be the "depth" for an XZ plane
    widthSegments?: number;
    heightSegments?: number; // Segments along the "depth"
}

export class PlaneGeometry extends Geometry {
    private readonly _arrayStride: number;
    private readonly _width: number;
    private readonly _height: number;
    private readonly _widthSegments: number;
    private readonly _heightSegments: number;

    constructor(renderer: Renderer, options: PlaneGeometryOptions = {}) {
        const width = options.width !== undefined ? options.width : 1;
        const height = options.height !== undefined ? options.height : 1;
        const widthSegments = options.widthSegments !== undefined ? Math.max(1, Math.floor(options.widthSegments)) : 1;
        const heightSegments = options.heightSegments !== undefined ? Math.max(1, Math.floor(options.heightSegments)) : 1;

        const { vertices, indices, vertexCount, indexCount, arrayStride, floatsPerVertex } =
            _createPlaneGeometryData(width, height, widthSegments, heightSegments);

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
        this._width = width;
        this._height = height;
        this._widthSegments = widthSegments;
        this._heightSegments = heightSegments;
    }

    get cacheKey(): string {
        return `PlaneGeometry_w${this._width}_h${this._height}_ws${this._widthSegments}_hs${this._heightSegments}`;
    }

    get bufferLayout(): GPUVertexBufferLayout[] {
        return [
            {
                arrayStride: this._arrayStride, // Should be 8 floats * 4 bytes/float = 32
                attributes: [
                    {
                        // Position
                        shaderLocation: 0,
                        offset: 0,
                        format: "float32x3",
                    },
                    {
                        // UV
                        shaderLocation: 1,
                        offset: 3 * 4, // After 3 position floats
                        format: "float32x2",
                    },
                    {
                        // Normal
                        shaderLocation: 2,
                        offset: (3 + 2) * 4, // After 3 position floats + 2 UV floats
                        format: "float32x3",
                    },
                ],
            },
        ];
    }
}
