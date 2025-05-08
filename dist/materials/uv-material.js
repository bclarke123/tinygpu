"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UVMaterial = void 0;
const material_1 = require("./material");
const header_wgsl_1 = __importDefault(require("../shaders/header.wgsl"));
const uv_material_wgsl_1 = __importDefault(require("../shaders/uv-material.wgsl"));
class UVMaterial extends material_1.Material {
    constructor(device) {
        super();
        UVMaterial.precompile(device);
    }
    get cacheKey() {
        return "UVMaterial";
    }
    get shaderCode() {
        return UVMaterial.shaderModule;
    }
    static precompile(device) {
        if (!UVMaterial.shaderModule) {
            UVMaterial.shaderModule = device.createShaderModule({
                label: "basic-material-shader",
                code: `
${header_wgsl_1.default}
${uv_material_wgsl_1.default}
`,
            });
        }
    }
}
exports.UVMaterial = UVMaterial;
UVMaterial.shaderModule = null;
