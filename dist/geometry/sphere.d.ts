import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
export interface SphereGeometryOptions {
    radius: number;
    latitudeBands: number;
    longitudeBands: number;
    flatShading: boolean;
}
export declare class SphereGeometry extends Geometry {
    private readonly _arrayStride;
    private readonly _radius;
    private readonly _latitudeBands;
    private readonly _longitudeBands;
    private readonly _flatShading;
    constructor(renderer: Renderer, options?: SphereGeometryOptions);
    get cacheKey(): string;
    get bufferLayout(): GPUVertexBufferLayout[];
}
