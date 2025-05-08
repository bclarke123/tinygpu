"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageTexture = exports.DefaultTexture = exports.Texture = void 0;
class Texture {
    constructor() { }
}
exports.Texture = Texture;
class DefaultTexture extends Texture {
    constructor() {
        super();
        this._texture = null;
        this._textureView = null;
        this._pixelData = new Uint8Array([255, 255, 255, 255]);
    }
    get width() {
        return 1;
    }
    get height() {
        return 1;
    }
    get descriptor() {
        return {
            size: { width: 1, height: 1, depthOrArrayLayers: 1 },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }
    get view() {
        var _a;
        if (!this._texture) {
            throw new Error("Texture not created");
        }
        (_a = this._textureView) !== null && _a !== void 0 ? _a : (this._textureView = this._texture.createView());
        return this._textureView;
    }
    upload(device) {
        if (this._texture) {
            return;
        }
        this._texture = device.createTexture(this.descriptor);
        device.queue.writeTexture({ texture: this._texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 } }, this._pixelData, { offset: 0, bytesPerRow: 4, rowsPerImage: 1 }, { width: 1, height: 1, depthOrArrayLayers: 1 });
    }
    dispose() {
        var _a;
        (_a = this._texture) === null || _a === void 0 ? void 0 : _a.destroy();
        this._texture = null;
        this._textureView = null;
    }
}
exports.DefaultTexture = DefaultTexture;
DefaultTexture.instance = new DefaultTexture();
class ImageTexture extends Texture {
    constructor(imageSrc) {
        super();
        this._width = 0;
        this._height = 0;
        this._texture = null;
        this._textureView = null;
        this._imagedata = null;
        this.src = imageSrc;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const imageResp = yield fetch(this.src);
            if (!imageResp.ok) {
                throw new Error(`Failed to load image: ${this.src}`);
            }
            const imageBlob = yield imageResp.blob();
            const imageBitmap = yield createImageBitmap(imageBlob);
            this._imagedata = imageBitmap;
            this._width = imageBitmap.width;
            this._height = imageBitmap.height;
        });
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get descriptor() {
        return {
            size: {
                width: this._width,
                height: this._height,
                depthOrArrayLayers: 1,
            },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING |
                GPUTextureUsage.COPY_DST |
                GPUTextureUsage.RENDER_ATTACHMENT,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }
    get view() {
        var _a;
        if (!this._texture) {
            throw new Error("Texture not created");
        }
        (_a = this._textureView) !== null && _a !== void 0 ? _a : (this._textureView = this._texture.createView());
        return this._textureView;
    }
    upload(device) {
        if (this._texture) {
            return;
        }
        if (!this._imagedata) {
            throw new Error("Image not loaded");
        }
        this._texture = device.createTexture(this.descriptor);
        device.queue.copyExternalImageToTexture({ source: this._imagedata, origin: { x: 0, y: 0 }, flipY: true }, { texture: this._texture, origin: { x: 0, y: 0 } }, { width: this._width, height: this._height, depthOrArrayLayers: 1 });
    }
    dispose() {
        var _a, _b;
        (_a = this._imagedata) === null || _a === void 0 ? void 0 : _a.close();
        (_b = this._texture) === null || _b === void 0 ? void 0 : _b.destroy();
        this._texture = null;
        this._textureView = null;
        this._imagedata = null;
        this._width = 0;
        this._height = 0;
    }
}
exports.ImageTexture = ImageTexture;
