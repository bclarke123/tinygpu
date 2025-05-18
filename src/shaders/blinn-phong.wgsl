// blinn_phong_material.wgsl
// Assumes header.wgsl is prepended or included.

//--------------------------------------------------------------------
// Structs already defined in header.wgsl:
//   SceneUniforms, ModelUniforms, VSIn
//--------------------------------------------------------------------

//--------------------------------------------------------------------
// Light structure (as defined in your light.ts)
//--------------------------------------------------------------------
struct ShaderLight {
    matrix: mat4x4<f32>,      // Light's world matrix
    attenuation: vec3<f32>,   // x: const, y: lin, z: quad
    color: vec4<f32>,
    intensity: f32,
    range: f32,
    lightType: u32,           // 0: Ambient, 1: Point (consistent with LightType enum)
    enabled: u32,             // 1 if enabled, 0 if not
    radius: f32,
};

//--------------------------------------------------------------------
// Bindings already established in header.wgsl for BG_SCENE and BG_MODEL
// @group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;
// @group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;
//
// We need to ensure SceneUniforms in header.wgsl also includes numLights
// and ModelUniforms includes normal_matrix.
//
// Example modifications to header.wgsl structs (if not already done):
//
// struct SceneUniforms {
//   projection: mat4x4<f32>,
//   view: mat4x4<f32>,
//   camera_position: vec3<f32>,
//   resolution: vec2<f32>,
//   time: f32,
//   numLights: u32, // ADD THIS if not present
// }
//
// struct ModelUniforms {
//   model: mat4x4<f32>,
//   normalMatrix: mat3x3<f32>, // ADD THIS (use 'normalMatrix' to match Mesh.ts better)
// }
//--------------------------------------------------------------------


//--------------------------------------------------------------------
// Lights Array (Storage Buffer)
// This comes from Scene's UniformManager, which is bound to BG_SCENE (Group 0)
// The binding index should be 1, assuming the UBO for SceneUniforms is 0.
// This matches Scene.ts: constructor -> _uniformManager -> buffers: [ { buffer: lightManager.buffer ...} ]
// Your UniformManager.ts places 'uniforms' (UBO) at binding 0, then samplers, then textures, then 'buffers' (Storage).
// So if there are no samplers/textures in the Scene's UniformManager, lights buffer is at binding 1.
//--------------------------------------------------------------------
@group(BG_SCENE) @binding(4) var<storage, read> lights_array: array<ShaderLight>;


//--------------------------------------------------------------------
// Material-Specific Uniforms for Blinn-Phong (BG_UNIFORMS - Group 2)
//--------------------------------------------------------------------
struct BlinnPhongMaterialParams {
  ambient_color: vec4<f32>,   // Ka
  diffuse_color: vec4<f32>,   // Kd - base color of the surface
  specular_color: vec4<f32>,  // Ks - color of the highlight
  shininess: f32,             // Alpha - controls highlight size/sharpness
};

@group(BG_UNIFORMS) @binding(0) var<uniform> material_params: BlinnPhongMaterialParams;
// Optional: Texture for diffuse color
// @group(BG_UNIFORMS) @binding(1) var material_sampler: sampler;
// @group(BG_UNIFORMS) @binding(2) var diffuse_texture: texture_2d<f32>;

//--------------------------------------------------------------------
// Vertex Shader Output (VSOut)
//--------------------------------------------------------------------
struct VSOut {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) world_position: vec3<f32>,
    @location(1) world_normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
};

//--------------------------------------------------------------------
// Vertex Shader (vs_main)
//--------------------------------------------------------------------
@vertex
fn vs_main(in: VSIn) -> VSOut {
    var vs_out: VSOut;

    let world_pos_vec4 = model_uniforms.model * vec4<f32>(in.position, 1.0);
    vs_out.world_position = world_pos_vec4.xyz;
    vs_out.clip_position = scene_uniforms.projection * scene_uniforms.view * world_pos_vec4;

    // Use normalMatrix from ModelUniforms (ensure it's mat3x3<f32> there)
    vs_out.world_normal = normalize(model_uniforms.normalMatrix * in.normal);
    vs_out.uv = in.uv; // Pass UVs along

    return vs_out;
}

fn safe_normalize(v: vec3<f32>) -> vec3<f32> {
    let len = length(v);
    if (len < 0.00001) {
        return vec3<f32>(0.0, 0.0, 1.0);
    }
    return v / len;
}

