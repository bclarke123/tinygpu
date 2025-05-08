"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrthographicCamera = exports.PerspectiveCamera = exports.Camera = void 0;
var camera_1 = require("./camera");
Object.defineProperty(exports, "Camera", { enumerable: true, get: function () { return camera_1.Camera; } });
var perspective_camera_1 = require("./perspective-camera");
Object.defineProperty(exports, "PerspectiveCamera", { enumerable: true, get: function () { return perspective_camera_1.PerspectiveCamera; } });
var orthographic_camera_1 = require("./orthographic-camera");
Object.defineProperty(exports, "OrthographicCamera", { enumerable: true, get: function () { return orthographic_camera_1.OrthographicCamera; } });
