import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
export interface TetrahedronGeometryOptions {
    radius: number;
}
export declare class TetrahedronGeometry extends Geometry {
    private readonly _arrayStride;
    private readonly _radius;
    constructor(renderer: Renderer, options?: TetrahedronGeometryOptions);
    get cacheKey(): string;
    get bufferLayout(): GPUVertexBufferLayout[];
}
