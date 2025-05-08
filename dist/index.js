"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.material = exports.geometry = exports.camera = exports.Transform = exports.Scene = exports.ImageTexture = exports.DefaultTexture = exports.Color = exports.Renderer = void 0;
var renderer_1 = require("./renderer");
Object.defineProperty(exports, "Renderer", { enumerable: true, get: function () { return renderer_1.Renderer; } });
var color_1 = require("./color");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return color_1.Color; } });
var texture_1 = require("./texture");
Object.defineProperty(exports, "DefaultTexture", { enumerable: true, get: function () { return texture_1.DefaultTexture; } });
Object.defineProperty(exports, "ImageTexture", { enumerable: true, get: function () { return texture_1.ImageTexture; } });
var scene_1 = require("./scene");
Object.defineProperty(exports, "Scene", { enumerable: true, get: function () { return scene_1.Scene; } });
var transform_1 = require("./transform");
Object.defineProperty(exports, "Transform", { enumerable: true, get: function () { return transform_1.Transform; } });
exports.camera = __importStar(require("./camera"));
exports.geometry = __importStar(require("./geometry"));
exports.material = __importStar(require("./materials"));
