import { vec3 } from "wgpu-matrix";
import { Color } from "../color";
import { ComputeTask, ComputeTaskOptions } from "../compute/compute-task";
import { Renderer } from "../renderer";
import { UniformSamplerItem, UniformTextureItem } from "../uniform-manager";
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
    mipLevelCount: number = 1;

    private constructor() { }

    private static mipmapComputeShaderModule: GPUShaderModule | null = null;
    // Method to get or create the mipmap generation compute shader
    private static getMipmapComputeShader(device: GPUDevice): GPUShaderModule {
        if (Cubemap.mipmapComputeShaderModule) {
            return Cubemap.mipmapComputeShaderModule;
        }
        // A simple box filter compute shader (averages 2x2 texels)
        // Input: previous mip level (texture_2d)
        // Output: current mip level (texture_storage_2d)
        Cubemap.mipmapComputeShaderModule = device.createShaderModule({
            label: "Cubemap Mipmap Compute Shader",
            code: /* wgsl */ `
                    @group(0) @binding(0) var previousMipSampler: sampler;
                    @group(0) @binding(1) var previousMipTexture: texture_2d<f32>;
                    @group(0) @binding(2) var currentMipTexture: texture_storage_2d<rgba8unorm, write>;

                    @compute @workgroup_size(8, 8, 1)
                    fn generate_mipmap(
                        @builtin(global_invocation_id) global_id: vec3<u32>
                    ) {
                        let outputDims = textureDimensions(currentMipTexture);
                        if (global_id.x >= outputDims.x || global_id.y >= outputDims.y) {
                            return; // Out of bounds for the current (smaller) mip level
                        }
    
                        // Calculate UV coordinates to sample 2x2 block in the PREVIOUS mip level
                        // The center of the 2x2 block in the previous mip corresponds to the current pixel
                        let prevMipDims = vec2<f32>(textureDimensions(previousMipTexture));
                        let currentPixelCoord = vec2<f32>(global_id.xy);
    
                        // UVs for the 4 samples in the previous (larger) mip level
                        // The idea is that output pixel at (x,y) comes from input pixels around (2x, 2y)
                        let uv00 = (currentPixelCoord * 2.0) / prevMipDims;
                        let uv10 = (currentPixelCoord * 2.0 + vec2<f32>(1.0, 0.0)) / prevMipDims;
                        let uv01 = (currentPixelCoord * 2.0 + vec2<f32>(0.0, 1.0)) / prevMipDims;
                        let uv11 = (currentPixelCoord * 2.0 + vec2<f32>(1.0, 1.0)) / prevMipDims;
    
                        // Sample the 4 texels (simple box filter)
                        // Using textureSampleLevel with LOD 0 because previousMipTexture view is already for a specific mip.
                        let color00 = textureSampleLevel(previousMipTexture, previousMipSampler, uv00, 0.0);
                        let color10 = textureSampleLevel(previousMipTexture, previousMipSampler, uv10, 0.0);
                        let color01 = textureSampleLevel(previousMipTexture, previousMipSampler, uv01, 0.0);
                        let color11 = textureSampleLevel(previousMipTexture, previousMipSampler, uv11, 0.0);
    
                        let averagedColor = (color00 + color10 + color01 + color11) * 0.25;
    
                        textureStore(currentMipTexture, vec2<i32>(global_id.xy), averagedColor);
                    }
                `,
        });
        return Cubemap.mipmapComputeShaderModule;
    }

    public static generateMipmaps(
        renderer: Renderer,
        cubemapWrapper: Texture, // Your Texture wrapper for the cubemap
        baseWidth: number,
        baseHeight: number,
        mipLevelCount: number
    ) {

        console.log(`Generating ${mipLevelCount} mip levels`);

        const device = renderer.device;
        const mipmapShader = Cubemap.getMipmapComputeShader(device);
        const gpuTexture = cubemapWrapper.texture!; // Assuming .texture gives the GPUTexture

        let currentWidth = baseWidth;
        let currentHeight = baseHeight;

        // Create a single sampler for all mip generation tasks
        const mipSampler: UniformSamplerItem = {
            type: "filtering",
            sampler: device.createSampler({ magFilter: 'linear', minFilter: 'linear' })
        };

        for (let mipLevel = 1; mipLevel < mipLevelCount; mipLevel++) {
            const prevMipLevel = mipLevel - 1;
            const nextWidth = Math.max(1, Math.floor(currentWidth / 2));
            const nextHeight = Math.max(1, Math.floor(currentHeight / 2));

            // console.log(`Generating ${nextWidth}x${nextHeight}`);

            for (let layer = 0; layer < 6; layer++) { // For each face of the cubemap

                // console.log(`Generating Mip ${mipLevel}, Face ${layer}: ` +
                //     `Reading from Mip ${prevMipLevel}, ` +
                //     `Output Size: ${nextWidth}x${nextHeight}`);

                const sourceTextureItem: UniformTextureItem = {
                    texture: cubemapWrapper, // Pass your Texture wrapper
                    accessType: "sample", // Implies read-only for sampling
                    viewDescriptor: { // THIS IS THE KEY PART
                        label: `Mipmap Source View (L${prevMipLevel}, F${layer})`,
                        format: gpuTexture.format,
                        dimension: '2d',
                        baseMipLevel: prevMipLevel,
                        mipLevelCount: 1,
                        baseArrayLayer: layer,
                        arrayLayerCount: 1,
                    }
                };

                const destinationTextureItem: UniformTextureItem = {
                    texture: cubemapWrapper, // Pass your Texture wrapper
                    accessType: "write-only", // Implies storage texture for writing
                    // format: "rgba8unorm", // GPUStorageTextureFormat - ensure it matches textureStore in shader
                    viewDescriptor: { // THIS IS THE KEY PART
                        label: `Mipmap Destination View (L${mipLevel}, F${layer})`,
                        format: gpuTexture.format, // This needs to be a sto_bindingrage-texture-compatible format
                        dimension: '2d',
                        baseMipLevel: mipLevel,
                        mipLevelCount: 1,
                        baseArrayLayer: layer,
                        arrayLayerCount: 1,
                    }
                };

                const taskOptions: ComputeTaskOptions = {
                    label: `Mipmap Gen (L${mipLevel}, F${layer})`,
                    shader: mipmapShader,
                    entryPoint: "generate_mipmap",
                    dispatchCount: vec3.create(
                        Math.ceil(nextWidth / 8),
                        Math.ceil(nextHeight / 8),
                        1
                    ),
                    samplers: [mipSampler],
                    textures: [sourceTextureItem, destinationTextureItem],
                };
                const nextTask = renderer.createComputeTask(taskOptions);
                renderer.compute([nextTask]);
            }
            currentWidth = nextWidth;
            currentHeight = nextHeight;
        }
    }

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
            Cubemap.generateMipmaps(renderer, ret.cubemapTexture, width, height, ret.mipLevelCount);
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