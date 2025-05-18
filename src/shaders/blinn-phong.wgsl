// blinn_phong_material.wgsl
// Assumes header.wgsl is prepended or included for SceneUniforms, ModelUniforms, VSIn.

//--------------------------------------------------------------------
// Light structure (as defined in your light.ts)
//--------------------------------------------------------------------
struct ShaderLight {
    matrix: mat4x4<f32>,      // Light's world matrix
    attenuation: vec3<f32>,   // x: const, y: lin, z: quad
    color: vec4<f32>,
    intensity: f32,
    range: f32,
    lightType: u32,           // 0: Ambient, 1: Point, 2: Directional (consistent with LightType enum)
    enabled: u32,             // 1 if enabled, 0 if not
    radius: f32,              // For point light area approx. (not used in this Blinn-Phong)
};

//--------------------------------------------------------------------
// Bindings (Scene, Model, Lights are assumed from header or prior setup)
// @group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;
// @group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;
// @group(BG_SCENE) @binding(4) var<storage, read> lights_array: array<ShaderLight>;
//--------------------------------------------------------------------

// --- NEW IBL Bindings (within BG_SCENE group, adjust binding indices as needed) ---
// Assuming binding 0 is scene_uniforms, and binding 4 is lights_array.
// If your current cubemap sampler and texture are at 1 and 2 in BG_SCENE:
@group(BG_SCENE) @binding(1) var environment_map_sampler: sampler;
@group(BG_SCENE) @binding(2) var environment_map_texture: texture_cube<f32>;
@group(BG_SCENE) @binding(4) var<storage, read> lights_array: array<ShaderLight>;

//--------------------------------------------------------------------
// Material-Specific Uniforms for Blinn-Phong (BG_UNIFORMS - Group 2)
//--------------------------------------------------------------------
struct BlinnPhongMaterialParams {
  ambient_color: vec4<f32>,   // Ka - Modulates ambient light contribution
  diffuse_color: vec4<f32>,   // Kd - Base color of the surface
  specular_color: vec4<f32>,  // Ks - Color of direct specular highlights
  shininess: f32,             // Alpha_s - Controls direct highlight size/sharpness
  reflectivity: f32,          // Controls strength of environmental reflections (0.0 to 1.0)
  env_map_intensity: f32,
  metalness: f32,
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
// Vertex Shader (vs_main) - (Assumed to be correct and unchanged from your provided file)
//--------------------------------------------------------------------
@vertex
fn vs_main(in: VSIn) -> VSOut {
    var vs_out: VSOut;
    let world_pos_vec4 = model_uniforms.model * vec4<f32>(in.position, 1.0);
    vs_out.world_position = world_pos_vec4.xyz;
    vs_out.clip_position = scene_uniforms.projection * scene_uniforms.view * world_pos_vec4;
    vs_out.world_normal = normalize(model_uniforms.normalMatrix * in.normal);
    vs_out.uv = in.uv;
    return vs_out;
}

//--------------------------------------------------------------------
// Helper: Safe Normalization
//--------------------------------------------------------------------
fn safe_normalize(v: vec3<f32>) -> vec3<f32> {
    let len = length(v);
    if (len < 0.00001) {
        return vec3<f32>(0.0, 0.0, 1.0); // Or handle error appropriately
    }
    return v / len;
}

//--------------------------------------------------------------------
// Fragment Shader (fs_main) - MODIFIED for IBL
//--------------------------------------------------------------------
@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
    let N: vec3<f32> = safe_normalize(in.world_normal);
    let V: vec3<f32> = safe_normalize(scene_uniforms.camera_position - in.world_position); // View Vector

    var base_diffuse_albedo = material_params.diffuse_color.rgb;
    // Optional: Diffuse texture lookup
    // if (/* has_diffuse_texture */) {
    //     base_diffuse_albedo = textureSample(diffuse_texture, material_sampler, in.uv).rgb * material_params.diffuse_color.rgb;
    // }

    var direct_lighting_diffuse_specular = vec3<f32>(0.0); // Accumulator for direct diffuse and specular
    var accumulated_ambient_from_lights = vec3<f32>(0.0);  // For LightType.Ambient

    // --- DIRECT LIGHTING LOOP ---
    for (var i: u32 = 0u; i < scene_uniforms.numLights; i = i + 1u) {
        let L_info = lights_array[i];
        if (L_info.enabled == 0u) { continue; }

        let light_color_final = L_info.color.rgb * L_info.intensity;

        if (L_info.lightType == 0u) { // LightType.Ambient
            accumulated_ambient_from_lights += light_color_final;
        } else if (L_info.lightType == 1u) { // LightType.Point
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

            let NdotL = max(dot(N, L), 0.0);
            direct_lighting_diffuse_specular += (effective_light_color * base_diffuse_albedo * NdotL);

            let H_vec = L + V;
            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec);
                let NdotH = max(dot(N, H), 0.0);
                let specular_factor = pow(NdotH, material_params.shininess);
                // Use material_params.specular_color.rgb for direct light specular highlights
                direct_lighting_diffuse_specular += (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        } else if (L_info.lightType == 2u) { // LightType.Directional
            // Assuming light shines along its local -Z axis from your previous shader
            let light_direction_to_surface = safe_normalize(vec3<f32>(-L_info.matrix[2][0], -L_info.matrix[2][1], -L_info.matrix[2][2]));
            let L = safe_normalize(-light_direction_to_surface);
            let effective_light_color = light_color_final;

            let NdotL = max(dot(N, L), 0.0);
            direct_lighting_diffuse_specular += (effective_light_color * base_diffuse_albedo * NdotL);

            let H_vec = L + V;
            if (length(H_vec) > 0.00001) {
                let H = safe_normalize(H_vec);
                let NdotH = max(dot(N, H), 0.0);
                let specular_factor = pow(NdotH, material_params.shininess);
                // Use material_params.specular_color.rgb for direct light specular highlights
                direct_lighting_diffuse_specular += (effective_light_color * material_params.specular_color.rgb * specular_factor);
            }
        }
        // TODO: Add Spot Light (type 3) if needed
    }

