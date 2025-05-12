//--------------------------------------------------------------------------------------
// Bindings
//--------------------------------------------------------------------------------------
@group(0) @binding(0) var<uniform> params: SimParams;
@group(0) @binding(1) var<storage, read_write> grid_mass_in: array<atomic<i32>>;     // Read the atomically summed mass
@group(0) @binding(2) var<storage, read_write> grid_momentum_in: array<atomic<i32>>; // Read the atomically summed momentum (flat)
@group(0) @binding(3) var<storage, read_write> grid_velocity_out: array<vec3<f32>>; // Write final f32 velocities

//--------------------------------------------------------------------------------------
// Main Compute Shader
//--------------------------------------------------------------------------------------
@compute @workgroup_size(4, 4, 4) // Example 3D workgroup size, total 512. Adjust as needed.
                                 // Dispatch would be ceil(grid_size/8) in each dimension.
fn main(@builtin(global_invocation_id) grid_coords_abs_u32: vec3<u32>) {
    // grid_coords_abs_u32 are the absolute 3D integer coordinates of the current grid cell

    if (grid_coords_abs_u32.x >= params.grid_size ||
        grid_coords_abs_u32.y >= params.grid_size ||
        grid_coords_abs_u32.z >= params.grid_size) {
        return; // Out of bounds for the grid
    }

    // Convert 3D grid coords to 1D flat index for accessing input buffers
    let flat_idx = grid_coords_abs_u32.x * params.grid_size * params.grid_size +
                   grid_coords_abs_u32.y * params.grid_size +
                   grid_coords_abs_u32.z;

    if (flat_idx == 0u) { // Test for the first grid cell
        let test_float: f32 = 1.23;
        let encoded_test: i32 = encodeFixedPoint(test_float); // Uses FIXED_POINT_MULTIPLIER from structs.wgsl
        let decoded_test: f32 = decodeFixedPoint(encoded_test);
        grid_velocity_out[flat_idx] = vec3<f32>(f32(encoded_test), decoded_test, test_float);
        return; // Only process this one cell for this test
    }

    // 1. Decode mass
    // atomicLoad is not strictly necessary if Stage 1 P2G is guaranteed to finish before this.
    // We can treat them as regular i32 after the P2G pass.
    // For clarity of intent (that these were atomically written):
    let mass_fixedpoint = atomicLoad(&grid_mass_in[flat_idx]);
    let mass_float = 1.0; //decodeFixedPoint(mass_fixedpoint);

    var final_velocity = vec3<f32>(0.0, 0.0, 0.0);

    if (mass_float > 1e-9) { // Or some other small epsilon to avoid division by zero
        // 2. Decode momentum
        let mom_x_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 0u]);
        let mom_y_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 1u]);
        let mom_z_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 2u]);

        var momentum_float = vec3<f32>(
            decodeFixedPoint(mom_x_fixedpoint),
            decodeFixedPoint(mom_y_fixedpoint),
            decodeFixedPoint(mom_z_fixedpoint)
        );

        // 3. Normalize to get velocity
        final_velocity = momentum_float / mass_float;

        // final_velocity.y = final_velocity.y - 9.8 * 0.0001;

        // 4. Apply Gravity
        final_velocity.y = final_velocity.y - params.gravity * params.dt;

        // 5. Apply Boundary Conditions
        // Using grid_coords_abs_u32 (which are 0 to grid_size-1)
        let boundary_min = f32(params.boundary_extent);
        let boundary_max = f32(params.grid_size) - f32(params.boundary_extent) -1.0; // -1 because grid_coords are 0-indexed

        // X-axis boundaries
        // if (f32(grid_coords_abs_u32.x) < boundary_min && final_velocity.x < 0.0) {
        //     final_velocity.x = 0.0;
        // }
        // if (f32(grid_coords_abs_u32.x) > boundary_max && final_velocity.x > 0.0) {
        //     final_velocity.x = 0.0;
        // }

        // // Y-axis boundaries
        // if (f32(grid_coords_abs_u32.y) < boundary_min && final_velocity.y < 0.0) {
        //     final_velocity.y = 0.0;
        // }
        // if (f32(grid_coords_abs_u32.y) > boundary_max && final_velocity.y > 0.0) {
        //     // Example: Sticky top boundary or just reflect/zero
        //     final_velocity.y = 0.0;
        // }

        // // Z-axis boundaries
        // if (f32(grid_coords_abs_u32.z) < boundary_min && final_velocity.z < 0.0) {
        //     final_velocity.z = 0.0;
        // }
        // if (f32(grid_coords_abs_u32.z) > boundary_max && final_velocity.z > 0.0) {
        //     final_velocity.z = 0.0;
        // }
    }
    // Else (mass is zero), final_velocity remains (0,0,0)

    // 6. Write to output velocity buffer
    grid_velocity_out[flat_idx] = final_velocity;
}