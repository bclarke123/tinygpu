import { Texture } from "../textures";
import { UniformManager, UniformTextureItem } from "../uniform-manager";
import { UniformItem } from "../uniform-utils";

export abstract class Material {
  protected _uniformManager: UniformManager;

  public topology: GPUPrimitiveTopology = "triangle-list";
  public stripIndexFormat: GPUIndexFormat = undefined;

  constructor(uniformManager?: UniformManager) {
    this._uniformManager = uniformManager;
  }

  abstract get cacheKey(): string;
  abstract get shaderCode(): GPUShaderModule;

  get bindGroupLayout(): GPUBindGroupLayout | undefined {
    return this._uniformManager?.bindGroupLayout;
  }

  get bindGroup(): GPUBindGroup | undefined {
    return this._uniformManager?.bindGroup;
  }

  updateUniform(uniform: UniformItem) {
    this._uniformManager.updateUniform(uniform);
  }

  updateTextures(textures: UniformTextureItem[]) {
    this._uniformManager.updateTextures(textures);
  }

  update() {
    this._uniformManager?.update();

    // const dump = new Uint8Array(this._uniformManager._uniformArr).reduce((a, x) => {
    //   a.push(x.toString(16).padStart(2, "0"));
    //   return a;
    // }, []).join(":");

    // console.log("Encoded:", JSON.stringify(this._uniformManager._uniforms));
    // console.log("Packed material:", dump);
  }
}
