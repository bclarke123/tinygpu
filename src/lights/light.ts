import { vec3, Vec3 } from "wgpu-matrix";
import { Transform } from "../transform";
import { UniformItem } from "../uniform-utils";

export enum LightType {
    Ambient,
    Point
};

export class Light extends Transform {
    protected color: Vec3;
    protected attenuation: Vec3;
    protected intensity: number;
    protected range: number;
    protected lightType: number;
    protected enabled: number;
    protected direction: Vec3;
    protected radius: number;

    public encode(): UniformItem {
        const members = [
            { name: "matrix" },
            { name: "color" },
            { name: "attenuation" },
            { name: "intensity" },
            { name: "range" },
            { name: "lightType" },
            { name: "enabled" },
            { name: "radius" },
        ];

        const override = {
            matrix: this.worldMatrix
        };

        const value = members.reduce((a, { name }) => {
            a[name] = override[name] || this[name];
            return a;
        }, {});

        return {
            name: "Light",
            type: "Light",
            members,
            value
        };
    }
}