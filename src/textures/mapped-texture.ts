import { Texture } from "./texture";

export class MappedTexture extends Texture {
    private _descriptor: GPUTextureDescriptor;
    private _texture: GPUTexture;

    constructor(descriptor: GPUTextureDescriptor) {
        super();
        this._descriptor = descriptor;
    }
    get descriptor(): GPUTextureDescriptor {
        return this._descriptor;
    }
    getView(descriptor?: GPUTextureViewDescriptor): GPUTextureView {
        return this._texture.createView(descriptor);
    }
    upload(device: GPUDevice): void {
        if (!this._texture) {
            this._texture = device.createTexture(this.descriptor);
        }
    }
    dispose(): void {
        this._texture.destroy();
    }
    get width(): number {
        return this._texture.width;
    }
    get height(): number {
        return this._texture.height;
    }
    get label(): string {
        return this._texture.label;
    }
    get format(): GPUTextureFormat {
        return this._texture.format;
    }
    get dimension(): GPUTextureDimension {
        return this._texture.dimension;
    }
    get texture(): GPUTexture {
        return this._texture;
    }
}
