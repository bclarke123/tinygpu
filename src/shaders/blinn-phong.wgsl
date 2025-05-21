//--------------------------------------------------------------------
// Light structure (remains the same)
//--------------------------------------------------------------------
struct ShaderLight {
    matrix: mat4x4<f32>,
    attenuation: vec3<f32>,
    color: vec4<f32>,
    intensity: f32,
    range: f32,
    light_type: u32,
    enabled: u32,
    radius: f32,
};

//--------------------------------------------------------------------
// IBL Bindings (remains the same)
//--------------------------------------------------------------------
@group(BG_SCENE) @binding(1) var environment_map_sampler: sampler;
@group(BG_SCENE) @binding(2) var environment_map_texture: texture_cube<f32>;
@group(BG_SCENE) @binding(4) var<storage, read> lights_array: array<ShaderLight>;

//--------------------------------------------------------------------
// Material-Specific Uniforms for Blinn-Phong (BG_UNIFORMS - Group 2)
//--------------------------------------------------------------------
struct BlinnPhongMaterialParams {
  ambient_color: vec4<f32>,
  diffuse_color: vec4<f32>,
  specular_color: vec4<f32>,
  shininess: f32,
  reflectivity: f32,
  env_map_intensity: f32,
  metalness: f32,
};

@group(BG_UNIFORMS) @binding(0) var<uniform> material_params: BlinnPhongMaterialParams;
@group(BG_UNIFORMS) @binding(1) var material_sampler: sampler; // Sampler for diffuse and normal map
@group(BG_UNIFORMS) @binding(2) var diffuse_texture: texture_2d<f32>;
@group(BG_UNIFORMS) @binding(3) var normal_texture: texture_2d<f32>;

//--------------------------------------------------------------------
// Vertex Shader Output (VSOut)
//--------------------------------------------------------------------
struct VSOut {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) world_position: vec3<f32>,
    @location(1) world_normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) world_tangent: vec3<f32>,
    // Bitangent can be derived, but passing it can sometimes help with handedness if tangent.w was used.
    // For vec3 tangent, we'll re-orthogonalize and compute bitangent in FS.
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

    // Transform normal and tangent to world space
    // The normalMatrix is transpose(inverse(modelMatrix)) without the translation part.
    // It correctly transforms vectors that represent directions (like normals and tangents).
    vs_out.world_normal = normalize(model_uniforms.normalMatrix * in.normal);
    vs_out.world_tangent = normalize(model_uniforms.normalMatrix * in.tangent); // <<< NEW

    vs_out.uv = in.uv;
    return vs_out;
}

