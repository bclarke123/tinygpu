export class VideoTexture {
  private _texture: GPUExternalTexture;
  private _video: HTMLVideoElement;
  private _device: GPUDevice;

  constructor(device: GPUDevice, video: HTMLVideoElement) {
    this._device = device;
    this._video = video;
  }
  get width(): number {
    return this._video.width;
  }
  get height(): number {
    return this._video.height;
  }
  get label(): string {
    return this._texture?.label;
  }
  get format(): GPUTextureFormat {
    return "rgba8unorm";
  }
  get dimension(): GPUTextureDimension {
    return "2d";
  }
  get texture(): GPUExternalTexture {
    this._texture = this._device.importExternalTexture({
      source: this._video,
    });
    return this._texture;
  }
  get video(): HTMLVideoElement {
    return this._video;
  }
}
