import { vec3, Vec3 } from "wgpu-matrix";
import { Transform } from "../transform";
import { UniformItem, UniformLayoutMember } from "../uniform-utils";
import { Color } from "../color";

export enum LightType {
    Ambient,
    Point,
}

export const SHADER_LIGHT_STRUCT_TYPE_NAME = "ShaderLight";

export const SHADER_LIGHT_MEMBERS_LAYOUT: UniformLayoutMember[] = [
    { name: "matrix", type: "mat4" },
    { name: "attenuation", type: "vec3" },
    { name: "color", type: "color" },
    { name: "intensity", type: "f32" },
    { name: "range", type: "f32" },
    { name: "lightType", type: "u32" },
    { name: "enabled", type: "u32" },
    { name: "radius", type: "f32" },
];

export class Light extends Transform {
    protected color: Color;
    protected attenuation: Vec3;
    protected intensity: number;
    protected range: number;
    protected lightType: number;
    protected enabled: number;
    protected radius: number;

    // In light.ts
    constructor(
        lightType: LightType = LightType.Point,
        color = new Color(1, 1, 1),
        intensity: number = 1.0,
        enabled: boolean = true,
        range: number = 10.0,
        attenuation: Vec3 = vec3.create(1.0, 0.09, 0.032),
        radius: number = 5,
    ) {
        super();
        this.lightType = lightType as number; // Store as number
        this.color = color;
        this.intensity = intensity;
        this.enabled = enabled ? 1 : 0; // Store as number (1 or 0)
        this.range = range;
        this.attenuation = attenuation;
        this.radius = radius;

        // console.log("Attenuation", this.attenuation);
    }

    public encode(): UniformItem {
        const override = {
            matrix: this.worldMatrix,
            enabled: this.enabled ? 1 : 0,
            lightType: this.lightType as number,
        };

        const value = SHADER_LIGHT_MEMBERS_LAYOUT.reduce((a, { name }) => {
            a[name] = override[name] || this[name];
            return a;
        }, {});

        return {
            name: SHADER_LIGHT_STRUCT_TYPE_NAME,
            type: SHADER_LIGHT_STRUCT_TYPE_NAME,
            members: SHADER_LIGHT_MEMBERS_LAYOUT,
            value,
        };
    }
}
