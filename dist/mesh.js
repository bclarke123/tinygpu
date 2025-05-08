"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mesh = void 0;
const transform_1 = require("./transform");
const uniform_manager_1 = require("./uniform-manager");
class Mesh extends transform_1.Transform {
    constructor(device, mat, geo) {
        super();
        this._device = device;
        this.material = mat;
        this.geometry = geo;
        this._uniformManager = new uniform_manager_1.UniformManager(device, [{ name: "model", value: this.worldMatrix }], [], "Mesh");
    }
    get cacheKey() {
        return `${this.geometry.cacheKey}-${this.material.cacheKey}`;
    }
    update() {
        this.material.update();
        this._uniformManager.updateUniform({
            name: "model", value: this.worldMatrix
        });
        this._uniformManager.update();
    }
    get bindGroupLayout() {
        return this._uniformManager.bindGroupLayout;
    }
    get bindGroup() {
        return this._uniformManager.bindGroup;
    }
}
exports.Mesh = Mesh;
