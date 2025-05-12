import { Color } from "./color";
export type UniformValue = number | Float32Array | Color | {
    [key: string]: UniformValue;
};
export interface UniformLayoutMember {
    name: string;
    type?: string;
    members?: UniformLayoutMember[];
}
export interface UniformItem {
    name: string;
    value: UniformValue;
    type?: string;
    members?: UniformLayoutMember[];
}
export declare function packUniforms(items: UniformItem[], targetBuffer?: ArrayBuffer, targetOffset?: number): ArrayBuffer;
export declare function uploadUniformBuffer(packedUniforms: ArrayBuffer, device: GPUDevice, label?: string, buffer?: GPUBuffer): GPUBuffer;
