import { Transform } from "./transform";
import { Camera } from "./camera/camera";
import { mat4, vec2, Vec2, vec3 } from "wgpu-matrix";
import { UniformManager, UniformTextureItem } from "./uniform-manager";
import { Light } from "./lights/light";
import { LightManager } from "./lights/light-manager";
import { Renderer } from "./renderer";
import { Skybox } from "./skybox";
import { Cubemap } from "./textures";
import { Color } from "./color";

export class Scene extends Transform {
  private _uniformManager: UniformManager;
  private _lightManager: LightManager;
  private _skybox: Skybox;
  private _background: Cubemap;
  private _environment: Cubemap;

  constructor(renderer: Renderer) {
    super();

    this._lightManager = new LightManager(renderer);

    this._environment = this._background = Cubemap.default(
      renderer,
      new Color(0, 0, 0),
    );
    this._skybox = new Skybox(renderer);

    this._uniformManager = new UniformManager(renderer.device, {
      uniforms: [
        { name: "projection matrix", value: mat4.create() },
        { name: "view matrix", value: mat4.create() },
        { name: "camera position", value: vec3.create() },
        { name: "resolution", value: vec2.create(1, 1) },
        { name: "time", value: performance.now() / 1000 },
        { name: "numLights", value: this._lightManager.numLights, type: "u32" },
      ],
      buffers: [
        {
          buffer: this._lightManager.buffer,
          type: "read-only-storage",
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        },
      ],
      samplers: [
        {
          type: "filtering",
          sampler: renderer.createSampler({
            mipmapFilter: "linear",
            magFilter: "linear",
            minFilter: "linear",
          }),
        },
      ],
      textures: [
        {
          texture: this._environment.cubemapTexture,
          accessType: "sample",
          visibility: GPUShaderStage.FRAGMENT,
          dimension: "cube",
        },
        {
          texture: this._background.cubemapTexture,
          accessType: "sample",
          visibility: GPUShaderStage.FRAGMENT,
          dimension: "cube",
        },
      ],
    });
  }

  set environment(value: Cubemap) {
    this._environment = value;
    this._uniformManager.updateTextures(this.textureDescriptors);
  }

  set background(value: Cubemap) {
    this._background = value;
    this._uniformManager.updateTextures(this.textureDescriptors);
  }

  get textureDescriptors(): UniformTextureItem[] {
    return [
      {
        texture: this._environment.cubemapTexture,
        accessType: "sample",
        visibility: GPUShaderStage.FRAGMENT,
        dimension: "cube",
        viewDescriptor: {
          dimension: "cube",
          mipLevelCount: this._environment.mipLevelCount
        }
      },
      {
        texture: this._background.cubemapTexture,
        accessType: "sample",
        visibility: GPUShaderStage.FRAGMENT,
        dimension: "cube",
        viewDescriptor: {
          dimension: "cube",
          mipLevelCount: this._background.mipLevelCount
        }
      },
    ];
  }

  override traverse(fn: (obj: Transform) => void) {
    if (this._skybox) {
      fn(this._skybox.mesh);
    }

    super.traverse(fn);
  }

  update(camera: Camera, resolution: Vec2) {
    this.updateLights();

    this._uniformManager.updateUniform({
      name: "projection matrix",
      value: camera.projectionMatrix,
    });
    this._uniformManager.updateUniform({
      name: "view matrix",
      value: camera.viewMatrix,
    });
    this._uniformManager.updateUniform({
      name: "camera position",
      value: camera.position,
    });
    this._uniformManager.updateUniform({
      name: "resolution",
      value: resolution,
    });
    this._uniformManager.updateUniform({
      name: "time",
      value: performance.now() / 1000,
    });
    this._uniformManager.updateUniform({
      name: "numLights",
      value: this._lightManager.numLights,
    });

    this._uniformManager.update();
  }

  get bindGroupLayout() {
    return this._uniformManager.bindGroupLayout;
  }

  get bindGroup() {
    return this._uniformManager.bindGroup;
  }

  updateLights() {
    this.traverse((x) => {
      if (x instanceof Light) {
        this._lightManager.addLight(x);
      }
    });
    this._lightManager.clean();
  }
}
