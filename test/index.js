const shader = /* wgsl */`
  struct VSOut {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>,
  };

  @vertex
  fn vs_main(@builtin(vertex_index) vertex_index: u32) -> VSOut {
    let pos = array<vec2<f32>, 6>(
      vec2<f32>(-1.0, -1.0), vec2<f32>( 1.0, -1.0), vec2<f32>(-1.0,  1.0),
      vec2<f32>(-1.0,  1.0), vec2<f32>( 1.0, -1.0), vec2<f32>( 1.0,  1.0),
    );
      let uvs = array<vec2<f32>, 6>(
      vec2<f32>(0.0, 1.0), vec2<f32>(1.0, 1.0), vec2<f32>(0.0, 0.0),
      vec2<f32>(0.0, 0.0), vec2<f32>(1.0, 1.0), vec2<f32>(1.0, 0.0),
    );

    var vs_out: VSOut;
    vs_out.position = vec4<f32>(pos[vertex_index], 0.0, 1.0);
    vs_out.uv = uvs[vertex_index]; // Pass UVs directly
    return vs_out;
  }

  @fragment
  fn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {
    return vec4(vs_out.uv.x, vs_out.uv.y, 0.0, 1.0);
  }
  `;

document.addEventListener("DOMContentLoaded", async () => {
    const canvas = document.getElementById("canvas");
    const renderer = new tinygpu.Renderer({ canvas });
    await renderer.init();

    console.log(renderer.device);

    const shaderModule = renderer.compileShader(shader);
    console.log(shaderModule);

    const pipeline = renderer.createPipeline(shaderModule);
    console.log(pipeline);

    renderer.encodeCommands(pipeline);
});