import { Renderer } from "../renderer";
import { BigTriangle } from "./big-triangle";

export class GeometryFactory {
    private _renderer: Renderer;

    public constructor(renderer: Renderer) {
        this._renderer = renderer;
    }

    public get device(): GPUDevice {
        return this._renderer.device!;
    }

    public createBigTriangle(): BigTriangle {
        const geometry = new BigTriangle(this._renderer);
        return geometry;
    }
}