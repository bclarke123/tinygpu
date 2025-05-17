import { CubeGeometry } from "./geometry";
import { ShaderMaterial } from "./materials";
import { Cubemap } from "./materials/cubemap";
import { Mesh } from "./mesh";
import { Renderer } from "./renderer";

import skyboxShader from "./shaders/skybox.wgsl";

export class Skybox {
    public mesh: Mesh;

    constructor(renderer: Renderer, cubemap: Cubemap) {
        const geo = renderer.createGeometry(CubeGeometry);
        const mat = renderer.createMaterial(ShaderMaterial, {
            code: skyboxShader,
            samplers: [
                {
                    type: "filtering",
                    sampler: renderer.createSampler({
                        mipmapFilter: "nearest",
                        magFilter: "linear",
                        minFilter: "linear",
                    }),
                },
            ],
            textures: [
                {
                    texture: cubemap.cubemapTexture,
                    accessType: "sample",
                    visibility: GPUShaderStage.FRAGMENT,
                    dimension: "cube"
                }
            ],
        })

        this.mesh = renderer.createMesh(geo, mat);
        this.mesh.cullMode = "front"; // render inside faces
        this.mesh.depthWriteEnabled = false; // draw behind everything
        this.mesh.depthCompare = "less-equal"; // don't get culled by objects on the far plane
    }
}