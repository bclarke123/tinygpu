//--------------------------------------------------------------------------------------
// Structures
//--------------------------------------------------------------------------------------
struct SimParams {
    dt: f32,
    dx: f32,
    inv_dx: f32,
    grid_size: u32,
    dimensions: u32,
    num_particles: u32,

    particle_initial_volume: f32,
    particle_mass_param: f32,
    gravity: f32,

    mu_0: f32,
    lambda_0: f32,
    fluid_stiffness_Ef: f32,

    snow_plasticity_h_factor: f32,
    snow_yield_min: f32,
    snow_yield_max: f32,

    boundary_extent: u32,
};

struct Particle {
    position: vec3<f32>,
    velocity: vec3<f32>,
    affine_matrix_C: mat3x3<f32>,
    deformation_gradient_F: mat3x3<f32>,
    mass: f32,
    Jp: f32,
    Jf: f32,
    material_idx: u32,
};

const FIXED_POINT_MULTIPLIER: f32 = 10000.0; // Define your multiplier

fn encodeFixedPoint(val: f32) -> i32 {
    return i32(val * FIXED_POINT_MULTIPLIER);
}

const FIXED_POINT_MULTIPLIER_INV: f32 = 1.0 / FIXED_POINT_MULTIPLIER;
const DIMENSIONS = 3u; // Assuming 3D

fn decodeFixedPoint(fixed_val: i32) -> f32 {
    return f32(fixed_val) * FIXED_POINT_MULTIPLIER_INV;
}
