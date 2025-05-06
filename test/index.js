document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById("canvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const renderer = new tinygpu.Renderer({ canvas });
  await renderer.init();

  const scene = renderer.createScene();
  // const camera = new tinygpu.PerspectiveCamera({ aspect: canvas.width / canvas.height, fov: Math.PI / 6 });
  const camera = new tinygpu.OrthographicCamera();

  // const tex = new tinygpu.ImageTexture(
  //   "https://assets.codepen.io/1082534/141601-2560x1600-desktop-hd-ocean-wallpaper-image.jpg",
  // );

  // await tex.load();

  const mat = renderer.materialFactory.createShaderMaterial({
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

      let top = vec3(uv.x, 0.7, 1.0);
      let bottom = vec3(0.4, 1.0, uv.x);

      let mix_uv = uv.y + sin(uv.x * 14.0 + scene_uniforms.time) * 0.05;

      let col = mix(bottom, top, smoothstep(0.499, 0.501, mix_uv));

      return vec4(col, 1.0);
    }

    `,
    uniforms: [],
  });

  // const mat = renderer.materialFactory.createBasicMaterial({
  //   color: new tinygpu.Color(1, 1, 1, 1),
  //   map: tex,
  // });
  const geo = renderer.geometryFactory.createBigTriangle();

  const mesh = renderer.createMesh(geo, mat);

  scene.add(mesh);

  // renderer.render(scene, camera);

  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
});
