import { mat4, Mat4, vec3 } from "wgpu-matrix";
import { packUniforms, uploadUniformBuffer } from "./uniform-utils";
import { Mesh } from "./mesh";

export class Scene {
    private _device: GPUDevice;
    private _uniformBuffer?: GPUBuffer;

    private _bindGroupLayout?: GPUBindGroupLayout;
    private _bindGroup?: GPUBindGroup;

    private _children: Mesh[] = [];

    projectionMatrix: Mat4;
    viewMatrix: Mat4;

    constructor(device: GPUDevice) {
        this._device = device;
        this.projectionMatrix = mat4.identity();
        this.viewMatrix = mat4.identity();
    }

    get uniformBuffer(): ArrayBuffer {
        const uniforms = [
            { name: "projection matrix", value: this.projectionMatrix },
            { name: "view matrix", value: this.viewMatrix },
            { name: "camera position", value: vec3.create() },
            { name: "time", value: 0 },
        ];

        return packUniforms(uniforms);
    }

    uploadUniforms(): GPUBuffer {
        this._uniformBuffer = uploadUniformBuffer(
            this.uniformBuffer,
            this._device,
            "Material uniform buffer",
            this._uniformBuffer,
        );
        return this._uniformBuffer;
    }

    get bindGroupLayout(): GPUBindGroupLayout {
        if (!this._bindGroupLayout) {
            const layoutDescriptor: GPUBindGroupLayoutDescriptor = {
                label: "Scene Uniforms BindGroup Layout",
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                        buffer: {
                            type: 'uniform',
                            hasDynamicOffset: false,
                            minBindingSize: 0
                        }
                    }
                ]
            };

            this._bindGroupLayout = this._device.createBindGroupLayout(layoutDescriptor);

            console.log("Created Scene BindGroupLayout:", this._bindGroupLayout);
        }

        return this._bindGroupLayout;
    }

    get bindGroup(): GPUBindGroup {
        const uniforms = this.uploadUniforms();

        if (!this._bindGroup) {

            const descriptor = {
                layout: this.bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: { buffer: uniforms },
                    },
                ],
            };

            this._bindGroup = this._device.createBindGroup(descriptor);
        }

        return this._bindGroup;
    }

    get children(): Mesh[] {
        return this._children;
    }

    add(mesh: Mesh) {
        this._children.push(mesh);
    }

    remove(mesh: Mesh) {
        const index = this._children.indexOf(mesh);
        if (index > -1) {
            this._children.splice(index, 1);
        }
    }

    clear() {
        this._children = [];
    }
}