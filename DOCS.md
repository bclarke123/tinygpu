# Documentation

This document provides an overview and usage examples for the tinygpu rendering library.

## `Renderer`

The `Renderer` class is the core of the rendering system. It handles WebGPU initialization, canvas setup, pipeline creation, and rendering scenes.

### Initialization

To use the renderer, you first need to create an instance and initialize it.

```typescript
import { Renderer } from "./src/renderer"; // Adjust path as necessary

// Optional: Provide an existing canvas element
const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const renderer = new Renderer({ canvas });

async function main() {
  try {
    await renderer.init(); // Initializes WebGPU device and adapter
    // If a canvas was not provided in the constructor, or you want to change it:
    // renderer.initCanvas(newCanvasElement);

    // ... rest of your setup and render loop
  } catch (error) {
    console.error("Failed to initialize renderer:", error);
    // Handle initialization error (e.g., WebGPU not supported)
  }
}

main();
```

**Key Steps:**

1.  **`new Renderer(options?)`**:
    - `options.canvas` (optional): An HTMLCanvasElement to render to. If not provided, it can be set later with `initCanvas`.
2.  **`await renderer.init()`**:
    - Asynchronously requests a GPU adapter and device.
    - Throws an error if WebGPU is not supported or an adapter/device cannot be obtained.
    - If a canvas was provided in the constructor, `initCanvas` is called internally.
3.  **`renderer.initCanvas(canvasElement)`** (if canvas not set in constructor or needs changing):
    - Sets up the WebGPU context on the provided canvas.
    - Configures the canvas format.
    - Sets up a `ResizeObserver` to handle canvas resizing automatically, adjusting the internal `canvasSize` and recreating the depth texture.

### Core Responsibilities

- **Device and Adapter Management**: Holds the `GPUDevice` and `GPUAdapter`.
- **Canvas Management**: Manages the `HTMLCanvasElement`, `GPUCanvasContext`, and preferred `GPUTextureFormat`. Handles resizing.
- **Depth Buffering**: Creates and manages a `GPUTexture` for depth testing (`depthTexture`, `depthTextureView`).
- **Pipeline Caching**: Implements a cache (`_pipelineCache`) for `GPURenderPipeline` objects to avoid redundant pipeline creation. The cache key is derived from `mesh.cacheKey`.
- **Resource Creation**: Provides factory methods for creating common rendering objects.

### Key Methods

#### `render(scene: Scene, camera: Camera)`

This is the main rendering method. It should be called in your application's render loop.

```typescript
// Assuming 'scene' is an instance of Scene and 'camera' is an instance of Camera
function animate() {
  // Update scene objects, camera, etc.

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

// Start the render loop after initialization
animate();
```

**Steps within `render`:**

1.  Gets the current texture from the canvas context.
2.  Sets up a `GPURenderPassDescriptor` with color and depth-stencil attachments.
3.  Begins a render pass.
4.  Sets viewport and scissor rectangle.
5.  If canvas size has changed (`sizeDirty`), updates the camera's aspect ratio via `camera.viewportResized(this.canvasSize)`.
6.  Updates the scene and its objects: `scene.update(camera, this.canvasSize)`.
7.  Sets the scene-level bind group.
8.  Traverses the scene graph (`scene.traverse`):
    - For each `Mesh` object:
      - Updates the mesh (`mesh.update()`).
      - Gets or creates a `GPURenderPipeline` using `pipelineFor(scene, mesh)`.
      - Sets the pipeline.
      - Sets vertex buffers (position, UVs), index buffer.
      - Sets mesh-specific and material-specific bind groups.
      - Calls `drawIndexed` to render the mesh.
9.  Ends the render pass.
10. Submits the command buffer to the device queue.

#### `pipelineFor(scene: Scene, mesh: Mesh): GPURenderPipeline`

Retrieves an existing `GPURenderPipeline` from the cache or creates a new one if not found.

- **Cache Key**: `mesh.cacheKey` (likely a combination of geometry and material identifiers).
- **Pipeline Creation**:
  - Creates a `GPURenderPipelineLayout` using bind group layouts from the `scene`, `mesh`, and `mesh.material`.
  - Uses `mesh.material.shaderCode` (WGSL shader module) and `mesh.geometry.bufferLayout` for vertex and fragment stages.
  - Configures primitive topology (triangle-list), culling (back-face), and depth-stencil state.

#### `createBuffer<T extends Float32Array | Uint16Array | Uint8Array>(arr: T, usage: number): GPUBuffer`

A utility method to create and map a `GPUBuffer` with the given data and usage flags (e.g., `GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST`).

```typescript
const vertices = new Float32Array([...]);
const vertexBuffer = renderer.createBuffer(vertices, GPUBufferUsage.VERTEX);
```

#### Factory Methods

The `Renderer` provides convenient factory methods to create core components, ensuring they are created with the correct `GPUDevice`.

- **`createMaterial<T extends Material, O>(constructor: new (device: GPUDevice, o?: O) => T, options?: O): T`**
  Creates an instance of a `Material` subclass.

  ```typescript
  import { BasicMaterial } from "./src/materials/basic-material";
  const material = renderer.createMaterial(BasicMaterial, {
    color: [1, 0, 0, 1],
  });
  ```

- **`createGeometry<T extends Geometry>(constructor: new (renderer: Renderer) => T): T`**
  Creates an instance of a `Geometry` subclass.

  ```typescript
  import { CubeGeometry } from "./src/geometry/cube"; // Assuming CubeGeometry exists
  const cubeGeo = renderer.createGeometry(CubeGeometry);
  ```

- **`createMesh(geometry: Geometry, material: Material): Mesh`**
  Creates a `Mesh` object from a `Geometry` and a `Material`.

  ```typescript
  const mesh = renderer.createMesh(cubeGeo, material);
  ```

- **`createScene(): Scene`**
  Creates a `Scene` object.

  ```typescript
  const scene = renderer.createScene();
  scene.add(mesh); // Add meshes and other objects to the scene
  ```

- **`createPerspectiveCamera(options?: PerspectiveCameraProps): PerspectiveCamera`**
  Creates a `PerspectiveCamera`.

  ```typescript
  const camera = renderer.createPerspectiveCamera({
    fov: 45,
    near: 0.1,
    far: 100,
  });
  camera.position.set([0, 1, 5]);
  ```

- **`createOrthographicCamera(options?: OrthographicCameraProps): OrthographicCamera`**
  Creates an `OrthographicCamera`.
  ```typescript
  const orthoCamera = renderer.createOrthographicCamera({
    left: -2,
    right: 2,
    top: 2,
    bottom: -2,
    near: 0.1,
    far: 100,
  });
  ```

### Example Workflow

