document.addEventListener("DOMContentLoaded", async () => {
    const canvas = document.getElementById("canvas");
    const renderer = new tinygpu.Renderer({ canvas });
    await renderer.init();

    console.log(renderer.device);

    const mat = renderer.materialFactory.createBasicMaterial({ color: new tinygpu.Color(1, 0, 0, 1) });
    const geo = renderer.geometryFactory.createBigTriangle();

    const mesh = renderer.createMesh(geo, mat);

    console.log(mesh);

    // renderer.encodeCommands(pipeline);
});