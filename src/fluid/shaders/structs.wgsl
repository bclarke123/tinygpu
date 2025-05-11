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

fn grid_idx_flat_clamp(cell_coords_abs: vec3<i32>, n_grid: u32) -> u32 {
    // Ensure positive before casting for safety if cell_coords_abs can be negative
    // However, for reading, we expect them to be valid after boundary checks if any.
    // For G2P, particle can be near boundary, so stencil nodes can be out of bounds.
    let x = u32(clamp(cell_coords_abs.x, 0, i32(n_grid - 1u)));
    let y = u32(clamp(cell_coords_abs.y, 0, i32(n_grid - 1u)));
    let z = u32(clamp(cell_coords_abs.z, 0, i32(n_grid - 1u)));
    return x * n_grid * n_grid + y * n_grid + z;
}

fn grid_idx_flat(cell_coords_abs: vec3<i32>, n_grid: u32) -> u32 {
    return u32(cell_coords_abs.x) * n_grid * n_grid +
           u32(cell_coords_abs.y) * n_grid +
           u32(cell_coords_abs.z);
}

// Helper to convert 1D flat grid index to 3D integer grid coordinates
fn flat_idx_to_3d_coords(flat_idx: u32, n_grid: u32) -> vec3<i32> {
    let z = i32(flat_idx / (n_grid * n_grid));
    let remainder = flat_idx % (n_grid * n_grid);
    let y = i32(remainder / n_grid);
    let x = i32(remainder % n_grid);
    return vec3<i32>(x, y, z);
}

// Helper for APIC B-Spline
// u is distance from particle to grid node center, in units of cell sizes
fn quadratic_bspline_N(u : f32) -> f32 {
    let abs_u = abs(u);
    var N_u = 0.0;
    if (abs_u < 0.5) {
        N_u = 0.75 - abs_u * abs_u;
    } else if (abs_u < 1.5) {
        N_u = 0.5 * (1.5 - abs_u) * (1.5 - abs_u);
    }
    return N_u;
}
