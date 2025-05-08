import { Color } from "./color";
export type UniformObj = {
    name: string;
    value: number | Float32Array | Color;
};
export declare function packUniforms(items: UniformObj[], targetBuffer?: ArrayBuffer, targetOffset?: number): ArrayBuffer;
export declare function uploadUniformBuffer(packedUniforms: ArrayBuffer, device: GPUDevice, label?: string, buffer?: GPUBuffer): GPUBuffer;
