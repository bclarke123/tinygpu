const BG_SCENE: u32 = 0;
const BG_MODEL: u32 = 1;
const BG_UNIFORMS: u32 = 2;

struct SceneUniforms {
  projection: mat4x4<f32>,
  view: mat4x4<f32>,
  camera_position: vec3<f32>,
  resolution: vec2<f32>,
  time: f32,
}

struct ModelUniforms {
  model: mat4x4<f32>,
}

@group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;
@group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;
