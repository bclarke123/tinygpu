import { Renderer } from "../renderer";
import { packUniforms } from "../uniform-utils";
import { Light } from "./light";

export class LightManager {
    private _lights: Set<Light> = new Set();
    private _maxLights = 100;
    private _lightsBuffer: ArrayBuffer;
    private _lightsArr: Uint8Array;
    private _structLen: number;

    private _dirty: boolean = true;

    private _renderer: Renderer;

    private _buffer: GPUBuffer;

    constructor(renderer: Renderer) {
        this._lights.clear();
        this._renderer = renderer;
    }

    set lights(lights: Light[]) {
        for (const light of lights) {
            if (!this._lights.has(light)) {
                this._lights.add(light);
                this._dirty = true;
            }
        }
    }

    get lightsArray(): Uint8Array {
        if (this._dirty) {
            this.packLights();
            this._dirty = false;
        }

        return this._lightsArr;
    }

    get numLights() {
        return this._lights.size;
    }

    get buffer() {
        return this._buffer;
    }

    addLight(light: Light) {
        if (!this._lights.has(light)) {
            this._lights.add(light);
            this._dirty = true;
        }
    }

    private createLightsBuffer() {
        const template = new Light().encode();
        const packed = packUniforms([template]);

        const packedTemplate = new Uint8Array(packed);
        this._structLen = packedTemplate.byteLength;
        const totalLen = this._structLen * this._maxLights;

        this._lightsBuffer = new ArrayBuffer(totalLen);
        this._lightsArr = new Uint8Array(this._lightsBuffer);

        this._buffer = this._renderer.createBuffer(
            this._lightsArr,
            GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        );
    }

    private packLights() {
        if (!this._lightsBuffer) {
            this.createLightsBuffer();
        }

        for (let i = 0; i < this._lights.size; i++) {
            const offset = this._structLen * i;
            const encoded = this._lights[i].encode();
            const packed = packUniforms([encoded]);
            this._lightsArr.set(new Uint8Array(packed), offset);
        }
    }
}
