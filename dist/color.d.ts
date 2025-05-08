import { Vec4 } from "wgpu-matrix";
export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    buffer?: Vec4;
    constructor(r: number, g: number, b: number, a?: number);
    uniformValue(): Float32Array<ArrayBufferLike>;
}
