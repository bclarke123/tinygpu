"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const wgpu_matrix_1 = require("wgpu-matrix");
const orthographic_camera_1 = require("./camera/orthographic-camera");
const perspective_camera_1 = require("./camera/perspective-camera");
const mesh_1 = require("./mesh");
const scene_1 = require("./scene");
class Renderer {
    constructor(options = {}) {
        var _a;
        this.adapter = null;
        this.depthFormat = "depth24plus-stencil8";
        this.format = "bgra8unorm";
        this.canvasSize = wgpu_matrix_1.vec2.create(1, 1);
        this.sizeDirty = true;
        this._pipelineCache = new Map();
        (_a = this.canvas) !== null && _a !== void 0 ? _a : (this.canvas = options.canvas);
        console.log("Renderer initialized");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!navigator.gpu) {
                throw new Error("WebGPU is not supported in this browser");
            }
            this.adapter = yield navigator.gpu.requestAdapter();
            if (!this.adapter) {
                throw new Error("No GPU adapter found");
            }
            this.device = yield this.adapter.requestDevice();
            console.log("GPU device initialized");
            if (this.canvas) {
                this.initCanvas(this.canvas);
            }
        });
    }
    initCanvas(canvas) {
        var _a;
        this.canvas = canvas;
        this.context = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("webgpu");
        if (!this.context) {
            throw new Error("Failed to get WebGPU context");
        }
        this.format = navigator.gpu.getPreferredCanvasFormat();
        console.log(this.format);
        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: "premultiplied",
        });
        const onResize = () => {
            var _a;
            const width = this.canvas.offsetWidth;
            const height = this.canvas.offsetHeight;
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvasSize.set([width, height]);
            this.sizeDirty = true;
            (_a = this.depthTexture) === null || _a === void 0 ? void 0 : _a.destroy();
            this.depthTexture = this.device.createTexture({
                label: "Depth texture",
                size: { width, height },
                format: this.depthFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT
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
    createBuffer(arr, usage) {
        const buffer = this.device.createBuffer({
            size: (arr.byteLength + 3) & ~3,
            usage,
            mappedAtCreation: true,
        });
        if (arr instanceof Float32Array) {
            const writeArray = new Float32Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        else if (arr instanceof Uint16Array) {
            const writeArray = new Uint16Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        else if (arr instanceof Uint8Array) {
            const writeArray = new Uint8Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        buffer.unmap();
        return buffer;
    }
    pipelineFor(scene, mesh) {
        const cacheKey = mesh.cacheKey;
        if (this._pipelineCache.has(cacheKey)) {
            return this._pipelineCache.get(cacheKey);
        }
        const shaderCode = mesh.material.shaderCode;
        const bufferLayout = mesh.geometry.bufferLayout;
        const layout = this.device.createPipelineLayout({
            label: "Pipeline Layout",
            bindGroupLayouts: [
                scene.bindGroupLayout,
                mesh.bindGroupLayout,
                mesh.material.bindGroupLayout,
            ],
        });
        const pipeline = this.device.createRenderPipeline({
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
    render(scene, camera) {
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
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
            depthStencilAttachment: {
                view: this.depthTextureView,
                depthClearValue: 1,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilLoadOp: "clear",
                stencilStoreOp: "store",
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
            if (obj instanceof mesh_1.Mesh) {
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
    createMaterial(c, o) {
        return new c(this.device, o);
    }
    createGeometry(c) {
        return new c(this);
    }
    createMesh(geo, mat) {
        return new mesh_1.Mesh(this.device, mat, geo);
    }
    createScene() {
        return new scene_1.Scene(this.device);
    }
    createPerspectiveCamera(options) {
        return new perspective_camera_1.PerspectiveCamera(options);
    }
    createOrthographicCamera(options) {
        return new orthographic_camera_1.OrthographicCamera(options);
    }
}
exports.Renderer = Renderer;