    // --- IMAGE-BASED LIGHTING (IBL) ---

    // 1. Diffuse IBL (Ambient from Environment)
    // Ideally, environment_map_texture for this purpose would be a pre-filtered irradiance map.
    // Sampling the raw skybox cubemap with N gives a basic environmental ambient.
    let num_mips_for_diffuse = f32(textureNumLevels(environment_map_texture));
    let diffuse_lod = max(0.0, num_mips_for_diffuse - 1.0); // Sample the smallest mip (most blurred)
    // Or a fixed high LOD if you prefer, e.g., let diffuse_lod = 4.0;
    let diffuse_ibl_raw = textureSampleLevel(environment_map_texture, environment_map_sampler, N, diffuse_lod).rgb;
    // Modulate by the material's diffuse color (albedo)
    let diffuse_ibl_contribution = diffuse_ibl_raw * base_diffuse_albedo;
    // Adjust intensity: This factor helps balance IBL with direct lights if using raw cubemap.
    // Consider making this a scene uniform or material param if more control is needed.
    let diffuse_ibl_intensity_factor = material_params.env_map_intensity;

    // 2. Specular IBL (Reflections from Environment)
    let R: vec3<f32> = reflect(-V, N); // Reflection vector
    let clamped_shininess = max(1.0, material_params.shininess);
    let roughness = sqrt(2.0 / (clamped_shininess + 2.0)); // Ranges roughly 0 to 1.4, but effectively 0 to 1 for useful shininess

    // Calculate mip level based on roughness.
    // textureNumLevels() returns the total number of mip levels (e.g., 10 for a 512px texture).
    // Mip levels are 0-indexed (0 is largest, numLevels-1 is smallest 1x1).
    let num_mip_levels = f32(textureNumLevels(environment_map_texture)); // Get actual number of mips
    let mip_level_to_sample = roughness * (num_mip_levels - 1.0);
    // let mip_level_to_sample = 8.0;
    // mip_level_to_sample will be a float. The 'linear' mipmapFilter in the sampler will handle interpolation.

    // DEBUG: Output mip_level_to_sample scaled to be visible
    // Red channel shows normalized mip level, green roughness
    // return vec4(mip_level_to_sample / (num_mip_levels - 1.0), 0.0, 0.0, 1.0);

    // Sample the environment map at the calculated mip level for reflections
    let specular_ibl_raw: vec3<f32> = textureSampleLevel(
        environment_map_texture,
        environment_map_sampler,
        R,
        mip_level_to_sample // The calculated LoD
    ).rgb;

    // 3. Fresnel Effect for Reflections
    // F0 is reflectance at normal incidence. For non-metals, this is usually around 0.04.
    // Metals would have F0 equal to their base color.
    // For this Blinn-Phong, we'll assume primarily dielectric-like behavior for F0 unless
    // material_params.reflectivity strongly implies metallic properties.
    // var F0: vec3<f32> = vec3<f32>(0.04); // Default for non-metals (e.g., plastic, water)
    // If you want to treat high reflectivity as more metallic for Fresnel:
    let F0 = mix(vec3<f32>(0.04), base_diffuse_albedo, smoothstep(0.0, 1.0, material_params.metalness));

    let fresnel_schlick: vec3<f32> = F0 + (vec3<f32>(1.0) - F0) * pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 5.0);

    // Modulate specular IBL by Fresnel and the material's overall reflectivity.
    // Per your request (next steps #3), reflections are NOT tinted by material_params.specular_color.rgb.
    // material_params.specular_color.rgb is reserved for direct light highlights.
    let specular_ibl_contribution: vec3<f32> = specular_ibl_raw * fresnel_schlick * material_params.reflectivity;


    // --- COMBINE LIGHTING COMPONENTS ---

    // Start with the direct ambient light contributions (from your AmbientLight type)
    // This is modulated by the material's ambient_color.
    var final_radiance = material_params.ambient_color.rgb * accumulated_ambient_from_lights;

    // Add Diffuse IBL (environmental ambient)
    // This contributes to the overall ambient feel of the scene.
    final_radiance += diffuse_ibl_contribution * diffuse_ibl_intensity_factor;

    // Add direct diffuse and specular lighting from point/directional lights
    final_radiance += direct_lighting_diffuse_specular;

    // Add specular IBL (environmental reflections)
    final_radiance += specular_ibl_contribution;


    // Apply gamma correction if needed (usually done as a post-process step, but can be here)
    // final_radiance = pow(final_radiance, vec3<f32>(1.0/2.2));

    return vec4<f32>(final_radiance, material_params.diffuse_color.a); // Use diffuse_color.a for final alpha
}