"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
class Material {
    constructor(uniformManager) {
        this._uniformManager = uniformManager;
    }
    get bindGroupLayout() {
        var _a;
        return (_a = this._uniformManager) === null || _a === void 0 ? void 0 : _a.bindGroupLayout;
    }
    get bindGroup() {
        var _a;
        return (_a = this._uniformManager) === null || _a === void 0 ? void 0 : _a.bindGroup;
    }
    update() {
        var _a;
        (_a = this._uniformManager) === null || _a === void 0 ? void 0 : _a.update();
    }
}
exports.Material = Material;
