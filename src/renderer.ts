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
import { ComputeTask, ComputeTaskOptions } from "./compute/compute-task";
import { ImageTexture, MappedTexture } from "./textures";
import { UniformBufferItem } from "./uniform-manager";
import {
  DebugVectorMaterial,
  DebugVectorMaterialOptions,
} from "./materials/debug-vector";

export interface RendererOptions {
  canvas?: HTMLCanvasElement;
  antialias?: boolean;
  pixelRatio?: number;
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

  antialias = true;
  msaaTexture: GPUTexture;
  msaaTextureView: GPUTextureView;
  samples = 4;

  canvasSize: Vec2 = vec2.create(1, 1);
  pixelRatio: number;
  sizeDirty = true;

  commandEncoder?: GPUCommandEncoder;
  queue?: GPUQueue;

  private _pipelineCache: Map<string, GPURenderPipeline> = new Map();
  private _computePipelineCache: Map<string, GPUComputePipeline> = new Map();

  constructor(options: RendererOptions = {}) {
    this.canvas = options.canvas;

    if (options.antialias !== undefined) {
      this.antialias = options.antialias;
    }

    if (options.pixelRatio !== undefined) {
      this.pixelRatio = options.pixelRatio;
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
      const dpr = this.pixelRatio || window.devicePixelRatio || 1;
      const width = this.canvas.offsetWidth * dpr;
      const height = this.canvas.offsetHeight * dpr;

      if (width === this.canvasSize[0] && height === this.canvasSize[1]) {
        return;
      }

      this.canvas.width = width;
      this.canvas.height = height;

      this.canvasSize.set([width, height]);
      this.sizeDirty = true;

      // console.log("Canvas size", width, height, dpr);

      if (this.antialias) {
        this.msaaTexture?.destroy();
        this.msaaTexture = this.device.createTexture({
          label: "MSAA texture",
          size: { width, height },
          format: this.format,
          usage: GPUTextureUsage.RENDER_ATTACHMENT,
          sampleCount: this.samples,
        });

        this.msaaTextureView = this.msaaTexture.createView();
      }

      this.depthTexture?.destroy();
      this.depthTexture = this.device.createTexture({
        label: "Depth texture",
        size: { width, height },
        format: this.depthFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        sampleCount: this.antialias ? this.samples : 1,
      });

      this.depthTextureView = this.depthTexture.createView({
        label: "Depth texture view ",
      });
    };

    this.resizeObserver = new ResizeObserver(onResize);
    this.resizeObserver.observe(this.canvas);
    onResize();

    console.log("Canvas initialized");
  }

  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule {
    return this.device.createShaderModule(descriptor);
  }

