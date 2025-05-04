export interface RendererOptions {
    canvas?: HTMLCanvasElement;
};

export class Renderer {
    device?: GPUDevice;
    adapter: GPUAdapter | null = null;

    canvas?: HTMLCanvasElement;
    context?: GPUCanvasContext;
    format: GPUTextureFormat = "bgra8unorm";

    commandEncoder?: GPUCommandEncoder;
    queue?: GPUQueue;

    constructor(options: RendererOptions = {}) {

        if (options.canvas) {
            this.initCanvas(options.canvas);
        }

        console.log("Renderer initialized");
    }

    async init() {
        if (!navigator.gpu) {
            throw new Error("WebGPU is not supported in this browser");
        }

        this.adapter = await navigator.gpu.requestAdapter();
        if (!this.adapter) {
            throw new Error("No GPU adapter found");
        }

        this.device = await this.adapter.requestDevice();

        console.log("GPU device initialized");
    }

    initCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("webgpu") as GPUCanvasContext;

        if (!this.context) {
            throw new Error("Failed to get WebGPU context");
        }

        this.context.configure({
            device: this.device!,
            format: this.format,
            alphaMode: "premultiplied",
        });

        console.log("Canvas initialized");
    }

    render() {
        console.log("Rendering...");
    }
}

export class PerspectiveCamera {
    constructor() {
        console.log("PerspectiveCamera initialized");
    }

    setPosition(x: number, y: number, z: number) {
        console.log(`Camera position set to (${x}, ${y}, ${z})`);
    }
}

export class OrthographicCamera {
    constructor() {
        console.log("OrthographicCamera initialized");
    }

    setPosition(x: number, y: number, z: number) {
        console.log(`Camera position set to (${x}, ${y}, ${z})`);
    }
}