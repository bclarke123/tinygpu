document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById("canvas");
  const renderer = new tinygpu.Renderer({ canvas });
  await renderer.init();

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

  renderer.render(mesh);
});