//--------------------------------------------------------------------
// Helper: Safe Normalization (remains the same)
//--------------------------------------------------------------------
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
    // Sample Normal Map
    let tangent_normal_sample = textureSample(normal_texture, material_sampler, in.uv).rgb;
    // Remap from [0, 1] to [-1, 1]
    let normal_map_tangent_space = (tangent_normal_sample * 2.0) - 1.0;

    // Prepare world space TBN vectors
    let N_geom = safe_normalize(in.world_normal); // Geometric normal
    let T_geom = safe_normalize(in.world_tangent); // Geometric tangent

    // Re-orthogonalize Tangent (Gram-Schmidt) to ensure it's perpendicular to the geometric normal
    // This is important because interpolation can make T and N not perfectly orthogonal.
    let T = safe_normalize(T_geom - dot(T_geom, N_geom) * N_geom);

    // Calculate Bitangent. The direction depends on UV winding and tangent calculation.
    // cross(N, T) is common. If normals look inverted, try cross(T, N).
    // Also, if you had a tangent.w component (often from MikkTSpace), it would determine handedness.
    // Since we don't have tangent.w here, we assume a consistent handedness.
    let B = safe_normalize(cross(N_geom, T));

    // Construct TBN matrix (Tangent-space to World-space)
    let tbn_matrix = mat3x3<f32>(T, B, N_geom);

    // Transform normal from normal map (tangent space) to world space
    // Use this N for all lighting calculations.
    let N: vec3<f32> = safe_normalize(tbn_matrix * normal_map_tangent_space);
    // If you added a 'has_normal_map' flag, you could do:
    // let N: vec3<f32> = select(N_geom, safe_normalize(tbn_matrix * normal_map_tangent_space), material_params.has_normal_map == 1u);


    let V: vec3<f32> = safe_normalize(scene_uniforms.camera_position - in.world_position);

    let base_diffuse_albedo =
        textureSample(diffuse_texture, material_sampler, in.uv).rgb
        * material_params.diffuse_color.rgb;

    var direct_lighting_diffuse_specular = vec3<f32>(0.0);
    var accumulated_ambient_from_lights = vec3<f32>(0.0);

    // --- DIRECT LIGHTING LOOP (uses the new 'N') ---
    for (var i: u32 = 0u; i < scene_uniforms.numLights; i = i + 1u) {
        let L_info = lights_array[i];
        if (L_info.enabled == 0u) { continue; }

        let light_color_final = L_info.color.rgb * L_info.intensity;

        if (L_info.light_type == 0u) { // Ambient
            accumulated_ambient_from_lights += light_color_final;
        } else if (L_info.light_type == 1u) { // Point
            let light_world_pos = L_info.matrix[3].xyz;
            let light_vector = light_world_pos - in.world_position;
            let distance_to_light = length(light_vector);
            if (distance_to_light < 0.00001 || (L_info.range > 0.0 && distance_to_light > L_info.range)) {
                continue;
            }
            let L = safe_normalize(light_vector);
            let att_const = L_info.attenuation.x;
            let att_lin = L_info.attenuation.y;
            let att_quad = L_info.attenuation.z;
            let attenuation_denominator = att_const + att_lin * distance_to_light + att_quad * distance_to_light * distance_to_light;
            if (attenuation_denominator < 0.00001) { continue; }
            let attenuation = 1.0 / attenuation_denominator;
            let effective_light_color = light_color_final * attenuation;

            let NdotL = max(dot(N, L), 0.0); // Using world-space normal from map
            direct_lighting_diffuse_specular += (effective_light_color * base_diffuse_albedo * NdotL);

            let H_vec = L + V;
            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec);
                let NdotH = max(dot(N, H), 0.0); // Using world-space normal from map
                let specular_factor = pow(NdotH, material_params.shininess);
                direct_lighting_diffuse_specular += (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        } else if (L_info.light_type == 2u) { // Directional
            let light_direction_to_surface = safe_normalize(vec3<f32>(-L_info.matrix[2][0], -L_info.matrix[2][1], -L_info.matrix[2][2]));
            let L = safe_normalize(-light_direction_to_surface);
            let effective_light_color = light_color_final;

            let NdotL = max(dot(N, L), 0.0); // Using world-space normal from map
            direct_lighting_diffuse_specular += (effective_light_color * base_diffuse_albedo * NdotL);

            let H_vec = L + V;
            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec);
                let NdotH = max(dot(N, H), 0.0); // Using world-space normal from map
                let specular_factor = pow(NdotH, material_params.shininess);
                direct_lighting_diffuse_specular += (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        }
    }

    // --- IMAGE-BASED LIGHTING (IBL) (uses the new 'N') ---
    let num_mips_for_diffuse = f32(textureNumLevels(environment_map_texture));
    let diffuse_lod = max(0.0, num_mips_for_diffuse - 1.0);
    let diffuse_ibl_raw = textureSampleLevel(environment_map_texture, environment_map_sampler, N, diffuse_lod).rgb; // Using world-space normal from map
    let diffuse_ibl_contribution = diffuse_ibl_raw * base_diffuse_albedo;
    let diffuse_ibl_intensity_factor = material_params.env_map_intensity;

    let R: vec3<f32> = reflect(-V, N) * vec3<f32>(-1.0, 1.0, 1.0); // Using world-space normal from map

    let clamped_shininess = max(1.0, material_params.shininess);
    let roughness = sqrt(2.0 / (clamped_shininess + 2.0));
    let num_mip_levels = f32(textureNumLevels(environment_map_texture));
    let mip_level_to_sample = roughness * (num_mip_levels - 1.0);

    let specular_ibl_raw: vec3<f32> = textureSampleLevel(
        environment_map_texture,
        environment_map_sampler,
        R,
        mip_level_to_sample
    ).rgb;

    let F0 = mix(vec3<f32>(0.04), base_diffuse_albedo, smoothstep(0.0, 1.0, material_params.metalness));
    let fresnel_schlick: vec3<f32> = F0 + (vec3<f32>(1.0) - F0) * pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 5.0); // Using world-space normal from map
    let specular_ibl_contribution: vec3<f32> = specular_ibl_raw * fresnel_schlick * material_params.reflectivity;

    // --- COMBINE LIGHTING COMPONENTS ---
    var final_radiance = material_params.ambient_color.rgb * accumulated_ambient_from_lights;
    final_radiance += diffuse_ibl_contribution * diffuse_ibl_intensity_factor;
    final_radiance += direct_lighting_diffuse_specular;
    final_radiance += specular_ibl_contribution;

    return vec4<f32>(final_radiance, material_params.diffuse_color.a);
}
