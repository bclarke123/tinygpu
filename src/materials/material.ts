export abstract class Material {
    protected _device: GPUDevice;

    constructor(device: GPUDevice) {
        this._device = device;
    }

    abstract get cacheKey(): string;
    abstract get shaderCode(): GPUShaderModule;
}