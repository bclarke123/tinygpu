"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
class Geometry {
    constructor(renderer, vertexBuffer, indexBuffer, uvBuffer, indexCount, vertexCount) {
        this._renderer = renderer;
        this._vertexBuffer = vertexBuffer;
        this._indexBuffer = indexBuffer;
        this._uvBuffer = uvBuffer;
        this._indexCount = indexCount;
        this._vertexCount = vertexCount;
    }
    get device() {
        return this._renderer.device;
    }
    get vertexBuffer() {
        return this._vertexBuffer;
    }
    get indexBuffer() {
        return this._indexBuffer;
    }
    get indexCount() {
        return this._indexCount;
    }
    get vertexCount() {
        return this._vertexCount;
    }
    get uvBuffer() {
        return this._uvBuffer;
    }
}
exports.Geometry = Geometry;
