"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isWebGLSupported() {
    if (WebGLRenderingContext != null) {
        var canvas = document.createElement('canvas');
        return canvas.getContext('webgl') != null || canvas.getContext('experimental-webgl') != null;
    }
    return false;
}
exports.isWebGLSupported = isWebGLSupported;
function isWebGL2Supported() {
    if (WebGLRenderingContext != null) {
        var canvas = document.createElement('canvas');
        return canvas.getContext('webgl2') != null;
    }
    return false;
}
exports.isWebGL2Supported = isWebGL2Supported;
