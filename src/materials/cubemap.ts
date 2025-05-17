import { Renderer } from "../renderer";
import { ImageTexture, Texture } from "../texture";

export class Cubemap {
    posx: ImageTexture;
    negx: ImageTexture;
    posy: ImageTexture;
    negy: ImageTexture;
    posz: ImageTexture;
    negz: ImageTexture;

    images: ImageTexture[];

    cubemapTexture: Texture;

    constructor(renderer: Renderer, posx: ImageTexture, negx: ImageTexture, posy: ImageTexture, negy: ImageTexture, posz: ImageTexture, negz: ImageTexture) {
        this.posx = posx;
        this.negx = negx;
        this.posy = posy;
        this.negy = negy;
        this.posz = posz;
        this.negz = negz;

        this.images = [
            posx, negx,
            posy, negy,
            posz, negz
        ];

        const cubemapTexture = renderer.createTexture({
            format: "rgba8unorm",
            size: [posx.width, posx.height, 6],
            usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
            dimension: "2d"
        });

        this.cubemapTexture = cubemapTexture;

        this.images.forEach((im, layer) => {
            renderer.device.queue.copyExternalImageToTexture(
                { source: im.imageData, flipY: true },
                { texture: this.cubemapTexture.texture, origin: [0, 0, layer] },
                { width: im.width, height: im.height, depthOrArrayLayers: 1 }
            );
        });

        cubemapTexture.viewDescriptor = {
            dimension: "cube",
            aspect: "all",
            baseMipLevel: 0,
            mipLevelCount: 1,
            baseArrayLayer: 0,
            arrayLayerCount: 6
        };
    }

    static async createFromFiles(renderer: Renderer, posx: string, negx: string, posy: string, negy: string, posz: string, negz: string): Promise<Cubemap> {
        const images = [
            posx, negx,
            posy, negy,
            posz, negz
        ].map((i) => new ImageTexture(i));

        await Promise.all(images.map(async (i) => await i.load()));

        const [tpx, tnx, tpy, tny, tpz, tnz] = images;

        return new Cubemap(renderer, tpx, tnx, tpy, tny, tpz, tnz);
    }
}