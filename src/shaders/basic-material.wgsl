const BG_SCENE: u32 = 0;
const BG_MODEL: u32 = 1;
const BG_UNIFORMS: u32 = 2;

struct SceneUniforms {
  projection: mat4x4<f32>,
  view: mat4x4<f32>,
  cameraPos: vec3<f32>,
  time: f32,
}

struct ModelUniforms {
  model: mat4x4<f32>,
}

@group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;
@group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;

struct Uniforms {
  color: vec4<f32>
}

@group(BG_UNIFORMS) @binding(0) var<uniform> uniforms: Uniforms;
@group(BG_UNIFORMS) @binding(1) var tex_sampler: sampler;
@group(BG_UNIFORMS) @binding(2) var tex_map: texture_2d<f32>;

struct VSOut {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>,
}

@vertex
fn vs_main(@location(0) in_pos: vec3<f32>, @location(1) uv: vec2<f32>) -> VSOut {
  let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;

  let vs_out: VSOut = VSOut(
    modelViewProj * vec4<f32>(in_pos, 1.0),
    uv,
  );
  return vs_out;
}

@fragment
fn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(tex_map, tex_sampler, vs_out.uv);
  return color * uniforms.color;
}
