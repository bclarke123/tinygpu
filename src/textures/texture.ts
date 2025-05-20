export abstract class Texture {
  constructor() { }

  abstract get descriptor(): GPUTextureDescriptor;
  abstract getView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
  abstract upload(device: GPUDevice): void;
  abstract dispose(): void;
  abstract get width(): number;
  abstract get height(): number;
  abstract get label(): string;
  abstract get format(): GPUTextureFormat;
  abstract get dimension(): GPUTextureDimension;
  abstract get texture(): GPUTexture;
}
