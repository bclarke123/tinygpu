"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShaderMaterial = void 0;
const material_1 = require("./material");
const uniform_manager_1 = require("../uniform-manager");
const header_wgsl_1 = __importDefault(require("../shaders/header.wgsl"));
class ShaderMaterial extends material_1.Material {
    constructor(device, options) {
        const uniformManager = new uniform_manager_1.UniformManager(device, options.uniforms, options.textures, "ShaderMaterial");
        super(uniformManager);
        this._options = options;
        this.compile(device);
    }
    compile(device) {
        this._shaderModule = device.createShaderModule({
            label: "ShaderModule",
            code: `
${header_wgsl_1.default}
${this._options.code}
      `,
        });
    }
    get cacheKey() {
        return btoa(this._options.code);
    }
    get shaderCode() {
        return this._shaderModule;
    }
}
exports.ShaderMaterial = ShaderMaterial;
