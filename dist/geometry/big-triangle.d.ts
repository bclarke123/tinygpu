import { Renderer } from "../renderer";
import { Geometry } from "./geometry";
export declare class BigTriangle extends Geometry {
    constructor(renderer: Renderer);
    get cacheKey(): string;
    get bufferLayout(): GPUVertexBufferLayout[];
}
