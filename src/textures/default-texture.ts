import { Texture } from "./texture";

export class DefaultTexture extends Texture {
    static instance: DefaultTexture;

    private _texture: GPUTexture | null = null;
    private _textureView: GPUTextureView | null = null;
    private _pixelData: Uint8Array = new Uint8Array([255, 255, 255, 255]);

    constructor() {
        super();
    }

    get width(): number {
        return 1;
    }

    get height(): number {
        return 1;
    }

    get descriptor(): GPUTextureDescriptor {
        return {
            size: { width: 1, height: 1, depthOrArrayLayers: 1 },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }

    getView(descriptor?: GPUTextureViewDescriptor): GPUTextureView {
        if (!this._texture) {
            console.trace();
            throw new Error("Texture not created");
        }

        this._textureView ??= this._texture.createView(descriptor);
        return this._textureView;
    }

    get label(): string {
        return "Default Texture";
    }

    get format(): GPUTextureFormat {
        return this._texture.format;
    }

    get dimension(): GPUTextureDimension {
        return this._texture.dimension;
    }

    get texture() {
        return this._texture;
    }

    upload(device: GPUDevice): void {
        if (this._texture) {
            return;
        }

        this._texture = device.createTexture(this.descriptor);
        device.queue.writeTexture(
            { texture: this._texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 } },
            this._pixelData,
            { offset: 0, bytesPerRow: 4, rowsPerImage: 1 },
            { width: 1, height: 1, depthOrArrayLayers: 1 },
        );
    }

    dispose(): void {
        this._texture?.destroy();
        this._texture = null;
        this._textureView = null;
    }

    private static _instance: DefaultTexture;
    static getInstance(device: GPUDevice): DefaultTexture {
        if (!DefaultTexture._instance) {
            DefaultTexture._instance = new DefaultTexture();
            DefaultTexture._instance.upload(device);
        }
        return DefaultTexture._instance;
    }
}