```typescript
import { Renderer } from "./src/renderer";
import { CubeGeometry } from "./src/geometry/cube"; // Example
import { BasicMaterial } from "./src/materials/basic-material"; // Example

async function setup() {
  const canvas = document.getElementById("webgpu-canvas") as HTMLCanvasElement;
  const renderer = new Renderer({ canvas });
  await renderer.init();

  // 1. Create Scene
  const scene = renderer.createScene();

  // 2. Create Camera
  const camera = renderer.createPerspectiveCamera({
    fov: 75,
    near: 0.1,
    far: 1000,
  });
  camera.position.set([2, 2, 3]);
  camera.lookAt([0, 0, 0]);

  // 3. Create Geometry
  const cubeGeometry = renderer.createGeometry(CubeGeometry);

  // 4. Create Material
  const redMaterial = renderer.createMaterial(BasicMaterial, {
    color: [1, 0, 0, 1],
  });

  // 5. Create Mesh
  const cubeMesh = renderer.createMesh(cubeGeometry, redMaterial);
  scene.add(cubeMesh);

  // Render loop
  function renderLoop() {
    cubeMesh.transform.rotateY(0.01); // Example animation
    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
  }

  renderLoop();
}

setup().catch(console.error);
```

This provides a basic structure for using the `Renderer`. Subsequent sections will detail other components like `Scene`, `Camera`, `Mesh`, `Material`, and `Geometry`.

## `Scene`

The `Scene` class acts as a container for all objects you want to render. It extends `Transform`, meaning a scene itself can be positioned, rotated, and scaled, affecting all its children. It also manages scene-level uniforms like camera matrices, resolution, and time.

### Initialization

A `Scene` is created using the `Renderer`'s factory method:

```typescript
const renderer = new Renderer({ canvas });
await renderer.init();

const scene = renderer.createScene();
```

When a `Scene` is constructed, it initializes a `UniformManager` with the following default uniforms:

- `projection matrix`: `mat4.create()`
- `view matrix`: `mat4.create()`
- `camera position`: `vec3.create()`
- `resolution`: `vec2.create(1, 1)`
- `time`: `performance.now() / 1000` (current time in seconds)

### Key Responsibilities

- **Object Container**: Holds `Mesh` objects and other `Transform` nodes in a hierarchical structure.
- **Scene-Level Uniforms**: Manages and updates uniforms that are common to all objects in the scene. This is handled by an internal `UniformManager`.
  - `projectionMatrix`: From the active camera.
  - `viewMatrix`: From the active camera.
  - `cameraPosition`: World-space position of the camera.
  - `resolution`: Dimensions of the rendering canvas.
  - `time`: Elapsed time, useful for animations.
- **Transform Hierarchy**: Inherits from `Transform`, allowing the entire scene to be transformed.

### Key Methods & Properties

#### `update(camera: Camera, resolution: Vec2)`

This method is called by the `Renderer` during the `render` cycle. It updates the scene-level uniforms based on the current camera and canvas resolution.

- Updates `projection matrix`, `view matrix`, and `camera position` from the provided `camera`.
- Updates `resolution` with the canvas dimensions.
- Updates `time` with the current `performance.now() / 1000`.
- Calls `this._uniformManager.update()` to write these values to the GPU buffer.

#### `add(object: Transform)`

Inherited from `Transform`. Adds a child object (like a `Mesh` or another `Transform` group) to the scene.

```typescript
const mesh = renderer.createMesh(geometry, material);
scene.add(mesh);

const group = new Transform(); // Or a custom class extending Transform
group.add(anotherMesh);
scene.add(group);
```

#### `remove(object: Transform)`

Inherited from `Transform`. Removes a child object from the scene.

#### `traverse(callback: (object: Transform) => void)`

Inherited from `Transform`. Executes a callback function for the scene itself and all its descendants. The `Renderer` uses this to iterate through renderable objects.

#### `bindGroupLayout: GPUBindGroupLayout` (getter)

Returns the `GPUBindGroupLayout` managed by the scene's `UniformManager`. This layout defines the structure of the scene-level uniforms for the shader.

#### `bindGroup: GPUBindGroup` (getter)

Returns the `GPUBindGroup` managed by the scene's `UniformManager`. This bind group contains the actual GPU buffer for scene-level uniforms and is bound to slot 0 in the shaders.

### Usage

```typescript
// ... (renderer, camera, mesh setup from previous examples)

// Add mesh to scene
scene.add(cubeMesh);

// In the render loop, renderer.render(scene, camera) will automatically call:
// scene.update(camera, renderer.canvasSize);
// This keeps scene uniforms synchronized.
```

The `Scene` object simplifies managing global shader parameters and the collection of objects to be rendered.

## `Camera`

The `Camera` class is an abstract base class for all camera types in `tinygpu`. It extends `Transform`, allowing cameras to be positioned and oriented within the scene like any other object. Its primary role is to provide the `projectionMatrix` and `viewMatrix` necessary for rendering.

### Core Concepts

- **Inheritance**: `Camera extends Transform`, so it has `position`, `rotation`, `scale`, and can be part of the scene graph hierarchy.
- **Matrices**:
  - `_projectionMatrix: Mat4`: Defines how 3D points are mapped to 2D screen coordinates (e.g., perspective or orthographic projection).
  - `_viewMatrix: Mat4`: Defines the camera's position and orientation in world space (effectively the inverse of the camera's world transform).
- **Lazy Calculation**: Both matrices are calculated on-demand using dirty flags (`_isProjectionDirty`, `_isViewDirty`). This avoids redundant calculations if camera properties haven't changed.
- **Abstract Methods**: Concrete camera types (like `PerspectiveCamera` or `OrthographicCamera`) must implement:
  - `updateProjectionMatrix()`: Logic to recalculate `_projectionMatrix`.
  - `updateViewMatrix()`: Logic to recalculate `_viewMatrix`.
  - `viewportResized(size: Vec2)`: A hook for cameras to react to changes in the rendering canvas size (e.g., updating aspect ratio).

### Key Properties and Methods

- **`projectionMatrix: Mat4` (getter)**: Returns the current projection matrix. If `_isProjectionDirty` is true, it calls `updateProjectionMatrix()` before returning.
- **`viewMatrix: Mat4` (getter)**: Returns the current view matrix. If `_isViewDirty` is true, it calls `updateViewMatrix()` before returning.
- **`updateMatrices()`**: A public method to force an update of both matrices if they are dirty.
- **`position`, `rotation`, `scale`**: Inherited from `Transform`. Modifying these (e.g., `camera.position.set([...])`) will typically require the view matrix to be recalculated. Concrete camera implementations usually mark `_isViewDirty = true` when these transform properties change or when specific methods like `lookAt` are called.

### `PerspectiveCamera`

A camera that uses perspective projection, making objects appear smaller as they move further away, simulating how human vision works.

#### Initialization

Created using the `Renderer`'s factory method:

