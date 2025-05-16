import { vec3, Vec3 } from "wgpu-matrix";
import { Transform } from "../transform";
import { UniformItem, UniformLayoutMember } from "../uniform-utils";
import { Color } from "../color";

export enum LightType {
  Ambient,
  Point,
  Directional,
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

export interface LightOptions {
  type: LightType;
  color?: Color;
  intensity?: number;
  enabled?: boolean;
  range?: number;
  attenuation?: Vec3;
  radius?: number;
}

export class Light extends Transform {
  protected color: Color;
  protected attenuation: Vec3;
  protected intensity: number;
  protected range: number;
  protected lightType: number;
  protected enabled: number;
  protected radius: number;

  // In light.ts
  constructor(options: LightOptions) {
    super();
    this.lightType = options.type as number; // Store as number
    this.color = options.color || new Color(1.0, 1.0, 1.0);
    this.intensity = options.intensity || 1.0;
    this.range = options.range || 10.0;
    this.attenuation = options.attenuation || vec3.create(1.0, 0.09, 0.032);
    this.radius = options.radius || 5.0;

    if (options.enabled === undefined) {
      this.enabled = 1;
    } else {
      this.enabled = options.enabled ? 1 : 0;
    }
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

    // console.log("Light", value);

    return {
      name: SHADER_LIGHT_STRUCT_TYPE_NAME,
      type: SHADER_LIGHT_STRUCT_TYPE_NAME,
      members: SHADER_LIGHT_MEMBERS_LAYOUT,
      value,
    };
  }
}