  createBuffer<T extends Float32Array | Uint32Array | Uint16Array | Uint8Array>(
    arr: T,
    usage: GPUBufferUsageFlags,
  ): GPUBuffer {
    const buffer = this.device!.createBuffer({
      size: (arr.byteLength + 3) & ~3,
      usage,
      mappedAtCreation: true,
    });

    if (arr instanceof Float32Array) {
      const writeArray = new Float32Array(buffer.getMappedRange());
      writeArray.set(arr);
    } else if (arr instanceof Uint32Array) {
      const writeArray = new Uint32Array(buffer.getMappedRange());
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

  createSizedBuffer(size: number, usage: GPUBufferUsageFlags): GPUBuffer {
    return this.device.createBuffer({
      size,
      usage,
    });
  }

  pipelineFor(scene: Scene, mesh: Mesh): GPURenderPipeline {
    const cacheKey = mesh.cacheKey;
    if (this._pipelineCache.has(cacheKey)) {
      return this._pipelineCache.get(cacheKey)!;
    }

    const shaderCode = mesh.material.shaderCode;
    const bufferLayout = mesh.bufferLayout;

    const layout = this.device!.createPipelineLayout({
      label: "Pipeline Layout",
      bindGroupLayouts: [
        scene.bindGroupLayout,
        mesh.bindGroupLayout,
        mesh.material.bindGroupLayout,
      ],
    });

    const pipelineDescriptor: GPURenderPipelineDescriptor = {
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
        topology: mesh.material.topology,
        stripIndexFormat: mesh.material.stripIndexFormat,
        frontFace: "ccw",
        cullMode: mesh.cullMode,
      },
      depthStencil: {
        depthWriteEnabled: mesh.depthWriteEnabled,
        depthCompare: mesh.depthCompare,
        format: "depth24plus-stencil8",
      },
    };

    if (this.antialias) {
      pipelineDescriptor.multisample = {
        count: this.samples,
        mask: 0xffffffff,
        alphaToCoverageEnabled: true,
      };
    }

    const pipeline = this.device!.createRenderPipeline(pipelineDescriptor);

    this._pipelineCache.set(cacheKey, pipeline);
    // console.log("Pipeline created", cacheKey);

    return pipeline;
  }

  private getDebugVectorPipeline(
    scene: Scene,
    mesh: Mesh,
    debugMaterial: DebugVectorMaterial,
  ): GPURenderPipeline {
    const cacheKey = `debug-vector-${mesh.geometry.cacheKey}-${debugMaterial.cacheKey}`;
    if (this._pipelineCache.has(cacheKey)) {
      return this._pipelineCache.get(cacheKey)!;
    }

    const layout = this.device.createPipelineLayout({
      label: "Debug Vector Pipeline Layout",
      bindGroupLayouts: [
        scene.bindGroupLayout,
        mesh.bindGroupLayout,
        debugMaterial.bindGroupLayout,
      ],
    });

    const pipeline = this.device.createRenderPipeline({
      label: "Debug Vector Pipeline",
      layout,
      vertex: {
        module: mesh.debugVisualizer.material.shaderCode,
        entryPoint: "vs_main",
      },
      fragment: {
        module: mesh.debugVisualizer.material.shaderCode,
        entryPoint: "fs_main",
        targets: [{ format: this.format }],
      },
      primitive: {
        topology: "line-list",
        frontFace: "ccw",
        cullMode: "none",
      },
      depthStencil: {
        depthWriteEnabled: false,
        depthCompare: "always",
        format: this.depthFormat,
      },
      multisample: this.antialias ? { count: this.samples } : undefined,
    });

    this._pipelineCache.set(cacheKey, pipeline);
    return pipeline;
  }

  render(scene: Scene, camera: Camera) {
    const [width, height] = this.canvasSize;

    const canvasTexture = this.context.getCurrentTexture();
    const canvasTextureView = canvasTexture.createView({
      label: "Canvas output texture view",
    });

    const outputTextureView = this.antialias
      ? this.msaaTextureView
      : canvasTextureView;

    const resolveTarget = this.antialias ? canvasTextureView : undefined;

    const renderPassDesc = {
      label: "Render pass",
      colorAttachments: [
        {
          view: outputTextureView,
          clearValue: [0, 0, 0, 1],
          loadOp: "clear" as GPULoadOp,
          storeOp: "store" as GPUStoreOp,
          resolveTarget,
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
        passEncoder.setBindGroup(1, mesh.bindGroup);
        passEncoder.setBindGroup(2, mesh.material.bindGroup);

        passEncoder.setVertexBuffer(0, mesh.geometry.vertexBuffer);

        passEncoder.setIndexBuffer(mesh.geometry.indexBuffer, "uint16");
        passEncoder.drawIndexed(mesh.geometry.indexCount, mesh.instanceCount);

        if (mesh.debugVisualizer) {
          const debugMaterial = mesh.debugVisualizer.material;
          if (debugMaterial.geometryToVisualize !== mesh.geometry) {
            console.warn(
              "DebugVectorMaterial is visualizing a different geometry than the mesh it's attached to.",
            );
          }
          const debugPipeline = this.getDebugVectorPipeline(
            scene,
            mesh,
            debugMaterial,
          );
          passEncoder.setPipeline(debugPipeline);
          passEncoder.setBindGroup(2, debugMaterial.bindGroup!);
          passEncoder.draw(mesh.geometry.vertexCount * 2, 1, 0, 0);
        }
      }
    });

    passEncoder.end();
    this.device.queue.submit([commandEncoder.finish()]);
  }

  computePipelineFor(task: ComputeTask): GPUComputePipeline {
    if (!this._computePipelineCache[task.cacheKey]) {
      const bgl = task.bindGroupLayout;

      const layout = this.device.createPipelineLayout({
        label: `${task.label} Pipeline Layout`,
        bindGroupLayouts: [bgl],
      });

      const ret = this.device.createComputePipeline({
        layout,
        compute: {
          entryPoint: task.entryPoint,
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
      const bg = task.bindGroup;

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
  ): T {
    return new c(this.device, o);
  }

  public createGeometry<T extends Geometry, O>(
    c: new (renderer: Renderer, o?: O) => T,
    o?: O,
  ): T {
    return new c(this, o);
  }

  createMesh(
    geo: Geometry,
    mat: Material,
    instances?: number,
    buffers?: UniformBufferItem[],
  ): Mesh {
    return new Mesh(this.device, mat, geo, instances, buffers);
  }

  createScene(): Scene {
    return new Scene(this);
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

  createComputeTask(options: ComputeTaskOptions): ComputeTask {
    return new ComputeTask(this.device, options);
  }

  public createDebugVectorMaterial(
    options: DebugVectorMaterialOptions,
  ): DebugVectorMaterial {
    if (!this.device)
      throw new Error("Device not initialized for createDebugVectorMaterial");
    return new DebugVectorMaterial(this.device, options);
  }
}
