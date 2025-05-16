import { Vec3 } from "wgpu-matrix";
import { Transform } from "../transform";
import { UniformItem, UniformLayoutMember } from "../uniform-utils";
import { Color } from "../color";
export declare enum LightType {
    Ambient = 0,
    Point = 1
}
export declare const SHADER_LIGHT_STRUCT_TYPE_NAME = "ShaderLight";
export declare const SHADER_LIGHT_MEMBERS_LAYOUT: UniformLayoutMember[];
export declare class Light extends Transform {
    protected color: Color;
    protected attenuation: Vec3;
    protected intensity: number;
    protected range: number;
    protected lightType: number;
    protected enabled: number;
    protected radius: number;
    constructor(lightType?: LightType, color?: Color, intensity?: number, enabled?: boolean, range?: number, attenuation?: Vec3, radius?: number);
    encode(): UniformItem;
}
