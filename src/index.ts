export { Renderer, RendererOptions } from "./renderer";
export { MaterialFactory } from "./materials/material-factory";
export { GeometryFactory } from "./geometry/geometry-factory";
export { BigTriangle } from "./geometry/big-triangle";
export { BasicMaterial, BasicMaterialOptions } from "./materials/basic-material";
export { Color } from "./color";

export class PerspectiveCamera {
  constructor() {
    console.log("PerspectiveCamera initialized");
  }

  setPosition(x: number, y: number, z: number) {
    console.log(`Camera position set to (${x}, ${y}, ${z})`);
  }
}

export class OrthographicCamera {
  constructor() {
    console.log("OrthographicCamera initialized");
  }

  setPosition(x: number, y: number, z: number) {
    console.log(`Camera position set to (${x}, ${y}, ${z})`);
  }
}
