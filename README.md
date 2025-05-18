# tinygpu

A lightweight WebGPU rendering library designed for ease of use and modern graphics development. It provides a simple API for creating scenes, managing cameras, and rendering 3D objects with materials and textures.

<img width="1062" alt="Screenshot 2025-05-18 at 5 59 44 PM" src="https://github.com/user-attachments/assets/f38f3e3e-eb73-4f7f-851a-34f0a13ed0a9" />

## Usage Example

Here's a basic example of how to set up a scene, create a cube, and render it:

```typescript
import * as tinygpu from "tinygpu";

async function main() {
  const canvas = document.getElementById("webgpu-canvas") as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  const renderer = new tinygpu.Renderer({ canvas });
  try {
    await renderer.init();
  } catch (error) {
    console.error("Failed to initialize renderer:", error);
    document.body.innerHTML =
      "Failed to initialize WebGPU. Please ensure your browser supports it and it's enabled.";
    return;
  }

  // 1. Create Scene
  const scene = renderer.createScene();

  // 2. Create Camera
  const camera = renderer.createPerspectiveCamera({
    fov: Math.PI / 3, // 60 degrees
    near: 0.1,
    far: 100,
  });
  camera.position.set([2, 2, 3]);
  camera.lookAt([0, 0, 0]);

  // 3. Create Geometry
  const cubeGeometry = renderer.createGeometry(tinygpu.geometry.CubeGeometry);

  // 4. Create Material
  const redMaterial = renderer.createMaterial(tinygpu.material.BasicMaterial, {
    color: new Color(1, 0, 0), // Red
  });

  // 5. Create Mesh
  const cubeMesh = renderer.createMesh(cubeGeometry, redMaterial);
  scene.add(cubeMesh);

  // Render loop
  function renderLoop() {
    cubeMesh.transform.rotateY(0.005); // Animate the cube
    cubeMesh.transform.rotateX(0.003);
    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

main().catch(console.error);

// Ensure you have a canvas element in your HTML:
// <canvas id="webgpu-canvas" width="800" height="600"></canvas>
```

## More Information

For detailed documentation on all classes, methods, and advanced usage, please refer to [DOCS.md](DOCS.md).
