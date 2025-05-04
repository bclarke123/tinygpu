import { Renderer } from "../renderer";

export abstract class Geometry {
    protected _renderer: Renderer;
    protected _vertexBuffer: GPUBuffer;
    protected _indexBuffer: GPUBuffer;
    protected _uvBuffer: GPUBuffer;
    protected _indexCount: number;
    protected _vertexCount: number;

    constructor(renderer: Renderer, vertexBuffer: GPUBuffer, indexBuffer: GPUBuffer, uvBuffer: GPUBuffer, indexCount: number, vertexCount: number) {
        this._renderer = renderer;
        this._vertexBuffer = vertexBuffer;
        this._indexBuffer = indexBuffer;
        this._uvBuffer = uvBuffer;
        this._indexCount = indexCount;
        this._vertexCount = vertexCount;
    }

    get device(): GPUDevice {
        return this._renderer.device!;
    }

    get vertexBuffer(): GPUBuffer {
        return this._vertexBuffer;
    }

    get indexBuffer(): GPUBuffer {
        return this._indexBuffer;
    }

    get indexCount(): number {
        return this._indexCount;
    }

    get vertexCount(): number {
        return this._vertexCount;
    }

    abstract get cacheKey(): string;
    abstract get bufferLayout(): GPUVertexBufferLayout[];
}