export abstract class Texture {
    constructor() {
    }

    abstract get descriptor(): GPUTextureDescriptor;
    abstract get view(): GPUTextureView;
    abstract upload(device: GPUDevice): void;
    abstract dispose(): void;
    abstract get width(): number;
    abstract get height(): number;
    abstract get sampler(): GPUSampler;
}

export class DefaultTexture extends Texture {
    static instance: DefaultTexture;

    private _texture: GPUTexture | null = null;
    private _textureView: GPUTextureView | null = null;
    private _sampler: GPUSampler | null = null;
    private _pixelData: Uint8Array = new Uint8Array([255, 255, 255, 255]);

    constructor() {
        super();
    }

    get width(): number { return 1; }

    get height(): number { return 1; }

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

    get view(): GPUTextureView {
        if (!this._texture) {
            throw new Error("Texture not created");
        }

        this._textureView ??= this._texture.createView();
        return this._textureView;
    }

    get sampler(): GPUSampler {
        if (!this._sampler) {
            throw new Error("Sampler not created");
        }
        return this._sampler;
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

        this._sampler = device.createSampler({
            magFilter: "linear",
            minFilter: "linear",
        });
    }

    dispose(): void {
        this._texture?.destroy();
        this._texture = null;
        this._textureView = null;
    }
}

DefaultTexture.instance = new DefaultTexture();

export class ImageTexture extends Texture {
    private src: string;
    private _width: number = 0;
    private _height: number = 0;
    private _texture: GPUTexture | null = null;
    private _textureView: GPUTextureView | null = null;
    private _imagedata: ImageBitmap | null = null;
    private _sampler: GPUSampler | null = null;

    constructor(imageSrc: string) {
        super();
        this.src = imageSrc;
    }

    async load(): Promise<void> {
        const imageResp = await fetch(this.src);
        if (!imageResp.ok) {
            throw new Error(`Failed to load image: ${this.src}`);
        }
        const imageBlob = await imageResp.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        this._imagedata = imageBitmap;
        this._width = imageBitmap.width;
        this._height = imageBitmap.height;
    };

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get descriptor(): GPUTextureDescriptor {
        return {
            size: {
                width: this._width,
                height: this._height,
                depthOrArrayLayers: 1,
            },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }

    get view(): GPUTextureView {
        if (!this._texture) {
            throw new Error("Texture not created");
        }

        this._textureView ??= this._texture.createView();
        return this._textureView;
    }

    get sampler(): GPUSampler {
        if (!this._sampler) {
            throw new Error("Sampler not created");
        }
        return this._sampler;
    }

    upload(device: GPUDevice): void {
        if (this._texture) {
            return;
        }

        if (!this._imagedata) {
            throw new Error("Image not loaded");
        }

        this._texture = device.createTexture(this.descriptor);
        device.queue.copyExternalImageToTexture(
            { source: this._imagedata, origin: { x: 0, y: 0 } },
            { texture: this._texture, origin: { x: 0, y: 0 } },
            { width: this._width, height: this._height, depthOrArrayLayers: 1 },
        );

        this._sampler = device.createSampler({
            magFilter: "linear",
            minFilter: "linear",
        });
    }

    dispose(): void {
        this._imagedata?.close();
        this._texture?.destroy();
        this._texture = null;
        this._textureView = null;
        this._imagedata = null;
        this._width = 0;
        this._height = 0;
    }
}