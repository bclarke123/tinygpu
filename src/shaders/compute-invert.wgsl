@group(0) @binding(2) var aSampler: sampler;
@group(0) @binding(0) var inputTexture: texture_2d<f32>;
@group(0) @binding(1) var outputTexture: texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let textureDims = textureDimensions(inputTexture);
    if (global_id.x >= textureDims.x || global_id.y >= textureDims.y) {
        return; // Out of bounds check
    }

    let texelCoords = vec2<i32>(global_id.xy);
    var color = textureSample(inputTexture, aSampler, vec2<f32>(global_id.xy) / vec2<f32>(textureDims));

    // Example: Invert color
    color.rgb = vec3(1.0) - color.rgb;

    textureStore(outputTexture, texelCoords, color);
}
