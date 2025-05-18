/**

BIND GROUPS:

@group(BG_SCENE) @binding(0) - SceneUniforms
@group(BG_SCENE) @binding(1) - Cubemap Sampler
@group(BG_SCENE) @binding(2) - Environment Cubemap Texture
@group(BG_SCENE) @binding(3) - Skybox Cubemap Texture
@group(BG_SCENE) @binding(4) - Lights buffer

@group(BG_MODEL) @binding(0) - ModelUniforms

@group(BG_UNIFORMS) - material uniforms, samplers, textures, buffers in that order

**/

const BG_SCENE: u32 = 0;
const BG_MODEL: u32 = 1;
const BG_UNIFORMS: u32 = 2;

struct SceneUniforms {
  projection: mat4x4<f32>,
  view: mat4x4<f32>,
  camera_position: vec3<f32>,
  resolution: vec2<f32>,
  time: f32,
  numLights: u32,
}

struct ModelUniforms {
  model: mat4x4<f32>,
  normalMatrix: mat3x3<f32>,
}

struct VSIn {
  @location(0) position: vec3f,
  @location(1) uv: vec2f,
  @location(2) normal: vec3f,
}

@group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;
@group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;

fn projectionView() -> mat4x4<f32> {
  return scene_uniforms.projection * scene_uniforms.view;
}

fn viewModel() -> mat4x4<f32> {
  return scene_uniforms.view * model_uniforms.model;
}

fn projectionViewModel() -> mat4x4<f32> {
    return scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;
}

// Resize the UVs of the texture so it centers and covers the screen
fn arFill(texSize: vec2f, screenSize: vec2f, uv: vec2f) -> vec2f {
  let texAr = texSize.x / texSize.y;
  let screenAr = screenSize.x / screenSize.y;
  let dAr = texAr / screenAr;

  // Decide whether the image will be taller or wider than the screen
  let ar = mix(vec2(1.0, dAr), vec2(1.0 / dAr, 1.0), step(1.0, dAr));

  // Center along the axis that's larger than the screen
  let offset = mix(vec2(0.0, 1.0 / screenAr - 1.0 / texAr), vec2(screenAr - texAr, 0.0), step(1.0, dAr));

  // uv will be either wider or taller than the canvas at the correct aspect ratio, centered
  let ret = uv * ar - offset * 0.5;

  return ret;
}
