export declare abstract class Texture {
    constructor();
    abstract get descriptor(): GPUTextureDescriptor;
    abstract get view(): GPUTextureView;
    abstract upload(device: GPUDevice): void;
    abstract dispose(): void;
    abstract get width(): number;
    abstract get height(): number;
}
export declare class DefaultTexture extends Texture {
    static instance: DefaultTexture;
    private _texture;
    private _textureView;
    private _pixelData;
    constructor();
    get width(): number;
    get height(): number;
    get descriptor(): GPUTextureDescriptor;
    get view(): GPUTextureView;
    upload(device: GPUDevice): void;
    dispose(): void;
}
export declare class ImageTexture extends Texture {
    private src;
    private _width;
    private _height;
    private _texture;
    private _textureView;
    private _imagedata;
    constructor(imageSrc: string);
    load(): Promise<void>;
    get width(): number;
    get height(): number;
    get descriptor(): GPUTextureDescriptor;
    get view(): GPUTextureView;
    upload(device: GPUDevice): void;
    dispose(): void;
}
