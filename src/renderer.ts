import { vec2, Vec2 } from "wgpu-matrix";
import { Camera } from "./camera/camera";
import {
  OrthographicCamera,
  OrthographicCameraProps,
} from "./camera/orthographic-camera";
import {
  PerspectiveCamera,
  PerspectiveCameraProps,
} from "./camera/perspective-camera";
import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";
import { Mesh } from "./mesh";
import { Scene } from "./scene";
import { ComputeTask } from "./compute/compute-task";
import { ImageTexture, MappedTexture, Texture } from "./texture";

export interface RendererOptions {
  canvas?: HTMLCanvasElement;
}

export class Renderer {
  device?: GPUDevice;
  adapter: GPUAdapter | null = null;

  depthFormat: GPUTextureFormat = "depth24plus-stencil8";
  format: GPUTextureFormat = "bgra8unorm";
  canvas?: HTMLCanvasElement;
  context?: GPUCanvasContext;
  resizeObserver: ResizeObserver;
  depthTexture: GPUTexture;
  depthTextureView: GPUTextureView;

  canvasSize: Vec2 = vec2.create(1, 1);
  sizeDirty = true;

  commandEncoder?: GPUCommandEncoder;
  queue?: GPUQueue;

  private _pipelineCache: Map<string, GPURenderPipeline> = new Map();
  private _computePipelineCache: Map<string, GPUComputePipeline> = new Map();

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
    this.canvas = canvas;
    this.context = this.canvas?.getContext("webgpu") as GPUCanvasContext;

    if (!this.context) {
      throw new Error("Failed to get WebGPU context");
    }

    this.format = navigator.gpu.getPreferredCanvasFormat();

    this.context.configure({
      device: this.device!,
      format: this.format,
      alphaMode: "premultiplied",
    });

    const onResize = () => {
      const width = this.canvas.offsetWidth;
      const height = this.canvas.offsetHeight;

      this.canvas.width = width;
      this.canvas.height = height;

      this.canvasSize.set([width, height]);
      this.sizeDirty = true;

      this.depthTexture?.destroy();
      this.depthTexture = this.device.createTexture({
        label: "Depth texture",
        size: { width, height },
        format: this.depthFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });

      this.depthTextureView = this.depthTexture.createView({
        label: "Depth texture view ",
      });
    };

    onResize();
    this.resizeObserver = new ResizeObserver(onResize);
    this.resizeObserver.observe(this.canvas);

