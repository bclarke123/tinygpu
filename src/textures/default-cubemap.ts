// default-cubemap-texture.ts
import { Color } from "../color";
import { Texture } from "./texture"; // Assuming your abstract Texture class is in texture.ts

export class DefaultCubemapTexture extends Texture {
    private static _instance: DefaultCubemapTexture;
    private _texture: GPUTexture | null = null;
    private _view: GPUTextureView | null = null;
    private _pixelData: Uint8Array; // e.g., black or grey

    private constructor(device?: GPUDevice, defaultColor: Color = new Color(0, 0, 0)) { // Default to black
        super();
        this._pixelData = defaultColor.toPixelData();
        if (device) {
            this.upload(device); // Auto-upload if device is provided
        }
    }

    public static getInstance(device: GPUDevice, defaultColor?: Color): DefaultCubemapTexture {
        if (!DefaultCubemapTexture._instance) {
            DefaultCubemapTexture._instance = new DefaultCubemapTexture(device, defaultColor);
        }

        return DefaultCubemapTexture._instance;
    }

    get descriptor(): GPUTextureDescriptor {
        return {
            label: "Default_Cubemap_GPUTexture",
            size: { width: 1, height: 1, depthOrArrayLayers: 6 }, // 6 layers for a cubemap
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: "2d", // Created as a 2D array texture
        };
    }

    override get view(): GPUTextureView {
        if (!this._view) {
            if (!this._texture) {
                throw new Error("DefaultCubemapTexture: GPUTexture not created. Call upload() or ensure device was passed to getInstance().");
            }
            this._view = this._texture.createView({
                label: "Default_Cubemap_TextureView (cube)",
                dimension: "cube", // Crucial: view as a cubemap
            });
        }
        return this._view;
    }

    upload(device: GPUDevice): void {
        if (this._texture) {
            console.warn("DefaultCubemapTexture already uploaded.");
            return;
        }
        this._texture = device.createTexture(this.descriptor);

        for (let i = 0; i < 6; i++) {
            device.queue.writeTexture(
                { texture: this._texture, origin: [0, 0, i] },
                this._pixelData,
                { offset: 0, bytesPerRow: 4, rowsPerImage: 1 }, // For a 1x1 texture
                { width: 1, height: 1, depthOrArrayLayers: 1 }  // Size of one layer
            );
        }
        console.log("DefaultCubemapTexture uploaded with color:", this._pixelData);
    }

    dispose(): void {
        // Singleton might not be disposed frequently, or managed by renderer shutdown
        this._texture?.destroy();
        this._texture = null;
        this._view = null; // View is implicitly gone with texture
    }

    // Implement other abstract members from Texture
    get width(): number { return 1; }
    get height(): number { return 1; }
    get label(): string { return "Default Cubemap Texture"; }
    get format(): GPUTextureFormat { return this.descriptor.format; }
    get dimension(): GPUTextureDimension { return "2d"; } // The underlying GPUTexture is a 2D array

    get texture(): GPUTexture {
        if (!this._texture) {
            throw new Error("DefaultCubemapTexture: GPUTexture not available. Call upload() or ensure device was passed to getInstance().");
        }
        return this._texture;
    }
}
