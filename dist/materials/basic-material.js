"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicMaterial = void 0;
const color_1 = require("../color");
const texture_1 = require("../texture");
const material_1 = require("./material");
const uniform_manager_1 = require("../uniform-manager");
const header_wgsl_1 = __importDefault(require("../shaders/header.wgsl"));
const basic_material_wgsl_1 = __importDefault(require("../shaders/basic-material.wgsl"));
class BasicMaterial extends material_1.Material {
    constructor(device, options = {}) {
        BasicMaterial.precompile(device);
        const uniformManager = new uniform_manager_1.UniformManager(device, [
            {
                name: "color",
                value: (options.color || new color_1.Color(1, 1, 1)).uniformValue(),
            },
        ], [options.map || texture_1.DefaultTexture.instance], "BasicMaterial");
        super(uniformManager);
    }
    get cacheKey() {
        return "basic-material";
    }
    get shaderCode() {
        return BasicMaterial.shaderModule;
    }
    static precompile(device) {
        if (!BasicMaterial.shaderModule) {
            BasicMaterial.shaderModule = device.createShaderModule({
                label: "basic-material-shader",
                code: `
${header_wgsl_1.default}
${basic_material_wgsl_1.default}
`,
            });
        }
    }
}
exports.BasicMaterial = BasicMaterial;
BasicMaterial.shaderModule = null;
