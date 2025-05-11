fn grid_idx_flat(cell_coords_abs: vec3<i32>, n_grid: u32) -> u32 {
    // Ensure positive before casting for safety if cell_coords_abs can be negative
    // However, for reading, we expect them to be valid after boundary checks if any.
    // For G2P, particle can be near boundary, so stencil nodes can be out of bounds.
    let x = u32(clamp(cell_coords_abs.x, 0, i32(n_grid - 1u)));
    let y = u32(clamp(cell_coords_abs.y, 0, i32(n_grid - 1u)));
    let z = u32(clamp(cell_coords_abs.z, 0, i32(n_grid - 1u)));
    return x * n_grid * n_grid + y * n_grid + z;
}

// Helper for APIC B-Spline (same as in stage1.wgsl)
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

//--------------------------------------------------------------------------------------
// Bindings
//--------------------------------------------------------------------------------------
@group(0) @binding(0) var<uniform> params: SimParams;
@group(0) @binding(1) var<storage, read> grid_velocity_in: array<vec3<f32>>;
@group(0) @binding(2) var<storage, read> particles_in: array<Particle>;
@group(0) @binding(3) var<storage, read_write> particles_out: array<Particle>;

//--------------------------------------------------------------------------------------
// Main Compute Shader
//--------------------------------------------------------------------------------------
@compute @workgroup_size(64, 1, 1) // Example workgroup size
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x >= params.num_particles) {
        return;
    }

    let p_in = particles_in[id.x];
    var p_out = p_in; // Initialize output particle with input values

    // 1. Calculate particle position in grid units and base cell for APIC stencil
    let particle_pos_grid_units = p_in.position * params.inv_dx;
    // cellIndex_base_int is the integer grid cell index for the center of the 3x3x3 stencil
    let cellIndex_base_float = particle_pos_grid_units - 0.5;
    let cellIndex_base_int = vec3<i32>(floor(cellIndex_base_float));
    // cellDiff_from_base_center is particle's sub-grid pos relative to the center of cellIndex_base_int's cell
    let cellDiff_from_base_center = cellIndex_base_float - vec3<f32>(cellIndex_base_int);

    // 2. Calculate 1D B-spline weights (same as in P2G)
    var bspline_weights_1D: array<vec3<f32>, 3>; // [dim_idx][offset_idx from center: -1, 0, +1]
    for (var d = 0u; d < 3u; d = d + 1u) {
        let u_particle_offset = cellDiff_from_base_center[d];
        bspline_weights_1D[d][0] = quadratic_bspline_N(u_particle_offset + 1.0); // Stencil offset -1
        bspline_weights_1D[d][1] = quadratic_bspline_N(u_particle_offset);       // Stencil offset  0
        bspline_weights_1D[d][2] = quadratic_bspline_N(u_particle_offset - 1.0); // Stencil offset +1
    }

    var new_particle_velocity = vec3<f32>(0.0, 0.0, 0.0);
    var new_particle_C = mat3x3<f32>(); // Zero matrix

    // 3. Iterate over 3x3x3 stencil to interpolate velocity and C matrix
    for (var gx_offset_idx = 0u; gx_offset_idx < 3u; gx_offset_idx = gx_offset_idx + 1u) {
        for (var gy_offset_idx = 0u; gy_offset_idx < 3u; gy_offset_idx = gy_offset_idx + 1u) {
            for (var gz_offset_idx = 0u; gz_offset_idx < 3u; gz_offset_idx = gz_offset_idx + 1u) {
                
                let final_weight = bspline_weights_1D[0][gx_offset_idx] *
                                   bspline_weights_1D[1][gy_offset_idx] *
                                   bspline_weights_1D[2][gz_offset_idx];

                if (final_weight == 0.0) { continue; }

                let target_grid_node_abs_idx = cellIndex_base_int +
                                               vec3<i32>(i32(gx_offset_idx), i32(gy_offset_idx), i32(gz_offset_idx)) -
                                               vec3<i32>(1, 1, 1); // Absolute grid indices

                // For G2P, we read from grid. Boundary handling for reads is often done by clamping
                // indices in the grid_idx_flat function or ensuring particles don't get too close.
                // The grid_idx_flat above includes clamping.
                let flat_target_idx = grid_idx_flat(target_grid_node_abs_idx, params.grid_size);
                let grid_node_vel = grid_velocity_in[flat_target_idx];

                // Interpolate particle velocity
                new_particle_velocity = new_particle_velocity + final_weight * grid_node_vel;

                // Interpolate C matrix (APIC)
                // dist_grid_node_to_particle_world is vector from grid node center to particle (world units)
                let grid_node_world_pos = (vec3<f32>(target_grid_node_abs_idx) + 0.5) * params.dx;
                let dist_grid_node_to_particle_world = p_in.position - grid_node_world_pos;
                
                // Original MLS-MPM/APIC C update: C += 4 * inv_dx^2 * weight * vel_grid * (pos_grid - pos_particle)_world
                // The factor inv_dx^2 is often because C itself represents dv/dx, and dpos is dx.
                // Python: new_C += 4 * inv_dx * weight * g_v.outer_product(dpos) where dpos is (offset_float - fx_norm)
                // (offset_float - fx_norm) is like (grid_node_rel_to_base - particle_pos_rel_to_base)
                // = (grid_node_abs - particle_pos_abs) in grid units
                // So dpos_grid_units = vec3<f32>(target_grid_node_abs_idx) - particle_pos_grid_units
                let dpos_grid_units = vec3<f32>(target_grid_node_abs_idx) - particle_pos_grid_units;

                let term_outer_product = calculate_outer_product(grid_node_vel, dpos_grid_units);
                new_particle_C = new_particle_C + ( (4.0 * params.inv_dx) * final_weight) * term_outer_product;
            }
        }
    }

    // 4. Update particle state
    p_out.velocity = new_particle_velocity;
    p_out.affine_matrix_C = new_particle_C;

    // Update Jf (elastic volume determinant) - as in mls_mpm.py G2P
    // Jf[p] *= 1 + dt * new_C.trace()
    let trace_C = new_particle_C[0][0] + new_particle_C[1][1] + new_particle_C[2][2];
    p_out.Jf = p_in.Jf * (1.0 + params.dt * trace_C);

    // Advect particle position (using new velocity)
    p_out.position = p_in.position + new_particle_velocity * params.dt;
    
    // F and Jp were updated in P2G. Mass and material_idx are unchanged.
    particles_out[id.x] = p_out;
}

fn calculate_outer_product(a: vec3<f32>, b: vec3<f32>) -> mat3x3<f32> {
    let col0 = a * b.x;
    let col1 = a * b.y;
    let col2 = a * b.z;
    return mat3x3<f32>(col0, col1, col2);
}
