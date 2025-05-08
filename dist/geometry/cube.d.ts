import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
export declare class CubeGeometry extends Geometry {
    private readonly _arrayStride;
    constructor(renderer: Renderer);
    get cacheKey(): string;
    get bufferLayout(): GPUVertexBufferLayout[];
}
