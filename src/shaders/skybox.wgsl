@group(BG_UNIFORMS) @binding(0) var skyboxSampler: sampler;
@group(BG_UNIFORMS) @binding(1) var skyboxTexture: texture_cube<f32>;

struct VSOut {
    @builtin(position) position: vec4<f32>,
    @location(0) texCoord: vec3<f32>,
};

@vertex
fn vs_main(in: VSIn) -> VSOut {
    let view = scene_uniforms.view;
    let vrot = mat4x4<f32>(
        vec4<f32>(view[0].xyz, 0.0),
        vec4<f32>(view[1].xyz, 0.0),
        vec4<f32>(view[2].xyz, 0.0),
        vec4<f32>(0.0, 0.0, 0.0, 1.0)
    );

    let pos = scene_uniforms.projection * vrot * vec4<f32>(in.position, 1.0);

    return VSOut(
        pos.xyww,
        in.position,
    );
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
    return textureSample(skyboxTexture, skyboxSampler, normalize(in.texCoord));
}
