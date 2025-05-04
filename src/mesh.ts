import { Geometry } from "./geometry/geometry";
import { Material } from "./materials/material";

export class Mesh {
    material: Material;
    geometry: Geometry;
    pipeline: GPURenderPipeline;

    constructor(mat: Material, geo: Geometry, pipeline: GPURenderPipeline) {
        this.material = mat;
        this.geometry = geo;
        this.pipeline = pipeline;
    }
}