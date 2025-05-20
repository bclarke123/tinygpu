import { Color } from "../color";
import { Renderer } from "../renderer";
import { DefaultCubemapTexture } from "./default-cubemap";
import { Texture } from "./texture";
import { ImageTexture } from "./image-texture";
import { MappedTexture } from "./mapped-texture";
import { Mipmap } from "./mipmap";

export class Cubemap {
    posx: ImageTexture;
    negx: ImageTexture;
    posy: ImageTexture;
    negy: ImageTexture;
    posz: ImageTexture;
    negz: ImageTexture;

    images: ImageTexture[];

    cubemapTexture: Texture;
    mipLevelCount: number = 1;

    private constructor() { }

    public static fromImages(renderer: Renderer, posx: ImageTexture, negx: ImageTexture, posy: ImageTexture, negy: ImageTexture, posz: ImageTexture, negz: ImageTexture, generateMipmaps: boolean = false): Cubemap {
        const ret = new Cubemap();
        ret.posx = posx;
        ret.negx = negx;
        ret.posy = posy;
        ret.negy = negy;
        ret.posz = posz;
        ret.negz = negz;

        ret.images = [
            posx, negx,
            posy, negy,
            posz, negz
        ];

        // All images must be the same size and square for simple mipmapping
        const width = posx.width;
        const height = posx.height;
        if (width !== height) {
            console.warn("Cubemap faces are not square. Mipmap generation might be suboptimal or incorrect.");
        }
        for (const img of ret.images) {
            if (img.width !== width || img.height !== height) {
                throw new Error("All cubemap face images must have the same dimensions.");
            }
        }

        let calculatedMipLevelCount = 1;
        if (generateMipmaps) {
            calculatedMipLevelCount = Math.floor(Math.log2(Math.max(width, height))) + 1;
        }
        ret.mipLevelCount = calculatedMipLevelCount;

        const cubemapTexture = new MappedTexture(
            {
                format: "rgba8unorm",
                size: [posx.width, posx.height, 6],
                usage: GPUTextureUsage.COPY_DST
                    | GPUTextureUsage.RENDER_ATTACHMENT
                    | GPUTextureUsage.TEXTURE_BINDING
                    | GPUTextureUsage.STORAGE_BINDING,
                dimension: "2d",
                mipLevelCount: calculatedMipLevelCount
            }
        );

        cubemapTexture.upload(renderer.device);

        ret.cubemapTexture = cubemapTexture;

        ret.images.forEach((im, layer) => {
            renderer.device.queue.copyExternalImageToTexture(
                { source: im.imageData },
                { texture: ret.cubemapTexture.texture, origin: [0, 0, layer], mipLevel: 0 },
                { width: im.width, height: im.height }
            );
        });

        if (generateMipmaps && ret.mipLevelCount > 1 && ret.cubemapTexture.texture) {
            Mipmap.generate(renderer, ret.cubemapTexture, width, height, ret.mipLevelCount, 6);
        }

        return ret;
    }

    public static fromCubeTexture(tex: Texture): Cubemap {
        const ret = new Cubemap();
        ret.cubemapTexture = tex;
        return ret;
    }

    public static default(renderer: Renderer, color: Color): Cubemap {
        const tex = DefaultCubemapTexture.getInstance(renderer.device, color);
        return this.fromCubeTexture(tex);
    }

    static async createFromFiles(renderer: Renderer, posx: string, negx: string, posy: string, negy: string, posz: string, negz: string, generateMipmaps?: boolean): Promise<Cubemap> {
        const images = [
            posx, negx,
            posy, negy,
            posz, negz
        ].map((i) => new ImageTexture(i));

        await Promise.all(images.map(async (i) => await i.load()));

        const [tpx, tnx, tpy, tny, tpz, tnz] = images;

        return Cubemap.fromImages(renderer, tpx, tnx, tpy, tny, tpz, tnz, generateMipmaps);
    }
}