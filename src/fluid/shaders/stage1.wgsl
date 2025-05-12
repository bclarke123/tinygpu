//--------------------------------------------------------------------------------------
// Bindings
//--------------------------------------------------------------------------------------
@group(0) @binding(0) var<uniform> params: SimParams;
@group(0) @binding(1) var<storage, read_write> grid_mass_atomic: array<atomic<i32>>;
@group(0) @binding(2) var<storage, read_write> grid_momentum_atomic: array<atomic<i32>>;
@group(0) @binding(3) var<storage, read> particles_in: array<Particle>;
@group(0) @binding(4) var<storage, read_write> particles_out: array<Particle>;

@compute @workgroup_size(64) // Or your preferred workgroup size
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    if (id.x >= params.num_particles) {
        return;
    }

    let p = particles_in[id.x];

    // 1. Calculate particle position in grid units and base cell for APIC stencil
    let particle_pos_grid_units = p.position * params.inv_dx;
    // cellIndex_base_int is the integer grid cell index for the center of the 3x3x3 stencil
    let cellIndex_base_float = particle_pos_grid_units - 0.5;
    let cellIndex_base_int = vec3<i32>(floor(cellIndex_base_float));
    // cellDiff_from_base_center is particle's sub-grid pos relative to the center of cellIndex_base_int's cell
    let cellDiff_from_base_center = cellIndex_base_float - vec3<f32>(cellIndex_base_int);

    // 2. Calculate 1D B-spline weights for the 3 stencil nodes in each dimension
    //    relative to cellIndex_base_int
    var bspline_weights_1D: array<vec3<f32>, 3>; // [dim_idx][offset_idx from center: -1, 0, +1]
    for (var d = 0u; d < 3u; d = d + 1u) {
        let u_particle_offset = cellDiff_from_base_center[d];
        bspline_weights_1D[d][0] = quadratic_bspline_N(u_particle_offset + 1.0); // Stencil offset -1
        bspline_weights_1D[d][1] = quadratic_bspline_N(u_particle_offset);       // Stencil offset  0
        bspline_weights_1D[d][2] = quadratic_bspline_N(u_particle_offset - 1.0); // Stencil offset +1
    }

    // 3. Iterate over 3x3x3 stencil
    for (var gx_offset_idx = 0u; gx_offset_idx < 3u; gx_offset_idx = gx_offset_idx + 1u) {
        for (var gy_offset_idx = 0u; gy_offset_idx < 3u; gy_offset_idx = gy_offset_idx + 1u) {
            for (var gz_offset_idx = 0u; gz_offset_idx < 3u; gz_offset_idx = gz_offset_idx + 1u) {
                
                let final_weight = bspline_weights_1D[0][gx_offset_idx] *
                                   bspline_weights_1D[1][gy_offset_idx] *
                                   bspline_weights_1D[2][gz_offset_idx];

                if (final_weight == 0.0) { continue; }

                let target_grid_node_abs_idx = cellIndex_base_int +
                                               vec3<i32>(i32(gx_offset_idx), i32(gy_offset_idx), i32(gz_offset_idx)) -
                                               vec3<i32>(1, 1, 1);

                // Boundary check for target_grid_node_abs_idx
                if (target_grid_node_abs_idx.x < 0 || target_grid_node_abs_idx.x >= i32(params.grid_size) ||
                    target_grid_node_abs_idx.y < 0 || target_grid_node_abs_idx.y >= i32(params.grid_size) ||
                    target_grid_node_abs_idx.z < 0 || target_grid_node_abs_idx.z >= i32(params.grid_size)) {
                    continue;
                }
                
                let flat_target_idx = grid_idx_flat(target_grid_node_abs_idx, params.grid_size);
                
                // Calculate APIC momentum term contribution
                // cellDist_world is vector from particle to current grid node's center (world units)
                let grid_node_world_pos = (vec3<f32>(target_grid_node_abs_idx) + 0.5) * params.dx;
                let cellDist_world = grid_node_world_pos - p.position;
                let Q_affine_correction = p.affine_matrix_C * cellDist_world;

                // Contributions
                let mass_contrib = final_weight * p.mass;
                let momentum_contrib_vec = final_weight * (p.mass * p.velocity + Q_affine_correction);

                // Atomic adds
                atomicAdd(&grid_mass_atomic[flat_target_idx], encodeFixedPoint(mass_contrib));
                
                let mom_x_idx = flat_target_idx * 3u + 0u;
                let mom_y_idx = flat_target_idx * 3u + 1u;
                let mom_z_idx = flat_target_idx * 3u + 2u;

                atomicAdd(&grid_momentum_atomic[mom_x_idx], encodeFixedPoint(momentum_contrib_vec.x));
                atomicAdd(&grid_momentum_atomic[mom_y_idx], encodeFixedPoint(momentum_contrib_vec.y));
                atomicAdd(&grid_momentum_atomic[mom_z_idx], encodeFixedPoint(momentum_contrib_vec.z));
            }
        }
    }

    particles_out[id.x] = p;
}