    console.log("Canvas initialized");
  }

  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule {
    return this.device.createShaderModule(descriptor);
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

  pipelineFor(scene: Scene, mesh: Mesh): GPURenderPipeline {
    const cacheKey = mesh.cacheKey;
    if (this._pipelineCache.has(cacheKey)) {
      return this._pipelineCache.get(cacheKey)!;
    }

    const shaderCode = mesh.material.shaderCode;
    const bufferLayout = mesh.geometry.bufferLayout;

    const layout = this.device!.createPipelineLayout({
      label: "Pipeline Layout",
      bindGroupLayouts: [
        scene.bindGroupLayout,
        mesh.bindGroupLayout,
        mesh.material.bindGroupLayout,
      ],
    });

    const pipeline = this.device!.createRenderPipeline({
      layout,
      vertex: {
        module: shaderCode,
        buffers: bufferLayout,
      },
      fragment: {
        module: shaderCode,
        targets: [
          {
            format: this.format,
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
        stripIndexFormat: undefined,
        frontFace: "ccw",
        cullMode: "back",
      },
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: "less",
        format: "depth24plus-stencil8",
      },
    });

    this._pipelineCache.set(cacheKey, pipeline);
    // console.log("Pipeline created", cacheKey);

    return pipeline;
  }

  render(scene: Scene, camera: Camera) {
    const [width, height] = this.canvasSize;

    const outputTexture = this.context.getCurrentTexture();
    const outputTextureView = outputTexture.createView({
      label: "Canvas output texture view",
    });

    const renderPassDesc = {
      label: "Render pass",
      colorAttachments: [
        {
          view: outputTextureView,
          clearValue: [0, 0, 0, 1],
          loadOp: "clear" as GPULoadOp,
          storeOp: "store" as GPUStoreOp,
        },
      ],
      depthStencilAttachment: {
        view: this.depthTextureView,
        depthClearValue: 1,
        depthLoadOp: "clear" as GPULoadOp,
        depthStoreOp: "store" as GPUStoreOp,
        stencilLoadOp: "clear" as GPULoadOp,
        stencilStoreOp: "store" as GPUStoreOp,
      },
    };

    const commandEncoder = this.device.createCommandEncoder();
    const passEncoder = commandEncoder.beginRenderPass(renderPassDesc);
    passEncoder.setViewport(0, 0, width, height, 0, 1);
    passEncoder.setScissorRect(0, 0, width, height);

    if (this.sizeDirty) {
      camera.viewportResized(this.canvasSize);
      this.sizeDirty = false;
    }

    scene.update(camera, this.canvasSize);

    const sceneBindGroup = scene.bindGroup;
    passEncoder.setBindGroup(0, sceneBindGroup);

    scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        const mesh = obj;

        mesh.update();

        const pipeline = this.pipelineFor(scene, mesh);

        passEncoder.setPipeline(pipeline);
        passEncoder.setVertexBuffer(0, mesh.geometry.vertexBuffer);
        passEncoder.setVertexBuffer(1, mesh.geometry.uvBuffer);
        passEncoder.setIndexBuffer(mesh.geometry.indexBuffer, "uint16");
        passEncoder.setBindGroup(1, mesh.bindGroup);
        passEncoder.setBindGroup(2, mesh.material.bindGroup);
        passEncoder.drawIndexed(mesh.geometry.indexCount);
      }
    });

    passEncoder.end();
    this.device.queue.submit([commandEncoder.finish()]);
  }

  computePipelineFor(task: ComputeTask): GPUComputePipeline {
    if (!this._computePipelineCache[task.cacheKey]) {
      const bgl = task.getBindGroupLayout(this.device);

      const layout = this.device.createPipelineLayout({
        label: `${task.label} Pipeline Layout`,
        bindGroupLayouts: [bgl],
      });

      const ret = this.device.createComputePipeline({
        layout,
        compute: {
          module: task.shaderModule,
        },
      });

      this._computePipelineCache[task.cacheKey] = ret;
    }

    return this._computePipelineCache[task.cacheKey];
  }

  compute(tasks: ComputeTask[]) {
    const commandEncoder = this.device.createCommandEncoder();
    const passEncoder = commandEncoder.beginComputePass();

    for (const task of tasks) {
      const pipeline = this.computePipelineFor(task);
      const size = task.dispatchCount;
      const bg = task.getBindGroup(this.device);

      passEncoder.setPipeline(pipeline);
      passEncoder.setBindGroup(0, bg);

      passEncoder.dispatchWorkgroups(size[0], size[1], size[2]);
    }

    passEncoder.end();

    this.device.queue.submit([commandEncoder.finish()]);
  }

  public createMaterial<T extends Material, O>(
    c: new (device: GPUDevice, o?: O) => T,
    o?: O,
  ) {
    return new c(this.device, o);
  }

  createGeometry<T extends Geometry>(c: new (renderer: Renderer) => T) {
    return new c(this);
  }

  createMesh(geo: Geometry, mat: Material): Mesh {
    return new Mesh(this.device, mat, geo);
  }

  createScene(): Scene {
    return new Scene(this.device);
  }

  createPerspectiveCamera(options?: PerspectiveCameraProps): PerspectiveCamera {
    return new PerspectiveCamera(options);
  }

  createOrthographicCamera(
    options?: OrthographicCameraProps,
  ): OrthographicCamera {
    return new OrthographicCamera(options);
  }

  async loadImageTexture(url: string): Promise<ImageTexture> {
    const ret = new ImageTexture(url);
    await ret.load();
    ret.upload(this.device);
    return ret;
  }

  createTexture(descriptor: GPUTextureDescriptor): MappedTexture {
    const tex = new MappedTexture(descriptor);
    tex.upload(this.device);
    return tex;
  }

  createSampler(descriptor: GPUSamplerDescriptor): GPUSampler {
    return this.device.createSampler(descriptor);
  }
}