```typescript
const camera = renderer.createPerspectiveCamera({
  fov: Math.PI / 4, // Field of View in radians (e.g., 45 degrees)
  aspect: canvas.width / canvas.height, // Aspect ratio of the viewport
  near: 0.1, // Near clipping plane
  far: 1000, // Far clipping plane
  position: vec3.fromValues(0, 5, 10), // Initial camera position
  target: vec3.fromValues(0, 0, 0), // Point the camera looks at
  up: vec3.fromValues(0, 1, 0), // Up direction for the camera
});
```

Or with defaults:

```typescript
const camera = renderer.createPerspectiveCamera();
camera.position.set([0, 2, 5]); // Set position using Transform properties
camera.lookAt([0, 0, 0]); // Point camera towards origin
```

#### Key Properties (Specific to `PerspectiveCamera`)

- `fov: number`: Vertical field of view in radians.
- `aspect: number`: Aspect ratio (width / height).
- `near: number`: Distance to the near clipping plane.
- `far: number`: Distance to the far clipping plane.
- `target: Vec3`: The world-space point the camera is looking at.
- `up: Vec3`: The world-space vector defining the "up" direction for the camera.

#### Matrix Updates

- **`updateProjectionMatrix()`**: Recalculates `_projectionMatrix` using `mat4.perspective(this.fov, this.aspect, this.near, this.far)`.
- **`updateViewMatrix()`**: Recalculates `_viewMatrix` using `mat4.lookAt(this.position, this.target, this.up)`. The `position` property is inherited from `Transform`.

#### Modifying Properties

The `PerspectiveCamera` provides setter methods for its properties (e.g., `setFov()`, `setTarget()`, `setPosition()`). These methods update the corresponding property and set the appropriate dirty flag (`_isProjectionDirty` or `_isViewDirty`).

```typescript
camera.setFov(Math.PI / 3); // Change FOV to 60 degrees
camera.setTarget([1, 1, 1]); // Look at a new point
// camera.position is part of Transform, can be set directly:
// camera.position.x += 1; camera._isViewDirty = true; (manual dirty or use setPosition)
```

#### `viewportResized(size: Vec2)`

When the canvas (viewport) resizes, this method is called by the `Renderer`. For `PerspectiveCamera`, it updates the `aspect` ratio: `this.setAspect(size[0] / size[1])`.

### `OrthographicCamera`

A camera that uses orthographic projection, where objects appear the same size regardless of their distance from the camera. Useful for 2D rendering or specific 3D effects.

#### Initialization

Created using the `Renderer`'s factory method:

```typescript
const orthoCamera = renderer.createOrthographicCamera({
  left: -canvas.width / 2,
  right: canvas.width / 2,
  top: canvas.height / 2,
  bottom: -canvas.height / 2,
  near: 0.1,
  far: 100,
  position: vec3.fromValues(0, 0, 10), // Initial camera position
  target: vec3.fromValues(0, 0, 0), // Point the camera looks at
  up: vec3.fromValues(0, 1, 0), // Up direction for the camera
});
```

Or with defaults:

```typescript
const orthoCamera = renderer.createOrthographicCamera();
// Default frustum: left/bottom = -1, right/top = 1
orthoCamera.position.set([0, 0, 5]);
orthoCamera.lookAt([0, 0, 0]);
```

#### Key Properties (Specific to `OrthographicCamera`)

- `left: number`: Left boundary of the viewing frustum.
- `right: number`: Right boundary of the viewing frustum.
- `top: number`: Top boundary of the viewing frustum.
- `bottom: number`: Bottom boundary of the viewing frustum.
- `near: number`: Distance to the near clipping plane.
- `far: number`: Distance to the far clipping plane.
- `target: Vec3`: The world-space point the camera is looking at.
- `up: Vec3`: The world-space vector defining the "up" direction for the camera.

#### Matrix Updates

- **`updateProjectionMatrix()`**: Recalculates `_projectionMatrix` using `mat4.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far)`.
- **`updateViewMatrix()`**: Recalculates `_viewMatrix` using `mat4.lookAt(this.position, this.target, this.up)`.

#### Modifying Properties

Similar to `PerspectiveCamera`, `OrthographicCamera` has setters (e.g., `setLeft()`, `setTarget()`, `setPosition()`) that update properties and mark matrices as dirty.

```typescript
orthoCamera.setLeft(-10);
orthoCamera.setRight(10);
// orthoCamera.position is part of Transform
```

#### `viewportResized(size: Vec2)`

The current implementation for `OrthographicCamera` is a no-op (`nop`). If you need the orthographic frustum to adapt to canvas size changes (e.g., to maintain a 1:1 pixel mapping), you would need to manually call its setter methods within a resize handler in your application code or extend/modify the camera.

```typescript
// Example: Manual adjustment on resize
function onWindowResize() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  // renderer.canvas might need to be updated first
  // renderer.canvas.width = newWidth;
  // renderer.canvas.height = newHeight;
  // renderer.canvasSize.set([newWidth, newHeight]); // If renderer handles this
  // renderer.sizeDirty = true;

  orthoCamera.setLeft(-newWidth / 2);
  orthoCamera.setRight(newWidth / 2);
  orthoCamera.setTop(newHeight / 2);
  orthoCamera.setBottom(-newHeight / 2);
  // No need to call camera.viewportResized if it's a nop
}
// window.addEventListener('resize', onWindowResize);
```

Cameras are fundamental for defining what part of the 3D world is visible and how it's projected onto your 2D screen.

## `Mesh`

A `Mesh` is a fundamental renderable object in `tinygpu`. It combines `Geometry` (defining its shape and vertex data) with a `Material` (defining its appearance and shader). Like other visual objects, `Mesh` extends `Transform`, so it can be positioned, rotated, and scaled within the scene.

### Initialization

Meshes are created using the `Renderer`'s factory method:

```typescript
// Assuming 'renderer', 'cubeGeometry', and 'redMaterial' are already created
const cubeMesh = renderer.createMesh(cubeGeometry, redMaterial);

// Add to scene to make it renderable
scene.add(cubeMesh);
```

When a `Mesh` is constructed:

