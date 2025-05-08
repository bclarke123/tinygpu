document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById("canvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const renderer = new tinygpu.Renderer({ canvas });
  await renderer.init();

  const scene = renderer.createScene();
  const camera = renderer.createOrthographicCamera();

  const geo = renderer.createGeometry(tinygpu.geometry.BigTriangle);

  const mat = renderer.createMaterial(tinygpu.material.ShaderMaterial, {
    code: /* wgsl */ `
    struct VSOut {
        @builtin(position) position: vec4<f32>,
        @location(0) uv: vec2<f32>,
    }

    @vertex
    fn vs_main(@location(0) in_pos: vec3<f32>, @location(1) uv: vec2<f32>) -> VSOut {
      let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;

      let vs_out: VSOut = VSOut(
        modelViewProj * vec4<f32>(in_pos, 1.0),
        uv,
      );
      return vs_out;
    }

    @fragment
    fn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {
      let uv = vs_out.uv;
      let px = uv.y / scene_uniforms.resolution.y;

      let top = vec3(1.0 - uv.x, 0.7, 1.0);
      let bottom = vec3(0.4, 1.0, uv.x);

      let wave_time = scene_uniforms.time * 3.0;
      let wave = sin(uv.x * 24.0 + wave_time)
        + sin(uv.x * 7.0 + wave_time)
        + sin(uv.x * 9.0 + wave_time);
      let mix_uv = uv.y + wave * 0.02;

      var col = mix(bottom, top, smoothstep(0.5 - px, 0.5 + px, mix_uv));

      return vec4(col, 1.0);
    }

    `,
  });

  const mesh = renderer.createMesh(geo, mat);

  scene.add(mesh);

  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
});
