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
  return vec4(vs_out.uv, 0.0, 1.0);
}