- It stores references to the `GPUDevice`, `Material`, and `Geometry`.
- It initializes its own `UniformManager` specifically for mesh-level uniforms.
  - The primary uniform managed here is the `model` matrix (the mesh's `worldMatrix` inherited from `Transform`).

### Key Responsibilities

- **Combining Shape and Appearance**: Links a specific `Geometry` instance with a `Material` instance.
- **Transformable Object**: Inherits from `Transform`, allowing it to have its own local transformations (position, rotation, scale) and be part of the scene graph. Its final world transformation is available as `this.worldMatrix`.
- **Mesh-Specific Uniforms**: Manages its `model` matrix (world transform) via an internal `UniformManager`. This matrix transforms the mesh's vertices from model space to world space.
- **Cache Key Generation**: Provides a `cacheKey` getter used by the `Renderer` to cache `GPURenderPipeline` objects. This key is typically a combination of the geometry's and material's cache keys.

### Key Properties and Methods

- **`material: Material`**: The material used to render the mesh.
- **`geometry: Geometry`**: The geometry defining the mesh's shape.
- **`cacheKey: string` (getter)**: Returns a string key unique to the combination of this mesh's geometry and material. Used by `Renderer` for pipeline caching (`${this.geometry.cacheKey}-${this.material.cacheKey}`).
- **`update()`**: Called by the `Renderer` during the render cycle for each visible mesh.
  - Calls `this.material.update()` to allow the material to update its own uniforms or state.
  - Updates its internal `UniformManager` with the current `this.worldMatrix` for the "model" uniform.
  - Calls `this._uniformManager.update()` to write the model matrix to its GPU buffer.
- **`bindGroupLayout: GPUBindGroupLayout` (getter)**: Returns the `GPUBindGroupLayout` from its internal `UniformManager`. This layout defines the structure for mesh-specific uniforms (primarily the model matrix) for the shader.
- **`bindGroup: GPUBindGroup` (getter)**: Returns the `GPUBindGroup` from its internal `UniformManager`. This bind group contains the GPU buffer for the model matrix and is typically bound to slot 1 in shaders.

### Usage

```typescript
// Create geometry and material
const myGeometry = renderer.createGeometry(MyCustomGeometry);
const myMaterial = renderer.createMaterial(MyCustomMaterial, {
  /* ...material options... */
});

// Create mesh
const myMesh = renderer.createMesh(myGeometry, myMaterial);

// Position and rotate the mesh
myMesh.position.set([1, 2, 3]);
myMesh.rotation.x = Math.PI / 4;
myMesh.updateWorldMatrix(); // Important if not using a scene graph that does this automatically

// Add to scene
scene.add(myMesh);

// In the render loop, the Renderer will:
// 1. Traverse the scene.
// 2. For each Mesh found (like myMesh):
//    a. Call myMesh.update() -> updates material and model matrix uniform.
//    b. Get pipeline using myMesh.cacheKey.
//    c. Set pipeline.
//    d. Set scene, mesh, and material bind groups.
//    e. Set vertex/index buffers from myMesh.geometry.
//    f. Draw the mesh.
```

Meshes are the primary building blocks for constructing visible elements in your 3D scene.

## `Material`

The `Material` class is an abstract base class that defines the appearance of a `Mesh`. It specifies the shader code to be used and manages any uniforms (like colors, textures, or other parameters) that the shader requires.

### Core Concepts

- **Abstract Class**: You don't instantiate `Material` directly. Instead, you use or create concrete subclasses like `BasicMaterial`, `UVMaterial`, or `ShaderMaterial`.
- **Shader Link**: A material is primarily responsible for providing a `GPUShaderModule` (`shaderCode` getter) to the rendering pipeline.
- **Uniform Management**: Materials can have their own set of uniforms (e.g., base color, texture maps). These are managed by an internal `UniformManager` instance, if the material has uniforms.
- **Cache Key**: Each material type (and sometimes its configuration) should provide a unique `cacheKey` string. This key is used by the `Renderer` in conjunction with a `Geometry`'s cache key to cache `GPURenderPipeline` objects, optimizing performance by avoiding redundant pipeline creation.

### Key Properties and Methods (Abstract or Base Implementation)

- **`_uniformManager: UniformManager`**: An optional protected member. If a material has its own uniforms or textures, it will initialize and use a `UniformManager`.
- **`cacheKey: string` (abstract getter)**: Concrete materials must implement this to return a unique string identifier for their type and configuration.
- **`shaderCode: GPUShaderModule` (abstract getter)**: Concrete materials must implement this to return the compiled `GPUShaderModule` they use.
- **`bindGroupLayout: GPUBindGroupLayout | undefined` (getter)**: Returns the `GPUBindGroupLayout` from its `_uniformManager`, if one exists. This defines the structure of material-specific uniforms for the shader.
- **`bindGroup: GPUBindGroup | undefined` (getter)**: Returns the `GPUBindGroup` from its `_uniformManager`, if one exists. This contains the GPU buffers/textures for material-specific uniforms and is typically bound to slot 2 in shaders.
- **`update()`**: Called by the `Mesh`'s `update` method. It, in turn, calls `this._uniformManager?.update()` to ensure any dynamic material uniforms are updated on the GPU.

### Concrete Material Implementations

#### `BasicMaterial`

A simple material that can render a solid color and optionally apply a texture.

- **Initialization**:
  ```typescript
  const material = renderer.createMaterial(BasicMaterial, {
    color: new Color(1, 0, 0), // Optional: Red color, defaults to white
    map: myTexture, // Optional: A Texture instance
  });
  ```
- **Uniforms**:
  - `color: vec4f` (defaults to white `[1,1,1,1]`)
  - `map: texture_2d<f32>`, `mapSampler: sampler` (if a texture is provided)
- **Shader**: Uses `basic-material.wgsl`. This shader typically multiplies the sampled texture color (or white if no texture) by the uniform color.
- **Cache Key**: `"basic-material"`
- **Precompilation**: `BasicMaterial.precompile(device)` is called during construction to compile its WGSL shader into a `GPUShaderModule` (static `BasicMaterial.shaderModule`). This is done once per `GPUDevice`.

#### `UVMaterial`

A diagnostic material that visualizes the UV coordinates of a mesh.

- **Initialization**:
  ```typescript
  const uvMaterial = renderer.createMaterial(UVMaterial);
  ```
- **Uniforms**: None specific to the material itself (it directly uses UVs from geometry).
- **Shader**: Uses `uv-material.wgsl`. This shader typically outputs the UV coordinates as colors (e.g., U for red channel, V for green channel).
- **Cache Key**: `"UVMaterial"`
- **Precompilation**: Similar to `BasicMaterial`, `UVMaterial.precompile(device)` compiles its shader once.

#### `ShaderMaterial`

A flexible material that allows you to provide custom WGSL shader code directly.

- **Initialization**:

  ```typescript
  const customCode = `
    @fragment
    fn fs_main(in: VertexOutput) -> @location(0) vec4f {
      return vec4f(in.uv, 0.0, 1.0); // Example: visualize UVs
    }
  `;
  const customUniforms = [{ name: "intensity", value: 0.8 }]; // Example uniform
  const customTextures = [myNoiseTexture]; // Example texture

  const shaderMaterial = renderer.createMaterial(ShaderMaterial, {
    code: customCode,
    uniforms: customUniforms, // Optional
    textures: customTextures, // Optional
  });
  ```

- **Shader Code**: The `code` option provides the fragment shader (and optionally vertex shader parts if not using the default header). The provided code is combined with a common `shaderHeader.wgsl` (which includes standard bindings for scene, mesh uniforms, and vertex inputs).
- **Uniforms & Textures**: You can define an array of `UniformObj` and `Texture` instances that your custom shader will use. These are managed by the `ShaderMaterial`'s `UniformManager`.
- **Compilation**: The shader code is compiled into a `GPUShaderModule` when the `ShaderMaterial` is constructed.
- **Cache Key**: `btoa(this._options.code)` (Base64 encoding of the shader code string, ensuring uniqueness for different custom shaders).

Materials are crucial for defining how your 3D objects look, from simple colors to complex, custom-shaded surfaces.

## `Geometry`

The `Geometry` class is an abstract base class that defines the shape of a `Mesh`. It's responsible for holding vertex data (like positions, UV coordinates, normals) in GPU buffers and describing how this data is structured for the rendering pipeline.

### Core Concepts

- **Abstract Class**: You don't instantiate `Geometry` directly. You use or create concrete subclasses like `CubeGeometry` or `BigTriangle`.
- **GPU Buffers**:
  - `_vertexBuffer: GPUBuffer`: Stores vertex attribute data (e.g., positions, normals).
  - `_indexBuffer: GPUBuffer`: Stores indices that define how vertices are connected to form triangles.
  - `_uvBuffer: GPUBuffer`: Often stores UV coordinates. In some geometry implementations, UVs might be interleaved in the `_vertexBuffer`. The `BigTriangle` example shows a separate UV buffer.
- **Vertex Data Description**:
  - `_indexCount: number`: The number of indices in the `_indexBuffer`.
  - `_vertexCount: number`: The number of vertices.
  - `bufferLayout: GPUVertexBufferLayout[]` (abstract getter): This is crucial. It tells the GPU how to interpret the data in the vertex buffer(s). It defines attributes (like position, uv, normal), their shader locations, offsets, formats, and the stride of the vertex data.
- **Cache Key**: Provides a `cacheKey` (abstract getter) used by the `Renderer` (along with the material's cache key) for pipeline caching.

### Key Properties and Methods (Abstract or Base Implementation)

- **`_renderer: Renderer`**: A reference to the `Renderer` instance, used to access the `GPUDevice` for buffer creation.
- **`device: GPUDevice` (getter)**: Returns the `GPUDevice` from the renderer.
- **`vertexBuffer: GPUBuffer` (getter)**: Returns the main vertex buffer.
- **`indexBuffer: GPUBuffer` (getter)**: Returns the index buffer.
- **`uvBuffer: GPUBuffer` (getter)**: Returns the UV buffer.
- **`indexCount: number` (getter)**: Returns the number of indices.
- **`vertexCount: number` (getter)**: Returns the number of vertices.
- **`cacheKey: string` (abstract getter)**: Concrete geometry classes must provide a unique string identifier.
- **`bufferLayout: GPUVertexBufferLayout[]` (abstract getter)**: Concrete geometry classes must define the layout of their vertex data.

### Concrete Geometry Implementations

#### `CubeGeometry`

Defines a standard 1x1x1 cube centered at the origin.

- **Initialization**:
  ```typescript
  const cubeGeo = renderer.createGeometry(CubeGeometry);
  ```
- **Vertex Data**:
  - Generates 24 unique vertices (4 for each of the 6 faces) because each vertex on a face needs unique UVs and potentially normals if smooth shading isn't desired across hard edges.
  - Vertex attributes are interleaved in a single `vertexBuffer`: `[position (vec3f), uv (vec2f), normal (vec3f)]`.
  - `floatsPerVertex = 8`, `arrayStride = 8 * 4 = 32 bytes`.
  - `indexCount = 36` (6 faces _ 2 triangles/face _ 3 indices/triangle).
- **Buffers**:
  - `_vertexBuffer`: Contains the interleaved position, UV, and normal data.
  - `_indexBuffer`: Contains the indices for the 36 triangles.
  - `_uvBuffer`: In `CubeGeometry`'s current implementation, it seems to assign `_vertexBuffer` to `_uvBuffer` in the `super` call. This implies UVs are read from the main interleaved buffer, which is correct given its layout.
- **`cacheKey`**: `"CubeGeometry"`
- **`bufferLayout`**: Defines a single `GPUVertexBufferLayout` for the interleaved buffer:
  - `@location(0)`: `position` (float32x3)
  - `@location(1)`: `uv` (float32x2), offset after position.
  - `@location(2)`: `normal` (float32x3), offset after position and UVs.

#### `BigTriangle`

A special-purpose geometry often used for full-screen shader effects. It's a single large triangle that can cover the entire viewport.

- **Initialization**:
  ```typescript
  const bigTriangleGeo = renderer.createGeometry(BigTriangle);
  ```
- **Vertex Data**:
  - Defines 3 vertices that span a large area (e.g., from `(-1, -1)` to `(3, 3)` in clip space if used directly, or can be adjusted by model/view/projection matrices).
  - Positions: `[-1, -1, 0], [3, -1, 0], [-1, 3, 0]`
  - UVs: `[0, 0], [2, 0], [0, 2]` (these UVs go outside the 0-1 range, useful for specific texture addressing modes or procedural generation in shaders).
  - `indexCount = 3`.
- **Buffers**:
  - `_vertexBuffer`: Contains only vertex positions (`float32x3`).
  - `_indexBuffer`: Contains indices `[0, 1, 2]`.
  - `_uvBuffer`: A _separate_ buffer containing UV coordinates (`float32x2`).
- **`cacheKey`**: `"big-triangle"`
- **`bufferLayout`**: Defines _two_ `GPUVertexBufferLayout` entries:
  1.  For `_vertexBuffer` (positions at `@location(0)`).
  2.  For `_uvBuffer` (UVs at `@location(1)`).
      This tells the pipeline to fetch positions from one buffer (bound to slot 0 by default for vertex attributes) and UVs from another buffer (which would be bound to slot 1 for vertex attributes). The `Renderer`'s `render` method currently binds `mesh.geometry.vertexBuffer` to slot 0 and `mesh.geometry.uvBuffer` to slot 1.

Geometry classes encapsulate the data and structure of 3D shapes, making them ready for the GPU to render.

## `Transform`

The `Transform` class is a fundamental building block for creating hierarchical structures (scene graphs) in `tinygpu`. Objects like `Scene`, `Camera`, and `Mesh` all extend `Transform`, allowing them to be positioned, rotated, and scaled in 3D space, and to have parent-child relationships.

### Core Concepts

- **Local vs. World Space**:
  - **Local Transform**: Defined by `_position`, `_rotation` (as a `Quat`), and `_scale`. These are relative to the `Transform`'s parent.
  - **Local Matrix (`_localMatrix`)**: A `Mat4` calculated from the local position, rotation, and scale.
  - **World Matrix (`_worldMatrix`)**: A `Mat4` representing the `Transform`'s final position, rotation, and scale in world space. It's calculated by multiplying the parent's world matrix by this `Transform`'s local matrix.
- **Hierarchy**:
  - `_children: Transform[]`: An array of child `Transform` objects.
  - `_parent?: Transform`: A reference to the parent `Transform`.
- **Dirty Flags**:
  - `_localDirty: boolean`: True if local position, rotation, or scale has changed, requiring `_localMatrix` to be recalculated.
  - `_worldDirty: boolean`: True if `_localMatrix` has changed or if any ancestor's `_worldMatrix` has changed, requiring this `Transform`'s `_worldMatrix` to be recalculated.
- **Lazy Updates**: Matrices (`_localMatrix`, `_worldMatrix`) are only recalculated when accessed (via their getters) and if they are marked as dirty. This avoids unnecessary computations.

### Key Properties and Methods

#### Local Transform Components

- **`position: Vec3` (getter/setter)**: Gets or sets the local position. Setting it marks the transform as dirty.
- **`quaternion: Quat` (getter/setter)**: Gets or sets the local rotation as a quaternion. Setting it marks the transform as dirty.
- **`scale: Vec3` (getter/setter)**: Gets or sets the local scale. Setting it marks the transform as dirty.
- **`setRotation(x: number, y: number, z: number, order: RotationOrder = "xyz")`**: Sets the local rotation using Euler angles (converted to a quaternion). Marks the transform as dirty.

#### Matrix Access

- **`localMatrix: Mat4` (getter)**: Returns the local transformation matrix. If `_localDirty` is true, calls `updateLocalMatrix()` first.
- **`worldMatrix: Mat4` (getter)**: Returns the world transformation matrix. If `_localDirty` or `_worldDirty` is true, calls `updateWorldMatrix()` first. This getter ensures that the entire chain of parent world matrices is up-to-date before calculating this `Transform`'s world matrix.

#### Update Logic (Protected)

- **`updateLocalMatrix()`**: Recalculates `_localMatrix` from `_position`, `_rotation`, and `_scale` using a `compose` function (similar to `mat4.fromRotationTranslationScale` but directly composing into a matrix). Sets `_localDirty = false` and `_worldDirty = true`.
- **`updateWorldMatrix()`**:
  1.  Ensures `_localMatrix` is up-to-date by calling `updateLocalMatrix()` if `_localDirty`.
  2.  If a `_parent` exists, multiplies `_parent.worldMatrix` by `this.localMatrix` to get `_worldMatrix`.
  3.  If no `_parent`, `_worldMatrix` is a copy of `_localMatrix`.
  4.  Sets `_worldDirty = false`.
  5.  Crucially, marks all `_children` as world-dirty, as their world matrices depend on this one.
- **`makeDirty()`**: Sets `_localDirty = true` and `_worldDirty = true`. Propagates world-dirtiness to children. Called when local transform components change.
- **`makeWorldDirty()`**: Sets `_worldDirty = true` and propagates world-dirtiness to children. Called by parent when its world matrix changes, or when parent-child relationships change.

#### Hierarchy Management

- **`children: Transform[]` (getter)**: Returns the array of child transforms.
- **`add(child: Transform)`**: Adds a `Transform` as a child.
  - Removes the child from its previous parent, if any.
  - Sets `child._parent = this`.
  - Marks the `child` as world-dirty.
- **`remove(child: Transform)`**: Removes a `Transform` from its children.
  - Sets `child._parent = undefined`.
  - Marks the `child` as world-dirty (it's now relative to the scene root or needs re-parenting).
- **`clear()`**: Removes all children.
- **`traverse(fn: (transform: Transform) => void)`**: Executes a callback function for this `Transform` and recursively for all its descendants. This is used by `Scene` to iterate over all objects.

### Usage Example (Scene Graph)

```typescript
const scene = new Scene(device); // Scene is a Transform

const parentObj = new Transform();
parentObj.position.set([1, 0, 0]);
scene.add(parentObj);

const childObj = new Transform();
childObj.position.set([0, 1, 0]); // Local position relative to parentObj
parentObj.add(childObj);

// To get childObj's world position:
// childObj.worldMatrix will trigger updates if needed.
// The 4th column of childObj.worldMatrix (elements 12, 13, 14) is its world position.
// Expected world position of childObj: [1, 1, 0]

// If parentObj moves:
parentObj.position.x = 5; // This calls makeDirty() on parentObj
// Now, when childObj.worldMatrix is next accessed (e.g., by the renderer),
// it will correctly reflect the new parent position.
// Expected new world position of childObj: [5, 1, 0]

// A Mesh is also a Transform
const mesh = renderer.createMesh(geometry, material);
mesh.scale.set([0.5, 0.5, 0.5]); // Scale the mesh locally
childObj.add(mesh); // Mesh is now a child of childObj

// The renderer will use mesh.worldMatrix to render it.
// This matrix will be: scene.worldMatrix * parentObj.worldMatrix * childObj.worldMatrix * mesh.localMatrix
// (Assuming scene's worldMatrix is identity if it's the root)
```

The `Transform` class provides the core mechanism for organizing objects in a 3D scene, handling complex spatial relationships and ensuring transformations are efficiently updated.

## `UniformManager`

The `UniformManager` is a utility class responsible for managing a collection of uniforms (data like matrices, vectors, scalars) and textures that need to be passed to shaders. It handles the creation of `GPUBuffer`s for uniform data, `GPUSampler`s and `GPUTextureView`s for textures, and the corresponding `GPUBindGroupLayout` and `GPUBindGroup` objects.

This class is used internally by `Scene`, `Mesh`, and `Material` to manage their respective shader inputs.

### Core Concepts

- **Uniforms (`_uniforms: UniformObj[]`)**: An array of `UniformObj` (defined in `uniform-utils.ts`, typically `{ name: string, value: Mat4 | Vec3 | Vec2 | number | number[] }`).
  - These are packed into a single `ArrayBuffer` (`_uniformArr`) and then uploaded to a `GPUBuffer` (`_uniformBuffer`).
- **Textures (`_textures: Texture[]`)**: An array of `Texture` instances. Each texture has its own `GPUTexture` and `GPUTextureView`.
- **Binding Structure**:
  - If uniforms exist, they are bound as a single `GPUBuffer` at `binding: 0`.
  - If textures exist:
    - A single `GPUSampler` (linear filtering by default) is bound at the next available binding slot (e.g., `binding: 1` if uniforms exist, or `binding: 0` otherwise).
    - Each `GPUTextureView` is bound sequentially at subsequent binding slots.
- **Dirty Flags (`_uniformDirty`, `_texturesDirty`)**: Track whether uniform data or textures need to be re-uploaded or reconfigured.
- **Lazy Initialization**: `GPUBindGroupLayout` and `GPUBindGroup` are created on first access.

### Initialization

```typescript
// Typically instantiated by Scene, Mesh, or Material constructors
const uniformManager = new UniformManager(
  device, // GPUDevice
  [
    // Optional: Array of UniformObj
    { name: "modelMatrix", value: mat4.identity() },
    { name: "color", value: vec4.fromValues(1, 0, 0, 1) },
  ],
  [
    // Optional: Array of Texture instances
    myDiffuseTexture,
    myNormalTexture,
  ],
  "MyObjectUniforms" // Optional: Label for debugging
);
```

### Key Methods and Properties

- **`updateUniform(uniform: UniformObj)`**: Updates the value of an existing uniform by name. Marks uniforms as dirty.
  ```typescript
  uniformManager.updateUniform({ name: "modelMatrix", value: newModelMatrix });
  ```
- **`updateTextures(textures?: Texture[])`**: Replaces the current set of textures. Marks textures as dirty.
- **`update()`**: This is the main update method.
  - If `_uniformDirty`, it repacks `_uniforms` into `_uniformArr` (using `packUniforms`) and re-uploads it to `_uniformBuffer` (using `uploadUniformBuffer`).
  - If `_texturesDirty`, it calls `texture.upload(device)` for each texture (this typically creates/updates the `GPUTexture` on the device if the texture's source data has changed).
  - Resets dirty flags.
- **`setUniformsDirty()`, `setTexturesDirty()`, `setDirty()`**: Manually mark parts or all of the managed resources as needing an update.
- **`sampler: GPUSampler` (getter)**: Returns a shared `GPUSampler` (linear filtering, created on first access).
- **`bindGroupLayoutDescriptor: GPUBindGroupLayoutDescriptor` (getter)**: Dynamically generates the descriptor for the bind group layout based on the current set of uniforms and textures.
- **`bindGroupLayout: GPUBindGroupLayout` (getter)**: Returns the `GPUBindGroupLayout`, creating it from the descriptor if it doesn't exist.
- **`bindGroupDescriptor: GPUBindGroupDescriptor` (getter)**: Dynamically generates the descriptor for the bind group, referencing the `_uniformBuffer`, `sampler`, and texture views.
- **`bindGroup: GPUBindGroup` (getter)**: Returns the `GPUBindGroup`, creating it from the descriptor if it doesn't exist.

### Binding Order in Shaders (Typical)

When a `UniformManager` instance is used (e.g., by a `Scene`, `Mesh`, or `Material`), its `bindGroup` is bound to a specific group index in the shader pipeline. For example:

- Scene uniforms (projection, view matrices, time, etc.): `@group(0)`
- Mesh uniforms (model matrix): `@group(1)`
- Material uniforms (color, material-specific textures): `@group(2)`

Within each group managed by a `UniformManager`:

- **Uniform Buffer**: If present, always at `@binding(0)`.
  ```wgsl
  // In shader, for a group using UniformManager
  @group(X) @binding(0) var<uniform> myUniforms: MyUniformStruct;
  ```
- **Sampler**: If textures are present, the sampler is at the next binding (e.g., `@binding(1)` if uniforms are also present, or `@binding(0)` if only textures).
  ```wgsl
  @group(X) @binding(Y) var mySampler: sampler;
  ```
- **Textures**: Sequentially after the sampler.
  ```wgsl
  @group(X) @binding(Y+1) var texture1: texture_2d<f32>;
  @group(X) @binding(Y+2) var texture2: texture_2d<f32>;
  // ... and so on
  ```

The `UniformManager` abstracts away much of the boilerplate involved in setting up and updating shader resources, making it easier to define and use uniforms and textures across different parts of the rendering engine.

## `Texture`

The `Texture` class is an abstract base class for different types of textures that can be used in materials. It defines a common interface for texture properties and operations like uploading to the GPU.

### Core Concepts

- **Abstract Class**: You don't instantiate `Texture` directly. Use concrete subclasses like `DefaultTexture` or `ImageTexture`.
- **GPU Resource**: Represents a `GPUTexture` and its `GPUTextureView` on the device.
- **Data Source**: Concrete implementations handle loading or generating pixel data.
- **Descriptor**: Each texture type provides a `GPUTextureDescriptor` that defines its size, format, usage flags, etc.

### Key Properties and Methods (Abstract)

- **`descriptor: GPUTextureDescriptor` (getter)**: Returns the descriptor for creating the GPU texture.
- **`view: GPUTextureView` (getter)**: Returns the view for the GPU texture, used for binding to shaders.
- **`upload(device: GPUDevice): void`**: Uploads the texture data to the GPU, creating the `GPUTexture` if it doesn't exist.
- **`dispose(): void`**: Releases GPU resources (destroys the `GPUTexture`).
- **`width: number` (getter)**: Returns the width of the texture.
- **`height: number` (getter)**: Returns the height of the texture.

### Concrete Texture Implementations

#### `DefaultTexture`

A singleton texture representing a 1x1 white pixel. This is often used as a fallback or default texture in materials if no specific map is provided.

- **Singleton**: Accessed via `DefaultTexture.instance`.
- **Data**: A single white pixel `[255, 255, 255, 255]`.
- **Size**: 1x1.
- **Format**: `rgba8unorm`.
- **Usage**: `GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST`.
- **`upload(device: GPUDevice)`**: Creates a 1x1 `GPUTexture` and writes the white pixel data to it using `device.queue.writeTexture`. This happens only once.
- **`view`**: Returns a `GPUTextureView` of the 1x1 white texture.

#### `ImageTexture`

A texture loaded from an image URL.

- **Initialization**:
  ```typescript
  const myImageTexture = new ImageTexture("path/to/myimage.png");
  // Must be loaded before it can be uploaded to GPU
  await myImageTexture.load();
  ```
- **`load(): Promise<void>`**:
  - Fetches the image from the `src` URL.
  - Decodes it into an `ImageBitmap`.
  - Stores the `ImageBitmap` and its `width` and `height`.
- **Data**: The `ImageBitmap` obtained from loading the image.
- **Format**: `rgba8unorm`.
- **Usage**: `GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`. The `RENDER_ATTACHMENT` flag suggests it could potentially be used as a render target, though this might not be its primary use case if just used as a material map.
- **`upload(device: GPUDevice)`**:
  - Requires `_imagedata` (the `ImageBitmap`) to be loaded first.
  - Creates a `GPUTexture` based on the image's dimensions and format.
  - Copies the `ImageBitmap` data to the `GPUTexture` using `device.queue.copyExternalImageToTexture`. This method handles the conversion from `ImageBitmap` to the GPU texture format. It also includes a `flipY: true` option, which is common for web image loading as WebGL/WebGPU texture coordinates often have (0,0) at the bottom-left, while images have (0,0) at the top-left.
- **`dispose()`**: Closes the `ImageBitmap` and destroys the `GPUTexture`.

Textures are essential for adding visual detail and realism to 3D scenes. The `Texture` classes in `tinygpu` provide a way to manage these resources.

## Utilities (`src/uniform-utils.ts`)

This file contains helper functions and types primarily used by `UniformManager` for handling uniform data according to the WebGPU std140 memory layout rules.

### `UniformObj` Type

```typescript
export type UniformObj = { name: string; value: number | Float32Array | Color };
```

A simple type definition for representing a named uniform value. The `value` can be a JavaScript number (for `f32`), a `Float32Array` (for vectors and matrices), or a `Color` instance (which likely provides a `uniformValue()` method returning a `Float32Array`).

### `packUniforms(items: UniformObj[], targetBuffer?: ArrayBuffer, targetOffset: number = 0): ArrayBuffer`

This is the core function for packing JavaScript uniform data into an `ArrayBuffer` following std140 layout rules.

- **Purpose**: Takes an array of `UniformObj` and arranges their data into a single `ArrayBuffer`, respecting the alignment and padding requirements of std140. This packed buffer can then be uploaded to a `GPUBuffer`.
- **std140 Layout**: WebGPU (and other graphics APIs) require uniform data in buffers to follow specific memory layout rules (std140) to ensure compatibility across different hardware. Key rules include:
  - Scalars (`f32`) have an alignment and size of 4 bytes.
  - `vec2` has an alignment and size of 8 bytes.
  - `vec3` has an alignment of 16 bytes (meaning it often occupies 16 bytes even though its data is only 12 bytes).
  - `vec4`, `mat4` columns, and `mat3` columns have an alignment of 16 bytes.
  - Arrays and structures have specific alignment rules based on their members.
- **How it Works**:
  1.  **First Pass (Layout Calculation)**:
      - Iterates through the input `items`.
      - Determines the WGSL type (`f32`, `vec2`, `vec3`, `vec4`, `mat3`, `mat4`, `color`) based on the `value` type and size (using `getDataType` helper).
      - Looks up the std140 alignment, size, and padding requirements for that type from the `STD140_LAYOUT_INFO` constant.
      - Calculates the necessary padding _before_ the current item to meet its alignment requirement based on the `currentOffset`.
      - Stores the calculated offset (relative to the start of packing), size, type, and original data for each item.
      - Advances `currentOffset` by the type's required size _including padding_ (`advanceAmount`).
      - Keeps track of the `maxAlignment` needed by any item.
  2.  **Total Size Calculation**: Calculates the `totalSizeNeeded` for the packed data, ensuring it's a multiple of the `maxAlignment`.
  3.  **Buffer Preparation**:
      - If a `targetBuffer` is provided, checks if it's large enough.
      - If no `targetBuffer` is provided or it's too small (though the current code throws an error if too small, it doesn't resize), it creates a new `ArrayBuffer` of the `totalSizeNeeded`.
  4.  **Second Pass (Data Writing)**:
      - Iterates through the stored layout information from the first pass.
      - Calculates the absolute `writeOffset` in the target buffer (`baseWriteOffset + relativeOffset`).
      - Uses `DataView` (for `f32`) or `Float32Array` views (for vectors/matrices/colors) to write the `value` from each `UniformObj` into the `bufferToWrite` at the correct calculated `writeOffset`.
      - Special handling is needed for `vec3` (writes 3 floats into a 16-byte aligned slot) and `mat3` (writes columns individually respecting the 16-byte stride per column).
- **Return Value**: Returns the `ArrayBuffer` containing the packed data (either the buffer passed in or the newly created one).

### `uploadUniformBuffer(packedUniforms: ArrayBuffer, device: GPUDevice, label: string = "Uniform Buffer", buffer?: GPUBuffer): GPUBuffer`

A utility function to upload the packed `ArrayBuffer` data to a `GPUBuffer`.

- **Purpose**: Simplifies the process of creating or updating a `GPUBuffer` used for uniforms.
- **How it Works**:
  1.  If an existing `buffer` is provided, it uses that.
  2.  If no `buffer` is provided, it creates a new `GPUBuffer` with the size of the `packedUniforms` data and usage flags `GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM`.
  3.  Uses `device.queue.writeBuffer` to copy the data from the `packedUniforms` `ArrayBuffer` into the `GPUBuffer`.
- **Return Value**: Returns the `GPUBuffer` (either the one passed in or the newly created one).

These utilities are essential for bridging the gap between JavaScript data structures and the memory layout required by the GPU for uniform buffers.

## `Color` (`src/color.ts`)

A simple class to represent an RGBA color.

### Initialization

```typescript
const red = new Color(1, 0, 0); // Alpha defaults to 1
const semiTransparentBlue = new Color(0, 0, 1, 0.5);
```

### Properties

- `r: number`: Red component (typically 0-1).
- `g: number`: Green component (typically 0-1).
- `b: number`: Blue component (typically 0-1).
- `a: number`: Alpha component (0-1).

### Methods

- **`uniformValue(): Vec4`**: Returns the color components as a `Vec4` (which is a `Float32Array` of length 4). It reuses an internal buffer (`this.buffer`) for efficiency. This is the format expected by `UniformManager` when packing color uniforms (which are treated as `vec4f` in WGSL).

```typescript
const myColor = new Color(0.2, 0.4, 0.6);
const colorUniformData = myColor.uniformValue(); // Returns Float32Array([0.2, 0.4, 0.6, 1.0])

// Used internally by UniformManager/packUniforms
const uniformObj = { name: "myColorUniform", value: myColor };
// packUniforms will call myColor.uniformValue() when processing this object.
```

## `Constants` (`src/constants.ts`)

This file exports a simple object containing constants, likely intended for defining standard bind group indices used throughout the shaders and the engine.

```typescript
export const Constants = {
  BG_SCENE: 0, // Bind Group index for Scene-level uniforms
  BG_MATERIAL: 1, // Bind Group index for Material-level uniforms/textures
  BG_OBJECT: 2, // Bind Group index for Object/Mesh-level uniforms (e.g., model matrix)
};
```

- **`BG_SCENE = 0`**: Suggests that bind group 0 (`@group(0)` in WGSL) is reserved for uniforms managed by the `Scene` (e.g., projection matrix, view matrix, time).
- **`BG_MATERIAL = 1`**: Suggests that bind group 1 (`@group(1)` in WGSL) is reserved for uniforms and textures managed by the `Material`.
- **`BG_OBJECT = 2`**: Suggests that bind group 2 (`@group(2)` in WGSL) is reserved for uniforms managed by the `Mesh` (primarily the model matrix).

**Note**: There seems to be a discrepancy between these constants and the binding group indices mentioned in the `UniformManager` documentation section (which suggested Scene=0, Mesh=1, Material=2). The actual usage in `Renderer.ts` (`passEncoder.setBindGroup(0, sceneBindGroup)`, `passEncoder.setBindGroup(1, mesh.bindGroup)`, `passEncoder.setBindGroup(2, mesh.material.bindGroup)`) confirms the order: Scene=0, Mesh=1, Material=2. The constants file might be outdated or intended for a different binding scheme. For clarity, the documentation sections have been updated to reflect the `Renderer.ts` usage (0=Scene, 1=Mesh, 2=Material). It's recommended to update `constants.ts` to match the actual implementation:

```typescript
// Recommended update for constants.ts to match Renderer.ts usage:
export const Constants = {
  BG_SCENE: 0,
  BG_OBJECT: 1, // Object/Mesh uniforms (model matrix)
  BG_MATERIAL: 2, // Material uniforms/textures
};
```
