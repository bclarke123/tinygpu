import { Renderer } from "../renderer";
import { Light } from "./light";
export declare class LightManager {
    private _lights;
    private _maxLights;
    private _lightsBuffer;
    private _lightsArr;
    private _structLen;
    private _dirty;
    private _renderer;
    private _buffer;
    constructor(renderer: Renderer);
    set lights(lights: Light[]);
    get lightsArray(): Uint8Array;
    get numLights(): number;
    get buffer(): GPUBuffer;
    addLight(light: Light): void;
    clean(): void;
    private createLightsBuffer;
    private packLights;
}
