import { BasicMaterial, BasicMaterialOptions } from "./basic-material";
import { Renderer } from "../renderer";

export class MaterialFactory {
    private _renderer: Renderer;

    public constructor(renderer: Renderer) {
        this._renderer = renderer;
    }

    public get device(): GPUDevice {
        return this._renderer.device!;
    }

    public createBasicMaterial(options: BasicMaterialOptions): BasicMaterial {
        console.log("Precompiling BasicMaterial");
        BasicMaterial.precompile(this.device);

        const material = new BasicMaterial(this.device, options);


        return material;
    }

}