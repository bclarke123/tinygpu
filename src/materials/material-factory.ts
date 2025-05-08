import { Renderer } from "../renderer";
import { BasicMaterial, BasicMaterialOptions } from "./basic-material";
import { ShaderMaterial, ShaderMaterialOptions } from "./shader-material";
import { UVMaterial } from "./uv-material";

export class MaterialFactory {
  private _renderer: Renderer;

  public constructor(renderer: Renderer) {
    this._renderer = renderer;
  }

  public get device(): GPUDevice {
    return this._renderer.device!;
  }

  public createBasicMaterial(options: BasicMaterialOptions): BasicMaterial {
    const material = new BasicMaterial(this.device, options);
    return material;
  }

  public createShaderMaterial(options: ShaderMaterialOptions): ShaderMaterial {
    return new ShaderMaterial(this.device, options);
  }

  public createUVMaterial(): UVMaterial {
    return new UVMaterial(this.device);
  }
}
