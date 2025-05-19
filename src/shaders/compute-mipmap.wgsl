@group(0) @binding(0) var previousMipSampler: sampler;
@group(0) @binding(1) var previousMipTexture: texture_2d<f32>;
@group(0) @binding(2) var currentMipTexture: texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn generate_mipmap(
    @builtin(global_invocation_id) global_id: vec3<u32>
) {
    let outputDims = textureDimensions(currentMipTexture);
    if (global_id.x >= outputDims.x || global_id.y >= outputDims.y) {
        return; // Out of bounds for the current (smaller) mip level
    }

    // Calculate UV coordinates to sample 2x2 block in the PREVIOUS mip level
    // The center of the 2x2 block in the previous mip corresponds to the current pixel
    let prevMipDims = vec2<f32>(textureDimensions(previousMipTexture));
    let currentPixelCoord = vec2<f32>(global_id.xy);

    // UVs for the 4 samples in the previous (larger) mip level
    // The idea is that output pixel at (x,y) comes from input pixels around (2x, 2y)
    let uv00 = (currentPixelCoord * 2.0) / prevMipDims;
    let uv10 = (currentPixelCoord * 2.0 + vec2<f32>(1.0, 0.0)) / prevMipDims;
    let uv01 = (currentPixelCoord * 2.0 + vec2<f32>(0.0, 1.0)) / prevMipDims;
    let uv11 = (currentPixelCoord * 2.0 + vec2<f32>(1.0, 1.0)) / prevMipDims;

    // Sample the 4 texels (simple box filter)
    // Using textureSampleLevel with LOD 0 because previousMipTexture view is already for a specific mip.
    let color00 = textureSampleLevel(previousMipTexture, previousMipSampler, uv00, 0.0);
    let color10 = textureSampleLevel(previousMipTexture, previousMipSampler, uv10, 0.0);
    let color01 = textureSampleLevel(previousMipTexture, previousMipSampler, uv01, 0.0);
    let color11 = textureSampleLevel(previousMipTexture, previousMipSampler, uv11, 0.0);

    let averagedColor = (color00 + color10 + color01 + color11) * 0.25;

    textureStore(currentMipTexture, vec2<i32>(global_id.xy), averagedColor);
}