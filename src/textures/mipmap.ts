import { vec3 } from "wgpu-matrix";
import { ComputeTaskOptions } from "../compute/compute-task";
import { Renderer } from "../renderer";
import { UniformSamplerItem, UniformTextureItem } from "../uniform-manager";
import { Texture } from "./texture";

import mipmapShader from "../shaders/compute-mipmap.wgsl";

export class Mipmap {
    private static shaderModule: GPUShaderModule | null = null;
    // Method to get or create the mipmap generation compute shader
    private static getMipmapComputeShader(device: GPUDevice): GPUShaderModule {
        if (!Mipmap.shaderModule) {
            // A simple box filter compute shader (averages 2x2 texels)
            // Input: previous mip level (texture_2d)
            // Output: current mip level (texture_storage_2d)
            Mipmap.shaderModule = device.createShaderModule({
                label: "Mipmap Compute Shader",
                code: mipmapShader,
            });
        }
        return Mipmap.shaderModule
    }

    public static generate(
        renderer: Renderer,
        sourceTexture: Texture,
        baseWidth: number,
        baseHeight: number,
        mipLevelCount: number,
        layerCount: number = 1
    ) {

        // console.log(`Generating ${mipLevelCount} mip levels`);
        // const now = performance.now();

        const device = renderer.device;
        const mipmapShader = Mipmap.getMipmapComputeShader(device);
        const gpuTexture = sourceTexture.texture!;

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

            for (let layer = 0; layer < layerCount; layer++) {

                // console.log(`Generating Mip ${mipLevel}, Face ${layer}: ` +
                //     `Reading from Mip ${prevMipLevel}, ` +
                //     `Output Size: ${nextWidth}x${nextHeight}`);

                const sourceTextureItem: UniformTextureItem = {
                    texture: sourceTexture, // Pass your Texture wrapper
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
                    texture: sourceTexture, // Pass your Texture wrapper
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

        // console.log(`Generated ${mipLevelCount} mipmaps in ${(performance.now() - now).toFixed(2)}ms`);
    }

}