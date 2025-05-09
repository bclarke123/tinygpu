(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tinygpu", [], factory);
	else if(typeof exports === 'object')
		exports["tinygpu"] = factory();
	else
		root["tinygpu"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mat3: () => (/* binding */ mat3),
/* harmony export */   mat3d: () => (/* binding */ mat3d),
/* harmony export */   mat3n: () => (/* binding */ mat3n),
/* harmony export */   mat4: () => (/* binding */ mat4),
/* harmony export */   mat4d: () => (/* binding */ mat4d),
/* harmony export */   mat4n: () => (/* binding */ mat4n),
/* harmony export */   quat: () => (/* binding */ quat),
/* harmony export */   quatd: () => (/* binding */ quatd),
/* harmony export */   quatn: () => (/* binding */ quatn),
/* harmony export */   utils: () => (/* binding */ utils),
/* harmony export */   vec2: () => (/* binding */ vec2),
/* harmony export */   vec2d: () => (/* binding */ vec2d),
/* harmony export */   vec2n: () => (/* binding */ vec2n),
/* harmony export */   vec3: () => (/* binding */ vec3),
/* harmony export */   vec3d: () => (/* binding */ vec3d),
/* harmony export */   vec3n: () => (/* binding */ vec3n),
/* harmony export */   vec4: () => (/* binding */ vec4),
/* harmony export */   vec4d: () => (/* binding */ vec4d),
/* harmony export */   vec4n: () => (/* binding */ vec4n)
/* harmony export */ });
/* wgpu-matrix@3.4.0, license MIT */
function wrapConstructor(OriginalConstructor, modifier) {
    return class extends OriginalConstructor {
        constructor(...args) {
            super(...args);
            modifier(this);
        }
    }; // Type assertion is necessary here
}
const ZeroArray = wrapConstructor((Array), a => a.fill(0));

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
let EPSILON = 0.000001;
/**
 * Set the value for EPSILON for various checks
 * @param v - Value to use for EPSILON.
 * @returns previous value of EPSILON;
 */
function setEpsilon(v) {
    const old = EPSILON;
    EPSILON = v;
    return old;
}
/**
 * Convert degrees to radians
 * @param degrees - Angle in degrees
 * @returns angle converted to radians
 */
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
/**
 * Convert radians to degrees
 * @param radians - Angle in radians
 * @returns angle converted to degrees
 */
function radToDeg(radians) {
    return radians * 180 / Math.PI;
}
/**
 * Lerps between a and b via t
 * @param a - starting value
 * @param b - ending value
 * @param t - value where 0 = a and 1 = b
 * @returns a + (b - a) * t
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}
/**
 * Compute the opposite of lerp. Given a and b and a value between
 * a and b returns a value between 0 and 1. 0 if a, 1 if b.
 * Note: no clamping is done.
 * @param a - start value
 * @param b - end value
 * @param v - value between a and b
 * @returns (v - a) / (b - a)
 */
function inverseLerp(a, b, v) {
    const d = b - a;
    return (Math.abs(b - a) < EPSILON)
        ? a
        : (v - a) / d;
}
/**
 * Compute the euclidean modulo
 *
 * ```
 * // table for n / 3
 * -5, -4, -3, -2, -1,  0,  1,  2,  3,  4,  5   <- n
 * ------------------------------------
 * -2  -1  -0  -2  -1   0,  1,  2,  0,  1,  2   <- n % 3
 *  1   2   0   1   2   0,  1,  2,  0,  1,  2   <- euclideanModule(n, 3)
 * ```
 *
 * @param n - dividend
 * @param m - divisor
 * @returns the euclidean modulo of n / m
 */
function euclideanModulo(n, m) {
    return ((n % m) + m) % m;
}

var utils = {
    __proto__: null,
    get EPSILON () { return EPSILON; },
    degToRad: degToRad,
    euclideanModulo: euclideanModulo,
    inverseLerp: inverseLerp,
    lerp: lerp,
    radToDeg: radToDeg,
    setEpsilon: setEpsilon
};

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec3
 */
function getAPIImpl$5(Ctor) {
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values.
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Vec2's specified type
     * it would be faster to use
     *
     * ```
     * const v = vec2.clone(someJSArray);
     * ```
     *
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    function create(x = 0, y = 0) {
        const newDst = new Ctor(2);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
            }
        }
        return newDst;
    }
    /**
     * Creates a Vec2; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec2
     * Also see {@link vec2.create} and {@link vec2.copy}
     *
     * @param x first value
     * @param y second value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = x;
        newDst[1] = y;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
        const ax = a[0];
        const ay = a[1];
        const bx = b[0];
        const by = b[1];
        const mag1 = Math.sqrt(ax * ax + ay * ay);
        const mag2 = Math.sqrt(bx * bx + by * by);
        const mag = mag1 * mag2;
        const cosine = mag && dot(a, b) / mag;
        return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        const z = a[0] * b[1] - a[1] * b[0];
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = z;
        return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        return Math.sqrt(v0 * v0 + v1 * v1);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        return v0 * v0 + v1 * v1;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        return dx * dx + dy * dy;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        const v0 = v[0];
        const v1 = v[1];
        const len = Math.sqrt(v0 * v0 + v1 * v1);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec2.clone})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = v[0];
        newDst[1] = v[1];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec2.copy})
     * Also see {@link vec2.create} and {@link vec2.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Creates a random unit vector * scale
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random(scale = 1, dst) {
        const newDst = (dst ?? new Ctor(2));
        const angle = Math.random() * 2 * Math.PI;
        newDst[0] = Math.cos(angle) * scale;
        newDst[1] = Math.sin(angle) * scale;
        return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(2));
        newDst[0] = 0;
        newDst[1] = 0;
        return newDst;
    }
    /**
     * Transform Vec2 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(2));
        const x = v[0];
        const y = v[1];
        newDst[0] = x * m[0] + y * m[4] + m[12];
        newDst[1] = x * m[1] + y * m[5] + m[13];
        return newDst;
    }
    /**
     * Transform Vec2 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional Vec2 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
        const newDst = (dst ?? new Ctor(2));
        const x = v[0];
        const y = v[1];
        newDst[0] = m[0] * x + m[4] * y + m[8];
        newDst[1] = m[1] * x + m[5] * y + m[9];
        return newDst;
    }
    /**
     * Rotate a 2D vector
     *
     * @param a The vec2 point to rotate
     * @param b The origin of the rotation
     * @param rad The angle of rotation in radians
     * @returns the rotated vector
     */
    function rotate(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(2));
        // Translate point to the origin
        const p0 = a[0] - b[0];
        const p1 = a[1] - b[1];
        const sinC = Math.sin(rad);
        const cosC = Math.cos(rad);
        //perform rotation and translate to correct position
        newDst[0] = p0 * cosC - p1 * sinC + b[0];
        newDst[1] = p0 * sinC + p1 * cosC + b[1];
        return newDst;
    }
    /**
     * Treat a 2D vector as a direction and set it's length
     *
     * @param a The vec2 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(2));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec2 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(2));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(2));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        angle,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        cross,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        random,
        zero,
        transformMat4,
        transformMat3,
        rotate,
        setLength,
        truncate,
        midpoint,
    };
}
const cache$5 = new Map();
function getAPI$5(Ctor) {
    let api = cache$5.get(Ctor);
    if (!api) {
        api = getAPIImpl$5(Ctor);
        cache$5.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec3
 * */
function getAPIImpl$4(Ctor) {
    /**
     * Creates a vec3; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    function create(x, y, z) {
        const newDst = new Ctor(3);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a vec3; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec3
     * Also see {@link vec3.create} and {@link vec3.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        newDst[2] = Math.ceil(v[2]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        newDst[2] = Math.floor(v[2]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        newDst[2] = Math.round(v[2]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        newDst[2] = Math.min(max, Math.max(min, v[2]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        newDst[2] = a[2] + b[2] * scale;
        return newDst;
    }
    /**
     * Returns the angle in radians between two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns The angle in radians between the 2 vectors.
     */
    function angle(a, b) {
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const bx = b[0];
        const by = b[1];
        const bz = b[2];
        const mag1 = Math.sqrt(ax * ax + ay * ay + az * az);
        const mag2 = Math.sqrt(bx * bx + by * by + bz * bz);
        const mag = mag1 * mag2;
        const cosine = mag && dot(a, b) / mag;
        return Math.acos(cosine);
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        newDst[2] = a[2] + t[2] * (b[2] - a[2]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        newDst[2] = Math.max(a[2], b[2]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        newDst[2] = Math.min(a[2], b[2]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        newDst[2] = 1 / v[2];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the cross product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of a cross b.
     */
    function cross(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        const t1 = a[2] * b[0] - a[0] * b[2];
        const t2 = a[0] * b[1] - a[1] * b[0];
        newDst[0] = a[1] * b[2] - a[2] * b[1];
        newDst[1] = t1;
        newDst[2] = t2;
        return newDst;
    }
    /**
     * Computes the dot product of two vectors; assumes both vectors have
     * three entries.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        return v0 * v0 + v1 * v1 + v2 * v2;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        newDst[2] = -v[2];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec3.clone})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = v[0];
        newDst[1] = v[1];
        newDst[2] = v[2];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec3.copy})
     * Also see {@link vec3.create} and {@link vec3.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        newDst[2] = a[2] * b[2];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        newDst[2] = a[2] / b[2];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Creates a random vector
     * @param scale - Default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The random vector.
     */
    function random(scale = 1, dst) {
        const newDst = (dst ?? new Ctor(3));
        const angle = Math.random() * 2 * Math.PI;
        const z = Math.random() * 2 - 1;
        const zScale = Math.sqrt(1 - z * z) * scale;
        newDst[0] = Math.cos(angle) * zScale;
        newDst[1] = Math.sin(angle) * zScale;
        newDst[2] = z * scale;
        return newDst;
    }
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        return newDst;
    }
    /**
     * transform vec3 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const w = (m[3] * x + m[7] * y + m[11] * z + m[15]) || 1;
        newDst[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        newDst[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        newDst[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return newDst;
    }
    /**
     * Transform vec3 by upper 3x3 matrix inside 4x4 matrix.
     * @param v - The direction.
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns The transformed vector.
     */
    function transformMat4Upper3x3(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        newDst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
        return newDst;
    }
    /**
     * Transforms vec3 by 3x3 matrix
     *
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat3(v, m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        newDst[0] = x * m[0] + y * m[4] + z * m[8];
        newDst[1] = x * m[1] + y * m[5] + z * m[9];
        newDst[2] = x * m[2] + y * m[6] + z * m[10];
        return newDst;
    }
    /**
     * Transforms vec3 by Quaternion
     * @param v - the vector to transform
     * @param q - the quaternion to transform by
     * @param dst - optional vec3 to store result. If not passed a new one is created.
     * @returns the transformed
     */
    function transformQuat(v, q, dst) {
        const newDst = (dst ?? new Ctor(3));
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const w2 = q[3] * 2;
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const uvX = qy * z - qz * y;
        const uvY = qz * x - qx * z;
        const uvZ = qx * y - qy * x;
        newDst[0] = x + uvX * w2 + (qy * uvZ - qz * uvY) * 2;
        newDst[1] = y + uvY * w2 + (qz * uvX - qx * uvZ) * 2;
        newDst[2] = z + uvZ * w2 + (qx * uvY - qy * uvX) * 2;
        return newDst;
    }
    /**
     * Returns the translation component of a 4-by-4 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
        const newDst = (dst ?? new Ctor(3));
        newDst[0] = m[12];
        newDst[1] = m[13];
        newDst[2] = m[14];
        return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? new Ctor(3));
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        newDst[2] = m[off + 2];
        return newDst;
    }
    /**
     * Returns the scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
        const newDst = (dst ?? new Ctor(3));
        const xx = m[0];
        const xy = m[1];
        const xz = m[2];
        const yx = m[4];
        const yy = m[5];
        const yz = m[6];
        const zx = m[8];
        const zy = m[9];
        const zz = m[10];
        newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
        newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
        newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
        return newDst;
    }
    /**
     * Rotate a 3D vector around the x-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateX(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        //perform rotation
        r[0] = p[0];
        r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
        r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
        //translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Rotate a 3D vector around the y-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns the rotated vector
     */
    function rotateY(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        // translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        // perform rotation
        r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
        // translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Rotate a 3D vector around the z-axis
     *
     * @param {ReadonlyVec3} a The vec3 point to rotate
     * @param {ReadonlyVec3} b The origin of the rotation
     * @param {Number} rad The angle of rotation in radians
     * @param dst - The vector to set. If not passed a new one is created.
     * @returns {vec3} out
     */
    function rotateZ(a, b, rad, dst) {
        const newDst = (dst ?? new Ctor(3));
        const p = [];
        const r = [];
        // translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        // perform rotation
        r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
        r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
        r[2] = p[2];
        // translate to correct position
        newDst[0] = r[0] + b[0];
        newDst[1] = r[1] + b[1];
        newDst[2] = r[2] + b[2];
        return newDst;
    }
    /**
     * Treat a 3D vector as a direction and set it's length
     *
     * @param a The vec3 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(3));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec3 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(3));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(3));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        angle,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        cross,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        random,
        zero,
        transformMat4,
        transformMat4Upper3x3,
        transformMat3,
        transformQuat,
        getTranslation,
        getAxis,
        getScaling,
        rotateX,
        rotateY,
        rotateZ,
        setLength,
        truncate,
        midpoint,
    };
}
const cache$4 = new Map();
function getAPI$4(Ctor) {
    let api = cache$4.get(Ctor);
    if (!api) {
        api = getAPIImpl$4(Ctor);
        cache$4.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates a typed API for Mat3
 * */
function getAPIImpl$3(Ctor) {
    const vec2 = getAPI$5(Ctor);
    const vec3 = getAPI$4(Ctor);
    /**
     * Create a Mat3 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat3's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat3.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @returns matrix created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8) {
        const newDst = new Ctor(12);
        // to make the array homogenous
        newDst[3] = 0;
        newDst[7] = 0;
        newDst[11] = 0;
        if (v0 !== undefined) {
            newDst[0] = v0;
            if (v1 !== undefined) {
                newDst[1] = v1;
                if (v2 !== undefined) {
                    newDst[2] = v2;
                    if (v3 !== undefined) {
                        newDst[4] = v3;
                        if (v4 !== undefined) {
                            newDst[5] = v4;
                            if (v5 !== undefined) {
                                newDst[6] = v5;
                                if (v6 !== undefined) {
                                    newDst[8] = v6;
                                    if (v7 !== undefined) {
                                        newDst[9] = v7;
                                        if (v8 !== undefined) {
                                            newDst[10] = v8;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Sets the values of a Mat3
     * Also see {@link mat3.create} and {@link mat3.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 set from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = v0;
        newDst[1] = v1;
        newDst[2] = v2;
        newDst[3] = 0;
        newDst[4] = v3;
        newDst[5] = v4;
        newDst[6] = v5;
        newDst[7] = 0;
        newDst[8] = v6;
        newDst[9] = v7;
        newDst[10] = v8;
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Creates a Mat3 from the upper left 3x3 part of a Mat4
     * @param m4 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from m4
     */
    function fromMat4(m4, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = m4[0];
        newDst[1] = m4[1];
        newDst[2] = m4[2];
        newDst[3] = 0;
        newDst[4] = m4[4];
        newDst[5] = m4[5];
        newDst[6] = m4[6];
        newDst[7] = 0;
        newDst[8] = m4[8];
        newDst[9] = m4[9];
        newDst[10] = m4[10];
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Creates a Mat3 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat3 made from q
     */
    function fromQuat(q, dst) {
        const newDst = (dst ?? new Ctor(12));
        const x = q[0];
        const y = q[1];
        const z = q[2];
        const w = q[3];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const yx = y * x2;
        const yy = y * y2;
        const zx = z * x2;
        const zy = z * y2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        newDst[0] = 1 - yy - zz;
        newDst[1] = yx + wz;
        newDst[2] = zx - wy;
        newDst[3] = 0;
        newDst[4] = yx - wz;
        newDst[5] = 1 - xx - zz;
        newDst[6] = zy + wx;
        newDst[7] = 0;
        newDst[8] = zx + wy;
        newDst[9] = zy - wx;
        newDst[10] = 1 - xx - yy;
        newDst[11] = 0;
        return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = -m[0];
        newDst[1] = -m[1];
        newDst[2] = -m[2];
        newDst[4] = -m[4];
        newDst[5] = -m[5];
        newDst[6] = -m[6];
        newDst[8] = -m[8];
        newDst[9] = -m[9];
        newDst[10] = -m[10];
        return newDst;
    }
    /**
     * multiply a matrix by a scalar matrix.
     * @param m - The matrix.
     * @param s - the scalar
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns m * s.
     */
    function multiplyScalar(m, s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = m[0] * s;
        newDst[1] = m[1] * s;
        newDst[2] = m[2] * s;
        newDst[4] = m[4] * s;
        newDst[5] = m[5] * s;
        newDst[6] = m[6] * s;
        newDst[8] = m[8] * s;
        newDst[9] = m[9] * s;
        newDst[10] = m[10] * s;
        return newDst;
    }
    /**
     * multiply a matrix by a scalar matrix.
     * @param m - The matrix.
     * @param s - the scalar
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns m * s.
     */
    const mulScalar = multiplyScalar;
    /**
     * add 2 matrices.
     * @param a - matrix 1.
     * @param b - matrix 2.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns a + b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[4] = a[4] + b[4];
        newDst[5] = a[5] + b[5];
        newDst[6] = a[6] + b[6];
        newDst[8] = a[8] + b[8];
        newDst[9] = a[9] + b[9];
        newDst[10] = a[10] + b[10];
        return newDst;
    }
    /**
     * Copies a matrix. (same as {@link mat3.clone})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
        return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat3.copy})
     * Also see {@link mat3.create} and {@link mat3.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    const clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[4] - b[4]) < EPSILON &&
            Math.abs(a[5] - b[5]) < EPSILON &&
            Math.abs(a[6] - b[6]) < EPSILON &&
            Math.abs(a[8] - b[8]) < EPSILON &&
            Math.abs(a[9] - b[9]) < EPSILON &&
            Math.abs(a[10] - b[10]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a Operand matrix.
     * @param b Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[4] === b[4] &&
            a[5] === b[5] &&
            a[6] === b[6] &&
            a[8] === b[8] &&
            a[9] === b[9] &&
            a[10] === b[10];
    }
    /**
     * Creates a 3-by-3 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 3-by-3 identity matrix.
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        if (newDst === m) {
            let t;
            // 0 1 2
            // 4 5 6
            // 8 9 10
            t = m[1];
            m[1] = m[4];
            m[4] = t;
            t = m[2];
            m[2] = m[8];
            m[8] = t;
            t = m[6];
            m[6] = m[9];
            m[9] = t;
            return newDst;
        }
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        newDst[0] = m00;
        newDst[1] = m10;
        newDst[2] = m20;
        newDst[4] = m01;
        newDst[5] = m11;
        newDst[6] = m21;
        newDst[8] = m02;
        newDst[9] = m12;
        newDst[10] = m22;
        return newDst;
    }
    /**
     * Computes the inverse of a 3-by-3 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const b01 = m22 * m11 - m12 * m21;
        const b11 = -m22 * m10 + m12 * m20;
        const b21 = m21 * m10 - m11 * m20;
        const invDet = 1 / (m00 * b01 + m01 * b11 + m02 * b21);
        newDst[0] = b01 * invDet;
        newDst[1] = (-m22 * m01 + m02 * m21) * invDet;
        newDst[2] = (m12 * m01 - m02 * m11) * invDet;
        newDst[4] = b11 * invDet;
        newDst[5] = (m22 * m00 - m02 * m20) * invDet;
        newDst[6] = (-m12 * m00 + m02 * m10) * invDet;
        newDst[8] = b21 * invDet;
        newDst[9] = (-m21 * m00 + m01 * m20) * invDet;
        newDst[10] = (m11 * m00 - m01 * m10) * invDet;
        return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        return m00 * (m11 * m22 - m21 * m12) -
            m10 * (m01 * m22 - m21 * m02) +
            m20 * (m01 * m12 - m11 * m02);
    }
    /**
     * Computes the inverse of a 3-by-3 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    const invert = inverse;
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(12));
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a10 = a[4 + 0];
        const a11 = a[4 + 1];
        const a12 = a[4 + 2];
        const a20 = a[8 + 0];
        const a21 = a[8 + 1];
        const a22 = a[8 + 2];
        const b00 = b[0];
        const b01 = b[1];
        const b02 = b[2];
        const b10 = b[4 + 0];
        const b11 = b[4 + 1];
        const b12 = b[4 + 2];
        const b20 = b[8 + 0];
        const b21 = b[8 + 1];
        const b22 = b[8 + 2];
        newDst[0] = a00 * b00 + a10 * b01 + a20 * b02;
        newDst[1] = a01 * b00 + a11 * b01 + a21 * b02;
        newDst[2] = a02 * b00 + a12 * b01 + a22 * b02;
        newDst[4] = a00 * b10 + a10 * b11 + a20 * b12;
        newDst[5] = a01 * b10 + a11 * b11 + a21 * b12;
        newDst[6] = a02 * b10 + a12 * b11 + a22 * b12;
        newDst[8] = a00 * b20 + a10 * b21 + a20 * b22;
        newDst[9] = a01 * b20 + a11 * b21 + a21 * b22;
        newDst[10] = a02 * b20 + a12 * b21 + a22 * b22;
        return newDst;
    }
    /**
     * Multiplies two 3-by-3 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    const mul = multiply;
    /**
     * Sets the translation component of a 3-by-3 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
        const newDst = (dst ?? identity());
        if (a !== newDst) {
            newDst[0] = a[0];
            newDst[1] = a[1];
            newDst[2] = a[2];
            newDst[4] = a[4];
            newDst[5] = a[5];
            newDst[6] = a[6];
        }
        newDst[8] = v[0];
        newDst[9] = v[1];
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Returns the translation component of a 3-by-3 matrix as a vector with 3
     * entries.
     * @param m - The matrix.
     * @param dst - vector to hold result. If not passed a new one is created.
     * @returns The translation component of m.
     */
    function getTranslation(m, dst) {
        const newDst = (dst ?? vec2.create());
        newDst[0] = m[8];
        newDst[1] = m[9];
        return newDst;
    }
    /**
     * Returns an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y,
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? vec2.create());
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        return newDst;
    }
    /**
     * Sets an axis of a 3x3 matrix as a vector with 2 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
        const newDst = (dst === m ? m : copy(m, dst));
        const off = axis * 4;
        newDst[off + 0] = v[0];
        newDst[off + 1] = v[1];
        return newDst;
    }
    /**
     * Returns the "2d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
        const newDst = (dst ?? vec2.create());
        const xx = m[0];
        const xy = m[1];
        const yx = m[4];
        const yy = m[5];
        newDst[0] = Math.sqrt(xx * xx + xy * xy);
        newDst[1] = Math.sqrt(yx * yx + yy * yy);
        return newDst;
    }
    /**
     * Returns the "3d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function get3DScaling(m, dst) {
        const newDst = (dst ?? vec3.create());
        const xx = m[0];
        const xy = m[1];
        const xz = m[2];
        const yx = m[4];
        const yy = m[5];
        const yz = m[6];
        const zx = m[8];
        const zy = m[9];
        const zz = m[10];
        newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
        newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
        newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which translates by the given vector v.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[8] = v[0];
        newDst[9] = v[1];
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Translates the given 3-by-3 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
        const newDst = (dst ?? new Ctor(12));
        const v0 = v[0];
        const v1 = v[1];
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        if (m !== newDst) {
            newDst[0] = m00;
            newDst[1] = m01;
            newDst[2] = m02;
            newDst[4] = m10;
            newDst[5] = m11;
            newDst[6] = m12;
        }
        newDst[8] = m00 * v0 + m10 * v1 + m20;
        newDst[9] = m01 * v0 + m11 * v1 + m21;
        newDst[10] = m02 * v0 + m12 * v1 + m22;
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates  by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotation(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = s;
        newDst[2] = 0;
        newDst[4] = -s;
        newDst[5] = c;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix  by the given angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotate(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 + s * m10;
        newDst[1] = c * m01 + s * m11;
        newDst[2] = c * m02 + s * m12;
        newDst[4] = c * m10 - s * m00;
        newDst[5] = c * m11 - s * m01;
        newDst[6] = c * m12 - s * m02;
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the x-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationX(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = c;
        newDst[6] = s;
        newDst[8] = 0;
        newDst[9] = -s;
        newDst[10] = c;
        return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix around the x-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateX(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m10 = m[4];
        const m11 = m[5];
        const m12 = m[6];
        const m20 = m[8];
        const m21 = m[9];
        const m22 = m[10];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[4] = c * m10 + s * m20;
        newDst[5] = c * m11 + s * m21;
        newDst[6] = c * m12 + s * m22;
        newDst[8] = c * m20 - s * m10;
        newDst[9] = c * m21 - s * m11;
        newDst[10] = c * m22 - s * m12;
        if (m !== newDst) {
            newDst[0] = m[0];
            newDst[1] = m[1];
            newDst[2] = m[2];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the y-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationY(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = 0;
        newDst[2] = -s;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[8] = s;
        newDst[9] = 0;
        newDst[10] = c;
        return newDst;
    }
    /**
     * Rotates the given 3-by-3 matrix around the y-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateY(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(12));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 - s * m20;
        newDst[1] = c * m01 - s * m21;
        newDst[2] = c * m02 - s * m22;
        newDst[8] = c * m20 + s * m00;
        newDst[9] = c * m21 + s * m01;
        newDst[10] = c * m22 + s * m02;
        if (m !== newDst) {
            newDst[4] = m[4];
            newDst[5] = m[5];
            newDst[6] = m[6];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which rotates around the z-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    const rotationZ = rotation;
    /**
     * Rotates the given 3-by-3 matrix around the z-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    const rotateZ = rotate;
    /**
     * Creates a 3-by-3 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has two
     * entries.
     * @param v - A vector of
     *     2 entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = v[0];
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = v[1];
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * two entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of 2 entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
        const newDst = (dst ?? new Ctor(12));
        const v0 = v[0];
        const v1 = v[1];
        newDst[0] = v0 * m[0 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2];
        newDst[4] = v1 * m[1 * 4 + 0];
        newDst[5] = v1 * m[1 * 4 + 1];
        newDst[6] = v1 * m[1 * 4 + 2];
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     3 entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling3D(v, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = v[0];
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = v[1];
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = v[2];
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of 3 entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale3D(m, v, dst) {
        const newDst = (dst ?? new Ctor(12));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        newDst[0] = v0 * m[0 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2];
        newDst[4] = v1 * m[1 * 4 + 0];
        newDst[5] = v1 * m[1 * 4 + 1];
        newDst[6] = v1 * m[1 * 4 + 2];
        newDst[8] = v2 * m[2 * 4 + 0];
        newDst[9] = v2 * m[2 * 4 + 1];
        newDst[10] = v2 * m[2 * 4 + 2];
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales uniformly in the X and Y dimensions
     * @param s - Amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = s;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in the X and Y dimension by an amount
     * given.
     * @param m - The matrix to be modified.
     * @param s - Amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s * m[0 * 4 + 0];
        newDst[1] = s * m[0 * 4 + 1];
        newDst[2] = s * m[0 * 4 + 2];
        newDst[4] = s * m[1 * 4 + 0];
        newDst[5] = s * m[1 * 4 + 1];
        newDst[6] = s * m[1 * 4 + 2];
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
        }
        return newDst;
    }
    /**
     * Creates a 3-by-3 matrix which scales uniformly in each dimension
     * @param s - Amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling3D(s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[4] = 0;
        newDst[5] = s;
        newDst[6] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = s;
        return newDst;
    }
    /**
     * Scales the given 3-by-3 matrix in each dimension by an amount
     * given.
     * @param m - The matrix to be modified.
     * @param s - Amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale3D(m, s, dst) {
        const newDst = (dst ?? new Ctor(12));
        newDst[0] = s * m[0 * 4 + 0];
        newDst[1] = s * m[0 * 4 + 1];
        newDst[2] = s * m[0 * 4 + 2];
        newDst[4] = s * m[1 * 4 + 0];
        newDst[5] = s * m[1 * 4 + 1];
        newDst[6] = s * m[1 * 4 + 2];
        newDst[8] = s * m[2 * 4 + 0];
        newDst[9] = s * m[2 * 4 + 1];
        newDst[10] = s * m[2 * 4 + 2];
        return newDst;
    }
    return {
        add,
        clone,
        copy,
        create,
        determinant,
        equals,
        equalsApproximately,
        fromMat4,
        fromQuat,
        get3DScaling,
        getAxis,
        getScaling,
        getTranslation,
        identity,
        inverse,
        invert,
        mul,
        mulScalar,
        multiply,
        multiplyScalar,
        negate,
        rotate,
        rotateX,
        rotateY,
        rotateZ,
        rotation,
        rotationX,
        rotationY,
        rotationZ,
        scale,
        scale3D,
        scaling,
        scaling3D,
        set,
        setAxis,
        setTranslation,
        translate,
        translation,
        transpose,
        uniformScale,
        uniformScale3D,
        uniformScaling,
        uniformScaling3D,
    };
}
const cache$3 = new Map();
function getAPI$3(Ctor) {
    let api = cache$3.get(Ctor);
    if (!api) {
        api = getAPIImpl$3(Ctor);
        cache$3.set(Ctor, api);
    }
    return api;
}

/**
 * Generates a typed API for Mat4
 * */
function getAPIImpl$2(Ctor) {
    const vec3 = getAPI$4(Ctor);
    /**
     * 4x4 Matrix math math functions.
     *
     * Almost all functions take an optional `newDst` argument. If it is not passed in the
     * functions will create a new matrix. In other words you can do this
     *
     *     const mat = mat4.translation([1, 2, 3]);  // Creates a new translation matrix
     *
     * or
     *
     *     const mat = mat4.create();
     *     mat4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
     *
     * The first style is often easier but depending on where it's used it generates garbage where
     * as there is almost never allocation with the second style.
     *
     * It is always save to pass any matrix as the destination. So for example
     *
     *     const mat = mat4.identity();
     *     const trans = mat4.translation([1, 2, 3]);
     *     mat4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
     *
     */
    /**
     * Create a Mat4 from values
     *
     * Note: Since passing in a raw JavaScript array
     * is valid in all circumstances, if you want to
     * force a JavaScript array into a Mat4's specified type
     * it would be faster to use
     *
     * ```
     * const m = mat4.clone(someJSArray);
     * ```
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @returns created from values.
     */
    function create(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15) {
        const newDst = new Ctor(16);
        if (v0 !== undefined) {
            newDst[0] = v0;
            if (v1 !== undefined) {
                newDst[1] = v1;
                if (v2 !== undefined) {
                    newDst[2] = v2;
                    if (v3 !== undefined) {
                        newDst[3] = v3;
                        if (v4 !== undefined) {
                            newDst[4] = v4;
                            if (v5 !== undefined) {
                                newDst[5] = v5;
                                if (v6 !== undefined) {
                                    newDst[6] = v6;
                                    if (v7 !== undefined) {
                                        newDst[7] = v7;
                                        if (v8 !== undefined) {
                                            newDst[8] = v8;
                                            if (v9 !== undefined) {
                                                newDst[9] = v9;
                                                if (v10 !== undefined) {
                                                    newDst[10] = v10;
                                                    if (v11 !== undefined) {
                                                        newDst[11] = v11;
                                                        if (v12 !== undefined) {
                                                            newDst[12] = v12;
                                                            if (v13 !== undefined) {
                                                                newDst[13] = v13;
                                                                if (v14 !== undefined) {
                                                                    newDst[14] = v14;
                                                                    if (v15 !== undefined) {
                                                                        newDst[15] = v15;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Sets the values of a Mat4
     * Also see {@link mat4.create} and {@link mat4.copy}
     *
     * @param v0 - value for element 0
     * @param v1 - value for element 1
     * @param v2 - value for element 2
     * @param v3 - value for element 3
     * @param v4 - value for element 4
     * @param v5 - value for element 5
     * @param v6 - value for element 6
     * @param v7 - value for element 7
     * @param v8 - value for element 8
     * @param v9 - value for element 9
     * @param v10 - value for element 10
     * @param v11 - value for element 11
     * @param v12 - value for element 12
     * @param v13 - value for element 13
     * @param v14 - value for element 14
     * @param v15 - value for element 15
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 created from values.
     */
    function set(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = v0;
        newDst[1] = v1;
        newDst[2] = v2;
        newDst[3] = v3;
        newDst[4] = v4;
        newDst[5] = v5;
        newDst[6] = v6;
        newDst[7] = v7;
        newDst[8] = v8;
        newDst[9] = v9;
        newDst[10] = v10;
        newDst[11] = v11;
        newDst[12] = v12;
        newDst[13] = v13;
        newDst[14] = v14;
        newDst[15] = v15;
        return newDst;
    }
    /**
     * Creates a Mat4 from a Mat3
     * @param m3 - source matrix
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from m3
     */
    function fromMat3(m3, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = m3[0];
        newDst[1] = m3[1];
        newDst[2] = m3[2];
        newDst[3] = 0;
        newDst[4] = m3[4];
        newDst[5] = m3[5];
        newDst[6] = m3[6];
        newDst[7] = 0;
        newDst[8] = m3[8];
        newDst[9] = m3[9];
        newDst[10] = m3[10];
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a Mat4 rotation matrix from a quaternion
     * @param q - quaternion to create matrix from
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns Mat4 made from q
     */
    function fromQuat(q, dst) {
        const newDst = (dst ?? new Ctor(16));
        const x = q[0];
        const y = q[1];
        const z = q[2];
        const w = q[3];
        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;
        const xx = x * x2;
        const yx = y * x2;
        const yy = y * y2;
        const zx = z * x2;
        const zy = z * y2;
        const zz = z * z2;
        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;
        newDst[0] = 1 - yy - zz;
        newDst[1] = yx + wz;
        newDst[2] = zx - wy;
        newDst[3] = 0;
        newDst[4] = yx - wz;
        newDst[5] = 1 - xx - zz;
        newDst[6] = zy + wx;
        newDst[7] = 0;
        newDst[8] = zx + wy;
        newDst[9] = zy - wx;
        newDst[10] = 1 - xx - yy;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Negates a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns -m.
     */
    function negate(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = -m[0];
        newDst[1] = -m[1];
        newDst[2] = -m[2];
        newDst[3] = -m[3];
        newDst[4] = -m[4];
        newDst[5] = -m[5];
        newDst[6] = -m[6];
        newDst[7] = -m[7];
        newDst[8] = -m[8];
        newDst[9] = -m[9];
        newDst[10] = -m[10];
        newDst[11] = -m[11];
        newDst[12] = -m[12];
        newDst[13] = -m[13];
        newDst[14] = -m[14];
        newDst[15] = -m[15];
        return newDst;
    }
    /**
     * add 2 matrices.
     * @param a - matrix 1.
     * @param b - matrix 2.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns a + b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[3] = a[3] + b[3];
        newDst[4] = a[4] + b[4];
        newDst[5] = a[5] + b[5];
        newDst[6] = a[6] + b[6];
        newDst[7] = a[7] + b[7];
        newDst[8] = a[8] + b[8];
        newDst[9] = a[9] + b[9];
        newDst[10] = a[10] + b[10];
        newDst[11] = a[11] + b[11];
        newDst[12] = a[12] + b[12];
        newDst[13] = a[13] + b[13];
        newDst[14] = a[14] + b[14];
        newDst[15] = a[15] + b[15];
        return newDst;
    }
    /**
     * Multiplies a matrix by a scalar
     * @param m - The matrix.
     * @param s - The scalar
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns m * s.
     */
    function multiplyScalar(m, s, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = m[0] * s;
        newDst[1] = m[1] * s;
        newDst[2] = m[2] * s;
        newDst[3] = m[3] * s;
        newDst[4] = m[4] * s;
        newDst[5] = m[5] * s;
        newDst[6] = m[6] * s;
        newDst[7] = m[7] * s;
        newDst[8] = m[8] * s;
        newDst[9] = m[9] * s;
        newDst[10] = m[10] * s;
        newDst[11] = m[11] * s;
        newDst[12] = m[12] * s;
        newDst[13] = m[13] * s;
        newDst[14] = m[14] * s;
        newDst[15] = m[15] * s;
        return newDst;
    }
    /**
     * Multiplies a matrix by a scalar
     * @param m - The matrix.
     * @param s - The scalar
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns m * s.
     */
    const mulScalar = multiplyScalar;
    /**
     * Copies a matrix. (same as {@link mat4.clone})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    function copy(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = m[0];
        newDst[1] = m[1];
        newDst[2] = m[2];
        newDst[3] = m[3];
        newDst[4] = m[4];
        newDst[5] = m[5];
        newDst[6] = m[6];
        newDst[7] = m[7];
        newDst[8] = m[8];
        newDst[9] = m[9];
        newDst[10] = m[10];
        newDst[11] = m[11];
        newDst[12] = m[12];
        newDst[13] = m[13];
        newDst[14] = m[14];
        newDst[15] = m[15];
        return newDst;
    }
    /**
     * Copies a matrix (same as {@link mat4.copy})
     * Also see {@link mat4.create} and {@link mat4.set}
     * @param m - The matrix.
     * @param dst - The matrix. If not passed a new one is created.
     * @returns A copy of m.
     */
    const clone = copy;
    /**
     * Check if 2 matrices are approximately equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON &&
            Math.abs(a[4] - b[4]) < EPSILON &&
            Math.abs(a[5] - b[5]) < EPSILON &&
            Math.abs(a[6] - b[6]) < EPSILON &&
            Math.abs(a[7] - b[7]) < EPSILON &&
            Math.abs(a[8] - b[8]) < EPSILON &&
            Math.abs(a[9] - b[9]) < EPSILON &&
            Math.abs(a[10] - b[10]) < EPSILON &&
            Math.abs(a[11] - b[11]) < EPSILON &&
            Math.abs(a[12] - b[12]) < EPSILON &&
            Math.abs(a[13] - b[13]) < EPSILON &&
            Math.abs(a[14] - b[14]) < EPSILON &&
            Math.abs(a[15] - b[15]) < EPSILON;
    }
    /**
     * Check if 2 matrices are exactly equal
     * @param a - Operand matrix.
     * @param b - Operand matrix.
     * @returns true if matrices are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] &&
            a[1] === b[1] &&
            a[2] === b[2] &&
            a[3] === b[3] &&
            a[4] === b[4] &&
            a[5] === b[5] &&
            a[6] === b[6] &&
            a[7] === b[7] &&
            a[8] === b[8] &&
            a[9] === b[9] &&
            a[10] === b[10] &&
            a[11] === b[11] &&
            a[12] === b[12] &&
            a[13] === b[13] &&
            a[14] === b[14] &&
            a[15] === b[15];
    }
    /**
     * Creates a 4-by-4 identity matrix.
     *
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A 4-by-4 identity matrix.
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Takes the transpose of a matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The transpose of m.
     */
    function transpose(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        if (newDst === m) {
            let t;
            t = m[1];
            m[1] = m[4];
            m[4] = t;
            t = m[2];
            m[2] = m[8];
            m[8] = t;
            t = m[3];
            m[3] = m[12];
            m[12] = t;
            t = m[6];
            m[6] = m[9];
            m[9] = t;
            t = m[7];
            m[7] = m[13];
            m[13] = t;
            t = m[11];
            m[11] = m[14];
            m[14] = t;
            return newDst;
        }
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        newDst[0] = m00;
        newDst[1] = m10;
        newDst[2] = m20;
        newDst[3] = m30;
        newDst[4] = m01;
        newDst[5] = m11;
        newDst[6] = m21;
        newDst[7] = m31;
        newDst[8] = m02;
        newDst[9] = m12;
        newDst[10] = m22;
        newDst[11] = m32;
        newDst[12] = m03;
        newDst[13] = m13;
        newDst[14] = m23;
        newDst[15] = m33;
        return newDst;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix.
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    function inverse(m, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        const tmp0 = m22 * m33;
        const tmp1 = m32 * m23;
        const tmp2 = m12 * m33;
        const tmp3 = m32 * m13;
        const tmp4 = m12 * m23;
        const tmp5 = m22 * m13;
        const tmp6 = m02 * m33;
        const tmp7 = m32 * m03;
        const tmp8 = m02 * m23;
        const tmp9 = m22 * m03;
        const tmp10 = m02 * m13;
        const tmp11 = m12 * m03;
        const tmp12 = m20 * m31;
        const tmp13 = m30 * m21;
        const tmp14 = m10 * m31;
        const tmp15 = m30 * m11;
        const tmp16 = m10 * m21;
        const tmp17 = m20 * m11;
        const tmp18 = m00 * m31;
        const tmp19 = m30 * m01;
        const tmp20 = m00 * m21;
        const tmp21 = m20 * m01;
        const tmp22 = m00 * m11;
        const tmp23 = m10 * m01;
        const t0 = (tmp0 * m11 + tmp3 * m21 + tmp4 * m31) -
            (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
        const t1 = (tmp1 * m01 + tmp6 * m21 + tmp9 * m31) -
            (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
        const t2 = (tmp2 * m01 + tmp7 * m11 + tmp10 * m31) -
            (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
        const t3 = (tmp5 * m01 + tmp8 * m11 + tmp11 * m21) -
            (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
        const d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        newDst[0] = d * t0;
        newDst[1] = d * t1;
        newDst[2] = d * t2;
        newDst[3] = d * t3;
        newDst[4] = d * ((tmp1 * m10 + tmp2 * m20 + tmp5 * m30) -
            (tmp0 * m10 + tmp3 * m20 + tmp4 * m30));
        newDst[5] = d * ((tmp0 * m00 + tmp7 * m20 + tmp8 * m30) -
            (tmp1 * m00 + tmp6 * m20 + tmp9 * m30));
        newDst[6] = d * ((tmp3 * m00 + tmp6 * m10 + tmp11 * m30) -
            (tmp2 * m00 + tmp7 * m10 + tmp10 * m30));
        newDst[7] = d * ((tmp4 * m00 + tmp9 * m10 + tmp10 * m20) -
            (tmp5 * m00 + tmp8 * m10 + tmp11 * m20));
        newDst[8] = d * ((tmp12 * m13 + tmp15 * m23 + tmp16 * m33) -
            (tmp13 * m13 + tmp14 * m23 + tmp17 * m33));
        newDst[9] = d * ((tmp13 * m03 + tmp18 * m23 + tmp21 * m33) -
            (tmp12 * m03 + tmp19 * m23 + tmp20 * m33));
        newDst[10] = d * ((tmp14 * m03 + tmp19 * m13 + tmp22 * m33) -
            (tmp15 * m03 + tmp18 * m13 + tmp23 * m33));
        newDst[11] = d * ((tmp17 * m03 + tmp20 * m13 + tmp23 * m23) -
            (tmp16 * m03 + tmp21 * m13 + tmp22 * m23));
        newDst[12] = d * ((tmp14 * m22 + tmp17 * m32 + tmp13 * m12) -
            (tmp16 * m32 + tmp12 * m12 + tmp15 * m22));
        newDst[13] = d * ((tmp20 * m32 + tmp12 * m02 + tmp19 * m22) -
            (tmp18 * m22 + tmp21 * m32 + tmp13 * m02));
        newDst[14] = d * ((tmp18 * m12 + tmp23 * m32 + tmp15 * m02) -
            (tmp22 * m32 + tmp14 * m02 + tmp19 * m12));
        newDst[15] = d * ((tmp22 * m22 + tmp16 * m02 + tmp21 * m12) -
            (tmp20 * m12 + tmp23 * m22 + tmp17 * m02));
        return newDst;
    }
    /**
     * Compute the determinant of a matrix
     * @param m - the matrix
     * @returns the determinant
     */
    function determinant(m) {
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        const tmp0 = m22 * m33;
        const tmp1 = m32 * m23;
        const tmp2 = m12 * m33;
        const tmp3 = m32 * m13;
        const tmp4 = m12 * m23;
        const tmp5 = m22 * m13;
        const tmp6 = m02 * m33;
        const tmp7 = m32 * m03;
        const tmp8 = m02 * m23;
        const tmp9 = m22 * m03;
        const tmp10 = m02 * m13;
        const tmp11 = m12 * m03;
        const t0 = (tmp0 * m11 + tmp3 * m21 + tmp4 * m31) -
            (tmp1 * m11 + tmp2 * m21 + tmp5 * m31);
        const t1 = (tmp1 * m01 + tmp6 * m21 + tmp9 * m31) -
            (tmp0 * m01 + tmp7 * m21 + tmp8 * m31);
        const t2 = (tmp2 * m01 + tmp7 * m11 + tmp10 * m31) -
            (tmp3 * m01 + tmp6 * m11 + tmp11 * m31);
        const t3 = (tmp5 * m01 + tmp8 * m11 + tmp11 * m21) -
            (tmp4 * m01 + tmp9 * m11 + tmp10 * m21);
        return m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3;
    }
    /**
     * Computes the inverse of a 4-by-4 matrix. (same as inverse)
     * @param m - The matrix.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The inverse of m.
     */
    const invert = inverse;
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(16));
        const a00 = a[0];
        const a01 = a[1];
        const a02 = a[2];
        const a03 = a[3];
        const a10 = a[4 + 0];
        const a11 = a[4 + 1];
        const a12 = a[4 + 2];
        const a13 = a[4 + 3];
        const a20 = a[8 + 0];
        const a21 = a[8 + 1];
        const a22 = a[8 + 2];
        const a23 = a[8 + 3];
        const a30 = a[12 + 0];
        const a31 = a[12 + 1];
        const a32 = a[12 + 2];
        const a33 = a[12 + 3];
        const b00 = b[0];
        const b01 = b[1];
        const b02 = b[2];
        const b03 = b[3];
        const b10 = b[4 + 0];
        const b11 = b[4 + 1];
        const b12 = b[4 + 2];
        const b13 = b[4 + 3];
        const b20 = b[8 + 0];
        const b21 = b[8 + 1];
        const b22 = b[8 + 2];
        const b23 = b[8 + 3];
        const b30 = b[12 + 0];
        const b31 = b[12 + 1];
        const b32 = b[12 + 2];
        const b33 = b[12 + 3];
        newDst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
        newDst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
        newDst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
        newDst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
        newDst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
        newDst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
        newDst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
        newDst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
        newDst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
        newDst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
        newDst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
        newDst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
        newDst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
        newDst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
        newDst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
        newDst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
        return newDst;
    }
    /**
     * Multiplies two 4-by-4 matrices with a on the left and b on the right (same as multiply)
     * @param a - The matrix on the left.
     * @param b - The matrix on the right.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix product of a and b.
     */
    const mul = multiply;
    /**
     * Sets the translation component of a 4-by-4 matrix to the given
     * vector.
     * @param a - The matrix.
     * @param v - The vector.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The matrix with translation set.
     */
    function setTranslation(a, v, dst) {
        const newDst = (dst ?? identity());
        if (a !== newDst) {
            newDst[0] = a[0];
            newDst[1] = a[1];
            newDst[2] = a[2];
            newDst[3] = a[3];
            newDst[4] = a[4];
            newDst[5] = a[5];
            newDst[6] = a[6];
            newDst[7] = a[7];
            newDst[8] = a[8];
            newDst[9] = a[9];
            newDst[10] = a[10];
            newDst[11] = a[11];
        }
        newDst[12] = v[0];
        newDst[13] = v[1];
        newDst[14] = v[2];
        newDst[15] = 1;
        return newDst;
    }
    ///**
    // * Returns the translation component of a 4-by-4 matrix as a vector with 3
    // * entries.
    // * @param m - The matrix.
    // * @param dst - vector to hold result. If not passed a new one is created.
    // * @returns The translation component of m.
    // */
    function getTranslation(m, dst) {
        const newDst = (dst ?? vec3.create());
        newDst[0] = m[12];
        newDst[1] = m[13];
        newDst[2] = m[14];
        return newDst;
    }
    /**
     * Returns an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param axis - The axis 0 = x, 1 = y, 2 = z;
     * @returns The axis component of m.
     */
    function getAxis(m, axis, dst) {
        const newDst = (dst ?? vec3.create());
        const off = axis * 4;
        newDst[0] = m[off + 0];
        newDst[1] = m[off + 1];
        newDst[2] = m[off + 2];
        return newDst;
    }
    /**
     * Sets an axis of a 4x4 matrix as a vector with 3 entries
     * @param m - The matrix.
     * @param v - the axis vector
     * @param axis - The axis  0 = x, 1 = y, 2 = z;
     * @param dst - The matrix to set. If not passed a new one is created.
     * @returns The matrix with axis set.
     */
    function setAxis(m, v, axis, dst) {
        const newDst = (dst === m) ? dst : copy(m, dst);
        const off = axis * 4;
        newDst[off + 0] = v[0];
        newDst[off + 1] = v[1];
        newDst[off + 2] = v[2];
        return newDst;
    }
    /**
     * Returns the "3d" scaling component of the matrix
     * @param m - The Matrix
     * @param dst - The vector to set. If not passed a new one is created.
     */
    function getScaling(m, dst) {
        const newDst = (dst ?? vec3.create());
        const xx = m[0];
        const xy = m[1];
        const xz = m[2];
        const yx = m[4];
        const yy = m[5];
        const yz = m[6];
        const zx = m[8];
        const zy = m[9];
        const zz = m[10];
        newDst[0] = Math.sqrt(xx * xx + xy * xy + xz * xz);
        newDst[1] = Math.sqrt(yx * yx + yy * yy + yz * yz);
        newDst[2] = Math.sqrt(zx * zx + zy * zy + zz * zz);
        return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 0 to 1 in the z dimension.
     *
     * Note: If you pass `Infinity` for zFar then it will produce a projection matrix
     * returns -Infinity for Z when transforming coordinates with Z <= 0 and +Infinity for Z
     * otherwise.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */
    function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
        const newDst = (dst ?? new Ctor(16));
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
        newDst[0] = f / aspect;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = f;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (Number.isFinite(zFar)) {
            const rangeInv = 1 / (zNear - zFar);
            newDst[10] = zFar * rangeInv;
            newDst[14] = zFar * zNear * rangeInv;
        }
        else {
            newDst[10] = -1;
            newDst[14] = -zNear;
        }
        return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the angular height
     * of the frustum, the aspect ratio, and the near and far clipping planes.  The
     * arguments define a frustum extending in the negative z direction.  The given
     * angle is the vertical angle of the frustum, and the horizontal angle is
     * determined to produce the given aspect ratio.  The arguments near and far are
     * the distances to the near and far clipping planes.  Note that near and far
     * are not z coordinates, but rather they are distances along the negative
     * z-axis.  The matrix generated sends the viewing frustum to the unit box.
     * We assume a unit box extending from -1 to 1 in the x and y dimensions and
     * from 1 (at -zNear) to 0 (at -zFar) in the z dimension.
     *
     * @param fieldOfViewYInRadians - The camera angle from top to bottom (in radians).
     * @param aspect - The aspect ratio width / height.
     * @param zNear - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param zFar - The depth (negative z coordinate)
     *     of the far clipping plane. (default = Infinity)
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The perspective matrix.
     */ function perspectiveReverseZ(fieldOfViewYInRadians, aspect, zNear, zFar = Infinity, dst) {
        const newDst = (dst ?? new Ctor(16));
        const f = 1 / Math.tan(fieldOfViewYInRadians * 0.5);
        newDst[0] = f / aspect;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = f;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (zFar === Infinity) {
            newDst[10] = 0;
            newDst[14] = zNear;
        }
        else {
            const rangeInv = 1 / (zFar - zNear);
            newDst[10] = zNear * rangeInv;
            newDst[14] = zFar * zNear * rangeInv;
        }
        return newDst;
    }
    /**
     * Computes a 4-by-4 orthogonal transformation matrix that transforms from
     * the given the left, right, bottom, and top dimensions to -1 +1 in x, and y
     * and 0 to +1 in z.
     * @param left - Left side of the near clipping plane viewport.
     * @param right - Right side of the near clipping plane viewport.
     * @param bottom - Bottom of the near clipping plane viewport.
     * @param top - Top of the near clipping plane viewport.
     * @param near - The depth (negative z coordinate)
     *     of the near clipping plane.
     * @param far - The depth (negative z coordinate)
     *     of the far clipping plane.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The orthographic projection matrix.
     */
    function ortho(left, right, bottom, top, near, far, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 2 / (right - left);
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 / (top - bottom);
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1 / (near - far);
        newDst[11] = 0;
        newDst[12] = (right + left) / (left - right);
        newDst[13] = (top + bottom) / (bottom - top);
        newDst[14] = near / (near - far);
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustum(left, right, bottom, top, near, far, dst) {
        const newDst = (dst ?? new Ctor(16));
        const dx = (right - left);
        const dy = (top - bottom);
        const dz = (near - far);
        newDst[0] = 2 * near / dx;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 * near / dy;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = (left + right) / dx;
        newDst[9] = (top + bottom) / dy;
        newDst[10] = far / dz;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = near * far / dz;
        newDst[15] = 0;
        return newDst;
    }
    /**
     * Computes a 4-by-4 reverse-z perspective transformation matrix given the left, right,
     * top, bottom, near and far clipping planes. The arguments define a frustum
     * extending in the negative z direction. The arguments near and far are the
     * distances to the near and far clipping planes. Note that near and far are not
     * z coordinates, but rather they are distances along the negative z-axis. The
     * matrix generated sends the viewing frustum to the unit box. We assume a unit
     * box extending from -1 to 1 in the x and y dimensions and from 1 (-near) to 0 (-far) in the z
     * dimension.
     * @param left - The x coordinate of the left plane of the box.
     * @param right - The x coordinate of the right plane of the box.
     * @param bottom - The y coordinate of the bottom plane of the box.
     * @param top - The y coordinate of the right plane of the box.
     * @param near - The negative z coordinate of the near plane of the box.
     * @param far - The negative z coordinate of the far plane of the box.
     * @param dst - Output matrix. If not passed a new one is created.
     * @returns The perspective projection matrix.
     */
    function frustumReverseZ(left, right, bottom, top, near, far = Infinity, dst) {
        const newDst = (dst ?? new Ctor(16));
        const dx = (right - left);
        const dy = (top - bottom);
        newDst[0] = 2 * near / dx;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 2 * near / dy;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = (left + right) / dx;
        newDst[9] = (top + bottom) / dy;
        newDst[11] = -1;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[15] = 0;
        if (far === Infinity) {
            newDst[10] = 0;
            newDst[14] = near;
        }
        else {
            const rangeInv = 1 / (far - near);
            newDst[10] = near * rangeInv;
            newDst[14] = far * near * rangeInv;
        }
        return newDst;
    }
    const xAxis = vec3.create();
    const yAxis = vec3.create();
    const zAxis = vec3.create();
    /**
     * Computes a 4-by-4 aim transformation.
     *
     * This is a matrix which positions an object aiming down positive Z.
     * toward the target.
     *
     * Note: this is **NOT** the inverse of lookAt as lookAt looks at negative Z.
     *
     * @param position - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function aim(position, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(target, position, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = xAxis[1];
        newDst[2] = xAxis[2];
        newDst[3] = 0;
        newDst[4] = yAxis[0];
        newDst[5] = yAxis[1];
        newDst[6] = yAxis[2];
        newDst[7] = 0;
        newDst[8] = zAxis[0];
        newDst[9] = zAxis[1];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = position[0];
        newDst[13] = position[1];
        newDst[14] = position[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 camera aim transformation.
     *
     * This is a matrix which positions an object aiming down negative Z.
     * toward the target.
     *
     * Note: this is the inverse of `lookAt`
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The aim matrix.
     */
    function cameraAim(eye, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = xAxis[1];
        newDst[2] = xAxis[2];
        newDst[3] = 0;
        newDst[4] = yAxis[0];
        newDst[5] = yAxis[1];
        newDst[6] = yAxis[2];
        newDst[7] = 0;
        newDst[8] = zAxis[0];
        newDst[9] = zAxis[1];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = eye[0];
        newDst[13] = eye[1];
        newDst[14] = eye[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Computes a 4-by-4 view transformation.
     *
     * This is a view matrix which transforms all other objects
     * to be in the space of the view defined by the parameters.
     *
     * @param eye - The position of the object.
     * @param target - The position meant to be aimed at.
     * @param up - A vector pointing up.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The look-at matrix.
     */
    function lookAt(eye, target, up, dst) {
        const newDst = (dst ?? new Ctor(16));
        vec3.normalize(vec3.subtract(eye, target, zAxis), zAxis);
        vec3.normalize(vec3.cross(up, zAxis, xAxis), xAxis);
        vec3.normalize(vec3.cross(zAxis, xAxis, yAxis), yAxis);
        newDst[0] = xAxis[0];
        newDst[1] = yAxis[0];
        newDst[2] = zAxis[0];
        newDst[3] = 0;
        newDst[4] = xAxis[1];
        newDst[5] = yAxis[1];
        newDst[6] = zAxis[1];
        newDst[7] = 0;
        newDst[8] = xAxis[2];
        newDst[9] = yAxis[2];
        newDst[10] = zAxis[2];
        newDst[11] = 0;
        newDst[12] = -(xAxis[0] * eye[0] + xAxis[1] * eye[1] + xAxis[2] * eye[2]);
        newDst[13] = -(yAxis[0] * eye[0] + yAxis[1] * eye[1] + yAxis[2] * eye[2]);
        newDst[14] = -(zAxis[0] * eye[0] + zAxis[1] * eye[1] + zAxis[2] * eye[2]);
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which translates by the given vector v.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translation matrix.
     */
    function translation(v, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = v[0];
        newDst[13] = v[1];
        newDst[14] = v[2];
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Translates the given 4-by-4 matrix by the given vector v.
     * @param m - The matrix.
     * @param v - The vector by
     *     which to translate.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The translated matrix.
     */
    function translate(m, v, dst) {
        const newDst = (dst ?? new Ctor(16));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m03 = m[3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const m30 = m[3 * 4 + 0];
        const m31 = m[3 * 4 + 1];
        const m32 = m[3 * 4 + 2];
        const m33 = m[3 * 4 + 3];
        if (m !== newDst) {
            newDst[0] = m00;
            newDst[1] = m01;
            newDst[2] = m02;
            newDst[3] = m03;
            newDst[4] = m10;
            newDst[5] = m11;
            newDst[6] = m12;
            newDst[7] = m13;
            newDst[8] = m20;
            newDst[9] = m21;
            newDst[10] = m22;
            newDst[11] = m23;
        }
        newDst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
        newDst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
        newDst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
        newDst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationX(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = 1;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = c;
        newDst[6] = s;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = -s;
        newDst[10] = c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the x-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateX(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m10 = m[4];
        const m11 = m[5];
        const m12 = m[6];
        const m13 = m[7];
        const m20 = m[8];
        const m21 = m[9];
        const m22 = m[10];
        const m23 = m[11];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[4] = c * m10 + s * m20;
        newDst[5] = c * m11 + s * m21;
        newDst[6] = c * m12 + s * m22;
        newDst[7] = c * m13 + s * m23;
        newDst[8] = c * m20 - s * m10;
        newDst[9] = c * m21 - s * m11;
        newDst[10] = c * m22 - s * m12;
        newDst[11] = c * m23 - s * m13;
        if (m !== newDst) {
            newDst[0] = m[0];
            newDst[1] = m[1];
            newDst[2] = m[2];
            newDst[3] = m[3];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationY(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = 0;
        newDst[2] = -s;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = 1;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = s;
        newDst[9] = 0;
        newDst[10] = c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the y-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateY(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m20 = m[2 * 4 + 0];
        const m21 = m[2 * 4 + 1];
        const m22 = m[2 * 4 + 2];
        const m23 = m[2 * 4 + 3];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 - s * m20;
        newDst[1] = c * m01 - s * m21;
        newDst[2] = c * m02 - s * m22;
        newDst[3] = c * m03 - s * m23;
        newDst[8] = c * m20 + s * m00;
        newDst[9] = c * m21 + s * m01;
        newDst[10] = c * m22 + s * m02;
        newDst[11] = c * m23 + s * m03;
        if (m !== newDst) {
            newDst[4] = m[4];
            newDst[5] = m[5];
            newDst[6] = m[6];
            newDst[7] = m[7];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotation matrix.
     */
    function rotationZ(angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c;
        newDst[1] = s;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = -s;
        newDst[5] = c;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = 1;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the z-axis by the given
     * angle.
     * @param m - The matrix.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function rotateZ(m, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        const m00 = m[0 * 4 + 0];
        const m01 = m[0 * 4 + 1];
        const m02 = m[0 * 4 + 2];
        const m03 = m[0 * 4 + 3];
        const m10 = m[1 * 4 + 0];
        const m11 = m[1 * 4 + 1];
        const m12 = m[1 * 4 + 2];
        const m13 = m[1 * 4 + 3];
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        newDst[0] = c * m00 + s * m10;
        newDst[1] = c * m01 + s * m11;
        newDst[2] = c * m02 + s * m12;
        newDst[3] = c * m03 + s * m13;
        newDst[4] = c * m10 - s * m00;
        newDst[5] = c * m11 - s * m01;
        newDst[6] = c * m12 - s * m02;
        newDst[7] = c * m13 - s * m03;
        if (m !== newDst) {
            newDst[8] = m[8];
            newDst[9] = m[9];
            newDst[10] = m[10];
            newDst[11] = m[11];
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    function axisRotation(axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        let x = axis[0];
        let y = axis[1];
        let z = axis[2];
        const n = Math.sqrt(x * x + y * y + z * z);
        x /= n;
        y /= n;
        z /= n;
        const xx = x * x;
        const yy = y * y;
        const zz = z * z;
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        const oneMinusCosine = 1 - c;
        newDst[0] = xx + (1 - xx) * c;
        newDst[1] = x * y * oneMinusCosine + z * s;
        newDst[2] = x * z * oneMinusCosine - y * s;
        newDst[3] = 0;
        newDst[4] = x * y * oneMinusCosine - z * s;
        newDst[5] = yy + (1 - yy) * c;
        newDst[6] = y * z * oneMinusCosine + x * s;
        newDst[7] = 0;
        newDst[8] = x * z * oneMinusCosine + y * s;
        newDst[9] = y * z * oneMinusCosine - x * s;
        newDst[10] = zz + (1 - zz) * c;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which rotates around the given axis by the given
     * angle. (same as axisRotation)
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns A matrix which rotates angle radians
     *     around the axis.
     */
    const rotation = axisRotation;
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle.
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    function axisRotate(m, axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(16));
        let x = axis[0];
        let y = axis[1];
        let z = axis[2];
        const n = Math.sqrt(x * x + y * y + z * z);
        x /= n;
        y /= n;
        z /= n;
        const xx = x * x;
        const yy = y * y;
        const zz = z * z;
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        const oneMinusCosine = 1 - c;
        const r00 = xx + (1 - xx) * c;
        const r01 = x * y * oneMinusCosine + z * s;
        const r02 = x * z * oneMinusCosine - y * s;
        const r10 = x * y * oneMinusCosine - z * s;
        const r11 = yy + (1 - yy) * c;
        const r12 = y * z * oneMinusCosine + x * s;
        const r20 = x * z * oneMinusCosine + y * s;
        const r21 = y * z * oneMinusCosine - x * s;
        const r22 = zz + (1 - zz) * c;
        const m00 = m[0];
        const m01 = m[1];
        const m02 = m[2];
        const m03 = m[3];
        const m10 = m[4];
        const m11 = m[5];
        const m12 = m[6];
        const m13 = m[7];
        const m20 = m[8];
        const m21 = m[9];
        const m22 = m[10];
        const m23 = m[11];
        newDst[0] = r00 * m00 + r01 * m10 + r02 * m20;
        newDst[1] = r00 * m01 + r01 * m11 + r02 * m21;
        newDst[2] = r00 * m02 + r01 * m12 + r02 * m22;
        newDst[3] = r00 * m03 + r01 * m13 + r02 * m23;
        newDst[4] = r10 * m00 + r11 * m10 + r12 * m20;
        newDst[5] = r10 * m01 + r11 * m11 + r12 * m21;
        newDst[6] = r10 * m02 + r11 * m12 + r12 * m22;
        newDst[7] = r10 * m03 + r11 * m13 + r12 * m23;
        newDst[8] = r20 * m00 + r21 * m10 + r22 * m20;
        newDst[9] = r20 * m01 + r21 * m11 + r22 * m21;
        newDst[10] = r20 * m02 + r21 * m12 + r22 * m22;
        newDst[11] = r20 * m03 + r21 * m13 + r22 * m23;
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Rotates the given 4-by-4 matrix around the given axis by the
     * given angle. (same as rotate)
     * @param m - The matrix.
     * @param axis - The axis
     *     about which to rotate.
     * @param angleInRadians - The angle by which to rotate (in radians).
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The rotated matrix.
     */
    const rotate = axisRotate;
    /**
     * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
     * the corresponding entry in the given vector; assumes the vector has three
     * entries.
     * @param v - A vector of
     *     three entries specifying the factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function scaling(v, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = v[0];
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = v[1];
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = v[2];
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by an amount
     * given by the corresponding entry in the given vector; assumes the vector has
     * three entries.
     * @param m - The matrix to be modified.
     * @param v - A vector of three entries specifying the
     *     factor by which to scale in each dimension.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function scale(m, v, dst) {
        const newDst = (dst ?? new Ctor(16));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        newDst[0] = v0 * m[0 * 4 + 0];
        newDst[1] = v0 * m[0 * 4 + 1];
        newDst[2] = v0 * m[0 * 4 + 2];
        newDst[3] = v0 * m[0 * 4 + 3];
        newDst[4] = v1 * m[1 * 4 + 0];
        newDst[5] = v1 * m[1 * 4 + 1];
        newDst[6] = v1 * m[1 * 4 + 2];
        newDst[7] = v1 * m[1 * 4 + 3];
        newDst[8] = v2 * m[2 * 4 + 0];
        newDst[9] = v2 * m[2 * 4 + 1];
        newDst[10] = v2 * m[2 * 4 + 2];
        newDst[11] = v2 * m[2 * 4 + 3];
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    /**
     * Creates a 4-by-4 matrix which scales a uniform amount in each dimension.
     * @param s - the amount to scale
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaling matrix.
     */
    function uniformScaling(s, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = s;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        newDst[4] = 0;
        newDst[5] = s;
        newDst[6] = 0;
        newDst[7] = 0;
        newDst[8] = 0;
        newDst[9] = 0;
        newDst[10] = s;
        newDst[11] = 0;
        newDst[12] = 0;
        newDst[13] = 0;
        newDst[14] = 0;
        newDst[15] = 1;
        return newDst;
    }
    /**
     * Scales the given 4-by-4 matrix in each dimension by a uniform scale.
     * @param m - The matrix to be modified.
     * @param s - The amount to scale.
     * @param dst - matrix to hold result. If not passed a new one is created.
     * @returns The scaled matrix.
     */
    function uniformScale(m, s, dst) {
        const newDst = (dst ?? new Ctor(16));
        newDst[0] = s * m[0 * 4 + 0];
        newDst[1] = s * m[0 * 4 + 1];
        newDst[2] = s * m[0 * 4 + 2];
        newDst[3] = s * m[0 * 4 + 3];
        newDst[4] = s * m[1 * 4 + 0];
        newDst[5] = s * m[1 * 4 + 1];
        newDst[6] = s * m[1 * 4 + 2];
        newDst[7] = s * m[1 * 4 + 3];
        newDst[8] = s * m[2 * 4 + 0];
        newDst[9] = s * m[2 * 4 + 1];
        newDst[10] = s * m[2 * 4 + 2];
        newDst[11] = s * m[2 * 4 + 3];
        if (m !== newDst) {
            newDst[12] = m[12];
            newDst[13] = m[13];
            newDst[14] = m[14];
            newDst[15] = m[15];
        }
        return newDst;
    }
    return {
        add,
        aim,
        axisRotate,
        axisRotation,
        cameraAim,
        clone,
        copy,
        create,
        determinant,
        equals,
        equalsApproximately,
        fromMat3,
        fromQuat,
        frustum,
        frustumReverseZ,
        getAxis,
        getScaling,
        getTranslation,
        identity,
        inverse,
        invert,
        lookAt,
        mul,
        mulScalar,
        multiply,
        multiplyScalar,
        negate,
        ortho,
        perspective,
        perspectiveReverseZ,
        rotate,
        rotateX,
        rotateY,
        rotateZ,
        rotation,
        rotationX,
        rotationY,
        rotationZ,
        scale,
        scaling,
        set,
        setAxis,
        setTranslation,
        translate,
        translation,
        transpose,
        uniformScale,
        uniformScaling,
    };
}
const cache$2 = new Map();
function getAPI$2(Ctor) {
    let api = cache$2.get(Ctor);
    if (!api) {
        api = getAPIImpl$2(Ctor);
        cache$2.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Qud
 * */
function getAPIImpl$1(Ctor) {
    const vec3 = getAPI$4(Ctor);
    /**
     * Creates a quat4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
        const newDst = new Ctor(4);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                    if (w !== undefined) {
                        newDst[3] = w;
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a Quat; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Quat
     * Also see {@link quat.create} and {@link quat.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        newDst[3] = w;
        return newDst;
    }
    /**
     * Sets a quaternion from the given angle and  axis,
     * then returns it.
     *
     * @param axis - the axis to rotate around
     * @param angleInRadians - the angle
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The quaternion that represents the given axis and angle
     **/
    function fromAxisAngle(axis, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const s = Math.sin(halfAngle);
        newDst[0] = s * axis[0];
        newDst[1] = s * axis[1];
        newDst[2] = s * axis[2];
        newDst[3] = Math.cos(halfAngle);
        return newDst;
    }
    /**
     * Gets the rotation axis and angle
     * @param q - quaternion to compute from
     * @param dst - Vec3 to hold result. If not passed in a new one is created.
     * @return angle and axis
     */
    function toAxisAngle(q, dst) {
        const newDst = (dst ?? vec3.create(3));
        const angle = Math.acos(q[3]) * 2;
        const s = Math.sin(angle * 0.5);
        if (s > EPSILON) {
            newDst[0] = q[0] / s;
            newDst[1] = q[1] / s;
            newDst[2] = q[2] / s;
        }
        else {
            newDst[0] = 1;
            newDst[1] = 0;
            newDst[2] = 0;
        }
        return { angle, axis: newDst };
    }
    /**
     * Returns the angle in degrees between two rotations a and b.
     * @param a - quaternion a
     * @param b - quaternion b
     * @return angle in radians between the two quaternions
     */
    function angle(a, b) {
        const d = dot(a, b);
        return Math.acos(2 * d * d - 1);
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const aw = a[3];
        const bx = b[0];
        const by = b[1];
        const bz = b[2];
        const bw = b[3];
        newDst[0] = ax * bw + aw * bx + ay * bz - az * by;
        newDst[1] = ay * bw + aw * by + az * bx - ax * bz;
        newDst[2] = az * bw + aw * bz + ax * by - ay * bx;
        newDst[3] = aw * bw - ax * bx - ay * by - az * bz;
        return newDst;
    }
    /**
     * Multiplies two quaternions
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    const mul = multiply;
    /**
     * Rotates the given quaternion around the X axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateX(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const bx = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw + qw * bx;
        newDst[1] = qy * bw + qz * bx;
        newDst[2] = qz * bw - qy * bx;
        newDst[3] = qw * bw - qx * bx;
        return newDst;
    }
    /**
     * Rotates the given quaternion around the Y axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateY(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const by = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw - qz * by;
        newDst[1] = qy * bw + qw * by;
        newDst[2] = qz * bw + qx * by;
        newDst[3] = qw * bw - qy * by;
        return newDst;
    }
    /**
     * Rotates the given quaternion around the Z axis by the given angle.
     * @param q - quaternion to rotate
     * @param angleInRadians - The angle by which to rotate
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function rotateZ(q, angleInRadians, dst) {
        const newDst = (dst ?? new Ctor(4));
        const halfAngle = angleInRadians * 0.5;
        const qx = q[0];
        const qy = q[1];
        const qz = q[2];
        const qw = q[3];
        const bz = Math.sin(halfAngle);
        const bw = Math.cos(halfAngle);
        newDst[0] = qx * bw + qy * bz;
        newDst[1] = qy * bw - qx * bz;
        newDst[2] = qz * bw + qw * bz;
        newDst[3] = qw * bw - qz * bz;
        return newDst;
    }
    /**
     * Spherically linear interpolate between two quaternions
     *
     * @param a - starting value
     * @param b - ending value
     * @param t - value where 0 = a and 1 = b
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the result of a * b
     */
    function slerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        const ax = a[0];
        const ay = a[1];
        const az = a[2];
        const aw = a[3];
        let bx = b[0];
        let by = b[1];
        let bz = b[2];
        let bw = b[3];
        let cosOmega = ax * bx + ay * by + az * bz + aw * bw;
        if (cosOmega < 0) {
            cosOmega = -cosOmega;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        let scale0;
        let scale1;
        if (1.0 - cosOmega > EPSILON) {
            const omega = Math.acos(cosOmega);
            const sinOmega = Math.sin(omega);
            scale0 = Math.sin((1 - t) * omega) / sinOmega;
            scale1 = Math.sin(t * omega) / sinOmega;
        }
        else {
            scale0 = 1.0 - t;
            scale1 = t;
        }
        newDst[0] = scale0 * ax + scale1 * bx;
        newDst[1] = scale0 * ay + scale1 * by;
        newDst[2] = scale0 * az + scale1 * bz;
        newDst[3] = scale0 * aw + scale1 * bw;
        return newDst;
    }
    /**
     * Compute the inverse of a quaternion
     *
     * @param q - quaternion to compute the inverse of
     * @returns A quaternion that is the result of a * b
     */
    function inverse(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        const a0 = q[0];
        const a1 = q[1];
        const a2 = q[2];
        const a3 = q[3];
        const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        const invDot = dot ? 1 / dot : 0;
        newDst[0] = -a0 * invDot;
        newDst[1] = -a1 * invDot;
        newDst[2] = -a2 * invDot;
        newDst[3] = a3 * invDot;
        return newDst;
    }
    /**
     * Compute the conjugate of a quaternion
     * For quaternions with a magnitude of 1 (a unit quaternion)
     * this returns the same as the inverse but is faster to calculate.
     *
     * @param q - quaternion to compute the conjugate of.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The conjugate of q
     */
    function conjugate(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = -q[0];
        newDst[1] = -q[1];
        newDst[2] = -q[2];
        newDst[3] = q[3];
        return newDst;
    }
    /**
     * Creates a quaternion from the given rotation matrix.
     *
     * The created quaternion is not normalized.
     *
     * @param m - rotation matrix
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function fromMat(m, dst) {
        const newDst = (dst ?? new Ctor(4));
        /*
        0 1 2
        3 4 5
        6 7 8
      
        0 1 2
        4 5 6
        8 9 10
         */
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        const trace = m[0] + m[5] + m[10];
        if (trace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            const root = Math.sqrt(trace + 1); // 2w
            newDst[3] = 0.5 * root;
            const invRoot = 0.5 / root; // 1/(4w)
            newDst[0] = (m[6] - m[9]) * invRoot;
            newDst[1] = (m[8] - m[2]) * invRoot;
            newDst[2] = (m[1] - m[4]) * invRoot;
        }
        else {
            // |w| <= 1/2
            let i = 0;
            if (m[5] > m[0]) {
                i = 1;
            }
            if (m[10] > m[i * 4 + i]) {
                i = 2;
            }
            const j = (i + 1) % 3;
            const k = (i + 2) % 3;
            const root = Math.sqrt(m[i * 4 + i] - m[j * 4 + j] - m[k * 4 + k] + 1.0);
            newDst[i] = 0.5 * root;
            const invRoot = 0.5 / root;
            newDst[3] = (m[j * 4 + k] - m[k * 4 + j]) * invRoot;
            newDst[j] = (m[j * 4 + i] + m[i * 4 + j]) * invRoot;
            newDst[k] = (m[k * 4 + i] + m[i * 4 + k]) * invRoot;
        }
        return newDst;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
     *
     * @param xAngleInRadians - angle to rotate around X axis in radians.
     * @param yAngleInRadians - angle to rotate around Y axis in radians.
     * @param zAngleInRadians - angle to rotate around Z axis in radians.
     * @param order - order to apply euler angles
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion representing the same rotation as the euler angles applied in the given order
     */
    function fromEuler(xAngleInRadians, yAngleInRadians, zAngleInRadians, order, dst) {
        const newDst = (dst ?? new Ctor(4));
        const xHalfAngle = xAngleInRadians * 0.5;
        const yHalfAngle = yAngleInRadians * 0.5;
        const zHalfAngle = zAngleInRadians * 0.5;
        const sx = Math.sin(xHalfAngle);
        const cx = Math.cos(xHalfAngle);
        const sy = Math.sin(yHalfAngle);
        const cy = Math.cos(yHalfAngle);
        const sz = Math.sin(zHalfAngle);
        const cz = Math.cos(zHalfAngle);
        switch (order) {
            case 'xyz':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'xzy':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            case 'yxz':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz - sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            case 'yzx':
                newDst[0] = sx * cy * cz + cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'zxy':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz + sx * sy * cz;
                newDst[3] = cx * cy * cz - sx * sy * sz;
                break;
            case 'zyx':
                newDst[0] = sx * cy * cz - cx * sy * sz;
                newDst[1] = cx * sy * cz + sx * cy * sz;
                newDst[2] = cx * cy * sz - sx * sy * cz;
                newDst[3] = cx * cy * cz + sx * sy * sz;
                break;
            default:
                throw new Error(`Unknown rotation order: ${order}`);
        }
        return newDst;
    }
    /**
     * Copies a quaternion. (same as {@link quat.clone})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is a copy of q
     */
    function copy(q, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = q[0];
        newDst[1] = q[1];
        newDst[2] = q[2];
        newDst[3] = q[3];
        return newDst;
    }
    /**
     * Clones a quaternion. (same as {@link quat.copy})
     * Also see {@link quat.create} and {@link quat.set}
     * @param q - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A copy of q.
     */
    const clone = copy;
    /**
     * Adds two quaternions; assumes a and b have the same dimension.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[3] = a[3] + b[3];
        return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        newDst[3] = a[3] - b[3];
        return newDst;
    }
    /**
     * Subtracts two quaternions.
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns A quaternion that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Multiplies a quaternion by a scalar.
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        newDst[3] = v[3] * k;
        return newDst;
    }
    /**
     * Multiplies a quaternion by a scalar. (same as mulScalar)
     * @param v - The quaternion.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The scaled quaternion.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        newDst[3] = v[3] / k;
        return newDst;
    }
    /**
     * Computes the dot product of two quaternions
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3]);
    }
    /**
     * Performs linear interpolation on two quaternions.
     * Given quaternions a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @param t - Interpolation coefficient.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        newDst[3] = a[3] + t * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Computes the length of quaternion
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of quaternion (same as length)
     * @param v - quaternion.
     * @returns length of quaternion.
     */
    const len = length;
    /**
     * Computes the square of the length of quaternion
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of quaternion (same as lengthSq)
     * @param v - quaternion.
     * @returns square of the length of quaternion.
     */
    const lenSq = lengthSq;
    /**
     * Divides a quaternion by its Euclidean length and returns the quotient.
     * @param v - The quaternion.
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns The normalized quaternion.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
            newDst[3] = v3 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 1;
        }
        return newDst;
    }
    /**
     * Check if 2 quaternions are approximately equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 quaternions are exactly equal
     * @param a - Operand quaternion.
     * @param b - Operand quaternion.
     * @returns true if quaternions are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Creates an identity quaternion
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns an identity quaternion
     */
    function identity(dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 1;
        return newDst;
    }
    const tempVec3 = vec3.create();
    const xUnitVec3 = vec3.create();
    const yUnitVec3 = vec3.create();
    /**
     * Computes a quaternion to represent the shortest rotation from one vector to another.
     *
     * @param aUnit - the start vector
     * @param bUnit - the end vector
     * @param dst - quaternion to hold result. If not passed in a new one is created.
     * @returns the result
     */
    function rotationTo(aUnit, bUnit, dst) {
        const newDst = (dst ?? new Ctor(4));
        const dot = vec3.dot(aUnit, bUnit);
        if (dot < -0.999999) {
            vec3.cross(xUnitVec3, aUnit, tempVec3);
            if (vec3.len(tempVec3) < 0.000001) {
                vec3.cross(yUnitVec3, aUnit, tempVec3);
            }
            vec3.normalize(tempVec3, tempVec3);
            fromAxisAngle(tempVec3, Math.PI, newDst);
            return newDst;
        }
        else if (dot > 0.999999) {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 1;
            return newDst;
        }
        else {
            vec3.cross(aUnit, bUnit, tempVec3);
            newDst[0] = tempVec3[0];
            newDst[1] = tempVec3[1];
            newDst[2] = tempVec3[2];
            newDst[3] = 1 + dot;
            return normalize(newDst, newDst);
        }
    }
    const tempQuat1 = new Ctor(4);
    const tempQuat2 = new Ctor(4);
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param a - the first quaternion
     * @param b - the second quaternion
     * @param c - the third quaternion
     * @param d - the fourth quaternion
     * @param t - Interpolation coefficient 0 to 1
     * @returns result
     */
    function sqlerp(a, b, c, d, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        slerp(a, d, t, tempQuat1);
        slerp(b, c, t, tempQuat2);
        slerp(tempQuat1, tempQuat2, 2 * t * (1 - t), newDst);
        return newDst;
    }
    return {
        create,
        fromValues,
        set,
        fromAxisAngle,
        toAxisAngle,
        angle,
        multiply,
        mul,
        rotateX,
        rotateY,
        rotateZ,
        slerp,
        inverse,
        conjugate,
        fromMat,
        fromEuler,
        copy,
        clone,
        add,
        subtract,
        sub,
        mulScalar,
        scale,
        divScalar,
        dot,
        lerp,
        length,
        len,
        lengthSq,
        lenSq,
        normalize,
        equalsApproximately,
        equals,
        identity,
        rotationTo,
        sqlerp,
    };
}
const cache$1 = new Map();
/**
 *
 * Quat4 math functions.
 *
 * Almost all functions take an optional `newDst` argument. If it is not passed in the
 * functions will create a new `Quat4`. In other words you can do this
 *
 *     const v = quat4.cross(v1, v2);  // Creates a new Quat4 with the cross product of v1 x v2.
 *
 * or
 *
 *     const v = quat4.create();
 *     quat4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always safe to pass any vector as the destination. So for example
 *
 *     quat4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 */
function getAPI$1(Ctor) {
    let api = cache$1.get(Ctor);
    if (!api) {
        api = getAPIImpl$1(Ctor);
        cache$1.set(Ctor, api);
    }
    return api;
}

/*
 * Copyright 2022 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
/**
 * Generates am typed API for Vec4
 * */
function getAPIImpl(Ctor) {
    /**
     * Creates a vec4; may be called with x, y, z to set initial values.
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param w - Initial w value.
     * @returns the created vector
     */
    function create(x, y, z, w) {
        const newDst = new Ctor(4);
        if (x !== undefined) {
            newDst[0] = x;
            if (y !== undefined) {
                newDst[1] = y;
                if (z !== undefined) {
                    newDst[2] = z;
                    if (w !== undefined) {
                        newDst[3] = w;
                    }
                }
            }
        }
        return newDst;
    }
    /**
     * Creates a vec4; may be called with x, y, z to set initial values. (same as create)
     * @param x - Initial x value.
     * @param y - Initial y value.
     * @param z - Initial z value.
     * @param z - Initial w value.
     * @returns the created vector
     */
    const fromValues = create;
    /**
     * Sets the values of a Vec4
     * Also see {@link vec4.create} and {@link vec4.copy}
     *
     * @param x first value
     * @param y second value
     * @param z third value
     * @param w fourth value
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector with its elements set.
     */
    function set(x, y, z, w, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = x;
        newDst[1] = y;
        newDst[2] = z;
        newDst[3] = w;
        return newDst;
    }
    /**
     * Applies Math.ceil to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the ceil of each element of v.
     */
    function ceil(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.ceil(v[0]);
        newDst[1] = Math.ceil(v[1]);
        newDst[2] = Math.ceil(v[2]);
        newDst[3] = Math.ceil(v[3]);
        return newDst;
    }
    /**
     * Applies Math.floor to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the floor of each element of v.
     */
    function floor(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.floor(v[0]);
        newDst[1] = Math.floor(v[1]);
        newDst[2] = Math.floor(v[2]);
        newDst[3] = Math.floor(v[3]);
        return newDst;
    }
    /**
     * Applies Math.round to each element of vector
     * @param v - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the round of each element of v.
     */
    function round(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.round(v[0]);
        newDst[1] = Math.round(v[1]);
        newDst[2] = Math.round(v[2]);
        newDst[3] = Math.round(v[3]);
        return newDst;
    }
    /**
     * Clamp each element of vector between min and max
     * @param v - Operand vector.
     * @param max - Min value, default 0
     * @param min - Max value, default 1
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that the clamped value of each element of v.
     */
    function clamp(v, min = 0, max = 1, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.min(max, Math.max(min, v[0]));
        newDst[1] = Math.min(max, Math.max(min, v[1]));
        newDst[2] = Math.min(max, Math.max(min, v[2]));
        newDst[3] = Math.min(max, Math.max(min, v[3]));
        return newDst;
    }
    /**
     * Adds two vectors; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a and b.
     */
    function add(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0];
        newDst[1] = a[1] + b[1];
        newDst[2] = a[2] + b[2];
        newDst[3] = a[3] + b[3];
        return newDst;
    }
    /**
     * Adds two vectors, scaling the 2nd; assumes a and b have the same dimension.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param scale - Amount to scale b
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the sum of a + b * scale.
     */
    function addScaled(a, b, scale, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + b[0] * scale;
        newDst[1] = a[1] + b[1] * scale;
        newDst[2] = a[2] + b[2] * scale;
        newDst[3] = a[3] + b[3] * scale;
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    function subtract(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] - b[0];
        newDst[1] = a[1] - b[1];
        newDst[2] = a[2] - b[2];
        newDst[3] = a[3] - b[3];
        return newDst;
    }
    /**
     * Subtracts two vectors.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A vector that is the difference of a and b.
     */
    const sub = subtract;
    /**
     * Check if 2 vectors are approximately equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are approximately equal
     */
    function equalsApproximately(a, b) {
        return Math.abs(a[0] - b[0]) < EPSILON &&
            Math.abs(a[1] - b[1]) < EPSILON &&
            Math.abs(a[2] - b[2]) < EPSILON &&
            Math.abs(a[3] - b[3]) < EPSILON;
    }
    /**
     * Check if 2 vectors are exactly equal
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns true if vectors are exactly equal
     */
    function equals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficient.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The linear interpolated result.
     */
    function lerp(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t * (b[0] - a[0]);
        newDst[1] = a[1] + t * (b[1] - a[1]);
        newDst[2] = a[2] + t * (b[2] - a[2]);
        newDst[3] = a[3] + t * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Performs linear interpolation on two vectors.
     * Given vectors a and b and interpolation coefficient vector t, returns
     * a + t * (b - a).
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param t - Interpolation coefficients vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns the linear interpolated result.
     */
    function lerpV(a, b, t, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] + t[0] * (b[0] - a[0]);
        newDst[1] = a[1] + t[1] * (b[1] - a[1]);
        newDst[2] = a[2] + t[2] * (b[2] - a[2]);
        newDst[3] = a[3] + t[3] * (b[3] - a[3]);
        return newDst;
    }
    /**
     * Return max values of two vectors.
     * Given vectors a and b returns
     * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The max components vector.
     */
    function max(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.max(a[0], b[0]);
        newDst[1] = Math.max(a[1], b[1]);
        newDst[2] = Math.max(a[2], b[2]);
        newDst[3] = Math.max(a[3], b[3]);
        return newDst;
    }
    /**
     * Return min values of two vectors.
     * Given vectors a and b returns
     * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The min components vector.
     */
    function min(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = Math.min(a[0], b[0]);
        newDst[1] = Math.min(a[1], b[1]);
        newDst[2] = Math.min(a[2], b[2]);
        newDst[3] = Math.min(a[3], b[3]);
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function mulScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] * k;
        newDst[1] = v[1] * k;
        newDst[2] = v[2] * k;
        newDst[3] = v[3] * k;
        return newDst;
    }
    /**
     * Multiplies a vector by a scalar. (same as mulScalar)
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    const scale = mulScalar;
    /**
     * Divides a vector by a scalar.
     * @param v - The vector.
     * @param k - The scalar.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The scaled vector.
     */
    function divScalar(v, k, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0] / k;
        newDst[1] = v[1] / k;
        newDst[2] = v[2] / k;
        newDst[3] = v[3] / k;
        return newDst;
    }
    /**
     * Inverse a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    function inverse(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 1 / v[0];
        newDst[1] = 1 / v[1];
        newDst[2] = 1 / v[2];
        newDst[3] = 1 / v[3];
        return newDst;
    }
    /**
     * Invert a vector. (same as inverse)
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The inverted vector.
     */
    const invert = inverse;
    /**
     * Computes the dot product of two vectors
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @returns dot product
     */
    function dot(a, b) {
        return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]) + (a[3] * b[3]);
    }
    /**
     * Computes the length of vector
     * @param v - vector.
     * @returns length of vector.
     */
    function length(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
    }
    /**
     * Computes the length of vector (same as length)
     * @param v - vector.
     * @returns length of vector.
     */
    const len = length;
    /**
     * Computes the square of the length of vector
     * @param v - vector.
     * @returns square of the length of vector.
     */
    function lengthSq(v) {
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        return v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3;
    }
    /**
     * Computes the square of the length of vector (same as lengthSq)
     * @param v - vector.
     * @returns square of the length of vector.
     */
    const lenSq = lengthSq;
    /**
     * Computes the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    function distance(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        const dw = a[3] - b[3];
        return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
    }
    /**
     * Computes the distance between 2 points (same as distance)
     * @param a - vector.
     * @param b - vector.
     * @returns distance between a and b
     */
    const dist = distance;
    /**
     * Computes the square of the distance between 2 points
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    function distanceSq(a, b) {
        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];
        const dw = a[3] - b[3];
        return dx * dx + dy * dy + dz * dz + dw * dw;
    }
    /**
     * Computes the square of the distance between 2 points (same as distanceSq)
     * @param a - vector.
     * @param b - vector.
     * @returns square of the distance between a and b
     */
    const distSq = distanceSq;
    /**
     * Divides a vector by its Euclidean length and returns the quotient.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The normalized vector.
     */
    function normalize(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        const v0 = v[0];
        const v1 = v[1];
        const v2 = v[2];
        const v3 = v[3];
        const len = Math.sqrt(v0 * v0 + v1 * v1 + v2 * v2 + v3 * v3);
        if (len > 0.00001) {
            newDst[0] = v0 / len;
            newDst[1] = v1 / len;
            newDst[2] = v2 / len;
            newDst[3] = v3 / len;
        }
        else {
            newDst[0] = 0;
            newDst[1] = 0;
            newDst[2] = 0;
            newDst[3] = 0;
        }
        return newDst;
    }
    /**
     * Negates a vector.
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns -v.
     */
    function negate(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = -v[0];
        newDst[1] = -v[1];
        newDst[2] = -v[2];
        newDst[3] = -v[3];
        return newDst;
    }
    /**
     * Copies a vector. (same as {@link vec4.clone})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    function copy(v, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = v[0];
        newDst[1] = v[1];
        newDst[2] = v[2];
        newDst[3] = v[3];
        return newDst;
    }
    /**
     * Clones a vector. (same as {@link vec4.copy})
     * Also see {@link vec4.create} and {@link vec4.set}
     * @param v - The vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns A copy of v.
     */
    const clone = copy;
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    function multiply(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] * b[0];
        newDst[1] = a[1] * b[1];
        newDst[2] = a[2] * b[2];
        newDst[3] = a[3] * b[3];
        return newDst;
    }
    /**
     * Multiplies a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as mul)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of products of entries of a and b.
     */
    const mul = multiply;
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length.
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    function divide(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = a[0] / b[0];
        newDst[1] = a[1] / b[1];
        newDst[2] = a[2] / b[2];
        newDst[3] = a[3] / b[3];
        return newDst;
    }
    /**
     * Divides a vector by another vector (component-wise); assumes a and
     * b have the same length. (same as divide)
     * @param a - Operand vector.
     * @param b - Operand vector.
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The vector of quotients of entries of a and b.
     */
    const div = divide;
    /**
     * Zero's a vector
     * @param dst - vector to hold result. If not passed in a new one is created.
     * @returns The zeroed vector.
     */
    function zero(dst) {
        const newDst = (dst ?? new Ctor(4));
        newDst[0] = 0;
        newDst[1] = 0;
        newDst[2] = 0;
        newDst[3] = 0;
        return newDst;
    }
    /**
     * transform vec4 by 4x4 matrix
     * @param v - the vector
     * @param m - The matrix.
     * @param dst - optional vec4 to store result. If not passed a new one is created.
     * @returns the transformed vector
     */
    function transformMat4(v, m, dst) {
        const newDst = (dst ?? new Ctor(4));
        const x = v[0];
        const y = v[1];
        const z = v[2];
        const w = v[3];
        newDst[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        newDst[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        newDst[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        newDst[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return newDst;
    }
    /**
     * Treat a 4D vector as a direction and set it's length
     *
     * @param a The vec4 to lengthen
     * @param len The length of the resulting vector
     * @returns The lengthened vector
     */
    function setLength(a, len, dst) {
        const newDst = (dst ?? new Ctor(4));
        normalize(a, newDst);
        return mulScalar(newDst, len, newDst);
    }
    /**
     * Ensure a vector is not longer than a max length
     *
     * @param a The vec4 to limit
     * @param maxLen The longest length of the resulting vector
     * @returns The vector, shortened to maxLen if it's too long
     */
    function truncate(a, maxLen, dst) {
        const newDst = (dst ?? new Ctor(4));
        if (length(a) > maxLen) {
            return setLength(a, maxLen, newDst);
        }
        return copy(a, newDst);
    }
    /**
     * Return the vector exactly between 2 endpoint vectors
     *
     * @param a Endpoint 1
     * @param b Endpoint 2
     * @returns The vector exactly residing between endpoints 1 and 2
     */
    function midpoint(a, b, dst) {
        const newDst = (dst ?? new Ctor(4));
        return lerp(a, b, 0.5, newDst);
    }
    return {
        create,
        fromValues,
        set,
        ceil,
        floor,
        round,
        clamp,
        add,
        addScaled,
        subtract,
        sub,
        equalsApproximately,
        equals,
        lerp,
        lerpV,
        max,
        min,
        mulScalar,
        scale,
        divScalar,
        inverse,
        invert,
        dot,
        length,
        len,
        lengthSq,
        lenSq,
        distance,
        dist,
        distanceSq,
        distSq,
        normalize,
        negate,
        copy,
        clone,
        multiply,
        mul,
        divide,
        div,
        zero,
        transformMat4,
        setLength,
        truncate,
        midpoint,
    };
}
const cache = new Map();
/**
 *
 * Vec4 math functions.
 *
 * Almost all functions take an optional `newDst` argument. If it is not passed in the
 * functions will create a new `Vec4`. In other words you can do this
 *
 *     const v = vec4.cross(v1, v2);  // Creates a new Vec4 with the cross product of v1 x v2.
 *
 * or
 *
 *     const v = vec4.create();
 *     vec4.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always safe to pass any vector as the destination. So for example
 *
 *     vec4.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 */
function getAPI(Ctor) {
    let api = cache.get(Ctor);
    if (!api) {
        api = getAPIImpl(Ctor);
        cache.set(Ctor, api);
    }
    return api;
}

/**
 * Some docs
 * @namespace wgpu-matrix
 */
/**
 * Generate wgpu-matrix API for type
 */
function wgpuMatrixAPI(Mat3Ctor, Mat4Ctor, QuatCtor, Vec2Ctor, Vec3Ctor, Vec4Ctor) {
    return {
        /** @namespace mat3 */
        mat3: getAPI$3(Mat3Ctor),
        /** @namespace mat4 */
        mat4: getAPI$2(Mat4Ctor),
        /** @namespace quat */
        quat: getAPI$1(QuatCtor),
        /** @namespace vec2 */
        vec2: getAPI$5(Vec2Ctor),
        /** @namespace vec3 */
        vec3: getAPI$4(Vec3Ctor),
        /** @namespace vec4 */
        vec4: getAPI(Vec4Ctor),
    };
}
const { 
/**
 * 3x3 Matrix functions that default to returning `Float32Array`
 * @namespace
 */
mat3, 
/**
 * 4x4 Matrix functions that default to returning `Float32Array`
 * @namespace
 */
mat4, 
/**
 * Quaternion functions that default to returning `Float32Array`
 * @namespace
 */
quat, 
/**
 * Vec2 functions that default to returning `Float32Array`
 * @namespace
 */
vec2, 
/**
 * Vec3 functions that default to returning `Float32Array`
 * @namespace
 */
vec3, 
/**
 * Vec3 functions that default to returning `Float32Array`
 * @namespace
 */
vec4, } = wgpuMatrixAPI(Float32Array, Float32Array, Float32Array, Float32Array, Float32Array, Float32Array);
const { 
/**
 * 3x3 Matrix functions that default to returning `Float64Array`
 * @namespace
 */
mat3: mat3d, 
/**
 * 4x4 Matrix functions that default to returning `Float64Array`
 * @namespace
 */
mat4: mat4d, 
/**
 * Quaternion functions that default to returning `Float64Array`
 * @namespace
 */
quat: quatd, 
/**
 * Vec2 functions that default to returning `Float64Array`
 * @namespace
 */
vec2: vec2d, 
/**
 * Vec3 functions that default to returning `Float64Array`
 * @namespace
 */
vec3: vec3d, 
/**
 * Vec3 functions that default to returning `Float64Array`
 * @namespace
 */
vec4: vec4d, } = wgpuMatrixAPI(Float64Array, Float64Array, Float64Array, Float64Array, Float64Array, Float64Array);
const { 
/**
 * 3x3 Matrix functions that default to returning `number[]`
 * @namespace
 */
mat3: mat3n, 
/**
 * 4x4 Matrix functions that default to returning `number[]`
 * @namespace
 */
mat4: mat4n, 
/**
 * Quaternion functions that default to returning `number[]`
 * @namespace
 */
quat: quatn, 
/**
 * Vec2 functions that default to returning `number[]`
 * @namespace
 */
vec2: vec2n, 
/**
 * Vec3 functions that default to returning `number[]`
 * @namespace
 */
vec3: vec3n, 
/**
 * Vec3 functions that default to returning `number[]`
 * @namespace
 */
vec4: vec4n, } = wgpuMatrixAPI(ZeroArray, Array, Array, Array, Array, Array);


//# sourceMappingURL=wgpu-matrix.module.js.map


/***/ }),

/***/ "./src/camera/camera.ts":
/*!******************************!*\
  !*** ./src/camera/camera.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const transform_1 = __webpack_require__(/*! ../transform */ "./src/transform.ts");
class Camera extends transform_1.Transform {
    constructor() {
        super();
        // --- Dirty Flags ---
        this._isProjectionDirty = true;
        this._isViewDirty = true;
        // Initialize matrices using wgpu-matrix identity
        this._projectionMatrix = wgpu_matrix_1.mat4.identity();
        this._viewMatrix = wgpu_matrix_1.mat4.identity();
        // Mark as dirty initially to force calculation on first access
        this._isProjectionDirty = true;
        this._isViewDirty = true;
    }
    // --- Getters for Matrices (with lazy calculation) ---
    get projectionMatrix() {
        if (this._isProjectionDirty) {
            this.updateProjectionMatrix();
        }
        return this._projectionMatrix;
    }
    get viewMatrix() {
        if (this._isViewDirty) {
            this.updateViewMatrix();
        }
        return this._viewMatrix;
    }
    // Optional: Method to force update both matrices if needed
    updateMatrices() {
        if (this._isProjectionDirty) {
            this.updateProjectionMatrix();
        }
        if (this._isViewDirty) {
            this.updateViewMatrix();
        }
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/camera/index.ts":
/*!*****************************!*\
  !*** ./src/camera/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCamera = exports.PerspectiveCamera = exports.Camera = void 0;
var camera_1 = __webpack_require__(/*! ./camera */ "./src/camera/camera.ts");
Object.defineProperty(exports, "Camera", ({ enumerable: true, get: function () { return camera_1.Camera; } }));
var perspective_camera_1 = __webpack_require__(/*! ./perspective-camera */ "./src/camera/perspective-camera.ts");
Object.defineProperty(exports, "PerspectiveCamera", ({ enumerable: true, get: function () { return perspective_camera_1.PerspectiveCamera; } }));
var orthographic_camera_1 = __webpack_require__(/*! ./orthographic-camera */ "./src/camera/orthographic-camera.ts");
Object.defineProperty(exports, "OrthographicCamera", ({ enumerable: true, get: function () { return orthographic_camera_1.OrthographicCamera; } }));


/***/ }),

/***/ "./src/camera/orthographic-camera.ts":
/*!*******************************************!*\
  !*** ./src/camera/orthographic-camera.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCamera = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const camera_1 = __webpack_require__(/*! ./camera */ "./src/camera/camera.ts");
class OrthographicCamera extends camera_1.Camera {
    constructor({ left = -1, // Default frustum spans -1 to 1 in X and Y
    right = 1, bottom = -1, top = 1, near = 0.1, far = 1000.0, position = wgpu_matrix_1.vec3.create(0, 0, 10), // Default position
    target = wgpu_matrix_1.vec3.create(0, 0, 0), // Default target (origin)
    up = wgpu_matrix_1.vec3.create(0, 1, 0) // Default up vector (Y-axis)
     } = {}) {
        super();
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
        this.near = near;
        this.far = far;
        // Use create if available, otherwise copy
        this.position = wgpu_matrix_1.vec3.clone(position);
        this.target = wgpu_matrix_1.vec3.clone(target);
        this.up = wgpu_matrix_1.vec3.clone(up);
    }
    // --- Methods to Update Matrices ---
    updateProjectionMatrix() {
        console.log("Updating Orthographic Projection Matrix using wgpu-matrix"); // For debugging
        // Use wgpu-matrix ortho function
        // mat4.ortho(left, right, bottom, top, near, far, destinationMatrix?)
        // It returns a new matrix if destination is not provided.
        this._projectionMatrix = wgpu_matrix_1.mat4.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far
        // Optionally pass this._projectionMatrix as the last argument
        // mat4.ortho(this.left, ..., this.far, this._projectionMatrix);
        );
        this._isProjectionDirty = false;
    }
    updateViewMatrix() {
        console.log("Updating View Matrix using wgpu-matrix"); // For debugging
        // Use wgpu-matrix lookAt function
        this._viewMatrix = wgpu_matrix_1.mat4.lookAt(this.position, this.target, this.up
        // Optionally pass this._viewMatrix as the last argument
        // mat4.lookAt(this.position, this.target, this.up, this._viewMatrix);
        );
        this._isViewDirty = false;
    }
    // --- Methods to Modify Camera Properties (and mark dirty) ---
    // Using vec3.equals for comparison and vec3.copy for setting
    setPosition(newPosition) {
        if (!wgpu_matrix_1.vec3.equals(this.position, newPosition)) {
            // Use copy to avoid modifying the input array if it's reused elsewhere
            this.position = wgpu_matrix_1.vec3.copy(newPosition, this.position); // copy(src, dst?)
            this._isViewDirty = true;
        }
    }
    setTarget(newTarget) {
        if (!wgpu_matrix_1.vec3.equals(this.target, newTarget)) {
            this.target = wgpu_matrix_1.vec3.copy(newTarget, this.target);
            this._isViewDirty = true;
        }
    }
    setUp(newUp) {
        if (!wgpu_matrix_1.vec3.equals(this.up, newUp)) {
            this.up = wgpu_matrix_1.vec3.copy(newUp, this.up);
            this._isViewDirty = true;
        }
    }
    // Setters for orthographic properties
    setLeft(newLeft) {
        if (this.left !== newLeft) {
            this.left = newLeft;
            this._isProjectionDirty = true;
        }
    }
    setRight(newRight) {
        if (this.right !== newRight) {
            this.right = newRight;
            this._isProjectionDirty = true;
        }
    }
    setBottom(newBottom) {
        if (this.bottom !== newBottom) {
            this.bottom = newBottom;
            this._isProjectionDirty = true;
        }
    }
    setTop(newTop) {
        if (this.top !== newTop) {
            this.top = newTop;
            this._isProjectionDirty = true;
        }
    }
    setNear(newNear) {
        if (this.near !== newNear) {
            this.near = newNear;
            this._isProjectionDirty = true;
        }
    }
    setFar(newFar) {
        if (this.far !== newFar) {
            this.far = newFar;
            this._isProjectionDirty = true;
        }
    }
    viewportResized(_) {
        // nop
    }
}
exports.OrthographicCamera = OrthographicCamera;


/***/ }),

/***/ "./src/camera/perspective-camera.ts":
/*!******************************************!*\
  !*** ./src/camera/perspective-camera.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCamera = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const camera_1 = __webpack_require__(/*! ./camera */ "./src/camera/camera.ts");
class PerspectiveCamera extends camera_1.Camera {
    constructor({ fov = Math.PI / 4, // Default: 45 degrees FOV
    aspect = 16 / 9, // Default: Common aspect ratio
    near = 0.1, far = 1000.0, position = wgpu_matrix_1.vec3.create(0, 0, 10), // Use vec3.create for default
    target = wgpu_matrix_1.vec3.create(0, 0, 0), // Use vec3.create for default
    up = wgpu_matrix_1.vec3.create(0, 1, 0) // Use vec3.create for default
     } = {}) {
        super();
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        // Use create if available, otherwise copy
        this.position = wgpu_matrix_1.vec3.clone(position);
        this.target = wgpu_matrix_1.vec3.clone(target);
        this.up = wgpu_matrix_1.vec3.clone(up);
    }
    // --- Methods to Update Matrices ---
    updateProjectionMatrix() {
        console.log("Updating Projection Matrix using wgpu-matrix");
        this._projectionMatrix = wgpu_matrix_1.mat4.perspective(this.fov, this.aspect, this.near, this.far);
        this._isProjectionDirty = false;
    }
    updateViewMatrix() {
        console.log("Updating View Matrix using wgpu-matrix");
        this._viewMatrix = wgpu_matrix_1.mat4.lookAt(this.position, this.target, this.up);
        this._isViewDirty = false;
    }
    // --- Methods to Modify Camera Properties (and mark dirty) ---
    // Using vec3.equals for comparison and vec3.copy for setting
    setPosition(newPosition) {
        if (!wgpu_matrix_1.vec3.equals(this.position, newPosition)) {
            // Use copy to avoid modifying the input array if it's reused elsewhere
            this.position = wgpu_matrix_1.vec3.copy(newPosition, this.position); // copy(src, dst?)
            this._isViewDirty = true;
        }
    }
    setTarget(newTarget) {
        if (!wgpu_matrix_1.vec3.equals(this.target, newTarget)) {
            this.target = wgpu_matrix_1.vec3.copy(newTarget, this.target);
            this._isViewDirty = true;
        }
    }
    setUp(newUp) {
        if (!wgpu_matrix_1.vec3.equals(this.up, newUp)) {
            this.up = wgpu_matrix_1.vec3.copy(newUp, this.up);
            this._isViewDirty = true;
        }
    }
    setFov(newFov) {
        if (this.fov !== newFov) {
            this.fov = newFov;
            this._isProjectionDirty = true;
        }
    }
    setAspect(newAspect) {
        if (this.aspect !== newAspect) {
            this.aspect = newAspect;
            this._isProjectionDirty = true;
        }
    }
    setNear(newNear) {
        if (this.near !== newNear) {
            this.near = newNear;
            this._isProjectionDirty = true;
        }
    }
    setFar(newFar) {
        if (this.far !== newFar) {
            this.far = newFar;
            this._isProjectionDirty = true;
        }
    }
    viewportResized(size) {
        this.setAspect(size[0] / size[1]);
    }
}
exports.PerspectiveCamera = PerspectiveCamera;


/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
class Color {
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    uniformValue() {
        var _a;
        (_a = this.buffer) !== null && _a !== void 0 ? _a : (this.buffer = wgpu_matrix_1.vec4.create());
        this.buffer.set([this.r, this.g, this.b, this.a]);
        return this.buffer;
    }
}
exports.Color = Color;


/***/ }),

/***/ "./src/compute/compute-task.ts":
/*!*************************************!*\
  !*** ./src/compute/compute-task.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComputeTask = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
class ComputeTask {
    constructor(options) {
        this._options = options;
    }
    get cacheKey() {
        if (this._cacheKey) {
            return this._cacheKey;
        }
        const keys = [
            this.label,
            this._options.shader.label,
            this._options.entryPoint,
        ];
        for (const buf of this._options.buffers || []) {
            keys.push(buf.buffer.label);
        }
        for (const tex of this._options.textures || []) {
            keys.push(tex.texture.label);
        }
        this._cacheKey = keys.join(":");
        return this._cacheKey;
    }
    get shaderModule() {
        return this._options.shader;
    }
    get label() {
        return this._options.label || "Compute Task";
    }
    get dispatchCount() {
        return this._options.dispatchCount || wgpu_matrix_1.vec3.create(8, 8, 1);
    }
    get bindGroupLayoutDescriptor() {
        const entries = [];
        let binding = 0;
        const { textures, buffers, samplers } = this._options;
        if ((samplers === null || samplers === void 0 ? void 0 : samplers.length) > 0) {
            for (let i = 0; i < (samplers === null || samplers === void 0 ? void 0 : samplers.length); i++) {
                entries.push({
                    binding,
                    visibility: GPUShaderStage.COMPUTE,
                    sampler: {
                        type: samplers[i].type,
                    },
                });
                binding++;
            }
        }
        if ((textures === null || textures === void 0 ? void 0 : textures.length) > 0) {
            for (let i = 0; i < (textures === null || textures === void 0 ? void 0 : textures.length); i++) {
                if (textures[i].accessType === "sample") {
                    entries.push({
                        binding,
                        visibility: GPUShaderStage.COMPUTE,
                        texture: {
                            sampleType: "float",
                            viewDimension: textures[i].dimension,
                            multisampled: false,
                        },
                    });
                }
                else {
                    const { accessType } = textures[i];
                    const access = accessType === "storageReadWrite"
                        ? "read-write"
                        : accessType === "storageWrite"
                            ? "write-only"
                            : "read-only";
                    entries.push({
                        binding,
                        visibility: GPUShaderStage.COMPUTE,
                        storageTexture: {
                            access,
                            format: textures[i].format,
                            viewDimension: textures[i].dimension,
                        },
                    });
                }
                binding++;
            }
        }
        if ((buffers === null || buffers === void 0 ? void 0 : buffers.length) > 0) {
            for (let i = 0; i < (buffers === null || buffers === void 0 ? void 0 : buffers.length); i++) {
                entries.push({
                    binding,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: { type: buffers[i].type },
                });
                binding++;
            }
        }
        const ret = {
            label: `${this.label} BindGroup Layout`,
            entries,
        };
        return ret;
    }
    get bindGroupEntries() {
        let binding = 0;
        const { textures, buffers, samplers } = this._options;
        const entries = [];
        if ((samplers === null || samplers === void 0 ? void 0 : samplers.length) > 0) {
            for (let i = 0; i < (samplers === null || samplers === void 0 ? void 0 : samplers.length); i++) {
                entries.push({
                    binding,
                    resource: samplers[i].sampler,
                });
                binding++;
            }
        }
        if ((textures === null || textures === void 0 ? void 0 : textures.length) > 0) {
            for (let i = 0; i < (textures === null || textures === void 0 ? void 0 : textures.length); i++) {
                console.log(textures[i]);
                entries.push({
                    binding,
                    resource: textures[i].texture.view,
                });
                binding++;
            }
        }
        if ((buffers === null || buffers === void 0 ? void 0 : buffers.length) > 0) {
            for (let i = 0; i < (buffers === null || buffers === void 0 ? void 0 : buffers.length); i++) {
                entries.push({
                    binding,
                    resource: { buffer: buffers[i].buffer },
                });
                binding++;
            }
        }
        console.log(entries);
        return entries;
    }
    getBindGroupLayout(device) {
        if (this._bindGroupLayout) {
            return this._bindGroupLayout;
        }
        this._bindGroupLayout = device.createBindGroupLayout(this.bindGroupLayoutDescriptor);
        return this._bindGroupLayout;
    }
    getBindGroup(device) {
        if (this._bindGroup) {
            return this._bindGroup;
        }
        this._bindGroup = device.createBindGroup({
            label: this.label,
            layout: this._bindGroupLayout,
            entries: this.bindGroupEntries,
        });
        return this._bindGroup;
    }
}
exports.ComputeTask = ComputeTask;


/***/ }),

/***/ "./src/geometry/big-triangle.ts":
/*!**************************************!*\
  !*** ./src/geometry/big-triangle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BigTriangle = void 0;
const geometry_1 = __webpack_require__(/*! ./geometry */ "./src/geometry/geometry.ts");
class BigTriangle extends geometry_1.Geometry {
    constructor(renderer) {
        const vertexBuffer = renderer.createBuffer(new Float32Array([
            -1, -1, 0,
            3, -1, 0,
            -1, 3, 0
        ]), GPUBufferUsage.VERTEX);
        const indexBuffer = renderer.createBuffer(new Uint16Array([0, 1, 2]), GPUBufferUsage.INDEX);
        const uvBuffer = renderer.createBuffer(new Float32Array([
            0, 0,
            2, 0,
            0, 2
        ]), GPUBufferUsage.VERTEX);
        super(renderer, vertexBuffer, indexBuffer, uvBuffer, 3, 3);
    }
    get cacheKey() {
        return "big-triangle";
    }
    get bufferLayout() {
        return [
            {
                attributes: [
                    {
                        shaderLocation: 0,
                        offset: 0,
                        format: "float32x3",
                    }
                ],
                arrayStride: 3 * 4,
                stepMode: "vertex",
            },
            {
                attributes: [
                    {
                        shaderLocation: 1,
                        offset: 0,
                        format: "float32x2",
                    }
                ],
                arrayStride: 2 * 4,
                stepMode: "vertex",
            }
        ];
    }
}
exports.BigTriangle = BigTriangle;


/***/ }),

/***/ "./src/geometry/cube.ts":
/*!******************************!*\
  !*** ./src/geometry/cube.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CubeGeometry = void 0;
const geometry_1 = __webpack_require__(/*! ./geometry */ "./src/geometry/geometry.ts");
function _createCubeGeometryData() {
    const floatsPerVertex = 8; // position (3) + uv (2) + normal (3)
    const arrayStride = floatsPerVertex * 4; // Bytes per vertex
    const faceData = [
        // Front face (+Z) - Normal: [0, 0, 1]
        // Vertices: BL, BR, TR, TL (BottomLeft, BottomRight, TopRight, TopLeft)
        [-0.5, -0.5, 0.5, 0, 1, 0, 0, 1],
        [0.5, -0.5, 0.5, 1, 1, 0, 0, 1],
        [0.5, 0.5, 0.5, 1, 0, 0, 0, 1],
        [-0.5, 0.5, 0.5, 0, 0, 0, 0, 1],
        // Back face (-Z) - Normal: [0, 0, -1]
        // Vertices: BR, BL, TL, TR (UVs are flipped for standard texture mapping on back)
        [0.5, -0.5, -0.5, 1, 1, 0, 0, -1],
        [-0.5, -0.5, -0.5, 0, 1, 0, 0, -1],
        [-0.5, 0.5, -0.5, 0, 0, 0, 0, -1],
        [0.5, 0.5, -0.5, 1, 0, 0, 0, -1],
        // Right face (+X) - Normal: [1, 0, 0]
        // Vertices: BL, BR, TR, TL
        [0.5, -0.5, 0.5, 0, 1, 1, 0, 0],
        [0.5, -0.5, -0.5, 1, 1, 1, 0, 0],
        [0.5, 0.5, -0.5, 1, 0, 1, 0, 0],
        [0.5, 0.5, 0.5, 0, 0, 1, 0, 0],
        // Left face (-X) - Normal: [-1, 0, 0]
        // Vertices: BR, BL, TL, TR
        [-0.5, -0.5, -0.5, 1, 1, -1, 0, 0],
        [-0.5, -0.5, 0.5, 0, 1, -1, 0, 0],
        [-0.5, 0.5, 0.5, 0, 0, -1, 0, 0],
        [-0.5, 0.5, -0.5, 1, 0, -1, 0, 0],
        // Top face (+Y) - Normal: [0, 1, 0]
        // Vertices: BL, BR, TR, TL
        [-0.5, 0.5, 0.5, 0, 1, 0, 1, 0],
        [0.5, 0.5, 0.5, 1, 1, 0, 1, 0],
        [0.5, 0.5, -0.5, 1, 0, 0, 1, 0],
        [-0.5, 0.5, -0.5, 0, 0, 0, 1, 0],
        // Bottom face (-Y) - Normal: [0, -1, 0]
        // Vertices: TL, TR, BR, BL
        [-0.5, -0.5, -0.5, 0, 1, 0, -1, 0],
        [0.5, -0.5, -0.5, 1, 1, 0, -1, 0],
        [0.5, -0.5, 0.5, 1, 0, 0, -1, 0],
        [-0.5, -0.5, 0.5, 0, 0, 0, -1, 0],
    ];
    const verticesArray = [];
    faceData.forEach((faceVertices) => verticesArray.push(...faceVertices));
    const vertices = new Float32Array(verticesArray);
    const generatedVertexCount = faceData.length; // 24 vertices
    const indicesArray = [];
    for (let i = 0; i < 6; i++) {
        const baseIndex = i * 4;
        indicesArray.push(baseIndex + 0, baseIndex + 1, baseIndex + 2, baseIndex + 0, baseIndex + 2, baseIndex + 3);
    }
    const indices = new Uint16Array(indicesArray);
    const indexCount = indices.length; // 36 indices
    return {
        vertices,
        indices,
        vertexCount: generatedVertexCount,
        indexCount,
        arrayStride,
        floatsPerVertex,
    };
}
class CubeGeometry extends geometry_1.Geometry {
    constructor(renderer) {
        const { vertices, indices, vertexCount, indexCount, arrayStride } = _createCubeGeometryData();
        const vertexGPUBuffer = renderer.createBuffer(vertices, GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);
        const indexGPUBuffer = renderer.createBuffer(indices, GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);
        super(renderer, vertexGPUBuffer, indexGPUBuffer, vertexGPUBuffer, indexCount, vertexCount);
        this._arrayStride = arrayStride;
    }
    get cacheKey() {
        return "CubeGeometry";
    }
    get bufferLayout() {
        // This layout describes the single interleaved vertex buffer.
        return [
            {
                arrayStride: this._arrayStride,
                attributes: [
                    {
                        // Position
                        shaderLocation: 0, // Corresponds to @location(0) in WGSL
                        offset: 0,
                        format: "float32x3",
                    },
                    {
                        // UV
                        shaderLocation: 1, // Corresponds to @location(1) in WGSL
                        offset: 3 * 4, // Offset after 3 position floats
                        format: "float32x2",
                    },
                    {
                        // Normal
                        shaderLocation: 2, // Corresponds to @location(2) in WGSL
                        offset: (3 + 2) * 4, // Offset after 3 position floats + 2 UV floats
                        format: "float32x3",
                    },
                ],
            },
        ];
    }
}
exports.CubeGeometry = CubeGeometry;


/***/ }),

/***/ "./src/geometry/geometry.ts":
/*!**********************************!*\
  !*** ./src/geometry/geometry.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Geometry = void 0;
class Geometry {
    constructor(renderer, vertexBuffer, indexBuffer, uvBuffer, indexCount, vertexCount) {
        this._renderer = renderer;
        this._vertexBuffer = vertexBuffer;
        this._indexBuffer = indexBuffer;
        this._uvBuffer = uvBuffer;
        this._indexCount = indexCount;
        this._vertexCount = vertexCount;
    }
    get device() {
        return this._renderer.device;
    }
    get vertexBuffer() {
        return this._vertexBuffer;
    }
    get indexBuffer() {
        return this._indexBuffer;
    }
    get indexCount() {
        return this._indexCount;
    }
    get vertexCount() {
        return this._vertexCount;
    }
    get uvBuffer() {
        return this._uvBuffer;
    }
}
exports.Geometry = Geometry;


/***/ }),

/***/ "./src/geometry/index.ts":
/*!*******************************!*\
  !*** ./src/geometry/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Geometry = exports.BigTriangle = exports.CubeGeometry = void 0;
var cube_1 = __webpack_require__(/*! ./cube */ "./src/geometry/cube.ts");
Object.defineProperty(exports, "CubeGeometry", ({ enumerable: true, get: function () { return cube_1.CubeGeometry; } }));
var big_triangle_1 = __webpack_require__(/*! ./big-triangle */ "./src/geometry/big-triangle.ts");
Object.defineProperty(exports, "BigTriangle", ({ enumerable: true, get: function () { return big_triangle_1.BigTriangle; } }));
var geometry_1 = __webpack_require__(/*! ./geometry */ "./src/geometry/geometry.ts");
Object.defineProperty(exports, "Geometry", ({ enumerable: true, get: function () { return geometry_1.Geometry; } }));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compute = exports.material = exports.geometry = exports.camera = exports.Transform = exports.Scene = exports.ImageTexture = exports.DefaultTexture = exports.Color = exports.Renderer = void 0;
var renderer_1 = __webpack_require__(/*! ./renderer */ "./src/renderer.ts");
Object.defineProperty(exports, "Renderer", ({ enumerable: true, get: function () { return renderer_1.Renderer; } }));
var color_1 = __webpack_require__(/*! ./color */ "./src/color.ts");
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return color_1.Color; } }));
var texture_1 = __webpack_require__(/*! ./texture */ "./src/texture.ts");
Object.defineProperty(exports, "DefaultTexture", ({ enumerable: true, get: function () { return texture_1.DefaultTexture; } }));
Object.defineProperty(exports, "ImageTexture", ({ enumerable: true, get: function () { return texture_1.ImageTexture; } }));
var scene_1 = __webpack_require__(/*! ./scene */ "./src/scene.ts");
Object.defineProperty(exports, "Scene", ({ enumerable: true, get: function () { return scene_1.Scene; } }));
var transform_1 = __webpack_require__(/*! ./transform */ "./src/transform.ts");
Object.defineProperty(exports, "Transform", ({ enumerable: true, get: function () { return transform_1.Transform; } }));
exports.camera = __importStar(__webpack_require__(/*! ./camera */ "./src/camera/index.ts"));
exports.geometry = __importStar(__webpack_require__(/*! ./geometry */ "./src/geometry/index.ts"));
exports.material = __importStar(__webpack_require__(/*! ./materials */ "./src/materials/index.ts"));
exports.compute = __importStar(__webpack_require__(/*! ./compute/compute-task */ "./src/compute/compute-task.ts"));


/***/ }),

/***/ "./src/materials/basic-material.ts":
/*!*****************************************!*\
  !*** ./src/materials/basic-material.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasicMaterial = void 0;
const color_1 = __webpack_require__(/*! ../color */ "./src/color.ts");
const texture_1 = __webpack_require__(/*! ../texture */ "./src/texture.ts");
const material_1 = __webpack_require__(/*! ./material */ "./src/materials/material.ts");
const uniform_manager_1 = __webpack_require__(/*! ../uniform-manager */ "./src/uniform-manager.ts");
const header_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/header.wgsl */ "./src/shaders/header.wgsl"));
const basic_material_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/basic-material.wgsl */ "./src/shaders/basic-material.wgsl"));
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


/***/ }),

/***/ "./src/materials/index.ts":
/*!********************************!*\
  !*** ./src/materials/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UVMaterial = exports.ShaderMaterial = exports.BasicMaterial = exports.Material = void 0;
var material_1 = __webpack_require__(/*! ./material */ "./src/materials/material.ts");
Object.defineProperty(exports, "Material", ({ enumerable: true, get: function () { return material_1.Material; } }));
var basic_material_1 = __webpack_require__(/*! ./basic-material */ "./src/materials/basic-material.ts");
Object.defineProperty(exports, "BasicMaterial", ({ enumerable: true, get: function () { return basic_material_1.BasicMaterial; } }));
var shader_material_1 = __webpack_require__(/*! ./shader-material */ "./src/materials/shader-material.ts");
Object.defineProperty(exports, "ShaderMaterial", ({ enumerable: true, get: function () { return shader_material_1.ShaderMaterial; } }));
var uv_material_1 = __webpack_require__(/*! ./uv-material */ "./src/materials/uv-material.ts");
Object.defineProperty(exports, "UVMaterial", ({ enumerable: true, get: function () { return uv_material_1.UVMaterial; } }));


/***/ }),

/***/ "./src/materials/material.ts":
/*!***********************************!*\
  !*** ./src/materials/material.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ "./src/materials/shader-material.ts":
/*!******************************************!*\
  !*** ./src/materials/shader-material.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShaderMaterial = void 0;
const material_1 = __webpack_require__(/*! ./material */ "./src/materials/material.ts");
const uniform_manager_1 = __webpack_require__(/*! ../uniform-manager */ "./src/uniform-manager.ts");
const header_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/header.wgsl */ "./src/shaders/header.wgsl"));
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


/***/ }),

/***/ "./src/materials/uv-material.ts":
/*!**************************************!*\
  !*** ./src/materials/uv-material.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UVMaterial = void 0;
const material_1 = __webpack_require__(/*! ./material */ "./src/materials/material.ts");
const header_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/header.wgsl */ "./src/shaders/header.wgsl"));
const uv_material_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/uv-material.wgsl */ "./src/shaders/uv-material.wgsl"));
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


/***/ }),

/***/ "./src/mesh.ts":
/*!*********************!*\
  !*** ./src/mesh.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mesh = void 0;
const transform_1 = __webpack_require__(/*! ./transform */ "./src/transform.ts");
const uniform_manager_1 = __webpack_require__(/*! ./uniform-manager */ "./src/uniform-manager.ts");
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


/***/ }),

/***/ "./src/renderer.ts":
/*!*************************!*\
  !*** ./src/renderer.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const orthographic_camera_1 = __webpack_require__(/*! ./camera/orthographic-camera */ "./src/camera/orthographic-camera.ts");
const perspective_camera_1 = __webpack_require__(/*! ./camera/perspective-camera */ "./src/camera/perspective-camera.ts");
const mesh_1 = __webpack_require__(/*! ./mesh */ "./src/mesh.ts");
const scene_1 = __webpack_require__(/*! ./scene */ "./src/scene.ts");
const texture_1 = __webpack_require__(/*! ./texture */ "./src/texture.ts");
class Renderer {
    constructor(options = {}) {
        var _a;
        this.adapter = null;
        this.depthFormat = "depth24plus-stencil8";
        this.format = "bgra8unorm";
        this.canvasSize = wgpu_matrix_1.vec2.create(1, 1);
        this.sizeDirty = true;
        this._pipelineCache = new Map();
        this._computePipelineCache = new Map();
        (_a = this.canvas) !== null && _a !== void 0 ? _a : (this.canvas = options.canvas);
        console.log("Renderer initialized");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!navigator.gpu) {
                throw new Error("WebGPU is not supported in this browser");
            }
            this.adapter = yield navigator.gpu.requestAdapter();
            if (!this.adapter) {
                throw new Error("No GPU adapter found");
            }
            this.device = yield this.adapter.requestDevice();
            console.log("GPU device initialized");
            if (this.canvas) {
                this.initCanvas(this.canvas);
            }
        });
    }
    initCanvas(canvas) {
        var _a;
        this.canvas = canvas;
        this.context = (_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getContext("webgpu");
        if (!this.context) {
            throw new Error("Failed to get WebGPU context");
        }
        this.format = navigator.gpu.getPreferredCanvasFormat();
        console.log(this.format);
        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: "premultiplied",
        });
        const onResize = () => {
            var _a;
            const width = this.canvas.offsetWidth;
            const height = this.canvas.offsetHeight;
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvasSize.set([width, height]);
            this.sizeDirty = true;
            (_a = this.depthTexture) === null || _a === void 0 ? void 0 : _a.destroy();
            this.depthTexture = this.device.createTexture({
                label: "Depth texture",
                size: { width, height },
                format: this.depthFormat,
                usage: GPUTextureUsage.RENDER_ATTACHMENT,
            });
            this.depthTextureView = this.depthTexture.createView({
                label: "Depth texture view ",
            });
        };
        onResize();
        this.resizeObserver = new ResizeObserver(onResize);
        this.resizeObserver.observe(this.canvas);
        console.log("Canvas initialized");
    }
    createShaderModule(descriptor) {
        return this.device.createShaderModule(descriptor);
    }
    createBuffer(arr, usage) {
        const buffer = this.device.createBuffer({
            size: (arr.byteLength + 3) & ~3,
            usage,
            mappedAtCreation: true,
        });
        if (arr instanceof Float32Array) {
            const writeArray = new Float32Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        else if (arr instanceof Uint16Array) {
            const writeArray = new Uint16Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        else if (arr instanceof Uint8Array) {
            const writeArray = new Uint8Array(buffer.getMappedRange());
            writeArray.set(arr);
        }
        buffer.unmap();
        return buffer;
    }
    pipelineFor(scene, mesh) {
        const cacheKey = mesh.cacheKey;
        if (this._pipelineCache.has(cacheKey)) {
            return this._pipelineCache.get(cacheKey);
        }
        const shaderCode = mesh.material.shaderCode;
        const bufferLayout = mesh.geometry.bufferLayout;
        const layout = this.device.createPipelineLayout({
            label: "Pipeline Layout",
            bindGroupLayouts: [
                scene.bindGroupLayout,
                mesh.bindGroupLayout,
                mesh.material.bindGroupLayout,
            ],
        });
        const pipeline = this.device.createRenderPipeline({
            layout,
            vertex: {
                module: shaderCode,
                buffers: bufferLayout,
            },
            fragment: {
                module: shaderCode,
                targets: [
                    {
                        format: this.format,
                    },
                ],
            },
            primitive: {
                topology: "triangle-list",
                stripIndexFormat: undefined,
                frontFace: "ccw",
                cullMode: "back",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: "depth24plus-stencil8",
            },
        });
        this._pipelineCache.set(cacheKey, pipeline);
        // console.log("Pipeline created", cacheKey);
        return pipeline;
    }
    render(scene, camera) {
        const [width, height] = this.canvasSize;
        const outputTexture = this.context.getCurrentTexture();
        const outputTextureView = outputTexture.createView({
            label: "Canvas output texture view",
        });
        const renderPassDesc = {
            label: "Render pass",
            colorAttachments: [
                {
                    view: outputTextureView,
                    clearValue: [0, 0, 0, 1],
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
            depthStencilAttachment: {
                view: this.depthTextureView,
                depthClearValue: 1,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilLoadOp: "clear",
                stencilStoreOp: "store",
            },
        };
        const commandEncoder = this.device.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDesc);
        passEncoder.setViewport(0, 0, width, height, 0, 1);
        passEncoder.setScissorRect(0, 0, width, height);
        if (this.sizeDirty) {
            camera.viewportResized(this.canvasSize);
            this.sizeDirty = false;
        }
        scene.update(camera, this.canvasSize);
        const sceneBindGroup = scene.bindGroup;
        passEncoder.setBindGroup(0, sceneBindGroup);
        scene.traverse((obj) => {
            if (obj instanceof mesh_1.Mesh) {
                const mesh = obj;
                mesh.update();
                const pipeline = this.pipelineFor(scene, mesh);
                passEncoder.setPipeline(pipeline);
                passEncoder.setVertexBuffer(0, mesh.geometry.vertexBuffer);
                passEncoder.setVertexBuffer(1, mesh.geometry.uvBuffer);
                passEncoder.setIndexBuffer(mesh.geometry.indexBuffer, "uint16");
                passEncoder.setBindGroup(1, mesh.bindGroup);
                passEncoder.setBindGroup(2, mesh.material.bindGroup);
                passEncoder.drawIndexed(mesh.geometry.indexCount);
            }
        });
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
    }
    computePipelineFor(task) {
        if (!this._computePipelineCache[task.cacheKey]) {
            const bgl = task.getBindGroupLayout(this.device);
            const layout = this.device.createPipelineLayout({
                label: `${task.label} Pipeline Layout`,
                bindGroupLayouts: [bgl],
            });
            const ret = this.device.createComputePipeline({
                layout,
                compute: {
                    module: task.shaderModule,
                },
            });
            this._computePipelineCache[task.cacheKey] = ret;
        }
        return this._computePipelineCache[task.cacheKey];
    }
    compute(tasks) {
        const commandEncoder = this.device.createCommandEncoder();
        const passEncoder = commandEncoder.beginComputePass();
        for (const task of tasks) {
            const pipeline = this.computePipelineFor(task);
            const size = task.dispatchCount;
            const bg = task.getBindGroup(this.device);
            passEncoder.setPipeline(pipeline);
            passEncoder.setBindGroup(0, bg);
            passEncoder.dispatchWorkgroups(size[0], size[1], size[2]);
        }
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
    }
    createMaterial(c, o) {
        return new c(this.device, o);
    }
    createGeometry(c) {
        return new c(this);
    }
    createMesh(geo, mat) {
        return new mesh_1.Mesh(this.device, mat, geo);
    }
    createScene() {
        return new scene_1.Scene(this.device);
    }
    createPerspectiveCamera(options) {
        return new perspective_camera_1.PerspectiveCamera(options);
    }
    createOrthographicCamera(options) {
        return new orthographic_camera_1.OrthographicCamera(options);
    }
    loadImageTexture(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const ret = new texture_1.ImageTexture(url);
            yield ret.load();
            ret.upload(this.device);
            return ret;
        });
    }
    createTexture(descriptor) {
        const tex = new texture_1.MappedTexture(descriptor);
        tex.upload(this.device);
        return tex;
    }
    createSampler(descriptor) {
        return this.device.createSampler(descriptor);
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
const transform_1 = __webpack_require__(/*! ./transform */ "./src/transform.ts");
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const uniform_manager_1 = __webpack_require__(/*! ./uniform-manager */ "./src/uniform-manager.ts");
class Scene extends transform_1.Transform {
    constructor(device) {
        super();
        this._uniformManager = new uniform_manager_1.UniformManager(device, [
            { name: "projection matrix", value: wgpu_matrix_1.mat4.create() },
            { name: "view matrix", value: wgpu_matrix_1.mat4.create() },
            { name: "camera position", value: wgpu_matrix_1.vec3.create() },
            { name: "resolution", value: wgpu_matrix_1.vec2.create(1, 1) },
            { name: "time", value: performance.now() / 1000 },
        ]);
    }
    update(camera, resolution) {
        this._uniformManager.updateUniform({ name: "projection matrix", value: camera.projectionMatrix });
        this._uniformManager.updateUniform({ name: "view matrix", value: camera.viewMatrix });
        this._uniformManager.updateUniform({ name: "camera position", value: camera.position });
        this._uniformManager.updateUniform({ name: "resolution", value: resolution });
        this._uniformManager.updateUniform({ name: "time", value: performance.now() / 1000 });
        this._uniformManager.update();
    }
    get bindGroupLayout() {
        return this._uniformManager.bindGroupLayout;
    }
    get bindGroup() {
        return this._uniformManager.bindGroup;
    }
}
exports.Scene = Scene;


/***/ }),

/***/ "./src/shaders/basic-material.wgsl":
/*!*****************************************!*\
  !*** ./src/shaders/basic-material.wgsl ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct Uniforms {\n  color: vec4<f32>\n}\n\n@group(BG_UNIFORMS) @binding(0) var<uniform> uniforms: Uniforms;\n@group(BG_UNIFORMS) @binding(1) var tex_sampler: sampler;\n@group(BG_UNIFORMS) @binding(2) var tex_map: texture_2d<f32>;\n\nstruct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv: vec2<f32>,\n}\n\n@vertex\nfn vs_main(@location(0) in_pos: vec3<f32>, @location(1) uv: vec2<f32>) -> VSOut {\n  let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;\n\n  let vs_out: VSOut = VSOut(\n    modelViewProj * vec4<f32>(in_pos, 1.0),\n    uv,\n  );\n  return vs_out;\n}\n\n@fragment\nfn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {\n  let color: vec4<f32> = textureSample(tex_map, tex_sampler, vs_out.uv);\n  return color * uniforms.color;\n}\n");

/***/ }),

/***/ "./src/shaders/header.wgsl":
/*!*********************************!*\
  !*** ./src/shaders/header.wgsl ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("const BG_SCENE: u32 = 0;\nconst BG_MODEL: u32 = 1;\nconst BG_UNIFORMS: u32 = 2;\n\nstruct SceneUniforms {\n  projection: mat4x4<f32>,\n  view: mat4x4<f32>,\n  camera_position: vec3<f32>,\n  resolution: vec2<f32>,\n  time: f32,\n}\n\nstruct ModelUniforms {\n  model: mat4x4<f32>,\n}\n\n@group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;\n@group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;\n");

/***/ }),

/***/ "./src/shaders/uv-material.wgsl":
/*!**************************************!*\
  !*** ./src/shaders/uv-material.wgsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv: vec2<f32>,\n}\n\n@vertex\nfn vs_main(@location(0) in_pos: vec3<f32>, @location(1) uv: vec2<f32>) -> VSOut {\n  let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;\n\n  let vs_out: VSOut = VSOut(\n    modelViewProj * vec4<f32>(in_pos, 1.0),\n    uv,\n  );\n  return vs_out;\n}\n\n@fragment\nfn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {\n  return vec4(vs_out.uv, 0.0, 1.0);\n}\n");

/***/ }),

/***/ "./src/texture.ts":
/*!************************!*\
  !*** ./src/texture.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageTexture = exports.DefaultTexture = exports.MappedTexture = exports.Texture = void 0;
class Texture {
    constructor() { }
}
exports.Texture = Texture;
class MappedTexture extends Texture {
    constructor(descriptor) {
        super();
        this._descriptor = descriptor;
    }
    get descriptor() {
        return this._descriptor;
    }
    get view() {
        if (!this._view) {
            this._view = this._texture.createView();
        }
        return this._view;
    }
    upload(device) {
        this._texture = device.createTexture(this.descriptor);
    }
    dispose() {
        this._texture.destroy();
    }
    get width() {
        return this._texture.width;
    }
    get height() {
        return this._texture.height;
    }
    get label() {
        return this._texture.label;
    }
}
exports.MappedTexture = MappedTexture;
class DefaultTexture extends Texture {
    constructor() {
        super();
        this._texture = null;
        this._textureView = null;
        this._pixelData = new Uint8Array([255, 255, 255, 255]);
    }
    get width() {
        return 1;
    }
    get height() {
        return 1;
    }
    get descriptor() {
        return {
            size: { width: 1, height: 1, depthOrArrayLayers: 1 },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }
    get view() {
        var _a;
        if (!this._texture) {
            throw new Error("Texture not created");
        }
        (_a = this._textureView) !== null && _a !== void 0 ? _a : (this._textureView = this._texture.createView());
        return this._textureView;
    }
    get label() {
        return "Default Texture";
    }
    upload(device) {
        if (this._texture) {
            return;
        }
        this._texture = device.createTexture(this.descriptor);
        device.queue.writeTexture({ texture: this._texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 } }, this._pixelData, { offset: 0, bytesPerRow: 4, rowsPerImage: 1 }, { width: 1, height: 1, depthOrArrayLayers: 1 });
    }
    dispose() {
        var _a;
        (_a = this._texture) === null || _a === void 0 ? void 0 : _a.destroy();
        this._texture = null;
        this._textureView = null;
    }
}
exports.DefaultTexture = DefaultTexture;
DefaultTexture.instance = new DefaultTexture();
class ImageTexture extends Texture {
    constructor(imageSrc) {
        super();
        this._width = 0;
        this._height = 0;
        this._texture = null;
        this._textureView = null;
        this._imagedata = null;
        this.src = imageSrc;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const imageResp = yield fetch(this.src);
            if (!imageResp.ok) {
                throw new Error(`Failed to load image: ${this.src}`);
            }
            const imageBlob = yield imageResp.blob();
            const imageBitmap = yield createImageBitmap(imageBlob);
            this._imagedata = imageBitmap;
            this._width = imageBitmap.width;
            this._height = imageBitmap.height;
        });
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get descriptor() {
        return {
            size: {
                width: this._width,
                height: this._height,
                depthOrArrayLayers: 1,
            },
            format: "rgba8unorm",
            usage: GPUTextureUsage.TEXTURE_BINDING |
                GPUTextureUsage.COPY_DST |
                GPUTextureUsage.RENDER_ATTACHMENT,
            dimension: "2d",
            mipLevelCount: 1,
            sampleCount: 1,
        };
    }
    get view() {
        var _a;
        if (!this._texture) {
            throw new Error("Texture not created");
        }
        (_a = this._textureView) !== null && _a !== void 0 ? _a : (this._textureView = this._texture.createView());
        return this._textureView;
    }
    get label() {
        return `ImageTexture ${this.src}`;
    }
    upload(device) {
        if (this._texture) {
            return;
        }
        if (!this._imagedata) {
            throw new Error("Image not loaded");
        }
        this._texture = device.createTexture(this.descriptor);
        device.queue.copyExternalImageToTexture({ source: this._imagedata, origin: { x: 0, y: 0 }, flipY: true }, { texture: this._texture, origin: { x: 0, y: 0 } }, { width: this._width, height: this._height, depthOrArrayLayers: 1 });
    }
    dispose() {
        var _a, _b;
        (_a = this._imagedata) === null || _a === void 0 ? void 0 : _a.close();
        (_b = this._texture) === null || _b === void 0 ? void 0 : _b.destroy();
        this._texture = null;
        this._textureView = null;
        this._imagedata = null;
        this._width = 0;
        this._height = 0;
    }
}
exports.ImageTexture = ImageTexture;


/***/ }),

/***/ "./src/transform.ts":
/*!**************************!*\
  !*** ./src/transform.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transform = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
function compose(position, rotation, scale, dst) {
    if (!dst) {
        dst = wgpu_matrix_1.mat4.create();
    }
    const [x, y, z, w] = rotation;
    const x2 = x + x;
    const y2 = y + y;
    const z2 = z + z;
    const xx = x * x2;
    const yy = y * y2;
    const zz = z * z2;
    const xy = x * y2;
    const xz = x * z2;
    const yz = y * z2;
    const wx = w * x2;
    const wy = w * y2;
    const wz = w * z2;
    const [sx, sy, sz] = scale;
    dst[0] = (1 - (yy + zz)) * sx;
    dst[1] = (xy + wz) * sx;
    dst[2] = (xz - wy) * sx;
    dst[3] = 0;
    dst[4] = (xy - wz) * sy;
    dst[5] = (1 - (xx + zz)) * sy;
    dst[6] = (yz + wx) * sy;
    dst[7] = 0;
    dst[8] = (xz + wy) * sz;
    dst[9] = (yz - wx) * sz;
    dst[10] = (1 - (xx + yy)) * sz;
    dst[11] = 0;
    dst[12] = position[0];
    dst[13] = position[1];
    dst[14] = position[2];
    dst[15] = 1;
    return dst;
}
class Transform {
    constructor() {
        // Hierarchy
        this._children = [];
        this._position = wgpu_matrix_1.vec3.create(0, 0, 0);
        this._rotation = wgpu_matrix_1.quat.identity();
        this._scale = wgpu_matrix_1.vec3.create(1, 1, 1);
        this._localMatrix = wgpu_matrix_1.mat4.identity();
        this._worldMatrix = wgpu_matrix_1.mat4.identity();
        this._localDirty = true; // Needs initial calculation
        this._worldDirty = true; // Needs initial calculation
    }
    // --- Getters for Local Components ---
    get position() {
        return this._position; // Return stored local value
    }
    get quaternion() {
        return this._rotation; // Return stored local value
    }
    get scale() {
        return this._scale; // Return stored local value
    }
    // --- Setters for Local Components (Mark Dirty) ---
    set position(value) {
        if (!wgpu_matrix_1.vec3.equals(this._position, value)) {
            this._position = wgpu_matrix_1.vec3.copy(value, this._position);
            this.makeDirty();
        }
    }
    set quaternion(value) {
        if (!wgpu_matrix_1.quat.equals(this._rotation, value)) {
            this._rotation = wgpu_matrix_1.quat.copy(value, this._rotation);
            this.makeDirty();
        }
    }
    setRotation(xValue, yValue, zValue, order = "xyz") {
        this._rotation = wgpu_matrix_1.quat.fromEuler(xValue, yValue, zValue, order);
        this.makeDirty();
    }
    set scale(value) {
        if (!wgpu_matrix_1.vec3.equals(this._scale, value)) {
            this._scale = wgpu_matrix_1.vec3.copy(value, this._scale);
            this.makeDirty();
        }
    }
    // --- Matrix Getters (Update if Dirty) ---
    /** Gets the local transformation matrix, recalculating if necessary. */
    get localMatrix() {
        if (this._localDirty) {
            this.updateLocalMatrix();
        }
        return this._localMatrix;
    }
    /** Gets the world transformation matrix, recalculating if necessary. */
    get worldMatrix() {
        // Force update if local or world is dirty.
        // Getting parent.worldMatrix will recursively update the chain if needed.
        if (this._localDirty || this._worldDirty) {
            this.updateWorldMatrix();
        }
        return this._worldMatrix;
    }
    // --- Update Logic ---
    /** Recalculates the local matrix from position, rotation, and scale. */
    updateLocalMatrix() {
        compose(this._position, this._rotation, this._scale, this._localMatrix);
        this._localDirty = false;
        // World matrix also becomes dirty whenever local matrix changes
        this._worldDirty = true;
    }
    /** Recalculates the world matrix based on parent and local matrices. */
    updateWorldMatrix() {
        // Ensure local matrix is up-to-date first
        if (this._localDirty) {
            this.updateLocalMatrix(); // This will also set _worldDirty = true, which is fine
        }
        if (this._parent) {
            // Calculate world matrix: parentWorld * local
            wgpu_matrix_1.mat4.multiply(this._parent.worldMatrix, this.localMatrix, this._worldMatrix);
        }
        else {
            // No parent, world matrix is the same as local matrix
            wgpu_matrix_1.mat4.copy(this.localMatrix, this._worldMatrix);
        }
        this._worldDirty = false; // World matrix is now up-to-date
        // Important: Notify children that their world matrices are now dirty
        for (const child of this._children) {
            child._worldDirty = true; // Or call child.makeDirty() if it handles propagation
        }
    }
    /** Marks this transform and its descendants as dirty. */
    makeDirty() {
        this._localDirty = true;
        this._worldDirty = true;
        // Propagate dirtiness down the hierarchy
        for (const child of this._children) {
            // Avoid infinite loops if child already marked dirty by parent update
            if (!child._worldDirty) {
                child.makeWorldDirty(); // Child only needs world update, not necessarily local
            }
        }
    }
    /** Marks this transform's world matrix and descendants' world matrices as dirty. */
    makeWorldDirty() {
        if (!this._worldDirty) { // Avoid redundant propagation
            this._worldDirty = true;
            for (const child of this._children) {
                child.makeWorldDirty();
            }
        }
    }
    // --- Hierarchy Management ---
    get children() {
        return this._children;
    }
    add(child) {
        if (child._parent === this)
            return; // Already a child
        if (child._parent) {
            child._parent.remove(child); // Remove from previous parent
        }
        if (this._children.indexOf(child) === -1) {
            this._children.push(child);
            child._parent = this;
            child.makeWorldDirty(); // Child's world transform is now relative to this one
        }
    }
    remove(child) {
        const index = this._children.indexOf(child);
        if (index !== -1) {
            this._children.splice(index, 1);
            child._parent = undefined;
            child.makeWorldDirty(); // Child's world transform needs recalculation (now relative to root)
        }
    }
    clear() {
        for (const child of this._children) {
            child._parent = undefined;
            child.makeWorldDirty();
        }
        this._children = [];
    }
    traverse(fn) {
        fn(this);
        for (const child of this._children) {
            child.traverse(fn);
        }
    }
}
exports.Transform = Transform;


/***/ }),

/***/ "./src/uniform-manager.ts":
/*!********************************!*\
  !*** ./src/uniform-manager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UniformManager = void 0;
const uniform_utils_1 = __webpack_require__(/*! ./uniform-utils */ "./src/uniform-utils.ts");
class UniformManager {
    constructor(device, uniforms, textures, label) {
        this._uniformDirty = true;
        this._texturesDirty = true;
        this._device = device;
        this._uniforms = uniforms;
        this._textures = textures;
        this._label = label;
    }
    updateUniform(uniform) {
        var _a;
        const toUpdate = (_a = this._uniforms) === null || _a === void 0 ? void 0 : _a.find((u) => u.name === uniform.name);
        toUpdate.value = uniform.value;
        this.setUniformsDirty();
    }
    updateTextures(textures) {
        this._textures = textures;
        this._texturesDirty = true;
    }
    update() {
        if (this._uniformDirty) {
            this._uniformArr = (0, uniform_utils_1.packUniforms)(this._uniforms || [], this._uniformArr);
            this._uniformBuffer = (0, uniform_utils_1.uploadUniformBuffer)(this._uniformArr, this._device, this._label, this._uniformBuffer);
            this._uniformDirty = false;
        }
        if (this._texturesDirty) {
            (this._textures || []).forEach((t) => t.upload(this._device));
            this._texturesDirty = false;
        }
    }
    setTexturesDirty() {
        this._texturesDirty = true;
    }
    setUniformsDirty() {
        this._uniformDirty = true;
    }
    setDirty() {
        this.setTexturesDirty();
        this.setUniformsDirty();
    }
    get sampler() {
        if (!this._sampler) {
            this._sampler = this._device.createSampler({
                magFilter: "linear",
                minFilter: "linear",
            });
        }
        return this._sampler;
    }
    get bindGroupLayoutDescriptor() {
        const entries = [];
        let binding = 0;
        const { _uniforms, _textures } = this;
        if ((_uniforms === null || _uniforms === void 0 ? void 0 : _uniforms.length) > 0) {
            entries.push({
                binding: 0,
                visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                buffer: {
                    type: "uniform",
                    hasDynamicOffset: false,
                    minBindingSize: 0,
                },
            });
            binding++;
        }
        if ((_textures === null || _textures === void 0 ? void 0 : _textures.length) > 0) {
            entries.push({
                binding,
                visibility: GPUShaderStage.FRAGMENT,
                sampler: { type: "filtering" },
            });
            binding++;
            for (let i = 0; i < (_textures === null || _textures === void 0 ? void 0 : _textures.length); i++) {
                entries.push({
                    binding: i + binding,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {
                        sampleType: "float",
                        viewDimension: "2d",
                        multisampled: false,
                    },
                });
            }
        }
        const ret = {
            label: `${this._label} BindGroup Layout`,
            entries,
        };
        return ret;
    }
    get bindGroupLayout() {
        if (this._bindGroupLayout) {
            return this._bindGroupLayout;
        }
        this._bindGroupLayout = this._device.createBindGroupLayout(this.bindGroupLayoutDescriptor);
        return this._bindGroupLayout;
    }
    get bindGroupDescriptor() {
        let binding = 0;
        const { _uniforms, _textures } = this;
        const entries = [];
        if ((_uniforms === null || _uniforms === void 0 ? void 0 : _uniforms.length) > 0) {
            entries.push({
                binding,
                resource: { buffer: this._uniformBuffer },
            });
            binding++;
        }
        if ((_textures === null || _textures === void 0 ? void 0 : _textures.length) > 0) {
            entries.push({
                binding,
                resource: this.sampler,
            });
            binding++;
            for (let i = 0; i < (_textures === null || _textures === void 0 ? void 0 : _textures.length); i++) {
                entries.push({
                    binding: i + binding,
                    resource: _textures[i].view,
                });
            }
        }
        return {
            label: `${this._label} BindGroup`,
            layout: this.bindGroupLayout,
            entries,
        };
    }
    get bindGroup() {
        if (this._bindGroup) {
            return this._bindGroup;
        }
        this._bindGroup = this._device.createBindGroup(this.bindGroupDescriptor);
        return this._bindGroup;
    }
}
exports.UniformManager = UniformManager;


/***/ }),

/***/ "./src/uniform-utils.ts":
/*!******************************!*\
  !*** ./src/uniform-utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packUniforms = packUniforms;
exports.uploadUniformBuffer = uploadUniformBuffer;
const color_1 = __webpack_require__(/*! ./color */ "./src/color.ts");
// Map WGSL types to their std140 layout info, now including advanceAmount and paddedStride for all
const STD140_LAYOUT_INFO = {
    // type: { align, size, advanceAmount, paddedStride }
    f32: { align: 4, size: 4, advanceAmount: 4, paddedStride: 4 },
    vec2: { align: 8, size: 8, advanceAmount: 8, paddedStride: 8 },
    vec3: { align: 16, size: 12, advanceAmount: 16, paddedStride: 16 }, // Aligns to 16, data size 12, occupies 16
    vec4: { align: 16, size: 16, advanceAmount: 16, paddedStride: 16 },
    color: { align: 16, size: 16, advanceAmount: 16, paddedStride: 16 },
    mat3: { align: 16, size: 36, advanceAmount: 48, paddedStride: 16 }, // Size 9*4=36, 3 cols * 16 bytes/col stride = 48 bytes advance
    mat4: { align: 16, size: 64, advanceAmount: 64, paddedStride: 16 }, // Size 16*4=64, 4 cols * 16 bytes/col stride = 64 bytes advance
};
// Helper to determine the WGSL type string from a JavaScript value
function getDataType(item) {
    if (typeof item.value === "number") {
        return "f32";
    }
    else if (item.value instanceof color_1.Color) {
        return "color";
    }
    else if (item.value instanceof Float32Array) {
        switch (item.value.length) {
            case 2:
                return "vec2";
            case 3:
                return "vec3";
            case 4:
                return "vec4";
            case 9:
                return "mat3";
            case 16:
                return "mat4";
            default:
                throw new Error(`Unsupported Float32Array length in item ${item.name} for uniform packing: ${item.value.length}`);
        }
    }
    else {
        throw new Error(`Unsupported data type in item ${item.name} for uniform packing: ${typeof item.value}`);
    }
}
function packUniforms(items, targetBuffer, targetOffset = 0) {
    let currentOffset = 0;
    let maxAlignment = 0;
    // Store layout info including the calculated offset relative to the start of packing
    const itemLayouts = [];
    if (items.length === 0 && !targetBuffer) {
        return new ArrayBuffer(0); // Handle empty input when creating new buffer
    }
    if (items.length === 0 && targetBuffer) {
        return targetBuffer; // Nothing to write if items are empty
    }
    // --- First Pass: Calculate relative offsets and total size ---
    for (const item of items) {
        const type = getDataType(item);
        const layoutInfo = STD140_LAYOUT_INFO[type];
        if (!layoutInfo) {
            throw new Error(`Layout info not defined for type: ${type}`);
        }
        const itemAlign = layoutInfo.align;
        const itemSize = layoutInfo.size; // Actual data size
        maxAlignment = Math.max(maxAlignment, itemAlign);
        // Calculate padding needed BEFORE this item to meet its alignment
        const padding = (itemAlign - (currentOffset % itemAlign)) % itemAlign;
        currentOffset += padding;
        // Store layout info for the second pass (writing data)
        const layoutEntry = {
            relativeOffset: currentOffset, // Offset relative to the start of packing
            size: itemSize,
            type: type,
            data: item,
            paddedStride: layoutInfo.paddedStride,
        };
        itemLayouts.push(layoutEntry);
        // Advance offset by the pre-calculated amount for this type
        currentOffset += layoutInfo.advanceAmount;
    }
    // --- Calculate final size needed for packing ---
    // The total size must be a multiple of the maximum alignment encountered
    const finalPadding = (maxAlignment - (currentOffset % maxAlignment)) % maxAlignment;
    const totalSizeNeeded = currentOffset + finalPadding;
    // --- Determine target buffer and base offset for writing ---
    let bufferToWrite;
    let baseWriteOffset;
    if (targetBuffer) {
        // Check if the provided buffer is large enough
        if (targetBuffer.byteLength < targetOffset + totalSizeNeeded) {
            throw new Error(`Target buffer is too small. Need ${totalSizeNeeded} bytes starting at offset ${targetOffset}, but buffer size is ${targetBuffer.byteLength} bytes.`);
        }
        bufferToWrite = targetBuffer;
        baseWriteOffset = targetOffset;
    }
    else {
        // Create a new buffer if none was provided
        bufferToWrite = new ArrayBuffer(totalSizeNeeded);
        baseWriteOffset = 0;
    }
    // --- Create views for the buffer we are writing to ---
    const bufferView = new DataView(bufferToWrite);
    const bufferAsFloats = new Float32Array(bufferToWrite);
    // --- Second Pass: Write data to the target buffer ---
    for (const layout of itemLayouts) {
        // Calculate the absolute byte offset in the target buffer
        const writeOffset = baseWriteOffset + layout.relativeOffset;
        const data = layout.data.value; // Cast for convenience, handle number below
        const type = layout.type;
        switch (type) {
            case "f32":
                // Write single float using DataView
                bufferView.setFloat32(writeOffset, layout.data.value, true); // true for littleEndian
                break;
            case "color":
                bufferAsFloats.set(layout.data.value.uniformValue(), writeOffset / 4);
                break;
            case "vec2":
            case "vec4":
            case "mat4": // mat4 columns are tightly packed in source and dest has same stride
                // Write Float32Array data directly using Float32Array view
                // Offset needs to be converted to float elements (writeOffset / 4 bytes_per_float)
                bufferAsFloats.set(data, writeOffset / 4);
                break;
            case "vec3":
                // Write vec3 data (3 floats) using Float32Array view
                // The buffer has space for 4 floats allocated, but we only write 3.
                bufferAsFloats.set(data, writeOffset / 4);
                break;
            case "mat3":
                // Write mat3 data column by column due to padding
                // Each vec3 column takes 12 bytes of data but occupies 16 bytes stride
                const columnStrideFloats = layout.paddedStride / 4; // 16 / 4 = 4 floats stride
                for (let i = 0; i < 3; ++i) {
                    // 3 columns
                    const sourceOffset = i * 3; // Source data is tightly packed (0, 3, 6)
                    // Calculate destination offset in float elements, relative to the start of the buffer
                    const destOffsetFloats = writeOffset / 4 + i * columnStrideFloats;
                    bufferAsFloats.set(data.subarray(sourceOffset, sourceOffset + 3), destOffsetFloats);
                }
                break;
            // Add cases for other types if supported
        }
    }
    // Return the buffer (either the one passed in or the newly created one)
    return bufferToWrite;
}
function uploadUniformBuffer(packedUniforms, device, label = "Uniform Buffer", buffer) {
    buffer !== null && buffer !== void 0 ? buffer : (buffer = device.createBuffer({
        label,
        size: packedUniforms.byteLength,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
    }));
    device.queue.writeBuffer(buffer, 0, packedUniforms, 0, packedUniforms.byteLength);
    return buffer;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZELGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUUwSDtBQUN6STs7Ozs7Ozs7Ozs7QUN4M0xhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCxzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQyxvQkFBb0IsbUJBQU8sQ0FBQyx3Q0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7Ozs7OztBQ3pDRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsR0FBRyx5QkFBeUIsR0FBRyxjQUFjO0FBQ3ZFLGVBQWUsbUJBQU8sQ0FBQyx3Q0FBVTtBQUNqQywwQ0FBeUMsRUFBRSxxQ0FBcUMsMkJBQTJCLEVBQUM7QUFDNUcsMkJBQTJCLG1CQUFPLENBQUMsZ0VBQXNCO0FBQ3pELHFEQUFvRCxFQUFFLHFDQUFxQyxrREFBa0QsRUFBQztBQUM5SSw0QkFBNEIsbUJBQU8sQ0FBQyxrRUFBdUI7QUFDM0Qsc0RBQXFELEVBQUUscUNBQXFDLG9EQUFvRCxFQUFDOzs7Ozs7Ozs7OztBQ1JwSTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEI7QUFDMUIsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMsd0NBQVU7QUFDbkM7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7Ozs7Ozs7Ozs7QUMxR2I7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCLHNCQUFzQixtQkFBTyxDQUFDLG1IQUFhO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHdDQUFVO0FBQ25DO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7Ozs7Ozs7Ozs7QUNsRlo7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiLHNCQUFzQixtQkFBTyxDQUFDLG1IQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7Ozs7Ozs7OztBQ2xCQTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0EsNEJBQTRCLDJFQUEyRTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyRUFBMkU7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RUFBd0U7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOEJBQThCO0FBQzlDO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyRUFBMkU7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0VBQXdFO0FBQ3BHO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQzFKTjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsbUJBQW1CLG1CQUFPLENBQUMsOENBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDakROO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixtQkFBbUIsbUJBQU8sQ0FBQyw4Q0FBWTtBQUN2QztBQUNBLCtCQUErQjtBQUMvQiw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQTBEO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7O0FDekdQO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUMvQkg7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLEdBQUcsbUJBQW1CLEdBQUcsb0JBQW9CO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QixnREFBK0MsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7QUFDdEgscUJBQXFCLG1CQUFPLENBQUMsc0RBQWdCO0FBQzdDLCtDQUE4QyxFQUFFLHFDQUFxQyxzQ0FBc0MsRUFBQztBQUM1SCxpQkFBaUIsbUJBQU8sQ0FBQyw4Q0FBWTtBQUNyQyw0Q0FBMkMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7Ozs7Ozs7Ozs7O0FDUnJHO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsaUJBQWlCLEdBQUcsYUFBYSxHQUFHLG9CQUFvQixHQUFHLHNCQUFzQixHQUFHLGFBQWEsR0FBRyxnQkFBZ0I7QUFDN0wsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsNENBQTJDLEVBQUUscUNBQXFDLCtCQUErQixFQUFDO0FBQ2xILGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQix5Q0FBd0MsRUFBRSxxQ0FBcUMseUJBQXlCLEVBQUM7QUFDekcsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsa0RBQWlELEVBQUUscUNBQXFDLG9DQUFvQyxFQUFDO0FBQzdILGdEQUErQyxFQUFFLHFDQUFxQyxrQ0FBa0MsRUFBQztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IseUNBQXdDLEVBQUUscUNBQXFDLHlCQUF5QixFQUFDO0FBQ3pHLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDLDZDQUE0QyxFQUFFLHFDQUFxQyxpQ0FBaUMsRUFBQztBQUNySCxjQUFjLGdCQUFnQixtQkFBTyxDQUFDLHVDQUFVO0FBQ2hELGdCQUFnQixnQkFBZ0IsbUJBQU8sQ0FBQywyQ0FBWTtBQUNwRCxnQkFBZ0IsZ0JBQWdCLG1CQUFPLENBQUMsNkNBQWE7QUFDckQsZUFBZSxnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBd0I7Ozs7Ozs7Ozs7O0FDbERsRDtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQixnQkFBZ0IsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUN0QyxtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBWTtBQUN2QywwQkFBMEIsbUJBQU8sQ0FBQyxvREFBb0I7QUFDdEQsc0NBQXNDLG1CQUFPLENBQUMseURBQXdCO0FBQ3RFLDhDQUE4QyxtQkFBTyxDQUFDLHlFQUFnQztBQUN0RjtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsRUFBRTtBQUNGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7QUMxQ2E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsZ0JBQWdCO0FBQ3RGLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFZO0FBQ3JDLDRDQUEyQyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNsSCx1QkFBdUIsbUJBQU8sQ0FBQywyREFBa0I7QUFDakQsaURBQWdELEVBQUUscUNBQXFDLDBDQUEwQyxFQUFDO0FBQ2xJLHdCQUF3QixtQkFBTyxDQUFDLDZEQUFtQjtBQUNuRCxrREFBaUQsRUFBRSxxQ0FBcUMsNENBQTRDLEVBQUM7QUFDckksb0JBQW9CLG1CQUFPLENBQUMscURBQWU7QUFDM0MsOENBQTZDLEVBQUUscUNBQXFDLG9DQUFvQyxFQUFDOzs7Ozs7Ozs7OztBQ1Y1RztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUNwQkg7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsbUJBQW1CLG1CQUFPLENBQUMsK0NBQVk7QUFDdkMsMEJBQTBCLG1CQUFPLENBQUMsb0RBQW9CO0FBQ3RELHNDQUFzQyxtQkFBTyxDQUFDLHlEQUF3QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7OztBQ2hDVDtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBWTtBQUN2QyxzQ0FBc0MsbUJBQU8sQ0FBQyx5REFBd0I7QUFDdEUsMkNBQTJDLG1CQUFPLENBQUMsbUVBQTZCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7QUFDRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN6QywwQkFBMEIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHdDQUF3QztBQUN2SDtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QixHQUFHLHVCQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7O0FDOUJDO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0MsOEJBQThCLG1CQUFPLENBQUMseUVBQThCO0FBQ3BFLDZCQUE2QixtQkFBTyxDQUFDLHVFQUE2QjtBQUNsRSxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakMsa0JBQWtCLG1CQUFPLENBQUMsbUNBQVc7QUFDckM7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDalJIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYixvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN6QyxzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQywwQkFBMEIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtEQUErRDtBQUM3RSxjQUFjLHlEQUF5RDtBQUN2RSxjQUFjLDZEQUE2RDtBQUMzRSxjQUFjLDREQUE0RDtBQUMxRSxjQUFjLCtDQUErQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkRBQTJEO0FBQ3hHLDZDQUE2QywrQ0FBK0M7QUFDNUYsNkNBQTZDLGlEQUFpRDtBQUM5Riw2Q0FBNkMsdUNBQXVDO0FBQ3BGLDZDQUE2QywrQ0FBK0M7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDaENiLGlFQUFlLGtCQUFrQix1QkFBdUIsb0VBQW9FLDJEQUEyRCwrREFBK0Qsa0JBQWtCLGlGQUFpRiw4RkFBOEYsNEdBQTRHLDRGQUE0RixrQkFBa0IsR0FBRyxvRUFBb0UsMEVBQTBFLGtDQUFrQyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDQTEwQixpRUFBZSx5QkFBeUIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsNEhBQTRILDBCQUEwQiwwQkFBMEIsNEVBQTRFLDBFQUEwRSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0FsYyxpRUFBZSxlQUFlLGlGQUFpRiw4RkFBOEYsNEdBQTRHLDRGQUE0RixrQkFBa0IsR0FBRyxvRUFBb0UscUNBQXFDLEdBQUcsR0FBRzs7Ozs7Ozs7OztBQ0E1Z0I7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLHNCQUFzQixHQUFHLHFCQUFxQixHQUFHLGVBQWU7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsK0NBQStDLG9CQUFvQixxQkFBcUIsNENBQTRDLElBQUksNENBQTRDO0FBQ3hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFNBQVM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQ0FBbUMsWUFBWSxlQUFlLElBQUksa0NBQWtDLGNBQWMsSUFBSSxpRUFBaUU7QUFDek87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQzlLUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDN0xKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0Qix3QkFBd0IsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QyxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsOEVBQThFO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsOEVBQThFO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7Ozs7Ozs7Ozs7O0FDM0lUO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQiwyQkFBMkI7QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakM7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXLHNEQUFzRDtBQUNqRSxZQUFZLHNEQUFzRDtBQUNsRSxZQUFZLDBEQUEwRDtBQUN0RSxZQUFZLDBEQUEwRDtBQUN0RSxhQUFhLDBEQUEwRDtBQUN2RSxZQUFZLDBEQUEwRDtBQUN0RSxZQUFZLDBEQUEwRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxXQUFXLHVCQUF1QixrQkFBa0I7QUFDL0g7QUFDQTtBQUNBO0FBQ0EseURBQXlELFdBQVcsdUJBQXVCLGtCQUFrQjtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLEtBQUs7QUFDdEU7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGlCQUFpQiwyQkFBMkIsYUFBYSx1QkFBdUIseUJBQXlCO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQzNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnlncHUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RpbnlncHUvLi9ub2RlX21vZHVsZXMvLnBucG0vd2dwdS1tYXRyaXhAMy40LjAvbm9kZV9tb2R1bGVzL3dncHUtbWF0cml4L2Rpc3QvMy54L3dncHUtbWF0cml4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NhbWVyYS9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jYW1lcmEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jYW1lcmEvb3J0aG9ncmFwaGljLWNhbWVyYS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NhbWVyYS9wZXJzcGVjdGl2ZS1jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jb2xvci50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NvbXB1dGUvY29tcHV0ZS10YXNrLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvZ2VvbWV0cnkvYmlnLXRyaWFuZ2xlLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvZ2VvbWV0cnkvY3ViZS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2dlb21ldHJ5L2dlb21ldHJ5LnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvZ2VvbWV0cnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL21hdGVyaWFscy9iYXNpYy1tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL21hdGVyaWFscy9pbmRleC50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL21hdGVyaWFscy9tYXRlcmlhbC50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL21hdGVyaWFscy9zaGFkZXItbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tYXRlcmlhbHMvdXYtbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tZXNoLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9zY2VuZS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3NoYWRlcnMvYmFzaWMtbWF0ZXJpYWwud2dzbCIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3NoYWRlcnMvaGVhZGVyLndnc2wiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9zaGFkZXJzL3V2LW1hdGVyaWFsLndnc2wiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy90ZXh0dXJlLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvdW5pZm9ybS1tYW5hZ2VyLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvdW5pZm9ybS11dGlscy50cyIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpbnlncHUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpbnlncHUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGlueWdwdS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RpbnlncHUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RpbnlncHUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlueWdwdVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aW55Z3B1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpbnlncHVcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyogd2dwdS1tYXRyaXhAMy40LjAsIGxpY2Vuc2UgTUlUICovXG5mdW5jdGlvbiB3cmFwQ29uc3RydWN0b3IoT3JpZ2luYWxDb25zdHJ1Y3RvciwgbW9kaWZpZXIpIHtcbiAgICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBPcmlnaW5hbENvbnN0cnVjdG9yIHtcbiAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgICAgICBtb2RpZmllcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH07IC8vIFR5cGUgYXNzZXJ0aW9uIGlzIG5lY2Vzc2FyeSBoZXJlXG59XG5jb25zdCBaZXJvQXJyYXkgPSB3cmFwQ29uc3RydWN0b3IoKEFycmF5KSwgYSA9PiBhLmZpbGwoMCkpO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjIgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5sZXQgRVBTSUxPTiA9IDAuMDAwMDAxO1xuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIGZvciBFUFNJTE9OIGZvciB2YXJpb3VzIGNoZWNrc1xuICogQHBhcmFtIHYgLSBWYWx1ZSB0byB1c2UgZm9yIEVQU0lMT04uXG4gKiBAcmV0dXJucyBwcmV2aW91cyB2YWx1ZSBvZiBFUFNJTE9OO1xuICovXG5mdW5jdGlvbiBzZXRFcHNpbG9uKHYpIHtcbiAgICBjb25zdCBvbGQgPSBFUFNJTE9OO1xuICAgIEVQU0lMT04gPSB2O1xuICAgIHJldHVybiBvbGQ7XG59XG4vKipcbiAqIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gKiBAcGFyYW0gZGVncmVlcyAtIEFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm5zIGFuZ2xlIGNvbnZlcnRlZCB0byByYWRpYW5zXG4gKi9cbmZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59XG4vKipcbiAqIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gKiBAcGFyYW0gcmFkaWFucyAtIEFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIGFuZ2xlIGNvbnZlcnRlZCB0byBkZWdyZWVzXG4gKi9cbmZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59XG4vKipcbiAqIExlcnBzIGJldHdlZW4gYSBhbmQgYiB2aWEgdFxuICogQHBhcmFtIGEgLSBzdGFydGluZyB2YWx1ZVxuICogQHBhcmFtIGIgLSBlbmRpbmcgdmFsdWVcbiAqIEBwYXJhbSB0IC0gdmFsdWUgd2hlcmUgMCA9IGEgYW5kIDEgPSBiXG4gKiBAcmV0dXJucyBhICsgKGIgLSBhKSAqIHRcbiAqL1xuZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogdDtcbn1cbi8qKlxuICogQ29tcHV0ZSB0aGUgb3Bwb3NpdGUgb2YgbGVycC4gR2l2ZW4gYSBhbmQgYiBhbmQgYSB2YWx1ZSBiZXR3ZWVuXG4gKiBhIGFuZCBiIHJldHVybnMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEuIDAgaWYgYSwgMSBpZiBiLlxuICogTm90ZTogbm8gY2xhbXBpbmcgaXMgZG9uZS5cbiAqIEBwYXJhbSBhIC0gc3RhcnQgdmFsdWVcbiAqIEBwYXJhbSBiIC0gZW5kIHZhbHVlXG4gKiBAcGFyYW0gdiAtIHZhbHVlIGJldHdlZW4gYSBhbmQgYlxuICogQHJldHVybnMgKHYgLSBhKSAvIChiIC0gYSlcbiAqL1xuZnVuY3Rpb24gaW52ZXJzZUxlcnAoYSwgYiwgdikge1xuICAgIGNvbnN0IGQgPSBiIC0gYTtcbiAgICByZXR1cm4gKE1hdGguYWJzKGIgLSBhKSA8IEVQU0lMT04pXG4gICAgICAgID8gYVxuICAgICAgICA6ICh2IC0gYSkgLyBkO1xufVxuLyoqXG4gKiBDb21wdXRlIHRoZSBldWNsaWRlYW4gbW9kdWxvXG4gKlxuICogYGBgXG4gKiAvLyB0YWJsZSBmb3IgbiAvIDNcbiAqIC01LCAtNCwgLTMsIC0yLCAtMSwgIDAsICAxLCAgMiwgIDMsICA0LCAgNSAgIDwtIG5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogLTIgIC0xICAtMCAgLTIgIC0xICAgMCwgIDEsICAyLCAgMCwgIDEsICAyICAgPC0gbiAlIDNcbiAqICAxICAgMiAgIDAgICAxICAgMiAgIDAsICAxLCAgMiwgIDAsICAxLCAgMiAgIDwtIGV1Y2xpZGVhbk1vZHVsZShuLCAzKVxuICogYGBgXG4gKlxuICogQHBhcmFtIG4gLSBkaXZpZGVuZFxuICogQHBhcmFtIG0gLSBkaXZpc29yXG4gKiBAcmV0dXJucyB0aGUgZXVjbGlkZWFuIG1vZHVsbyBvZiBuIC8gbVxuICovXG5mdW5jdGlvbiBldWNsaWRlYW5Nb2R1bG8obiwgbSkge1xuICAgIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxudmFyIHV0aWxzID0ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBnZXQgRVBTSUxPTiAoKSB7IHJldHVybiBFUFNJTE9OOyB9LFxuICAgIGRlZ1RvUmFkOiBkZWdUb1JhZCxcbiAgICBldWNsaWRlYW5Nb2R1bG86IGV1Y2xpZGVhbk1vZHVsbyxcbiAgICBpbnZlcnNlTGVycDogaW52ZXJzZUxlcnAsXG4gICAgbGVycDogbGVycCxcbiAgICByYWRUb0RlZzogcmFkVG9EZWcsXG4gICAgc2V0RXBzaWxvbjogc2V0RXBzaWxvblxufTtcblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW0gdHlwZWQgQVBJIGZvciBWZWMzXG4gKi9cbmZ1bmN0aW9uIGdldEFQSUltcGwkNShDdG9yKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIFZlYzI7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIE5vdGU6IFNpbmNlIHBhc3NpbmcgaW4gYSByYXcgSmF2YVNjcmlwdCBhcnJheVxuICAgICAqIGlzIHZhbGlkIGluIGFsbCBjaXJjdW1zdGFuY2VzLCBpZiB5b3Ugd2FudCB0b1xuICAgICAqIGZvcmNlIGEgSmF2YVNjcmlwdCBhcnJheSBpbnRvIGEgVmVjMidzIHNwZWNpZmllZCB0eXBlXG4gICAgICogaXQgd291bGQgYmUgZmFzdGVyIHRvIHVzZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY29uc3QgdiA9IHZlYzIuY2xvbmUoc29tZUpTQXJyYXkpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIHggLSBJbml0aWFsIHggdmFsdWUuXG4gICAgICogQHBhcmFtIHkgLSBJbml0aWFsIHkgdmFsdWUuXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlKHggPSAwLCB5ID0gMCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSBuZXcgQ3RvcigyKTtcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBWZWMyOyBtYXkgYmUgY2FsbGVkIHdpdGggeCwgeSwgeiB0byBzZXQgaW5pdGlhbCB2YWx1ZXMuIChzYW1lIGFzIGNyZWF0ZSlcbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBjb25zdCBmcm9tVmFsdWVzID0gY3JlYXRlO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlcyBvZiBhIFZlYzJcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjMi5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjMi5jb3B5fVxuICAgICAqXG4gICAgICogQHBhcmFtIHggZmlyc3QgdmFsdWVcbiAgICAgKiBAcGFyYW0geSBzZWNvbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHdpdGggaXRzIGVsZW1lbnRzIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXQoeCwgeSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguY2VpbCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGNlaWwgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2VpbCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguY2VpbCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5jZWlsKHZbMV0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguZmxvb3IgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBmbG9vciBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmbG9vcih2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguZmxvb3IodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguZmxvb3IodlsxXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgTWF0aC5yb3VuZCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHJvdW5kIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdW5kKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5yb3VuZCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5yb3VuZCh2WzFdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xhbXAgZWFjaCBlbGVtZW50IG9mIHZlY3RvciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gbWF4IC0gTWluIHZhbHVlLCBkZWZhdWx0IDBcbiAgICAgKiBAcGFyYW0gbWluIC0gTWF4IHZhbHVlLCBkZWZhdWx0IDFcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgdGhlIGNsYW1wZWQgdmFsdWUgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2xhbXAodiwgbWluID0gMCwgbWF4ID0gMSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlswXSkpO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlsxXSkpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgc3VtIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzLCBzY2FsaW5nIHRoZSAybmQ7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHNjYWxlIC0gQW1vdW50IHRvIHNjYWxlIGJcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHN1bSBvZiBhICsgYiAqIHNjYWxlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFNjYWxlZChhLCBiLCBzY2FsZSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIFRoZSBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdGhlIDIgdmVjdG9ycy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGF4ID0gYVswXTtcbiAgICAgICAgY29uc3QgYXkgPSBhWzFdO1xuICAgICAgICBjb25zdCBieCA9IGJbMF07XG4gICAgICAgIGNvbnN0IGJ5ID0gYlsxXTtcbiAgICAgICAgY29uc3QgbWFnMSA9IE1hdGguc3FydChheCAqIGF4ICsgYXkgKiBheSk7XG4gICAgICAgIGNvbnN0IG1hZzIgPSBNYXRoLnNxcnQoYnggKiBieCArIGJ5ICogYnkpO1xuICAgICAgICBjb25zdCBtYWcgPSBtYWcxICogbWFnMjtcbiAgICAgICAgY29uc3QgY29zaW5lID0gbWFnICYmIGRvdChhLCBiKSAvIG1hZztcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IHN1YiA9IHN1YnRyYWN0O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgdmVjdG9ycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHZlY3RvcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHNBcHByb3hpbWF0ZWx5KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IEVQU0lMT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgdmVjdG9ycyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHZlY3RvcnMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50LlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHZlY3RvciB0LCByZXR1cm5zXG4gICAgICogYSArIHQgKiAoYiAtIGEpLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnRzIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZXJwVihhLCBiLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyB0WzBdICogKGJbMF0gLSBhWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIHRbMV0gKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWF4IHZhbHVlcyBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgcmV0dXJuc1xuICAgICAqIFttYXgoYVswXSwgYlswXSksIG1heChhWzFdLCBiWzFdKSwgbWF4KGFbMl0sIGJbMl0pXS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF4IGNvbXBvbmVudHMgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1heChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1pbiB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWluKGFbMF0sIGJbMF0pLCBtaW4oYVsxXSwgYlsxXSksIG1pbihhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1pbiBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaW4oYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gKiBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdICogaztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhIHNjYWxhci4gKHNhbWUgYXMgbXVsU2NhbGFyKVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBzY2FsZSA9IG11bFNjYWxhcjtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXZTY2FsYXIodiwgaywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdIC8gaztcbiAgICAgICAgbmV3RHN0WzFdID0gdlsxXSAvIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludmVyc2UgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZlcnNlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMSAvIHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IDEgLyB2WzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnQgYSB2ZWN0b3IuIChzYW1lIGFzIGludmVyc2UpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBpbnZlcnQgPSBpbnZlcnNlO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gICAgICogdGhyZWUgZW50cmllcy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIGEgY3Jvc3MgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcm9zcyhhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYm90aCB2ZWN0b3JzIGhhdmVcbiAgICAgKiB0aHJlZSBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkb3QgcHJvZHVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVuZ3RoKHYpIHtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgbGVuZ3RoIG9mIHZlY3RvciAoc2FtZSBhcyBsZW5ndGgpXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZW5ndGhTcSh2KSB7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICByZXR1cm4gdjAgKiB2MCArIHYxICogdjE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IgKHNhbWUgYXMgbGVuZ3RoU3EpXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IGxlblNxID0gbGVuZ3RoU3E7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYVswXSAtIGJbMF07XG4gICAgICAgIGNvbnN0IGR5ID0gYVsxXSAtIGJbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyAoc2FtZSBhcyBkaXN0YW5jZSlcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBjb25zdCBkaXN0ID0gZGlzdGFuY2U7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzdGFuY2VTcShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYVswXSAtIGJbMF07XG4gICAgICAgIGNvbnN0IGR5ID0gYVsxXSAtIGJbMV07XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyAoc2FtZSBhcyBkaXN0YW5jZVNxKVxuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgY29uc3QgZGlzdFNxID0gZGlzdGFuY2VTcTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydCh2MCAqIHYwICsgdjEgKiB2MSk7XG4gICAgICAgIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB2MCAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxIC8gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBhIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyAtdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZWdhdGUodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAtdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gLXZbMV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIHZlY3Rvci4gKHNhbWUgYXMge0BsaW5rIHZlYzIuY2xvbmV9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayB2ZWMyLmNyZWF0ZX0gYW5kIHtAbGluayB2ZWMyLnNldH1cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb3B5KHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvbmVzIGEgdmVjdG9yLiAoc2FtZSBhcyB7QGxpbmsgdmVjMi5jb3B5fSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjMi5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjMi5zZXR9XG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIHYuXG4gICAgICovXG4gICAgY29uc3QgY2xvbmUgPSBjb3B5O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICogYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSAqIGJbMV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguIChzYW1lIGFzIG11bClcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHByb2R1Y3RzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBtdWwgPSBtdWx0aXBseTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcXVvdGllbnRzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXZpZGUoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdIC8gYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSAvIGJbMV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguIChzYW1lIGFzIGRpdmlkZSlcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgZGl2ID0gZGl2aWRlO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByYW5kb20gdW5pdCB2ZWN0b3IgKiBzY2FsZVxuICAgICAqIEBwYXJhbSBzY2FsZSAtIERlZmF1bHQgMVxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJhbmRvbSB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmFuZG9tKHNjYWxlID0gMSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5jb3MoYW5nbGUpICogc2NhbGU7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguc2luKGFuZ2xlKSAqIHNjYWxlO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBaZXJvJ3MgYSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB6ZXJvZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHplcm8oZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gVmVjMiBieSA0eDQgbWF0cml4XG4gICAgICogQHBhcmFtIHYgLSB0aGUgdmVjdG9yXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCBWZWMyIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NCh2LCBtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIGNvbnN0IHggPSB2WzBdO1xuICAgICAgICBjb25zdCB5ID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzBdID0geCAqIG1bMF0gKyB5ICogbVs0XSArIG1bMTJdO1xuICAgICAgICBuZXdEc3RbMV0gPSB4ICogbVsxXSArIHkgKiBtWzVdICsgbVsxM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBWZWMyIGJ5IDN4MyBtYXRyaXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2IC0gdGhlIHZlY3RvclxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gb3B0aW9uYWwgVmVjMiB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRyYW5zZm9ybWVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDModiwgbSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBjb25zdCB4ID0gdlswXTtcbiAgICAgICAgY29uc3QgeSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlIGEgMkQgdmVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjMiBwb2ludCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICAgICAqIEBwYXJhbSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAgICAgKiBAcmV0dXJucyB0aGUgcm90YXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGUoYSwgYiwgcmFkLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgICAgIGNvbnN0IHAwID0gYVswXSAtIGJbMF07XG4gICAgICAgIGNvbnN0IHAxID0gYVsxXSAtIGJbMV07XG4gICAgICAgIGNvbnN0IHNpbkMgPSBNYXRoLnNpbihyYWQpO1xuICAgICAgICBjb25zdCBjb3NDID0gTWF0aC5jb3MocmFkKTtcbiAgICAgICAgLy9wZXJmb3JtIHJvdGF0aW9uIGFuZCB0cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgICAgICBuZXdEc3RbMF0gPSBwMCAqIGNvc0MgLSBwMSAqIHNpbkMgKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBwMCAqIHNpbkMgKyBwMSAqIGNvc0MgKyBiWzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmVhdCBhIDJEIHZlY3RvciBhcyBhIGRpcmVjdGlvbiBhbmQgc2V0IGl0J3MgbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjMiB0byBsZW5ndGhlblxuICAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3RvclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGhlbmVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldExlbmd0aChhLCBsZW4sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbm9ybWFsaXplKGEsIG5ld0RzdCk7XG4gICAgICAgIHJldHVybiBtdWxTY2FsYXIobmV3RHN0LCBsZW4sIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuc3VyZSBhIHZlY3RvciBpcyBub3QgbG9uZ2VyIHRoYW4gYSBtYXggbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjMiB0byBsaW1pdFxuICAgICAqIEBwYXJhbSBtYXhMZW4gVGhlIGxvbmdlc3QgbGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yXG4gICAgICogQHJldHVybnMgVGhlIHZlY3Rvciwgc2hvcnRlbmVkIHRvIG1heExlbiBpZiBpdCdzIHRvbyBsb25nXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUoYSwgbWF4TGVuLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIGlmIChsZW5ndGgoYSkgPiBtYXhMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRMZW5ndGgoYSwgbWF4TGVuLCBuZXdEc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3B5KGEsIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGV4YWN0bHkgYmV0d2VlbiAyIGVuZHBvaW50IHZlY3RvcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIEVuZHBvaW50IDFcbiAgICAgKiBAcGFyYW0gYiBFbmRwb2ludCAyXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBleGFjdGx5IHJlc2lkaW5nIGJldHdlZW4gZW5kcG9pbnRzIDEgYW5kIDJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaWRwb2ludChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIHJldHVybiBsZXJwKGEsIGIsIDAuNSwgbmV3RHN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBmcm9tVmFsdWVzLFxuICAgICAgICBzZXQsXG4gICAgICAgIGNlaWwsXG4gICAgICAgIGZsb29yLFxuICAgICAgICByb3VuZCxcbiAgICAgICAgY2xhbXAsXG4gICAgICAgIGFkZCxcbiAgICAgICAgYWRkU2NhbGVkLFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgc3VidHJhY3QsXG4gICAgICAgIHN1YixcbiAgICAgICAgZXF1YWxzQXBwcm94aW1hdGVseSxcbiAgICAgICAgZXF1YWxzLFxuICAgICAgICBsZXJwLFxuICAgICAgICBsZXJwVixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIG11bFNjYWxhcixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIGRpdlNjYWxhcixcbiAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgaW52ZXJ0LFxuICAgICAgICBjcm9zcyxcbiAgICAgICAgZG90LFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGxlbixcbiAgICAgICAgbGVuZ3RoU3EsXG4gICAgICAgIGxlblNxLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgZGlzdCxcbiAgICAgICAgZGlzdGFuY2VTcSxcbiAgICAgICAgZGlzdFNxLFxuICAgICAgICBub3JtYWxpemUsXG4gICAgICAgIG5lZ2F0ZSxcbiAgICAgICAgY29weSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIG11bHRpcGx5LFxuICAgICAgICBtdWwsXG4gICAgICAgIGRpdmlkZSxcbiAgICAgICAgZGl2LFxuICAgICAgICByYW5kb20sXG4gICAgICAgIHplcm8sXG4gICAgICAgIHRyYW5zZm9ybU1hdDQsXG4gICAgICAgIHRyYW5zZm9ybU1hdDMsXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgc2V0TGVuZ3RoLFxuICAgICAgICB0cnVuY2F0ZSxcbiAgICAgICAgbWlkcG9pbnQsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlJDUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRBUEkkNShDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlJDUuZ2V0KEN0b3IpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICAgIGFwaSA9IGdldEFQSUltcGwkNShDdG9yKTtcbiAgICAgICAgY2FjaGUkNS5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW0gdHlwZWQgQVBJIGZvciBWZWMzXG4gKiAqL1xuZnVuY3Rpb24gZ2V0QVBJSW1wbCQ0KEN0b3IpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdmVjMzsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB4IC0gSW5pdGlhbCB4IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IC0gSW5pdGlhbCB5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IC0gSW5pdGlhbCB6IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSh4LCB5LCB6KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IG5ldyBDdG9yKDMpO1xuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IHk7XG4gICAgICAgICAgICAgICAgaWYgKHogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdmVjMzsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLiAoc2FtZSBhcyBjcmVhdGUpXG4gICAgICogQHBhcmFtIHggLSBJbml0aWFsIHggdmFsdWUuXG4gICAgICogQHBhcmFtIHkgLSBJbml0aWFsIHkgdmFsdWUuXG4gICAgICogQHBhcmFtIHogLSBJbml0aWFsIHogdmFsdWUuXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgY29uc3QgZnJvbVZhbHVlcyA9IGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZXMgb2YgYSBWZWMzXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzMuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzMuY29weX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IGZpcnN0IHZhbHVlXG4gICAgICogQHBhcmFtIHkgc2Vjb25kIHZhbHVlXG4gICAgICogQHBhcmFtIHogdGhpcmQgdmFsdWVcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHdpdGggaXRzIGVsZW1lbnRzIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXQoeCwgeSwgeiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguY2VpbCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGNlaWwgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2VpbCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguY2VpbCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5jZWlsKHZbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLmNlaWwodlsyXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgTWF0aC5mbG9vciB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGZsb29yIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZsb29yKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5mbG9vcih2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5mbG9vcih2WzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5mbG9vcih2WzJdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBNYXRoLnJvdW5kIHRvIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgcm91bmQgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm91bmQodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLnJvdW5kKHZbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnJvdW5kKHZbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLnJvdW5kKHZbMl0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGFtcCBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgICAgKiBAcGFyYW0gdiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBtYXggLSBNaW4gdmFsdWUsIGRlZmF1bHQgMFxuICAgICAqIEBwYXJhbSBtaW4gLSBNYXggdmFsdWUsIGRlZmF1bHQgMVxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCB0aGUgY2xhbXBlZCB2YWx1ZSBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbGFtcCh2LCBtaW4gPSAwLCBtYXggPSAxLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2WzBdKSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2WzFdKSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2WzJdKSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBzdW0gb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGQoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzLCBzY2FsaW5nIHRoZSAybmQ7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHNjYWxlIC0gQW1vdW50IHRvIHNjYWxlIGJcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHN1bSBvZiBhICsgYiAqIHNjYWxlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFNjYWxlZChhLCBiLCBzY2FsZSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIFRoZSBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdGhlIDIgdmVjdG9ycy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGF4ID0gYVswXTtcbiAgICAgICAgY29uc3QgYXkgPSBhWzFdO1xuICAgICAgICBjb25zdCBheiA9IGFbMl07XG4gICAgICAgIGNvbnN0IGJ4ID0gYlswXTtcbiAgICAgICAgY29uc3QgYnkgPSBiWzFdO1xuICAgICAgICBjb25zdCBieiA9IGJbMl07XG4gICAgICAgIGNvbnN0IG1hZzEgPSBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkgKyBheiAqIGF6KTtcbiAgICAgICAgY29uc3QgbWFnMiA9IE1hdGguc3FydChieCAqIGJ4ICsgYnkgKiBieSArIGJ6ICogYnopO1xuICAgICAgICBjb25zdCBtYWcgPSBtYWcxICogbWFnMjtcbiAgICAgICAgY29uc3QgY29zaW5lID0gbWFnICYmIGRvdChhLCBiKSAvIG1hZztcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzQXBwcm94aW1hdGVseShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhWzBdIC0gYlswXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzJdIC0gYlsyXSkgPCBFUFNJTE9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50LlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIHQgKiAoYlsyXSAtIGFbMl0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdmVjdG9yIHQsIHJldHVybnNcbiAgICAgKiBhICsgdCAqIChiIC0gYSkuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB0IC0gSW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudHMgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlcnBWKGEsIGIsIHQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIHRbMF0gKiAoYlswXSAtIGFbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgdFsxXSAqIChiWzFdIC0gYVsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyB0WzJdICogKGJbMl0gLSBhWzJdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1heCB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWF4KGFbMF0sIGJbMF0pLCBtYXgoYVsxXSwgYlsxXSksIG1heChhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1heCBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXgoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gbWluIHZhbHVlcyBvZiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgcmV0dXJuc1xuICAgICAqIFttaW4oYVswXSwgYlswXSksIG1pbihhWzFdLCBiWzFdKSwgbWluKGFbMl0sIGJbMl0pXS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWluIGNvbXBvbmVudHMgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1pbihhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gKiBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdICogaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAqIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuIChzYW1lIGFzIG11bFNjYWxhcilcbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3Qgc2NhbGUgPSBtdWxTY2FsYXI7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2U2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAvIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gLyBrO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdIC8gaztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52ZXJzZSBhIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgaW52ZXJ0ZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGludmVyc2UodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSAxIC8gdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gMSAvIHZbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IDEgLyB2WzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnQgYSB2ZWN0b3IuIChzYW1lIGFzIGludmVyc2UpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBpbnZlcnQgPSBpbnZlcnNlO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gICAgICogdGhyZWUgZW50cmllcy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIGEgY3Jvc3MgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcm9zcyhhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHQxID0gYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXTtcbiAgICAgICAgY29uc3QgdDIgPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdO1xuICAgICAgICBuZXdEc3RbMV0gPSB0MTtcbiAgICAgICAgbmV3RHN0WzJdID0gdDI7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICAgICAqIHRocmVlIGVudHJpZXMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRvdCBwcm9kdWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhWzBdICogYlswXSkgKyAoYVsxXSAqIGJbMV0pICsgKGFbMl0gKiBiWzJdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3IgKHNhbWUgYXMgbGVuZ3RoKVxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVuZ3RoU3Eodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICByZXR1cm4gdjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yIChzYW1lIGFzIGxlbmd0aFNxKVxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBsZW5TcSA9IGxlbmd0aFNxO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgICAgICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBjb25zdCBkeiA9IGFbMl0gLSBiWzJdO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkeik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzIChzYW1lIGFzIGRpc3RhbmNlKVxuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXN0YW5jZVNxKGEsIGIpIHtcbiAgICAgICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICAgICAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkejtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyAoc2FtZSBhcyBkaXN0YW5jZVNxKVxuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgY29uc3QgZGlzdFNxID0gZGlzdGFuY2VTcTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2Mik7XG4gICAgICAgIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB2MCAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxIC8gbGVuO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gdjIgLyBsZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBhIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyAtdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZWdhdGUodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSAtdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gLXZbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IC12WzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSB2ZWN0b3IuIChzYW1lIGFzIHtAbGluayB2ZWMzLmNsb25lfSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjMy5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjMy5zZXR9XG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29weSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHZbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb25lcyBhIHZlY3Rvci4gKHNhbWUgYXMge0BsaW5rIHZlYzMuY29weX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzMuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzMuc2V0fVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiB2LlxuICAgICAqL1xuICAgIGNvbnN0IGNsb25lID0gY29weTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcHJvZHVjdHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAqIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKiBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICogYlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC4gKHNhbWUgYXMgbXVsKVxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcHJvZHVjdHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IG11bCA9IG11bHRpcGx5O1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpdmlkZShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gLyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAvIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguIChzYW1lIGFzIGRpdmlkZSlcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgZGl2ID0gZGl2aWRlO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSByYW5kb20gdmVjdG9yXG4gICAgICogQHBhcmFtIHNjYWxlIC0gRGVmYXVsdCAxXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcmFuZG9tIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByYW5kb20oc2NhbGUgPSAxLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCB6ID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgICBjb25zdCB6U2NhbGUgPSBNYXRoLnNxcnQoMSAtIHogKiB6KSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLmNvcyhhbmdsZSkgKiB6U2NhbGU7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguc2luKGFuZ2xlKSAqIHpTY2FsZTtcbiAgICAgICAgbmV3RHN0WzJdID0geiAqIHNjYWxlO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBaZXJvJ3MgYSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB6ZXJvZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHplcm8oZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB0cmFuc2Zvcm0gdmVjMyBieSA0eDQgbWF0cml4XG4gICAgICogQHBhcmFtIHYgLSB0aGUgdmVjdG9yXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NCh2LCBtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHggPSB2WzBdO1xuICAgICAgICBjb25zdCB5ID0gdlsxXTtcbiAgICAgICAgY29uc3QgeiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHcgPSAobVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdKSB8fCAxO1xuICAgICAgICBuZXdEc3RbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgICAgICAgbmV3RHN0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gICAgICAgIG5ld0RzdFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHZlYzMgYnkgdXBwZXIgM3gzIG1hdHJpeCBpbnNpZGUgNHg0IG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSBkaXJlY3Rpb24uXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDRVcHBlcjN4Myh2LCBtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIG5ld0RzdFswXSA9IHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgdmVjMyBieSAzeDMgbWF0cml4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdiAtIHRoZSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG9wdGlvbmFsIHZlYzMgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKHYsIG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgeCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHkgPSB2WzFdO1xuICAgICAgICBjb25zdCB6ID0gdlsyXTtcbiAgICAgICAgbmV3RHN0WzBdID0geCAqIG1bMF0gKyB5ICogbVs0XSArIHogKiBtWzhdO1xuICAgICAgICBuZXdEc3RbMV0gPSB4ICogbVsxXSArIHkgKiBtWzVdICsgeiAqIG1bOV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHggKiBtWzJdICsgeSAqIG1bNl0gKyB6ICogbVsxMF07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgdmVjMyBieSBRdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHYgLSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICAgICAqIEBwYXJhbSBxIC0gdGhlIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIGJ5XG4gICAgICogQHBhcmFtIGRzdCAtIG9wdGlvbmFsIHZlYzMgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQodiwgcSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCBxeCA9IHFbMF07XG4gICAgICAgIGNvbnN0IHF5ID0gcVsxXTtcbiAgICAgICAgY29uc3QgcXogPSBxWzJdO1xuICAgICAgICBjb25zdCB3MiA9IHFbM10gKiAyO1xuICAgICAgICBjb25zdCB4ID0gdlswXTtcbiAgICAgICAgY29uc3QgeSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHogPSB2WzJdO1xuICAgICAgICBjb25zdCB1dlggPSBxeSAqIHogLSBxeiAqIHk7XG4gICAgICAgIGNvbnN0IHV2WSA9IHF6ICogeCAtIHF4ICogejtcbiAgICAgICAgY29uc3QgdXZaID0gcXggKiB5IC0gcXkgKiB4O1xuICAgICAgICBuZXdEc3RbMF0gPSB4ICsgdXZYICogdzIgKyAocXkgKiB1dlogLSBxeiAqIHV2WSkgKiAyO1xuICAgICAgICBuZXdEc3RbMV0gPSB5ICsgdXZZICogdzIgKyAocXogKiB1dlggLSBxeCAqIHV2WikgKiAyO1xuICAgICAgICBuZXdEc3RbMl0gPSB6ICsgdXZaICogdzIgKyAocXggKiB1dlkgLSBxeSAqIHV2WCkgKiAyO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSA0LWJ5LTQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggM1xuICAgICAqIGVudHJpZXMuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVsxMl07XG4gICAgICAgIG5ld0RzdFsxXSA9IG1bMTNdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtWzE0XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBheGlzIG9mIGEgNHg0IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllc1xuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYXhpcyAtIFRoZSBheGlzIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gICAgICogQHJldHVybnMgVGhlIGF4aXMgY29tcG9uZW50IG9mIG0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0QXhpcyhtLCBheGlzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IG9mZiA9IGF4aXMgKiA0O1xuICAgICAgICBuZXdEc3RbMF0gPSBtW29mZiArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtW29mZiArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtW29mZiArIDJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGNvbXBvbmVudCBvZiB0aGUgbWF0cml4XG4gICAgICogQHBhcmFtIG0gLSBUaGUgTWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNjYWxpbmcobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCB4eCA9IG1bMF07XG4gICAgICAgIGNvbnN0IHh5ID0gbVsxXTtcbiAgICAgICAgY29uc3QgeHogPSBtWzJdO1xuICAgICAgICBjb25zdCB5eCA9IG1bNF07XG4gICAgICAgIGNvbnN0IHl5ID0gbVs1XTtcbiAgICAgICAgY29uc3QgeXogPSBtWzZdO1xuICAgICAgICBjb25zdCB6eCA9IG1bOF07XG4gICAgICAgIGNvbnN0IHp5ID0gbVs5XTtcbiAgICAgICAgY29uc3QgenogPSBtWzEwXTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5zcXJ0KHh4ICogeHggKyB4eSAqIHh5ICsgeHogKiB4eik7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguc3FydCh5eCAqIHl4ICsgeXkgKiB5eSArIHl6ICogeXopO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLnNxcnQoenggKiB6eCArIHp5ICogenkgKyB6eiAqIHp6KTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHJvdGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWChhLCBiLCByYWQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICBjb25zdCByID0gW107XG4gICAgICAgIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICAgICAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBwWzFdID0gYVsxXSAtIGJbMV07XG4gICAgICAgIHBbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgLy9wZXJmb3JtIHJvdGF0aW9uXG4gICAgICAgIHJbMF0gPSBwWzBdO1xuICAgICAgICByWzFdID0gcFsxXSAqIE1hdGguY29zKHJhZCkgLSBwWzJdICogTWF0aC5zaW4ocmFkKTtcbiAgICAgICAgclsyXSA9IHBbMV0gKiBNYXRoLnNpbihyYWQpICsgcFsyXSAqIE1hdGguY29zKHJhZCk7XG4gICAgICAgIC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICAgICAgbmV3RHN0WzBdID0gclswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHJbMV0gKyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSByWzJdICsgYlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeS1heGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHJvdGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWShhLCBiLCByYWQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgcCA9IFtdO1xuICAgICAgICBjb25zdCByID0gW107XG4gICAgICAgIC8vIHRyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgICAgIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgICAgICAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBwWzJdID0gYVsyXSAtIGJbMl07XG4gICAgICAgIC8vIHBlcmZvcm0gcm90YXRpb25cbiAgICAgICAgclswXSA9IHBbMl0gKiBNYXRoLnNpbihyYWQpICsgcFswXSAqIE1hdGguY29zKHJhZCk7XG4gICAgICAgIHJbMV0gPSBwWzFdO1xuICAgICAgICByWzJdID0gcFsyXSAqIE1hdGguY29zKHJhZCkgLSBwWzBdICogTWF0aC5zaW4ocmFkKTtcbiAgICAgICAgLy8gdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICAgICAgbmV3RHN0WzBdID0gclswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHJbMV0gKyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSByWzJdICsgYlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgei1heGlzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMge3ZlYzN9IG91dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVooYSwgYiwgcmFkLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAvLyB0cmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgICAgICBwWzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgICAgICAvLyBwZXJmb3JtIHJvdGF0aW9uXG4gICAgICAgIHJbMF0gPSBwWzBdICogTWF0aC5jb3MocmFkKSAtIHBbMV0gKiBNYXRoLnNpbihyYWQpO1xuICAgICAgICByWzFdID0gcFswXSAqIE1hdGguc2luKHJhZCkgKyBwWzFdICogTWF0aC5jb3MocmFkKTtcbiAgICAgICAgclsyXSA9IHBbMl07XG4gICAgICAgIC8vIHRyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICAgIG5ld0RzdFswXSA9IHJbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSByWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gclsyXSArIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyZWF0IGEgM0QgdmVjdG9yIGFzIGEgZGlyZWN0aW9uIGFuZCBzZXQgaXQncyBsZW5ndGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIFRoZSB2ZWMzIHRvIGxlbmd0aGVuXG4gICAgICogQHBhcmFtIGxlbiBUaGUgbGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aGVuZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0TGVuZ3RoKGEsIGxlbiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBub3JtYWxpemUoYSwgbmV3RHN0KTtcbiAgICAgICAgcmV0dXJuIG11bFNjYWxhcihuZXdEc3QsIGxlbiwgbmV3RHN0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5zdXJlIGEgdmVjdG9yIGlzIG5vdCBsb25nZXIgdGhhbiBhIG1heCBsZW5ndGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIFRoZSB2ZWMzIHRvIGxpbWl0XG4gICAgICogQHBhcmFtIG1heExlbiBUaGUgbG9uZ2VzdCBsZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yLCBzaG9ydGVuZWQgdG8gbWF4TGVuIGlmIGl0J3MgdG9vIGxvbmdcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cnVuY2F0ZShhLCBtYXhMZW4sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgaWYgKGxlbmd0aChhKSA+IG1heExlbikge1xuICAgICAgICAgICAgcmV0dXJuIHNldExlbmd0aChhLCBtYXhMZW4sIG5ld0RzdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcHkoYSwgbmV3RHN0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSB2ZWN0b3IgZXhhY3RseSBiZXR3ZWVuIDIgZW5kcG9pbnQgdmVjdG9yc1xuICAgICAqXG4gICAgICogQHBhcmFtIGEgRW5kcG9pbnQgMVxuICAgICAqIEBwYXJhbSBiIEVuZHBvaW50IDJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIGV4YWN0bHkgcmVzaWRpbmcgYmV0d2VlbiBlbmRwb2ludHMgMSBhbmQgMlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1pZHBvaW50KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgcmV0dXJuIGxlcnAoYSwgYiwgMC41LCBuZXdEc3QpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGZyb21WYWx1ZXMsXG4gICAgICAgIHNldCxcbiAgICAgICAgY2VpbCxcbiAgICAgICAgZmxvb3IsXG4gICAgICAgIHJvdW5kLFxuICAgICAgICBjbGFtcCxcbiAgICAgICAgYWRkLFxuICAgICAgICBhZGRTY2FsZWQsXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBzdWJ0cmFjdCxcbiAgICAgICAgc3ViLFxuICAgICAgICBlcXVhbHNBcHByb3hpbWF0ZWx5LFxuICAgICAgICBlcXVhbHMsXG4gICAgICAgIGxlcnAsXG4gICAgICAgIGxlcnBWLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgbXVsU2NhbGFyLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgZGl2U2NhbGFyLFxuICAgICAgICBpbnZlcnNlLFxuICAgICAgICBpbnZlcnQsXG4gICAgICAgIGNyb3NzLFxuICAgICAgICBkb3QsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbGVuLFxuICAgICAgICBsZW5ndGhTcSxcbiAgICAgICAgbGVuU3EsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBkaXN0LFxuICAgICAgICBkaXN0YW5jZVNxLFxuICAgICAgICBkaXN0U3EsXG4gICAgICAgIG5vcm1hbGl6ZSxcbiAgICAgICAgbmVnYXRlLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjbG9uZSxcbiAgICAgICAgbXVsdGlwbHksXG4gICAgICAgIG11bCxcbiAgICAgICAgZGl2aWRlLFxuICAgICAgICBkaXYsXG4gICAgICAgIHJhbmRvbSxcbiAgICAgICAgemVybyxcbiAgICAgICAgdHJhbnNmb3JtTWF0NCxcbiAgICAgICAgdHJhbnNmb3JtTWF0NFVwcGVyM3gzLFxuICAgICAgICB0cmFuc2Zvcm1NYXQzLFxuICAgICAgICB0cmFuc2Zvcm1RdWF0LFxuICAgICAgICBnZXRUcmFuc2xhdGlvbixcbiAgICAgICAgZ2V0QXhpcyxcbiAgICAgICAgZ2V0U2NhbGluZyxcbiAgICAgICAgcm90YXRlWCxcbiAgICAgICAgcm90YXRlWSxcbiAgICAgICAgcm90YXRlWixcbiAgICAgICAgc2V0TGVuZ3RoLFxuICAgICAgICB0cnVuY2F0ZSxcbiAgICAgICAgbWlkcG9pbnQsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlJDQgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRBUEkkNChDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlJDQuZ2V0KEN0b3IpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICAgIGFwaSA9IGdldEFQSUltcGwkNChDdG9yKTtcbiAgICAgICAgY2FjaGUkNC5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0eXBlZCBBUEkgZm9yIE1hdDNcbiAqICovXG5mdW5jdGlvbiBnZXRBUElJbXBsJDMoQ3Rvcikge1xuICAgIGNvbnN0IHZlYzIgPSBnZXRBUEkkNShDdG9yKTtcbiAgICBjb25zdCB2ZWMzID0gZ2V0QVBJJDQoQ3Rvcik7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgTWF0MyBmcm9tIHZhbHVlc1xuICAgICAqXG4gICAgICogTm90ZTogU2luY2UgcGFzc2luZyBpbiBhIHJhdyBKYXZhU2NyaXB0IGFycmF5XG4gICAgICogaXMgdmFsaWQgaW4gYWxsIGNpcmN1bXN0YW5jZXMsIGlmIHlvdSB3YW50IHRvXG4gICAgICogZm9yY2UgYSBKYXZhU2NyaXB0IGFycmF5IGludG8gYSBNYXQzJ3Mgc3BlY2lmaWVkIHR5cGVcbiAgICAgKiBpdCB3b3VsZCBiZSBmYXN0ZXIgdG8gdXNlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBtID0gbWF0My5jbG9uZShzb21lSlNBcnJheSk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdjAgLSB2YWx1ZSBmb3IgZWxlbWVudCAwXG4gICAgICogQHBhcmFtIHYxIC0gdmFsdWUgZm9yIGVsZW1lbnQgMVxuICAgICAqIEBwYXJhbSB2MiAtIHZhbHVlIGZvciBlbGVtZW50IDJcbiAgICAgKiBAcGFyYW0gdjMgLSB2YWx1ZSBmb3IgZWxlbWVudCAzXG4gICAgICogQHBhcmFtIHY0IC0gdmFsdWUgZm9yIGVsZW1lbnQgNFxuICAgICAqIEBwYXJhbSB2NSAtIHZhbHVlIGZvciBlbGVtZW50IDVcbiAgICAgKiBAcGFyYW0gdjYgLSB2YWx1ZSBmb3IgZWxlbWVudCA2XG4gICAgICogQHBhcmFtIHY3IC0gdmFsdWUgZm9yIGVsZW1lbnQgN1xuICAgICAqIEBwYXJhbSB2OCAtIHZhbHVlIGZvciBlbGVtZW50IDhcbiAgICAgKiBAcmV0dXJucyBtYXRyaXggY3JlYXRlZCBmcm9tIHZhbHVlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUodjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSBuZXcgQ3RvcigxMik7XG4gICAgICAgIC8vIHRvIG1ha2UgdGhlIGFycmF5IGhvbW9nZW5vdXNcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIGlmICh2MCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB2MDtcbiAgICAgICAgICAgIGlmICh2MSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0gdjE7XG4gICAgICAgICAgICAgICAgaWYgKHYyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gdjI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2MyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbNF0gPSB2MztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2NCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzVdID0gdjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY1ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzZdID0gdjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2NiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbOF0gPSB2NjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2NyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzldID0gdjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzEwXSA9IHY4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZXMgb2YgYSBNYXQzXG4gICAgICogQWxzbyBzZWUge0BsaW5rIG1hdDMuY3JlYXRlfSBhbmQge0BsaW5rIG1hdDMuY29weX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2MCAtIHZhbHVlIGZvciBlbGVtZW50IDBcbiAgICAgKiBAcGFyYW0gdjEgLSB2YWx1ZSBmb3IgZWxlbWVudCAxXG4gICAgICogQHBhcmFtIHYyIC0gdmFsdWUgZm9yIGVsZW1lbnQgMlxuICAgICAqIEBwYXJhbSB2MyAtIHZhbHVlIGZvciBlbGVtZW50IDNcbiAgICAgKiBAcGFyYW0gdjQgLSB2YWx1ZSBmb3IgZWxlbWVudCA0XG4gICAgICogQHBhcmFtIHY1IC0gdmFsdWUgZm9yIGVsZW1lbnQgNVxuICAgICAqIEBwYXJhbSB2NiAtIHZhbHVlIGZvciBlbGVtZW50IDZcbiAgICAgKiBAcGFyYW0gdjcgLSB2YWx1ZSBmb3IgZWxlbWVudCA3XG4gICAgICogQHBhcmFtIHY4IC0gdmFsdWUgZm9yIGVsZW1lbnQgOFxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0MyBzZXQgZnJvbSB2YWx1ZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0KHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHYwO1xuICAgICAgICBuZXdEc3RbMV0gPSB2MTtcbiAgICAgICAgbmV3RHN0WzJdID0gdjI7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IHYzO1xuICAgICAgICBuZXdEc3RbNV0gPSB2NDtcbiAgICAgICAgbmV3RHN0WzZdID0gdjU7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHY2O1xuICAgICAgICBuZXdEc3RbOV0gPSB2NztcbiAgICAgICAgbmV3RHN0WzEwXSA9IHY4O1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1hdDMgZnJvbSB0aGUgdXBwZXIgbGVmdCAzeDMgcGFydCBvZiBhIE1hdDRcbiAgICAgKiBAcGFyYW0gbTQgLSBzb3VyY2UgbWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBNYXQzIG1hZGUgZnJvbSBtNFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21NYXQ0KG00LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBtNFswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbTRbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IG00WzJdO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSBtNFs0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gbTRbNV07XG4gICAgICAgIG5ld0RzdFs2XSA9IG00WzZdO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSBtNFs4XTtcbiAgICAgICAgbmV3RHN0WzldID0gbTRbOV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSBtNFsxMF07XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTWF0MyByb3RhdGlvbiBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gcSAtIHF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBNYXQzIG1hZGUgZnJvbSBxXG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJvbVF1YXQocSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgY29uc3QgeCA9IHFbMF07XG4gICAgICAgIGNvbnN0IHkgPSBxWzFdO1xuICAgICAgICBjb25zdCB6ID0gcVsyXTtcbiAgICAgICAgY29uc3QgdyA9IHFbM107XG4gICAgICAgIGNvbnN0IHgyID0geCArIHg7XG4gICAgICAgIGNvbnN0IHkyID0geSArIHk7XG4gICAgICAgIGNvbnN0IHoyID0geiArIHo7XG4gICAgICAgIGNvbnN0IHh4ID0geCAqIHgyO1xuICAgICAgICBjb25zdCB5eCA9IHkgKiB4MjtcbiAgICAgICAgY29uc3QgeXkgPSB5ICogeTI7XG4gICAgICAgIGNvbnN0IHp4ID0geiAqIHgyO1xuICAgICAgICBjb25zdCB6eSA9IHogKiB5MjtcbiAgICAgICAgY29uc3QgenogPSB6ICogejI7XG4gICAgICAgIGNvbnN0IHd4ID0gdyAqIHgyO1xuICAgICAgICBjb25zdCB3eSA9IHcgKiB5MjtcbiAgICAgICAgY29uc3Qgd3ogPSB3ICogejI7XG4gICAgICAgIG5ld0RzdFswXSA9IDEgLSB5eSAtIHp6O1xuICAgICAgICBuZXdEc3RbMV0gPSB5eCArIHd6O1xuICAgICAgICBuZXdEc3RbMl0gPSB6eCAtIHd5O1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSB5eCAtIHd6O1xuICAgICAgICBuZXdEc3RbNV0gPSAxIC0geHggLSB6ejtcbiAgICAgICAgbmV3RHN0WzZdID0genkgKyB3eDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0genggKyB3eTtcbiAgICAgICAgbmV3RHN0WzldID0genkgLSB3eDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBhIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyAtbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZWdhdGUobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLW1bMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC1tWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAtbVsyXTtcbiAgICAgICAgbmV3RHN0WzRdID0gLW1bNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IC1tWzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSAtbVs2XTtcbiAgICAgICAgbmV3RHN0WzhdID0gLW1bOF07XG4gICAgICAgIG5ld0RzdFs5XSA9IC1tWzldO1xuICAgICAgICBuZXdEc3RbMTBdID0gLW1bMTBdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSBhIG1hdHJpeCBieSBhIHNjYWxhciBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBzIC0gdGhlIHNjYWxhclxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgbSAqIHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIobSwgcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVswXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxXSA9IG1bMV0gKiBzO1xuICAgICAgICBuZXdEc3RbMl0gPSBtWzJdICogcztcbiAgICAgICAgbmV3RHN0WzRdID0gbVs0XSAqIHM7XG4gICAgICAgIG5ld0RzdFs1XSA9IG1bNV0gKiBzO1xuICAgICAgICBuZXdEc3RbNl0gPSBtWzZdICogcztcbiAgICAgICAgbmV3RHN0WzhdID0gbVs4XSAqIHM7XG4gICAgICAgIG5ld0RzdFs5XSA9IG1bOV0gKiBzO1xuICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF0gKiBzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBtdWx0aXBseSBhIG1hdHJpeCBieSBhIHNjYWxhciBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBzIC0gdGhlIHNjYWxhclxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgbSAqIHMuXG4gICAgICovXG4gICAgY29uc3QgbXVsU2NhbGFyID0gbXVsdGlwbHlTY2FsYXI7XG4gICAgLyoqXG4gICAgICogYWRkIDIgbWF0cmljZXMuXG4gICAgICogQHBhcmFtIGEgLSBtYXRyaXggMS5cbiAgICAgKiBAcGFyYW0gYiAtIG1hdHJpeCAyLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgYSArIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIGJbMl07XG4gICAgICAgIG5ld0RzdFs0XSA9IGFbNF0gKyBiWzRdO1xuICAgICAgICBuZXdEc3RbNV0gPSBhWzVdICsgYls1XTtcbiAgICAgICAgbmV3RHN0WzZdID0gYVs2XSArIGJbNl07XG4gICAgICAgIG5ld0RzdFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgICAgICBuZXdEc3RbOV0gPSBhWzldICsgYls5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIG1hdHJpeC4gKHNhbWUgYXMge0BsaW5rIG1hdDMuY2xvbmV9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayBtYXQzLmNyZWF0ZX0gYW5kIHtAbGluayBtYXQzLnNldH1cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSBtYXRyaXguIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIG0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29weShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBtWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtWzJdO1xuICAgICAgICBuZXdEc3RbNF0gPSBtWzRdO1xuICAgICAgICBuZXdEc3RbNV0gPSBtWzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSBtWzZdO1xuICAgICAgICBuZXdEc3RbOF0gPSBtWzhdO1xuICAgICAgICBuZXdEc3RbOV0gPSBtWzldO1xuICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIG1hdHJpeCAoc2FtZSBhcyB7QGxpbmsgbWF0My5jb3B5fSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgbWF0My5jcmVhdGV9IGFuZCB7QGxpbmsgbWF0My5zZXR9XG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiBtLlxuICAgICAqL1xuICAgIGNvbnN0IGNsb25lID0gY29weTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIG1hdHJpY2VzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHBhcmFtIGIgT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBtYXRyaWNlcyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFsc0FwcHJveGltYXRlbHkoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYVswXSAtIGJbMF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxXSAtIGJbMV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsyXSAtIGJbMl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs0XSAtIGJbNF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs1XSAtIGJbNV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs2XSAtIGJbNl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs4XSAtIGJbOF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs5XSAtIGJbOV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxMF0gLSBiWzEwXSkgPCBFUFNJTE9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIG1hdHJpY2VzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHBhcmFtIGIgT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBtYXRyaWNlcyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmXG4gICAgICAgICAgICBhWzFdID09PSBiWzFdICYmXG4gICAgICAgICAgICBhWzJdID09PSBiWzJdICYmXG4gICAgICAgICAgICBhWzRdID09PSBiWzRdICYmXG4gICAgICAgICAgICBhWzVdID09PSBiWzVdICYmXG4gICAgICAgICAgICBhWzZdID09PSBiWzZdICYmXG4gICAgICAgICAgICBhWzhdID09PSBiWzhdICYmXG4gICAgICAgICAgICBhWzldID09PSBiWzldICYmXG4gICAgICAgICAgICBhWzEwXSA9PT0gYlsxMF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgaWRlbnRpdHkgbWF0cml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIDMtYnktMyBpZGVudGl0eSBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSB0cmFuc3Bvc2Ugb2YgYSBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZSBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zcG9zZShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBpZiAobmV3RHN0ID09PSBtKSB7XG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIC8vIDAgMSAyXG4gICAgICAgICAgICAvLyA0IDUgNlxuICAgICAgICAgICAgLy8gOCA5IDEwXG4gICAgICAgICAgICB0ID0gbVsxXTtcbiAgICAgICAgICAgIG1bMV0gPSBtWzRdO1xuICAgICAgICAgICAgbVs0XSA9IHQ7XG4gICAgICAgICAgICB0ID0gbVsyXTtcbiAgICAgICAgICAgIG1bMl0gPSBtWzhdO1xuICAgICAgICAgICAgbVs4XSA9IHQ7XG4gICAgICAgICAgICB0ID0gbVs2XTtcbiAgICAgICAgICAgIG1bNl0gPSBtWzldO1xuICAgICAgICAgICAgbVs5XSA9IHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFswXSA9IG0wMDtcbiAgICAgICAgbmV3RHN0WzFdID0gbTEwO1xuICAgICAgICBuZXdEc3RbMl0gPSBtMjA7XG4gICAgICAgIG5ld0RzdFs0XSA9IG0wMTtcbiAgICAgICAgbmV3RHN0WzVdID0gbTExO1xuICAgICAgICBuZXdEc3RbNl0gPSBtMjE7XG4gICAgICAgIG5ld0RzdFs4XSA9IG0wMjtcbiAgICAgICAgbmV3RHN0WzldID0gbTEyO1xuICAgICAgICBuZXdEc3RbMTBdID0gbTIyO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDMtYnktMyBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVyc2Ugb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZlcnNlKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IGIwMSA9IG0yMiAqIG0xMSAtIG0xMiAqIG0yMTtcbiAgICAgICAgY29uc3QgYjExID0gLW0yMiAqIG0xMCArIG0xMiAqIG0yMDtcbiAgICAgICAgY29uc3QgYjIxID0gbTIxICogbTEwIC0gbTExICogbTIwO1xuICAgICAgICBjb25zdCBpbnZEZXQgPSAxIC8gKG0wMCAqIGIwMSArIG0wMSAqIGIxMSArIG0wMiAqIGIyMSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGIwMSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzFdID0gKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpICogaW52RGV0O1xuICAgICAgICBuZXdEc3RbMl0gPSAobTEyICogbTAxIC0gbTAyICogbTExKSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzRdID0gYjExICogaW52RGV0O1xuICAgICAgICBuZXdEc3RbNV0gPSAobTIyICogbTAwIC0gbTAyICogbTIwKSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzZdID0gKC1tMTIgKiBtMDAgKyBtMDIgKiBtMTApICogaW52RGV0O1xuICAgICAgICBuZXdEc3RbOF0gPSBiMjEgKiBpbnZEZXQ7XG4gICAgICAgIG5ld0RzdFs5XSA9ICgtbTIxICogbTAwICsgbTAxICogbTIwKSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IChtMTEgKiBtMDAgLSBtMDEgKiBtMTApICogaW52RGV0O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICAgICAqIEBwYXJhbSBtIC0gdGhlIG1hdHJpeFxuICAgICAqIEByZXR1cm5zIHRoZSBkZXRlcm1pbmFudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRldGVybWluYW50KG0pIHtcbiAgICAgICAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgcmV0dXJuIG0wMCAqIChtMTEgKiBtMjIgLSBtMjEgKiBtMTIpIC1cbiAgICAgICAgICAgIG0xMCAqIChtMDEgKiBtMjIgLSBtMjEgKiBtMDIpICtcbiAgICAgICAgICAgIG0yMCAqIChtMDEgKiBtMTIgLSBtMTEgKiBtMDIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDMtYnktMyBtYXRyaXguIChzYW1lIGFzIGludmVyc2UpXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVyc2Ugb2YgbS5cbiAgICAgKi9cbiAgICBjb25zdCBpbnZlcnQgPSBpbnZlcnNlO1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdHdvIDMtYnktMyBtYXRyaWNlcyB3aXRoIGEgb24gdGhlIGxlZnQgYW5kIGIgb24gdGhlIHJpZ2h0XG4gICAgICogQHBhcmFtIGEgLSBUaGUgbWF0cml4IG9uIHRoZSBsZWZ0LlxuICAgICAqIEBwYXJhbSBiIC0gVGhlIG1hdHJpeCBvbiB0aGUgcmlnaHQuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBhMDAgPSBhWzBdO1xuICAgICAgICBjb25zdCBhMDEgPSBhWzFdO1xuICAgICAgICBjb25zdCBhMDIgPSBhWzJdO1xuICAgICAgICBjb25zdCBhMTAgPSBhWzQgKyAwXTtcbiAgICAgICAgY29uc3QgYTExID0gYVs0ICsgMV07XG4gICAgICAgIGNvbnN0IGExMiA9IGFbNCArIDJdO1xuICAgICAgICBjb25zdCBhMjAgPSBhWzggKyAwXTtcbiAgICAgICAgY29uc3QgYTIxID0gYVs4ICsgMV07XG4gICAgICAgIGNvbnN0IGEyMiA9IGFbOCArIDJdO1xuICAgICAgICBjb25zdCBiMDAgPSBiWzBdO1xuICAgICAgICBjb25zdCBiMDEgPSBiWzFdO1xuICAgICAgICBjb25zdCBiMDIgPSBiWzJdO1xuICAgICAgICBjb25zdCBiMTAgPSBiWzQgKyAwXTtcbiAgICAgICAgY29uc3QgYjExID0gYls0ICsgMV07XG4gICAgICAgIGNvbnN0IGIxMiA9IGJbNCArIDJdO1xuICAgICAgICBjb25zdCBiMjAgPSBiWzggKyAwXTtcbiAgICAgICAgY29uc3QgYjIxID0gYls4ICsgMV07XG4gICAgICAgIGNvbnN0IGIyMiA9IGJbOCArIDJdO1xuICAgICAgICBuZXdEc3RbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDI7XG4gICAgICAgIG5ld0RzdFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMjtcbiAgICAgICAgbmV3RHN0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyO1xuICAgICAgICBuZXdEc3RbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTI7XG4gICAgICAgIG5ld0RzdFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMjtcbiAgICAgICAgbmV3RHN0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyO1xuICAgICAgICBuZXdEc3RbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gICAgICAgIG5ld0RzdFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gMy1ieS0zIG1hdHJpY2VzIHdpdGggYSBvbiB0aGUgbGVmdCBhbmQgYiBvbiB0aGUgcmlnaHQgKHNhbWUgYXMgbXVsdGlwbHkpXG4gICAgICogQHBhcmFtIGEgLSBUaGUgbWF0cml4IG9uIHRoZSBsZWZ0LlxuICAgICAqIEBwYXJhbSBiIC0gVGhlIG1hdHJpeCBvbiB0aGUgcmlnaHQuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBtdWwgPSBtdWx0aXBseTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSAzLWJ5LTMgbWF0cml4IHRvIHRoZSBnaXZlblxuICAgICAqIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB3aXRoIHRyYW5zbGF0aW9uIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGlvbihhLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBpZGVudGl0eSgpKTtcbiAgICAgICAgaWYgKGEgIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gYVswXTtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IGFbMV07XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBhWzJdO1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gYVs0XTtcbiAgICAgICAgICAgIG5ld0RzdFs1XSA9IGFbNV07XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBhWzZdO1xuICAgICAgICB9XG4gICAgICAgIG5ld0RzdFs4XSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFs5XSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSAzLWJ5LTMgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggM1xuICAgICAqIGVudHJpZXMuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzIuY3JlYXRlKCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBtWzhdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzldO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGF4aXMgb2YgYSAzeDMgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMiBlbnRyaWVzXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXMgMCA9IHgsIDEgPSB5LFxuICAgICAqIEByZXR1cm5zIFRoZSBheGlzIGNvbXBvbmVudCBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF4aXMobSwgYXhpcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMi5jcmVhdGUoKSk7XG4gICAgICAgIGNvbnN0IG9mZiA9IGF4aXMgKiA0O1xuICAgICAgICBuZXdEc3RbMF0gPSBtW29mZiArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtW29mZiArIDFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGF4aXMgb2YgYSAzeDMgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMiBlbnRyaWVzXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSB2IC0gdGhlIGF4aXMgdmVjdG9yXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpcyAgMCA9IHgsIDEgPSB5O1xuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgbWF0cml4IHRvIHNldC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHdpdGggYXhpcyBzZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QXhpcyhtLCB2LCBheGlzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA9PT0gbSA/IG0gOiBjb3B5KG0sIGRzdCkpO1xuICAgICAgICBjb25zdCBvZmYgPSBheGlzICogNDtcbiAgICAgICAgbmV3RHN0W29mZiArIDBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0W29mZiArIDFdID0gdlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgXCIyZFwiIHNjYWxpbmcgY29tcG9uZW50IG9mIHRoZSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBNYXRyaXhcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U2NhbGluZyhtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyB2ZWMyLmNyZWF0ZSgpKTtcbiAgICAgICAgY29uc3QgeHggPSBtWzBdO1xuICAgICAgICBjb25zdCB4eSA9IG1bMV07XG4gICAgICAgIGNvbnN0IHl4ID0gbVs0XTtcbiAgICAgICAgY29uc3QgeXkgPSBtWzVdO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLnNxcnQoeHggKiB4eCArIHh5ICogeHkpO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnNxcnQoeXggKiB5eCArIHl5ICogeXkpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBcIjNkXCIgc2NhbGluZyBjb21wb25lbnQgb2YgdGhlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBtIC0gVGhlIE1hdHJpeFxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgdmVjdG9yIHRvIHNldC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXQzRFNjYWxpbmcobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMy5jcmVhdGUoKSk7XG4gICAgICAgIGNvbnN0IHh4ID0gbVswXTtcbiAgICAgICAgY29uc3QgeHkgPSBtWzFdO1xuICAgICAgICBjb25zdCB4eiA9IG1bMl07XG4gICAgICAgIGNvbnN0IHl4ID0gbVs0XTtcbiAgICAgICAgY29uc3QgeXkgPSBtWzVdO1xuICAgICAgICBjb25zdCB5eiA9IG1bNl07XG4gICAgICAgIGNvbnN0IHp4ID0gbVs4XTtcbiAgICAgICAgY29uc3QgenkgPSBtWzldO1xuICAgICAgICBjb25zdCB6eiA9IG1bMTBdO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLnNxcnQoeHggKiB4eCArIHh5ICogeHkgKyB4eiAqIHh6KTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5zcXJ0KHl4ICogeXggKyB5eSAqIHl5ICsgeXogKiB5eik7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGguc3FydCh6eCAqIHp4ICsgenkgKiB6eSArIHp6ICogenopO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCB0cmFuc2xhdGVzIGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IgYnkgd2hpY2ggdG8gdHJhbnNsYXRlLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGlvbih2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSAxO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbOV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBieSB0aGUgZ2l2ZW4gdmVjdG9yIHYuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3RvciBieSB3aGljaCB0byB0cmFuc2xhdGUuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKG0sIHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzJdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSBtMDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSBtMDE7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBtMDI7XG4gICAgICAgICAgICBuZXdEc3RbNF0gPSBtMTA7XG4gICAgICAgICAgICBuZXdEc3RbNV0gPSBtMTE7XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBtMTI7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RHN0WzhdID0gbTAwICogdjAgKyBtMTAgKiB2MSArIG0yMDtcbiAgICAgICAgbmV3RHN0WzldID0gbTAxICogdjAgKyBtMTEgKiB2MSArIG0yMTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IG0wMiAqIHYwICsgbTEyICogdjEgKyBtMjI7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgbWF0cml4IHdoaWNoIHJvdGF0ZXMgIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb24oYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGM7XG4gICAgICAgIG5ld0RzdFsxXSA9IHM7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IC1zO1xuICAgICAgICBuZXdEc3RbNV0gPSBjO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCAgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGUobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICAgICAgICBuZXdEc3RbMV0gPSBjICogbTAxICsgcyAqIG0xMTtcbiAgICAgICAgbmV3RHN0WzJdID0gYyAqIG0wMiArIHMgKiBtMTI7XG4gICAgICAgIG5ld0RzdFs0XSA9IGMgKiBtMTAgLSBzICogbTAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBjICogbTExIC0gcyAqIG0wMTtcbiAgICAgICAgbmV3RHN0WzZdID0gYyAqIG0xMiAtIHMgKiBtMDI7XG4gICAgICAgIGlmIChtICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFs4XSA9IG1bOF07XG4gICAgICAgICAgICBuZXdEc3RbOV0gPSBtWzldO1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IG1bMTBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGlvblgoYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IGM7XG4gICAgICAgIG5ld0RzdFs2XSA9IHM7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IC1zO1xuICAgICAgICBuZXdEc3RbMTBdID0gYztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWChtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgY29uc3QgbTEwID0gbVs0XTtcbiAgICAgICAgY29uc3QgbTExID0gbVs1XTtcbiAgICAgICAgY29uc3QgbTEyID0gbVs2XTtcbiAgICAgICAgY29uc3QgbTIwID0gbVs4XTtcbiAgICAgICAgY29uc3QgbTIxID0gbVs5XTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsxMF07XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFs0XSA9IGMgKiBtMTAgKyBzICogbTIwO1xuICAgICAgICBuZXdEc3RbNV0gPSBjICogbTExICsgcyAqIG0yMTtcbiAgICAgICAgbmV3RHN0WzZdID0gYyAqIG0xMiArIHMgKiBtMjI7XG4gICAgICAgIG5ld0RzdFs4XSA9IGMgKiBtMjAgLSBzICogbTEwO1xuICAgICAgICBuZXdEc3RbOV0gPSBjICogbTIxIC0gcyAqIG0xMTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGMgKiBtMjIgLSBzICogbTEyO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSBtWzBdO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gbVsxXTtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IG1bMl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDMtYnktMyBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uWShhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYztcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gLXM7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHM7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiAzLWJ5LTMgbWF0cml4IGFyb3VuZCB0aGUgeS1heGlzIGJ5IHRoZSBnaXZlblxuICAgICAqIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGVZKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjICogbTAwIC0gcyAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzFdID0gYyAqIG0wMSAtIHMgKiBtMjE7XG4gICAgICAgIG5ld0RzdFsyXSA9IGMgKiBtMDIgLSBzICogbTIyO1xuICAgICAgICBuZXdEc3RbOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgICAgICAgbmV3RHN0WzldID0gYyAqIG0yMSArIHMgKiBtMDE7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjICogbTIyICsgcyAqIG0wMjtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gbVs0XTtcbiAgICAgICAgICAgIG5ld0RzdFs1XSA9IG1bNV07XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBtWzZdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBjb25zdCByb3RhdGlvblogPSByb3RhdGlvbjtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiAzLWJ5LTMgbWF0cml4IGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlblxuICAgICAqIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBjb25zdCByb3RhdGVaID0gcm90YXRlO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgbWF0cml4IHdoaWNoIHNjYWxlcyBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnQgZ2l2ZW4gYnlcbiAgICAgKiB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzIHR3b1xuICAgICAqIGVudHJpZXMuXG4gICAgICogQHBhcmFtIHYgLSBBIHZlY3RvciBvZlxuICAgICAqICAgICAyIGVudHJpZXMgc3BlY2lmeWluZyB0aGUgZmFjdG9yIGJ5IHdoaWNoIHRvIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxpbmcgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjYWxpbmcodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnRcbiAgICAgKiBnaXZlbiBieSB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzXG4gICAgICogdHdvIGVudHJpZXMuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4IHRvIGJlIG1vZGlmaWVkLlxuICAgICAqIEBwYXJhbSB2IC0gQSB2ZWN0b3Igb2YgMiBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlXG4gICAgICogICAgIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjYWxlKG0sIHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHYwICogbVswICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbNF0gPSB2MSAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gdjEgKiBtWzEgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHYxICogbVsxICogNCArIDJdO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBtWzhdO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCBzY2FsZXMgaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50IGdpdmVuIGJ5XG4gICAgICogdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhcyB0aHJlZVxuICAgICAqIGVudHJpZXMuXG4gICAgICogQHBhcmFtIHYgLSBBIHZlY3RvciBvZlxuICAgICAqICAgICAzIGVudHJpZXMgc3BlY2lmeWluZyB0aGUgZmFjdG9yIGJ5IHdoaWNoIHRvIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxpbmcgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjYWxpbmczRCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gdlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSBnaXZlbiAzLWJ5LTMgbWF0cml4IGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudFxuICAgICAqIGdpdmVuIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXNcbiAgICAgKiB0aHJlZSBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gdiAtIEEgdmVjdG9yIG9mIDMgZW50cmllcyBzcGVjaWZ5aW5nIHRoZVxuICAgICAqICAgICBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsZTNEKG0sIHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIG5ld0RzdFswXSA9IHYwICogbVswICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB2MCAqIG1bMCAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFs0XSA9IHYxICogbVsxICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbNV0gPSB2MSAqIG1bMSAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gdjEgKiBtWzEgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFs4XSA9IHYyICogbVsyICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbOV0gPSB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHYyICogbVsyICogNCArIDJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCBzY2FsZXMgdW5pZm9ybWx5IGluIHRoZSBYIGFuZCBZIGRpbWVuc2lvbnNcbiAgICAgKiBAcGFyYW0gcyAtIEFtb3VudCB0byBzY2FsZVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxpbmcgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaWZvcm1TY2FsaW5nKHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHM7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHM7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggaW4gdGhlIFggYW5kIFkgZGltZW5zaW9uIGJ5IGFuIGFtb3VudFxuICAgICAqIGdpdmVuLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gcyAtIEFtb3VudCB0byBzY2FsZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaWZvcm1TY2FsZShtLCBzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzICogbVswICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBzICogbVswICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBzICogbVswICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbNF0gPSBzICogbVsxICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbNV0gPSBzICogbVsxICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbNl0gPSBzICogbVsxICogNCArIDJdO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBtWzhdO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCBzY2FsZXMgdW5pZm9ybWx5IGluIGVhY2ggZGltZW5zaW9uXG4gICAgICogQHBhcmFtIHMgLSBBbW91bnQgdG8gc2NhbGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmlmb3JtU2NhbGluZzNEKHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHM7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHM7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50XG4gICAgICogZ2l2ZW4uXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4IHRvIGJlIG1vZGlmaWVkLlxuICAgICAqIEBwYXJhbSBzIC0gQW1vdW50IHRvIHNjYWxlLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5pZm9ybVNjYWxlM0QobSwgcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcyAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gcyAqIG1bMCAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gcyAqIG1bMCAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzRdID0gcyAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gcyAqIG1bMSAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gcyAqIG1bMSAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzhdID0gcyAqIG1bMiAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzldID0gcyAqIG1bMiAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHMgKiBtWzIgKiA0ICsgMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIGNvcHksXG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgZGV0ZXJtaW5hbnQsXG4gICAgICAgIGVxdWFscyxcbiAgICAgICAgZXF1YWxzQXBwcm94aW1hdGVseSxcbiAgICAgICAgZnJvbU1hdDQsXG4gICAgICAgIGZyb21RdWF0LFxuICAgICAgICBnZXQzRFNjYWxpbmcsXG4gICAgICAgIGdldEF4aXMsXG4gICAgICAgIGdldFNjYWxpbmcsXG4gICAgICAgIGdldFRyYW5zbGF0aW9uLFxuICAgICAgICBpZGVudGl0eSxcbiAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgaW52ZXJ0LFxuICAgICAgICBtdWwsXG4gICAgICAgIG11bFNjYWxhcixcbiAgICAgICAgbXVsdGlwbHksXG4gICAgICAgIG11bHRpcGx5U2NhbGFyLFxuICAgICAgICBuZWdhdGUsXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgcm90YXRlWCxcbiAgICAgICAgcm90YXRlWSxcbiAgICAgICAgcm90YXRlWixcbiAgICAgICAgcm90YXRpb24sXG4gICAgICAgIHJvdGF0aW9uWCxcbiAgICAgICAgcm90YXRpb25ZLFxuICAgICAgICByb3RhdGlvblosXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBzY2FsZTNELFxuICAgICAgICBzY2FsaW5nLFxuICAgICAgICBzY2FsaW5nM0QsXG4gICAgICAgIHNldCxcbiAgICAgICAgc2V0QXhpcyxcbiAgICAgICAgc2V0VHJhbnNsYXRpb24sXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgICAgdHJhbnNsYXRpb24sXG4gICAgICAgIHRyYW5zcG9zZSxcbiAgICAgICAgdW5pZm9ybVNjYWxlLFxuICAgICAgICB1bmlmb3JtU2NhbGUzRCxcbiAgICAgICAgdW5pZm9ybVNjYWxpbmcsXG4gICAgICAgIHVuaWZvcm1TY2FsaW5nM0QsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlJDMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRBUEkkMyhDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlJDMuZ2V0KEN0b3IpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICAgIGFwaSA9IGdldEFQSUltcGwkMyhDdG9yKTtcbiAgICAgICAgY2FjaGUkMy5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0eXBlZCBBUEkgZm9yIE1hdDRcbiAqICovXG5mdW5jdGlvbiBnZXRBUElJbXBsJDIoQ3Rvcikge1xuICAgIGNvbnN0IHZlYzMgPSBnZXRBUEkkNChDdG9yKTtcbiAgICAvKipcbiAgICAgKiA0eDQgTWF0cml4IG1hdGggbWF0aCBmdW5jdGlvbnMuXG4gICAgICpcbiAgICAgKiBBbG1vc3QgYWxsIGZ1bmN0aW9ucyB0YWtlIGFuIG9wdGlvbmFsIGBuZXdEc3RgIGFyZ3VtZW50LiBJZiBpdCBpcyBub3QgcGFzc2VkIGluIHRoZVxuICAgICAqIGZ1bmN0aW9ucyB3aWxsIGNyZWF0ZSBhIG5ldyBtYXRyaXguIEluIG90aGVyIHdvcmRzIHlvdSBjYW4gZG8gdGhpc1xuICAgICAqXG4gICAgICogICAgIGNvbnN0IG1hdCA9IG1hdDQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTsgIC8vIENyZWF0ZXMgYSBuZXcgdHJhbnNsYXRpb24gbWF0cml4XG4gICAgICpcbiAgICAgKiBvclxuICAgICAqXG4gICAgICogICAgIGNvbnN0IG1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gICAgICogICAgIG1hdDQudHJhbnNsYXRpb24oWzEsIDIsIDNdLCBtYXQpOyAgLy8gUHV0cyB0cmFuc2xhdGlvbiBtYXRyaXggaW4gbWF0LlxuICAgICAqXG4gICAgICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICAgICAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAgICAgKlxuICAgICAqIEl0IGlzIGFsd2F5cyBzYXZlIHRvIHBhc3MgYW55IG1hdHJpeCBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gICAgICpcbiAgICAgKiAgICAgY29uc3QgbWF0ID0gbWF0NC5pZGVudGl0eSgpO1xuICAgICAqICAgICBjb25zdCB0cmFucyA9IG1hdDQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTtcbiAgICAgKiAgICAgbWF0NC5tdWx0aXBseShtYXQsIHRyYW5zLCBtYXQpOyAgLy8gTXVsdGlwbGllcyBtYXQgKiB0cmFucyBhbmQgcHV0cyByZXN1bHQgaW4gbWF0LlxuICAgICAqXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgTWF0NCBmcm9tIHZhbHVlc1xuICAgICAqXG4gICAgICogTm90ZTogU2luY2UgcGFzc2luZyBpbiBhIHJhdyBKYXZhU2NyaXB0IGFycmF5XG4gICAgICogaXMgdmFsaWQgaW4gYWxsIGNpcmN1bXN0YW5jZXMsIGlmIHlvdSB3YW50IHRvXG4gICAgICogZm9yY2UgYSBKYXZhU2NyaXB0IGFycmF5IGludG8gYSBNYXQ0J3Mgc3BlY2lmaWVkIHR5cGVcbiAgICAgKiBpdCB3b3VsZCBiZSBmYXN0ZXIgdG8gdXNlXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjb25zdCBtID0gbWF0NC5jbG9uZShzb21lSlNBcnJheSk7XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdjAgLSB2YWx1ZSBmb3IgZWxlbWVudCAwXG4gICAgICogQHBhcmFtIHYxIC0gdmFsdWUgZm9yIGVsZW1lbnQgMVxuICAgICAqIEBwYXJhbSB2MiAtIHZhbHVlIGZvciBlbGVtZW50IDJcbiAgICAgKiBAcGFyYW0gdjMgLSB2YWx1ZSBmb3IgZWxlbWVudCAzXG4gICAgICogQHBhcmFtIHY0IC0gdmFsdWUgZm9yIGVsZW1lbnQgNFxuICAgICAqIEBwYXJhbSB2NSAtIHZhbHVlIGZvciBlbGVtZW50IDVcbiAgICAgKiBAcGFyYW0gdjYgLSB2YWx1ZSBmb3IgZWxlbWVudCA2XG4gICAgICogQHBhcmFtIHY3IC0gdmFsdWUgZm9yIGVsZW1lbnQgN1xuICAgICAqIEBwYXJhbSB2OCAtIHZhbHVlIGZvciBlbGVtZW50IDhcbiAgICAgKiBAcGFyYW0gdjkgLSB2YWx1ZSBmb3IgZWxlbWVudCA5XG4gICAgICogQHBhcmFtIHYxMCAtIHZhbHVlIGZvciBlbGVtZW50IDEwXG4gICAgICogQHBhcmFtIHYxMSAtIHZhbHVlIGZvciBlbGVtZW50IDExXG4gICAgICogQHBhcmFtIHYxMiAtIHZhbHVlIGZvciBlbGVtZW50IDEyXG4gICAgICogQHBhcmFtIHYxMyAtIHZhbHVlIGZvciBlbGVtZW50IDEzXG4gICAgICogQHBhcmFtIHYxNCAtIHZhbHVlIGZvciBlbGVtZW50IDE0XG4gICAgICogQHBhcmFtIHYxNSAtIHZhbHVlIGZvciBlbGVtZW50IDE1XG4gICAgICogQHJldHVybnMgY3JlYXRlZCBmcm9tIHZhbHVlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUodjAsIHYxLCB2MiwgdjMsIHY0LCB2NSwgdjYsIHY3LCB2OCwgdjksIHYxMCwgdjExLCB2MTIsIHYxMywgdjE0LCB2MTUpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gbmV3IEN0b3IoMTYpO1xuICAgICAgICBpZiAodjAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjA7XG4gICAgICAgICAgICBpZiAodjEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxO1xuICAgICAgICAgICAgICAgIGlmICh2MiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IHYyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodjMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gdjM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodjQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs0XSA9IHY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2NSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs1XSA9IHY1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzZdID0gdjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs3XSA9IHY3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2OCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs4XSA9IHY4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzldID0gdjk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjEwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTBdID0gdjEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2MTEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTFdID0gdjExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjEyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFsxMl0gPSB2MTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjEzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTNdID0gdjEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2MTQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTRdID0gdjE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjE1ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFsxNV0gPSB2MTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWVzIG9mIGEgTWF0NFxuICAgICAqIEFsc28gc2VlIHtAbGluayBtYXQ0LmNyZWF0ZX0gYW5kIHtAbGluayBtYXQ0LmNvcHl9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdjAgLSB2YWx1ZSBmb3IgZWxlbWVudCAwXG4gICAgICogQHBhcmFtIHYxIC0gdmFsdWUgZm9yIGVsZW1lbnQgMVxuICAgICAqIEBwYXJhbSB2MiAtIHZhbHVlIGZvciBlbGVtZW50IDJcbiAgICAgKiBAcGFyYW0gdjMgLSB2YWx1ZSBmb3IgZWxlbWVudCAzXG4gICAgICogQHBhcmFtIHY0IC0gdmFsdWUgZm9yIGVsZW1lbnQgNFxuICAgICAqIEBwYXJhbSB2NSAtIHZhbHVlIGZvciBlbGVtZW50IDVcbiAgICAgKiBAcGFyYW0gdjYgLSB2YWx1ZSBmb3IgZWxlbWVudCA2XG4gICAgICogQHBhcmFtIHY3IC0gdmFsdWUgZm9yIGVsZW1lbnQgN1xuICAgICAqIEBwYXJhbSB2OCAtIHZhbHVlIGZvciBlbGVtZW50IDhcbiAgICAgKiBAcGFyYW0gdjkgLSB2YWx1ZSBmb3IgZWxlbWVudCA5XG4gICAgICogQHBhcmFtIHYxMCAtIHZhbHVlIGZvciBlbGVtZW50IDEwXG4gICAgICogQHBhcmFtIHYxMSAtIHZhbHVlIGZvciBlbGVtZW50IDExXG4gICAgICogQHBhcmFtIHYxMiAtIHZhbHVlIGZvciBlbGVtZW50IDEyXG4gICAgICogQHBhcmFtIHYxMyAtIHZhbHVlIGZvciBlbGVtZW50IDEzXG4gICAgICogQHBhcmFtIHYxNCAtIHZhbHVlIGZvciBlbGVtZW50IDE0XG4gICAgICogQHBhcmFtIHYxNSAtIHZhbHVlIGZvciBlbGVtZW50IDE1XG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBNYXQ0IGNyZWF0ZWQgZnJvbSB2YWx1ZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0KHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5LCB2MTAsIHYxMSwgdjEyLCB2MTMsIHYxNCwgdjE1LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MDtcbiAgICAgICAgbmV3RHN0WzFdID0gdjE7XG4gICAgICAgIG5ld0RzdFsyXSA9IHYyO1xuICAgICAgICBuZXdEc3RbM10gPSB2MztcbiAgICAgICAgbmV3RHN0WzRdID0gdjQ7XG4gICAgICAgIG5ld0RzdFs1XSA9IHY1O1xuICAgICAgICBuZXdEc3RbNl0gPSB2NjtcbiAgICAgICAgbmV3RHN0WzddID0gdjc7XG4gICAgICAgIG5ld0RzdFs4XSA9IHY4O1xuICAgICAgICBuZXdEc3RbOV0gPSB2OTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHYxMDtcbiAgICAgICAgbmV3RHN0WzExXSA9IHYxMTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IHYxMjtcbiAgICAgICAgbmV3RHN0WzEzXSA9IHYxMztcbiAgICAgICAgbmV3RHN0WzE0XSA9IHYxNDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IHYxNTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1hdDQgZnJvbSBhIE1hdDNcbiAgICAgKiBAcGFyYW0gbTMgLSBzb3VyY2UgbWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBNYXQ0IG1hZGUgZnJvbSBtM1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21NYXQzKG0zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBtM1swXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbTNbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IG0zWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSBtM1s0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gbTNbNV07XG4gICAgICAgIG5ld0RzdFs2XSA9IG0zWzZdO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSBtM1s4XTtcbiAgICAgICAgbmV3RHN0WzldID0gbTNbOV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSBtM1sxMF07XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1hdDQgcm90YXRpb24gbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0NCBtYWRlIGZyb20gcVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21RdWF0KHEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IHggPSBxWzBdO1xuICAgICAgICBjb25zdCB5ID0gcVsxXTtcbiAgICAgICAgY29uc3QgeiA9IHFbMl07XG4gICAgICAgIGNvbnN0IHcgPSBxWzNdO1xuICAgICAgICBjb25zdCB4MiA9IHggKyB4O1xuICAgICAgICBjb25zdCB5MiA9IHkgKyB5O1xuICAgICAgICBjb25zdCB6MiA9IHogKyB6O1xuICAgICAgICBjb25zdCB4eCA9IHggKiB4MjtcbiAgICAgICAgY29uc3QgeXggPSB5ICogeDI7XG4gICAgICAgIGNvbnN0IHl5ID0geSAqIHkyO1xuICAgICAgICBjb25zdCB6eCA9IHogKiB4MjtcbiAgICAgICAgY29uc3QgenkgPSB6ICogeTI7XG4gICAgICAgIGNvbnN0IHp6ID0geiAqIHoyO1xuICAgICAgICBjb25zdCB3eCA9IHcgKiB4MjtcbiAgICAgICAgY29uc3Qgd3kgPSB3ICogeTI7XG4gICAgICAgIGNvbnN0IHd6ID0gdyAqIHoyO1xuICAgICAgICBuZXdEc3RbMF0gPSAxIC0geXkgLSB6ejtcbiAgICAgICAgbmV3RHN0WzFdID0geXggKyB3ejtcbiAgICAgICAgbmV3RHN0WzJdID0genggLSB3eTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0geXggLSB3ejtcbiAgICAgICAgbmV3RHN0WzVdID0gMSAtIHh4IC0geno7XG4gICAgICAgIG5ld0RzdFs2XSA9IHp5ICsgd3g7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHp4ICsgd3k7XG4gICAgICAgIG5ld0RzdFs5XSA9IHp5IC0gd3g7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOZWdhdGVzIGEgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIC1tLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5lZ2F0ZShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAtbVswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gLW1bMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IC1tWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSAtbVszXTtcbiAgICAgICAgbmV3RHN0WzRdID0gLW1bNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IC1tWzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSAtbVs2XTtcbiAgICAgICAgbmV3RHN0WzddID0gLW1bN107XG4gICAgICAgIG5ld0RzdFs4XSA9IC1tWzhdO1xuICAgICAgICBuZXdEc3RbOV0gPSAtbVs5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IC1tWzEwXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IC1tWzExXTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IC1tWzEyXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IC1tWzEzXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IC1tWzE0XTtcbiAgICAgICAgbmV3RHN0WzE1XSA9IC1tWzE1XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogYWRkIDIgbWF0cmljZXMuXG4gICAgICogQHBhcmFtIGEgLSBtYXRyaXggMS5cbiAgICAgKiBAcGFyYW0gYiAtIG1hdHJpeCAyLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgYSArIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIGJbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyBiWzNdO1xuICAgICAgICBuZXdEc3RbNF0gPSBhWzRdICsgYls0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gYVs1XSArIGJbNV07XG4gICAgICAgIG5ld0RzdFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgICAgICBuZXdEc3RbN10gPSBhWzddICsgYls3XTtcbiAgICAgICAgbmV3RHN0WzhdID0gYVs4XSArIGJbOF07XG4gICAgICAgIG5ld0RzdFs5XSA9IGFbOV0gKyBiWzldO1xuICAgICAgICBuZXdEc3RbMTBdID0gYVsxMF0gKyBiWzEwXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IGFbMTFdICsgYlsxMV07XG4gICAgICAgIG5ld0RzdFsxMl0gPSBhWzEyXSArIGJbMTJdO1xuICAgICAgICBuZXdEc3RbMTNdID0gYVsxM10gKyBiWzEzXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IGFbMTRdICsgYlsxNF07XG4gICAgICAgIG5ld0RzdFsxNV0gPSBhWzE1XSArIGJbMTVdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgbWF0cml4IGJ5IGEgc2NhbGFyXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBzIC0gVGhlIHNjYWxhclxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgbSAqIHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIobSwgcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVswXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxXSA9IG1bMV0gKiBzO1xuICAgICAgICBuZXdEc3RbMl0gPSBtWzJdICogcztcbiAgICAgICAgbmV3RHN0WzNdID0gbVszXSAqIHM7XG4gICAgICAgIG5ld0RzdFs0XSA9IG1bNF0gKiBzO1xuICAgICAgICBuZXdEc3RbNV0gPSBtWzVdICogcztcbiAgICAgICAgbmV3RHN0WzZdID0gbVs2XSAqIHM7XG4gICAgICAgIG5ld0RzdFs3XSA9IG1bN10gKiBzO1xuICAgICAgICBuZXdEc3RbOF0gPSBtWzhdICogcztcbiAgICAgICAgbmV3RHN0WzldID0gbVs5XSAqIHM7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxMV0gPSBtWzExXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXSAqIHM7XG4gICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XSAqIHM7XG4gICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XSAqIHM7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSBtYXRyaXggYnkgYSBzY2FsYXJcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIHMgLSBUaGUgc2NhbGFyXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBtICogcy5cbiAgICAgKi9cbiAgICBjb25zdCBtdWxTY2FsYXIgPSBtdWx0aXBseVNjYWxhcjtcbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSBtYXRyaXguIChzYW1lIGFzIHtAbGluayBtYXQ0LmNsb25lfSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgbWF0NC5jcmVhdGV9IGFuZCB7QGxpbmsgbWF0NC5zZXR9XG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvcHkobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gbVszXTtcbiAgICAgICAgbmV3RHN0WzRdID0gbVs0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gbVs1XTtcbiAgICAgICAgbmV3RHN0WzZdID0gbVs2XTtcbiAgICAgICAgbmV3RHN0WzddID0gbVs3XTtcbiAgICAgICAgbmV3RHN0WzhdID0gbVs4XTtcbiAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IG1bMTBdO1xuICAgICAgICBuZXdEc3RbMTFdID0gbVsxMV07XG4gICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IG1bMTNdO1xuICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF07XG4gICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgbWF0cml4IChzYW1lIGFzIHtAbGluayBtYXQ0LmNvcHl9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayBtYXQ0LmNyZWF0ZX0gYW5kIHtAbGluayBtYXQ0LnNldH1cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSBtYXRyaXguIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIG0uXG4gICAgICovXG4gICAgY29uc3QgY2xvbmUgPSBjb3B5O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgbWF0cmljZXMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBtYXRyaWNlcyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFsc0FwcHJveGltYXRlbHkoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYVswXSAtIGJbMF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxXSAtIGJbMV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsyXSAtIGJbMl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVszXSAtIGJbM10pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs0XSAtIGJbNF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs1XSAtIGJbNV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs2XSAtIGJbNl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs3XSAtIGJbN10pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs4XSAtIGJbOF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVs5XSAtIGJbOV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxMF0gLSBiWzEwXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzExXSAtIGJbMTFdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMTJdIC0gYlsxMl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxM10gLSBiWzEzXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzE0XSAtIGJbMTRdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMTVdIC0gYlsxNV0pIDwgRVBTSUxPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiBtYXRyaWNlcyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIG1hdHJpeC5cbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIG1hdHJpY2VzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiZcbiAgICAgICAgICAgIGFbMV0gPT09IGJbMV0gJiZcbiAgICAgICAgICAgIGFbMl0gPT09IGJbMl0gJiZcbiAgICAgICAgICAgIGFbM10gPT09IGJbM10gJiZcbiAgICAgICAgICAgIGFbNF0gPT09IGJbNF0gJiZcbiAgICAgICAgICAgIGFbNV0gPT09IGJbNV0gJiZcbiAgICAgICAgICAgIGFbNl0gPT09IGJbNl0gJiZcbiAgICAgICAgICAgIGFbN10gPT09IGJbN10gJiZcbiAgICAgICAgICAgIGFbOF0gPT09IGJbOF0gJiZcbiAgICAgICAgICAgIGFbOV0gPT09IGJbOV0gJiZcbiAgICAgICAgICAgIGFbMTBdID09PSBiWzEwXSAmJlxuICAgICAgICAgICAgYVsxMV0gPT09IGJbMTFdICYmXG4gICAgICAgICAgICBhWzEyXSA9PT0gYlsxMl0gJiZcbiAgICAgICAgICAgIGFbMTNdID09PSBiWzEzXSAmJlxuICAgICAgICAgICAgYVsxNF0gPT09IGJbMTRdICYmXG4gICAgICAgICAgICBhWzE1XSA9PT0gYlsxNV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSA0LWJ5LTQgaWRlbnRpdHkgbWF0cml4LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIDQtYnktNCBpZGVudGl0eSBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHRyYW5zcG9zZSBvZiBhIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNwb3NlIG9mIG0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNwb3NlKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGlmIChuZXdEc3QgPT09IG0pIHtcbiAgICAgICAgICAgIGxldCB0O1xuICAgICAgICAgICAgdCA9IG1bMV07XG4gICAgICAgICAgICBtWzFdID0gbVs0XTtcbiAgICAgICAgICAgIG1bNF0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bMl07XG4gICAgICAgICAgICBtWzJdID0gbVs4XTtcbiAgICAgICAgICAgIG1bOF0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bM107XG4gICAgICAgICAgICBtWzNdID0gbVsxMl07XG4gICAgICAgICAgICBtWzEyXSA9IHQ7XG4gICAgICAgICAgICB0ID0gbVs2XTtcbiAgICAgICAgICAgIG1bNl0gPSBtWzldO1xuICAgICAgICAgICAgbVs5XSA9IHQ7XG4gICAgICAgICAgICB0ID0gbVs3XTtcbiAgICAgICAgICAgIG1bN10gPSBtWzEzXTtcbiAgICAgICAgICAgIG1bMTNdID0gdDtcbiAgICAgICAgICAgIHQgPSBtWzExXTtcbiAgICAgICAgICAgIG1bMTFdID0gbVsxNF07XG4gICAgICAgICAgICBtWzE0XSA9IHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICAgICAgbmV3RHN0WzBdID0gbTAwO1xuICAgICAgICBuZXdEc3RbMV0gPSBtMTA7XG4gICAgICAgIG5ld0RzdFsyXSA9IG0yMDtcbiAgICAgICAgbmV3RHN0WzNdID0gbTMwO1xuICAgICAgICBuZXdEc3RbNF0gPSBtMDE7XG4gICAgICAgIG5ld0RzdFs1XSA9IG0xMTtcbiAgICAgICAgbmV3RHN0WzZdID0gbTIxO1xuICAgICAgICBuZXdEc3RbN10gPSBtMzE7XG4gICAgICAgIG5ld0RzdFs4XSA9IG0wMjtcbiAgICAgICAgbmV3RHN0WzldID0gbTEyO1xuICAgICAgICBuZXdEc3RbMTBdID0gbTIyO1xuICAgICAgICBuZXdEc3RbMTFdID0gbTMyO1xuICAgICAgICBuZXdEc3RbMTJdID0gbTAzO1xuICAgICAgICBuZXdEc3RbMTNdID0gbTEzO1xuICAgICAgICBuZXdEc3RbMTRdID0gbTIzO1xuICAgICAgICBuZXdEc3RbMTVdID0gbTMzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDQtYnktNCBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVyc2Ugb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZlcnNlKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgdG1wMCA9IG0yMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wMSA9IG0zMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wMiA9IG0xMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wMyA9IG0zMiAqIG0xMztcbiAgICAgICAgY29uc3QgdG1wNCA9IG0xMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wNSA9IG0yMiAqIG0xMztcbiAgICAgICAgY29uc3QgdG1wNiA9IG0wMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wNyA9IG0zMiAqIG0wMztcbiAgICAgICAgY29uc3QgdG1wOCA9IG0wMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wOSA9IG0yMiAqIG0wMztcbiAgICAgICAgY29uc3QgdG1wMTAgPSBtMDIgKiBtMTM7XG4gICAgICAgIGNvbnN0IHRtcDExID0gbTEyICogbTAzO1xuICAgICAgICBjb25zdCB0bXAxMiA9IG0yMCAqIG0zMTtcbiAgICAgICAgY29uc3QgdG1wMTMgPSBtMzAgKiBtMjE7XG4gICAgICAgIGNvbnN0IHRtcDE0ID0gbTEwICogbTMxO1xuICAgICAgICBjb25zdCB0bXAxNSA9IG0zMCAqIG0xMTtcbiAgICAgICAgY29uc3QgdG1wMTYgPSBtMTAgKiBtMjE7XG4gICAgICAgIGNvbnN0IHRtcDE3ID0gbTIwICogbTExO1xuICAgICAgICBjb25zdCB0bXAxOCA9IG0wMCAqIG0zMTtcbiAgICAgICAgY29uc3QgdG1wMTkgPSBtMzAgKiBtMDE7XG4gICAgICAgIGNvbnN0IHRtcDIwID0gbTAwICogbTIxO1xuICAgICAgICBjb25zdCB0bXAyMSA9IG0yMCAqIG0wMTtcbiAgICAgICAgY29uc3QgdG1wMjIgPSBtMDAgKiBtMTE7XG4gICAgICAgIGNvbnN0IHRtcDIzID0gbTEwICogbTAxO1xuICAgICAgICBjb25zdCB0MCA9ICh0bXAwICogbTExICsgdG1wMyAqIG0yMSArIHRtcDQgKiBtMzEpIC1cbiAgICAgICAgICAgICh0bXAxICogbTExICsgdG1wMiAqIG0yMSArIHRtcDUgKiBtMzEpO1xuICAgICAgICBjb25zdCB0MSA9ICh0bXAxICogbTAxICsgdG1wNiAqIG0yMSArIHRtcDkgKiBtMzEpIC1cbiAgICAgICAgICAgICh0bXAwICogbTAxICsgdG1wNyAqIG0yMSArIHRtcDggKiBtMzEpO1xuICAgICAgICBjb25zdCB0MiA9ICh0bXAyICogbTAxICsgdG1wNyAqIG0xMSArIHRtcDEwICogbTMxKSAtXG4gICAgICAgICAgICAodG1wMyAqIG0wMSArIHRtcDYgKiBtMTEgKyB0bXAxMSAqIG0zMSk7XG4gICAgICAgIGNvbnN0IHQzID0gKHRtcDUgKiBtMDEgKyB0bXA4ICogbTExICsgdG1wMTEgKiBtMjEpIC1cbiAgICAgICAgICAgICh0bXA0ICogbTAxICsgdG1wOSAqIG0xMSArIHRtcDEwICogbTIxKTtcbiAgICAgICAgY29uc3QgZCA9IDEgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBkICogdDA7XG4gICAgICAgIG5ld0RzdFsxXSA9IGQgKiB0MTtcbiAgICAgICAgbmV3RHN0WzJdID0gZCAqIHQyO1xuICAgICAgICBuZXdEc3RbM10gPSBkICogdDM7XG4gICAgICAgIG5ld0RzdFs0XSA9IGQgKiAoKHRtcDEgKiBtMTAgKyB0bXAyICogbTIwICsgdG1wNSAqIG0zMCkgLVxuICAgICAgICAgICAgKHRtcDAgKiBtMTAgKyB0bXAzICogbTIwICsgdG1wNCAqIG0zMCkpO1xuICAgICAgICBuZXdEc3RbNV0gPSBkICogKCh0bXAwICogbTAwICsgdG1wNyAqIG0yMCArIHRtcDggKiBtMzApIC1cbiAgICAgICAgICAgICh0bXAxICogbTAwICsgdG1wNiAqIG0yMCArIHRtcDkgKiBtMzApKTtcbiAgICAgICAgbmV3RHN0WzZdID0gZCAqICgodG1wMyAqIG0wMCArIHRtcDYgKiBtMTAgKyB0bXAxMSAqIG0zMCkgLVxuICAgICAgICAgICAgKHRtcDIgKiBtMDAgKyB0bXA3ICogbTEwICsgdG1wMTAgKiBtMzApKTtcbiAgICAgICAgbmV3RHN0WzddID0gZCAqICgodG1wNCAqIG0wMCArIHRtcDkgKiBtMTAgKyB0bXAxMCAqIG0yMCkgLVxuICAgICAgICAgICAgKHRtcDUgKiBtMDAgKyB0bXA4ICogbTEwICsgdG1wMTEgKiBtMjApKTtcbiAgICAgICAgbmV3RHN0WzhdID0gZCAqICgodG1wMTIgKiBtMTMgKyB0bXAxNSAqIG0yMyArIHRtcDE2ICogbTMzKSAtXG4gICAgICAgICAgICAodG1wMTMgKiBtMTMgKyB0bXAxNCAqIG0yMyArIHRtcDE3ICogbTMzKSk7XG4gICAgICAgIG5ld0RzdFs5XSA9IGQgKiAoKHRtcDEzICogbTAzICsgdG1wMTggKiBtMjMgKyB0bXAyMSAqIG0zMykgLVxuICAgICAgICAgICAgKHRtcDEyICogbTAzICsgdG1wMTkgKiBtMjMgKyB0bXAyMCAqIG0zMykpO1xuICAgICAgICBuZXdEc3RbMTBdID0gZCAqICgodG1wMTQgKiBtMDMgKyB0bXAxOSAqIG0xMyArIHRtcDIyICogbTMzKSAtXG4gICAgICAgICAgICAodG1wMTUgKiBtMDMgKyB0bXAxOCAqIG0xMyArIHRtcDIzICogbTMzKSk7XG4gICAgICAgIG5ld0RzdFsxMV0gPSBkICogKCh0bXAxNyAqIG0wMyArIHRtcDIwICogbTEzICsgdG1wMjMgKiBtMjMpIC1cbiAgICAgICAgICAgICh0bXAxNiAqIG0wMyArIHRtcDIxICogbTEzICsgdG1wMjIgKiBtMjMpKTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IGQgKiAoKHRtcDE0ICogbTIyICsgdG1wMTcgKiBtMzIgKyB0bXAxMyAqIG0xMikgLVxuICAgICAgICAgICAgKHRtcDE2ICogbTMyICsgdG1wMTIgKiBtMTIgKyB0bXAxNSAqIG0yMikpO1xuICAgICAgICBuZXdEc3RbMTNdID0gZCAqICgodG1wMjAgKiBtMzIgKyB0bXAxMiAqIG0wMiArIHRtcDE5ICogbTIyKSAtXG4gICAgICAgICAgICAodG1wMTggKiBtMjIgKyB0bXAyMSAqIG0zMiArIHRtcDEzICogbTAyKSk7XG4gICAgICAgIG5ld0RzdFsxNF0gPSBkICogKCh0bXAxOCAqIG0xMiArIHRtcDIzICogbTMyICsgdG1wMTUgKiBtMDIpIC1cbiAgICAgICAgICAgICh0bXAyMiAqIG0zMiArIHRtcDE0ICogbTAyICsgdG1wMTkgKiBtMTIpKTtcbiAgICAgICAgbmV3RHN0WzE1XSA9IGQgKiAoKHRtcDIyICogbTIyICsgdG1wMTYgKiBtMDIgKyB0bXAyMSAqIG0xMikgLVxuICAgICAgICAgICAgKHRtcDIwICogbTEyICsgdG1wMjMgKiBtMjIgKyB0bXAxNyAqIG0wMikpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICAgICAqIEBwYXJhbSBtIC0gdGhlIG1hdHJpeFxuICAgICAqIEByZXR1cm5zIHRoZSBkZXRlcm1pbmFudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRldGVybWluYW50KG0pIHtcbiAgICAgICAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTAzID0gbVswICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTMwID0gbVszICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTMzID0gbVszICogNCArIDNdO1xuICAgICAgICBjb25zdCB0bXAwID0gbTIyICogbTMzO1xuICAgICAgICBjb25zdCB0bXAxID0gbTMyICogbTIzO1xuICAgICAgICBjb25zdCB0bXAyID0gbTEyICogbTMzO1xuICAgICAgICBjb25zdCB0bXAzID0gbTMyICogbTEzO1xuICAgICAgICBjb25zdCB0bXA0ID0gbTEyICogbTIzO1xuICAgICAgICBjb25zdCB0bXA1ID0gbTIyICogbTEzO1xuICAgICAgICBjb25zdCB0bXA2ID0gbTAyICogbTMzO1xuICAgICAgICBjb25zdCB0bXA3ID0gbTMyICogbTAzO1xuICAgICAgICBjb25zdCB0bXA4ID0gbTAyICogbTIzO1xuICAgICAgICBjb25zdCB0bXA5ID0gbTIyICogbTAzO1xuICAgICAgICBjb25zdCB0bXAxMCA9IG0wMiAqIG0xMztcbiAgICAgICAgY29uc3QgdG1wMTEgPSBtMTIgKiBtMDM7XG4gICAgICAgIGNvbnN0IHQwID0gKHRtcDAgKiBtMTEgKyB0bXAzICogbTIxICsgdG1wNCAqIG0zMSkgLVxuICAgICAgICAgICAgKHRtcDEgKiBtMTEgKyB0bXAyICogbTIxICsgdG1wNSAqIG0zMSk7XG4gICAgICAgIGNvbnN0IHQxID0gKHRtcDEgKiBtMDEgKyB0bXA2ICogbTIxICsgdG1wOSAqIG0zMSkgLVxuICAgICAgICAgICAgKHRtcDAgKiBtMDEgKyB0bXA3ICogbTIxICsgdG1wOCAqIG0zMSk7XG4gICAgICAgIGNvbnN0IHQyID0gKHRtcDIgKiBtMDEgKyB0bXA3ICogbTExICsgdG1wMTAgKiBtMzEpIC1cbiAgICAgICAgICAgICh0bXAzICogbTAxICsgdG1wNiAqIG0xMSArIHRtcDExICogbTMxKTtcbiAgICAgICAgY29uc3QgdDMgPSAodG1wNSAqIG0wMSArIHRtcDggKiBtMTEgKyB0bXAxMSAqIG0yMSkgLVxuICAgICAgICAgICAgKHRtcDQgKiBtMDEgKyB0bXA5ICogbTExICsgdG1wMTAgKiBtMjEpO1xuICAgICAgICByZXR1cm4gbTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBpbnZlcnNlIG9mIGEgNC1ieS00IG1hdHJpeC4gKHNhbWUgYXMgaW52ZXJzZSlcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgaW52ZXJzZSBvZiBtLlxuICAgICAqL1xuICAgIGNvbnN0IGludmVydCA9IGludmVyc2U7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gNC1ieS00IG1hdHJpY2VzIHdpdGggYSBvbiB0aGUgbGVmdCBhbmQgYiBvbiB0aGUgcmlnaHRcbiAgICAgKiBAcGFyYW0gYSAtIFRoZSBtYXRyaXggb24gdGhlIGxlZnQuXG4gICAgICogQHBhcmFtIGIgLSBUaGUgbWF0cml4IG9uIHRoZSByaWdodC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggcHJvZHVjdCBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IGEwMCA9IGFbMF07XG4gICAgICAgIGNvbnN0IGEwMSA9IGFbMV07XG4gICAgICAgIGNvbnN0IGEwMiA9IGFbMl07XG4gICAgICAgIGNvbnN0IGEwMyA9IGFbM107XG4gICAgICAgIGNvbnN0IGExMCA9IGFbNCArIDBdO1xuICAgICAgICBjb25zdCBhMTEgPSBhWzQgKyAxXTtcbiAgICAgICAgY29uc3QgYTEyID0gYVs0ICsgMl07XG4gICAgICAgIGNvbnN0IGExMyA9IGFbNCArIDNdO1xuICAgICAgICBjb25zdCBhMjAgPSBhWzggKyAwXTtcbiAgICAgICAgY29uc3QgYTIxID0gYVs4ICsgMV07XG4gICAgICAgIGNvbnN0IGEyMiA9IGFbOCArIDJdO1xuICAgICAgICBjb25zdCBhMjMgPSBhWzggKyAzXTtcbiAgICAgICAgY29uc3QgYTMwID0gYVsxMiArIDBdO1xuICAgICAgICBjb25zdCBhMzEgPSBhWzEyICsgMV07XG4gICAgICAgIGNvbnN0IGEzMiA9IGFbMTIgKyAyXTtcbiAgICAgICAgY29uc3QgYTMzID0gYVsxMiArIDNdO1xuICAgICAgICBjb25zdCBiMDAgPSBiWzBdO1xuICAgICAgICBjb25zdCBiMDEgPSBiWzFdO1xuICAgICAgICBjb25zdCBiMDIgPSBiWzJdO1xuICAgICAgICBjb25zdCBiMDMgPSBiWzNdO1xuICAgICAgICBjb25zdCBiMTAgPSBiWzQgKyAwXTtcbiAgICAgICAgY29uc3QgYjExID0gYls0ICsgMV07XG4gICAgICAgIGNvbnN0IGIxMiA9IGJbNCArIDJdO1xuICAgICAgICBjb25zdCBiMTMgPSBiWzQgKyAzXTtcbiAgICAgICAgY29uc3QgYjIwID0gYls4ICsgMF07XG4gICAgICAgIGNvbnN0IGIyMSA9IGJbOCArIDFdO1xuICAgICAgICBjb25zdCBiMjIgPSBiWzggKyAyXTtcbiAgICAgICAgY29uc3QgYjIzID0gYls4ICsgM107XG4gICAgICAgIGNvbnN0IGIzMCA9IGJbMTIgKyAwXTtcbiAgICAgICAgY29uc3QgYjMxID0gYlsxMiArIDFdO1xuICAgICAgICBjb25zdCBiMzIgPSBiWzEyICsgMl07XG4gICAgICAgIGNvbnN0IGIzMyA9IGJbMTIgKyAzXTtcbiAgICAgICAgbmV3RHN0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyICsgYTMwICogYjAzO1xuICAgICAgICBuZXdEc3RbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDIgKyBhMzEgKiBiMDM7XG4gICAgICAgIG5ld0RzdFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMiArIGEzMiAqIGIwMztcbiAgICAgICAgbmV3RHN0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyICsgYTMzICogYjAzO1xuICAgICAgICBuZXdEc3RbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTIgKyBhMzAgKiBiMTM7XG4gICAgICAgIG5ld0RzdFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMiArIGEzMSAqIGIxMztcbiAgICAgICAgbmV3RHN0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyICsgYTMyICogYjEzO1xuICAgICAgICBuZXdEc3RbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTIgKyBhMzMgKiBiMTM7XG4gICAgICAgIG5ld0RzdFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMiArIGEzMCAqIGIyMztcbiAgICAgICAgbmV3RHN0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyICsgYTMxICogYjIzO1xuICAgICAgICBuZXdEc3RbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyICsgYTMyICogYjIzO1xuICAgICAgICBuZXdEc3RbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyICsgYTMzICogYjIzO1xuICAgICAgICBuZXdEc3RbMTJdID0gYTAwICogYjMwICsgYTEwICogYjMxICsgYTIwICogYjMyICsgYTMwICogYjMzO1xuICAgICAgICBuZXdEc3RbMTNdID0gYTAxICogYjMwICsgYTExICogYjMxICsgYTIxICogYjMyICsgYTMxICogYjMzO1xuICAgICAgICBuZXdEc3RbMTRdID0gYTAyICogYjMwICsgYTEyICogYjMxICsgYTIyICogYjMyICsgYTMyICogYjMzO1xuICAgICAgICBuZXdEc3RbMTVdID0gYTAzICogYjMwICsgYTEzICogYjMxICsgYTIzICogYjMyICsgYTMzICogYjMzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHR3byA0LWJ5LTQgbWF0cmljZXMgd2l0aCBhIG9uIHRoZSBsZWZ0IGFuZCBiIG9uIHRoZSByaWdodCAoc2FtZSBhcyBtdWx0aXBseSlcbiAgICAgKiBAcGFyYW0gYSAtIFRoZSBtYXRyaXggb24gdGhlIGxlZnQuXG4gICAgICogQHBhcmFtIGIgLSBUaGUgbWF0cml4IG9uIHRoZSByaWdodC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggcHJvZHVjdCBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IG11bCA9IG11bHRpcGx5O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggdG8gdGhlIGdpdmVuXG4gICAgICogdmVjdG9yLlxuICAgICAqIEBwYXJhbSBhIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHdpdGggdHJhbnNsYXRpb24gc2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFRyYW5zbGF0aW9uKGEsIHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IGlkZW50aXR5KCkpO1xuICAgICAgICBpZiAoYSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSBhWzBdO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gYVsxXTtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IGFbMl07XG4gICAgICAgICAgICBuZXdEc3RbM10gPSBhWzNdO1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gYVs0XTtcbiAgICAgICAgICAgIG5ld0RzdFs1XSA9IGFbNV07XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBhWzZdO1xuICAgICAgICAgICAgbmV3RHN0WzddID0gYVs3XTtcbiAgICAgICAgICAgIG5ld0RzdFs4XSA9IGFbOF07XG4gICAgICAgICAgICBuZXdEc3RbOV0gPSBhWzldO1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IGFbMTBdO1xuICAgICAgICAgICAgbmV3RHN0WzExXSA9IGFbMTFdO1xuICAgICAgICB9XG4gICAgICAgIG5ld0RzdFsxMl0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMTNdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IHZbMl07XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvLy8qKlxuICAgIC8vICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIGEgNC1ieS00IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDNcbiAgICAvLyAqIGVudHJpZXMuXG4gICAgLy8gKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgLy8gKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgIC8vICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBtLlxuICAgIC8vICovXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24obSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMy5jcmVhdGUoKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMTJdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzEzXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVsxNF07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXhpcyBvZiBhIDR4NCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXNcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpcyAwID0geCwgMSA9IHksIDIgPSB6O1xuICAgICAqIEByZXR1cm5zIFRoZSBheGlzIGNvbXBvbmVudCBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF4aXMobSwgYXhpcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMy5jcmVhdGUoKSk7XG4gICAgICAgIGNvbnN0IG9mZiA9IGF4aXMgKiA0O1xuICAgICAgICBuZXdEc3RbMF0gPSBtW29mZiArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtW29mZiArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtW29mZiArIDJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGFuIGF4aXMgb2YgYSA0eDQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSB2IC0gdGhlIGF4aXMgdmVjdG9yXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpcyAgMCA9IHgsIDEgPSB5LCAyID0gejtcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIG1hdHJpeCB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB3aXRoIGF4aXMgc2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEF4aXMobSwgdiwgYXhpcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPT09IG0pID8gZHN0IDogY29weShtLCBkc3QpO1xuICAgICAgICBjb25zdCBvZmYgPSBheGlzICogNDtcbiAgICAgICAgbmV3RHN0W29mZiArIDBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0W29mZiArIDFdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0W29mZiArIDJdID0gdlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgXCIzZFwiIHNjYWxpbmcgY29tcG9uZW50IG9mIHRoZSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBNYXRyaXhcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0U2NhbGluZyhtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyB2ZWMzLmNyZWF0ZSgpKTtcbiAgICAgICAgY29uc3QgeHggPSBtWzBdO1xuICAgICAgICBjb25zdCB4eSA9IG1bMV07XG4gICAgICAgIGNvbnN0IHh6ID0gbVsyXTtcbiAgICAgICAgY29uc3QgeXggPSBtWzRdO1xuICAgICAgICBjb25zdCB5eSA9IG1bNV07XG4gICAgICAgIGNvbnN0IHl6ID0gbVs2XTtcbiAgICAgICAgY29uc3QgenggPSBtWzhdO1xuICAgICAgICBjb25zdCB6eSA9IG1bOV07XG4gICAgICAgIGNvbnN0IHp6ID0gbVsxMF07XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguc3FydCh4eCAqIHh4ICsgeHkgKiB4eSArIHh6ICogeHopO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnNxcnQoeXggKiB5eCArIHl5ICogeXkgKyB5eiAqIHl6KTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5zcXJ0KHp4ICogenggKyB6eSAqIHp5ICsgenogKiB6eik7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgYW5ndWxhciBoZWlnaHRcbiAgICAgKiBvZiB0aGUgZnJ1c3R1bSwgdGhlIGFzcGVjdCByYXRpbywgYW5kIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgVGhlXG4gICAgICogYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW0gZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gIFRoZSBnaXZlblxuICAgICAqIGFuZ2xlIGlzIHRoZSB2ZXJ0aWNhbCBhbmdsZSBvZiB0aGUgZnJ1c3R1bSwgYW5kIHRoZSBob3Jpem9udGFsIGFuZ2xlIGlzXG4gICAgICogZGV0ZXJtaW5lZCB0byBwcm9kdWNlIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uICBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmVcbiAgICAgKiB0aGUgZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgTm90ZSB0aGF0IG5lYXIgYW5kIGZhclxuICAgICAqIGFyZSBub3QgeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlXG4gICAgICogei1heGlzLiAgVGhlIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guXG4gICAgICogV2UgYXNzdW1lIGEgdW5pdCBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZFxuICAgICAqIGZyb20gMCB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAgICAgKlxuICAgICAqIE5vdGU6IElmIHlvdSBwYXNzIGBJbmZpbml0eWAgZm9yIHpGYXIgdGhlbiBpdCB3aWxsIHByb2R1Y2UgYSBwcm9qZWN0aW9uIG1hdHJpeFxuICAgICAqIHJldHVybnMgLUluZmluaXR5IGZvciBaIHdoZW4gdHJhbnNmb3JtaW5nIGNvb3JkaW5hdGVzIHdpdGggWiA8PSAwIGFuZCArSW5maW5pdHkgZm9yIFpcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmllbGRPZlZpZXdZSW5SYWRpYW5zIC0gVGhlIGNhbWVyYSBhbmdsZSBmcm9tIHRvcCB0byBib3R0b20gKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBhc3BlY3QgLSBUaGUgYXNwZWN0IHJhdGlvIHdpZHRoIC8gaGVpZ2h0LlxuICAgICAqIEBwYXJhbSB6TmVhciAtIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICAgICAqICAgICBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZS5cbiAgICAgKiBAcGFyYW0gekZhciAtIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICAgICAqICAgICBvZiB0aGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwZXJzcGVjdGl2ZShmaWVsZE9mVmlld1lJblJhZGlhbnMsIGFzcGVjdCwgek5lYXIsIHpGYXIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdZSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gZiAvIGFzcGVjdDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gZjtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzExXSA9IC0xO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAwO1xuICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHpGYXIpKSB7XG4gICAgICAgICAgICBjb25zdCByYW5nZUludiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSB6RmFyICogcmFuZ2VJbnY7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gekZhciAqIHpOZWFyICogcmFuZ2VJbnY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gLTE7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gLXpOZWFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IHJldmVyc2UteiBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGFuZ3VsYXIgaGVpZ2h0XG4gICAgICogb2YgdGhlIGZydXN0dW0sIHRoZSBhc3BlY3QgcmF0aW8sIGFuZCB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIFRoZVxuICAgICAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAgICAgKiBhbmdsZSBpcyB0aGUgdmVydGljYWwgYW5nbGUgb2YgdGhlIGZydXN0dW0sIGFuZCB0aGUgaG9yaXpvbnRhbCBhbmdsZSBpc1xuICAgICAqIGRldGVybWluZWQgdG8gcHJvZHVjZSB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLiAgVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlXG4gICAgICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAgICAgKiBhcmUgbm90IHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZVxuICAgICAqIHotYXhpcy4gIFRoZSBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LlxuICAgICAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAgICAgKiBmcm9tIDEgKGF0IC16TmVhcikgdG8gMCAoYXQgLXpGYXIpIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWVsZE9mVmlld1lJblJhZGlhbnMgLSBUaGUgY2FtZXJhIGFuZ2xlIGZyb20gdG9wIHRvIGJvdHRvbSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGFzcGVjdCAtIFRoZSBhc3BlY3QgcmF0aW8gd2lkdGggLyBoZWlnaHQuXG4gICAgICogQHBhcmFtIHpOZWFyIC0gVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gICAgICogICAgIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxuICAgICAqIEBwYXJhbSB6RmFyIC0gVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gICAgICogICAgIG9mIHRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuIChkZWZhdWx0ID0gSW5maW5pdHkpXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcGVyc3BlY3RpdmUgbWF0cml4LlxuICAgICAqLyBmdW5jdGlvbiBwZXJzcGVjdGl2ZVJldmVyc2VaKGZpZWxkT2ZWaWV3WUluUmFkaWFucywgYXNwZWN0LCB6TmVhciwgekZhciA9IEluZmluaXR5LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBmID0gMSAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3WUluUmFkaWFucyAqIDAuNSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IGY7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAtMTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMDtcbiAgICAgICAgaWYgKHpGYXIgPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSB6TmVhcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvICh6RmFyIC0gek5lYXIpO1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IHpOZWFyICogcmFuZ2VJbnY7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gekZhciAqIHpOZWFyICogcmFuZ2VJbnY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgb3J0aG9nb25hbCB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggdGhhdCB0cmFuc2Zvcm1zIGZyb21cbiAgICAgKiB0aGUgZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LCBib3R0b20sIGFuZCB0b3AgZGltZW5zaW9ucyB0byAtMSArMSBpbiB4LCBhbmQgeVxuICAgICAqIGFuZCAwIHRvICsxIGluIHouXG4gICAgICogQHBhcmFtIGxlZnQgLSBMZWZ0IHNpZGUgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gICAgICogQHBhcmFtIHJpZ2h0IC0gUmlnaHQgc2lkZSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAgICAgKiBAcGFyYW0gYm90dG9tIC0gQm90dG9tIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICAgICAqIEBwYXJhbSB0b3AgLSBUb3Agb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gICAgICogQHBhcmFtIG5lYXIgLSBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAgICAgKiAgICAgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXG4gICAgICogQHBhcmFtIGZhciAtIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICAgICAqICAgICBvZiB0aGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxuICAgICAqIEBwYXJhbSBkc3QgLSBPdXRwdXQgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBvcnRob2dyYXBoaWMgcHJvamVjdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gb3J0aG8obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDIgLyAocmlnaHQgLSBsZWZ0KTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMiAvICh0b3AgLSBib3R0b20pO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAocmlnaHQgKyBsZWZ0KSAvIChsZWZ0IC0gcmlnaHQpO1xuICAgICAgICBuZXdEc3RbMTNdID0gKHRvcCArIGJvdHRvbSkgLyAoYm90dG9tIC0gdG9wKTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IG5lYXIgLyAobmVhciAtIGZhcik7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICAgICAqIHRvcCwgYm90dG9tLCBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBUaGUgYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW1cbiAgICAgKiBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmUgdGhlXG4gICAgICogZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBOb3RlIHRoYXQgbmVhciBhbmQgZmFyIGFyZSBub3RcbiAgICAgKiB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmUgei1heGlzLiBUaGVcbiAgICAgKiBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LiBXZSBhc3N1bWUgYSB1bml0XG4gICAgICogYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmQgZnJvbSAwIHRvIDEgaW4gdGhlIHpcbiAgICAgKiBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGxlZnQgLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIHJpZ2h0IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICAgKiBAcGFyYW0gYm90dG9tIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIHRvcCAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIG5lYXIgLSBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBuZWFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIGZhciAtIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGZhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBkc3QgLSBPdXRwdXQgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcnVzdHVtKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBkeCA9IChyaWdodCAtIGxlZnQpO1xuICAgICAgICBjb25zdCBkeSA9ICh0b3AgLSBib3R0b20pO1xuICAgICAgICBjb25zdCBkeiA9IChuZWFyIC0gZmFyKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMiAqIG5lYXIgLyBkeDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMiAqIG5lYXIgLyBkeTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gKGxlZnQgKyByaWdodCkgLyBkeDtcbiAgICAgICAgbmV3RHN0WzldID0gKHRvcCArIGJvdHRvbSkgLyBkeTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGZhciAvIGR6O1xuICAgICAgICBuZXdEc3RbMTFdID0gLTE7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IG5lYXIgKiBmYXIgLyBkejtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDA7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IHJldmVyc2UteiBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICAgICAqIHRvcCwgYm90dG9tLCBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBUaGUgYXJndW1lbnRzIGRlZmluZSBhIGZydXN0dW1cbiAgICAgKiBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmUgdGhlXG4gICAgICogZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBOb3RlIHRoYXQgbmVhciBhbmQgZmFyIGFyZSBub3RcbiAgICAgKiB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmUgei1heGlzLiBUaGVcbiAgICAgKiBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LiBXZSBhc3N1bWUgYSB1bml0XG4gICAgICogYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmQgZnJvbSAxICgtbmVhcikgdG8gMCAoLWZhcikgaW4gdGhlIHpcbiAgICAgKiBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGxlZnQgLSBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBsZWZ0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIHJpZ2h0IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAgICAgKiBAcGFyYW0gYm90dG9tIC0gVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIHRvcCAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIG5lYXIgLSBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBuZWFyIHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIGZhciAtIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIGZhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBkc3QgLSBPdXRwdXQgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcnVzdHVtUmV2ZXJzZVoobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIgPSBJbmZpbml0eSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgZHggPSAocmlnaHQgLSBsZWZ0KTtcbiAgICAgICAgY29uc3QgZHkgPSAodG9wIC0gYm90dG9tKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMiAqIG5lYXIgLyBkeDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMiAqIG5lYXIgLyBkeTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gKGxlZnQgKyByaWdodCkgLyBkeDtcbiAgICAgICAgbmV3RHN0WzldID0gKHRvcCArIGJvdHRvbSkgLyBkeTtcbiAgICAgICAgbmV3RHN0WzExXSA9IC0xO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAwO1xuICAgICAgICBpZiAoZmFyID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gbmVhcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvIChmYXIgLSBuZWFyKTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBuZWFyICogcmFuZ2VJbnY7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gZmFyICogbmVhciAqIHJhbmdlSW52O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIGNvbnN0IHhBeGlzID0gdmVjMy5jcmVhdGUoKTtcbiAgICBjb25zdCB5QXhpcyA9IHZlYzMuY3JlYXRlKCk7XG4gICAgY29uc3QgekF4aXMgPSB2ZWMzLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IGFpbSB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBtYXRyaXggd2hpY2ggcG9zaXRpb25zIGFuIG9iamVjdCBhaW1pbmcgZG93biBwb3NpdGl2ZSBaLlxuICAgICAqIHRvd2FyZCB0aGUgdGFyZ2V0LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBpcyAqKk5PVCoqIHRoZSBpbnZlcnNlIG9mIGxvb2tBdCBhcyBsb29rQXQgbG9va3MgYXQgbmVnYXRpdmUgWi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgcG9zaXRpb24gbWVhbnQgdG8gYmUgYWltZWQgYXQuXG4gICAgICogQHBhcmFtIHVwIC0gQSB2ZWN0b3IgcG9pbnRpbmcgdXAuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgYWltIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhaW0ocG9zaXRpb24sIHRhcmdldCwgdXAsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuc3VidHJhY3QodGFyZ2V0LCBwb3NpdGlvbiwgekF4aXMpLCB6QXhpcyk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuY3Jvc3ModXAsIHpBeGlzLCB4QXhpcyksIHhBeGlzKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUodmVjMy5jcm9zcyh6QXhpcywgeEF4aXMsIHlBeGlzKSwgeUF4aXMpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4QXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzFdID0geEF4aXNbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHhBeGlzWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSB5QXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzVdID0geUF4aXNbMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHlBeGlzWzJdO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB6QXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzldID0gekF4aXNbMV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSB6QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSBwb3NpdGlvblswXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IHBvc2l0aW9uWzFdO1xuICAgICAgICBuZXdEc3RbMTRdID0gcG9zaXRpb25bMl07XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCBjYW1lcmEgYWltIHRyYW5zZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBhIG1hdHJpeCB3aGljaCBwb3NpdGlvbnMgYW4gb2JqZWN0IGFpbWluZyBkb3duIG5lZ2F0aXZlIFouXG4gICAgICogdG93YXJkIHRoZSB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIGlzIHRoZSBpbnZlcnNlIG9mIGBsb29rQXRgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXllIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSBwb3NpdGlvbiBtZWFudCB0byBiZSBhaW1lZCBhdC5cbiAgICAgKiBAcGFyYW0gdXAgLSBBIHZlY3RvciBwb2ludGluZyB1cC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBhaW0gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbWVyYUFpbShleWUsIHRhcmdldCwgdXAsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuc3VidHJhY3QoZXllLCB0YXJnZXQsIHpBeGlzKSwgekF4aXMpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLmNyb3NzKHVwLCB6QXhpcywgeEF4aXMpLCB4QXhpcyk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuY3Jvc3MoekF4aXMsIHhBeGlzLCB5QXhpcyksIHlBeGlzKTtcbiAgICAgICAgbmV3RHN0WzBdID0geEF4aXNbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHhBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB4QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0geUF4aXNbMF07XG4gICAgICAgIG5ld0RzdFs1XSA9IHlBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbNl0gPSB5QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gekF4aXNbMF07XG4gICAgICAgIG5ld0RzdFs5XSA9IHpBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gekF4aXNbMl07XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gZXllWzBdO1xuICAgICAgICBuZXdEc3RbMTNdID0gZXllWzFdO1xuICAgICAgICBuZXdEc3RbMTRdID0gZXllWzJdO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgdmlldyB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSB2aWV3IG1hdHJpeCB3aGljaCB0cmFuc2Zvcm1zIGFsbCBvdGhlciBvYmplY3RzXG4gICAgICogdG8gYmUgaW4gdGhlIHNwYWNlIG9mIHRoZSB2aWV3IGRlZmluZWQgYnkgdGhlIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXllIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHRhcmdldCAtIFRoZSBwb3NpdGlvbiBtZWFudCB0byBiZSBhaW1lZCBhdC5cbiAgICAgKiBAcGFyYW0gdXAgLSBBIHZlY3RvciBwb2ludGluZyB1cC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBsb29rLWF0IG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29rQXQoZXllLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLnN1YnRyYWN0KGV5ZSwgdGFyZ2V0LCB6QXhpcyksIHpBeGlzKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUodmVjMy5jcm9zcyh1cCwgekF4aXMsIHhBeGlzKSwgeEF4aXMpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLmNyb3NzKHpBeGlzLCB4QXhpcywgeUF4aXMpLCB5QXhpcyk7XG4gICAgICAgIG5ld0RzdFswXSA9IHhBeGlzWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB5QXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzJdID0gekF4aXNbMF07XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IHhBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbNV0gPSB5QXhpc1sxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gekF4aXNbMV07XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHhBeGlzWzJdO1xuICAgICAgICBuZXdEc3RbOV0gPSB5QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHpBeGlzWzJdO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IC0oeEF4aXNbMF0gKiBleWVbMF0gKyB4QXhpc1sxXSAqIGV5ZVsxXSArIHhBeGlzWzJdICogZXllWzJdKTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IC0oeUF4aXNbMF0gKiBleWVbMF0gKyB5QXhpc1sxXSAqIGV5ZVsxXSArIHlBeGlzWzJdICogZXllWzJdKTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IC0oekF4aXNbMF0gKiBleWVbMF0gKyB6QXhpc1sxXSAqIGV5ZVsxXSArIHpBeGlzWzJdICogZXllWzJdKTtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHRyYW5zbGF0ZXMgYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3RvciBieVxuICAgICAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNsYXRpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zbGF0aW9uKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFsxM10gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMTRdID0gdlsyXTtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IgYnlcbiAgICAgKiAgICAgd2hpY2ggdG8gdHJhbnNsYXRlLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzJdO1xuICAgICAgICBjb25zdCBtMDMgPSBtWzNdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTMwID0gbVszICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMzEgPSBtWzMgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTMzID0gbVszICogNCArIDNdO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSBtMDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSBtMDE7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBtMDI7XG4gICAgICAgICAgICBuZXdEc3RbM10gPSBtMDM7XG4gICAgICAgICAgICBuZXdEc3RbNF0gPSBtMTA7XG4gICAgICAgICAgICBuZXdEc3RbNV0gPSBtMTE7XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBtMTI7XG4gICAgICAgICAgICBuZXdEc3RbN10gPSBtMTM7XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBtMjA7XG4gICAgICAgICAgICBuZXdEc3RbOV0gPSBtMjE7XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gbTIyO1xuICAgICAgICAgICAgbmV3RHN0WzExXSA9IG0yMztcbiAgICAgICAgfVxuICAgICAgICBuZXdEc3RbMTJdID0gbTAwICogdjAgKyBtMTAgKiB2MSArIG0yMCAqIHYyICsgbTMwO1xuICAgICAgICBuZXdEc3RbMTNdID0gbTAxICogdjAgKyBtMTEgKiB2MSArIG0yMSAqIHYyICsgbTMxO1xuICAgICAgICBuZXdEc3RbMTRdID0gbTAyICogdjAgKyBtMTIgKiB2MSArIG0yMiAqIHYyICsgbTMyO1xuICAgICAgICBuZXdEc3RbMTVdID0gbTAzICogdjAgKyBtMTMgKiB2MSArIG0yMyAqIHYyICsgbTMzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeC1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb25YKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBjO1xuICAgICAgICBuZXdEc3RbNl0gPSBzO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAtcztcbiAgICAgICAgbmV3RHN0WzEwXSA9IGM7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWChtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgbTEwID0gbVs0XTtcbiAgICAgICAgY29uc3QgbTExID0gbVs1XTtcbiAgICAgICAgY29uc3QgbTEyID0gbVs2XTtcbiAgICAgICAgY29uc3QgbTEzID0gbVs3XTtcbiAgICAgICAgY29uc3QgbTIwID0gbVs4XTtcbiAgICAgICAgY29uc3QgbTIxID0gbVs5XTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsxMF07XG4gICAgICAgIGNvbnN0IG0yMyA9IG1bMTFdO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbNF0gPSBjICogbTEwICsgcyAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzVdID0gYyAqIG0xMSArIHMgKiBtMjE7XG4gICAgICAgIG5ld0RzdFs2XSA9IGMgKiBtMTIgKyBzICogbTIyO1xuICAgICAgICBuZXdEc3RbN10gPSBjICogbTEzICsgcyAqIG0yMztcbiAgICAgICAgbmV3RHN0WzhdID0gYyAqIG0yMCAtIHMgKiBtMTA7XG4gICAgICAgIG5ld0RzdFs5XSA9IGMgKiBtMjEgLSBzICogbTExO1xuICAgICAgICBuZXdEc3RbMTBdID0gYyAqIG0yMiAtIHMgKiBtMTI7XG4gICAgICAgIG5ld0RzdFsxMV0gPSBjICogbTIzIC0gcyAqIG0xMztcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gbVswXTtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IG1bMV07XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBtWzJdO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gbVszXTtcbiAgICAgICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XTtcbiAgICAgICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeS1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAtcztcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gcztcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGM7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTAzID0gbVswICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGMgKiBtMDAgLSBzICogbTIwO1xuICAgICAgICBuZXdEc3RbMV0gPSBjICogbTAxIC0gcyAqIG0yMTtcbiAgICAgICAgbmV3RHN0WzJdID0gYyAqIG0wMiAtIHMgKiBtMjI7XG4gICAgICAgIG5ld0RzdFszXSA9IGMgKiBtMDMgLSBzICogbTIzO1xuICAgICAgICBuZXdEc3RbOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgICAgICAgbmV3RHN0WzldID0gYyAqIG0yMSArIHMgKiBtMDE7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjICogbTIyICsgcyAqIG0wMjtcbiAgICAgICAgbmV3RHN0WzExXSA9IGMgKiBtMjMgKyBzICogbTAzO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbNF0gPSBtWzRdO1xuICAgICAgICAgICAgbmV3RHN0WzVdID0gbVs1XTtcbiAgICAgICAgICAgIG5ld0RzdFs2XSA9IG1bNl07XG4gICAgICAgICAgICBuZXdEc3RbN10gPSBtWzddO1xuICAgICAgICAgICAgbmV3RHN0WzEyXSA9IG1bMTJdO1xuICAgICAgICAgICAgbmV3RHN0WzEzXSA9IG1bMTNdO1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IG1bMTRdO1xuICAgICAgICAgICAgbmV3RHN0WzE1XSA9IG1bMTVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGlvblooYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGM7XG4gICAgICAgIG5ld0RzdFsxXSA9IHM7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IC1zO1xuICAgICAgICBuZXdEc3RbNV0gPSBjO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlblxuICAgICAqIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGVaKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYyAqIG0wMCArIHMgKiBtMTA7XG4gICAgICAgIG5ld0RzdFsxXSA9IGMgKiBtMDEgKyBzICogbTExO1xuICAgICAgICBuZXdEc3RbMl0gPSBjICogbTAyICsgcyAqIG0xMjtcbiAgICAgICAgbmV3RHN0WzNdID0gYyAqIG0wMyArIHMgKiBtMTM7XG4gICAgICAgIG5ld0RzdFs0XSA9IGMgKiBtMTAgLSBzICogbTAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBjICogbTExIC0gcyAqIG0wMTtcbiAgICAgICAgbmV3RHN0WzZdID0gYyAqIG0xMiAtIHMgKiBtMDI7XG4gICAgICAgIG5ld0RzdFs3XSA9IGMgKiBtMTMgLSBzICogbTAzO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBtWzhdO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXTtcbiAgICAgICAgICAgIG5ld0RzdFsxMV0gPSBtWzExXTtcbiAgICAgICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XTtcbiAgICAgICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYXhpcyAtIFRoZSBheGlzXG4gICAgICogICAgIGFib3V0IHdoaWNoIHRvIHJvdGF0ZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYW5nbGUgcmFkaWFuc1xuICAgICAqICAgICBhcm91bmQgdGhlIGF4aXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYXhpc1JvdGF0aW9uKGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBsZXQgeCA9IGF4aXNbMF07XG4gICAgICAgIGxldCB5ID0gYXhpc1sxXTtcbiAgICAgICAgbGV0IHogPSBheGlzWzJdO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgICAgIHggLz0gbjtcbiAgICAgICAgeSAvPSBuO1xuICAgICAgICB6IC89IG47XG4gICAgICAgIGNvbnN0IHh4ID0geCAqIHg7XG4gICAgICAgIGNvbnN0IHl5ID0geSAqIHk7XG4gICAgICAgIGNvbnN0IHp6ID0geiAqIHo7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG4gICAgICAgIG5ld0RzdFswXSA9IHh4ICsgKDEgLSB4eCkgKiBjO1xuICAgICAgICBuZXdEc3RbMV0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gICAgICAgIG5ld0RzdFsyXSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgLSB5ICogcztcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICAgICAgICBuZXdEc3RbNV0gPSB5eSArICgxIC0geXkpICogYztcbiAgICAgICAgbmV3RHN0WzZdID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSArIHggKiBzO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeSAqIHM7XG4gICAgICAgIG5ld0RzdFs5XSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgLSB4ICogcztcbiAgICAgICAgbmV3RHN0WzEwXSA9IHp6ICsgKDEgLSB6eikgKiBjO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZSBnaXZlblxuICAgICAqIGFuZ2xlLiAoc2FtZSBhcyBheGlzUm90YXRpb24pXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpc1xuICAgICAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIG1hdHJpeCB3aGljaCByb3RhdGVzIGFuZ2xlIHJhZGlhbnNcbiAgICAgKiAgICAgYXJvdW5kIHRoZSBheGlzLlxuICAgICAqL1xuICAgIGNvbnN0IHJvdGF0aW9uID0gYXhpc1JvdGF0aW9uO1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZVxuICAgICAqIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYXhpcyAtIFRoZSBheGlzXG4gICAgICogICAgIGFib3V0IHdoaWNoIHRvIHJvdGF0ZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBheGlzUm90YXRlKG0sIGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBsZXQgeCA9IGF4aXNbMF07XG4gICAgICAgIGxldCB5ID0gYXhpc1sxXTtcbiAgICAgICAgbGV0IHogPSBheGlzWzJdO1xuICAgICAgICBjb25zdCBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gICAgICAgIHggLz0gbjtcbiAgICAgICAgeSAvPSBuO1xuICAgICAgICB6IC89IG47XG4gICAgICAgIGNvbnN0IHh4ID0geCAqIHg7XG4gICAgICAgIGNvbnN0IHl5ID0geSAqIHk7XG4gICAgICAgIGNvbnN0IHp6ID0geiAqIHo7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG4gICAgICAgIGNvbnN0IHIwMCA9IHh4ICsgKDEgLSB4eCkgKiBjO1xuICAgICAgICBjb25zdCByMDEgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gICAgICAgIGNvbnN0IHIwMiA9IHggKiB6ICogb25lTWludXNDb3NpbmUgLSB5ICogcztcbiAgICAgICAgY29uc3QgcjEwID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSAtIHogKiBzO1xuICAgICAgICBjb25zdCByMTEgPSB5eSArICgxIC0geXkpICogYztcbiAgICAgICAgY29uc3QgcjEyID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSArIHggKiBzO1xuICAgICAgICBjb25zdCByMjAgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeSAqIHM7XG4gICAgICAgIGNvbnN0IHIyMSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgLSB4ICogcztcbiAgICAgICAgY29uc3QgcjIyID0genogKyAoMSAtIHp6KSAqIGM7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMl07XG4gICAgICAgIGNvbnN0IG0wMyA9IG1bM107XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bNF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bNV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bNl07XG4gICAgICAgIGNvbnN0IG0xMyA9IG1bN107XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bOF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bOV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMTBdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzExXTtcbiAgICAgICAgbmV3RHN0WzBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICAgICAgICBuZXdEc3RbMV0gPSByMDAgKiBtMDEgKyByMDEgKiBtMTEgKyByMDIgKiBtMjE7XG4gICAgICAgIG5ld0RzdFsyXSA9IHIwMCAqIG0wMiArIHIwMSAqIG0xMiArIHIwMiAqIG0yMjtcbiAgICAgICAgbmV3RHN0WzNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICAgICAgICBuZXdEc3RbNF0gPSByMTAgKiBtMDAgKyByMTEgKiBtMTAgKyByMTIgKiBtMjA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHIxMCAqIG0wMSArIHIxMSAqIG0xMSArIHIxMiAqIG0yMTtcbiAgICAgICAgbmV3RHN0WzZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICAgICAgICBuZXdEc3RbN10gPSByMTAgKiBtMDMgKyByMTEgKiBtMTMgKyByMTIgKiBtMjM7XG4gICAgICAgIG5ld0RzdFs4XSA9IHIyMCAqIG0wMCArIHIyMSAqIG0xMCArIHIyMiAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICAgICAgICBuZXdEc3RbMTBdID0gcjIwICogbTAyICsgcjIxICogbTEyICsgcjIyICogbTIyO1xuICAgICAgICBuZXdEc3RbMTFdID0gcjIwICogbTAzICsgcjIxICogbTEzICsgcjIyICogbTIzO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl07XG4gICAgICAgICAgICBuZXdEc3RbMTNdID0gbVsxM107XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF07XG4gICAgICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIGdpdmVuIGF4aXMgYnkgdGhlXG4gICAgICogZ2l2ZW4gYW5nbGUuIChzYW1lIGFzIHJvdGF0ZSlcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpc1xuICAgICAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgY29uc3Qgcm90YXRlID0gYXhpc1JvdGF0ZTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCBzY2FsZXMgaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50IGdpdmVuIGJ5XG4gICAgICogdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhcyB0aHJlZVxuICAgICAqIGVudHJpZXMuXG4gICAgICogQHBhcmFtIHYgLSBBIHZlY3RvciBvZlxuICAgICAqICAgICB0aHJlZSBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsaW5nKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSB2WzJdO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnRcbiAgICAgKiBnaXZlbiBieSB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzXG4gICAgICogdGhyZWUgZW50cmllcy5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXggdG8gYmUgbW9kaWZpZWQuXG4gICAgICogQHBhcmFtIHYgLSBBIHZlY3RvciBvZiB0aHJlZSBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlXG4gICAgICogICAgIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjYWxlKG0sIHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIG5ld0RzdFswXSA9IHYwICogbVswICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB2MCAqIG1bMCAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFszXSA9IHYwICogbVswICogNCArIDNdO1xuICAgICAgICBuZXdEc3RbNF0gPSB2MSAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gdjEgKiBtWzEgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHYxICogbVsxICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbN10gPSB2MSAqIG1bMSAqIDQgKyAzXTtcbiAgICAgICAgbmV3RHN0WzhdID0gdjIgKiBtWzIgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFs5XSA9IHYyICogbVsyICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gdjIgKiBtWzIgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFsxMV0gPSB2MiAqIG1bMiAqIDQgKyAzXTtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzEyXSA9IG1bMTJdO1xuICAgICAgICAgICAgbmV3RHN0WzEzXSA9IG1bMTNdO1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IG1bMTRdO1xuICAgICAgICAgICAgbmV3RHN0WzE1XSA9IG1bMTVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHNjYWxlcyBhIHVuaWZvcm0gYW1vdW50IGluIGVhY2ggZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBzIC0gdGhlIGFtb3VudCB0byBzY2FsZVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxpbmcgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaWZvcm1TY2FsaW5nKHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHM7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHM7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBzO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBpbiBlYWNoIGRpbWVuc2lvbiBieSBhIHVuaWZvcm0gc2NhbGUuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4IHRvIGJlIG1vZGlmaWVkLlxuICAgICAqIEBwYXJhbSBzIC0gVGhlIGFtb3VudCB0byBzY2FsZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaWZvcm1TY2FsZShtLCBzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzICogbVswICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBzICogbVswICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBzICogbVswICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbM10gPSBzICogbVswICogNCArIDNdO1xuICAgICAgICBuZXdEc3RbNF0gPSBzICogbVsxICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbNV0gPSBzICogbVsxICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbNl0gPSBzICogbVsxICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbN10gPSBzICogbVsxICogNCArIDNdO1xuICAgICAgICBuZXdEc3RbOF0gPSBzICogbVsyICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbOV0gPSBzICogbVsyICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gcyAqIG1bMiAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IHMgKiBtWzIgKiA0ICsgM107XG4gICAgICAgIGlmIChtICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XTtcbiAgICAgICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIGFpbSxcbiAgICAgICAgYXhpc1JvdGF0ZSxcbiAgICAgICAgYXhpc1JvdGF0aW9uLFxuICAgICAgICBjYW1lcmFBaW0sXG4gICAgICAgIGNsb25lLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGRldGVybWluYW50LFxuICAgICAgICBlcXVhbHMsXG4gICAgICAgIGVxdWFsc0FwcHJveGltYXRlbHksXG4gICAgICAgIGZyb21NYXQzLFxuICAgICAgICBmcm9tUXVhdCxcbiAgICAgICAgZnJ1c3R1bSxcbiAgICAgICAgZnJ1c3R1bVJldmVyc2VaLFxuICAgICAgICBnZXRBeGlzLFxuICAgICAgICBnZXRTY2FsaW5nLFxuICAgICAgICBnZXRUcmFuc2xhdGlvbixcbiAgICAgICAgaWRlbnRpdHksXG4gICAgICAgIGludmVyc2UsXG4gICAgICAgIGludmVydCxcbiAgICAgICAgbG9va0F0LFxuICAgICAgICBtdWwsXG4gICAgICAgIG11bFNjYWxhcixcbiAgICAgICAgbXVsdGlwbHksXG4gICAgICAgIG11bHRpcGx5U2NhbGFyLFxuICAgICAgICBuZWdhdGUsXG4gICAgICAgIG9ydGhvLFxuICAgICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgICAgcGVyc3BlY3RpdmVSZXZlcnNlWixcbiAgICAgICAgcm90YXRlLFxuICAgICAgICByb3RhdGVYLFxuICAgICAgICByb3RhdGVZLFxuICAgICAgICByb3RhdGVaLFxuICAgICAgICByb3RhdGlvbixcbiAgICAgICAgcm90YXRpb25YLFxuICAgICAgICByb3RhdGlvblksXG4gICAgICAgIHJvdGF0aW9uWixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHNjYWxpbmcsXG4gICAgICAgIHNldCxcbiAgICAgICAgc2V0QXhpcyxcbiAgICAgICAgc2V0VHJhbnNsYXRpb24sXG4gICAgICAgIHRyYW5zbGF0ZSxcbiAgICAgICAgdHJhbnNsYXRpb24sXG4gICAgICAgIHRyYW5zcG9zZSxcbiAgICAgICAgdW5pZm9ybVNjYWxlLFxuICAgICAgICB1bmlmb3JtU2NhbGluZyxcbiAgICB9O1xufVxuY29uc3QgY2FjaGUkMiA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldEFQSSQyKEN0b3IpIHtcbiAgICBsZXQgYXBpID0gY2FjaGUkMi5nZXQoQ3Rvcik7XG4gICAgaWYgKCFhcGkpIHtcbiAgICAgICAgYXBpID0gZ2V0QVBJSW1wbCQyKEN0b3IpO1xuICAgICAgICBjYWNoZSQyLnNldChDdG9yLCBhcGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpO1xufVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMjIgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEdlbmVyYXRlcyBhbSB0eXBlZCBBUEkgZm9yIFF1ZFxuICogKi9cbmZ1bmN0aW9uIGdldEFQSUltcGwkMShDdG9yKSB7XG4gICAgY29uc3QgdmVjMyA9IGdldEFQSSQ0KEN0b3IpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBxdWF0NDsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB4IC0gSW5pdGlhbCB4IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IC0gSW5pdGlhbCB5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IC0gSW5pdGlhbCB6IHZhbHVlLlxuICAgICAqIEBwYXJhbSB3IC0gSW5pdGlhbCB3IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSh4LCB5LCB6LCB3KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IG5ldyBDdG9yKDQpO1xuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IHk7XG4gICAgICAgICAgICAgICAgaWYgKHogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICAgICAgICAgICAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSB3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBRdWF0OyBtYXkgYmUgY2FsbGVkIHdpdGggeCwgeSwgeiB0byBzZXQgaW5pdGlhbCB2YWx1ZXMuIChzYW1lIGFzIGNyZWF0ZSlcbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgeiB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgdyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBjb25zdCBmcm9tVmFsdWVzID0gY3JlYXRlO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlcyBvZiBhIFF1YXRcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgcXVhdC5jcmVhdGV9IGFuZCB7QGxpbmsgcXVhdC5jb3B5fVxuICAgICAqXG4gICAgICogQHBhcmFtIHggZmlyc3QgdmFsdWVcbiAgICAgKiBAcGFyYW0geSBzZWNvbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0geiB0aGlyZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB3IGZvdXJ0aCB2YWx1ZVxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3Igd2l0aCBpdHMgZWxlbWVudHMgc2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldCh4LCB5LCB6LCB3LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHg7XG4gICAgICAgIG5ld0RzdFsxXSA9IHk7XG4gICAgICAgIG5ld0RzdFsyXSA9IHo7XG4gICAgICAgIG5ld0RzdFszXSA9IHc7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFuZCAgYXhpcyxcbiAgICAgKiB0aGVuIHJldHVybnMgaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXhpcyAtIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSB0aGUgYW5nbGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcXVhdGVybmlvbiB0aGF0IHJlcHJlc2VudHMgdGhlIGdpdmVuIGF4aXMgYW5kIGFuZ2xlXG4gICAgICoqL1xuICAgIGZ1bmN0aW9uIGZyb21BeGlzQW5nbGUoYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgaGFsZkFuZ2xlID0gYW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihoYWxmQW5nbGUpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzICogYXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzFdID0gcyAqIGF4aXNbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHMgKiBheGlzWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBNYXRoLmNvcyhoYWxmQW5nbGUpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZVxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byBjb21wdXRlIGZyb21cbiAgICAgKiBAcGFyYW0gZHN0IC0gVmVjMyB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJuIGFuZ2xlIGFuZCBheGlzXG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9BeGlzQW5nbGUocSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMy5jcmVhdGUoMykpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYWNvcyhxWzNdKSAqIDI7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSAqIDAuNSk7XG4gICAgICAgIGlmIChzID4gRVBTSUxPTikge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gcVswXSAvIHM7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSBxWzFdIC8gcztcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IHFbMl0gLyBzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gMTtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGFuZ2xlLCBheGlzOiBuZXdEc3QgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgaW4gZGVncmVlcyBiZXR3ZWVuIHR3byByb3RhdGlvbnMgYSBhbmQgYi5cbiAgICAgKiBAcGFyYW0gYSAtIHF1YXRlcm5pb24gYVxuICAgICAqIEBwYXJhbSBiIC0gcXVhdGVybmlvbiBiXG4gICAgICogQHJldHVybiBhbmdsZSBpbiByYWRpYW5zIGJldHdlZW4gdGhlIHR3byBxdWF0ZXJuaW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFuZ2xlKGEsIGIpIHtcbiAgICAgICAgY29uc3QgZCA9IGRvdChhLCBiKTtcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcygyICogZCAqIGQgLSAxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gcXVhdGVybmlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIC0gdGhlIGZpcnN0IHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gYiAtIHRoZSBzZWNvbmQgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYSAqIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGF4ID0gYVswXTtcbiAgICAgICAgY29uc3QgYXkgPSBhWzFdO1xuICAgICAgICBjb25zdCBheiA9IGFbMl07XG4gICAgICAgIGNvbnN0IGF3ID0gYVszXTtcbiAgICAgICAgY29uc3QgYnggPSBiWzBdO1xuICAgICAgICBjb25zdCBieSA9IGJbMV07XG4gICAgICAgIGNvbnN0IGJ6ID0gYlsyXTtcbiAgICAgICAgY29uc3QgYncgPSBiWzNdO1xuICAgICAgICBuZXdEc3RbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICAgICAgICBuZXdEc3RbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICAgICAgICBuZXdEc3RbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xuICAgICAgICBuZXdEc3RbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHR3byBxdWF0ZXJuaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIGEgLSB0aGUgZmlyc3QgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBiIC0gdGhlIHNlY29uZCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhICogYlxuICAgICAqL1xuICAgIGNvbnN0IG11bCA9IG11bHRpcGx5O1xuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIHF1YXRlcm5pb24gYXJvdW5kIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhICogYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVgocSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgaGFsZkFuZ2xlID0gYW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHF4ID0gcVswXTtcbiAgICAgICAgY29uc3QgcXkgPSBxWzFdO1xuICAgICAgICBjb25zdCBxeiA9IHFbMl07XG4gICAgICAgIGNvbnN0IHF3ID0gcVszXTtcbiAgICAgICAgY29uc3QgYnggPSBNYXRoLnNpbihoYWxmQW5nbGUpO1xuICAgICAgICBjb25zdCBidyA9IE1hdGguY29zKGhhbGZBbmdsZSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHF4ICogYncgKyBxdyAqIGJ4O1xuICAgICAgICBuZXdEc3RbMV0gPSBxeSAqIGJ3ICsgcXogKiBieDtcbiAgICAgICAgbmV3RHN0WzJdID0gcXogKiBidyAtIHF5ICogYng7XG4gICAgICAgIG5ld0RzdFszXSA9IHF3ICogYncgLSBxeCAqIGJ4O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiBxdWF0ZXJuaW9uIGFyb3VuZCB0aGUgWSBheGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gcSAtIHF1YXRlcm5pb24gdG8gcm90YXRlXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZVxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYSAqIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGVZKHEsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGhhbGZBbmdsZSA9IGFuZ2xlSW5SYWRpYW5zICogMC41O1xuICAgICAgICBjb25zdCBxeCA9IHFbMF07XG4gICAgICAgIGNvbnN0IHF5ID0gcVsxXTtcbiAgICAgICAgY29uc3QgcXogPSBxWzJdO1xuICAgICAgICBjb25zdCBxdyA9IHFbM107XG4gICAgICAgIGNvbnN0IGJ5ID0gTWF0aC5zaW4oaGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3QgYncgPSBNYXRoLmNvcyhoYWxmQW5nbGUpO1xuICAgICAgICBuZXdEc3RbMF0gPSBxeCAqIGJ3IC0gcXogKiBieTtcbiAgICAgICAgbmV3RHN0WzFdID0gcXkgKiBidyArIHF3ICogYnk7XG4gICAgICAgIG5ld0RzdFsyXSA9IHF6ICogYncgKyBxeCAqIGJ5O1xuICAgICAgICBuZXdEc3RbM10gPSBxdyAqIGJ3IC0gcXkgKiBieTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gcXVhdGVybmlvbiBhcm91bmQgdGhlIFogYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGEgKiBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWihxLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBjb25zdCBoYWxmQW5nbGUgPSBhbmdsZUluUmFkaWFucyAqIDAuNTtcbiAgICAgICAgY29uc3QgcXggPSBxWzBdO1xuICAgICAgICBjb25zdCBxeSA9IHFbMV07XG4gICAgICAgIGNvbnN0IHF6ID0gcVsyXTtcbiAgICAgICAgY29uc3QgcXcgPSBxWzNdO1xuICAgICAgICBjb25zdCBieiA9IE1hdGguc2luKGhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IGJ3ID0gTWF0aC5jb3MoaGFsZkFuZ2xlKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcXggKiBidyArIHF5ICogYno7XG4gICAgICAgIG5ld0RzdFsxXSA9IHF5ICogYncgLSBxeCAqIGJ6O1xuICAgICAgICBuZXdEc3RbMl0gPSBxeiAqIGJ3ICsgcXcgKiBiejtcbiAgICAgICAgbmV3RHN0WzNdID0gcXcgKiBidyAtIHF6ICogYno7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNwaGVyaWNhbGx5IGxpbmVhciBpbnRlcnBvbGF0ZSBiZXR3ZWVuIHR3byBxdWF0ZXJuaW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIGEgLSBzdGFydGluZyB2YWx1ZVxuICAgICAqIEBwYXJhbSBiIC0gZW5kaW5nIHZhbHVlXG4gICAgICogQHBhcmFtIHQgLSB2YWx1ZSB3aGVyZSAwID0gYSBhbmQgMSA9IGJcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGEgKiBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2xlcnAoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBjb25zdCBheCA9IGFbMF07XG4gICAgICAgIGNvbnN0IGF5ID0gYVsxXTtcbiAgICAgICAgY29uc3QgYXogPSBhWzJdO1xuICAgICAgICBjb25zdCBhdyA9IGFbM107XG4gICAgICAgIGxldCBieCA9IGJbMF07XG4gICAgICAgIGxldCBieSA9IGJbMV07XG4gICAgICAgIGxldCBieiA9IGJbMl07XG4gICAgICAgIGxldCBidyA9IGJbM107XG4gICAgICAgIGxldCBjb3NPbWVnYSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7XG4gICAgICAgIGlmIChjb3NPbWVnYSA8IDApIHtcbiAgICAgICAgICAgIGNvc09tZWdhID0gLWNvc09tZWdhO1xuICAgICAgICAgICAgYnggPSAtYng7XG4gICAgICAgICAgICBieSA9IC1ieTtcbiAgICAgICAgICAgIGJ6ID0gLWJ6O1xuICAgICAgICAgICAgYncgPSAtYnc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNjYWxlMDtcbiAgICAgICAgbGV0IHNjYWxlMTtcbiAgICAgICAgaWYgKDEuMCAtIGNvc09tZWdhID4gRVBTSUxPTikge1xuICAgICAgICAgICAgY29uc3Qgb21lZ2EgPSBNYXRoLmFjb3MoY29zT21lZ2EpO1xuICAgICAgICAgICAgY29uc3Qgc2luT21lZ2EgPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgICAgICAgICBzY2FsZTAgPSBNYXRoLnNpbigoMSAtIHQpICogb21lZ2EpIC8gc2luT21lZ2E7XG4gICAgICAgICAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2luT21lZ2E7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY2FsZTAgPSAxLjAgLSB0O1xuICAgICAgICAgICAgc2NhbGUxID0gdDtcbiAgICAgICAgfVxuICAgICAgICBuZXdEc3RbMF0gPSBzY2FsZTAgKiBheCArIHNjYWxlMSAqIGJ4O1xuICAgICAgICBuZXdEc3RbMV0gPSBzY2FsZTAgKiBheSArIHNjYWxlMSAqIGJ5O1xuICAgICAgICBuZXdEc3RbMl0gPSBzY2FsZTAgKiBheiArIHNjYWxlMSAqIGJ6O1xuICAgICAgICBuZXdEc3RbM10gPSBzY2FsZTAgKiBhdyArIHNjYWxlMSAqIGJ3O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBpbnZlcnNlIG9mIGEgcXVhdGVybmlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIGNvbXB1dGUgdGhlIGludmVyc2Ugb2ZcbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGEgKiBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52ZXJzZShxLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGEwID0gcVswXTtcbiAgICAgICAgY29uc3QgYTEgPSBxWzFdO1xuICAgICAgICBjb25zdCBhMiA9IHFbMl07XG4gICAgICAgIGNvbnN0IGEzID0gcVszXTtcbiAgICAgICAgY29uc3QgZG90ID0gYTAgKiBhMCArIGExICogYTEgKyBhMiAqIGEyICsgYTMgKiBhMztcbiAgICAgICAgY29uc3QgaW52RG90ID0gZG90ID8gMSAvIGRvdCA6IDA7XG4gICAgICAgIG5ld0RzdFswXSA9IC1hMCAqIGludkRvdDtcbiAgICAgICAgbmV3RHN0WzFdID0gLWExICogaW52RG90O1xuICAgICAgICBuZXdEc3RbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gICAgICAgIG5ld0RzdFszXSA9IGEzICogaW52RG90O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0ZXJuaW9uXG4gICAgICogRm9yIHF1YXRlcm5pb25zIHdpdGggYSBtYWduaXR1ZGUgb2YgMSAoYSB1bml0IHF1YXRlcm5pb24pXG4gICAgICogdGhpcyByZXR1cm5zIHRoZSBzYW1lIGFzIHRoZSBpbnZlcnNlIGJ1dCBpcyBmYXN0ZXIgdG8gY2FsY3VsYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIGNvbXB1dGUgdGhlIGNvbmp1Z2F0ZSBvZi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgY29uanVnYXRlIG9mIHFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb25qdWdhdGUocSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSAtcVswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gLXFbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IC1xWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBxWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiByb3RhdGlvbiBtYXRyaXguXG4gICAgICpcbiAgICAgKiBUaGUgY3JlYXRlZCBxdWF0ZXJuaW9uIGlzIG5vdCBub3JtYWxpemVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG0gLSByb3RhdGlvbiBtYXRyaXhcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJvbU1hdChtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIC8qXG4gICAgICAgIDAgMSAyXG4gICAgICAgIDMgNCA1XG4gICAgICAgIDYgNyA4XG4gICAgICBcbiAgICAgICAgMCAxIDJcbiAgICAgICAgNCA1IDZcbiAgICAgICAgOCA5IDEwXG4gICAgICAgICAqL1xuICAgICAgICAvLyBBbGdvcml0aG0gaW4gS2VuIFNob2VtYWtlJ3MgYXJ0aWNsZSBpbiAxOTg3IFNJR0dSQVBIIGNvdXJzZSBub3Rlc1xuICAgICAgICAvLyBhcnRpY2xlIFwiUXVhdGVybmlvbiBDYWxjdWx1cyBhbmQgRmFzdCBBbmltYXRpb25cIi5cbiAgICAgICAgY29uc3QgdHJhY2UgPSBtWzBdICsgbVs1XSArIG1bMTBdO1xuICAgICAgICBpZiAodHJhY2UgPiAwLjApIHtcbiAgICAgICAgICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBNYXRoLnNxcnQodHJhY2UgKyAxKTsgLy8gMndcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IDAuNSAqIHJvb3Q7XG4gICAgICAgICAgICBjb25zdCBpbnZSb290ID0gMC41IC8gcm9vdDsgLy8gMS8oNHcpXG4gICAgICAgICAgICBuZXdEc3RbMF0gPSAobVs2XSAtIG1bOV0pICogaW52Um9vdDtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IChtWzhdIC0gbVsyXSkgKiBpbnZSb290O1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gKG1bMV0gLSBtWzRdKSAqIGludlJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB8d3wgPD0gMS8yXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBpZiAobVs1XSA+IG1bMF0pIHtcbiAgICAgICAgICAgICAgICBpID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtWzEwXSA+IG1baSAqIDQgKyBpXSkge1xuICAgICAgICAgICAgICAgIGkgPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaiA9IChpICsgMSkgJSAzO1xuICAgICAgICAgICAgY29uc3QgayA9IChpICsgMikgJSAzO1xuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IE1hdGguc3FydChtW2kgKiA0ICsgaV0gLSBtW2ogKiA0ICsgal0gLSBtW2sgKiA0ICsga10gKyAxLjApO1xuICAgICAgICAgICAgbmV3RHN0W2ldID0gMC41ICogcm9vdDtcbiAgICAgICAgICAgIGNvbnN0IGludlJvb3QgPSAwLjUgLyByb290O1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gKG1baiAqIDQgKyBrXSAtIG1bayAqIDQgKyBqXSkgKiBpbnZSb290O1xuICAgICAgICAgICAgbmV3RHN0W2pdID0gKG1baiAqIDQgKyBpXSArIG1baSAqIDQgKyBqXSkgKiBpbnZSb290O1xuICAgICAgICAgICAgbmV3RHN0W2tdID0gKG1bayAqIDQgKyBpXSArIG1baSAqIDQgKyBrXSkgKiBpbnZSb290O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIGV1bGVyIGFuZ2xlIHgsIHksIHogdXNpbmcgdGhlIHByb3ZpZGVkIGludHJpbnNpYyBvcmRlciBmb3IgdGhlIGNvbnZlcnNpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0geEFuZ2xlSW5SYWRpYW5zIC0gYW5nbGUgdG8gcm90YXRlIGFyb3VuZCBYIGF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAcGFyYW0geUFuZ2xlSW5SYWRpYW5zIC0gYW5nbGUgdG8gcm90YXRlIGFyb3VuZCBZIGF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAcGFyYW0gekFuZ2xlSW5SYWRpYW5zIC0gYW5nbGUgdG8gcm90YXRlIGFyb3VuZCBaIGF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAcGFyYW0gb3JkZXIgLSBvcmRlciB0byBhcHBseSBldWxlciBhbmdsZXNcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSBzYW1lIHJvdGF0aW9uIGFzIHRoZSBldWxlciBhbmdsZXMgYXBwbGllZCBpbiB0aGUgZ2l2ZW4gb3JkZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tRXVsZXIoeEFuZ2xlSW5SYWRpYW5zLCB5QW5nbGVJblJhZGlhbnMsIHpBbmdsZUluUmFkaWFucywgb3JkZXIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgeEhhbGZBbmdsZSA9IHhBbmdsZUluUmFkaWFucyAqIDAuNTtcbiAgICAgICAgY29uc3QgeUhhbGZBbmdsZSA9IHlBbmdsZUluUmFkaWFucyAqIDAuNTtcbiAgICAgICAgY29uc3QgekhhbGZBbmdsZSA9IHpBbmdsZUluUmFkaWFucyAqIDAuNTtcbiAgICAgICAgY29uc3Qgc3ggPSBNYXRoLnNpbih4SGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3QgY3ggPSBNYXRoLmNvcyh4SGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc3kgPSBNYXRoLnNpbih5SGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3QgY3kgPSBNYXRoLmNvcyh5SGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc3ogPSBNYXRoLnNpbih6SGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3QgY3ogPSBNYXRoLmNvcyh6SGFsZkFuZ2xlKTtcbiAgICAgICAgc3dpdGNoIChvcmRlcikge1xuICAgICAgICAgICAgY2FzZSAneHl6JzpcbiAgICAgICAgICAgICAgICBuZXdEc3RbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0gY3ggKiBzeSAqIGN6IC0gc3ggKiBjeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd4enknOlxuICAgICAgICAgICAgICAgIG5ld0RzdFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3l4eic6XG4gICAgICAgICAgICAgICAgbmV3RHN0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneXp4JzpcbiAgICAgICAgICAgICAgICBuZXdEc3RbMF0gPSBzeCAqIGN5ICogY3ogKyBjeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd6eHknOlxuICAgICAgICAgICAgICAgIG5ld0RzdFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gY3ggKiBjeSAqIHN6ICsgc3ggKiBzeSAqIGN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFszXSA9IGN4ICogY3kgKiBjeiAtIHN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3p5eCc6XG4gICAgICAgICAgICAgICAgbmV3RHN0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcm90YXRpb24gb3JkZXI6ICR7b3JkZXJ9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgcXVhdGVybmlvbi4gKHNhbWUgYXMge0BsaW5rIHF1YXQuY2xvbmV9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayBxdWF0LmNyZWF0ZX0gYW5kIHtAbGluayBxdWF0LnNldH1cbiAgICAgKiBAcGFyYW0gcSAtIFRoZSBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIGEgY29weSBvZiBxXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29weShxLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHFbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHFbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHFbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IHFbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb25lcyBhIHF1YXRlcm5pb24uIChzYW1lIGFzIHtAbGluayBxdWF0LmNvcHl9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayBxdWF0LmNyZWF0ZX0gYW5kIHtAbGluayBxdWF0LnNldH1cbiAgICAgKiBAcGFyYW0gcSAtIFRoZSBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiBxLlxuICAgICAqL1xuICAgIGNvbnN0IGNsb25lID0gY29weTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byBxdWF0ZXJuaW9uczsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSBzdW0gb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGQoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgYlszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byBxdWF0ZXJuaW9ucy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gYVszXSAtIGJbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0d28gcXVhdGVybmlvbnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgcXVhdGVybmlvbiBieSBhIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsU2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAqIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gKiBrO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdICogaztcbiAgICAgICAgbmV3RHN0WzNdID0gdlszXSAqIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSBxdWF0ZXJuaW9uIGJ5IGEgc2NhbGFyLiAoc2FtZSBhcyBtdWxTY2FsYXIpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHNjYWxlID0gbXVsU2NhbGFyO1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2U2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAvIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gLyBrO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdIC8gaztcbiAgICAgICAgbmV3RHN0WzNdID0gdlszXSAvIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gcXVhdGVybmlvbnNcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcmV0dXJucyBkb3QgcHJvZHVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYVswXSAqIGJbMF0pICsgKGFbMV0gKiBiWzFdKSArIChhWzJdICogYlsyXSkgKyAoYVszXSAqIGJbM10pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gcXVhdGVybmlvbnMuXG4gICAgICogR2l2ZW4gcXVhdGVybmlvbnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB0LCByZXR1cm5zXG4gICAgICogYSArIHQgKiAoYiAtIGEpLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSB0IC0gSW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbGluZWFyIGludGVycG9sYXRlZCByZXN1bHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyB0ICogKGJbMF0gLSBhWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIHQgKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgdCAqIChiWzJdIC0gYVsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyB0ICogKGJbM10gLSBhWzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHYgLSBxdWF0ZXJuaW9uLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHYzID0gdlszXTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh2MCAqIHYwICsgdjEgKiB2MSArIHYyICogdjIgKyB2MyAqIHYzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiBxdWF0ZXJuaW9uIChzYW1lIGFzIGxlbmd0aClcbiAgICAgKiBAcGFyYW0gdiAtIHF1YXRlcm5pb24uXG4gICAgICogQHJldHVybnMgbGVuZ3RoIG9mIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHYgLSBxdWF0ZXJuaW9uLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVuZ3RoU3Eodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBjb25zdCB2MyA9IHZbM107XG4gICAgICAgIHJldHVybiB2MCAqIHYwICsgdjEgKiB2MSArIHYyICogdjIgKyB2MyAqIHYzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgcXVhdGVybmlvbiAoc2FtZSBhcyBsZW5ndGhTcSlcbiAgICAgKiBAcGFyYW0gdiAtIHF1YXRlcm5pb24uXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgcXVhdGVybmlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBsZW5TcSA9IGxlbmd0aFNxO1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSBxdWF0ZXJuaW9uIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBub3JtYWxpemVkIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgdjMgPSB2WzNdO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2Myk7XG4gICAgICAgIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB2MCAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxIC8gbGVuO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gdjIgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbM10gPSB2MyAvIGxlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiBxdWF0ZXJuaW9ucyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgcXVhdGVybmlvbnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHNBcHByb3hpbWF0ZWx5KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMl0gLSBiWzJdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbM10gLSBiWzNdKSA8IEVQU0lMT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgcXVhdGVybmlvbnMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHF1YXRlcm5pb25zIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaWRlbnRpdHkgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIGFuIGlkZW50aXR5IHF1YXRlcm5pb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpZGVudGl0eShkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIGNvbnN0IHRlbXBWZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgICBjb25zdCB4VW5pdFZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICAgIGNvbnN0IHlVbml0VmVjMyA9IHZlYzMuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSBxdWF0ZXJuaW9uIHRvIHJlcHJlc2VudCB0aGUgc2hvcnRlc3Qgcm90YXRpb24gZnJvbSBvbmUgdmVjdG9yIHRvIGFub3RoZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYVVuaXQgLSB0aGUgc3RhcnQgdmVjdG9yXG4gICAgICogQHBhcmFtIGJVbml0IC0gdGhlIGVuZCB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgcmVzdWx0XG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb25UbyhhVW5pdCwgYlVuaXQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgZG90ID0gdmVjMy5kb3QoYVVuaXQsIGJVbml0KTtcbiAgICAgICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgICAgICAgdmVjMy5jcm9zcyh4VW5pdFZlYzMsIGFVbml0LCB0ZW1wVmVjMyk7XG4gICAgICAgICAgICBpZiAodmVjMy5sZW4odGVtcFZlYzMpIDwgMC4wMDAwMDEpIHtcbiAgICAgICAgICAgICAgICB2ZWMzLmNyb3NzKHlVbml0VmVjMywgYVVuaXQsIHRlbXBWZWMzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlYzMubm9ybWFsaXplKHRlbXBWZWMzLCB0ZW1wVmVjMyk7XG4gICAgICAgICAgICBmcm9tQXhpc0FuZ2xlKHRlbXBWZWMzLCBNYXRoLlBJLCBuZXdEc3QpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gMTtcbiAgICAgICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2ZWMzLmNyb3NzKGFVbml0LCBiVW5pdCwgdGVtcFZlYzMpO1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdGVtcFZlYzNbMF07XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSB0ZW1wVmVjM1sxXTtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IHRlbXBWZWMzWzJdO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gMSArIGRvdDtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmV3RHN0LCBuZXdEc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRlbXBRdWF0MSA9IG5ldyBDdG9yKDQpO1xuICAgIGNvbnN0IHRlbXBRdWF0MiA9IG5ldyBDdG9yKDQpO1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSAtIHRoZSBmaXJzdCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIGIgLSB0aGUgc2Vjb25kIHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gYyAtIHRoZSB0aGlyZCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIGQgLSB0aGUgZm91cnRoIHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnQgMCB0byAxXG4gICAgICogQHJldHVybnMgcmVzdWx0XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3FsZXJwKGEsIGIsIGMsIGQsIHQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgc2xlcnAoYSwgZCwgdCwgdGVtcFF1YXQxKTtcbiAgICAgICAgc2xlcnAoYiwgYywgdCwgdGVtcFF1YXQyKTtcbiAgICAgICAgc2xlcnAodGVtcFF1YXQxLCB0ZW1wUXVhdDIsIDIgKiB0ICogKDEgLSB0KSwgbmV3RHN0KTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBmcm9tVmFsdWVzLFxuICAgICAgICBzZXQsXG4gICAgICAgIGZyb21BeGlzQW5nbGUsXG4gICAgICAgIHRvQXhpc0FuZ2xlLFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgbXVsdGlwbHksXG4gICAgICAgIG11bCxcbiAgICAgICAgcm90YXRlWCxcbiAgICAgICAgcm90YXRlWSxcbiAgICAgICAgcm90YXRlWixcbiAgICAgICAgc2xlcnAsXG4gICAgICAgIGludmVyc2UsXG4gICAgICAgIGNvbmp1Z2F0ZSxcbiAgICAgICAgZnJvbU1hdCxcbiAgICAgICAgZnJvbUV1bGVyLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjbG9uZSxcbiAgICAgICAgYWRkLFxuICAgICAgICBzdWJ0cmFjdCxcbiAgICAgICAgc3ViLFxuICAgICAgICBtdWxTY2FsYXIsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBkaXZTY2FsYXIsXG4gICAgICAgIGRvdCxcbiAgICAgICAgbGVycCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBsZW4sXG4gICAgICAgIGxlbmd0aFNxLFxuICAgICAgICBsZW5TcSxcbiAgICAgICAgbm9ybWFsaXplLFxuICAgICAgICBlcXVhbHNBcHByb3hpbWF0ZWx5LFxuICAgICAgICBlcXVhbHMsXG4gICAgICAgIGlkZW50aXR5LFxuICAgICAgICByb3RhdGlvblRvLFxuICAgICAgICBzcWxlcnAsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlJDEgPSBuZXcgTWFwKCk7XG4vKipcbiAqXG4gKiBRdWF0NCBtYXRoIGZ1bmN0aW9ucy5cbiAqXG4gKiBBbG1vc3QgYWxsIGZ1bmN0aW9ucyB0YWtlIGFuIG9wdGlvbmFsIGBuZXdEc3RgIGFyZ3VtZW50LiBJZiBpdCBpcyBub3QgcGFzc2VkIGluIHRoZVxuICogZnVuY3Rpb25zIHdpbGwgY3JlYXRlIGEgbmV3IGBRdWF0NGAuIEluIG90aGVyIHdvcmRzIHlvdSBjYW4gZG8gdGhpc1xuICpcbiAqICAgICBjb25zdCB2ID0gcXVhdDQuY3Jvc3ModjEsIHYyKTsgIC8vIENyZWF0ZXMgYSBuZXcgUXVhdDQgd2l0aCB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyLlxuICpcbiAqIG9yXG4gKlxuICogICAgIGNvbnN0IHYgPSBxdWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC5jcm9zcyh2MSwgdjIsIHYpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHZcbiAqXG4gKiBUaGUgZmlyc3Qgc3R5bGUgaXMgb2Z0ZW4gZWFzaWVyIGJ1dCBkZXBlbmRpbmcgb24gd2hlcmUgaXQncyB1c2VkIGl0IGdlbmVyYXRlcyBnYXJiYWdlIHdoZXJlXG4gKiBhcyB0aGVyZSBpcyBhbG1vc3QgbmV2ZXIgYWxsb2NhdGlvbiB3aXRoIHRoZSBzZWNvbmQgc3R5bGUuXG4gKlxuICogSXQgaXMgYWx3YXlzIHNhZmUgdG8gcGFzcyBhbnkgdmVjdG9yIGFzIHRoZSBkZXN0aW5hdGlvbi4gU28gZm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgcXVhdDQuY3Jvc3ModjEsIHYyLCB2MSk7ICAvLyBQdXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIgaW4gdjFcbiAqXG4gKi9cbmZ1bmN0aW9uIGdldEFQSSQxKEN0b3IpIHtcbiAgICBsZXQgYXBpID0gY2FjaGUkMS5nZXQoQ3Rvcik7XG4gICAgaWYgKCFhcGkpIHtcbiAgICAgICAgYXBpID0gZ2V0QVBJSW1wbCQxKEN0b3IpO1xuICAgICAgICBjYWNoZSQxLnNldChDdG9yLCBhcGkpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpO1xufVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMjIgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEdlbmVyYXRlcyBhbSB0eXBlZCBBUEkgZm9yIFZlYzRcbiAqICovXG5mdW5jdGlvbiBnZXRBUElJbXBsKEN0b3IpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdmVjNDsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLlxuICAgICAqIEBwYXJhbSB4IC0gSW5pdGlhbCB4IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IC0gSW5pdGlhbCB5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IC0gSW5pdGlhbCB6IHZhbHVlLlxuICAgICAqIEBwYXJhbSB3IC0gSW5pdGlhbCB3IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSh4LCB5LCB6LCB3KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IG5ldyBDdG9yKDQpO1xuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICAgICAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IHk7XG4gICAgICAgICAgICAgICAgaWYgKHogIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICAgICAgICAgICAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSB3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB2ZWM0OyBtYXkgYmUgY2FsbGVkIHdpdGggeCwgeSwgeiB0byBzZXQgaW5pdGlhbCB2YWx1ZXMuIChzYW1lIGFzIGNyZWF0ZSlcbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgeiB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgdyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBjb25zdCBmcm9tVmFsdWVzID0gY3JlYXRlO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlcyBvZiBhIFZlYzRcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjNC5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjNC5jb3B5fVxuICAgICAqXG4gICAgICogQHBhcmFtIHggZmlyc3QgdmFsdWVcbiAgICAgKiBAcGFyYW0geSBzZWNvbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0geiB0aGlyZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB3IGZvdXJ0aCB2YWx1ZVxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3Igd2l0aCBpdHMgZWxlbWVudHMgc2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldCh4LCB5LCB6LCB3LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHg7XG4gICAgICAgIG5ld0RzdFsxXSA9IHk7XG4gICAgICAgIG5ld0RzdFsyXSA9IHo7XG4gICAgICAgIG5ld0RzdFszXSA9IHc7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgTWF0aC5jZWlsIHRvIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgY2VpbCBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjZWlsKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5jZWlsKHZbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLmNlaWwodlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGguY2VpbCh2WzJdKTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5jZWlsKHZbM10pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguZmxvb3IgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBmbG9vciBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmbG9vcih2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguZmxvb3IodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguZmxvb3IodlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGguZmxvb3IodlsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IE1hdGguZmxvb3IodlszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgTWF0aC5yb3VuZCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHJvdW5kIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdW5kKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5yb3VuZCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5yb3VuZCh2WzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5yb3VuZCh2WzJdKTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5yb3VuZCh2WzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xhbXAgZWFjaCBlbGVtZW50IG9mIHZlY3RvciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gbWF4IC0gTWluIHZhbHVlLCBkZWZhdWx0IDBcbiAgICAgKiBAcGFyYW0gbWluIC0gTWF4IHZhbHVlLCBkZWZhdWx0IDFcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgdGhlIGNsYW1wZWQgdmFsdWUgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2xhbXAodiwgbWluID0gMCwgbWF4ID0gMSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlswXSkpO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlsxXSkpO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlsyXSkpO1xuICAgICAgICBuZXdEc3RbM10gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlszXSkpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgc3VtIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgYlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gYVszXSArIGJbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdHdvIHZlY3RvcnMsIHNjYWxpbmcgdGhlIDJuZDsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gc2NhbGUgLSBBbW91bnQgdG8gc2NhbGUgYlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgc3VtIG9mIGEgKyBiICogc2NhbGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkU2NhbGVkKGEsIGIsIHNjYWxlLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0d28gdmVjdG9ycy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdIC0gYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSAtIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdIC0gYlszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzQXBwcm94aW1hdGVseShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhWzBdIC0gYlswXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzJdIC0gYlsyXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzNdIC0gYlszXSkgPCBFUFNJTE9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9uIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB0LCByZXR1cm5zXG4gICAgICogYSArIHQgKiAoYiAtIGEpLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnQuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbGluZWFyIGludGVycG9sYXRlZCByZXN1bHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVycChhLCBiLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyB0ICogKGJbMF0gLSBhWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIHQgKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgdCAqIChiWzJdIC0gYVsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyB0ICogKGJbM10gLSBhWzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHZlY3RvciB0LCByZXR1cm5zXG4gICAgICogYSArIHQgKiAoYiAtIGEpLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnRzIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZXJwVihhLCBiLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyB0WzBdICogKGJbMF0gLSBhWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIHRbMV0gKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgdFsyXSAqIChiWzJdIC0gYVsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyB0WzNdICogKGJbM10gLSBhWzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1heCB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWF4KGFbMF0sIGJbMF0pLCBtYXgoYVsxXSwgYlsxXSksIG1heChhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1heCBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXgoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBNYXRoLm1heChhWzNdLCBiWzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1pbiB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWluKGFbMF0sIGJbMF0pLCBtaW4oYVsxXSwgYlsxXSksIG1pbihhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1pbiBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaW4oYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsU2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAqIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gKiBrO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdICogaztcbiAgICAgICAgbmV3RHN0WzNdID0gdlszXSAqIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuIChzYW1lIGFzIG11bFNjYWxhcilcbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3Qgc2NhbGUgPSBtdWxTY2FsYXI7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2U2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAvIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gLyBrO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdIC8gaztcbiAgICAgICAgbmV3RHN0WzNdID0gdlszXSAvIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludmVyc2UgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZlcnNlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMSAvIHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IDEgLyB2WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAxIC8gdlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gMSAvIHZbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludmVydCBhIHZlY3Rvci4gKHNhbWUgYXMgaW52ZXJzZSlcbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgaW52ZXJ0ZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IGludmVydCA9IGludmVyc2U7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRvdCBwcm9kdWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIChhWzBdICogYlswXSkgKyAoYVsxXSAqIGJbMV0pICsgKGFbMl0gKiBiWzJdKSArIChhWzNdICogYlszXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZW5ndGgodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBjb25zdCB2MyA9IHZbM107XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2Myk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgdmVjdG9yIChzYW1lIGFzIGxlbmd0aClcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aFNxKHYpIHtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgdjMgPSB2WzNdO1xuICAgICAgICByZXR1cm4gdjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2MztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvciAoc2FtZSBhcyBsZW5ndGhTcSlcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgbGVuU3EgPSBsZW5ndGhTcTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICAgICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICAgICAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgY29uc3QgZHcgPSBhWzNdIC0gYlszXTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHogKyBkdyAqIGR3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHMgKHNhbWUgYXMgZGlzdGFuY2UpXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgY29uc3QgZGlzdCA9IGRpc3RhbmNlO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlU3EoYSwgYikge1xuICAgICAgICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBjb25zdCBkeiA9IGFbMl0gLSBiWzJdO1xuICAgICAgICBjb25zdCBkdyA9IGFbM10gLSBiWzNdO1xuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6ICsgZHcgKiBkdztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyAoc2FtZSBhcyBkaXN0YW5jZVNxKVxuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgY29uc3QgZGlzdFNxID0gZGlzdGFuY2VTcTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgdjMgPSB2WzNdO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2Myk7XG4gICAgICAgIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSB2MCAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxIC8gbGVuO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gdjIgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbM10gPSB2MyAvIGxlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBhIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyAtdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZWdhdGUodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSAtdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gLXZbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IC12WzJdO1xuICAgICAgICBuZXdEc3RbM10gPSAtdlszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgdmVjdG9yLiAoc2FtZSBhcyB7QGxpbmsgdmVjNC5jbG9uZX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzQuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzQuc2V0fVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvcHkodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdO1xuICAgICAgICBuZXdEc3RbM10gPSB2WzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgYSB2ZWN0b3IuIChzYW1lIGFzIHtAbGluayB2ZWM0LmNvcHl9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayB2ZWM0LmNyZWF0ZX0gYW5kIHtAbGluayB2ZWM0LnNldH1cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2Ygdi5cbiAgICAgKi9cbiAgICBjb25zdCBjbG9uZSA9IGNvcHk7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHByb2R1Y3RzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKiBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICogYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAqIGJbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKiBiWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLiAoc2FtZSBhcyBtdWwpXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgbXVsID0gbXVsdGlwbHk7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAvIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdIC8gYlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gYVszXSAvIGJbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguIChzYW1lIGFzIGRpdmlkZSlcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgZGl2ID0gZGl2aWRlO1xuICAgIC8qKlxuICAgICAqIFplcm8ncyBhIHZlY3RvclxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHplcm9lZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gemVybyhkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHRyYW5zZm9ybSB2ZWM0IGJ5IDR4NCBtYXRyaXhcbiAgICAgKiBAcGFyYW0gdiAtIHRoZSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG9wdGlvbmFsIHZlYzQgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KHYsIG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgeCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHkgPSB2WzFdO1xuICAgICAgICBjb25zdCB6ID0gdlsyXTtcbiAgICAgICAgY29uc3QgdyA9IHZbM107XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdICogdztcbiAgICAgICAgbmV3RHN0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10gKiB3O1xuICAgICAgICBuZXdEc3RbMl0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0gKiB3O1xuICAgICAgICBuZXdEc3RbM10gPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6ICsgbVsxNV0gKiB3O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmVhdCBhIDREIHZlY3RvciBhcyBhIGRpcmVjdGlvbiBhbmQgc2V0IGl0J3MgbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjNCB0byBsZW5ndGhlblxuICAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3RvclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGhlbmVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldExlbmd0aChhLCBsZW4sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbm9ybWFsaXplKGEsIG5ld0RzdCk7XG4gICAgICAgIHJldHVybiBtdWxTY2FsYXIobmV3RHN0LCBsZW4sIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuc3VyZSBhIHZlY3RvciBpcyBub3QgbG9uZ2VyIHRoYW4gYSBtYXggbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjNCB0byBsaW1pdFxuICAgICAqIEBwYXJhbSBtYXhMZW4gVGhlIGxvbmdlc3QgbGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yXG4gICAgICogQHJldHVybnMgVGhlIHZlY3Rvciwgc2hvcnRlbmVkIHRvIG1heExlbiBpZiBpdCdzIHRvbyBsb25nXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUoYSwgbWF4TGVuLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGlmIChsZW5ndGgoYSkgPiBtYXhMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRMZW5ndGgoYSwgbWF4TGVuLCBuZXdEc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3B5KGEsIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGV4YWN0bHkgYmV0d2VlbiAyIGVuZHBvaW50IHZlY3RvcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIEVuZHBvaW50IDFcbiAgICAgKiBAcGFyYW0gYiBFbmRwb2ludCAyXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBleGFjdGx5IHJlc2lkaW5nIGJldHdlZW4gZW5kcG9pbnRzIDEgYW5kIDJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaWRwb2ludChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIHJldHVybiBsZXJwKGEsIGIsIDAuNSwgbmV3RHN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBmcm9tVmFsdWVzLFxuICAgICAgICBzZXQsXG4gICAgICAgIGNlaWwsXG4gICAgICAgIGZsb29yLFxuICAgICAgICByb3VuZCxcbiAgICAgICAgY2xhbXAsXG4gICAgICAgIGFkZCxcbiAgICAgICAgYWRkU2NhbGVkLFxuICAgICAgICBzdWJ0cmFjdCxcbiAgICAgICAgc3ViLFxuICAgICAgICBlcXVhbHNBcHByb3hpbWF0ZWx5LFxuICAgICAgICBlcXVhbHMsXG4gICAgICAgIGxlcnAsXG4gICAgICAgIGxlcnBWLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgbXVsU2NhbGFyLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgZGl2U2NhbGFyLFxuICAgICAgICBpbnZlcnNlLFxuICAgICAgICBpbnZlcnQsXG4gICAgICAgIGRvdCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBsZW4sXG4gICAgICAgIGxlbmd0aFNxLFxuICAgICAgICBsZW5TcSxcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGRpc3QsXG4gICAgICAgIGRpc3RhbmNlU3EsXG4gICAgICAgIGRpc3RTcSxcbiAgICAgICAgbm9ybWFsaXplLFxuICAgICAgICBuZWdhdGUsXG4gICAgICAgIGNvcHksXG4gICAgICAgIGNsb25lLFxuICAgICAgICBtdWx0aXBseSxcbiAgICAgICAgbXVsLFxuICAgICAgICBkaXZpZGUsXG4gICAgICAgIGRpdixcbiAgICAgICAgemVybyxcbiAgICAgICAgdHJhbnNmb3JtTWF0NCxcbiAgICAgICAgc2V0TGVuZ3RoLFxuICAgICAgICB0cnVuY2F0ZSxcbiAgICAgICAgbWlkcG9pbnQsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuLyoqXG4gKlxuICogVmVjNCBtYXRoIGZ1bmN0aW9ucy5cbiAqXG4gKiBBbG1vc3QgYWxsIGZ1bmN0aW9ucyB0YWtlIGFuIG9wdGlvbmFsIGBuZXdEc3RgIGFyZ3VtZW50LiBJZiBpdCBpcyBub3QgcGFzc2VkIGluIHRoZVxuICogZnVuY3Rpb25zIHdpbGwgY3JlYXRlIGEgbmV3IGBWZWM0YC4gSW4gb3RoZXIgd29yZHMgeW91IGNhbiBkbyB0aGlzXG4gKlxuICogICAgIGNvbnN0IHYgPSB2ZWM0LmNyb3NzKHYxLCB2Mik7ICAvLyBDcmVhdGVzIGEgbmV3IFZlYzQgd2l0aCB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyLlxuICpcbiAqIG9yXG4gKlxuICogICAgIGNvbnN0IHYgPSB2ZWM0LmNyZWF0ZSgpO1xuICogICAgIHZlYzQuY3Jvc3ModjEsIHYyLCB2KTsgIC8vIFB1dHMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2MiBpbiB2XG4gKlxuICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICogYXMgdGhlcmUgaXMgYWxtb3N0IG5ldmVyIGFsbG9jYXRpb24gd2l0aCB0aGUgc2Vjb25kIHN0eWxlLlxuICpcbiAqIEl0IGlzIGFsd2F5cyBzYWZlIHRvIHBhc3MgYW55IHZlY3RvciBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gKlxuICogICAgIHZlYzQuY3Jvc3ModjEsIHYyLCB2MSk7ICAvLyBQdXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIgaW4gdjFcbiAqXG4gKi9cbmZ1bmN0aW9uIGdldEFQSShDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlLmdldChDdG9yKTtcbiAgICBpZiAoIWFwaSkge1xuICAgICAgICBhcGkgPSBnZXRBUElJbXBsKEN0b3IpO1xuICAgICAgICBjYWNoZS5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLyoqXG4gKiBTb21lIGRvY3NcbiAqIEBuYW1lc3BhY2Ugd2dwdS1tYXRyaXhcbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZSB3Z3B1LW1hdHJpeCBBUEkgZm9yIHR5cGVcbiAqL1xuZnVuY3Rpb24gd2dwdU1hdHJpeEFQSShNYXQzQ3RvciwgTWF0NEN0b3IsIFF1YXRDdG9yLCBWZWMyQ3RvciwgVmVjM0N0b3IsIFZlYzRDdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgbWF0MyAqL1xuICAgICAgICBtYXQzOiBnZXRBUEkkMyhNYXQzQ3RvciksXG4gICAgICAgIC8qKiBAbmFtZXNwYWNlIG1hdDQgKi9cbiAgICAgICAgbWF0NDogZ2V0QVBJJDIoTWF0NEN0b3IpLFxuICAgICAgICAvKiogQG5hbWVzcGFjZSBxdWF0ICovXG4gICAgICAgIHF1YXQ6IGdldEFQSSQxKFF1YXRDdG9yKSxcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgdmVjMiAqL1xuICAgICAgICB2ZWMyOiBnZXRBUEkkNShWZWMyQ3RvciksXG4gICAgICAgIC8qKiBAbmFtZXNwYWNlIHZlYzMgKi9cbiAgICAgICAgdmVjMzogZ2V0QVBJJDQoVmVjM0N0b3IpLFxuICAgICAgICAvKiogQG5hbWVzcGFjZSB2ZWM0ICovXG4gICAgICAgIHZlYzQ6IGdldEFQSShWZWM0Q3RvciksXG4gICAgfTtcbn1cbmNvbnN0IHsgXG4vKipcbiAqIDN4MyBNYXRyaXggZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xubWF0MywgXG4vKipcbiAqIDR4NCBNYXRyaXggZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xubWF0NCwgXG4vKipcbiAqIFF1YXRlcm5pb24gZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xucXVhdCwgXG4vKipcbiAqIFZlYzIgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xudmVjMiwgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xudmVjMywgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0MzJBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xudmVjNCwgfSA9IHdncHVNYXRyaXhBUEkoRmxvYXQzMkFycmF5LCBGbG9hdDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDMyQXJyYXksIEZsb2F0MzJBcnJheSk7XG5jb25zdCB7IFxuLyoqXG4gKiAzeDMgTWF0cml4IGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDY0QXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbm1hdDM6IG1hdDNkLCBcbi8qKlxuICogNHg0IE1hdHJpeCBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgRmxvYXQ2NEFycmF5YFxuICogQG5hbWVzcGFjZVxuICovXG5tYXQ0OiBtYXQ0ZCwgXG4vKipcbiAqIFF1YXRlcm5pb24gZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0NjRBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xucXVhdDogcXVhdGQsIFxuLyoqXG4gKiBWZWMyIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDY0QXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzI6IHZlYzJkLCBcbi8qKlxuICogVmVjMyBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgRmxvYXQ2NEFycmF5YFxuICogQG5hbWVzcGFjZVxuICovXG52ZWMzOiB2ZWMzZCwgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0NjRBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xudmVjNDogdmVjNGQsIH0gPSB3Z3B1TWF0cml4QVBJKEZsb2F0NjRBcnJheSwgRmxvYXQ2NEFycmF5LCBGbG9hdDY0QXJyYXksIEZsb2F0NjRBcnJheSwgRmxvYXQ2NEFycmF5LCBGbG9hdDY0QXJyYXkpO1xuY29uc3QgeyBcbi8qKlxuICogM3gzIE1hdHJpeCBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbm1hdDM6IG1hdDNuLCBcbi8qKlxuICogNHg0IE1hdHJpeCBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbm1hdDQ6IG1hdDRuLCBcbi8qKlxuICogUXVhdGVybmlvbiBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnF1YXQ6IHF1YXRuLCBcbi8qKlxuICogVmVjMiBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzI6IHZlYzJuLCBcbi8qKlxuICogVmVjMyBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzM6IHZlYzNuLCBcbi8qKlxuICogVmVjMyBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgbnVtYmVyW11gXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzQ6IHZlYzRuLCB9ID0gd2dwdU1hdHJpeEFQSShaZXJvQXJyYXksIEFycmF5LCBBcnJheSwgQXJyYXksIEFycmF5LCBBcnJheSk7XG5cbmV4cG9ydCB7IG1hdDMsIG1hdDNkLCBtYXQzbiwgbWF0NCwgbWF0NGQsIG1hdDRuLCBxdWF0LCBxdWF0ZCwgcXVhdG4sIHV0aWxzLCB2ZWMyLCB2ZWMyZCwgdmVjMm4sIHZlYzMsIHZlYzNkLCB2ZWMzbiwgdmVjNCwgdmVjNGQsIHZlYzRuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD13Z3B1LW1hdHJpeC5tb2R1bGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FtZXJhID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4uL3RyYW5zZm9ybVwiKTtcbmNsYXNzIENhbWVyYSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIC0tLSBEaXJ0eSBGbGFncyAtLS1cbiAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIC8vIEluaXRpYWxpemUgbWF0cmljZXMgdXNpbmcgd2dwdS1tYXRyaXggaWRlbnRpdHlcbiAgICAgICAgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCA9IHdncHVfbWF0cml4XzEubWF0NC5pZGVudGl0eSgpO1xuICAgICAgICB0aGlzLl92aWV3TWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0LmlkZW50aXR5KCk7XG4gICAgICAgIC8vIE1hcmsgYXMgZGlydHkgaW5pdGlhbGx5IHRvIGZvcmNlIGNhbGN1bGF0aW9uIG9uIGZpcnN0IGFjY2Vzc1xuICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzVmlld0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gLS0tIEdldHRlcnMgZm9yIE1hdHJpY2VzICh3aXRoIGxhenkgY2FsY3VsYXRpb24pIC0tLVxuICAgIGdldCBwcm9qZWN0aW9uTWF0cml4KCkge1xuICAgICAgICBpZiAodGhpcy5faXNQcm9qZWN0aW9uRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0aW9uTWF0cml4O1xuICAgIH1cbiAgICBnZXQgdmlld01hdHJpeCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVmlld0RpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXdNYXRyaXgoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeDtcbiAgICB9XG4gICAgLy8gT3B0aW9uYWw6IE1ldGhvZCB0byBmb3JjZSB1cGRhdGUgYm90aCBtYXRyaWNlcyBpZiBuZWVkZWRcbiAgICB1cGRhdGVNYXRyaWNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNWaWV3RGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld01hdHJpeCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5DYW1lcmEgPSBDYW1lcmE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT3J0aG9ncmFwaGljQ2FtZXJhID0gZXhwb3J0cy5QZXJzcGVjdGl2ZUNhbWVyYSA9IGV4cG9ydHMuQ2FtZXJhID0gdm9pZCAwO1xudmFyIGNhbWVyYV8xID0gcmVxdWlyZShcIi4vY2FtZXJhXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2FtZXJhXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYW1lcmFfMS5DYW1lcmE7IH0gfSk7XG52YXIgcGVyc3BlY3RpdmVfY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9wZXJzcGVjdGl2ZS1jYW1lcmFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJQZXJzcGVjdGl2ZUNhbWVyYVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyc3BlY3RpdmVfY2FtZXJhXzEuUGVyc3BlY3RpdmVDYW1lcmE7IH0gfSk7XG52YXIgb3J0aG9ncmFwaGljX2NhbWVyYV8xID0gcmVxdWlyZShcIi4vb3J0aG9ncmFwaGljLWNhbWVyYVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk9ydGhvZ3JhcGhpY0NhbWVyYVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gb3J0aG9ncmFwaGljX2NhbWVyYV8xLk9ydGhvZ3JhcGhpY0NhbWVyYTsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5PcnRob2dyYXBoaWNDYW1lcmEgPSB2b2lkIDA7XG5jb25zdCB3Z3B1X21hdHJpeF8xID0gcmVxdWlyZShcIndncHUtbWF0cml4XCIpO1xuY29uc3QgY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9jYW1lcmFcIik7XG5jbGFzcyBPcnRob2dyYXBoaWNDYW1lcmEgZXh0ZW5kcyBjYW1lcmFfMS5DYW1lcmEge1xuICAgIGNvbnN0cnVjdG9yKHsgbGVmdCA9IC0xLCAvLyBEZWZhdWx0IGZydXN0dW0gc3BhbnMgLTEgdG8gMSBpbiBYIGFuZCBZXG4gICAgcmlnaHQgPSAxLCBib3R0b20gPSAtMSwgdG9wID0gMSwgbmVhciA9IDAuMSwgZmFyID0gMTAwMC4wLCBwb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMCwgMTApLCAvLyBEZWZhdWx0IHBvc2l0aW9uXG4gICAgdGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSgwLCAwLCAwKSwgLy8gRGVmYXVsdCB0YXJnZXQgKG9yaWdpbilcbiAgICB1cCA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMSwgMCkgLy8gRGVmYXVsdCB1cCB2ZWN0b3IgKFktYXhpcylcbiAgICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgICAgIHRoaXMudG9wID0gdG9wO1xuICAgICAgICB0aGlzLm5lYXIgPSBuZWFyO1xuICAgICAgICB0aGlzLmZhciA9IGZhcjtcbiAgICAgICAgLy8gVXNlIGNyZWF0ZSBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBjb3B5XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY2xvbmUocG9zaXRpb24pO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHdncHVfbWF0cml4XzEudmVjMy5jbG9uZSh0YXJnZXQpO1xuICAgICAgICB0aGlzLnVwID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNsb25lKHVwKTtcbiAgICB9XG4gICAgLy8gLS0tIE1ldGhvZHMgdG8gVXBkYXRlIE1hdHJpY2VzIC0tLVxuICAgIHVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgT3J0aG9ncmFwaGljIFByb2plY3Rpb24gTWF0cml4IHVzaW5nIHdncHUtbWF0cml4XCIpOyAvLyBGb3IgZGVidWdnaW5nXG4gICAgICAgIC8vIFVzZSB3Z3B1LW1hdHJpeCBvcnRobyBmdW5jdGlvblxuICAgICAgICAvLyBtYXQ0Lm9ydGhvKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyLCBkZXN0aW5hdGlvbk1hdHJpeD8pXG4gICAgICAgIC8vIEl0IHJldHVybnMgYSBuZXcgbWF0cml4IGlmIGRlc3RpbmF0aW9uIGlzIG5vdCBwcm92aWRlZC5cbiAgICAgICAgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCA9IHdncHVfbWF0cml4XzEubWF0NC5vcnRobyh0aGlzLmxlZnQsIHRoaXMucmlnaHQsIHRoaXMuYm90dG9tLCB0aGlzLnRvcCwgdGhpcy5uZWFyLCB0aGlzLmZhclxuICAgICAgICAvLyBPcHRpb25hbGx5IHBhc3MgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCBhcyB0aGUgbGFzdCBhcmd1bWVudFxuICAgICAgICAvLyBtYXQ0Lm9ydGhvKHRoaXMubGVmdCwgLi4uLCB0aGlzLmZhciwgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCk7XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZVZpZXdNYXRyaXgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgVmlldyBNYXRyaXggdXNpbmcgd2dwdS1tYXRyaXhcIik7IC8vIEZvciBkZWJ1Z2dpbmdcbiAgICAgICAgLy8gVXNlIHdncHUtbWF0cml4IGxvb2tBdCBmdW5jdGlvblxuICAgICAgICB0aGlzLl92aWV3TWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0Lmxvb2tBdCh0aGlzLnBvc2l0aW9uLCB0aGlzLnRhcmdldCwgdGhpcy51cFxuICAgICAgICAvLyBPcHRpb25hbGx5IHBhc3MgdGhpcy5fdmlld01hdHJpeCBhcyB0aGUgbGFzdCBhcmd1bWVudFxuICAgICAgICAvLyBtYXQ0Lmxvb2tBdCh0aGlzLnBvc2l0aW9uLCB0aGlzLnRhcmdldCwgdGhpcy51cCwgdGhpcy5fdmlld01hdHJpeCk7XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2lzVmlld0RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIC0tLSBNZXRob2RzIHRvIE1vZGlmeSBDYW1lcmEgUHJvcGVydGllcyAoYW5kIG1hcmsgZGlydHkpIC0tLVxuICAgIC8vIFVzaW5nIHZlYzMuZXF1YWxzIGZvciBjb21wYXJpc29uIGFuZCB2ZWMzLmNvcHkgZm9yIHNldHRpbmdcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEudmVjMy5lcXVhbHModGhpcy5wb3NpdGlvbiwgbmV3UG9zaXRpb24pKSB7XG4gICAgICAgICAgICAvLyBVc2UgY29weSB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIGlucHV0IGFycmF5IGlmIGl0J3MgcmV1c2VkIGVsc2V3aGVyZVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1Bvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTsgLy8gY29weShzcmMsIGRzdD8pXG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGFyZ2V0KG5ld1RhcmdldCkge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEudmVjMy5lcXVhbHModGhpcy50YXJnZXQsIG5ld1RhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNvcHkobmV3VGFyZ2V0LCB0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VXAobmV3VXApIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMudXAsIG5ld1VwKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1VwLCB0aGlzLnVwKTtcbiAgICAgICAgICAgIHRoaXMuX2lzVmlld0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTZXR0ZXJzIGZvciBvcnRob2dyYXBoaWMgcHJvcGVydGllc1xuICAgIHNldExlZnQobmV3TGVmdCkge1xuICAgICAgICBpZiAodGhpcy5sZWZ0ICE9PSBuZXdMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBuZXdMZWZ0O1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJpZ2h0KG5ld1JpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0ICE9PSBuZXdSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IG5ld1JpZ2h0O1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEJvdHRvbShuZXdCb3R0b20pIHtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tICE9PSBuZXdCb3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gbmV3Qm90dG9tO1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRvcChuZXdUb3ApIHtcbiAgICAgICAgaWYgKHRoaXMudG9wICE9PSBuZXdUb3ApIHtcbiAgICAgICAgICAgIHRoaXMudG9wID0gbmV3VG9wO1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldE5lYXIobmV3TmVhcikge1xuICAgICAgICBpZiAodGhpcy5uZWFyICE9PSBuZXdOZWFyKSB7XG4gICAgICAgICAgICB0aGlzLm5lYXIgPSBuZXdOZWFyO1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEZhcihuZXdGYXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZmFyICE9PSBuZXdGYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmFyID0gbmV3RmFyO1xuICAgICAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZpZXdwb3J0UmVzaXplZChfKSB7XG4gICAgICAgIC8vIG5vcFxuICAgIH1cbn1cbmV4cG9ydHMuT3J0aG9ncmFwaGljQ2FtZXJhID0gT3J0aG9ncmFwaGljQ2FtZXJhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBlcnNwZWN0aXZlQ2FtZXJhID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IGNhbWVyYV8xID0gcmVxdWlyZShcIi4vY2FtZXJhXCIpO1xuY2xhc3MgUGVyc3BlY3RpdmVDYW1lcmEgZXh0ZW5kcyBjYW1lcmFfMS5DYW1lcmEge1xuICAgIGNvbnN0cnVjdG9yKHsgZm92ID0gTWF0aC5QSSAvIDQsIC8vIERlZmF1bHQ6IDQ1IGRlZ3JlZXMgRk9WXG4gICAgYXNwZWN0ID0gMTYgLyA5LCAvLyBEZWZhdWx0OiBDb21tb24gYXNwZWN0IHJhdGlvXG4gICAgbmVhciA9IDAuMSwgZmFyID0gMTAwMC4wLCBwb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMCwgMTApLCAvLyBVc2UgdmVjMy5jcmVhdGUgZm9yIGRlZmF1bHRcbiAgICB0YXJnZXQgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDAsIDApLCAvLyBVc2UgdmVjMy5jcmVhdGUgZm9yIGRlZmF1bHRcbiAgICB1cCA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMSwgMCkgLy8gVXNlIHZlYzMuY3JlYXRlIGZvciBkZWZhdWx0XG4gICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZvdiA9IGZvdjtcbiAgICAgICAgdGhpcy5hc3BlY3QgPSBhc3BlY3Q7XG4gICAgICAgIHRoaXMubmVhciA9IG5lYXI7XG4gICAgICAgIHRoaXMuZmFyID0gZmFyO1xuICAgICAgICAvLyBVc2UgY3JlYXRlIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNvcHlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jbG9uZShwb3NpdGlvbik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNsb25lKHRhcmdldCk7XG4gICAgICAgIHRoaXMudXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY2xvbmUodXApO1xuICAgIH1cbiAgICAvLyAtLS0gTWV0aG9kcyB0byBVcGRhdGUgTWF0cmljZXMgLS0tXG4gICAgdXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBQcm9qZWN0aW9uIE1hdHJpeCB1c2luZyB3Z3B1LW1hdHJpeFwiKTtcbiAgICAgICAgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCA9IHdncHVfbWF0cml4XzEubWF0NC5wZXJzcGVjdGl2ZSh0aGlzLmZvdiwgdGhpcy5hc3BlY3QsIHRoaXMubmVhciwgdGhpcy5mYXIpO1xuICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVWaWV3TWF0cml4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIFZpZXcgTWF0cml4IHVzaW5nIHdncHUtbWF0cml4XCIpO1xuICAgICAgICB0aGlzLl92aWV3TWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0Lmxvb2tBdCh0aGlzLnBvc2l0aW9uLCB0aGlzLnRhcmdldCwgdGhpcy51cCk7XG4gICAgICAgIHRoaXMuX2lzVmlld0RpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIC0tLSBNZXRob2RzIHRvIE1vZGlmeSBDYW1lcmEgUHJvcGVydGllcyAoYW5kIG1hcmsgZGlydHkpIC0tLVxuICAgIC8vIFVzaW5nIHZlYzMuZXF1YWxzIGZvciBjb21wYXJpc29uIGFuZCB2ZWMzLmNvcHkgZm9yIHNldHRpbmdcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbikge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEudmVjMy5lcXVhbHModGhpcy5wb3NpdGlvbiwgbmV3UG9zaXRpb24pKSB7XG4gICAgICAgICAgICAvLyBVc2UgY29weSB0byBhdm9pZCBtb2RpZnlpbmcgdGhlIGlucHV0IGFycmF5IGlmIGl0J3MgcmV1c2VkIGVsc2V3aGVyZVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1Bvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTsgLy8gY29weShzcmMsIGRzdD8pXG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VGFyZ2V0KG5ld1RhcmdldCkge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEudmVjMy5lcXVhbHModGhpcy50YXJnZXQsIG5ld1RhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNvcHkobmV3VGFyZ2V0LCB0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VXAobmV3VXApIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMudXAsIG5ld1VwKSkge1xuICAgICAgICAgICAgdGhpcy51cCA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1VwLCB0aGlzLnVwKTtcbiAgICAgICAgICAgIHRoaXMuX2lzVmlld0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3YobmV3Rm92KSB7XG4gICAgICAgIGlmICh0aGlzLmZvdiAhPT0gbmV3Rm92KSB7XG4gICAgICAgICAgICB0aGlzLmZvdiA9IG5ld0ZvdjtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRBc3BlY3QobmV3QXNwZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmFzcGVjdCAhPT0gbmV3QXNwZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmFzcGVjdCA9IG5ld0FzcGVjdDtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXROZWFyKG5ld05lYXIpIHtcbiAgICAgICAgaWYgKHRoaXMubmVhciAhPT0gbmV3TmVhcikge1xuICAgICAgICAgICAgdGhpcy5uZWFyID0gbmV3TmVhcjtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGYXIobmV3RmFyKSB7XG4gICAgICAgIGlmICh0aGlzLmZhciAhPT0gbmV3RmFyKSB7XG4gICAgICAgICAgICB0aGlzLmZhciA9IG5ld0ZhcjtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3cG9ydFJlc2l6ZWQoc2l6ZSkge1xuICAgICAgICB0aGlzLnNldEFzcGVjdChzaXplWzBdIC8gc2l6ZVsxXSk7XG4gICAgfVxufVxuZXhwb3J0cy5QZXJzcGVjdGl2ZUNhbWVyYSA9IFBlcnNwZWN0aXZlQ2FtZXJhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbG9yID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNsYXNzIENvbG9yIHtcbiAgICBjb25zdHJ1Y3RvcihyLCBnLCBiLCBhID0gMSkge1xuICAgICAgICB0aGlzLnIgPSByO1xuICAgICAgICB0aGlzLmcgPSBnO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgIH1cbiAgICB1bmlmb3JtVmFsdWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5idWZmZXIpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLmJ1ZmZlciA9IHdncHVfbWF0cml4XzEudmVjNC5jcmVhdGUoKSk7XG4gICAgICAgIHRoaXMuYnVmZmVyLnNldChbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgICB9XG59XG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tcHV0ZVRhc2sgPSB2b2lkIDA7XG5jb25zdCB3Z3B1X21hdHJpeF8xID0gcmVxdWlyZShcIndncHUtbWF0cml4XCIpO1xuY2xhc3MgQ29tcHV0ZVRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBjYWNoZUtleSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5cyA9IFtcbiAgICAgICAgICAgIHRoaXMubGFiZWwsXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnNoYWRlci5sYWJlbCxcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMuZW50cnlQb2ludCxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChjb25zdCBidWYgb2YgdGhpcy5fb3B0aW9ucy5idWZmZXJzIHx8IFtdKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goYnVmLmJ1ZmZlci5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0ZXggb2YgdGhpcy5fb3B0aW9ucy50ZXh0dXJlcyB8fCBbXSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKHRleC50ZXh0dXJlLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGtleXMuam9pbihcIjpcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUtleTtcbiAgICB9XG4gICAgZ2V0IHNoYWRlck1vZHVsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuc2hhZGVyO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxhYmVsIHx8IFwiQ29tcHV0ZSBUYXNrXCI7XG4gICAgfVxuICAgIGdldCBkaXNwYXRjaENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5kaXNwYXRjaENvdW50IHx8IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoOCwgOCwgMSk7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXREZXNjcmlwdG9yKCkge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGxldCBiaW5kaW5nID0gMDtcbiAgICAgICAgY29uc3QgeyB0ZXh0dXJlcywgYnVmZmVycywgc2FtcGxlcnMgfSA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIGlmICgoc2FtcGxlcnMgPT09IG51bGwgfHwgc2FtcGxlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhbXBsZXJzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChzYW1wbGVycyA9PT0gbnVsbCB8fCBzYW1wbGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2FtcGxlcnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuQ09NUFVURSxcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogc2FtcGxlcnNbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0ZXh0dXJlcyA9PT0gbnVsbCB8fCB0ZXh0dXJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGV4dHVyZXMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRleHR1cmVzID09PSBudWxsIHx8IHRleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZXh0dXJlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGV4dHVyZXNbaV0uYWNjZXNzVHlwZSA9PT0gXCJzYW1wbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlVHlwZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEaW1lbnNpb246IHRleHR1cmVzW2ldLmRpbWVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXNhbXBsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGFjY2Vzc1R5cGUgfSA9IHRleHR1cmVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3MgPSBhY2Nlc3NUeXBlID09PSBcInN0b3JhZ2VSZWFkV3JpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlYWQtd3JpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhY2Nlc3NUeXBlID09PSBcInN0b3JhZ2VXcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIndyaXRlLW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZWFkLW9ubHlcIjtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiB0ZXh0dXJlc1tpXS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0RpbWVuc2lvbjogdGV4dHVyZXNbaV0uZGltZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJ1ZmZlcnMgPT09IG51bGwgfHwgYnVmZmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnVmZmVycy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYnVmZmVycyA9PT0gbnVsbCB8fCBidWZmZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidWZmZXJzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogeyB0eXBlOiBidWZmZXJzW2ldLnR5cGUgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAgICAgbGFiZWw6IGAke3RoaXMubGFiZWx9IEJpbmRHcm91cCBMYXlvdXRgLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cEVudHJpZXMoKSB7XG4gICAgICAgIGxldCBiaW5kaW5nID0gMDtcbiAgICAgICAgY29uc3QgeyB0ZXh0dXJlcywgYnVmZmVycywgc2FtcGxlcnMgfSA9IHRoaXMuX29wdGlvbnM7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgaWYgKChzYW1wbGVycyA9PT0gbnVsbCB8fCBzYW1wbGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2FtcGxlcnMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHNhbXBsZXJzID09PSBudWxsIHx8IHNhbXBsZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzYW1wbGVycy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogc2FtcGxlcnNbaV0uc2FtcGxlcixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh0ZXh0dXJlcyA9PT0gbnVsbCB8fCB0ZXh0dXJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGV4dHVyZXMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHRleHR1cmVzID09PSBudWxsIHx8IHRleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZXh0dXJlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0dXJlc1tpXSk7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHRleHR1cmVzW2ldLnRleHR1cmUudmlldyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChidWZmZXJzID09PSBudWxsIHx8IGJ1ZmZlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1ZmZlcnMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGJ1ZmZlcnMgPT09IG51bGwgfHwgYnVmZmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnVmZmVycy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTogeyBidWZmZXI6IGJ1ZmZlcnNbaV0uYnVmZmVyIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmluZGluZysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGVudHJpZXMpO1xuICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICB9XG4gICAgZ2V0QmluZEdyb3VwTGF5b3V0KGRldmljZSkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwTGF5b3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwTGF5b3V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cExheW91dCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQodGhpcy5iaW5kR3JvdXBMYXlvdXREZXNjcmlwdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRHcm91cExheW91dDtcbiAgICB9XG4gICAgZ2V0QmluZEdyb3VwKGRldmljZSkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgICAgICBsYXlvdXQ6IHRoaXMuX2JpbmRHcm91cExheW91dCxcbiAgICAgICAgICAgIGVudHJpZXM6IHRoaXMuYmluZEdyb3VwRW50cmllcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kR3JvdXA7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wdXRlVGFzayA9IENvbXB1dGVUYXNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJpZ1RyaWFuZ2xlID0gdm9pZCAwO1xuY29uc3QgZ2VvbWV0cnlfMSA9IHJlcXVpcmUoXCIuL2dlb21ldHJ5XCIpO1xuY2xhc3MgQmlnVHJpYW5nbGUgZXh0ZW5kcyBnZW9tZXRyeV8xLkdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhCdWZmZXIgPSByZW5kZXJlci5jcmVhdGVCdWZmZXIobmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgICAtMSwgLTEsIDAsXG4gICAgICAgICAgICAzLCAtMSwgMCxcbiAgICAgICAgICAgIC0xLCAzLCAwXG4gICAgICAgIF0pLCBHUFVCdWZmZXJVc2FnZS5WRVJURVgpO1xuICAgICAgICBjb25zdCBpbmRleEJ1ZmZlciA9IHJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcihuZXcgVWludDE2QXJyYXkoWzAsIDEsIDJdKSwgR1BVQnVmZmVyVXNhZ2UuSU5ERVgpO1xuICAgICAgICBjb25zdCB1dkJ1ZmZlciA9IHJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcihuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAyLCAwLFxuICAgICAgICAgICAgMCwgMlxuICAgICAgICBdKSwgR1BVQnVmZmVyVXNhZ2UuVkVSVEVYKTtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIHZlcnRleEJ1ZmZlciwgaW5kZXhCdWZmZXIsIHV2QnVmZmVyLCAzLCAzKTtcbiAgICB9XG4gICAgZ2V0IGNhY2hlS2V5KCkge1xuICAgICAgICByZXR1cm4gXCJiaWctdHJpYW5nbGVcIjtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlckxheW91dCgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZsb2F0MzJ4M1wiLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogMyAqIDQsXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6IFwidmVydGV4XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTG9jYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZmxvYXQzMngyXCIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGFycmF5U3RyaWRlOiAyICogNCxcbiAgICAgICAgICAgICAgICBzdGVwTW9kZTogXCJ2ZXJ0ZXhcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG59XG5leHBvcnRzLkJpZ1RyaWFuZ2xlID0gQmlnVHJpYW5nbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3ViZUdlb21ldHJ5ID0gdm9pZCAwO1xuY29uc3QgZ2VvbWV0cnlfMSA9IHJlcXVpcmUoXCIuL2dlb21ldHJ5XCIpO1xuZnVuY3Rpb24gX2NyZWF0ZUN1YmVHZW9tZXRyeURhdGEoKSB7XG4gICAgY29uc3QgZmxvYXRzUGVyVmVydGV4ID0gODsgLy8gcG9zaXRpb24gKDMpICsgdXYgKDIpICsgbm9ybWFsICgzKVxuICAgIGNvbnN0IGFycmF5U3RyaWRlID0gZmxvYXRzUGVyVmVydGV4ICogNDsgLy8gQnl0ZXMgcGVyIHZlcnRleFxuICAgIGNvbnN0IGZhY2VEYXRhID0gW1xuICAgICAgICAvLyBGcm9udCBmYWNlICgrWikgLSBOb3JtYWw6IFswLCAwLCAxXVxuICAgICAgICAvLyBWZXJ0aWNlczogQkwsIEJSLCBUUiwgVEwgKEJvdHRvbUxlZnQsIEJvdHRvbVJpZ2h0LCBUb3BSaWdodCwgVG9wTGVmdClcbiAgICAgICAgWy0wLjUsIC0wLjUsIDAuNSwgMCwgMSwgMCwgMCwgMV0sXG4gICAgICAgIFswLjUsIC0wLjUsIDAuNSwgMSwgMSwgMCwgMCwgMV0sXG4gICAgICAgIFswLjUsIDAuNSwgMC41LCAxLCAwLCAwLCAwLCAxXSxcbiAgICAgICAgWy0wLjUsIDAuNSwgMC41LCAwLCAwLCAwLCAwLCAxXSxcbiAgICAgICAgLy8gQmFjayBmYWNlICgtWikgLSBOb3JtYWw6IFswLCAwLCAtMV1cbiAgICAgICAgLy8gVmVydGljZXM6IEJSLCBCTCwgVEwsIFRSIChVVnMgYXJlIGZsaXBwZWQgZm9yIHN0YW5kYXJkIHRleHR1cmUgbWFwcGluZyBvbiBiYWNrKVxuICAgICAgICBbMC41LCAtMC41LCAtMC41LCAxLCAxLCAwLCAwLCAtMV0sXG4gICAgICAgIFstMC41LCAtMC41LCAtMC41LCAwLCAxLCAwLCAwLCAtMV0sXG4gICAgICAgIFstMC41LCAwLjUsIC0wLjUsIDAsIDAsIDAsIDAsIC0xXSxcbiAgICAgICAgWzAuNSwgMC41LCAtMC41LCAxLCAwLCAwLCAwLCAtMV0sXG4gICAgICAgIC8vIFJpZ2h0IGZhY2UgKCtYKSAtIE5vcm1hbDogWzEsIDAsIDBdXG4gICAgICAgIC8vIFZlcnRpY2VzOiBCTCwgQlIsIFRSLCBUTFxuICAgICAgICBbMC41LCAtMC41LCAwLjUsIDAsIDEsIDEsIDAsIDBdLFxuICAgICAgICBbMC41LCAtMC41LCAtMC41LCAxLCAxLCAxLCAwLCAwXSxcbiAgICAgICAgWzAuNSwgMC41LCAtMC41LCAxLCAwLCAxLCAwLCAwXSxcbiAgICAgICAgWzAuNSwgMC41LCAwLjUsIDAsIDAsIDEsIDAsIDBdLFxuICAgICAgICAvLyBMZWZ0IGZhY2UgKC1YKSAtIE5vcm1hbDogWy0xLCAwLCAwXVxuICAgICAgICAvLyBWZXJ0aWNlczogQlIsIEJMLCBUTCwgVFJcbiAgICAgICAgWy0wLjUsIC0wLjUsIC0wLjUsIDEsIDEsIC0xLCAwLCAwXSxcbiAgICAgICAgWy0wLjUsIC0wLjUsIDAuNSwgMCwgMSwgLTEsIDAsIDBdLFxuICAgICAgICBbLTAuNSwgMC41LCAwLjUsIDAsIDAsIC0xLCAwLCAwXSxcbiAgICAgICAgWy0wLjUsIDAuNSwgLTAuNSwgMSwgMCwgLTEsIDAsIDBdLFxuICAgICAgICAvLyBUb3AgZmFjZSAoK1kpIC0gTm9ybWFsOiBbMCwgMSwgMF1cbiAgICAgICAgLy8gVmVydGljZXM6IEJMLCBCUiwgVFIsIFRMXG4gICAgICAgIFstMC41LCAwLjUsIDAuNSwgMCwgMSwgMCwgMSwgMF0sXG4gICAgICAgIFswLjUsIDAuNSwgMC41LCAxLCAxLCAwLCAxLCAwXSxcbiAgICAgICAgWzAuNSwgMC41LCAtMC41LCAxLCAwLCAwLCAxLCAwXSxcbiAgICAgICAgWy0wLjUsIDAuNSwgLTAuNSwgMCwgMCwgMCwgMSwgMF0sXG4gICAgICAgIC8vIEJvdHRvbSBmYWNlICgtWSkgLSBOb3JtYWw6IFswLCAtMSwgMF1cbiAgICAgICAgLy8gVmVydGljZXM6IFRMLCBUUiwgQlIsIEJMXG4gICAgICAgIFstMC41LCAtMC41LCAtMC41LCAwLCAxLCAwLCAtMSwgMF0sXG4gICAgICAgIFswLjUsIC0wLjUsIC0wLjUsIDEsIDEsIDAsIC0xLCAwXSxcbiAgICAgICAgWzAuNSwgLTAuNSwgMC41LCAxLCAwLCAwLCAtMSwgMF0sXG4gICAgICAgIFstMC41LCAtMC41LCAwLjUsIDAsIDAsIDAsIC0xLCAwXSxcbiAgICBdO1xuICAgIGNvbnN0IHZlcnRpY2VzQXJyYXkgPSBbXTtcbiAgICBmYWNlRGF0YS5mb3JFYWNoKChmYWNlVmVydGljZXMpID0+IHZlcnRpY2VzQXJyYXkucHVzaCguLi5mYWNlVmVydGljZXMpKTtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXNBcnJheSk7XG4gICAgY29uc3QgZ2VuZXJhdGVkVmVydGV4Q291bnQgPSBmYWNlRGF0YS5sZW5ndGg7IC8vIDI0IHZlcnRpY2VzXG4gICAgY29uc3QgaW5kaWNlc0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgYmFzZUluZGV4ID0gaSAqIDQ7XG4gICAgICAgIGluZGljZXNBcnJheS5wdXNoKGJhc2VJbmRleCArIDAsIGJhc2VJbmRleCArIDEsIGJhc2VJbmRleCArIDIsIGJhc2VJbmRleCArIDAsIGJhc2VJbmRleCArIDIsIGJhc2VJbmRleCArIDMpO1xuICAgIH1cbiAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQxNkFycmF5KGluZGljZXNBcnJheSk7XG4gICAgY29uc3QgaW5kZXhDb3VudCA9IGluZGljZXMubGVuZ3RoOyAvLyAzNiBpbmRpY2VzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmVydGljZXMsXG4gICAgICAgIGluZGljZXMsXG4gICAgICAgIHZlcnRleENvdW50OiBnZW5lcmF0ZWRWZXJ0ZXhDb3VudCxcbiAgICAgICAgaW5kZXhDb3VudCxcbiAgICAgICAgYXJyYXlTdHJpZGUsXG4gICAgICAgIGZsb2F0c1BlclZlcnRleCxcbiAgICB9O1xufVxuY2xhc3MgQ3ViZUdlb21ldHJ5IGV4dGVuZHMgZ2VvbWV0cnlfMS5HZW9tZXRyeSB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3QgeyB2ZXJ0aWNlcywgaW5kaWNlcywgdmVydGV4Q291bnQsIGluZGV4Q291bnQsIGFycmF5U3RyaWRlIH0gPSBfY3JlYXRlQ3ViZUdlb21ldHJ5RGF0YSgpO1xuICAgICAgICBjb25zdCB2ZXJ0ZXhHUFVCdWZmZXIgPSByZW5kZXJlci5jcmVhdGVCdWZmZXIodmVydGljZXMsIEdQVUJ1ZmZlclVzYWdlLlZFUlRFWCB8IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUKTtcbiAgICAgICAgY29uc3QgaW5kZXhHUFVCdWZmZXIgPSByZW5kZXJlci5jcmVhdGVCdWZmZXIoaW5kaWNlcywgR1BVQnVmZmVyVXNhZ2UuSU5ERVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCk7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCB2ZXJ0ZXhHUFVCdWZmZXIsIGluZGV4R1BVQnVmZmVyLCB2ZXJ0ZXhHUFVCdWZmZXIsIGluZGV4Q291bnQsIHZlcnRleENvdW50KTtcbiAgICAgICAgdGhpcy5fYXJyYXlTdHJpZGUgPSBhcnJheVN0cmlkZTtcbiAgICB9XG4gICAgZ2V0IGNhY2hlS2V5KCkge1xuICAgICAgICByZXR1cm4gXCJDdWJlR2VvbWV0cnlcIjtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlckxheW91dCgpIHtcbiAgICAgICAgLy8gVGhpcyBsYXlvdXQgZGVzY3JpYmVzIHRoZSBzaW5nbGUgaW50ZXJsZWF2ZWQgdmVydGV4IGJ1ZmZlci5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogdGhpcy5fYXJyYXlTdHJpZGUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTG9jYXRpb246IDAsIC8vIENvcnJlc3BvbmRzIHRvIEBsb2NhdGlvbigwKSBpbiBXR1NMXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZmxvYXQzMngzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVWXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZXJMb2NhdGlvbjogMSwgLy8gQ29ycmVzcG9uZHMgdG8gQGxvY2F0aW9uKDEpIGluIFdHU0xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMyAqIDQsIC8vIE9mZnNldCBhZnRlciAzIHBvc2l0aW9uIGZsb2F0c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZsb2F0MzJ4MlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAyLCAvLyBDb3JyZXNwb25kcyB0byBAbG9jYXRpb24oMikgaW4gV0dTTFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAoMyArIDIpICogNCwgLy8gT2Zmc2V0IGFmdGVyIDMgcG9zaXRpb24gZmxvYXRzICsgMiBVViBmbG9hdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmbG9hdDMyeDNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG59XG5leHBvcnRzLkN1YmVHZW9tZXRyeSA9IEN1YmVHZW9tZXRyeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZW9tZXRyeSA9IHZvaWQgMDtcbmNsYXNzIEdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlciwgdmVydGV4QnVmZmVyLCBpbmRleEJ1ZmZlciwgdXZCdWZmZXIsIGluZGV4Q291bnQsIHZlcnRleENvdW50KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlciA9IHZlcnRleEJ1ZmZlcjtcbiAgICAgICAgdGhpcy5faW5kZXhCdWZmZXIgPSBpbmRleEJ1ZmZlcjtcbiAgICAgICAgdGhpcy5fdXZCdWZmZXIgPSB1dkJ1ZmZlcjtcbiAgICAgICAgdGhpcy5faW5kZXhDb3VudCA9IGluZGV4Q291bnQ7XG4gICAgICAgIHRoaXMuX3ZlcnRleENvdW50ID0gdmVydGV4Q291bnQ7XG4gICAgfVxuICAgIGdldCBkZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJlci5kZXZpY2U7XG4gICAgfVxuICAgIGdldCB2ZXJ0ZXhCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhCdWZmZXI7XG4gICAgfVxuICAgIGdldCBpbmRleEJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4QnVmZmVyO1xuICAgIH1cbiAgICBnZXQgaW5kZXhDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4Q291bnQ7XG4gICAgfVxuICAgIGdldCB2ZXJ0ZXhDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleENvdW50O1xuICAgIH1cbiAgICBnZXQgdXZCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91dkJ1ZmZlcjtcbiAgICB9XG59XG5leHBvcnRzLkdlb21ldHJ5ID0gR2VvbWV0cnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2VvbWV0cnkgPSBleHBvcnRzLkJpZ1RyaWFuZ2xlID0gZXhwb3J0cy5DdWJlR2VvbWV0cnkgPSB2b2lkIDA7XG52YXIgY3ViZV8xID0gcmVxdWlyZShcIi4vY3ViZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkN1YmVHZW9tZXRyeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY3ViZV8xLkN1YmVHZW9tZXRyeTsgfSB9KTtcbnZhciBiaWdfdHJpYW5nbGVfMSA9IHJlcXVpcmUoXCIuL2JpZy10cmlhbmdsZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJpZ1RyaWFuZ2xlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBiaWdfdHJpYW5nbGVfMS5CaWdUcmlhbmdsZTsgfSB9KTtcbnZhciBnZW9tZXRyeV8xID0gcmVxdWlyZShcIi4vZ2VvbWV0cnlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHZW9tZXRyeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VvbWV0cnlfMS5HZW9tZXRyeTsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICAgICAgICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICAgICAgICAgIHJldHVybiBhcjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG93bktleXMobyk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gICAgICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbXB1dGUgPSBleHBvcnRzLm1hdGVyaWFsID0gZXhwb3J0cy5nZW9tZXRyeSA9IGV4cG9ydHMuY2FtZXJhID0gZXhwb3J0cy5UcmFuc2Zvcm0gPSBleHBvcnRzLlNjZW5lID0gZXhwb3J0cy5JbWFnZVRleHR1cmUgPSBleHBvcnRzLkRlZmF1bHRUZXh0dXJlID0gZXhwb3J0cy5Db2xvciA9IGV4cG9ydHMuUmVuZGVyZXIgPSB2b2lkIDA7XG52YXIgcmVuZGVyZXJfMSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVuZGVyZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbmRlcmVyXzEuUmVuZGVyZXI7IH0gfSk7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29sb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbG9yXzEuQ29sb3I7IH0gfSk7XG52YXIgdGV4dHVyZV8xID0gcmVxdWlyZShcIi4vdGV4dHVyZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRlZmF1bHRUZXh0dXJlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0dXJlXzEuRGVmYXVsdFRleHR1cmU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbWFnZVRleHR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHR1cmVfMS5JbWFnZVRleHR1cmU7IH0gfSk7XG52YXIgc2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NjZW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2NlbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjZW5lXzEuU2NlbmU7IH0gfSk7XG52YXIgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUcmFuc2Zvcm1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRyYW5zZm9ybV8xLlRyYW5zZm9ybTsgfSB9KTtcbmV4cG9ydHMuY2FtZXJhID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NhbWVyYVwiKSk7XG5leHBvcnRzLmdlb21ldHJ5ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2dlb21ldHJ5XCIpKTtcbmV4cG9ydHMubWF0ZXJpYWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbWF0ZXJpYWxzXCIpKTtcbmV4cG9ydHMuY29tcHV0ZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb21wdXRlL2NvbXB1dGUtdGFza1wiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFzaWNNYXRlcmlhbCA9IHZvaWQgMDtcbmNvbnN0IGNvbG9yXzEgPSByZXF1aXJlKFwiLi4vY29sb3JcIik7XG5jb25zdCB0ZXh0dXJlXzEgPSByZXF1aXJlKFwiLi4vdGV4dHVyZVwiKTtcbmNvbnN0IG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9tYXRlcmlhbFwiKTtcbmNvbnN0IHVuaWZvcm1fbWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL3VuaWZvcm0tbWFuYWdlclwiKTtcbmNvbnN0IGhlYWRlcl93Z3NsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvaGVhZGVyLndnc2xcIikpO1xuY29uc3QgYmFzaWNfbWF0ZXJpYWxfd2dzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2Jhc2ljLW1hdGVyaWFsLndnc2xcIikpO1xuY2xhc3MgQmFzaWNNYXRlcmlhbCBleHRlbmRzIG1hdGVyaWFsXzEuTWF0ZXJpYWwge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIEJhc2ljTWF0ZXJpYWwucHJlY29tcGlsZShkZXZpY2UpO1xuICAgICAgICBjb25zdCB1bmlmb3JtTWFuYWdlciA9IG5ldyB1bmlmb3JtX21hbmFnZXJfMS5Vbmlmb3JtTWFuYWdlcihkZXZpY2UsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNvbG9yXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IChvcHRpb25zLmNvbG9yIHx8IG5ldyBjb2xvcl8xLkNvbG9yKDEsIDEsIDEpKS51bmlmb3JtVmFsdWUoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sIFtvcHRpb25zLm1hcCB8fCB0ZXh0dXJlXzEuRGVmYXVsdFRleHR1cmUuaW5zdGFuY2VdLCBcIkJhc2ljTWF0ZXJpYWxcIik7XG4gICAgICAgIHN1cGVyKHVuaWZvcm1NYW5hZ2VyKTtcbiAgICB9XG4gICAgZ2V0IGNhY2hlS2V5KCkge1xuICAgICAgICByZXR1cm4gXCJiYXNpYy1tYXRlcmlhbFwiO1xuICAgIH1cbiAgICBnZXQgc2hhZGVyQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIEJhc2ljTWF0ZXJpYWwuc2hhZGVyTW9kdWxlO1xuICAgIH1cbiAgICBzdGF0aWMgcHJlY29tcGlsZShkZXZpY2UpIHtcbiAgICAgICAgaWYgKCFCYXNpY01hdGVyaWFsLnNoYWRlck1vZHVsZSkge1xuICAgICAgICAgICAgQmFzaWNNYXRlcmlhbC5zaGFkZXJNb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJiYXNpYy1tYXRlcmlhbC1zaGFkZXJcIixcbiAgICAgICAgICAgICAgICBjb2RlOiBgXG4ke2hlYWRlcl93Z3NsXzEuZGVmYXVsdH1cbiR7YmFzaWNfbWF0ZXJpYWxfd2dzbF8xLmRlZmF1bHR9XG5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkJhc2ljTWF0ZXJpYWwgPSBCYXNpY01hdGVyaWFsO1xuQmFzaWNNYXRlcmlhbC5zaGFkZXJNb2R1bGUgPSBudWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVWTWF0ZXJpYWwgPSBleHBvcnRzLlNoYWRlck1hdGVyaWFsID0gZXhwb3J0cy5CYXNpY01hdGVyaWFsID0gZXhwb3J0cy5NYXRlcmlhbCA9IHZvaWQgMDtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0ZXJpYWxfMS5NYXRlcmlhbDsgfSB9KTtcbnZhciBiYXNpY19tYXRlcmlhbF8xID0gcmVxdWlyZShcIi4vYmFzaWMtbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCYXNpY01hdGVyaWFsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNpY19tYXRlcmlhbF8xLkJhc2ljTWF0ZXJpYWw7IH0gfSk7XG52YXIgc2hhZGVyX21hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9zaGFkZXItbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTaGFkZXJNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2hhZGVyX21hdGVyaWFsXzEuU2hhZGVyTWF0ZXJpYWw7IH0gfSk7XG52YXIgdXZfbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL3V2LW1hdGVyaWFsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVZNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXZfbWF0ZXJpYWxfMS5VVk1hdGVyaWFsOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hdGVyaWFsID0gdm9pZCAwO1xuY2xhc3MgTWF0ZXJpYWwge1xuICAgIGNvbnN0cnVjdG9yKHVuaWZvcm1NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyID0gdW5pZm9ybU1hbmFnZXI7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX3VuaWZvcm1NYW5hZ2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmluZEdyb3VwTGF5b3V0O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl91bmlmb3JtTWFuYWdlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJpbmRHcm91cDtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3VuaWZvcm1NYW5hZ2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudXBkYXRlKCk7XG4gICAgfVxufVxuZXhwb3J0cy5NYXRlcmlhbCA9IE1hdGVyaWFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNoYWRlck1hdGVyaWFsID0gdm9pZCAwO1xuY29uc3QgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsXCIpO1xuY29uc3QgdW5pZm9ybV9tYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vdW5pZm9ybS1tYW5hZ2VyXCIpO1xuY29uc3QgaGVhZGVyX3dnc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9oZWFkZXIud2dzbFwiKSk7XG5jbGFzcyBTaGFkZXJNYXRlcmlhbCBleHRlbmRzIG1hdGVyaWFsXzEuTWF0ZXJpYWwge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB1bmlmb3JtTWFuYWdlciA9IG5ldyB1bmlmb3JtX21hbmFnZXJfMS5Vbmlmb3JtTWFuYWdlcihkZXZpY2UsIG9wdGlvbnMudW5pZm9ybXMsIG9wdGlvbnMudGV4dHVyZXMsIFwiU2hhZGVyTWF0ZXJpYWxcIik7XG4gICAgICAgIHN1cGVyKHVuaWZvcm1NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY29tcGlsZShkZXZpY2UpO1xuICAgIH1cbiAgICBjb21waWxlKGRldmljZSkge1xuICAgICAgICB0aGlzLl9zaGFkZXJNb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNoYWRlck1vZHVsZVwiLFxuICAgICAgICAgICAgY29kZTogYFxuJHtoZWFkZXJfd2dzbF8xLmRlZmF1bHR9XG4ke3RoaXMuX29wdGlvbnMuY29kZX1cbiAgICAgIGAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBidG9hKHRoaXMuX29wdGlvbnMuY29kZSk7XG4gICAgfVxuICAgIGdldCBzaGFkZXJDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhZGVyTW9kdWxlO1xuICAgIH1cbn1cbmV4cG9ydHMuU2hhZGVyTWF0ZXJpYWwgPSBTaGFkZXJNYXRlcmlhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VVk1hdGVyaWFsID0gdm9pZCAwO1xuY29uc3QgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsXCIpO1xuY29uc3QgaGVhZGVyX3dnc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9oZWFkZXIud2dzbFwiKSk7XG5jb25zdCB1dl9tYXRlcmlhbF93Z3NsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvdXYtbWF0ZXJpYWwud2dzbFwiKSk7XG5jbGFzcyBVVk1hdGVyaWFsIGV4dGVuZHMgbWF0ZXJpYWxfMS5NYXRlcmlhbCB7XG4gICAgY29uc3RydWN0b3IoZGV2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFVWTWF0ZXJpYWwucHJlY29tcGlsZShkZXZpY2UpO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBcIlVWTWF0ZXJpYWxcIjtcbiAgICB9XG4gICAgZ2V0IHNoYWRlckNvZGUoKSB7XG4gICAgICAgIHJldHVybiBVVk1hdGVyaWFsLnNoYWRlck1vZHVsZTtcbiAgICB9XG4gICAgc3RhdGljIHByZWNvbXBpbGUoZGV2aWNlKSB7XG4gICAgICAgIGlmICghVVZNYXRlcmlhbC5zaGFkZXJNb2R1bGUpIHtcbiAgICAgICAgICAgIFVWTWF0ZXJpYWwuc2hhZGVyTW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiYmFzaWMtbWF0ZXJpYWwtc2hhZGVyXCIsXG4gICAgICAgICAgICAgICAgY29kZTogYFxuJHtoZWFkZXJfd2dzbF8xLmRlZmF1bHR9XG4ke3V2X21hdGVyaWFsX3dnc2xfMS5kZWZhdWx0fVxuYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5VVk1hdGVyaWFsID0gVVZNYXRlcmlhbDtcblVWTWF0ZXJpYWwuc2hhZGVyTW9kdWxlID0gbnVsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXNoID0gdm9pZCAwO1xuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIik7XG5jb25zdCB1bmlmb3JtX21hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3VuaWZvcm0tbWFuYWdlclwiKTtcbmNsYXNzIE1lc2ggZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSwgbWF0LCBnZW8pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbWF0O1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvO1xuICAgICAgICB0aGlzLl91bmlmb3JtTWFuYWdlciA9IG5ldyB1bmlmb3JtX21hbmFnZXJfMS5Vbmlmb3JtTWFuYWdlcihkZXZpY2UsIFt7IG5hbWU6IFwibW9kZWxcIiwgdmFsdWU6IHRoaXMud29ybGRNYXRyaXggfV0sIFtdLCBcIk1lc2hcIik7XG4gICAgfVxuICAgIGdldCBjYWNoZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VvbWV0cnkuY2FjaGVLZXl9LSR7dGhpcy5tYXRlcmlhbC5jYWNoZUtleX1gO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWwudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0oe1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLCB2YWx1ZTogdGhpcy53b3JsZE1hdHJpeFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmlmb3JtTWFuYWdlci5iaW5kR3JvdXBMYXlvdXQ7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmlmb3JtTWFuYWdlci5iaW5kR3JvdXA7XG4gICAgfVxufVxuZXhwb3J0cy5NZXNoID0gTWVzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlcmVyID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IG9ydGhvZ3JhcGhpY19jYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYS9vcnRob2dyYXBoaWMtY2FtZXJhXCIpO1xuY29uc3QgcGVyc3BlY3RpdmVfY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9jYW1lcmEvcGVyc3BlY3RpdmUtY2FtZXJhXCIpO1xuY29uc3QgbWVzaF8xID0gcmVxdWlyZShcIi4vbWVzaFwiKTtcbmNvbnN0IHNjZW5lXzEgPSByZXF1aXJlKFwiLi9zY2VuZVwiKTtcbmNvbnN0IHRleHR1cmVfMSA9IHJlcXVpcmUoXCIuL3RleHR1cmVcIik7XG5jbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aEZvcm1hdCA9IFwiZGVwdGgyNHBsdXMtc3RlbmNpbDhcIjtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBcImJncmE4dW5vcm1cIjtcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gd2dwdV9tYXRyaXhfMS52ZWMyLmNyZWF0ZSgxLCAxKTtcbiAgICAgICAgdGhpcy5zaXplRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9waXBlbGluZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jb21wdXRlUGlwZWxpbmVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jYW52YXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXJlciBpbml0aWFsaXplZFwiKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLmdwdSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IHlpZWxkIG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gR1BVIGFkYXB0ZXIgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHlpZWxkIHRoaXMuYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdQVSBkZXZpY2UgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDYW52YXModGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdENhbnZhcyhjYW52YXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gKF9hID0gdGhpcy5jYW52YXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgICAgICBpZiAoIXRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBXZWJHUFUgY29udGV4dFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWF0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgIGFscGhhTW9kZTogXCJwcmVtdWx0aXBsaWVkXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXNTaXplLnNldChbd2lkdGgsIGhlaWdodF0pO1xuICAgICAgICAgICAgdGhpcy5zaXplRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5kZXB0aFRleHR1cmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRlcHRoVGV4dHVyZSA9IHRoaXMuZGV2aWNlLmNyZWF0ZVRleHR1cmUoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlcHRoIHRleHR1cmVcIixcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoLCBoZWlnaHQgfSxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZGVwdGhGb3JtYXQsXG4gICAgICAgICAgICAgICAgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5SRU5ERVJfQVRUQUNITUVOVCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kZXB0aFRleHR1cmVWaWV3ID0gdGhpcy5kZXB0aFRleHR1cmUuY3JlYXRlVmlldyh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVwdGggdGV4dHVyZSB2aWV3IFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9uUmVzaXplKCk7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIob25SZXNpemUpO1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jYW52YXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbnZhcyBpbml0aWFsaXplZFwiKTtcbiAgICB9XG4gICAgY3JlYXRlU2hhZGVyTW9kdWxlKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZShkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgY3JlYXRlQnVmZmVyKGFyciwgdXNhZ2UpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgICAgIHNpemU6IChhcnIuYnl0ZUxlbmd0aCArIDMpICYgfjMsXG4gICAgICAgICAgICB1c2FnZSxcbiAgICAgICAgICAgIG1hcHBlZEF0Q3JlYXRpb246IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXJyIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZUFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKSk7XG4gICAgICAgICAgICB3cml0ZUFycmF5LnNldChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyciBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZUFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIHdyaXRlQXJyYXkuc2V0KGFycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJyIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgY29uc3Qgd3JpdGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIHdyaXRlQXJyYXkuc2V0KGFycik7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnVubWFwKCk7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuICAgIHBpcGVsaW5lRm9yKHNjZW5lLCBtZXNoKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gbWVzaC5jYWNoZUtleTtcbiAgICAgICAgaWYgKHRoaXMuX3BpcGVsaW5lQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFkZXJDb2RlID0gbWVzaC5tYXRlcmlhbC5zaGFkZXJDb2RlO1xuICAgICAgICBjb25zdCBidWZmZXJMYXlvdXQgPSBtZXNoLmdlb21ldHJ5LmJ1ZmZlckxheW91dDtcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5kZXZpY2UuY3JlYXRlUGlwZWxpbmVMYXlvdXQoe1xuICAgICAgICAgICAgbGFiZWw6IFwiUGlwZWxpbmUgTGF5b3V0XCIsXG4gICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbXG4gICAgICAgICAgICAgICAgc2NlbmUuYmluZEdyb3VwTGF5b3V0LFxuICAgICAgICAgICAgICAgIG1lc2guYmluZEdyb3VwTGF5b3V0LFxuICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwuYmluZEdyb3VwTGF5b3V0LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBpcGVsaW5lID0gdGhpcy5kZXZpY2UuY3JlYXRlUmVuZGVyUGlwZWxpbmUoe1xuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgdmVydGV4OiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBzaGFkZXJDb2RlLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcnM6IGJ1ZmZlckxheW91dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnbWVudDoge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogc2hhZGVyQ29kZSxcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmltaXRpdmU6IHtcbiAgICAgICAgICAgICAgICB0b3BvbG9neTogXCJ0cmlhbmdsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgc3RyaXBJbmRleEZvcm1hdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGZyb250RmFjZTogXCJjY3dcIixcbiAgICAgICAgICAgICAgICBjdWxsTW9kZTogXCJiYWNrXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsOiB7XG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZUVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZGVwdGhDb21wYXJlOiBcImxlc3NcIixcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZGVwdGgyNHBsdXMtc3RlbmNpbDhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9waXBlbGluZUNhY2hlLnNldChjYWNoZUtleSwgcGlwZWxpbmUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBpcGVsaW5lIGNyZWF0ZWRcIiwgY2FjaGVLZXkpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmU7XG4gICAgfVxuICAgIHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IHRoaXMuY2FudmFzU2l6ZTtcbiAgICAgICAgY29uc3Qgb3V0cHV0VGV4dHVyZSA9IHRoaXMuY29udGV4dC5nZXRDdXJyZW50VGV4dHVyZSgpO1xuICAgICAgICBjb25zdCBvdXRwdXRUZXh0dXJlVmlldyA9IG91dHB1dFRleHR1cmUuY3JlYXRlVmlldyh7XG4gICAgICAgICAgICBsYWJlbDogXCJDYW52YXMgb3V0cHV0IHRleHR1cmUgdmlld1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVuZGVyUGFzc0Rlc2MgPSB7XG4gICAgICAgICAgICBsYWJlbDogXCJSZW5kZXIgcGFzc1wiLFxuICAgICAgICAgICAgY29sb3JBdHRhY2htZW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldzogb3V0cHV0VGV4dHVyZVZpZXcsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVmFsdWU6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZE9wOiBcImNsZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbEF0dGFjaG1lbnQ6IHtcbiAgICAgICAgICAgICAgICB2aWV3OiB0aGlzLmRlcHRoVGV4dHVyZVZpZXcsXG4gICAgICAgICAgICAgICAgZGVwdGhDbGVhclZhbHVlOiAxLFxuICAgICAgICAgICAgICAgIGRlcHRoTG9hZE9wOiBcImNsZWFyXCIsXG4gICAgICAgICAgICAgICAgZGVwdGhTdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICAgICAgICAgICAgc3RlbmNpbExvYWRPcDogXCJjbGVhclwiLFxuICAgICAgICAgICAgICAgIHN0ZW5jaWxTdG9yZU9wOiBcInN0b3JlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21tYW5kRW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IHBhc3NFbmNvZGVyID0gY29tbWFuZEVuY29kZXIuYmVnaW5SZW5kZXJQYXNzKHJlbmRlclBhc3NEZXNjKTtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0Vmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCwgMCwgMSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldFNjaXNzb3JSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5zaXplRGlydHkpIHtcbiAgICAgICAgICAgIGNhbWVyYS52aWV3cG9ydFJlc2l6ZWQodGhpcy5jYW52YXNTaXplKTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZURpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2NlbmUudXBkYXRlKGNhbWVyYSwgdGhpcy5jYW52YXNTaXplKTtcbiAgICAgICAgY29uc3Qgc2NlbmVCaW5kR3JvdXAgPSBzY2VuZS5iaW5kR3JvdXA7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCBzY2VuZUJpbmRHcm91cCk7XG4gICAgICAgIHNjZW5lLnRyYXZlcnNlKChvYmopID0+IHtcbiAgICAgICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBtZXNoXzEuTWVzaCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBvYmo7XG4gICAgICAgICAgICAgICAgbWVzaC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXBlbGluZSA9IHRoaXMucGlwZWxpbmVGb3Ioc2NlbmUsIG1lc2gpO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHBpcGVsaW5lKTtcbiAgICAgICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRWZXJ0ZXhCdWZmZXIoMCwgbWVzaC5nZW9tZXRyeS52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLnNldFZlcnRleEJ1ZmZlcigxLCBtZXNoLmdlb21ldHJ5LnV2QnVmZmVyKTtcbiAgICAgICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRJbmRleEJ1ZmZlcihtZXNoLmdlb21ldHJ5LmluZGV4QnVmZmVyLCBcInVpbnQxNlwiKTtcbiAgICAgICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMSwgbWVzaC5iaW5kR3JvdXApO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgyLCBtZXNoLm1hdGVyaWFsLmJpbmRHcm91cCk7XG4gICAgICAgICAgICAgICAgcGFzc0VuY29kZXIuZHJhd0luZGV4ZWQobWVzaC5nZW9tZXRyeS5pbmRleENvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgfVxuICAgIGNvbXB1dGVQaXBlbGluZUZvcih0YXNrKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29tcHV0ZVBpcGVsaW5lQ2FjaGVbdGFzay5jYWNoZUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGJnbCA9IHRhc2suZ2V0QmluZEdyb3VwTGF5b3V0KHRoaXMuZGV2aWNlKTtcbiAgICAgICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVBpcGVsaW5lTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBsYWJlbDogYCR7dGFzay5sYWJlbH0gUGlwZWxpbmUgTGF5b3V0YCxcbiAgICAgICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbYmdsXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lKHtcbiAgICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgICAgY29tcHV0ZToge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IHRhc2suc2hhZGVyTW9kdWxlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVQaXBlbGluZUNhY2hlW3Rhc2suY2FjaGVLZXldID0gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wdXRlUGlwZWxpbmVDYWNoZVt0YXNrLmNhY2hlS2V5XTtcbiAgICB9XG4gICAgY29tcHV0ZSh0YXNrcykge1xuICAgICAgICBjb25zdCBjb21tYW5kRW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IHBhc3NFbmNvZGVyID0gY29tbWFuZEVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGVsaW5lID0gdGhpcy5jb21wdXRlUGlwZWxpbmVGb3IodGFzayk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGFzay5kaXNwYXRjaENvdW50O1xuICAgICAgICAgICAgY29uc3QgYmcgPSB0YXNrLmdldEJpbmRHcm91cCh0aGlzLmRldmljZSk7XG4gICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZShwaXBlbGluZSk7XG4gICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgYmcpO1xuICAgICAgICAgICAgcGFzc0VuY29kZXIuZGlzcGF0Y2hXb3JrZ3JvdXBzKHNpemVbMF0sIHNpemVbMV0sIHNpemVbMl0pO1xuICAgICAgICB9XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgfVxuICAgIGNyZWF0ZU1hdGVyaWFsKGMsIG8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjKHRoaXMuZGV2aWNlLCBvKTtcbiAgICB9XG4gICAgY3JlYXRlR2VvbWV0cnkoYykge1xuICAgICAgICByZXR1cm4gbmV3IGModGhpcyk7XG4gICAgfVxuICAgIGNyZWF0ZU1lc2goZ2VvLCBtYXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBtZXNoXzEuTWVzaCh0aGlzLmRldmljZSwgbWF0LCBnZW8pO1xuICAgIH1cbiAgICBjcmVhdGVTY2VuZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBzY2VuZV8xLlNjZW5lKHRoaXMuZGV2aWNlKTtcbiAgICB9XG4gICAgY3JlYXRlUGVyc3BlY3RpdmVDYW1lcmEob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IHBlcnNwZWN0aXZlX2NhbWVyYV8xLlBlcnNwZWN0aXZlQ2FtZXJhKG9wdGlvbnMpO1xuICAgIH1cbiAgICBjcmVhdGVPcnRob2dyYXBoaWNDYW1lcmEob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IG9ydGhvZ3JhcGhpY19jYW1lcmFfMS5PcnRob2dyYXBoaWNDYW1lcmEob3B0aW9ucyk7XG4gICAgfVxuICAgIGxvYWRJbWFnZVRleHR1cmUodXJsKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCByZXQgPSBuZXcgdGV4dHVyZV8xLkltYWdlVGV4dHVyZSh1cmwpO1xuICAgICAgICAgICAgeWllbGQgcmV0LmxvYWQoKTtcbiAgICAgICAgICAgIHJldC51cGxvYWQodGhpcy5kZXZpY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVRleHR1cmUoZGVzY3JpcHRvcikge1xuICAgICAgICBjb25zdCB0ZXggPSBuZXcgdGV4dHVyZV8xLk1hcHBlZFRleHR1cmUoZGVzY3JpcHRvcik7XG4gICAgICAgIHRleC51cGxvYWQodGhpcy5kZXZpY2UpO1xuICAgICAgICByZXR1cm4gdGV4O1xuICAgIH1cbiAgICBjcmVhdGVTYW1wbGVyKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV2aWNlLmNyZWF0ZVNhbXBsZXIoZGVzY3JpcHRvcik7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJlciA9IFJlbmRlcmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjZW5lID0gdm9pZCAwO1xuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIik7XG5jb25zdCB3Z3B1X21hdHJpeF8xID0gcmVxdWlyZShcIndncHUtbWF0cml4XCIpO1xuY29uc3QgdW5pZm9ybV9tYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi91bmlmb3JtLW1hbmFnZXJcIik7XG5jbGFzcyBTY2VuZSBleHRlbmRzIHRyYW5zZm9ybV8xLlRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGV2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyID0gbmV3IHVuaWZvcm1fbWFuYWdlcl8xLlVuaWZvcm1NYW5hZ2VyKGRldmljZSwgW1xuICAgICAgICAgICAgeyBuYW1lOiBcInByb2plY3Rpb24gbWF0cml4XCIsIHZhbHVlOiB3Z3B1X21hdHJpeF8xLm1hdDQuY3JlYXRlKCkgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJ2aWV3IG1hdHJpeFwiLCB2YWx1ZTogd2dwdV9tYXRyaXhfMS5tYXQ0LmNyZWF0ZSgpIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiY2FtZXJhIHBvc2l0aW9uXCIsIHZhbHVlOiB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKCkgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJyZXNvbHV0aW9uXCIsIHZhbHVlOiB3Z3B1X21hdHJpeF8xLnZlYzIuY3JlYXRlKDEsIDEpIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwidGltZVwiLCB2YWx1ZTogcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwIH0sXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICB1cGRhdGUoY2FtZXJhLCByZXNvbHV0aW9uKSB7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0oeyBuYW1lOiBcInByb2plY3Rpb24gbWF0cml4XCIsIHZhbHVlOiBjYW1lcmEucHJvamVjdGlvbk1hdHJpeCB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlVW5pZm9ybSh7IG5hbWU6IFwidmlldyBtYXRyaXhcIiwgdmFsdWU6IGNhbWVyYS52aWV3TWF0cml4IH0pO1xuICAgICAgICB0aGlzLl91bmlmb3JtTWFuYWdlci51cGRhdGVVbmlmb3JtKHsgbmFtZTogXCJjYW1lcmEgcG9zaXRpb25cIiwgdmFsdWU6IGNhbWVyYS5wb3NpdGlvbiB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlVW5pZm9ybSh7IG5hbWU6IFwicmVzb2x1dGlvblwiLCB2YWx1ZTogcmVzb2x1dGlvbiB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlVW5pZm9ybSh7IG5hbWU6IFwidGltZVwiLCB2YWx1ZTogcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwIH0pO1xuICAgICAgICB0aGlzLl91bmlmb3JtTWFuYWdlci51cGRhdGUoKTtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cExheW91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLmJpbmRHcm91cExheW91dDtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLmJpbmRHcm91cDtcbiAgICB9XG59XG5leHBvcnRzLlNjZW5lID0gU2NlbmU7XG4iLCJleHBvcnQgZGVmYXVsdCBcInN0cnVjdCBVbmlmb3JtcyB7XFxuICBjb2xvcjogdmVjNDxmMzI+XFxufVxcblxcbkBncm91cChCR19VTklGT1JNUykgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHVuaWZvcm1zOiBVbmlmb3JtcztcXG5AZ3JvdXAoQkdfVU5JRk9STVMpIEBiaW5kaW5nKDEpIHZhciB0ZXhfc2FtcGxlcjogc2FtcGxlcjtcXG5AZ3JvdXAoQkdfVU5JRk9STVMpIEBiaW5kaW5nKDIpIHZhciB0ZXhfbWFwOiB0ZXh0dXJlXzJkPGYzMj47XFxuXFxuc3RydWN0IFZTT3V0IHtcXG4gICAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0PGYzMj4sXFxuICAgIEBsb2NhdGlvbigwKSB1djogdmVjMjxmMzI+LFxcbn1cXG5cXG5AdmVydGV4XFxuZm4gdnNfbWFpbihAbG9jYXRpb24oMCkgaW5fcG9zOiB2ZWMzPGYzMj4sIEBsb2NhdGlvbigxKSB1djogdmVjMjxmMzI+KSAtPiBWU091dCB7XFxuICBsZXQgbW9kZWxWaWV3UHJvajogbWF0NHg0PGYzMj4gPSBzY2VuZV91bmlmb3Jtcy5wcm9qZWN0aW9uICogc2NlbmVfdW5pZm9ybXMudmlldyAqIG1vZGVsX3VuaWZvcm1zLm1vZGVsO1xcblxcbiAgbGV0IHZzX291dDogVlNPdXQgPSBWU091dChcXG4gICAgbW9kZWxWaWV3UHJvaiAqIHZlYzQ8ZjMyPihpbl9wb3MsIDEuMCksXFxuICAgIHV2LFxcbiAgKTtcXG4gIHJldHVybiB2c19vdXQ7XFxufVxcblxcbkBmcmFnbWVudFxcbmZuIGZzX21haW4odnNfb3V0OiBWU091dCkgLT4gQGxvY2F0aW9uKDApIHZlYzQ8ZjMyPiB7XFxuICBsZXQgY29sb3I6IHZlYzQ8ZjMyPiA9IHRleHR1cmVTYW1wbGUodGV4X21hcCwgdGV4X3NhbXBsZXIsIHZzX291dC51dik7XFxuICByZXR1cm4gY29sb3IgKiB1bmlmb3Jtcy5jb2xvcjtcXG59XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJjb25zdCBCR19TQ0VORTogdTMyID0gMDtcXG5jb25zdCBCR19NT0RFTDogdTMyID0gMTtcXG5jb25zdCBCR19VTklGT1JNUzogdTMyID0gMjtcXG5cXG5zdHJ1Y3QgU2NlbmVVbmlmb3JtcyB7XFxuICBwcm9qZWN0aW9uOiBtYXQ0eDQ8ZjMyPixcXG4gIHZpZXc6IG1hdDR4NDxmMzI+LFxcbiAgY2FtZXJhX3Bvc2l0aW9uOiB2ZWMzPGYzMj4sXFxuICByZXNvbHV0aW9uOiB2ZWMyPGYzMj4sXFxuICB0aW1lOiBmMzIsXFxufVxcblxcbnN0cnVjdCBNb2RlbFVuaWZvcm1zIHtcXG4gIG1vZGVsOiBtYXQ0eDQ8ZjMyPixcXG59XFxuXFxuQGdyb3VwKEJHX1NDRU5FKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gc2NlbmVfdW5pZm9ybXM6IFNjZW5lVW5pZm9ybXM7XFxuQGdyb3VwKEJHX01PREVMKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gbW9kZWxfdW5pZm9ybXM6IE1vZGVsVW5pZm9ybXM7XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJzdHJ1Y3QgVlNPdXQge1xcbiAgICBAYnVpbHRpbihwb3NpdGlvbikgcG9zaXRpb246IHZlYzQ8ZjMyPixcXG4gICAgQGxvY2F0aW9uKDApIHV2OiB2ZWMyPGYzMj4sXFxufVxcblxcbkB2ZXJ0ZXhcXG5mbiB2c19tYWluKEBsb2NhdGlvbigwKSBpbl9wb3M6IHZlYzM8ZjMyPiwgQGxvY2F0aW9uKDEpIHV2OiB2ZWMyPGYzMj4pIC0+IFZTT3V0IHtcXG4gIGxldCBtb2RlbFZpZXdQcm9qOiBtYXQ0eDQ8ZjMyPiA9IHNjZW5lX3VuaWZvcm1zLnByb2plY3Rpb24gKiBzY2VuZV91bmlmb3Jtcy52aWV3ICogbW9kZWxfdW5pZm9ybXMubW9kZWw7XFxuXFxuICBsZXQgdnNfb3V0OiBWU091dCA9IFZTT3V0KFxcbiAgICBtb2RlbFZpZXdQcm9qICogdmVjNDxmMzI+KGluX3BvcywgMS4wKSxcXG4gICAgdXYsXFxuICApO1xcbiAgcmV0dXJuIHZzX291dDtcXG59XFxuXFxuQGZyYWdtZW50XFxuZm4gZnNfbWFpbih2c19vdXQ6IFZTT3V0KSAtPiBAbG9jYXRpb24oMCkgdmVjNDxmMzI+IHtcXG4gIHJldHVybiB2ZWM0KHZzX291dC51diwgMC4wLCAxLjApO1xcbn1cXG5cIjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbWFnZVRleHR1cmUgPSBleHBvcnRzLkRlZmF1bHRUZXh0dXJlID0gZXhwb3J0cy5NYXBwZWRUZXh0dXJlID0gZXhwb3J0cy5UZXh0dXJlID0gdm9pZCAwO1xuY2xhc3MgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cbmV4cG9ydHMuVGV4dHVyZSA9IFRleHR1cmU7XG5jbGFzcyBNYXBwZWRUZXh0dXJlIGV4dGVuZHMgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoZGVzY3JpcHRvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdG9yO1xuICAgIH1cbiAgICBnZXQgdmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl92aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gdGhpcy5fdGV4dHVyZS5jcmVhdGVWaWV3KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXc7XG4gICAgfVxuICAgIHVwbG9hZChkZXZpY2UpIHtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IGRldmljZS5jcmVhdGVUZXh0dXJlKHRoaXMuZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlLndpZHRoO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZS5oZWlnaHQ7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmUubGFiZWw7XG4gICAgfVxufVxuZXhwb3J0cy5NYXBwZWRUZXh0dXJlID0gTWFwcGVkVGV4dHVyZTtcbmNsYXNzIERlZmF1bHRUZXh0dXJlIGV4dGVuZHMgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLl90ZXh0dXJlVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BpeGVsRGF0YSA9IG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1LCAyNTVdKTtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdG9yKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMSwgaGVpZ2h0OiAxLCBkZXB0aE9yQXJyYXlMYXllcnM6IDEgfSxcbiAgICAgICAgICAgIGZvcm1hdDogXCJyZ2JhOHVub3JtXCIsXG4gICAgICAgICAgICB1c2FnZTogR1BVVGV4dHVyZVVzYWdlLlRFWFRVUkVfQklORElORyB8IEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCxcbiAgICAgICAgICAgIGRpbWVuc2lvbjogXCIyZFwiLFxuICAgICAgICAgICAgbWlwTGV2ZWxDb3VudDogMSxcbiAgICAgICAgICAgIHNhbXBsZUNvdW50OiAxLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgdmlldygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuX3RleHR1cmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRleHR1cmUgbm90IGNyZWF0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgKF9hID0gdGhpcy5fdGV4dHVyZVZpZXcpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl90ZXh0dXJlVmlldyA9IHRoaXMuX3RleHR1cmUuY3JlYXRlVmlldygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVWaWV3O1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiBcIkRlZmF1bHQgVGV4dHVyZVwiO1xuICAgIH1cbiAgICB1cGxvYWQoZGV2aWNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IGRldmljZS5jcmVhdGVUZXh0dXJlKHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZVRleHR1cmUoeyB0ZXh0dXJlOiB0aGlzLl90ZXh0dXJlLCBtaXBMZXZlbDogMCwgb3JpZ2luOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSB9LCB0aGlzLl9waXhlbERhdGEsIHsgb2Zmc2V0OiAwLCBieXRlc1BlclJvdzogNCwgcm93c1BlckltYWdlOiAxIH0sIHsgd2lkdGg6IDEsIGhlaWdodDogMSwgZGVwdGhPckFycmF5TGF5ZXJzOiAxIH0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3RleHR1cmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLl90ZXh0dXJlVmlldyA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5EZWZhdWx0VGV4dHVyZSA9IERlZmF1bHRUZXh0dXJlO1xuRGVmYXVsdFRleHR1cmUuaW5zdGFuY2UgPSBuZXcgRGVmYXVsdFRleHR1cmUoKTtcbmNsYXNzIEltYWdlVGV4dHVyZSBleHRlbmRzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlU3JjKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RleHR1cmVWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW1hZ2VkYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zcmMgPSBpbWFnZVNyYztcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlUmVzcCA9IHlpZWxkIGZldGNoKHRoaXMuc3JjKTtcbiAgICAgICAgICAgIGlmICghaW1hZ2VSZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZTogJHt0aGlzLnNyY31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmxvYiA9IHlpZWxkIGltYWdlUmVzcC5ibG9iKCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUJpdG1hcCA9IHlpZWxkIGNyZWF0ZUltYWdlQml0bWFwKGltYWdlQmxvYik7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZWRhdGEgPSBpbWFnZUJpdG1hcDtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VCaXRtYXAud2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZUJpdG1hcC5oZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0b3IoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRlcHRoT3JBcnJheUxheWVyczogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IFwicmdiYTh1bm9ybVwiLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5URVhUVVJFX0JJTkRJTkcgfFxuICAgICAgICAgICAgICAgIEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCB8XG4gICAgICAgICAgICAgICAgR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5ULFxuICAgICAgICAgICAgZGltZW5zaW9uOiBcIjJkXCIsXG4gICAgICAgICAgICBtaXBMZXZlbENvdW50OiAxLFxuICAgICAgICAgICAgc2FtcGxlQ291bnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2aWV3KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5fdGV4dHVyZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGV4dHVyZSBub3QgY3JlYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLl90ZXh0dXJlVmlldykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX3RleHR1cmVWaWV3ID0gdGhpcy5fdGV4dHVyZS5jcmVhdGVWaWV3KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZVZpZXc7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIGBJbWFnZVRleHR1cmUgJHt0aGlzLnNyY31gO1xuICAgIH1cbiAgICB1cGxvYWQoZGV2aWNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pbWFnZWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG5vdCBsb2FkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IGRldmljZS5jcmVhdGVUZXh0dXJlKHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgIGRldmljZS5xdWV1ZS5jb3B5RXh0ZXJuYWxJbWFnZVRvVGV4dHVyZSh7IHNvdXJjZTogdGhpcy5faW1hZ2VkYXRhLCBvcmlnaW46IHsgeDogMCwgeTogMCB9LCBmbGlwWTogdHJ1ZSB9LCB7IHRleHR1cmU6IHRoaXMuX3RleHR1cmUsIG9yaWdpbjogeyB4OiAwLCB5OiAwIH0gfSwgeyB3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0LCBkZXB0aE9yQXJyYXlMYXllcnM6IDEgfSk7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYSA9IHRoaXMuX2ltYWdlZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsb3NlKCk7XG4gICAgICAgIChfYiA9IHRoaXMuX3RleHR1cmUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLl90ZXh0dXJlVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ltYWdlZGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcbiAgICB9XG59XG5leHBvcnRzLkltYWdlVGV4dHVyZSA9IEltYWdlVGV4dHVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSB2b2lkIDA7XG5jb25zdCB3Z3B1X21hdHJpeF8xID0gcmVxdWlyZShcIndncHUtbWF0cml4XCIpO1xuZnVuY3Rpb24gY29tcG9zZShwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxlLCBkc3QpIHtcbiAgICBpZiAoIWRzdCkge1xuICAgICAgICBkc3QgPSB3Z3B1X21hdHJpeF8xLm1hdDQuY3JlYXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IHJvdGF0aW9uO1xuICAgIGNvbnN0IHgyID0geCArIHg7XG4gICAgY29uc3QgeTIgPSB5ICsgeTtcbiAgICBjb25zdCB6MiA9IHogKyB6O1xuICAgIGNvbnN0IHh4ID0geCAqIHgyO1xuICAgIGNvbnN0IHl5ID0geSAqIHkyO1xuICAgIGNvbnN0IHp6ID0geiAqIHoyO1xuICAgIGNvbnN0IHh5ID0geCAqIHkyO1xuICAgIGNvbnN0IHh6ID0geCAqIHoyO1xuICAgIGNvbnN0IHl6ID0geSAqIHoyO1xuICAgIGNvbnN0IHd4ID0gdyAqIHgyO1xuICAgIGNvbnN0IHd5ID0gdyAqIHkyO1xuICAgIGNvbnN0IHd6ID0gdyAqIHoyO1xuICAgIGNvbnN0IFtzeCwgc3ksIHN6XSA9IHNjYWxlO1xuICAgIGRzdFswXSA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICAgIGRzdFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICAgIGRzdFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICAgIGRzdFszXSA9IDA7XG4gICAgZHN0WzRdID0gKHh5IC0gd3opICogc3k7XG4gICAgZHN0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gICAgZHN0WzZdID0gKHl6ICsgd3gpICogc3k7XG4gICAgZHN0WzddID0gMDtcbiAgICBkc3RbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgICBkc3RbOV0gPSAoeXogLSB3eCkgKiBzejtcbiAgICBkc3RbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gICAgZHN0WzExXSA9IDA7XG4gICAgZHN0WzEyXSA9IHBvc2l0aW9uWzBdO1xuICAgIGRzdFsxM10gPSBwb3NpdGlvblsxXTtcbiAgICBkc3RbMTRdID0gcG9zaXRpb25bMl07XG4gICAgZHN0WzE1XSA9IDE7XG4gICAgcmV0dXJuIGRzdDtcbn1cbmNsYXNzIFRyYW5zZm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIEhpZXJhcmNoeVxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gd2dwdV9tYXRyaXhfMS5xdWF0LmlkZW50aXR5KCk7XG4gICAgICAgIHRoaXMuX3NjYWxlID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSgxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5fbG9jYWxNYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQuaWRlbnRpdHkoKTtcbiAgICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQuaWRlbnRpdHkoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxEaXJ0eSA9IHRydWU7IC8vIE5lZWRzIGluaXRpYWwgY2FsY3VsYXRpb25cbiAgICAgICAgdGhpcy5fd29ybGREaXJ0eSA9IHRydWU7IC8vIE5lZWRzIGluaXRpYWwgY2FsY3VsYXRpb25cbiAgICB9XG4gICAgLy8gLS0tIEdldHRlcnMgZm9yIExvY2FsIENvbXBvbmVudHMgLS0tXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247IC8vIFJldHVybiBzdG9yZWQgbG9jYWwgdmFsdWVcbiAgICB9XG4gICAgZ2V0IHF1YXRlcm5pb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjsgLy8gUmV0dXJuIHN0b3JlZCBsb2NhbCB2YWx1ZVxuICAgIH1cbiAgICBnZXQgc2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY2FsZTsgLy8gUmV0dXJuIHN0b3JlZCBsb2NhbCB2YWx1ZVxuICAgIH1cbiAgICAvLyAtLS0gU2V0dGVycyBmb3IgTG9jYWwgQ29tcG9uZW50cyAoTWFyayBEaXJ0eSkgLS0tXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICghd2dwdV9tYXRyaXhfMS52ZWMzLmVxdWFscyh0aGlzLl9wb3NpdGlvbiwgdmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KHZhbHVlLCB0aGlzLl9wb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLm1ha2VEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldCBxdWF0ZXJuaW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICghd2dwdV9tYXRyaXhfMS5xdWF0LmVxdWFscyh0aGlzLl9yb3RhdGlvbiwgdmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHdncHVfbWF0cml4XzEucXVhdC5jb3B5KHZhbHVlLCB0aGlzLl9yb3RhdGlvbik7XG4gICAgICAgICAgICB0aGlzLm1ha2VEaXJ0eSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFJvdGF0aW9uKHhWYWx1ZSwgeVZhbHVlLCB6VmFsdWUsIG9yZGVyID0gXCJ4eXpcIikge1xuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHdncHVfbWF0cml4XzEucXVhdC5mcm9tRXVsZXIoeFZhbHVlLCB5VmFsdWUsIHpWYWx1ZSwgb3JkZXIpO1xuICAgICAgICB0aGlzLm1ha2VEaXJ0eSgpO1xuICAgIH1cbiAgICBzZXQgc2NhbGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMuX3NjYWxlLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NjYWxlID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNvcHkodmFsdWUsIHRoaXMuX3NjYWxlKTtcbiAgICAgICAgICAgIHRoaXMubWFrZURpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gLS0tIE1hdHJpeCBHZXR0ZXJzIChVcGRhdGUgaWYgRGlydHkpIC0tLVxuICAgIC8qKiBHZXRzIHRoZSBsb2NhbCB0cmFuc2Zvcm1hdGlvbiBtYXRyaXgsIHJlY2FsY3VsYXRpbmcgaWYgbmVjZXNzYXJ5LiAqL1xuICAgIGdldCBsb2NhbE1hdHJpeCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxNYXRyaXgoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxNYXRyaXg7XG4gICAgfVxuICAgIC8qKiBHZXRzIHRoZSB3b3JsZCB0cmFuc2Zvcm1hdGlvbiBtYXRyaXgsIHJlY2FsY3VsYXRpbmcgaWYgbmVjZXNzYXJ5LiAqL1xuICAgIGdldCB3b3JsZE1hdHJpeCgpIHtcbiAgICAgICAgLy8gRm9yY2UgdXBkYXRlIGlmIGxvY2FsIG9yIHdvcmxkIGlzIGRpcnR5LlxuICAgICAgICAvLyBHZXR0aW5nIHBhcmVudC53b3JsZE1hdHJpeCB3aWxsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSB0aGUgY2hhaW4gaWYgbmVlZGVkLlxuICAgICAgICBpZiAodGhpcy5fbG9jYWxEaXJ0eSB8fCB0aGlzLl93b3JsZERpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkTWF0cml4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmxkTWF0cml4O1xuICAgIH1cbiAgICAvLyAtLS0gVXBkYXRlIExvZ2ljIC0tLVxuICAgIC8qKiBSZWNhbGN1bGF0ZXMgdGhlIGxvY2FsIG1hdHJpeCBmcm9tIHBvc2l0aW9uLCByb3RhdGlvbiwgYW5kIHNjYWxlLiAqL1xuICAgIHVwZGF0ZUxvY2FsTWF0cml4KCkge1xuICAgICAgICBjb21wb3NlKHRoaXMuX3Bvc2l0aW9uLCB0aGlzLl9yb3RhdGlvbiwgdGhpcy5fc2NhbGUsIHRoaXMuX2xvY2FsTWF0cml4KTtcbiAgICAgICAgdGhpcy5fbG9jYWxEaXJ0eSA9IGZhbHNlO1xuICAgICAgICAvLyBXb3JsZCBtYXRyaXggYWxzbyBiZWNvbWVzIGRpcnR5IHdoZW5ldmVyIGxvY2FsIG1hdHJpeCBjaGFuZ2VzXG4gICAgICAgIHRoaXMuX3dvcmxkRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICAvKiogUmVjYWxjdWxhdGVzIHRoZSB3b3JsZCBtYXRyaXggYmFzZWQgb24gcGFyZW50IGFuZCBsb2NhbCBtYXRyaWNlcy4gKi9cbiAgICB1cGRhdGVXb3JsZE1hdHJpeCgpIHtcbiAgICAgICAgLy8gRW5zdXJlIGxvY2FsIG1hdHJpeCBpcyB1cC10by1kYXRlIGZpcnN0XG4gICAgICAgIGlmICh0aGlzLl9sb2NhbERpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsTWF0cml4KCk7IC8vIFRoaXMgd2lsbCBhbHNvIHNldCBfd29ybGREaXJ0eSA9IHRydWUsIHdoaWNoIGlzIGZpbmVcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgd29ybGQgbWF0cml4OiBwYXJlbnRXb3JsZCAqIGxvY2FsXG4gICAgICAgICAgICB3Z3B1X21hdHJpeF8xLm1hdDQubXVsdGlwbHkodGhpcy5fcGFyZW50LndvcmxkTWF0cml4LCB0aGlzLmxvY2FsTWF0cml4LCB0aGlzLl93b3JsZE1hdHJpeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBObyBwYXJlbnQsIHdvcmxkIG1hdHJpeCBpcyB0aGUgc2FtZSBhcyBsb2NhbCBtYXRyaXhcbiAgICAgICAgICAgIHdncHVfbWF0cml4XzEubWF0NC5jb3B5KHRoaXMubG9jYWxNYXRyaXgsIHRoaXMuX3dvcmxkTWF0cml4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93b3JsZERpcnR5ID0gZmFsc2U7IC8vIFdvcmxkIG1hdHJpeCBpcyBub3cgdXAtdG8tZGF0ZVxuICAgICAgICAvLyBJbXBvcnRhbnQ6IE5vdGlmeSBjaGlsZHJlbiB0aGF0IHRoZWlyIHdvcmxkIG1hdHJpY2VzIGFyZSBub3cgZGlydHlcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQuX3dvcmxkRGlydHkgPSB0cnVlOyAvLyBPciBjYWxsIGNoaWxkLm1ha2VEaXJ0eSgpIGlmIGl0IGhhbmRsZXMgcHJvcGFnYXRpb25cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogTWFya3MgdGhpcyB0cmFuc2Zvcm0gYW5kIGl0cyBkZXNjZW5kYW50cyBhcyBkaXJ0eS4gKi9cbiAgICBtYWtlRGlydHkoKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl93b3JsZERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgLy8gUHJvcGFnYXRlIGRpcnRpbmVzcyBkb3duIHRoZSBoaWVyYXJjaHlcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgICAgICAgLy8gQXZvaWQgaW5maW5pdGUgbG9vcHMgaWYgY2hpbGQgYWxyZWFkeSBtYXJrZWQgZGlydHkgYnkgcGFyZW50IHVwZGF0ZVxuICAgICAgICAgICAgaWYgKCFjaGlsZC5fd29ybGREaXJ0eSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm1ha2VXb3JsZERpcnR5KCk7IC8vIENoaWxkIG9ubHkgbmVlZHMgd29ybGQgdXBkYXRlLCBub3QgbmVjZXNzYXJpbHkgbG9jYWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogTWFya3MgdGhpcyB0cmFuc2Zvcm0ncyB3b3JsZCBtYXRyaXggYW5kIGRlc2NlbmRhbnRzJyB3b3JsZCBtYXRyaWNlcyBhcyBkaXJ0eS4gKi9cbiAgICBtYWtlV29ybGREaXJ0eSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl93b3JsZERpcnR5KSB7IC8vIEF2b2lkIHJlZHVuZGFudCBwcm9wYWdhdGlvblxuICAgICAgICAgICAgdGhpcy5fd29ybGREaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubWFrZVdvcmxkRGlydHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyAtLS0gSGllcmFyY2h5IE1hbmFnZW1lbnQgLS0tXG4gICAgZ2V0IGNoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gICAgfVxuICAgIGFkZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQuX3BhcmVudCA9PT0gdGhpcylcbiAgICAgICAgICAgIHJldHVybjsgLy8gQWxyZWFkeSBhIGNoaWxkXG4gICAgICAgIGlmIChjaGlsZC5fcGFyZW50KSB7XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50LnJlbW92ZShjaGlsZCk7IC8vIFJlbW92ZSBmcm9tIHByZXZpb3VzIHBhcmVudFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgY2hpbGQuX3BhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICBjaGlsZC5tYWtlV29ybGREaXJ0eSgpOyAvLyBDaGlsZCdzIHdvcmxkIHRyYW5zZm9ybSBpcyBub3cgcmVsYXRpdmUgdG8gdGhpcyBvbmVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNoaWxkLl9wYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjaGlsZC5tYWtlV29ybGREaXJ0eSgpOyAvLyBDaGlsZCdzIHdvcmxkIHRyYW5zZm9ybSBuZWVkcyByZWNhbGN1bGF0aW9uIChub3cgcmVsYXRpdmUgdG8gcm9vdClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQuX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoaWxkLm1ha2VXb3JsZERpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICB9XG4gICAgdHJhdmVyc2UoZm4pIHtcbiAgICAgICAgZm4odGhpcyk7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNoaWxkLnRyYXZlcnNlKGZuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuaWZvcm1NYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgdW5pZm9ybV91dGlsc18xID0gcmVxdWlyZShcIi4vdW5pZm9ybS11dGlsc1wiKTtcbmNsYXNzIFVuaWZvcm1NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2UsIHVuaWZvcm1zLCB0ZXh0dXJlcywgbGFiZWwpIHtcbiAgICAgICAgdGhpcy5fdW5pZm9ybURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNEaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2RldmljZSA9IGRldmljZTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybXMgPSB1bmlmb3JtcztcbiAgICAgICAgdGhpcy5fdGV4dHVyZXMgPSB0ZXh0dXJlcztcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gICAgdXBkYXRlVW5pZm9ybSh1bmlmb3JtKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgdG9VcGRhdGUgPSAoX2EgPSB0aGlzLl91bmlmb3JtcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbmQoKHUpID0+IHUubmFtZSA9PT0gdW5pZm9ybS5uYW1lKTtcbiAgICAgICAgdG9VcGRhdGUudmFsdWUgPSB1bmlmb3JtLnZhbHVlO1xuICAgICAgICB0aGlzLnNldFVuaWZvcm1zRGlydHkoKTtcbiAgICB9XG4gICAgdXBkYXRlVGV4dHVyZXModGV4dHVyZXMpIHtcbiAgICAgICAgdGhpcy5fdGV4dHVyZXMgPSB0ZXh0dXJlcztcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VuaWZvcm1EaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5fdW5pZm9ybUFyciA9ICgwLCB1bmlmb3JtX3V0aWxzXzEucGFja1VuaWZvcm1zKSh0aGlzLl91bmlmb3JtcyB8fCBbXSwgdGhpcy5fdW5pZm9ybUFycik7XG4gICAgICAgICAgICB0aGlzLl91bmlmb3JtQnVmZmVyID0gKDAsIHVuaWZvcm1fdXRpbHNfMS51cGxvYWRVbmlmb3JtQnVmZmVyKSh0aGlzLl91bmlmb3JtQXJyLCB0aGlzLl9kZXZpY2UsIHRoaXMuX2xhYmVsLCB0aGlzLl91bmlmb3JtQnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuX3VuaWZvcm1EaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlc0RpcnR5KSB7XG4gICAgICAgICAgICAodGhpcy5fdGV4dHVyZXMgfHwgW10pLmZvckVhY2goKHQpID0+IHQudXBsb2FkKHRoaXMuX2RldmljZSkpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXNEaXJ0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRleHR1cmVzRGlydHkoKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBzZXRVbmlmb3Jtc0RpcnR5KCkge1xuICAgICAgICB0aGlzLl91bmlmb3JtRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBzZXREaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0dXJlc0RpcnR5KCk7XG4gICAgICAgIHRoaXMuc2V0VW5pZm9ybXNEaXJ0eSgpO1xuICAgIH1cbiAgICBnZXQgc2FtcGxlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9zYW1wbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9zYW1wbGVyID0gdGhpcy5fZGV2aWNlLmNyZWF0ZVNhbXBsZXIoe1xuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc2FtcGxlcjtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cExheW91dERlc2NyaXB0b3IoKSB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgbGV0IGJpbmRpbmcgPSAwO1xuICAgICAgICBjb25zdCB7IF91bmlmb3JtcywgX3RleHR1cmVzIH0gPSB0aGlzO1xuICAgICAgICBpZiAoKF91bmlmb3JtcyA9PT0gbnVsbCB8fCBfdW5pZm9ybXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF91bmlmb3Jtcy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nOiAwLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLlZFUlRFWCB8IEdQVVNoYWRlclN0YWdlLkZSQUdNRU5ULFxuICAgICAgICAgICAgICAgIGJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVuaWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgaGFzRHluYW1pY09mZnNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1pbkJpbmRpbmdTaXplOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKF90ZXh0dXJlcyA9PT0gbnVsbCB8fCBfdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90ZXh0dXJlcy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkZSQUdNRU5ULFxuICAgICAgICAgICAgICAgIHNhbXBsZXI6IHsgdHlwZTogXCJmaWx0ZXJpbmdcIiB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChfdGV4dHVyZXMgPT09IG51bGwgfHwgX3RleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGV4dHVyZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogaSArIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkZSQUdNRU5ULFxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVUeXBlOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3RGltZW5zaW9uOiBcIjJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXNhbXBsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBgJHt0aGlzLl9sYWJlbH0gQmluZEdyb3VwIExheW91dGAsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwTGF5b3V0KCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwTGF5b3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwTGF5b3V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cExheW91dCA9IHRoaXMuX2RldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQodGhpcy5iaW5kR3JvdXBMYXlvdXREZXNjcmlwdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRHcm91cExheW91dDtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cERlc2NyaXB0b3IoKSB7XG4gICAgICAgIGxldCBiaW5kaW5nID0gMDtcbiAgICAgICAgY29uc3QgeyBfdW5pZm9ybXMsIF90ZXh0dXJlcyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBpZiAoKF91bmlmb3JtcyA9PT0gbnVsbCB8fCBfdW5pZm9ybXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF91bmlmb3Jtcy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgIHJlc291cmNlOiB7IGJ1ZmZlcjogdGhpcy5fdW5pZm9ybUJ1ZmZlciB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChfdGV4dHVyZXMgPT09IG51bGwgfHwgX3RleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGV4dHVyZXMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogdGhpcy5zYW1wbGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChfdGV4dHVyZXMgPT09IG51bGwgfHwgX3RleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGV4dHVyZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZzogaSArIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBfdGV4dHVyZXNbaV0udmlldyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGAke3RoaXMuX2xhYmVsfSBCaW5kR3JvdXBgLFxuICAgICAgICAgICAgbGF5b3V0OiB0aGlzLmJpbmRHcm91cExheW91dCxcbiAgICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9iaW5kR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kR3JvdXA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmluZEdyb3VwID0gdGhpcy5fZGV2aWNlLmNyZWF0ZUJpbmRHcm91cCh0aGlzLmJpbmRHcm91cERlc2NyaXB0b3IpO1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwO1xuICAgIH1cbn1cbmV4cG9ydHMuVW5pZm9ybU1hbmFnZXIgPSBVbmlmb3JtTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYWNrVW5pZm9ybXMgPSBwYWNrVW5pZm9ybXM7XG5leHBvcnRzLnVwbG9hZFVuaWZvcm1CdWZmZXIgPSB1cGxvYWRVbmlmb3JtQnVmZmVyO1xuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpO1xuLy8gTWFwIFdHU0wgdHlwZXMgdG8gdGhlaXIgc3RkMTQwIGxheW91dCBpbmZvLCBub3cgaW5jbHVkaW5nIGFkdmFuY2VBbW91bnQgYW5kIHBhZGRlZFN0cmlkZSBmb3IgYWxsXG5jb25zdCBTVEQxNDBfTEFZT1VUX0lORk8gPSB7XG4gICAgLy8gdHlwZTogeyBhbGlnbiwgc2l6ZSwgYWR2YW5jZUFtb3VudCwgcGFkZGVkU3RyaWRlIH1cbiAgICBmMzI6IHsgYWxpZ246IDQsIHNpemU6IDQsIGFkdmFuY2VBbW91bnQ6IDQsIHBhZGRlZFN0cmlkZTogNCB9LFxuICAgIHZlYzI6IHsgYWxpZ246IDgsIHNpemU6IDgsIGFkdmFuY2VBbW91bnQ6IDgsIHBhZGRlZFN0cmlkZTogOCB9LFxuICAgIHZlYzM6IHsgYWxpZ246IDE2LCBzaXplOiAxMiwgYWR2YW5jZUFtb3VudDogMTYsIHBhZGRlZFN0cmlkZTogMTYgfSwgLy8gQWxpZ25zIHRvIDE2LCBkYXRhIHNpemUgMTIsIG9jY3VwaWVzIDE2XG4gICAgdmVjNDogeyBhbGlnbjogMTYsIHNpemU6IDE2LCBhZHZhbmNlQW1vdW50OiAxNiwgcGFkZGVkU3RyaWRlOiAxNiB9LFxuICAgIGNvbG9yOiB7IGFsaWduOiAxNiwgc2l6ZTogMTYsIGFkdmFuY2VBbW91bnQ6IDE2LCBwYWRkZWRTdHJpZGU6IDE2IH0sXG4gICAgbWF0MzogeyBhbGlnbjogMTYsIHNpemU6IDM2LCBhZHZhbmNlQW1vdW50OiA0OCwgcGFkZGVkU3RyaWRlOiAxNiB9LCAvLyBTaXplIDkqND0zNiwgMyBjb2xzICogMTYgYnl0ZXMvY29sIHN0cmlkZSA9IDQ4IGJ5dGVzIGFkdmFuY2VcbiAgICBtYXQ0OiB7IGFsaWduOiAxNiwgc2l6ZTogNjQsIGFkdmFuY2VBbW91bnQ6IDY0LCBwYWRkZWRTdHJpZGU6IDE2IH0sIC8vIFNpemUgMTYqND02NCwgNCBjb2xzICogMTYgYnl0ZXMvY29sIHN0cmlkZSA9IDY0IGJ5dGVzIGFkdmFuY2Vcbn07XG4vLyBIZWxwZXIgdG8gZGV0ZXJtaW5lIHRoZSBXR1NMIHR5cGUgc3RyaW5nIGZyb20gYSBKYXZhU2NyaXB0IHZhbHVlXG5mdW5jdGlvbiBnZXREYXRhVHlwZShpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBcImYzMlwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnZhbHVlIGluc3RhbmNlb2YgY29sb3JfMS5Db2xvcikge1xuICAgICAgICByZXR1cm4gXCJjb2xvclwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChpdGVtLnZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZWMyXCI7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmVjM1wiO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlYzRcIjtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJtYXQzXCI7XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm1hdDRcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBGbG9hdDMyQXJyYXkgbGVuZ3RoIGluIGl0ZW0gJHtpdGVtLm5hbWV9IGZvciB1bmlmb3JtIHBhY2tpbmc6ICR7aXRlbS52YWx1ZS5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZGF0YSB0eXBlIGluIGl0ZW0gJHtpdGVtLm5hbWV9IGZvciB1bmlmb3JtIHBhY2tpbmc6ICR7dHlwZW9mIGl0ZW0udmFsdWV9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFja1VuaWZvcm1zKGl0ZW1zLCB0YXJnZXRCdWZmZXIsIHRhcmdldE9mZnNldCA9IDApIHtcbiAgICBsZXQgY3VycmVudE9mZnNldCA9IDA7XG4gICAgbGV0IG1heEFsaWdubWVudCA9IDA7XG4gICAgLy8gU3RvcmUgbGF5b3V0IGluZm8gaW5jbHVkaW5nIHRoZSBjYWxjdWxhdGVkIG9mZnNldCByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgcGFja2luZ1xuICAgIGNvbnN0IGl0ZW1MYXlvdXRzID0gW107XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhdGFyZ2V0QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7IC8vIEhhbmRsZSBlbXB0eSBpbnB1dCB3aGVuIGNyZWF0aW5nIG5ldyBidWZmZXJcbiAgICB9XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0YXJnZXRCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldEJ1ZmZlcjsgLy8gTm90aGluZyB0byB3cml0ZSBpZiBpdGVtcyBhcmUgZW1wdHlcbiAgICB9XG4gICAgLy8gLS0tIEZpcnN0IFBhc3M6IENhbGN1bGF0ZSByZWxhdGl2ZSBvZmZzZXRzIGFuZCB0b3RhbCBzaXplIC0tLVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBjb25zdCB0eXBlID0gZ2V0RGF0YVR5cGUoaXRlbSk7XG4gICAgICAgIGNvbnN0IGxheW91dEluZm8gPSBTVEQxNDBfTEFZT1VUX0lORk9bdHlwZV07XG4gICAgICAgIGlmICghbGF5b3V0SW5mbykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMYXlvdXQgaW5mbyBub3QgZGVmaW5lZCBmb3IgdHlwZTogJHt0eXBlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1BbGlnbiA9IGxheW91dEluZm8uYWxpZ247XG4gICAgICAgIGNvbnN0IGl0ZW1TaXplID0gbGF5b3V0SW5mby5zaXplOyAvLyBBY3R1YWwgZGF0YSBzaXplXG4gICAgICAgIG1heEFsaWdubWVudCA9IE1hdGgubWF4KG1heEFsaWdubWVudCwgaXRlbUFsaWduKTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHBhZGRpbmcgbmVlZGVkIEJFRk9SRSB0aGlzIGl0ZW0gdG8gbWVldCBpdHMgYWxpZ25tZW50XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAoaXRlbUFsaWduIC0gKGN1cnJlbnRPZmZzZXQgJSBpdGVtQWxpZ24pKSAlIGl0ZW1BbGlnbjtcbiAgICAgICAgY3VycmVudE9mZnNldCArPSBwYWRkaW5nO1xuICAgICAgICAvLyBTdG9yZSBsYXlvdXQgaW5mbyBmb3IgdGhlIHNlY29uZCBwYXNzICh3cml0aW5nIGRhdGEpXG4gICAgICAgIGNvbnN0IGxheW91dEVudHJ5ID0ge1xuICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXQ6IGN1cnJlbnRPZmZzZXQsIC8vIE9mZnNldCByZWxhdGl2ZSB0byB0aGUgc3RhcnQgb2YgcGFja2luZ1xuICAgICAgICAgICAgc2l6ZTogaXRlbVNpemUsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICAgIHBhZGRlZFN0cmlkZTogbGF5b3V0SW5mby5wYWRkZWRTdHJpZGUsXG4gICAgICAgIH07XG4gICAgICAgIGl0ZW1MYXlvdXRzLnB1c2gobGF5b3V0RW50cnkpO1xuICAgICAgICAvLyBBZHZhbmNlIG9mZnNldCBieSB0aGUgcHJlLWNhbGN1bGF0ZWQgYW1vdW50IGZvciB0aGlzIHR5cGVcbiAgICAgICAgY3VycmVudE9mZnNldCArPSBsYXlvdXRJbmZvLmFkdmFuY2VBbW91bnQ7XG4gICAgfVxuICAgIC8vIC0tLSBDYWxjdWxhdGUgZmluYWwgc2l6ZSBuZWVkZWQgZm9yIHBhY2tpbmcgLS0tXG4gICAgLy8gVGhlIHRvdGFsIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIHRoZSBtYXhpbXVtIGFsaWdubWVudCBlbmNvdW50ZXJlZFxuICAgIGNvbnN0IGZpbmFsUGFkZGluZyA9IChtYXhBbGlnbm1lbnQgLSAoY3VycmVudE9mZnNldCAlIG1heEFsaWdubWVudCkpICUgbWF4QWxpZ25tZW50O1xuICAgIGNvbnN0IHRvdGFsU2l6ZU5lZWRlZCA9IGN1cnJlbnRPZmZzZXQgKyBmaW5hbFBhZGRpbmc7XG4gICAgLy8gLS0tIERldGVybWluZSB0YXJnZXQgYnVmZmVyIGFuZCBiYXNlIG9mZnNldCBmb3Igd3JpdGluZyAtLS1cbiAgICBsZXQgYnVmZmVyVG9Xcml0ZTtcbiAgICBsZXQgYmFzZVdyaXRlT2Zmc2V0O1xuICAgIGlmICh0YXJnZXRCdWZmZXIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByb3ZpZGVkIGJ1ZmZlciBpcyBsYXJnZSBlbm91Z2hcbiAgICAgICAgaWYgKHRhcmdldEJ1ZmZlci5ieXRlTGVuZ3RoIDwgdGFyZ2V0T2Zmc2V0ICsgdG90YWxTaXplTmVlZGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRhcmdldCBidWZmZXIgaXMgdG9vIHNtYWxsLiBOZWVkICR7dG90YWxTaXplTmVlZGVkfSBieXRlcyBzdGFydGluZyBhdCBvZmZzZXQgJHt0YXJnZXRPZmZzZXR9LCBidXQgYnVmZmVyIHNpemUgaXMgJHt0YXJnZXRCdWZmZXIuYnl0ZUxlbmd0aH0gYnl0ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyVG9Xcml0ZSA9IHRhcmdldEJ1ZmZlcjtcbiAgICAgICAgYmFzZVdyaXRlT2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGJ1ZmZlciBpZiBub25lIHdhcyBwcm92aWRlZFxuICAgICAgICBidWZmZXJUb1dyaXRlID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsU2l6ZU5lZWRlZCk7XG4gICAgICAgIGJhc2VXcml0ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIC8vIC0tLSBDcmVhdGUgdmlld3MgZm9yIHRoZSBidWZmZXIgd2UgYXJlIHdyaXRpbmcgdG8gLS0tXG4gICAgY29uc3QgYnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXJUb1dyaXRlKTtcbiAgICBjb25zdCBidWZmZXJBc0Zsb2F0cyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyVG9Xcml0ZSk7XG4gICAgLy8gLS0tIFNlY29uZCBQYXNzOiBXcml0ZSBkYXRhIHRvIHRoZSB0YXJnZXQgYnVmZmVyIC0tLVxuICAgIGZvciAoY29uc3QgbGF5b3V0IG9mIGl0ZW1MYXlvdXRzKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgYnl0ZSBvZmZzZXQgaW4gdGhlIHRhcmdldCBidWZmZXJcbiAgICAgICAgY29uc3Qgd3JpdGVPZmZzZXQgPSBiYXNlV3JpdGVPZmZzZXQgKyBsYXlvdXQucmVsYXRpdmVPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsYXlvdXQuZGF0YS52YWx1ZTsgLy8gQ2FzdCBmb3IgY29udmVuaWVuY2UsIGhhbmRsZSBudW1iZXIgYmVsb3dcbiAgICAgICAgY29uc3QgdHlwZSA9IGxheW91dC50eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJmMzJcIjpcbiAgICAgICAgICAgICAgICAvLyBXcml0ZSBzaW5nbGUgZmxvYXQgdXNpbmcgRGF0YVZpZXdcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3LnNldEZsb2F0MzIod3JpdGVPZmZzZXQsIGxheW91dC5kYXRhLnZhbHVlLCB0cnVlKTsgLy8gdHJ1ZSBmb3IgbGl0dGxlRW5kaWFuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQobGF5b3V0LmRhdGEudmFsdWUudW5pZm9ybVZhbHVlKCksIHdyaXRlT2Zmc2V0IC8gNCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidmVjMlwiOlxuICAgICAgICAgICAgY2FzZSBcInZlYzRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJtYXQ0XCI6IC8vIG1hdDQgY29sdW1ucyBhcmUgdGlnaHRseSBwYWNrZWQgaW4gc291cmNlIGFuZCBkZXN0IGhhcyBzYW1lIHN0cmlkZVxuICAgICAgICAgICAgICAgIC8vIFdyaXRlIEZsb2F0MzJBcnJheSBkYXRhIGRpcmVjdGx5IHVzaW5nIEZsb2F0MzJBcnJheSB2aWV3XG4gICAgICAgICAgICAgICAgLy8gT2Zmc2V0IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBmbG9hdCBlbGVtZW50cyAod3JpdGVPZmZzZXQgLyA0IGJ5dGVzX3Blcl9mbG9hdClcbiAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQoZGF0YSwgd3JpdGVPZmZzZXQgLyA0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2ZWMzXCI6XG4gICAgICAgICAgICAgICAgLy8gV3JpdGUgdmVjMyBkYXRhICgzIGZsb2F0cykgdXNpbmcgRmxvYXQzMkFycmF5IHZpZXdcbiAgICAgICAgICAgICAgICAvLyBUaGUgYnVmZmVyIGhhcyBzcGFjZSBmb3IgNCBmbG9hdHMgYWxsb2NhdGVkLCBidXQgd2Ugb25seSB3cml0ZSAzLlxuICAgICAgICAgICAgICAgIGJ1ZmZlckFzRmxvYXRzLnNldChkYXRhLCB3cml0ZU9mZnNldCAvIDQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hdDNcIjpcbiAgICAgICAgICAgICAgICAvLyBXcml0ZSBtYXQzIGRhdGEgY29sdW1uIGJ5IGNvbHVtbiBkdWUgdG8gcGFkZGluZ1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggdmVjMyBjb2x1bW4gdGFrZXMgMTIgYnl0ZXMgb2YgZGF0YSBidXQgb2NjdXBpZXMgMTYgYnl0ZXMgc3RyaWRlXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uU3RyaWRlRmxvYXRzID0gbGF5b3V0LnBhZGRlZFN0cmlkZSAvIDQ7IC8vIDE2IC8gNCA9IDQgZmxvYXRzIHN0cmlkZVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDMgY29sdW1uc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VPZmZzZXQgPSBpICogMzsgLy8gU291cmNlIGRhdGEgaXMgdGlnaHRseSBwYWNrZWQgKDAsIDMsIDYpXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBkZXN0aW5hdGlvbiBvZmZzZXQgaW4gZmxvYXQgZWxlbWVudHMsIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RPZmZzZXRGbG9hdHMgPSB3cml0ZU9mZnNldCAvIDQgKyBpICogY29sdW1uU3RyaWRlRmxvYXRzO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQoZGF0YS5zdWJhcnJheShzb3VyY2VPZmZzZXQsIHNvdXJjZU9mZnNldCArIDMpLCBkZXN0T2Zmc2V0RmxvYXRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBBZGQgY2FzZXMgZm9yIG90aGVyIHR5cGVzIGlmIHN1cHBvcnRlZFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgYnVmZmVyIChlaXRoZXIgdGhlIG9uZSBwYXNzZWQgaW4gb3IgdGhlIG5ld2x5IGNyZWF0ZWQgb25lKVxuICAgIHJldHVybiBidWZmZXJUb1dyaXRlO1xufVxuZnVuY3Rpb24gdXBsb2FkVW5pZm9ybUJ1ZmZlcihwYWNrZWRVbmlmb3JtcywgZGV2aWNlLCBsYWJlbCA9IFwiVW5pZm9ybSBCdWZmZXJcIiwgYnVmZmVyKSB7XG4gICAgYnVmZmVyICE9PSBudWxsICYmIGJ1ZmZlciAhPT0gdm9pZCAwID8gYnVmZmVyIDogKGJ1ZmZlciA9IGRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgc2l6ZTogcGFja2VkVW5pZm9ybXMuYnl0ZUxlbmd0aCxcbiAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuVU5JRk9STSxcbiAgICB9KSk7XG4gICAgZGV2aWNlLnF1ZXVlLndyaXRlQnVmZmVyKGJ1ZmZlciwgMCwgcGFja2VkVW5pZm9ybXMsIDAsIHBhY2tlZFVuaWZvcm1zLmJ5dGVMZW5ndGgpO1xuICAgIHJldHVybiBidWZmZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9