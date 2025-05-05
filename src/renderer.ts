import { mat4, vec3 } from "wgpu-matrix";
import { Geometry } from "./geometry/geometry";
import { GeometryFactory } from "./geometry/geometry-factory";
import { Material } from "./materials/material";
import { MaterialFactory } from "./materials/material-factory";
import { Mesh } from "./mesh";
import { packUniforms, uploadUniformBuffer } from "./uniform-utils";

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

  createBindGroup(
    bindGroupLayout: GPUBindGroupLayout,
    entries: GPUBindGroupEntry[],
  ): GPUBindGroup {
    const bindGroup = this.device!.createBindGroup({
      layout: bindGroupLayout,
      entries,
    });

    return bindGroup;
  }

  createBindGroupLayout(
    entries: GPUBindGroupLayoutEntry[],
  ): GPUBindGroupLayout {
    const bindGroupLayout = this.device!.createBindGroupLayout({
      label: "basic-material-bind-group-layout",
      entries,
    });
    return bindGroupLayout;
  }

  private _pipelineCache: Map<string, GPURenderPipeline> = new Map();
  createPipeline(geometry: Geometry, material: Material): GPURenderPipeline {
    const cacheKey = `${material.cacheKey}-${geometry.cacheKey}`;
    if (this._pipelineCache.has(cacheKey)) {
      return this._pipelineCache.get(cacheKey)!;
    }

    const shaderCode = material.shaderCode;
    const bufferLayout = geometry.bufferLayout;

    const pipeline = this.device!.createRenderPipeline({
      layout: "auto",
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
    });

    this._pipelineCache.set(cacheKey, pipeline);
    console.log("Pipeline created", cacheKey);

    return pipeline;
  }

  render(mesh: Mesh) {
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

    const sceneUniforms = [
      { name: "projection matrix", value: mat4.identity() },
      { name: "view matrix", value: mat4.identity() },
      { name: "camera position", value: vec3.create() },
      { name: "time", value: 0 },
    ];

    const sceneArr = packUniforms(sceneUniforms);
    const sceneBuf = uploadUniformBuffer(sceneArr, this.device);

    const sceneBindGroup = this.device.createBindGroup({
      layout: mesh.pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: { buffer: sceneBuf },
        },
      ],
    });

    const modelBindGroupDescriptor = mesh.bindGroupDescriptor(
      mesh.pipeline.getBindGroupLayout(1),
    );

    const modelBindGroup = this.device.createBindGroup(modelBindGroupDescriptor);

    const matBindGroupDescriptor = mesh.material.bindGroupDescriptor(
      mesh.pipeline.getBindGroupLayout(2),
    );

    const matBindGroup = this.device.createBindGroup(matBindGroupDescriptor);

    const commandEncoder = this.device!.createCommandEncoder();

    const passEncoder = commandEncoder.beginRenderPass(renderPassDesc);
    passEncoder.setPipeline(mesh.pipeline);
    passEncoder.setViewport(0, 0, width, height, 0, 1);
    passEncoder.setScissorRect(0, 0, width, height);
    passEncoder.setVertexBuffer(0, mesh.geometry.vertexBuffer);
    passEncoder.setVertexBuffer(1, mesh.geometry.uvBuffer);
    passEncoder.setIndexBuffer(mesh.geometry.indexBuffer, "uint16");
    passEncoder.setBindGroup(0, sceneBindGroup);
    passEncoder.setBindGroup(1, modelBindGroup);
    passEncoder.setBindGroup(2, matBindGroup);
    passEncoder.drawIndexed(mesh.geometry.indexCount);
    passEncoder.end();

    this.device!.queue.submit([commandEncoder.finish()]);
  }

  private _materialFactory: MaterialFactory | null = null;
  get materialFactory(): MaterialFactory {
    this._materialFactory ??= new MaterialFactory(this);
    return this._materialFactory;
  }

  private _geometryFactory: GeometryFactory | null = null;
  get geometryFactory(): GeometryFactory {
    this._geometryFactory ??= new GeometryFactory(this);
    return this._geometryFactory;
  }

  createMesh(geo: Geometry, mat: Material): Mesh {
    const pipeline = this.createPipeline(geo, mat);
    const mesh = new Mesh(this.device, mat, geo, pipeline);

    return mesh;
  }
}
