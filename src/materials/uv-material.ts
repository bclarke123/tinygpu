import { Material } from "./material";

import shaderHeader from "../shaders/header.wgsl";
import uvShader from "../shaders/uv-material.wgsl";

export class UVMaterial extends Material {
  constructor(device: GPUDevice) {
    super();
    UVMaterial.precompile(device);
  }

  get cacheKey(): string {
    return "UVMaterial";
  }

  get shaderCode(): GPUShaderModule {
    return UVMaterial.shaderModule;
  }

  static shaderModule: GPUShaderModule | null = null;
  static precompile(device: GPUDevice) {
    if (!UVMaterial.shaderModule) {
      UVMaterial.shaderModule = device.createShaderModule({
        label: "basic-material-shader",
        code: `
${shaderHeader}
${uvShader}
`,
      });
    }
  }
}
