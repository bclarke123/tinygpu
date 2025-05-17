export abstract class Texture {
  constructor() { }

  abstract get descriptor(): GPUTextureDescriptor;
  abstract get view(): GPUTextureView;
  abstract upload(device: GPUDevice): void;
  abstract dispose(): void;
  abstract get width(): number;
  abstract get height(): number;
  abstract get label(): string;
  abstract get format(): GPUTextureFormat;
  abstract get dimension(): GPUTextureDimension;
  abstract get texture(): GPUTexture;
}

export class MappedTexture extends Texture {
  private _descriptor: GPUTextureDescriptor;
  private _view: GPUTextureView;
  private _texture: GPUTexture;

  viewDescriptor: GPUTextureViewDescriptor;

  constructor(descriptor: GPUTextureDescriptor) {
    super();
    this._descriptor = descriptor;
  }
  get descriptor(): GPUTextureDescriptor {
    return this._descriptor;
  }
  get view(): GPUTextureView {
    if (!this._view) {
      this._view = this._texture.createView(this.viewDescriptor);
    }
    return this._view;
  }
  upload(device: GPUDevice): void {
    this._texture = device.createTexture(this.descriptor);
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

  get view(): GPUTextureView {
    if (!this._texture) {
      throw new Error("Texture not created");
    }

    this._textureView ??= this._texture.createView();
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
}

DefaultTexture.instance = new DefaultTexture();

export class ImageTexture extends Texture {
  private src: string;
  private _width: number = 0;
  private _height: number = 0;
  private _texture: GPUTexture | null = null;
  private _textureView: GPUTextureView | null = null;
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

  get view(): GPUTextureView {
    if (!this._texture) {
      throw new Error("Texture not created");
    }

    this._textureView ??= this._texture.createView();
    return this._textureView;
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
    this._textureView = null;
    this._imagedata = null;
    this._width = 0;
    this._height = 0;
  }
}
