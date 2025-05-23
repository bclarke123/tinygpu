import { Material } from "./material";
import { UniformManager } from "../uniform-manager";
import { UniformItem } from "../uniform-utils";

import shaderHeader from "../shaders/header.wgsl";
import blinnPhongShader from "../shaders/blinn-phong.wgsl";
import { Color } from "../color";
import { DefaultTexture, Texture } from "../textures";

export interface BlinnPhongMaterialOptions {
  ambientColor?: Color;
  diffuseColor?: Color;
  specularColor?: Color;
  shininess?: number;
  reflectivity?: number;
  envMapIntensity?: number;
  metalness?: number;
  diffuseMap?: Texture;
  normalMap?: Texture;
}

function paramValue<T, O>(options: O, key: keyof O, defaultVal: T): T {
  if (options[key] !== undefined) {
    return options[key] as T;
  }

  return defaultVal;
}

export class BlinnPhongMaterial extends Material {
  // Properties specific to Blinn-Phong
  public ambientColor: Color;
  public diffuseColor: Color;
  public specularColor: Color;
  public shininess: number;
  public reflectivity: number;
  public envMapIntensity: number;
  public metalness: number;
  public diffuseMap: Texture;
  public normalMap: Texture;

  private _device: GPUDevice;

  constructor(device: GPUDevice, options: BlinnPhongMaterialOptions) {
    const ambientColor = paramValue(
      options,
      "ambientColor",
      new Color(0.1, 0.1, 0.1),
    );
    const diffuseColor = paramValue(
      options,
      "diffuseColor",
      new Color(0.7, 0.7, 0.7),
    );
    const specularColor = paramValue(
      options,
      "specularColor",
      new Color(1.0, 1.0, 1.0),
    );
    const shininess = paramValue(options, "shininess", 32.0);
    const reflectivity = paramValue(options, "reflectivity", 0.0);
    const envMapIntensity = paramValue(options, "envMapIntensity", 1.0);
    const metalness = paramValue(options, "metalness", 0.0);
    const diffuseMap = paramValue(
      options,
      "diffuseMap",
      DefaultTexture.getInstance(device),
    );
    const normalMap = paramValue(
      options,
      "normalMap",
      DefaultTexture.getInstance(device, new Color(0.5, 0.5, 1)),
    );

    const materialUniformItems: UniformItem[] = [
      { name: "ambient_color", value: ambientColor, type: "color" },
      { name: "diffuse_color", value: diffuseColor, type: "color" },
      { name: "specular_color", value: specularColor, type: "color" },
      { name: "shininess", value: shininess, type: "f32" },
      { name: "reflectivity", value: reflectivity, type: "f32" },
      { name: "env_map_intensity", value: envMapIntensity, type: "f32" },
      { name: "metalness", value: metalness, type: "f32" },
    ];

    // Create a UniformManager instance specifically for this material's uniforms
    const materialUniformManager = new UniformManager(device, {
      label: "BlinnPhongMaterial_Params",
      uniforms: materialUniformItems,
      textures: [{ texture: diffuseMap }, { texture: normalMap }],
    });

    super(materialUniformManager); // Pass it to the base Material constructor

    this._device = device;

    this.ambientColor = ambientColor;
    this.diffuseColor = diffuseColor;
    this.specularColor = specularColor;
    this.shininess = shininess;
    this.reflectivity = reflectivity;
    this.envMapIntensity = envMapIntensity;
    this.metalness = metalness;
    this.diffuseMap = diffuseMap;
    this.normalMap = normalMap;
  }

  // Implement abstract members from Material base class
  get cacheKey(): string {
    // A simple cache key, could be more sophisticated
    return `blinn-phong-${this.ambientColor}-${this.diffuseColor}-${this.specularColor}-${this.shininess}`;
  }

  get shaderCode(): GPUShaderModule {
    BlinnPhongMaterial.precompile(this._device);
    return BlinnPhongMaterial.shaderModule;
  }

  // Override update if material properties can change and need re-upload
  // The base Material.update() already calls this._uniformManager.update()
  public update(): void {
    // If colors/shininess are mutable, update them in the UBO
    this._uniformManager.updateUniform({
      name: "ambient_color",
      value: this.ambientColor,
    });
    this._uniformManager.updateUniform({
      name: "diffuse_color",
      value: this.diffuseColor,
    });
    this._uniformManager.updateUniform({
      name: "specular_color",
      value: this.specularColor,
    });
    this._uniformManager.updateUniform({
      name: "shininess",
      value: this.shininess,
    });
    this._uniformManager.updateUniform({
      name: "reflectivity",
      value: this.reflectivity,
    });
    this._uniformManager.updateUniform({
      name: "env_map_intensity",
      value: this.envMapIntensity,
    });
    this._uniformManager.updateUniform({
      name: "metalness",
      value: this.metalness,
    });

    super.update(); // Calls this._uniformManager.update()
  }

  static shaderModule: GPUShaderModule | null = null;
  static precompile(device: GPUDevice) {
    if (!BlinnPhongMaterial.shaderModule) {
      BlinnPhongMaterial.shaderModule = device.createShaderModule({
        label: "basic-material-shader",
        code: `
${shaderHeader}
${blinnPhongShader}
`,
      });
    }
  }
}
