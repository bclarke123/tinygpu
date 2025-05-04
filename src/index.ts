export interface RendererOptions {
  canvas?: HTMLCanvasElement;
}

export class Renderer {
  device?: GPUDevice;
  adapter: GPUAdapter | null = null;

  canvas?: HTMLCanvasElement;
  context?: GPUCanvasContext;
  format: GPUTextureFormat = "bgra8unorm";

  commandEncoder?: GPUCommandEncoder;
  queue?: GPUQueue;

  constructor(options: RendererOptions = {}) {
    this.canvas ??= options.canvas;

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

    if (this.canvas) {
      this.initCanvas(this.canvas);
    }
  }

  initCanvas(canvas?: HTMLCanvasElement) {
    this.canvas ??= canvas;
    this.context = this.canvas?.getContext("webgpu") as GPUCanvasContext;

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

  createBuffer<T extends Float32Array | Uint16Array | Uint8Array>(
    arr: T,
    usage: number,
  ): GPUBuffer {
    const buffer = this.device!.createBuffer({
      size: (arr.byteLength + 3) & ~3,
      usage,
      mappedAtCreation: true,
    });

    if (arr instanceof Float32Array) {
      const writeArray = new Float32Array(buffer.getMappedRange());
      writeArray.set(arr);
    } else if (arr instanceof Uint16Array) {
      const writeArray = new Uint16Array(buffer.getMappedRange());
      writeArray.set(arr);
    } else if (arr instanceof Uint8Array) {
      const writeArray = new Uint8Array(buffer.getMappedRange());
      writeArray.set(arr);
    }

    buffer.unmap();

    return buffer;
  }

  compileShader(code: string): GPUShaderModule {
    const shaderModule = this.device!.createShaderModule({
      code,
    });

    return shaderModule;
  }

  createPipeline(shaderModule: GPUShaderModule): GPURenderPipeline {
    const pipeline = this.device!.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: shaderModule,
        buffers: [],
      },
      fragment: {
        module: shaderModule,
        targets: [
          {
            format: this.format,
          },
        ],
      },
    });

    return pipeline;
  }

  encodeCommands(pipeline: GPURenderPipeline) {
    const tex = this.context!.getCurrentTexture();
    const view = tex.createView();

    const width = this.canvas!.width;
    const height = this.canvas!.height;

    const renderPassDesc = {
      colorAttachments: [
        {
          view,
          clearValue: [0, 0, 0, 1],
          loadOp: "clear" as GPULoadOp,
          storeOp: "store" as GPUStoreOp,
        },
      ],
    };

    const commandEncoder = this.device!.createCommandEncoder();

    const passEncoder = commandEncoder.beginRenderPass(renderPassDesc);
    passEncoder.setPipeline(pipeline);
    passEncoder.setViewport(0, 0, width, height, 0, 1);
    passEncoder.setScissorRect(0, 0, width, height);
    passEncoder.draw(6);
    passEncoder.end();

    this.device!.queue.submit([commandEncoder.finish()]);
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
