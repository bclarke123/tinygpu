import { CubeGeometry } from "./geometry";
import { ShaderMaterial } from "./materials";
import { Mesh } from "./mesh";
import { Renderer } from "./renderer";

import skyboxShader from "./shaders/skybox.wgsl";

export class Skybox {
    public mesh: Mesh;

    constructor(renderer: Renderer) {
        const geo = renderer.createGeometry(CubeGeometry);
        const mat = renderer.createMaterial(ShaderMaterial, {
            code: skyboxShader
        })

        this.mesh = renderer.createMesh(geo, mat);
        this.mesh.cullMode = "front"; // render inside faces
        this.mesh.depthWriteEnabled = false; // draw behind everything
        this.mesh.depthCompare = "less-equal"; // don't get culled by objects on the far plane
    }
}