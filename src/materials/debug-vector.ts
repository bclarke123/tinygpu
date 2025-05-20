import { Color } from "../color";
import { Material } from "./material";
import { UniformManager } from "../uniform-manager";
import { Geometry } from "../geometry/geometry";

import shaderHeader from "../shaders/header.wgsl";

const DEBUG_VECTOR_SHADER_WGSL = `
${shaderHeader}

struct DebugParams {
  lineScale: f32,
  lineColor: vec4<f32>,
  vectorType: u32,
};
@group(BG_UNIFORMS) @binding(0) var<uniform> debugParams: DebugParams;

struct Vertex {
  pos: vec3<f32>,
  uv: vec2<f32>,
  normal: vec3<f32>,
  tangent: vec3<f32>,
};
@group(BG_UNIFORMS) @binding(1) var<storage, read> vertexBuffer: array<Vertex>;

struct VSOutput {
  @builtin(position) clipPosition: vec4<f32>,
  @location(0) color: vec4<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VSOutput {
  var vsOut: VSOutput;
  let originalVertexId = vertexIndex / 2u;
  let isEndPoint = (vertexIndex % 2u) == 1u;
  let currentVertex = vertexBuffer[originalVertexId];
  let p_local = currentVertex.pos;
  var vectorToDraw_local: vec3<f32>;
  if (debugParams.vectorType == 1u) {
    vectorToDraw_local = currentVertex.tangent;
  } else {
    vectorToDraw_local = currentVertex.normal;
  }
  var finalPos_local = p_local;
  if (isEndPoint) {
    finalPos_local = p_local + (normalize(vectorToDraw_local) * debugParams.lineScale);
  }
  vsOut.clipPosition = projectionViewModel() * vec4<f32>(finalPos_local, 1.0);
  vsOut.color = debugParams.lineColor;
  return vsOut;
}

@fragment
fn fs_main(fsInput: VSOutput) -> @location(0) vec4<f32> {
  return fsInput.color;
}
`;

export interface DebugVectorMaterialOptions {
  lineScale?: number;
  lineColor?: Color;
  vectorType?: "normal" | "tangent";
  geometryToVisualize: Geometry;
}

export class DebugVectorMaterial extends Material {
  private readonly _geometryToVisualize: Geometry;
  private static _shaderModule: GPUShaderModule | null = null;
  private static _lastDeviceUsedForShader: GPUDevice | null = null;

  constructor(device: GPUDevice, options: DebugVectorMaterialOptions) {
    DebugVectorMaterial.compileShader(device); // Ensure shader is compiled

    const vectorTypeAsUint = options.vectorType === "tangent" ? 1 : 0;
    const uniformManager = new UniformManager(device, {
      uniforms: [
        { name: "lineScale", value: options.lineScale ?? 0.1, type: "f32" },
        {
          name: "lineColor",
          value: options.lineColor ?? new Color(1, 0, 0, 1),
          type: "color",
        },
        { name: "vectorType", value: vectorTypeAsUint, type: "u32" },
      ],
      buffers: [
        {
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: options.geometryToVisualize.vertexBuffer, // Get the GPUBuffer
          type: "read-only-storage",
        },
      ],
      label: "DebugVectorMaterial",
    });

    super(uniformManager);
    this.topology = "line-list";
    this._geometryToVisualize = options.geometryToVisualize;
  }

  static compileShader(device: GPUDevice) {
    if (
      !DebugVectorMaterial._shaderModule ||
      DebugVectorMaterial._lastDeviceUsedForShader !== device
    ) {
      DebugVectorMaterial._shaderModule = device.createShaderModule({
        label: "debug-vector-material-shader",
        code: DEBUG_VECTOR_SHADER_WGSL,
      });
      DebugVectorMaterial._lastDeviceUsedForShader = device;
    }
  }

  get geometryToVisualize(): Geometry {
    return this._geometryToVisualize;
  }

  get cacheKey(): string {
    return `debug-vector-material-${this._uniformManager.cacheKey}`;
  }

  get shaderCode(): GPUShaderModule {
    if (!DebugVectorMaterial._shaderModule) {
      // This case should ideally not be hit if constructor calls compileShader
      throw new Error(
        "DebugVectorMaterial shader module not compiled. Ensure compileShader was called with a valid device.",
      );
    }
    return DebugVectorMaterial._shaderModule;
  }
}
