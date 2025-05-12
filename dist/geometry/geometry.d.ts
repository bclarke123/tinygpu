import { Renderer } from "../renderer";
export declare abstract class Geometry {
    protected _renderer: Renderer;
    protected _vertexBuffer: GPUBuffer;
    protected _indexBuffer: GPUBuffer;
    protected _uvBuffer: GPUBuffer;
    protected _indexCount: number;
    protected _vertexCount: number;
    constructor(renderer: Renderer, vertexBuffer: GPUBuffer, indexBuffer: GPUBuffer, indexCount: number, vertexCount: number);
    get device(): GPUDevice;
    get vertexBuffer(): GPUBuffer;
    get indexBuffer(): GPUBuffer;
    get indexCount(): number;
    get vertexCount(): number;
    get uvBuffer(): GPUBuffer;
    abstract get cacheKey(): string;
    abstract get bufferLayout(): GPUVertexBufferLayout[];
}
