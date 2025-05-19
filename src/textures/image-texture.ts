import { Texture } from "./texture";

export class ImageTexture extends Texture {
    private src: string;
    private _width: number = 0;
    private _height: number = 0;
    private _texture: GPUTexture | null = null;
    private _imagedata: ImageBitmap | null = null;

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
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get imageData(): ImageBitmap {
        return this._imagedata;
    }

    get descriptor(): GPUTextureDescriptor {
        return {
            size: {
                width: this._width,
                height: this._height,
                depthOrArrayLayers: 1,
            },
            format: "rgba8unorm",
            usage:
                GPUTextureUsage.TEXTURE_BINDING |
                GPUTextureUsage.COPY_DST |
                GPUTextureUsage.RENDER_ATTACHMENT,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }

    getView(descriptor?: GPUTextureViewDescriptor): GPUTextureView {
        if (!this._texture) {
            throw new Error("Texture not created");
        }

        return this._texture.createView(descriptor);
    }

    get label(): string {
        return `ImageTexture ${this.src}`;
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

    upload(device: GPUDevice): void {
        if (this._texture) {
            return;
        }

        if (!this._imagedata) {
            throw new Error("Image not loaded");
        }

        this._texture = device.createTexture(this.descriptor);
        device.queue.copyExternalImageToTexture(
            { source: this._imagedata, origin: { x: 0, y: 0 }, flipY: true },
            { texture: this._texture, origin: { x: 0, y: 0 } },
            { width: this._width, height: this._height, depthOrArrayLayers: 1 },
        );
    }

    dispose(): void {
        this._imagedata?.close();
        this._texture?.destroy();
        this._texture = null;
        this._imagedata = null;
        this._width = 0;
        this._height = 0;
    }
}
