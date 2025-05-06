import { packUniforms, uploadUniformBuffer } from "./uniform-utils";
import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { vec2, Vec2 } from "wgpu-matrix";

export class Scene extends Transform {
    private _device: GPUDevice;
    private _uniformBuffer?: GPUBuffer;
    private _uniformArr: ArrayBuffer;
    private _resolution: Vec2;
    private _canvas: HTMLCanvasElement;
    private _observer: ResizeObserver;

    private _bindGroupLayout?: GPUBindGroupLayout;
    private _bindGroup?: GPUBindGroup;

    constructor(device: GPUDevice, canvas: HTMLCanvasElement) {
        super();

        this._device = device;
        this._canvas = canvas;

        this._resolution = vec2.create();
        this.canvasResize();
    }

    bindCanvasResize() {
        this._observer = new ResizeObserver(this.canvasResize);
        this._observer.observe(this._canvas);
    }

    canvasResize() {
        this._resolution.set([this._canvas.offsetWidth, this._canvas.offsetHeight]);
    }

    uniformBuffer(camera: Camera): ArrayBuffer {
        const uniforms = [
            { name: "projection matrix", value: camera.projectionMatrix },
            { name: "view matrix", value: camera.viewMatrix },
            { name: "camera position", value: camera.position },
            { name: "resolution", value: this._resolution },
            { name: "time", value: performance.now() / 1000 },
        ];

        this._uniformArr = packUniforms(uniforms, this._uniformArr);

        return this._uniformArr;
    }

    uploadUniforms(camera: Camera): GPUBuffer {
        this._uniformBuffer = uploadUniformBuffer(
            this.uniformBuffer(camera),
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
                            type: "uniform",
                            hasDynamicOffset: false,
                            minBindingSize: 0,
                        },
                    },
                ],
            };

            this._bindGroupLayout =
                this._device.createBindGroupLayout(layoutDescriptor);

            console.log("Created Scene BindGroupLayout:", this._bindGroupLayout);
        }

        return this._bindGroupLayout;
    }

    getBindGroup(camera: Camera): GPUBindGroup {
        const uniforms = this.uploadUniforms(camera);

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
}
