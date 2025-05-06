document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById("canvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  const renderer = new tinygpu.Renderer({ canvas });
  await renderer.init();
  
  const scene = renderer.createScene();
  // const camera = new tinygpu.PerspectiveCamera({ aspect: canvas.width / canvas.height, fov: Math.PI / 6 });
  const camera = new tinygpu.OrthographicCamera();

  const tex = new tinygpu.ImageTexture(
    "https://assets.codepen.io/1082534/141601-2560x1600-desktop-hd-ocean-wallpaper-image.jpg",
  );

  await tex.load();

  const mat = renderer.materialFactory.createBasicMaterial({
    color: new tinygpu.Color(1, 1, 1, 1),
    map: tex,
  });
  const geo = renderer.geometryFactory.createBigTriangle();

  const mesh = renderer.createMesh(geo, mat);

  scene.add(mesh);

  renderer.render(scene, camera);

  // let rot = 0;
  // const animate = () => {
  //   rot = performance.now() / 1000;
  //   mesh.setRotation(0, rot, 0);
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);
  // };
  // animate();
});
