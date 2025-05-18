import { Color } from "../color";
import { Renderer } from "../renderer";
import { DefaultCubemapTexture } from "./default-cubemap";
import { ImageTexture, MappedTexture, Texture } from "./texture";

export class Cubemap {
    posx: ImageTexture;
    negx: ImageTexture;
    posy: ImageTexture;
    negy: ImageTexture;
    posz: ImageTexture;
    negz: ImageTexture;

    images: ImageTexture[];

    cubemapTexture: Texture;

    private constructor() { }

    public static fromImages(renderer: Renderer, posx: ImageTexture, negx: ImageTexture, posy: ImageTexture, negy: ImageTexture, posz: ImageTexture, negz: ImageTexture): Cubemap {
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

        const cubemapTexture = new MappedTexture(
            {
                format: "rgba8unorm",
                size: [posx.width, posx.height, 6],
                usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
                dimension: "2d"
            },
            {
                dimension: "cube"
            }
        );

        cubemapTexture.upload(renderer.device);

        ret.cubemapTexture = cubemapTexture;

        ret.images.forEach((im, layer) => {
            renderer.device.queue.copyExternalImageToTexture(
                { source: im.imageData },
                { texture: ret.cubemapTexture.texture, origin: [0, 0, layer] },
                { width: im.width, height: im.height }
            );
        });

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

    static async createFromFiles(renderer: Renderer, posx: string, negx: string, posy: string, negy: string, posz: string, negz: string): Promise<Cubemap> {
        const images = [
            posx, negx,
            posy, negy,
            posz, negz
        ].map((i) => new ImageTexture(i));

        await Promise.all(images.map(async (i) => await i.load()));

        const [tpx, tnx, tpy, tny, tpz, tnz] = images;

        return Cubemap.fromImages(renderer, tpx, tnx, tpy, tny, tpz, tnz);
    }
}