//--------------------------------------------------------------------
// Fragment Shader (fs_main)
//--------------------------------------------------------------------
@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
    let N_raw_from_vs = in.world_normal; // This is what VSOut provided
    let N = safe_normalize(N_raw_from_vs); // Your current N
    let V = safe_normalize(scene_uniforms.camera_position - in.world_position); // View Vector

    // Base diffuse color for the material
    var base_diffuse_albedo = material_params.diffuse_color.rgb;
    // If using a texture for diffuse:
    // if (material_params.diffuse_texture_factor > 0.5) {
    //     base_diffuse_albedo = textureSample(diffuse_texture, material_sampler, in.uv).rgb * material_params.diffuse_color;
    // }

    var total_outgoing_radiance = vec3<f32>(0.0);
    var accumulated_ambient_from_lights = vec3<f32>(0.0);

    for (var i: u32 = 0u; i < scene_uniforms.numLights; i = i + 1u) {
        let L_info = lights_array[i]; // Current light from the array

        if (L_info.enabled == 0u) { // Skip disabled lights
            continue;
        }

        let light_color_final = L_info.color.rgb * L_info.intensity;

        // --- AMBIENT LIGHT TYPE ---
        if (L_info.lightType == 0u) { // LightType.Ambient
            accumulated_ambient_from_lights = accumulated_ambient_from_lights + light_color_final;
        }
        // --- POINT LIGHT TYPE ---
        else if (L_info.lightType == 1u) { // LightType.Point
            let light_world_pos = L_info.matrix[3].xyz; // Position from light's worldMatrix
            let light_vector = light_world_pos - in.world_position;
            let distance_to_light = length(light_vector);

            if (distance_to_light < 0.00001) {
                continue;
            }

            // Range check
            if (L_info.range > 0.0 && distance_to_light > L_info.range) {
                continue;
            }

            let L = safe_normalize(light_vector); // Direction from surface to light

            // Attenuation
            let att_const = L_info.attenuation.x;
            let att_lin = L_info.attenuation.y;
            let att_quad = L_info.attenuation.z;
            let attenuation_denominator = att_const + att_lin * distance_to_light + att_quad * distance_to_light * distance_to_light;

            // Prevent division by zero for attenuation, though with att_const=1.0 it shouldn't happen
            if (attenuation_denominator < 0.00001) {
                continue;
            }
            let attenuation = 1.0 / attenuation_denominator;
            let effective_light_color = light_color_final * attenuation;

            // Diffuse Reflection (Lambertian)
            let NdotL = max(dot(N, L), 0.0);

            total_outgoing_radiance = total_outgoing_radiance + (effective_light_color * base_diffuse_albedo * NdotL);

            // return vec4(total_outgoing_radiance, 1.0);

            // Specular Reflection (Blinn-Phong)
            let H_vec = L + V;
            // // return vec4(H_vec, 1.0);

            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec); // Halfway vector
                let NdotH = max(dot(N, H), 0.0);
                let specular_factor = pow(NdotH, material_params.shininess);
                total_outgoing_radiance = total_outgoing_radiance + (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        }
        // --- DIRECTIONAL LIGHT TYPE ---
        else if (L_info.lightType == 2u) { // LightType.Directional
            // For directional lights, the 'direction' is derived from the light's orientation matrix.
            // A common convention: light shines along its local -Z axis.
            // So, the world direction of the light is the 3rd column of the rotation part of L_info.matrix, negated.
            // Or, if your convention is light shines along +Z, it's the 3rd column directly.
            // Let's assume the light's "forward" is its local -Z axis.
            // The world-space -Z axis of the light's transform is:
            //   -normalize(vec3<f32>(L_info.matrix[0][2], L_info.matrix[1][2], L_info.matrix[2][2])) if matrix is column-major
            //   -normalize(vec3<f32>(L_info.matrix[2][0], L_info.matrix[2][1], L_info.matrix[2][2])) if matrix is row-major
            // wgpu-matrix `mat4` is column-major by default. So, m[col][row].
            // L_info.matrix[2] is the Z-axis column.
            // The direction *the light is shining* would be -L_info.matrix[2].xyz if -Z is forward.
            // The vector L for lighting (from surface to light) is the *opposite* of the light's shining direction.
            // So, if light shines along -Z_world (e.g. L_info.matrix[2].xyz = (0,0,-1) for a light shining down world -Z):
            // then L (to light) is normalize(L_info.matrix[2].xyz).
            //
            // Let's define: `light_direction_to_surface` as the normalized direction the light rays travel.
            // If your light object is oriented such that its local -Z axis is the direction it shines:
            let light_direction_to_surface = safe_normalize(vec3<f32>(-L_info.matrix[2][0], -L_info.matrix[2][1], -L_info.matrix[2][2]));
            // If your light object is oriented such that its local +Z axis is the direction it shines:
            // let light_direction_to_surface = safe_normalize(vec3<f32>(L_info.matrix[2][0], L_info.matrix[2][1], L_info.matrix[2][2]));

            // The light vector 'L' used in lighting equations is from the surface point *towards* the light source.
            // This is the negative of the direction the light is shining.
            let L = safe_normalize(-light_direction_to_surface);

            // No attenuation for directional lights.
            let effective_light_color = light_color_final; // Intensity is already in light_color_base

            // Diffuse
            let NdotL = max(dot(N, L), 0.0);
            total_outgoing_radiance = total_outgoing_radiance + (effective_light_color * base_diffuse_albedo * NdotL);

            // Specular
            let H_vec = L + V;
            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec);
                let NdotH = max(dot(N, H), 0.0);
                let specular_factor = pow(NdotH, material_params.shininess);
                total_outgoing_radiance = total_outgoing_radiance + (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        }
        // TODO: Add 'else if' block for Spot (type 3) lights
    }

    // Combine lighting components
    // Ambient term: Material's ambient reflectivity * sum of all ambient-type lights
    let final_color = (material_params.ambient_color.rgb * accumulated_ambient_from_lights) + total_outgoing_radiance;

    return vec4<f32>(final_color, 1.0); // Output color (alpha usually 1.0 for opaque)
}
