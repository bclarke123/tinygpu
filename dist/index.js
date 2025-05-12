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
    up = wgpu_matrix_1.vec3.create(0, 1, 0), // Default up vector (Y-axis)
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
        // console.trace();
        console.log("Updating Orthographic Projection Matrix"); // For debugging
        // Use wgpu-matrix ortho function
        // mat4.ortho(left, right, bottom, top, near, far, destinationMatrix?)
        // It returns a new matrix if destination is not provided.
        this._projectionMatrix = wgpu_matrix_1.mat4.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far);
        this._isProjectionDirty = false;
    }
    updateViewMatrix() {
        console.log("Updating Orthographic View Matrix"); // For debugging
        // Use wgpu-matrix lookAt function
        this._viewMatrix = wgpu_matrix_1.mat4.lookAt(this.position, this.target, this.up);
        this._isViewDirty = false;
    }
    // --- Methods to Modify Camera Properties (and mark dirty) ---
    // Using vec3.equals for comparison and vec3.copy for setting
    setPosition(x, y, z) {
        super.setPosition(x, y, z);
        const newPosition = wgpu_matrix_1.vec3.create(x, y, z);
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
    up = wgpu_matrix_1.vec3.create(0, 1, 0), // Use vec3.create for default
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
    setPosition(x, y, z) {
        super.setPosition(x, y, z);
        const newPosition = wgpu_matrix_1.vec3.create(x, y, z);
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
                const tex = textures[i];
                const viewDimension = tex.dimension || tex.texture.dimension;
                if (tex.accessType === "sample") {
                    entries.push({
                        binding,
                        visibility: GPUShaderStage.COMPUTE,
                        texture: {
                            sampleType: "float",
                            viewDimension,
                            multisampled: false,
                        },
                    });
                }
                else {
                    const { accessType } = tex;
                    const access = accessType === "storageReadWrite"
                        ? "read-write"
                        : accessType === "storageWrite"
                            ? "write-only"
                            : "read-only";
                    const format = tex.format || tex.texture.format;
                    entries.push({
                        binding,
                        visibility: GPUShaderStage.COMPUTE,
                        storageTexture: {
                            access,
                            format,
                            viewDimension,
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
        const layout = this.getBindGroupLayout(device);
        this._bindGroup = device.createBindGroup({
            label: `${this.label} BindGroup`,
            layout,
            entries: this.bindGroupEntries,
        });
        return this._bindGroup;
    }
}
exports.ComputeTask = ComputeTask;


/***/ }),

/***/ "./src/fluid/index.ts":
/*!****************************!*\
  !*** ./src/fluid/index.ts ***!
  \****************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FluidSimulation = exports.FluidSimulationOptions = void 0;
const wgpu_matrix_1 = __webpack_require__(/*! wgpu-matrix */ "./node_modules/.pnpm/wgpu-matrix@3.4.0/node_modules/wgpu-matrix/dist/3.x/wgpu-matrix.module.js");
const compute_task_1 = __webpack_require__(/*! ../compute/compute-task */ "./src/compute/compute-task.ts");
const structs_wgsl_1 = __importDefault(__webpack_require__(/*! ./shaders/structs.wgsl */ "./src/fluid/shaders/structs.wgsl"));
const stage1_wgsl_1 = __importDefault(__webpack_require__(/*! ./shaders/stage1.wgsl */ "./src/fluid/shaders/stage1.wgsl"));
const stage2_wgsl_1 = __importDefault(__webpack_require__(/*! ./shaders/stage2.wgsl */ "./src/fluid/shaders/stage2.wgsl"));
const stage3_wgsl_1 = __importDefault(__webpack_require__(/*! ./shaders/stage3.wgsl */ "./src/fluid/shaders/stage3.wgsl"));
const uniform_utils_1 = __webpack_require__(/*! ../uniform-utils */ "./src/uniform-utils.ts");
class FluidSimulationOptions {
    constructor(particles, gridSize) {
        this.particles = particles;
        this.gridSize = gridSize;
        this.dimensions = 3;
        this.dt = 1e-4;
        this.dx = 1.0 / this.gridSize;
        this.invDx = this.gridSize;
        this.particleInitialVolume = Math.pow((1.0 / this.gridSize) * 0.5, this.dimensions);
        this.particleMass = 1.0; // Math.pow((1.0 / this.gridSize) * 0.5, this.dimensions);
        this.gravity = 9.8;
        this.mu0 = 5e3 / (2.0 * (1.0 + 0.2));
        this.lambda0 = (5e3 * 0.2) / ((1.0 + 0.2) * (1.0 - 2.0 * 0.2));
        this.fluidStiffnessEf = 400;
        this.snowPlasticityHFactor = 10;
        this.snowYieldMin = 1.0 - 2.5e-2;
        this.snowYieldMax = 1.0 + 4.4e-3;
        this.boundaryExtent = 3;
    }
    asUniformItems() {
        const items = [
            { name: "dt", value: this.dt, type: "f32" },
            { name: "dx", value: this.dx, type: "f32" },
            { name: "inv_dx", value: this.invDx, type: "f32" }, // Name in WGSL is inv_dx
            { name: "grid_size", value: this.gridSize, type: "u32" },
            { name: "dimensions", value: this.dimensions, type: "u32" },
            { name: "num_particles", value: this.particles, type: "u32" }, // Name in WGSL is num_particles
            { name: "particle_initial_volume", value: this.particleInitialVolume, type: "f32" },
            { name: "particle_mass_param", value: this.particleMass, type: "f32" }, // Name in WGSL
            { name: "gravity", value: this.gravity, type: "f32" },
            { name: "mu_0", value: this.mu0, type: "f32" }, // Name in WGSL
            { name: "lambda_0", value: this.lambda0, type: "f32" }, // Name in WGSL
            { name: "fluid_stiffness_Ef", value: this.fluidStiffnessEf, type: "f32" }, // Name in WGSL
            { name: "snow_plasticity_h_factor", value: this.snowPlasticityHFactor, type: "f32" }, // Name in WGSL
            { name: "snow_yield_min", value: this.snowYieldMin, type: "f32" }, // Name in WGSL
            { name: "snow_yield_max", value: this.snowYieldMax, type: "f32" }, // Name in WGSL
            { name: "boundary_extent", value: this.boundaryExtent, type: "u32" }, // Name in WGSL
        ];
        return items;
    }
}
exports.FluidSimulationOptions = FluidSimulationOptions;
class FluidSimulation {
    constructor(renderer, options = new FluidSimulationOptions(40 * 40 * 40, 128)) {
        this.pingpong = 0;
        this.renderer = renderer;
        this.options = options;
        const gridElements = Math.pow(options.gridSize, options.dimensions);
        this.gridMassBuffer = renderer.createBuffer(new Uint32Array(gridElements), GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST);
        this.gridMomentumBuffer = renderer.createBuffer(new Uint32Array(gridElements * this.options.dimensions), GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST);
        this.gridVelocityBuffer = renderer.createBuffer(new Float32Array(gridElements * this.options.dimensions), GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC);
        this.uniformArr = (0, uniform_utils_1.packUniforms)(this.options.asUniformItems(), this.uniformArr);
        this.uniformBuffer = (0, uniform_utils_1.uploadUniformBuffer)(this.uniformArr, this.renderer.device);
        this.particleBufferA = this.initializeParticleBuffer();
        this.particleBufferB = this.initializeParticleBuffer();
        const stage1ShaderModule = renderer.createShaderModule({
            code: structs_wgsl_1.default + stage1_wgsl_1.default,
            label: "Stage 1",
        });
        const stage2ShaderModule = renderer.createShaderModule({
            code: structs_wgsl_1.default + stage2_wgsl_1.default,
            label: "Stage 2",
        });
        const stage3ShaderModule = renderer.createShaderModule({
            code: structs_wgsl_1.default + stage3_wgsl_1.default,
            label: "Stage 3",
        });
        const particleWorkgroupSizeX = 64; // @workgroup_size(64,1,1)
        const s13Size = Math.ceil(this.options.particles / particleWorkgroupSizeX);
        const s2Size = Math.ceil(this.options.gridSize / 4); // @workgroup_size(4, 4, 4)
        this.stage1 = [
            this.initializeComputePass("Stage 1 A", wgpu_matrix_1.vec3.create(s13Size, 1, 1), stage1ShaderModule, [
                { buffer: this.uniformBuffer, type: "uniform" },
                { buffer: this.gridMassBuffer, type: "storage" },
                { buffer: this.gridMomentumBuffer, type: "storage" },
                { buffer: this.particleBufferA, type: "read-only-storage" },
                { buffer: this.particleBufferB, type: "storage" },
            ]),
            this.initializeComputePass("Stage 1 B", wgpu_matrix_1.vec3.create(s13Size, 1, 1), stage1ShaderModule, [
                { buffer: this.uniformBuffer, type: "uniform" },
                { buffer: this.gridMassBuffer, type: "storage" },
                { buffer: this.gridMomentumBuffer, type: "storage" },
                { buffer: this.particleBufferB, type: "read-only-storage" },
                { buffer: this.particleBufferA, type: "storage" },
            ]),
        ];
        this.stage2 = this.initializeComputePass("Stage 2", wgpu_matrix_1.vec3.create(s2Size, s2Size, s2Size), stage2ShaderModule, [
            { buffer: this.uniformBuffer, type: "uniform" },
            { buffer: this.gridMassBuffer, type: "storage" },
            { buffer: this.gridMomentumBuffer, type: "storage" },
            { buffer: this.gridVelocityBuffer, type: "storage" },
        ]);
        this.stage3 = [
            this.initializeComputePass("Stage 3 A", wgpu_matrix_1.vec3.create(s13Size, 1, 1), stage3ShaderModule, [
                { buffer: this.uniformBuffer, type: "uniform" },
                { buffer: this.gridVelocityBuffer, type: "read-only-storage" },
                { buffer: this.particleBufferA, type: "read-only-storage" },
                { buffer: this.particleBufferB, type: "storage" },
            ]),
            this.initializeComputePass("Stage 3 B", wgpu_matrix_1.vec3.create(s13Size, 1, 1), stage3ShaderModule, [
                { buffer: this.uniformBuffer, type: "uniform" },
                { buffer: this.gridVelocityBuffer, type: "read-only-storage" },
                { buffer: this.particleBufferB, type: "read-only-storage" },
                { buffer: this.particleBufferA, type: "storage" },
            ]),
        ];
        // In the constructor:
        const particleStructSizeBytes = 144;
        const totalParticleDataBytes = this.options.particles * particleStructSizeBytes;
        this.particleStagingBuffer = this.renderer.device.createBuffer({
            size: totalParticleDataBytes,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, // For copying to, and mapping for CPU read
            label: "ParticleStagingBuffer",
        });
        this.particleDataForReadback = new ArrayBuffer(totalParticleDataBytes);
        this.gridVelocityStagingBuffer = this.renderer.device.createBuffer({
            size: gridElements * options.dimensions * 4,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ, // For copying to, and mapping for CPU read
            label: "VelocityStagingBuffer",
        });
    }
    initializeComputePass(label, dispatchCount, shader, buffers) {
        const task = new compute_task_1.ComputeTask({
            label,
            shader,
            entryPoint: "main",
            dispatchCount,
            buffers,
        });
        const bindGroup = task.getBindGroup(this.renderer.device);
        const pipeline = this.renderer.computePipelineFor(task);
        return {
            task,
            bindGroup,
            pipeline,
        };
    }
    initializeParticleBuffer() {
        const now = performance.now();
        const value = {
            position: wgpu_matrix_1.vec3.create(),
            velocity: wgpu_matrix_1.vec3.create(),
            affineMatrixC: wgpu_matrix_1.mat3.create(),
            deformationGradientF: wgpu_matrix_1.mat3.identity(),
            mass: this.options.particleMass,
            Jf: 1.0,
            Jp: 1.0,
            materialIndex: 0,
        };
        const members = Object.keys(value).map((k) => ({ name: k }));
        // console.log(value);
        const packed = (0, uniform_utils_1.packUniforms)([
            {
                name: "Particle",
                type: "Particle",
                members,
                value,
            },
        ]);
        const packedArr = new Uint8Array(packed);
        const particleSize = packed.byteLength;
        const particleBufferSize = particleSize * this.options.particles;
        const buf = new Uint8Array(particleBufferSize);
        const scale = 2.0;
        const pos = wgpu_matrix_1.vec3.create();
        const posBuf = new Uint8Array(pos.buffer);
        const sideLen = Math.ceil(Math.cbrt(this.options.particles));
        for (let i = 0; i < this.options.particles; i++) {
            const x = Math.floor(i / (sideLen * sideLen)) - sideLen * 0.5;
            const y = Math.floor((i % (sideLen * sideLen)) / sideLen) - sideLen * 0.5;
            const z = (i % sideLen) - sideLen * 0.5;
            pos.set([x, y, z]);
            wgpu_matrix_1.vec3.mulScalar(pos, scale, pos);
            packedArr.set(posBuf, 0);
            buf.set(packedArr, i * particleSize);
        }
        const ret = this.renderer.createBuffer(buf, GPUBufferUsage.COPY_DST |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.STORAGE);
        console.log(`Created position buffer in ${performance.now() - now}ms`);
        return ret;
    }
    tick() {
        const commandEncoder = this.renderer.device.createCommandEncoder();
        commandEncoder.clearBuffer(this.gridMassBuffer, 0);
        commandEncoder.clearBuffer(this.gridMomentumBuffer, 0);
        const passEncoder = commandEncoder.beginComputePass();
        const stage1 = this.stage1[this.pingpong];
        const stage2 = this.stage2;
        const stage3 = this.stage3[this.pingpong];
        const stage1Size = stage1.task.dispatchCount;
        passEncoder.setPipeline(stage1.pipeline);
        passEncoder.setBindGroup(0, stage1.bindGroup);
        passEncoder.dispatchWorkgroups(stage1Size[0], stage1Size[1], stage1Size[2]);
        const stage2Size = stage2.task.dispatchCount;
        passEncoder.setPipeline(stage2.pipeline);
        passEncoder.setBindGroup(0, stage2.bindGroup);
        passEncoder.dispatchWorkgroups(stage2Size[0], stage2Size[1], stage2Size[2]);
        const stage3Size = stage3.task.dispatchCount;
        passEncoder.setPipeline(stage3.pipeline);
        passEncoder.setBindGroup(0, stage3.bindGroup);
        passEncoder.dispatchWorkgroups(stage3Size[0], stage3Size[1], stage3Size[2]);
        passEncoder.end();
        // Inside tick(), after passEncoder.end()
        // Choose which particle buffer has the latest data. After pingpong, it's this.stage1[1-this.pingpong].task.buffers[4].buffer
        // or more simply, if pingpong flips at the end of tick, the "written-to" buffer in the *next* frame's P2G input
        // would be the one that was just fully updated.
        // Let's assume currentParticleReadBuffer (from your ping-pong logic) holds the data you want to inspect.
        // If pingpong is 0 before the flip, stage1[0] used A as input, B as output. stage3[0] used B as input, A as output.
        // So, if this.pingpong is 0 (meaning next frame it will be 1), then particleBufferA was the final output.
        // If this.pingpong is 1 (meaning next frame it will be 0), then particleBufferB was the final output.
        const finalOutputParticleBuffer = this.pingpong === 0 ? this.particleBufferA : this.particleBufferB;
        const particleStructSizeBytes = 144;
        const totalParticleDataBytes = this.options.particles * particleStructSizeBytes;
        commandEncoder.copyBufferToBuffer(finalOutputParticleBuffer, // Source: The GPU buffer with latest particle data
        0, // Source offset
        this.particleStagingBuffer, // Destination: The mappable staging buffer
        0, // Destination offset
        totalParticleDataBytes);
        // Now encode the copy for gridVelocityBuffer
        commandEncoder.copyBufferToBuffer(this.gridVelocityBuffer, 0, this.gridVelocityStagingBuffer, // Your new staging buffer for velocities
        0, this.gridVelocityBuffer.size);
        this.renderer.device.queue.submit([commandEncoder.finish()]);
        this.pingpong = 1 - this.pingpong;
    }
    // Add a method to your FluidSimulation class
    inspectParticles() {
        return __awaiter(this, arguments, void 0, function* (numParticlesToLog = 5) {
            // This should be called AFTER the queue.submit() containing the copyBufferToBuffer has processed.
            // A robust way is to use device.queue.onSubmittedWorkDone() if you're not doing it per frame.
            // For simplicity, if called right after a tick(), we hope the copy is done.
            // A better pattern is to do the mapAsync in the next frame's requestAnimationFrame callback,
            // or after onSubmittedWorkDone().
            try {
                yield this.particleStagingBuffer.mapAsync(GPUMapMode.READ, 0, // Offset
                this.particleStagingBuffer.size);
                const mappedRange = this.particleStagingBuffer.getMappedRange();
                // Create a copy of the data so we can unmap the buffer quickly
                const particleDataCopy = mappedRange.slice(0);
                this.particleStagingBuffer.unmap();
                const particles = []; // Or your defined Particle JS/TS object type
                const particleSize = 144; // Bytes per particle, from your setup
                const dataView = new DataView(particleDataCopy);
                for (let i = 0; i < Math.min(numParticlesToLog, this.options.particles); i++) {
                    const offset = i * particleSize;
                    const p = {}; // Or new YourParticleClass();
                    // Unpack fields based on your Particle struct order and alignment
                    // This is the inverse of your packUniforms logic for a single particle
                    // Assuming 'position' is first (vec3f, 12 bytes, 16-byte aligned block)
                    p.position = wgpu_matrix_1.vec3.fromValues(dataView.getFloat32(offset + 0, true), dataView.getFloat32(offset + 4, true), dataView.getFloat32(offset + 8, true));
                    // Assuming 'velocity' is next (vec3f, 12 bytes, 16-byte aligned block)
                    p.velocity = wgpu_matrix_1.vec3.fromValues(dataView.getFloat32(offset + 16, true), dataView.getFloat32(offset + 20, true), dataView.getFloat32(offset + 24, true));
                    // affineMatrixC: mat3x3f. Each column is vec3f, aligned to 16 bytes.
                    // Total 3 * 16 = 48 bytes.
                    // Column 0
                    const c0x = dataView.getFloat32(offset + 32, true);
                    const c0y = dataView.getFloat32(offset + 36, true);
                    const c0z = dataView.getFloat32(offset + 40, true);
                    // Column 1
                    const c1x = dataView.getFloat32(offset + 32 + 16, true);
                    const c1y = dataView.getFloat32(offset + 36 + 16, true);
                    const c1z = dataView.getFloat32(offset + 40 + 16, true);
                    // Column 2
                    const c2x = dataView.getFloat32(offset + 32 + 32, true);
                    const c2y = dataView.getFloat32(offset + 36 + 32, true);
                    const c2z = dataView.getFloat32(offset + 40 + 32, true);
                    p.affineMatrixC = wgpu_matrix_1.mat3.create(c0x, c0y, c0z, c1x, c1y, c1z, c2x, c2y, c2z);
                    // deformationGradientF: mat3x3f (another 48 bytes)
                    // Starts at offset + 32 + 48 = offset + 80
                    const f0x = dataView.getFloat32(offset + 80, true);
                    // ... (unpack all 9 components similarly to C) ...
                    p.deformationGradientF = wgpu_matrix_1.mat3.identity(); // Placeholder, unpack properly
                    // mass: f32 (starts after F, i.e., offset + 80 + 48 = offset + 128)
                    p.mass = dataView.getFloat32(offset + 128, true);
                    // Jp: f32 (offset + 128 + 4 = offset + 132)
                    p.Jp = dataView.getFloat32(offset + 132, true);
                    // Jf: f32 (offset + 132 + 4 = offset + 136)
                    p.Jf = dataView.getFloat32(offset + 136, true);
                    // materialIndex: u32 (offset + 136 + 4 = offset + 140)
                    p.materialIndex = dataView.getUint32(offset + 140, true);
                    particles.push(p);
                }
                console.log("Readback Particles:", JSON.stringify(particles));
            }
            catch (e) {
                console.error("Failed to map staging buffer or read particles:", e);
            }
        });
    }
    inspectGridVelocities() {
        return __awaiter(this, arguments, void 0, function* (numCellsToLog = 100) {
            try {
                yield this.gridVelocityStagingBuffer.mapAsync(GPUMapMode.READ, 0, this.gridVelocityStagingBuffer.size);
                const mappedRange = this.gridVelocityStagingBuffer.getMappedRange();
                const dataCopy = mappedRange.slice(0);
                this.gridVelocityStagingBuffer.unmap();
                const velocities = [];
                const dataView = new DataView(dataCopy);
                const numGridCells = Math.pow(this.options.gridSize, this.options.dimensions);
                for (let i = 0; i < Math.min(numCellsToLog, numGridCells); i++) {
                    const offset = i * 3 * 4; // 3 floats per cell, 4 bytes per float
                    const vx = dataView.getFloat32(offset + 0, true);
                    const vy = dataView.getFloat32(offset + 4, true);
                    const vz = dataView.getFloat32(offset + 8, true);
                    if (vx !== 0 || vy !== 0 || vz !== 0) { // Only log non-zero velocities
                        velocities.push({ x: vx, y: vy, z: vz });
                    }
                }
                if (velocities.length > 0) {
                    console.log("Readback Grid Velocities (non-zero):", JSON.stringify(velocities, null, 2));
                }
                else {
                    console.log("Readback Grid Velocities: All logged cells are zero.");
                }
            }
            catch (e) {
                console.error("Failed to map or read grid velocity staging buffer:", e);
            }
        });
    }
}
exports.FluidSimulation = FluidSimulation;


/***/ }),

/***/ "./src/fluid/shaders/stage1.wgsl":
/*!***************************************!*\
  !*** ./src/fluid/shaders/stage1.wgsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("//--------------------------------------------------------------------------------------\n// Bindings\n//--------------------------------------------------------------------------------------\n@group(0) @binding(0) var<uniform> params: SimParams;\n@group(0) @binding(1) var<storage, read_write> grid_mass_atomic: array<atomic<i32>>;\n@group(0) @binding(2) var<storage, read_write> grid_momentum_atomic: array<atomic<i32>>;\n@group(0) @binding(3) var<storage, read> particles_in: array<Particle>;\n@group(0) @binding(4) var<storage, read_write> particles_out: array<Particle>;\n\n@compute @workgroup_size(64) // Or your preferred workgroup size\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n    if (id.x >= params.num_particles) {\n        return;\n    }\n\n    let p = particles_in[id.x];\n\n    // 1. Calculate particle position in grid units and base cell for APIC stencil\n    let particle_pos_grid_units = p.position * params.inv_dx;\n    // cellIndex_base_int is the integer grid cell index for the center of the 3x3x3 stencil\n    let cellIndex_base_float = particle_pos_grid_units - 0.5;\n    let cellIndex_base_int = vec3<i32>(floor(cellIndex_base_float));\n    // cellDiff_from_base_center is particle's sub-grid pos relative to the center of cellIndex_base_int's cell\n    let cellDiff_from_base_center = cellIndex_base_float - vec3<f32>(cellIndex_base_int);\n\n    // 2. Calculate 1D B-spline weights for the 3 stencil nodes in each dimension\n    //    relative to cellIndex_base_int\n    var bspline_weights_1D: array<vec3<f32>, 3>; // [dim_idx][offset_idx from center: -1, 0, +1]\n    for (var d = 0u; d < 3u; d = d + 1u) {\n        let u_particle_offset = cellDiff_from_base_center[d];\n        bspline_weights_1D[d][0] = quadratic_bspline_N(u_particle_offset + 1.0); // Stencil offset -1\n        bspline_weights_1D[d][1] = quadratic_bspline_N(u_particle_offset);       // Stencil offset  0\n        bspline_weights_1D[d][2] = quadratic_bspline_N(u_particle_offset - 1.0); // Stencil offset +1\n    }\n\n    // 3. Iterate over 3x3x3 stencil\n    for (var gx_offset_idx = 0u; gx_offset_idx < 3u; gx_offset_idx = gx_offset_idx + 1u) {\n        for (var gy_offset_idx = 0u; gy_offset_idx < 3u; gy_offset_idx = gy_offset_idx + 1u) {\n            for (var gz_offset_idx = 0u; gz_offset_idx < 3u; gz_offset_idx = gz_offset_idx + 1u) {\n                \n                let final_weight = bspline_weights_1D[0][gx_offset_idx] *\n                                   bspline_weights_1D[1][gy_offset_idx] *\n                                   bspline_weights_1D[2][gz_offset_idx];\n\n                if (final_weight == 0.0) { continue; }\n\n                let target_grid_node_abs_idx = cellIndex_base_int +\n                                               vec3<i32>(i32(gx_offset_idx), i32(gy_offset_idx), i32(gz_offset_idx)) -\n                                               vec3<i32>(1, 1, 1);\n\n                // Boundary check for target_grid_node_abs_idx\n                if (target_grid_node_abs_idx.x < 0 || target_grid_node_abs_idx.x >= i32(params.grid_size) ||\n                    target_grid_node_abs_idx.y < 0 || target_grid_node_abs_idx.y >= i32(params.grid_size) ||\n                    target_grid_node_abs_idx.z < 0 || target_grid_node_abs_idx.z >= i32(params.grid_size)) {\n                    continue;\n                }\n                \n                let flat_target_idx = grid_idx_flat(target_grid_node_abs_idx, params.grid_size);\n                \n                // Calculate APIC momentum term contribution\n                // cellDist_world is vector from particle to current grid node's center (world units)\n                let grid_node_world_pos = (vec3<f32>(target_grid_node_abs_idx) + 0.5) * params.dx;\n                let cellDist_world = grid_node_world_pos - p.position;\n                let Q_affine_correction = p.affine_matrix_C * cellDist_world;\n\n                // Contributions\n                let mass_contrib = final_weight * p.mass;\n                let momentum_contrib_vec = final_weight * (p.mass * p.velocity + Q_affine_correction);\n\n                // Atomic adds\n                atomicAdd(&grid_mass_atomic[flat_target_idx], encodeFixedPoint(mass_contrib));\n                \n                let mom_x_idx = flat_target_idx * 3u + 0u;\n                let mom_y_idx = flat_target_idx * 3u + 1u;\n                let mom_z_idx = flat_target_idx * 3u + 2u;\n\n                atomicAdd(&grid_momentum_atomic[mom_x_idx], encodeFixedPoint(momentum_contrib_vec.x));\n                atomicAdd(&grid_momentum_atomic[mom_y_idx], encodeFixedPoint(momentum_contrib_vec.y));\n                atomicAdd(&grid_momentum_atomic[mom_z_idx], encodeFixedPoint(momentum_contrib_vec.z));\n            }\n        }\n    }\n\n    particles_out[id.x] = p;\n}\n");

/***/ }),

/***/ "./src/fluid/shaders/stage2.wgsl":
/*!***************************************!*\
  !*** ./src/fluid/shaders/stage2.wgsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("//--------------------------------------------------------------------------------------\n// Bindings\n//--------------------------------------------------------------------------------------\n@group(0) @binding(0) var<uniform> params: SimParams;\n@group(0) @binding(1) var<storage, read_write> grid_mass_in: array<atomic<i32>>;     // Read the atomically summed mass\n@group(0) @binding(2) var<storage, read_write> grid_momentum_in: array<atomic<i32>>; // Read the atomically summed momentum (flat)\n@group(0) @binding(3) var<storage, read_write> grid_velocity_out: array<vec3<f32>>; // Write final f32 velocities\n\n//--------------------------------------------------------------------------------------\n// Main Compute Shader\n//--------------------------------------------------------------------------------------\n@compute @workgroup_size(4, 4, 4) // Example 3D workgroup size, total 512. Adjust as needed.\n                                 // Dispatch would be ceil(grid_size/8) in each dimension.\nfn main(@builtin(global_invocation_id) grid_coords_abs_u32: vec3<u32>) {\n    // grid_coords_abs_u32 are the absolute 3D integer coordinates of the current grid cell\n\n    if (grid_coords_abs_u32.x >= params.grid_size ||\n        grid_coords_abs_u32.y >= params.grid_size ||\n        grid_coords_abs_u32.z >= params.grid_size) {\n        return; // Out of bounds for the grid\n    }\n\n    // Convert 3D grid coords to 1D flat index for accessing input buffers\n    let flat_idx = grid_coords_abs_u32.x * params.grid_size * params.grid_size +\n                   grid_coords_abs_u32.y * params.grid_size +\n                   grid_coords_abs_u32.z;\n\n    if (flat_idx == 0u) { // Test for the first grid cell\n        let test_float: f32 = 1.23;\n        let encoded_test: i32 = encodeFixedPoint(test_float); // Uses FIXED_POINT_MULTIPLIER from structs.wgsl\n        let decoded_test: f32 = decodeFixedPoint(encoded_test);\n        grid_velocity_out[flat_idx] = vec3<f32>(f32(encoded_test), decoded_test, test_float);\n        return; // Only process this one cell for this test\n    }\n\n    // 1. Decode mass\n    // atomicLoad is not strictly necessary if Stage 1 P2G is guaranteed to finish before this.\n    // We can treat them as regular i32 after the P2G pass.\n    // For clarity of intent (that these were atomically written):\n    let mass_fixedpoint = atomicLoad(&grid_mass_in[flat_idx]);\n    let mass_float = 1.0; //decodeFixedPoint(mass_fixedpoint);\n\n    var final_velocity = vec3<f32>(0.0, 0.0, 0.0);\n\n    if (mass_float > 1e-9) { // Or some other small epsilon to avoid division by zero\n        // 2. Decode momentum\n        let mom_x_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 0u]);\n        let mom_y_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 1u]);\n        let mom_z_fixedpoint = atomicLoad(&grid_momentum_in[flat_idx * DIMENSIONS + 2u]);\n\n        var momentum_float = vec3<f32>(\n            decodeFixedPoint(mom_x_fixedpoint),\n            decodeFixedPoint(mom_y_fixedpoint),\n            decodeFixedPoint(mom_z_fixedpoint)\n        );\n\n        // 3. Normalize to get velocity\n        final_velocity = momentum_float / mass_float;\n\n        // final_velocity.y = final_velocity.y - 9.8 * 0.0001;\n\n        // 4. Apply Gravity\n        final_velocity.y = final_velocity.y - params.gravity * params.dt;\n\n        // 5. Apply Boundary Conditions\n        // Using grid_coords_abs_u32 (which are 0 to grid_size-1)\n        let boundary_min = f32(params.boundary_extent);\n        let boundary_max = f32(params.grid_size) - f32(params.boundary_extent) -1.0; // -1 because grid_coords are 0-indexed\n\n        // X-axis boundaries\n        // if (f32(grid_coords_abs_u32.x) < boundary_min && final_velocity.x < 0.0) {\n        //     final_velocity.x = 0.0;\n        // }\n        // if (f32(grid_coords_abs_u32.x) > boundary_max && final_velocity.x > 0.0) {\n        //     final_velocity.x = 0.0;\n        // }\n\n        // // Y-axis boundaries\n        // if (f32(grid_coords_abs_u32.y) < boundary_min && final_velocity.y < 0.0) {\n        //     final_velocity.y = 0.0;\n        // }\n        // if (f32(grid_coords_abs_u32.y) > boundary_max && final_velocity.y > 0.0) {\n        //     // Example: Sticky top boundary or just reflect/zero\n        //     final_velocity.y = 0.0;\n        // }\n\n        // // Z-axis boundaries\n        // if (f32(grid_coords_abs_u32.z) < boundary_min && final_velocity.z < 0.0) {\n        //     final_velocity.z = 0.0;\n        // }\n        // if (f32(grid_coords_abs_u32.z) > boundary_max && final_velocity.z > 0.0) {\n        //     final_velocity.z = 0.0;\n        // }\n    }\n    // Else (mass is zero), final_velocity remains (0,0,0)\n\n    // 6. Write to output velocity buffer\n    grid_velocity_out[flat_idx] = final_velocity;\n}");

/***/ }),

/***/ "./src/fluid/shaders/stage3.wgsl":
/*!***************************************!*\
  !*** ./src/fluid/shaders/stage3.wgsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("//--------------------------------------------------------------------------------------\n// Bindings\n//--------------------------------------------------------------------------------------\n@group(0) @binding(0) var<uniform> params: SimParams;\n@group(0) @binding(1) var<storage, read> grid_velocity_in: array<vec3<f32>>;\n@group(0) @binding(2) var<storage, read> particles_in: array<Particle>;\n@group(0) @binding(3) var<storage, read_write> particles_out: array<Particle>;\n\n//--------------------------------------------------------------------------------------\n// Main Compute Shader\n//--------------------------------------------------------------------------------------\n@compute @workgroup_size(64, 1, 1) // Example workgroup size\nfn main(@builtin(global_invocation_id) id: vec3<u32>) {\n    if (id.x >= params.num_particles) {\n        return;\n    }\n\n    let p_in = particles_in[id.x];\n    var p_out = p_in; // Initialize output particle with input values\n\n    // 1. Calculate particle position in grid units and base cell for APIC stencil\n    let particle_pos_grid_units = p_in.position * params.inv_dx;\n    // cellIndex_base_int is the integer grid cell index for the center of the 3x3x3 stencil\n    let cellIndex_base_float = particle_pos_grid_units - 0.5;\n    let cellIndex_base_int = vec3<i32>(floor(cellIndex_base_float));\n    // cellDiff_from_base_center is particle's sub-grid pos relative to the center of cellIndex_base_int's cell\n    let cellDiff_from_base_center = cellIndex_base_float - vec3<f32>(cellIndex_base_int);\n\n    // 2. Calculate 1D B-spline weights (same as in P2G)\n    var bspline_weights_1D: array<vec3<f32>, 3>; // [dim_idx][offset_idx from center: -1, 0, +1]\n    for (var d = 0u; d < 3u; d = d + 1u) {\n        let u_particle_offset = cellDiff_from_base_center[d];\n        bspline_weights_1D[d][0] = quadratic_bspline_N(u_particle_offset + 1.0); // Stencil offset -1\n        bspline_weights_1D[d][1] = quadratic_bspline_N(u_particle_offset);       // Stencil offset  0\n        bspline_weights_1D[d][2] = quadratic_bspline_N(u_particle_offset - 1.0); // Stencil offset +1\n    }\n\n    var new_particle_velocity = vec3<f32>(0.0, 0.0, 0.0);\n    var new_particle_C = mat3x3<f32>(); // Zero matrix\n\n    // 3. Iterate over 3x3x3 stencil to interpolate velocity and C matrix\n    for (var gx_offset_idx = 0u; gx_offset_idx < 3u; gx_offset_idx = gx_offset_idx + 1u) {\n        for (var gy_offset_idx = 0u; gy_offset_idx < 3u; gy_offset_idx = gy_offset_idx + 1u) {\n            for (var gz_offset_idx = 0u; gz_offset_idx < 3u; gz_offset_idx = gz_offset_idx + 1u) {\n                \n                let final_weight = bspline_weights_1D[0][gx_offset_idx] *\n                                   bspline_weights_1D[1][gy_offset_idx] *\n                                   bspline_weights_1D[2][gz_offset_idx];\n\n                if (final_weight == 0.0) { continue; }\n\n                let target_grid_node_abs_idx = cellIndex_base_int +\n                                               vec3<i32>(i32(gx_offset_idx), i32(gy_offset_idx), i32(gz_offset_idx)) -\n                                               vec3<i32>(1, 1, 1); // Absolute grid indices\n\n                // For G2P, we read from grid. Boundary handling for reads is often done by clamping\n                // indices in the grid_idx_flat function or ensuring particles don't get too close.\n                // The grid_idx_flat above includes clamping.\n                let flat_target_idx = grid_idx_flat_clamp(target_grid_node_abs_idx, params.grid_size);\n                let grid_node_vel = grid_velocity_in[flat_target_idx];\n\n                // Interpolate particle velocity\n                new_particle_velocity = new_particle_velocity + final_weight * grid_node_vel;\n\n                // Interpolate C matrix (APIC)\n                // dist_grid_node_to_particle_world is vector from grid node center to particle (world units)\n                let grid_node_world_pos = (vec3<f32>(target_grid_node_abs_idx) + 0.5) * params.dx;\n                let dist_grid_node_to_particle_world = p_in.position - grid_node_world_pos;\n                \n                // Original MLS-MPM/APIC C update: C += 4 * inv_dx^2 * weight * vel_grid * (pos_grid - pos_particle)_world\n                // The factor inv_dx^2 is often because C itself represents dv/dx, and dpos is dx.\n                // Python: new_C += 4 * inv_dx * weight * g_v.outer_product(dpos) where dpos is (offset_float - fx_norm)\n                // (offset_float - fx_norm) is like (grid_node_rel_to_base - particle_pos_rel_to_base)\n                // = (grid_node_abs - particle_pos_abs) in grid units\n                // So dpos_grid_units = vec3<f32>(target_grid_node_abs_idx) - particle_pos_grid_units\n                let dpos_grid_units = vec3<f32>(target_grid_node_abs_idx) - particle_pos_grid_units;\n\n                let term_outer_product = calculate_outer_product(grid_node_vel, dpos_grid_units);\n                new_particle_C = new_particle_C + ( (4.0 * params.inv_dx) * final_weight) * term_outer_product;\n            }\n        }\n    }\n\n    // 4. Update particle state\n    p_out.velocity = new_particle_velocity;\n    p_out.affine_matrix_C = new_particle_C;\n\n    // Update Jf (elastic volume determinant) - as in mls_mpm.py G2P\n    // Jf[p] *= 1 + dt * new_C.trace()\n    let trace_C = new_particle_C[0][0] + new_particle_C[1][1] + new_particle_C[2][2];\n    p_out.Jf = p_in.Jf * (1.0 + params.dt * trace_C);\n\n    // Advect particle position (using new velocity)\n    p_out.position = p_in.position + new_particle_velocity * params.dt;\n    \n    // F and Jp were updated in P2G. Mass and material_idx are unchanged.\n    particles_out[id.x] = p_out;\n}\n\nfn calculate_outer_product(a: vec3<f32>, b: vec3<f32>) -> mat3x3<f32> {\n    let col0 = a * b.x;\n    let col1 = a * b.y;\n    let col2 = a * b.z;\n    return mat3x3<f32>(col0, col1, col2);\n}\n");

/***/ }),

/***/ "./src/fluid/shaders/structs.wgsl":
/*!****************************************!*\
  !*** ./src/fluid/shaders/structs.wgsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("//--------------------------------------------------------------------------------------\n// Structures\n//--------------------------------------------------------------------------------------\nstruct SimParams {\n    dt: f32,\n    dx: f32,\n    inv_dx: f32,\n    grid_size: u32,\n    dimensions: u32,\n    num_particles: u32,\n\n    particle_initial_volume: f32,\n    particle_mass_param: f32,\n    gravity: f32,\n\n    mu_0: f32,\n    lambda_0: f32,\n    fluid_stiffness_Ef: f32,\n\n    snow_plasticity_h_factor: f32,\n    snow_yield_min: f32,\n    snow_yield_max: f32,\n\n    boundary_extent: u32,\n};\n\nstruct Particle {\n    position: vec3<f32>,\n    velocity: vec3<f32>,\n    affine_matrix_C: mat3x3<f32>,\n    deformation_gradient_F: mat3x3<f32>,\n    mass: f32,\n    Jp: f32,\n    Jf: f32,\n    material_idx: u32,\n};\n\nconst FIXED_POINT_MULTIPLIER: f32 = 10000.0; // Define your multiplier\nconst FIXED_POINT_MULTIPLIER_INV: f32 = 1.0 / FIXED_POINT_MULTIPLIER;\nconst DIMENSIONS = 3u;\n\nfn encodeFixedPoint(val: f32) -> i32 {\n    return i32(val * FIXED_POINT_MULTIPLIER);\n}\n\nfn decodeFixedPoint(fixed_val: i32) -> f32 {\n    return f32(fixed_val) * FIXED_POINT_MULTIPLIER_INV;\n}\n\nfn grid_idx_flat_clamp(cell_coords_abs: vec3<i32>, n_grid: u32) -> u32 {\n    // Ensure positive before casting for safety if cell_coords_abs can be negative\n    // However, for reading, we expect them to be valid after boundary checks if any.\n    // For G2P, particle can be near boundary, so stencil nodes can be out of bounds.\n    let x = u32(clamp(cell_coords_abs.x, 0, i32(n_grid - 1u)));\n    let y = u32(clamp(cell_coords_abs.y, 0, i32(n_grid - 1u)));\n    let z = u32(clamp(cell_coords_abs.z, 0, i32(n_grid - 1u)));\n    return x * n_grid * n_grid + y * n_grid + z;\n}\n\nfn grid_idx_flat(cell_coords_abs: vec3<i32>, n_grid: u32) -> u32 {\n    return u32(cell_coords_abs.x) * n_grid * n_grid +\n           u32(cell_coords_abs.y) * n_grid +\n           u32(cell_coords_abs.z);\n}\n\n// Helper to convert 1D flat grid index to 3D integer grid coordinates\nfn flat_idx_to_3d_coords(flat_idx: u32, n_grid: u32) -> vec3<i32> {\n    let z = i32(flat_idx / (n_grid * n_grid));\n    let remainder = flat_idx % (n_grid * n_grid);\n    let y = i32(remainder / n_grid);\n    let x = i32(remainder % n_grid);\n    return vec3<i32>(x, y, z);\n}\n\n// Helper for APIC B-Spline\n// u is distance from particle to grid node center, in units of cell sizes\nfn quadratic_bspline_N(u : f32) -> f32 {\n    let abs_u = abs(u);\n    var N_u = 0.0;\n    if (abs_u < 0.5) {\n        N_u = 0.75 - abs_u * abs_u;\n    } else if (abs_u < 1.5) {\n        N_u = 0.5 * (1.5 - abs_u) * (1.5 - abs_u);\n    }\n    return N_u;\n}\n");

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
            -1, -1, 0, /* */ 0, 0, /* */ 0, 0, 1,
            3, -1, 0, /* */ 2, 0, /* */ 0, 0, 1,
            -1, 3, 0, /* */ 0, 2, /* */ 0, 0, 1
        ]), GPUBufferUsage.VERTEX);
        const indexBuffer = renderer.createBuffer(new Uint16Array([0, 1, 2]), GPUBufferUsage.INDEX);
        super(renderer, vertexBuffer, indexBuffer, 3, 3);
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
                    },
                    {
                        shaderLocation: 1,
                        offset: 3 * 4,
                        format: "float32x2",
                    },
                    {
                        shaderLocation: 2,
                        offset: 5 * 4,
                        format: "float32x3",
                    }
                ],
                arrayStride: 8 * 4,
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
        super(renderer, vertexGPUBuffer, indexGPUBuffer, indexCount, vertexCount);
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
    constructor(renderer, vertexBuffer, indexBuffer, indexCount, vertexCount) {
        this._renderer = renderer;
        this._vertexBuffer = vertexBuffer;
        this._indexBuffer = indexBuffer;
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
exports.fluid = exports.compute = exports.material = exports.geometry = exports.camera = exports.Transform = exports.Scene = exports.ImageTexture = exports.DefaultTexture = exports.Color = exports.Renderer = void 0;
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
exports.fluid = __importStar(__webpack_require__(/*! ./fluid */ "./src/fluid/index.ts"));


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
                value: options.color || new color_1.Color(1, 1, 1),
            },
        ], [options.map || texture_1.DefaultTexture.instance], [], "BasicMaterial");
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
    updateUniform(uniform) {
        this._uniformManager.updateUniform(uniform);
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
        const uniformManager = new uniform_manager_1.UniformManager(device, options.uniforms, options.textures, options.buffers, "ShaderMaterial");
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
    constructor(device, mat, geo, instances = 1, buffers) {
        super();
        this._device = device;
        this.material = mat;
        this.geometry = geo;
        this._instances = instances;
        this._uniformManager = new uniform_manager_1.UniformManager(device, [{ name: "model", value: this.worldMatrix }], [], buffers || [], "Mesh");
    }
    get cacheKey() {
        return `${this.geometry.cacheKey}-${this.material.cacheKey}`;
    }
    update() {
        this.material.update();
        this._uniformManager.updateUniform({
            name: "model",
            value: this.worldMatrix,
        });
        this._uniformManager.update();
    }
    get bindGroupLayout() {
        return this._uniformManager.bindGroupLayout;
    }
    get bindGroup() {
        return this._uniformManager.bindGroup;
    }
    get bufferLayout() {
        return this.geometry.bufferLayout;
    }
    get buffers() {
        return this._uniformManager.buffers;
    }
    get instanceCount() {
        return this._instances;
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
        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: "premultiplied",
        });
        const onResize = () => {
            var _a;
            const width = this.canvas.offsetWidth;
            const height = this.canvas.offsetHeight;
            if (width === this.canvasSize[0] && height === this.canvasSize[1]) {
                return;
            }
            this.canvas.width = width;
            this.canvas.height = height;
            this.canvasSize.set([width, height]);
            this.sizeDirty = true;
            // console.log("Canvas size", width, height);
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
        this.resizeObserver = new ResizeObserver(onResize);
        this.resizeObserver.observe(this.canvas);
        onResize();
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
        else if (arr instanceof Uint32Array) {
            const writeArray = new Uint32Array(buffer.getMappedRange());
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
    createSizedBuffer(size, usage) {
        return this.device.createBuffer({
            size,
            usage,
        });
    }
    pipelineFor(scene, mesh) {
        const cacheKey = mesh.cacheKey;
        if (this._pipelineCache.has(cacheKey)) {
            return this._pipelineCache.get(cacheKey);
        }
        const shaderCode = mesh.material.shaderCode;
        const bufferLayout = mesh.bufferLayout;
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
                passEncoder.setBindGroup(1, mesh.bindGroup);
                passEncoder.setBindGroup(2, mesh.material.bindGroup);
                passEncoder.setVertexBuffer(0, mesh.geometry.vertexBuffer);
                passEncoder.setIndexBuffer(mesh.geometry.indexBuffer, "uint16");
                passEncoder.drawIndexed(mesh.geometry.indexCount, mesh.instanceCount);
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
    createMesh(geo, mat, instances, buffers) {
        return new mesh_1.Mesh(this.device, mat, geo, instances, buffers);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct Uniforms {\n  color: vec4<f32>\n}\n\n@group(BG_UNIFORMS) @binding(0) var<uniform> uniforms: Uniforms;\n@group(BG_UNIFORMS) @binding(1) var tex_sampler: sampler;\n@group(BG_UNIFORMS) @binding(2) var tex_map: texture_2d<f32>;\n\nstruct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv: vec2<f32>,\n}\n\n@vertex\nfn vs_main(in: VSIn) -> VSOut {\n  let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;\n\n  let vs_out: VSOut = VSOut(\n    modelViewProj * vec4<f32>(in.position, 1.0),\n    in.uv,\n  );\n  return vs_out;\n}\n\n@fragment\nfn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {\n  let color: vec4<f32> = textureSample(tex_map, tex_sampler, vs_out.uv);\n  return color * uniforms.color;\n}\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("const BG_SCENE: u32 = 0;\nconst BG_MODEL: u32 = 1;\nconst BG_UNIFORMS: u32 = 2;\n\nstruct SceneUniforms {\n  projection: mat4x4<f32>,\n  view: mat4x4<f32>,\n  camera_position: vec3<f32>,\n  resolution: vec2<f32>,\n  time: f32,\n}\n\nstruct ModelUniforms {\n  model: mat4x4<f32>,\n}\n\nstruct VSIn {\n  @location(0) position: vec3f,\n  @location(1) uv: vec2f,\n  @location(2) normal: vec3f,\n}\n\n@group(BG_SCENE) @binding(0) var<uniform> scene_uniforms: SceneUniforms;\n@group(BG_MODEL) @binding(0) var<uniform> model_uniforms: ModelUniforms;\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("struct VSOut {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv: vec2<f32>,\n}\n\n@vertex\nfn vs_main(in: VSIn) -> VSOut {\n  let modelViewProj: mat4x4<f32> = scene_uniforms.projection * scene_uniforms.view * model_uniforms.model;\n\n  let vs_out: VSOut = VSOut(\n    modelViewProj * vec4<f32>(in.position, 1.0),\n    in.uv,\n  );\n  return vs_out;\n}\n\n@fragment\nfn fs_main(vs_out: VSOut) -> @location(0) vec4<f32> {\n  return vec4(vs_out.uv, 0.0, 1.0);\n}\n");

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
    get format() {
        return this._texture.format;
    }
    get dimension() {
        return this._texture.dimension;
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
    get format() {
        return this._texture.format;
    }
    get dimension() {
        return this._texture.dimension;
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
    get format() {
        return this._texture.format;
    }
    get dimension() {
        return this._texture.dimension;
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
    set scale(value) {
        if (!wgpu_matrix_1.vec3.equals(this._scale, value)) {
            this._scale = wgpu_matrix_1.vec3.copy(value, this._scale);
            this.makeDirty();
        }
    }
    setPosition(x, y, z) {
        this.position = wgpu_matrix_1.vec3.create(x, y, z);
    }
    setRotation(xValue, yValue, zValue, order = "xyz") {
        this._rotation = wgpu_matrix_1.quat.fromEuler(xValue, yValue, zValue, order);
        this.makeDirty();
    }
    setScale(x, y, z) {
        this.scale = wgpu_matrix_1.vec3.create(x, y, z);
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
        if (!this._worldDirty) {
            // Avoid redundant propagation
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
    constructor(device, uniforms, textures, buffers, label) {
        this._uniformDirty = true;
        this._texturesDirty = true;
        this._device = device;
        this._uniforms = uniforms;
        this._textures = textures;
        this._buffers = buffers;
        this._label = label;
        this._uniformDirty = true;
        this._texturesDirty = true;
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
        const { _uniforms, _textures, _buffers } = this;
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
        if ((_buffers === null || _buffers === void 0 ? void 0 : _buffers.length) > 0) {
            for (let i = 0; i < (_buffers === null || _buffers === void 0 ? void 0 : _buffers.length); i++) {
                entries.push({
                    binding,
                    visibility: _buffers[i].visibility,
                    buffer: { type: _buffers[i].type },
                });
                binding++;
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
        const { _uniforms, _textures, _buffers } = this;
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
        if ((_buffers === null || _buffers === void 0 ? void 0 : _buffers.length) > 0) {
            for (let i = 0; i < (_buffers === null || _buffers === void 0 ? void 0 : _buffers.length); i++) {
                entries.push({
                    binding,
                    resource: { buffer: _buffers[i].buffer },
                });
                binding++;
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
    get buffers() {
        return this._buffers;
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
const color_1 = __webpack_require__(/*! ./color */ "./src/color.ts"); // Assuming Color class exists and has a uniformValue() method
const BASE_TYPE_LAYOUT_INFO = {
    f32: { typeName: "f32", align: 4, size: 4, advanceAmount: 4 },
    i32: { typeName: "i32", align: 4, size: 4, advanceAmount: 4 },
    u32: { typeName: "u32", align: 4, size: 4, advanceAmount: 4 },
    vec2: { typeName: "vec2", align: 8, size: 8, advanceAmount: 8 },
    vec3: { typeName: "vec3", align: 16, size: 12, advanceAmount: 16 },
    vec4: { typeName: "vec4", align: 16, size: 16, advanceAmount: 16 },
    color: { typeName: "color", align: 16, size: 16, advanceAmount: 16 }, // Treated like vec4
    mat3: {
        typeName: "mat3",
        align: 16,
        size: 36,
        advanceAmount: 48,
        paddedStride: 16,
    },
    mat4: {
        typeName: "mat4",
        align: 16,
        size: 64,
        advanceAmount: 64,
        paddedStride: 16,
    },
};
const computedStructLayoutCache = {};
/**
 * Infers the WGSL base data type from a JavaScript value.
 */
function getDataTypeFromValue(value, itemName) {
    if (typeof value === "number") {
        return Number.isInteger(value) ? "u32" : "f32";
    }
    else if (value instanceof color_1.Color) {
        return "color";
    }
    else if (value instanceof Float32Array) {
        switch (value.length) {
            case 2:
                return "vec2";
            case 3:
                return "vec3";
            case 4:
                return "vec4";
            case 9:
            case 12: // ??
                return "mat3";
            case 16:
                return "mat4";
            default:
                throw new Error(`Unsupported Float32Array length for item "${itemName}" for type inference: ${value.length}`);
        }
    }
    // This function should not be called for structs, as their type must be explicit or defined with 'members'.
    throw new Error(`Cannot infer base type for item "${itemName}". Value type: ${typeof value}. If it's a struct, its 'type' (and 'members' if new) must be defined.`);
}
function getLayoutInfo(item) {
    let typeNameToUse = item.type;
    const members = item.members;
    const itemName = item.name; // For error messages
    if (members) {
        // It's a struct definition or a struct type with members provided
        if (!typeNameToUse) {
            throw new Error(`Struct item "${itemName}" must have a 'type' property defining its name when 'members' are provided.`);
        }
        if (computedStructLayoutCache[typeNameToUse]) {
            return computedStructLayoutCache[typeNameToUse];
        }
        let currentStructOffset = 0;
        let structMaxMemberAlign = 0;
        const memberLayouts = {};
        const structValueObject = item.value;
        if (typeof item.value !== "object" ||
            item.value === null ||
            Array.isArray(item.value)) {
            throw new Error(`Value for struct "${itemName}" must be an object when 'members' are defined for layout calculation.`);
        }
        for (const memberDef of members) {
            // memberDef is UniformLayoutMember
            const memberName = memberDef.name;
            const memberVal = structValueObject[memberName];
            if (memberVal === undefined && !memberDef.type && !memberDef.members) {
                // Only error if value is needed for inference
                throw new Error(`Value for struct member "${memberName}" of struct "${typeNameToUse}" not provided, and type cannot be inferred.`);
            }
            let memberTypeString = memberDef.type;
            if (!memberTypeString && !memberDef.members) {
                // Infer if base type and no explicit type
                if (memberVal === undefined)
                    throw new Error(`Value for struct member "${memberName}" needed for type inference.`);
                memberTypeString = getDataTypeFromValue(memberVal, `${itemName}.${memberName}`);
            }
            else if (!memberTypeString && memberDef.members) {
                // Inline nested struct definition without a type name for itself
                throw new Error(`Inline nested struct member "${memberName}" within "${typeNameToUse}" must have its own 'type' (name) defined.`);
            }
            const memberItemForLayout = {
                name: memberName,
                value: memberVal, // Pass the actual value
                type: memberTypeString, // Use explicit or inferred type
                members: memberDef.members, // Pass nested struct definition if provided
            };
            const memberLayout = getLayoutInfo(memberItemForLayout);
            structMaxMemberAlign = Math.max(structMaxMemberAlign, memberLayout.align);
            const memberAlign = memberLayout.align;
            const padding = (memberAlign - (currentStructOffset % memberAlign)) % memberAlign;
            currentStructOffset += padding;
            memberLayouts[memberName] = Object.assign(Object.assign({}, memberLayout), { relativeOffset: currentStructOffset });
            currentStructOffset += memberLayout.advanceAmount;
        }
        const structAlign = structMaxMemberAlign;
        const finalStructPadding = (structAlign - (currentStructOffset % structAlign)) % structAlign;
        const structTotalSize = currentStructOffset + finalStructPadding;
        const structLayout = {
            align: structAlign,
            size: structTotalSize,
            advanceAmount: structTotalSize,
            isStruct: true,
            membersLayout: memberLayouts,
            typeName: typeNameToUse,
        };
        computedStructLayoutCache[typeNameToUse] = structLayout;
        return structLayout;
    }
    else if (typeNameToUse) {
        // Type is explicitly provided, not a new struct definition with members
        if (BASE_TYPE_LAYOUT_INFO[typeNameToUse]) {
            return BASE_TYPE_LAYOUT_INFO[typeNameToUse];
        }
        if (computedStructLayoutCache[typeNameToUse]) {
            // It's a pre-defined struct type
            return computedStructLayoutCache[typeNameToUse];
        }
        throw new Error(`Unknown explicit type "${typeNameToUse}" for item "${itemName}" and not a defined struct in cache.`);
    }
    else {
        // No type, no members - infer base type from value
        const inferredType = getDataTypeFromValue(item.value, itemName);
        if (BASE_TYPE_LAYOUT_INFO[inferredType]) {
            return BASE_TYPE_LAYOUT_INFO[inferredType];
        }
        throw new Error(`Could not get layout for inferred type "${inferredType}" for item "${itemName}".`);
    }
}
function packUniforms(items, targetBuffer, targetOffset = 0) {
    let currentBufferOffset = 0;
    let maxBufferAlignment = 0;
    const itemLayoutsWithOffsets = [];
    if (items.length === 0) {
        return targetBuffer || new ArrayBuffer(0);
    }
    for (const item of items) {
        const layoutInfo = getLayoutInfo(item);
        maxBufferAlignment = Math.max(maxBufferAlignment, layoutInfo.align);
        const padding = (layoutInfo.align - (currentBufferOffset % layoutInfo.align)) %
            layoutInfo.align;
        currentBufferOffset += padding;
        itemLayoutsWithOffsets.push(Object.assign(Object.assign({}, layoutInfo), { relativeOffset: currentBufferOffset, itemData: item }));
        currentBufferOffset += layoutInfo.advanceAmount;
    }
    const finalBufferPadding = (maxBufferAlignment - (currentBufferOffset % maxBufferAlignment)) %
        maxBufferAlignment;
    const totalSizeNeededForItems = currentBufferOffset + finalBufferPadding;
    let bufferToWrite;
    let baseWriteOffset;
    if (targetBuffer) {
        if (targetBuffer.byteLength < targetOffset + totalSizeNeededForItems) {
            throw new Error(`Target buffer too small. Need ${totalSizeNeededForItems} at offset ${targetOffset}, but buffer has ${targetBuffer.byteLength} bytes.`);
        }
        bufferToWrite = targetBuffer;
        baseWriteOffset = targetOffset;
    }
    else {
        bufferToWrite = new ArrayBuffer(totalSizeNeededForItems);
        baseWriteOffset = 0;
    }
    const bufferView = new DataView(bufferToWrite);
    const bufferAsFloats = new Float32Array(bufferToWrite);
    function writeDataItem(itemValue, itemLayout, currentAbsoluteOffset) {
        if (itemLayout.isStruct) {
            if (typeof itemValue !== "object" ||
                itemValue === null ||
                Array.isArray(itemValue)) {
                throw new Error(`Expected an object for struct value "${itemLayout.typeName}", but got ${typeof itemValue}`);
            }
            const structValue = itemValue;
            for (const memberName in itemLayout.membersLayout) {
                const memberLayoutInfo = itemLayout.membersLayout[memberName];
                const memberValue = structValue[memberName];
                if (memberValue === undefined) {
                    throw new Error(`Value for struct member "${memberName}" of struct "${itemLayout.typeName}" not provided.`);
                }
                writeDataItem(memberValue, memberLayoutInfo, currentAbsoluteOffset + memberLayoutInfo.relativeOffset);
            }
        }
        else {
            switch (itemLayout.typeName // Use typeName for direct switch
            ) {
                case "u32":
                    bufferView.setUint32(currentAbsoluteOffset, itemValue, true);
                    break;
                case "f32":
                    bufferView.setFloat32(currentAbsoluteOffset, itemValue, true);
                    break;
                case "color":
                    bufferAsFloats.set(itemValue.uniformValue(), currentAbsoluteOffset / 4);
                    break;
                case "vec2":
                case "vec4":
                    bufferAsFloats.set(itemValue, currentAbsoluteOffset / 4);
                    break;
                case "vec3":
                    bufferAsFloats.set(itemValue, currentAbsoluteOffset / 4);
                    break;
                case "mat4":
                    bufferAsFloats.set(itemValue, currentAbsoluteOffset / 4);
                    break;
                case "mat3":
                    const mat3data = itemValue;
                    const columnStrideFloats = itemLayout.paddedStride / 4;
                    for (let i = 0; i < 3; ++i) {
                        const sourceOffset = i * 3;
                        const destOffsetFloats = currentAbsoluteOffset / 4 + i * columnStrideFloats;
                        bufferAsFloats.set(mat3data.subarray(sourceOffset, sourceOffset + 3), destOffsetFloats);
                    }
                    break;
                default:
                    throw new Error(`Unsupported typeName for writing: "${itemLayout.typeName}" at offset ${currentAbsoluteOffset}`);
            }
        }
    }
    for (const itemWithOffset of itemLayoutsWithOffsets) {
        writeDataItem(itemWithOffset.itemData.value, itemWithOffset, baseWriteOffset + itemWithOffset.relativeOffset);
    }
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
// --- Example Usage ---
/*
const pointLightMembers: UniformLayoutMember[] = [
    { name: "position", value: new Float32Array([0,0,0]) }, // Type 'vec3' will be inferred
    { name: "color", value: new Float32Array([0,0,0]) },    // Type 'vec3' will be inferred
    { name: "intensity", value: 0 }, // Type 'f32' will be inferred
    { name: "radius", value: 0 },    // Type 'f32' will be inferred
    // If a member was another struct, e.g., 'attenuation', its 'type' (struct name) would be required:
    // { name: "attenuation", type: "AttenuationParams", members: [...] }
];

const sceneUniformItems: UniformItem[] = [
    { // Struct defined inline
        name: "light1",
        type: "PointLightCustom", // Name for this struct type (used for caching its layout)
        members: [ // Define members; their base types can now be inferred from 'value' for light1
            { name: "position" }, // Type will be inferred from light1.value.position
            { name: "color" },    // Type will be inferred from light1.value.color
            { name: "intensity" },// Type will be inferred from light1.value.intensity
            { name: "radius" },   // Type will be inferred from light1.value.radius
        ],
        value: { // Provide values for all members
            position: new Float32Array([10, 20, 30]),
            color: new Float32Array([1.0, 0.8, 0.5]),
            intensity: 1.5,
            radius: 100.0,
        }
    },
    { // Base type, type is inferred
        name: "ambientColor",
        value: new Float32Array([0.1, 0.1, 0.15, 1.0]) // Inferred as vec4
    },
    { // Base type, type is inferred
        name: "time",
        value: 0.0 // Inferred as f32
    },
    { // Using a pre-defined (now cached) struct type
        name: "light2",
        type: "PointLightCustom", // Refers to the layout cached from "light1"
        // No 'members' needed here as "PointLightCustom" layout is already known/cached.
        value: { // Values must match the structure of PointLightCustom
            position: new Float32Array([-5, 5, 5]),
            color: new Float32Array([0.5, 0.8, 1.0]),
            intensity: 0.8,
            radius: 50.0,
        }
    }
];

// To pack these:
// const packedBuffer = packUniforms(sceneUniformItems);
// console.log("Packed Buffer Byte Length:", packedBuffer.byteLength); // Should be 80 (for light1, ambient, time) + 48 (for light2) = 128

// To verify (requires a way to read back from ArrayBuffer according to layout):
// const floatView = new Float32Array(packedBuffer);
// console.log("Light1 Position X:", floatView[0]); // 10
// console.log("Light1 Color R:", floatView[16/4 + 0]); // 1.0
// console.log("Light1 Intensity:", floatView[28/4]); // 1.5
// console.log("Light1 Radius:", floatView[32/4]); // 100.0
// console.log("Ambient R:", floatView[48/4]); // 0.1
// console.log("Time:", floatView[64/4]); // 0.0
// console.log("Light2 Position X:", floatView[80/4 + 0]); // -5
*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZELGlCQUFpQixtQkFBbUIsS0FBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsaUJBQWlCLG1CQUFtQixLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOztBQUUwSDtBQUN6STs7Ozs7Ozs7Ozs7QUN4M0xhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCxzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQyxvQkFBb0IsbUJBQU8sQ0FBQyx3Q0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7Ozs7OztBQ3pDRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsR0FBRyx5QkFBeUIsR0FBRyxjQUFjO0FBQ3ZFLGVBQWUsbUJBQU8sQ0FBQyx3Q0FBVTtBQUNqQywwQ0FBeUMsRUFBRSxxQ0FBcUMsMkJBQTJCLEVBQUM7QUFDNUcsMkJBQTJCLG1CQUFPLENBQUMsZ0VBQXNCO0FBQ3pELHFEQUFvRCxFQUFFLHFDQUFxQyxrREFBa0QsRUFBQztBQUM5SSw0QkFBNEIsbUJBQU8sQ0FBQyxrRUFBdUI7QUFDM0Qsc0RBQXFELEVBQUUscUNBQXFDLG9EQUFvRCxFQUFDOzs7Ozs7Ozs7OztBQ1JwSTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEI7QUFDMUIsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0MsaUJBQWlCLG1CQUFPLENBQUMsd0NBQVU7QUFDbkM7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7Ozs7Ozs7Ozs7QUN2R2I7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCLHNCQUFzQixtQkFBTyxDQUFDLG1IQUFhO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLHdDQUFVO0FBQ25DO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7Ozs7Ozs7Ozs7O0FDcEZaO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYixzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CO0FBQ25CLHNCQUFzQixtQkFBTyxDQUFDLG1IQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBLDRCQUE0QiwyRUFBMkU7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0VBQXdFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBO0FBQ0EsNEJBQTRCLDJFQUEyRTtBQUN2RztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RUFBd0U7QUFDcEc7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQzVKTjtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsR0FBRyw4QkFBOEI7QUFDeEQsc0JBQXNCLG1CQUFPLENBQUMsbUhBQWE7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMsOERBQXlCO0FBQ3hELHVDQUF1QyxtQkFBTyxDQUFDLGdFQUF3QjtBQUN2RSxzQ0FBc0MsbUJBQU8sQ0FBQyw4REFBdUI7QUFDckUsc0NBQXNDLG1CQUFPLENBQUMsOERBQXVCO0FBQ3JFLHNDQUFzQyxtQkFBTyxDQUFDLDhEQUF1QjtBQUNyRSx3QkFBd0IsbUJBQU8sQ0FBQyxnREFBa0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlDQUF5QztBQUN2RCxjQUFjLHlDQUF5QztBQUN2RCxjQUFjLGdEQUFnRDtBQUM5RCxjQUFjLHNEQUFzRDtBQUNwRSxjQUFjLHlEQUF5RDtBQUN2RSxjQUFjLDJEQUEyRDtBQUN6RSxjQUFjLGlGQUFpRjtBQUMvRixjQUFjLG9FQUFvRTtBQUNsRixjQUFjLG1EQUFtRDtBQUNqRSxjQUFjLDRDQUE0QztBQUMxRCxjQUFjLG9EQUFvRDtBQUNsRSxjQUFjLHVFQUF1RTtBQUNyRixjQUFjLGtGQUFrRjtBQUNoRyxjQUFjLCtEQUErRDtBQUM3RSxjQUFjLCtEQUErRDtBQUM3RSxjQUFjLGtFQUFrRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJDQUEyQztBQUMzQztBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsOENBQThDO0FBQ2hFLGtCQUFrQixrREFBa0Q7QUFDcEUsa0JBQWtCLHlEQUF5RDtBQUMzRSxrQkFBa0IsK0NBQStDO0FBQ2pFO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw4Q0FBOEM7QUFDaEUsa0JBQWtCLGtEQUFrRDtBQUNwRSxrQkFBa0IseURBQXlEO0FBQzNFLGtCQUFrQiwrQ0FBK0M7QUFDakU7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBNkM7QUFDM0QsY0FBYyw4Q0FBOEM7QUFDNUQsY0FBYyxrREFBa0Q7QUFDaEUsY0FBYyxrREFBa0Q7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNERBQTREO0FBQzlFLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNERBQTREO0FBQzlFLGtCQUFrQix5REFBeUQ7QUFDM0Usa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsU0FBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0JBQXdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUM7QUFDQSxnQ0FBZ0MseURBQXlEO0FBQ3pGO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUEyQztBQUMzRSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWdkIsaUVBQWUsdVBBQXVQLHNGQUFzRiwwRkFBMEYseUVBQXlFLGdGQUFnRiw2SEFBNkgseUNBQXlDLGlCQUFpQixPQUFPLG1DQUFtQyxxSkFBcUosNkpBQTZKLHNFQUFzRSw0TUFBNE0sa0xBQWtMLHNFQUFzRSxRQUFRLGFBQWEsK0RBQStELG1GQUFtRix1R0FBdUcsdUdBQXVHLDJCQUEyQiwyRUFBMkUsb0JBQW9CLHFDQUFxQyx1Q0FBdUMsb0JBQW9CLHFDQUFxQywyQ0FBMkMsb0JBQW9CLHFDQUFxQyxrUEFBa1AsK0NBQStDLFdBQVcsbVFBQW1RLDRZQUE0WSwrQkFBK0IsbUJBQW1CLG9IQUFvSCwyUkFBMlIsd0VBQXdFLCtFQUErRSwrRkFBK0Ysd0dBQXdHLGtJQUFrSSw4RUFBOEUsNERBQTRELDREQUE0RCwwR0FBMEcsd0dBQXdHLHdHQUF3RyxlQUFlLFdBQVcsT0FBTyxnQ0FBZ0MsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0F2dUosaUVBQWUsdVBBQXVQLHVGQUF1Rix5SEFBeUgsbUlBQW1JLCtlQUErZSxpUUFBaVEsa0JBQWtCLG9DQUFvQywwUUFBMFEsOEJBQThCLG9FQUFvRSxnRUFBZ0UsaUhBQWlILCtGQUErRixrQkFBa0Isa0RBQWtELDJUQUEyVCw0QkFBNEIsb0NBQW9DLHNEQUFzRCxpQ0FBaUMsa0xBQWtMLDJGQUEyRiwyRkFBMkYseU1BQXlNLGtHQUFrRyxrRUFBa0UsMEdBQTBHLHVLQUF1Syx1RkFBdUYsOEpBQThKLHdDQUF3QyxjQUFjLHVGQUF1Rix3Q0FBd0MsY0FBYywwSEFBMEgsd0NBQXdDLGNBQWMsdUZBQXVGLDZHQUE2RyxjQUFjLDBIQUEwSCx3Q0FBd0MsY0FBYyx1RkFBdUYsd0NBQXdDLGNBQWMsT0FBTyw0SkFBNEosR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0FyeEosaUVBQWUsdVBBQXVQLDhFQUE4RSx5RUFBeUUsZ0ZBQWdGLHFVQUFxVSx5Q0FBeUMsaUJBQWlCLE9BQU8sc0NBQXNDLHdCQUF3Qix1TUFBdU0sNkpBQTZKLHNFQUFzRSw0TUFBNE0sK0dBQStHLHNFQUFzRSxRQUFRLGFBQWEsK0RBQStELG1GQUFtRix1R0FBdUcsdUdBQXVHLDJCQUEyQiw2REFBNkQsMENBQTBDLDhIQUE4SCxvQkFBb0IscUNBQXFDLHVDQUF1QyxvQkFBb0IscUNBQXFDLDJDQUEyQyxvQkFBb0IscUNBQXFDLGtQQUFrUCwrQ0FBK0MsV0FBVyxvUUFBb1EsNFlBQTRZLHdFQUF3RSxtSkFBbUoscVFBQXFRLDZGQUE2Rix3dUJBQXd1QixxR0FBcUcsaUhBQWlILGVBQWUsV0FBVyxPQUFPLGdGQUFnRiw2Q0FBNkMsdU1BQXVNLHVEQUF1RCxpSUFBaUksbUhBQW1ILEdBQUcsMkVBQTJFLHlCQUF5Qix5QkFBeUIseUJBQXlCLDJDQUEyQyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDQS8xTCxpRUFBZSxzTkFBc04sd1lBQXdZLHFCQUFxQix5TUFBeU0saURBQWlELGdHQUFnRyx3QkFBd0IsMENBQTBDLCtDQUErQyxHQUFHLGdEQUFnRCx5REFBeUQsR0FBRyw0RUFBNEUsb1VBQW9VLGlFQUFpRSxpRUFBaUUsa0RBQWtELEdBQUcsc0VBQXNFLHlJQUF5SSxHQUFHLCtJQUErSSxnREFBZ0QsbURBQW1ELHNDQUFzQyxzQ0FBc0MsZ0NBQWdDLEdBQUcscUpBQXFKLHlCQUF5QixvQkFBb0Isd0JBQXdCLHFDQUFxQyxRQUFRLHVCQUF1QixvREFBb0QsT0FBTyxpQkFBaUIsR0FBRyxHQUFHOzs7Ozs7Ozs7O0FDQXpwRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkIsbUJBQW1CLG1CQUFPLENBQUMsOENBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUMzQ047QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLG1CQUFtQixtQkFBTyxDQUFDLDhDQUFZO0FBQ3ZDO0FBQ0EsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBMEQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7Ozs7Ozs7QUN6R1A7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUM5Qkg7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCLEdBQUcsbUJBQW1CLEdBQUcsb0JBQW9CO0FBQzdELGFBQWEsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QixnREFBK0MsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7QUFDdEgscUJBQXFCLG1CQUFPLENBQUMsc0RBQWdCO0FBQzdDLCtDQUE4QyxFQUFFLHFDQUFxQyxzQ0FBc0MsRUFBQztBQUM1SCxpQkFBaUIsbUJBQU8sQ0FBQyw4Q0FBWTtBQUNyQyw0Q0FBMkMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7Ozs7Ozs7Ozs7O0FDUnJHO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEMsNEJBQTRCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsY0FBYztBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWEsR0FBRyxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsY0FBYyxHQUFHLGlCQUFpQixHQUFHLGFBQWEsR0FBRyxvQkFBb0IsR0FBRyxzQkFBc0IsR0FBRyxhQUFhLEdBQUcsZ0JBQWdCO0FBQzdNLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3JDLDRDQUEyQyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNsSCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IseUNBQXdDLEVBQUUscUNBQXFDLHlCQUF5QixFQUFDO0FBQ3pHLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLGtEQUFpRCxFQUFFLHFDQUFxQyxvQ0FBb0MsRUFBQztBQUM3SCxnREFBK0MsRUFBRSxxQ0FBcUMsa0NBQWtDLEVBQUM7QUFDekgsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CLHlDQUF3QyxFQUFFLHFDQUFxQyx5QkFBeUIsRUFBQztBQUN6RyxrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2Qyw2Q0FBNEMsRUFBRSxxQ0FBcUMsaUNBQWlDLEVBQUM7QUFDckgsY0FBYyxnQkFBZ0IsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNoRCxnQkFBZ0IsZ0JBQWdCLG1CQUFPLENBQUMsMkNBQVk7QUFDcEQsZ0JBQWdCLGdCQUFnQixtQkFBTyxDQUFDLDZDQUFhO0FBQ3JELGVBQWUsZ0JBQWdCLG1CQUFPLENBQUMsNkRBQXdCO0FBQy9ELGFBQWEsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVM7Ozs7Ozs7Ozs7O0FDbkRqQztBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQjtBQUNyQixnQkFBZ0IsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNsQyxrQkFBa0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUN0QyxtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBWTtBQUN2QywwQkFBMEIsbUJBQU8sQ0FBQyxvREFBb0I7QUFDdEQsc0NBQXNDLG1CQUFPLENBQUMseURBQXdCO0FBQ3RFLDhDQUE4QyxtQkFBTyxDQUFDLHlFQUFnQztBQUN0RjtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsRUFBRTtBQUNGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7Ozs7Ozs7Ozs7QUMxQ2E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsZ0JBQWdCO0FBQ3RGLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFZO0FBQ3JDLDRDQUEyQyxFQUFFLHFDQUFxQywrQkFBK0IsRUFBQztBQUNsSCx1QkFBdUIsbUJBQU8sQ0FBQywyREFBa0I7QUFDakQsaURBQWdELEVBQUUscUNBQXFDLDBDQUEwQyxFQUFDO0FBQ2xJLHdCQUF3QixtQkFBTyxDQUFDLDZEQUFtQjtBQUNuRCxrREFBaUQsRUFBRSxxQ0FBcUMsNENBQTRDLEVBQUM7QUFDckksb0JBQW9CLG1CQUFPLENBQUMscURBQWU7QUFDM0MsOENBQTZDLEVBQUUscUNBQXFDLG9DQUFvQyxFQUFDOzs7Ozs7Ozs7OztBQ1Y1RztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUN2Qkg7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0I7QUFDdEIsbUJBQW1CLG1CQUFPLENBQUMsK0NBQVk7QUFDdkMsMEJBQTBCLG1CQUFPLENBQUMsb0RBQW9CO0FBQ3RELHNDQUFzQyxtQkFBTyxDQUFDLHlEQUF3QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7OztBQ2hDVDtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQixtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBWTtBQUN2QyxzQ0FBc0MsbUJBQU8sQ0FBQyx5REFBd0I7QUFDdEUsMkNBQTJDLG1CQUFPLENBQUMsbUVBQTZCO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUU7QUFDRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN6QywwQkFBMEIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usd0NBQXdDO0FBQ3ZIO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCLEdBQUcsdUJBQXVCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7OztBQ3pDQztBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLHNCQUFzQixtQkFBTyxDQUFDLG1IQUFhO0FBQzNDLDhCQUE4QixtQkFBTyxDQUFDLHlFQUE4QjtBQUNwRSw2QkFBNkIsbUJBQU8sQ0FBQyx1RUFBNkI7QUFDbEUsZUFBZSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDN1JIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYixvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN6QyxzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQywwQkFBMEIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtEQUErRDtBQUM3RSxjQUFjLHlEQUF5RDtBQUN2RSxjQUFjLDZEQUE2RDtBQUMzRSxjQUFjLDREQUE0RDtBQUMxRSxjQUFjLCtDQUErQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkRBQTJEO0FBQ3hHLDZDQUE2QywrQ0FBK0M7QUFDNUYsNkNBQTZDLGlEQUFpRDtBQUM5Riw2Q0FBNkMsdUNBQXVDO0FBQ3BGLDZDQUE2QywrQ0FBK0M7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDaENiLGlFQUFlLGtCQUFrQix1QkFBdUIsb0VBQW9FLDJEQUEyRCwrREFBK0Qsa0JBQWtCLGlGQUFpRiw0Q0FBNEMsNEdBQTRHLG9HQUFvRyxrQkFBa0IsR0FBRyxvRUFBb0UsMEVBQTBFLGtDQUFrQyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDQWh5QixpRUFBZSx5QkFBeUIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsNEhBQTRILDBCQUEwQiwwQkFBMEIsaUJBQWlCLDhGQUE4Riw0RUFBNEUsMEVBQTBFLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDQWpqQixpRUFBZSxlQUFlLGlGQUFpRiw0Q0FBNEMsNEdBQTRHLG9HQUFvRyxrQkFBa0IsR0FBRyxvRUFBb0UscUNBQXFDLEdBQUcsR0FBRzs7Ozs7Ozs7OztBQ0FsZTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsZUFBZTtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBNEM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywrQ0FBK0Msb0JBQW9CLHFCQUFxQiw0Q0FBNEMsSUFBSSw0Q0FBNEM7QUFDeE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsU0FBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELG1DQUFtQyxZQUFZLGVBQWUsSUFBSSxrQ0FBa0MsY0FBYyxJQUFJLGlFQUFpRTtBQUN6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7Ozs7O0FDaE1QO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixzQkFBc0IsbUJBQU8sQ0FBQyxtSEFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUNwTUo7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLHdCQUF3QixtQkFBTyxDQUFDLCtDQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qiw4RUFBOEU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyRUFBMkU7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQ0FBaUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsOEVBQThFO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUNwS1Q7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLDJCQUEyQjtBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUyxHQUFHO0FBQ3BDO0FBQ0EsV0FBVyxzREFBc0Q7QUFDakUsV0FBVyxzREFBc0Q7QUFDakUsV0FBVyxzREFBc0Q7QUFDakUsWUFBWSx1REFBdUQ7QUFDbkUsWUFBWSwwREFBMEQ7QUFDdEUsWUFBWSwwREFBMEQ7QUFDdEUsYUFBYSwyREFBMkQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLFNBQVMsd0JBQXdCLGFBQWE7QUFDM0g7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVMsaUJBQWlCLGFBQWE7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFdBQVcsZUFBZSxjQUFjO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsV0FBVztBQUMzRSxzRUFBc0UsU0FBUyxHQUFHLFdBQVc7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFdBQVcsWUFBWSxjQUFjO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxtQkFBbUIscUNBQXFDO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWMsY0FBYyxTQUFTO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGFBQWEsY0FBYyxTQUFTO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxpQkFBaUIscURBQXFEO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCx5QkFBeUIsWUFBWSxhQUFhLG1CQUFtQix5QkFBeUI7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLG9CQUFvQixhQUFhLGlCQUFpQjtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsV0FBVyxlQUFlLG9CQUFvQjtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLG9CQUFvQixjQUFjLHNCQUFzQjtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFvRDtBQUMxRCxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNLDZCQUE2QjtBQUNuQyxNQUFNLDBCQUEwQjtBQUNoQztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGNBQWMsa0JBQWtCO0FBQ2hDLGNBQWMsZUFBZTtBQUM3QixjQUFjLG1CQUFtQjtBQUNqQyxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCx3REFBd0Q7QUFDeEQsc0RBQXNEO0FBQ3RELG1EQUFtRDtBQUNuRCwrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLDJEQUEyRDtBQUMzRDs7Ozs7OztVQ3RUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbnlncHUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RpbnlncHUvLi9ub2RlX21vZHVsZXMvLnBucG0vd2dwdS1tYXRyaXhAMy40LjAvbm9kZV9tb2R1bGVzL3dncHUtbWF0cml4L2Rpc3QvMy54L3dncHUtbWF0cml4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NhbWVyYS9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jYW1lcmEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jYW1lcmEvb3J0aG9ncmFwaGljLWNhbWVyYS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NhbWVyYS9wZXJzcGVjdGl2ZS1jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9jb2xvci50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2NvbXB1dGUvY29tcHV0ZS10YXNrLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvZmx1aWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9mbHVpZC9zaGFkZXJzL3N0YWdlMS53Z3NsIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvZmx1aWQvc2hhZGVycy9zdGFnZTIud2dzbCIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2ZsdWlkL3NoYWRlcnMvc3RhZ2UzLndnc2wiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9mbHVpZC9zaGFkZXJzL3N0cnVjdHMud2dzbCIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2dlb21ldHJ5L2JpZy10cmlhbmdsZS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2dlb21ldHJ5L2N1YmUudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9nZW9tZXRyeS9nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL2dlb21ldHJ5L2luZGV4LnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tYXRlcmlhbHMvYmFzaWMtbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tYXRlcmlhbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tYXRlcmlhbHMvbWF0ZXJpYWwudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9tYXRlcmlhbHMvc2hhZGVyLW1hdGVyaWFsLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvbWF0ZXJpYWxzL3V2LW1hdGVyaWFsLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvbWVzaC50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3JlbmRlcmVyLnRzIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9zaGFkZXJzL2Jhc2ljLW1hdGVyaWFsLndnc2wiLCJ3ZWJwYWNrOi8vdGlueWdwdS8uL3NyYy9zaGFkZXJzL2hlYWRlci53Z3NsIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvc2hhZGVycy91di1tYXRlcmlhbC53Z3NsIiwid2VicGFjazovL3RpbnlncHUvLi9zcmMvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3VuaWZvcm0tbWFuYWdlci50cyIsIndlYnBhY2s6Ly90aW55Z3B1Ly4vc3JjL3VuaWZvcm0tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdGlueWdwdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGlueWdwdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpbnlncHUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aW55Z3B1L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpbnlncHVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlueWdwdVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aW55Z3B1XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8qIHdncHUtbWF0cml4QDMuNC4wLCBsaWNlbnNlIE1JVCAqL1xuZnVuY3Rpb24gd3JhcENvbnN0cnVjdG9yKE9yaWdpbmFsQ29uc3RydWN0b3IsIG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgT3JpZ2luYWxDb25zdHJ1Y3RvciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgbW9kaWZpZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICB9OyAvLyBUeXBlIGFzc2VydGlvbiBpcyBuZWNlc3NhcnkgaGVyZVxufVxuY29uc3QgWmVyb0FycmF5ID0gd3JhcENvbnN0cnVjdG9yKChBcnJheSksIGEgPT4gYS5maWxsKDApKTtcblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xubGV0IEVQU0lMT04gPSAwLjAwMDAwMTtcbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBmb3IgRVBTSUxPTiBmb3IgdmFyaW91cyBjaGVja3NcbiAqIEBwYXJhbSB2IC0gVmFsdWUgdG8gdXNlIGZvciBFUFNJTE9OLlxuICogQHJldHVybnMgcHJldmlvdXMgdmFsdWUgb2YgRVBTSUxPTjtcbiAqL1xuZnVuY3Rpb24gc2V0RXBzaWxvbih2KSB7XG4gICAgY29uc3Qgb2xkID0gRVBTSUxPTjtcbiAgICBFUFNJTE9OID0gdjtcbiAgICByZXR1cm4gb2xkO1xufVxuLyoqXG4gKiBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICogQHBhcmFtIGRlZ3JlZXMgLSBBbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJucyBhbmdsZSBjb252ZXJ0ZWQgdG8gcmFkaWFuc1xuICovXG5mdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufVxuLyoqXG4gKiBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICogQHBhcmFtIHJhZGlhbnMgLSBBbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyBhbmdsZSBjb252ZXJ0ZWQgdG8gZGVncmVlc1xuICovXG5mdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufVxuLyoqXG4gKiBMZXJwcyBiZXR3ZWVuIGEgYW5kIGIgdmlhIHRcbiAqIEBwYXJhbSBhIC0gc3RhcnRpbmcgdmFsdWVcbiAqIEBwYXJhbSBiIC0gZW5kaW5nIHZhbHVlXG4gKiBAcGFyYW0gdCAtIHZhbHVlIHdoZXJlIDAgPSBhIGFuZCAxID0gYlxuICogQHJldHVybnMgYSArIChiIC0gYSkgKiB0XG4gKi9cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIHQ7XG59XG4vKipcbiAqIENvbXB1dGUgdGhlIG9wcG9zaXRlIG9mIGxlcnAuIEdpdmVuIGEgYW5kIGIgYW5kIGEgdmFsdWUgYmV0d2VlblxuICogYSBhbmQgYiByZXR1cm5zIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLiAwIGlmIGEsIDEgaWYgYi5cbiAqIE5vdGU6IG5vIGNsYW1waW5nIGlzIGRvbmUuXG4gKiBAcGFyYW0gYSAtIHN0YXJ0IHZhbHVlXG4gKiBAcGFyYW0gYiAtIGVuZCB2YWx1ZVxuICogQHBhcmFtIHYgLSB2YWx1ZSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEByZXR1cm5zICh2IC0gYSkgLyAoYiAtIGEpXG4gKi9cbmZ1bmN0aW9uIGludmVyc2VMZXJwKGEsIGIsIHYpIHtcbiAgICBjb25zdCBkID0gYiAtIGE7XG4gICAgcmV0dXJuIChNYXRoLmFicyhiIC0gYSkgPCBFUFNJTE9OKVxuICAgICAgICA/IGFcbiAgICAgICAgOiAodiAtIGEpIC8gZDtcbn1cbi8qKlxuICogQ29tcHV0ZSB0aGUgZXVjbGlkZWFuIG1vZHVsb1xuICpcbiAqIGBgYFxuICogLy8gdGFibGUgZm9yIG4gLyAzXG4gKiAtNSwgLTQsIC0zLCAtMiwgLTEsICAwLCAgMSwgIDIsICAzLCAgNCwgIDUgICA8LSBuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIC0yICAtMSAgLTAgIC0yICAtMSAgIDAsICAxLCAgMiwgIDAsICAxLCAgMiAgIDwtIG4gJSAzXG4gKiAgMSAgIDIgICAwICAgMSAgIDIgICAwLCAgMSwgIDIsICAwLCAgMSwgIDIgICA8LSBldWNsaWRlYW5Nb2R1bGUobiwgMylcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBuIC0gZGl2aWRlbmRcbiAqIEBwYXJhbSBtIC0gZGl2aXNvclxuICogQHJldHVybnMgdGhlIGV1Y2xpZGVhbiBtb2R1bG8gb2YgbiAvIG1cbiAqL1xuZnVuY3Rpb24gZXVjbGlkZWFuTW9kdWxvKG4sIG0pIHtcbiAgICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbnZhciB1dGlscyA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgZ2V0IEVQU0lMT04gKCkgeyByZXR1cm4gRVBTSUxPTjsgfSxcbiAgICBkZWdUb1JhZDogZGVnVG9SYWQsXG4gICAgZXVjbGlkZWFuTW9kdWxvOiBldWNsaWRlYW5Nb2R1bG8sXG4gICAgaW52ZXJzZUxlcnA6IGludmVyc2VMZXJwLFxuICAgIGxlcnA6IGxlcnAsXG4gICAgcmFkVG9EZWc6IHJhZFRvRGVnLFxuICAgIHNldEVwc2lsb246IHNldEVwc2lsb25cbn07XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMiBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogR2VuZXJhdGVzIGFtIHR5cGVkIEFQSSBmb3IgVmVjM1xuICovXG5mdW5jdGlvbiBnZXRBUElJbXBsJDUoQ3Rvcikge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBWZWMyOyBtYXkgYmUgY2FsbGVkIHdpdGggeCwgeSwgeiB0byBzZXQgaW5pdGlhbCB2YWx1ZXMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBTaW5jZSBwYXNzaW5nIGluIGEgcmF3IEphdmFTY3JpcHQgYXJyYXlcbiAgICAgKiBpcyB2YWxpZCBpbiBhbGwgY2lyY3Vtc3RhbmNlcywgaWYgeW91IHdhbnQgdG9cbiAgICAgKiBmb3JjZSBhIEphdmFTY3JpcHQgYXJyYXkgaW50byBhIFZlYzIncyBzcGVjaWZpZWQgdHlwZVxuICAgICAqIGl0IHdvdWxkIGJlIGZhc3RlciB0byB1c2VcbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGNvbnN0IHYgPSB2ZWMyLmNsb25lKHNvbWVKU0FycmF5KTtcbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IC0gSW5pdGlhbCB4IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IC0gSW5pdGlhbCB5IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZSh4ID0gMCwgeSA9IDApIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gbmV3IEN0b3IoMik7XG4gICAgICAgIGlmICh4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IHg7XG4gICAgICAgICAgICBpZiAoeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgVmVjMjsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLiAoc2FtZSBhcyBjcmVhdGUpXG4gICAgICogQHBhcmFtIHggLSBJbml0aWFsIHggdmFsdWUuXG4gICAgICogQHBhcmFtIHkgLSBJbml0aWFsIHkgdmFsdWUuXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgY29uc3QgZnJvbVZhbHVlcyA9IGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZXMgb2YgYSBWZWMyXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzIuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzIuY29weX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IGZpcnN0IHZhbHVlXG4gICAgICogQHBhcmFtIHkgc2Vjb25kIHZhbHVlXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB3aXRoIGl0cyBlbGVtZW50cyBzZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0KHgsIHksIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgbmV3RHN0WzFdID0geTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBNYXRoLmNlaWwgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBjZWlsIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNlaWwodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLmNlaWwodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguY2VpbCh2WzFdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBNYXRoLmZsb29yIHRvIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZmxvb3Igb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmxvb3IodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLmZsb29yKHZbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLmZsb29yKHZbMV0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGgucm91bmQgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSByb3VuZCBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3VuZCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGgucm91bmQodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgucm91bmQodlsxXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsYW1wIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3IgYmV0d2VlbiBtaW4gYW5kIG1heFxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIG1heCAtIE1pbiB2YWx1ZSwgZGVmYXVsdCAwXG4gICAgICogQHBhcmFtIG1pbiAtIE1heCB2YWx1ZSwgZGVmYXVsdCAxXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IHRoZSBjbGFtcGVkIHZhbHVlIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsYW1wKHYsIG1pbiA9IDAsIG1heCA9IDEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbMF0pKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbMV0pKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0d28gdmVjdG9yczsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHN1bSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0d28gdmVjdG9ycywgc2NhbGluZyB0aGUgMm5kOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBzY2FsZSAtIEFtb3VudCB0byBzY2FsZSBiXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBzdW0gb2YgYSArIGIgKiBzY2FsZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRTY2FsZWQoYSwgYiwgc2NhbGUsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgaW4gcmFkaWFucyBiZXR3ZWVuIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBUaGUgYW5nbGUgaW4gcmFkaWFucyBiZXR3ZWVuIHRoZSAyIHZlY3RvcnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICAgICAgICBjb25zdCBheCA9IGFbMF07XG4gICAgICAgIGNvbnN0IGF5ID0gYVsxXTtcbiAgICAgICAgY29uc3QgYnggPSBiWzBdO1xuICAgICAgICBjb25zdCBieSA9IGJbMV07XG4gICAgICAgIGNvbnN0IG1hZzEgPSBNYXRoLnNxcnQoYXggKiBheCArIGF5ICogYXkpO1xuICAgICAgICBjb25zdCBtYWcyID0gTWF0aC5zcXJ0KGJ4ICogYnggKyBieSAqIGJ5KTtcbiAgICAgICAgY29uc3QgbWFnID0gbWFnMSAqIG1hZzI7XG4gICAgICAgIGNvbnN0IGNvc2luZSA9IG1hZyAmJiBkb3QoYSwgYikgLyBtYWc7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBzdWIgPSBzdWJ0cmFjdDtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzQXBwcm94aW1hdGVseShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhWzBdIC0gYlswXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPCBFUFNJTE9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHZlY3RvcnMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB2ZWN0b3JzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHQsIHJldHVybnNcbiAgICAgKiBhICsgdCAqIChiIC0gYSkuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB0IC0gSW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZXJwKGEsIGIsIHQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIHQgKiAoYlswXSAtIGFbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgdCAqIChiWzFdIC0gYVsxXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9uIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB2ZWN0b3IgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50cyB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgbGluZWFyIGludGVycG9sYXRlZCByZXN1bHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVycFYoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdFswXSAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0WzFdICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1heCB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWF4KGFbMF0sIGJbMF0pLCBtYXgoYVsxXSwgYlsxXSksIG1heChhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1heCBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXgoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBtaW4gdmFsdWVzIG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gICAgICogW21pbihhWzBdLCBiWzBdKSwgbWluKGFbMV0sIGJbMV0pLCBtaW4oYVsyXSwgYlsyXSldLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtaW4gY29tcG9uZW50cyB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWluKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWxTY2FsYXIodiwgaywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdICogaztcbiAgICAgICAgbmV3RHN0WzFdID0gdlsxXSAqIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuIChzYW1lIGFzIG11bFNjYWxhcilcbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3Qgc2NhbGUgPSBtdWxTY2FsYXI7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2U2NhbGFyKHYsIGssIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXSAvIGs7XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV0gLyBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnNlIGEgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnRlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52ZXJzZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDEgLyB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSAxIC8gdlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52ZXJ0IGEgdmVjdG9yLiAoc2FtZSBhcyBpbnZlcnNlKVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnRlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgaW52ZXJ0ID0gaW52ZXJzZTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICAgICAqIHRocmVlIGVudHJpZXMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBhIGNyb3NzIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3Jvc3MoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCB6ID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gejtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gICAgICogdGhyZWUgZW50cmllcy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgZG90IHByb2R1Y3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3IgKHNhbWUgYXMgbGVuZ3RoKVxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVuZ3RoU3Eodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgcmV0dXJuIHYwICogdjAgKyB2MSAqIHYxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yIChzYW1lIGFzIGxlbmd0aFNxKVxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBsZW5TcSA9IGxlbmd0aFNxO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzdGFuY2UoYSwgYikge1xuICAgICAgICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHMgKHNhbWUgYXMgZGlzdGFuY2UpXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgY29uc3QgZGlzdCA9IGRpc3RhbmNlO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlU3EoYSwgYikge1xuICAgICAgICBjb25zdCBkeCA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBjb25zdCBkeSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHMgKHNhbWUgYXMgZGlzdGFuY2VTcSlcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGNvbnN0IGRpc3RTcSA9IGRpc3RhbmNlU3E7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBpdHMgRXVjbGlkZWFuIGxlbmd0aCBhbmQgcmV0dXJucyB0aGUgcXVvdGllbnQuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEpO1xuICAgICAgICBpZiAobGVuID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjAgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSB2MSAvIGxlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgLXYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbmVnYXRlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLXZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC12WzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSB2ZWN0b3IuIChzYW1lIGFzIHtAbGluayB2ZWMyLmNsb25lfSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjMi5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjMi5zZXR9XG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29weSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHZbMV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb25lcyBhIHZlY3Rvci4gKHNhbWUgYXMge0BsaW5rIHZlYzIuY29weX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzIuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzIuc2V0fVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiB2LlxuICAgICAqL1xuICAgIGNvbnN0IGNsb25lID0gY29weTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcHJvZHVjdHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAqIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKiBiWzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLiAoc2FtZSBhcyBtdWwpXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgbXVsID0gbXVsdGlwbHk7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAvIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLyBiWzFdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLiAoc2FtZSBhcyBkaXZpZGUpXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IGRpdiA9IGRpdmlkZTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmFuZG9tIHVuaXQgdmVjdG9yICogc2NhbGVcbiAgICAgKiBAcGFyYW0gc2NhbGUgLSBEZWZhdWx0IDFcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByYW5kb20gdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJhbmRvbShzY2FsZSA9IDEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguY29zKGFuZ2xlKSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnNpbihhbmdsZSkgKiBzY2FsZTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogWmVybydzIGEgdmVjdG9yXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgemVyb2VkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB6ZXJvKGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIFZlYzIgYnkgNHg0IG1hdHJpeFxuICAgICAqIEBwYXJhbSB2IC0gdGhlIHZlY3RvclxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gb3B0aW9uYWwgVmVjMiB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRyYW5zZm9ybWVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQodiwgbSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBjb25zdCB4ID0gdlswXTtcbiAgICAgICAgY29uc3QgeSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFswXSA9IHggKiBtWzBdICsgeSAqIG1bNF0gKyBtWzEyXTtcbiAgICAgICAgbmV3RHN0WzFdID0geCAqIG1bMV0gKyB5ICogbVs1XSArIG1bMTNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gVmVjMiBieSAzeDMgbWF0cml4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdiAtIHRoZSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG9wdGlvbmFsIFZlYzIgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSB0cmFuc2Zvcm1lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKHYsIG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDIpKTtcbiAgICAgICAgY29uc3QgeCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHkgPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bOV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSBhIDJEIHZlY3RvclxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZlYzIgcG9pbnQgdG8gcm90YXRlXG4gICAgICogQHBhcmFtIGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAgICAgKiBAcGFyYW0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gICAgICogQHJldHVybnMgdGhlIHJvdGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHJhZCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICAvLyBUcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgICAgICBjb25zdCBwMCA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBjb25zdCBwMSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBjb25zdCBzaW5DID0gTWF0aC5zaW4ocmFkKTtcbiAgICAgICAgY29uc3QgY29zQyA9IE1hdGguY29zKHJhZCk7XG4gICAgICAgIC8vcGVyZm9ybSByb3RhdGlvbiBhbmQgdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cbiAgICAgICAgbmV3RHN0WzBdID0gcDAgKiBjb3NDIC0gcDEgKiBzaW5DICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gcDAgKiBzaW5DICsgcDEgKiBjb3NDICsgYlsxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJlYXQgYSAyRCB2ZWN0b3IgYXMgYSBkaXJlY3Rpb24gYW5kIHNldCBpdCdzIGxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZlYzIgdG8gbGVuZ3RoZW5cbiAgICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoZW5lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRMZW5ndGgoYSwgbGVuLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigyKSk7XG4gICAgICAgIG5vcm1hbGl6ZShhLCBuZXdEc3QpO1xuICAgICAgICByZXR1cm4gbXVsU2NhbGFyKG5ld0RzdCwgbGVuLCBuZXdEc3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmUgYSB2ZWN0b3IgaXMgbm90IGxvbmdlciB0aGFuIGEgbWF4IGxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZlYzIgdG8gbGltaXRcbiAgICAgKiBAcGFyYW0gbWF4TGVuIFRoZSBsb25nZXN0IGxlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3RvclxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3IsIHNob3J0ZW5lZCB0byBtYXhMZW4gaWYgaXQncyB0b28gbG9uZ1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRydW5jYXRlKGEsIG1heExlbiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICBpZiAobGVuZ3RoKGEpID4gbWF4TGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0TGVuZ3RoKGEsIG1heExlbiwgbmV3RHN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29weShhLCBuZXdEc3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZlY3RvciBleGFjdGx5IGJldHdlZW4gMiBlbmRwb2ludCB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBFbmRwb2ludCAxXG4gICAgICogQHBhcmFtIGIgRW5kcG9pbnQgMlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3IgZXhhY3RseSByZXNpZGluZyBiZXR3ZWVuIGVuZHBvaW50cyAxIGFuZCAyXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWlkcG9pbnQoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMikpO1xuICAgICAgICByZXR1cm4gbGVycChhLCBiLCAwLjUsIG5ld0RzdCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgZnJvbVZhbHVlcyxcbiAgICAgICAgc2V0LFxuICAgICAgICBjZWlsLFxuICAgICAgICBmbG9vcixcbiAgICAgICAgcm91bmQsXG4gICAgICAgIGNsYW1wLFxuICAgICAgICBhZGQsXG4gICAgICAgIGFkZFNjYWxlZCxcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHN1YnRyYWN0LFxuICAgICAgICBzdWIsXG4gICAgICAgIGVxdWFsc0FwcHJveGltYXRlbHksXG4gICAgICAgIGVxdWFscyxcbiAgICAgICAgbGVycCxcbiAgICAgICAgbGVycFYsXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICBtdWxTY2FsYXIsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBkaXZTY2FsYXIsXG4gICAgICAgIGludmVyc2UsXG4gICAgICAgIGludmVydCxcbiAgICAgICAgY3Jvc3MsXG4gICAgICAgIGRvdCxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBsZW4sXG4gICAgICAgIGxlbmd0aFNxLFxuICAgICAgICBsZW5TcSxcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGRpc3QsXG4gICAgICAgIGRpc3RhbmNlU3EsXG4gICAgICAgIGRpc3RTcSxcbiAgICAgICAgbm9ybWFsaXplLFxuICAgICAgICBuZWdhdGUsXG4gICAgICAgIGNvcHksXG4gICAgICAgIGNsb25lLFxuICAgICAgICBtdWx0aXBseSxcbiAgICAgICAgbXVsLFxuICAgICAgICBkaXZpZGUsXG4gICAgICAgIGRpdixcbiAgICAgICAgcmFuZG9tLFxuICAgICAgICB6ZXJvLFxuICAgICAgICB0cmFuc2Zvcm1NYXQ0LFxuICAgICAgICB0cmFuc2Zvcm1NYXQzLFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIHNldExlbmd0aCxcbiAgICAgICAgdHJ1bmNhdGUsXG4gICAgICAgIG1pZHBvaW50LFxuICAgIH07XG59XG5jb25zdCBjYWNoZSQ1ID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0QVBJJDUoQ3Rvcikge1xuICAgIGxldCBhcGkgPSBjYWNoZSQ1LmdldChDdG9yKTtcbiAgICBpZiAoIWFwaSkge1xuICAgICAgICBhcGkgPSBnZXRBUElJbXBsJDUoQ3Rvcik7XG4gICAgICAgIGNhY2hlJDUuc2V0KEN0b3IsIGFwaSk7XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMiBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogR2VuZXJhdGVzIGFtIHR5cGVkIEFQSSBmb3IgVmVjM1xuICogKi9cbmZ1bmN0aW9uIGdldEFQSUltcGwkNChDdG9yKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZlYzM7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgeiB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUoeCwgeSwgeikge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSBuZXcgQ3RvcigzKTtcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gejtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZlYzM7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy4gKHNhbWUgYXMgY3JlYXRlKVxuICAgICAqIEBwYXJhbSB4IC0gSW5pdGlhbCB4IHZhbHVlLlxuICAgICAqIEBwYXJhbSB5IC0gSW5pdGlhbCB5IHZhbHVlLlxuICAgICAqIEBwYXJhbSB6IC0gSW5pdGlhbCB6IHZhbHVlLlxuICAgICAqIEByZXR1cm5zIHRoZSBjcmVhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGNvbnN0IGZyb21WYWx1ZXMgPSBjcmVhdGU7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWVzIG9mIGEgVmVjM1xuICAgICAqIEFsc28gc2VlIHtAbGluayB2ZWMzLmNyZWF0ZX0gYW5kIHtAbGluayB2ZWMzLmNvcHl9XG4gICAgICpcbiAgICAgKiBAcGFyYW0geCBmaXJzdCB2YWx1ZVxuICAgICAqIEBwYXJhbSB5IHNlY29uZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB6IHRoaXJkIHZhbHVlXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB3aXRoIGl0cyBlbGVtZW50cyBzZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0KHgsIHksIHosIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgbmV3RHN0WzFdID0geTtcbiAgICAgICAgbmV3RHN0WzJdID0gejtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBNYXRoLmNlaWwgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBjZWlsIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNlaWwodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLmNlaWwodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguY2VpbCh2WzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5jZWlsKHZbMl0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguZmxvb3IgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBmbG9vciBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmbG9vcih2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguZmxvb3IodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguZmxvb3IodlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGguZmxvb3IodlsyXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgTWF0aC5yb3VuZCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHJvdW5kIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdW5kKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5yb3VuZCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5yb3VuZCh2WzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5yb3VuZCh2WzJdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xhbXAgZWFjaCBlbGVtZW50IG9mIHZlY3RvciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gbWF4IC0gTWluIHZhbHVlLCBkZWZhdWx0IDBcbiAgICAgKiBAcGFyYW0gbWluIC0gTWF4IHZhbHVlLCBkZWZhdWx0IDFcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgdGhlIGNsYW1wZWQgdmFsdWUgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2xhbXAodiwgbWluID0gMCwgbWF4ID0gMSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlswXSkpO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlsxXSkpO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdlsyXSkpO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgc3VtIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgYlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0d28gdmVjdG9ycywgc2NhbGluZyB0aGUgMm5kOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBzY2FsZSAtIEFtb3VudCB0byBzY2FsZSBiXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBzdW0gb2YgYSArIGIgKiBzY2FsZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRTY2FsZWQoYSwgYiwgc2NhbGUsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgaW4gcmFkaWFucyBiZXR3ZWVuIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBUaGUgYW5nbGUgaW4gcmFkaWFucyBiZXR3ZWVuIHRoZSAyIHZlY3RvcnMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICAgICAgICBjb25zdCBheCA9IGFbMF07XG4gICAgICAgIGNvbnN0IGF5ID0gYVsxXTtcbiAgICAgICAgY29uc3QgYXogPSBhWzJdO1xuICAgICAgICBjb25zdCBieCA9IGJbMF07XG4gICAgICAgIGNvbnN0IGJ5ID0gYlsxXTtcbiAgICAgICAgY29uc3QgYnogPSBiWzJdO1xuICAgICAgICBjb25zdCBtYWcxID0gTWF0aC5zcXJ0KGF4ICogYXggKyBheSAqIGF5ICsgYXogKiBheik7XG4gICAgICAgIGNvbnN0IG1hZzIgPSBNYXRoLnNxcnQoYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6KTtcbiAgICAgICAgY29uc3QgbWFnID0gbWFnMSAqIG1hZzI7XG4gICAgICAgIGNvbnN0IGNvc2luZSA9IG1hZyAmJiBkb3QoYSwgYikgLyBtYWc7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zaW5lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0d28gdmVjdG9ycy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiB2ZWN0b3JzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdmVjdG9ycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFsc0FwcHJveGltYXRlbHkoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYVswXSAtIGJbMF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxXSAtIGJbMV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsyXSAtIGJbMl0pIDwgRVBTSUxPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiB2ZWN0b3JzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdmVjdG9ycyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHQsIHJldHVybnNcbiAgICAgKiBhICsgdCAqIChiIC0gYSkuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB0IC0gSW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZXJwKGEsIGIsIHQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIHQgKiAoYlswXSAtIGFbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgdCAqIChiWzFdIC0gYVsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyB0ICogKGJbMl0gLSBhWzJdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHZlY3RvciB0LCByZXR1cm5zXG4gICAgICogYSArIHQgKiAoYiAtIGEpLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnRzIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZXJwVihhLCBiLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyB0WzBdICogKGJbMF0gLSBhWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIHRbMV0gKiAoYlsxXSAtIGFbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgdFsyXSAqIChiWzJdIC0gYVsyXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBtYXggdmFsdWVzIG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gICAgICogW21heChhWzBdLCBiWzBdKSwgbWF4KGFbMV0sIGJbMV0pLCBtYXgoYVsyXSwgYlsyXSldLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXggY29tcG9uZW50cyB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWF4KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1pbiB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gICAgICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIHJldHVybnNcbiAgICAgKiBbbWluKGFbMF0sIGJbMF0pLCBtaW4oYVsxXSwgYlsxXSksIG1pbihhWzJdLCBiWzJdKV0uXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1pbiBjb21wb25lbnRzIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaW4oYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWxTY2FsYXIodiwgaywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdICogaztcbiAgICAgICAgbmV3RHN0WzFdID0gdlsxXSAqIGs7XG4gICAgICAgIG5ld0RzdFsyXSA9IHZbMl0gKiBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLiAoc2FtZSBhcyBtdWxTY2FsYXIpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IHNjYWxlID0gbXVsU2NhbGFyO1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpdlNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gLyBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdIC8gaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAvIGs7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludmVyc2UgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbnZlcnNlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMSAvIHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IDEgLyB2WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAxIC8gdlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52ZXJ0IGEgdmVjdG9yLiAoc2FtZSBhcyBpbnZlcnNlKVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnRlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgaW52ZXJ0ID0gaW52ZXJzZTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICAgICAqIHRocmVlIGVudHJpZXMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBhIGNyb3NzIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3Jvc3MoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCB0MSA9IGFbMl0gKiBiWzBdIC0gYVswXSAqIGJbMl07XG4gICAgICAgIGNvbnN0IHQyID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdDE7XG4gICAgICAgIG5ld0RzdFsyXSA9IHQyO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYm90aCB2ZWN0b3JzIGhhdmVcbiAgICAgKiB0aHJlZSBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkb3QgcHJvZHVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYVswXSAqIGJbMF0pICsgKGFbMV0gKiBiWzFdKSArIChhWzJdICogYlsyXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZW5ndGgodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2Mik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgdmVjdG9yIChzYW1lIGFzIGxlbmd0aClcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aFNxKHYpIHtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgcmV0dXJuIHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2MjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvciAoc2FtZSBhcyBsZW5ndGhTcSlcbiAgICAgKiBAcGFyYW0gdiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgY29uc3QgbGVuU3EgPSBsZW5ndGhTcTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgICAgICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICAgICAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHopO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50cyAoc2FtZSBhcyBkaXN0YW5jZSlcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBjb25zdCBkaXN0ID0gZGlzdGFuY2U7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzdGFuY2VTcShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYVswXSAtIGJbMF07XG4gICAgICAgIGNvbnN0IGR5ID0gYVsxXSAtIGJbMV07XG4gICAgICAgIGNvbnN0IGR6ID0gYVsyXSAtIGJbMl07XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHo7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHMgKHNhbWUgYXMgZGlzdGFuY2VTcSlcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGNvbnN0IGRpc3RTcSA9IGRpc3RhbmNlU3E7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBpdHMgRXVjbGlkZWFuIGxlbmd0aCBhbmQgcmV0dXJucyB0aGUgcXVvdGllbnQuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydCh2MCAqIHYwICsgdjEgKiB2MSArIHYyICogdjIpO1xuICAgICAgICBpZiAobGVuID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjAgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSB2MSAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IHYyIC8gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgLXYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbmVnYXRlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLXZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC12WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAtdlsyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgdmVjdG9yLiAoc2FtZSBhcyB7QGxpbmsgdmVjMy5jbG9uZX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzMuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzMuc2V0fVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvcHkodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB2WzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgYSB2ZWN0b3IuIChzYW1lIGFzIHtAbGluayB2ZWMzLmNvcHl9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayB2ZWMzLmNyZWF0ZX0gYW5kIHtAbGluayB2ZWMzLnNldH1cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2Ygdi5cbiAgICAgKi9cbiAgICBjb25zdCBjbG9uZSA9IGNvcHk7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHByb2R1Y3RzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKiBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICogYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAqIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguIChzYW1lIGFzIG11bClcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgdmVjdG9yIG9mIHByb2R1Y3RzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBtdWwgPSBtdWx0aXBseTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcXVvdGllbnRzIG9mIGVudHJpZXMgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXZpZGUoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdIC8gYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSAvIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gLyBiWzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLiAoc2FtZSBhcyBkaXZpZGUpXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IGRpdiA9IGRpdmlkZTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcmFuZG9tIHZlY3RvclxuICAgICAqIEBwYXJhbSBzY2FsZSAtIERlZmF1bHQgMVxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJhbmRvbSB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmFuZG9tKHNjYWxlID0gMSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgeiA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICAgICAgY29uc3QgelNjYWxlID0gTWF0aC5zcXJ0KDEgLSB6ICogeikgKiBzY2FsZTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5jb3MoYW5nbGUpICogelNjYWxlO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnNpbihhbmdsZSkgKiB6U2NhbGU7XG4gICAgICAgIG5ld0RzdFsyXSA9IHogKiBzY2FsZTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogWmVybydzIGEgdmVjdG9yXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgemVyb2VkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB6ZXJvKGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMDtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdHJhbnNmb3JtIHZlYzMgYnkgNHg0IG1hdHJpeFxuICAgICAqIEBwYXJhbSB2IC0gdGhlIHZlY3RvclxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gb3B0aW9uYWwgdmVjMyB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHRyYW5zZm9ybWVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQodiwgbSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCB4ID0gdlswXTtcbiAgICAgICAgY29uc3QgeSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHogPSB2WzJdO1xuICAgICAgICBjb25zdCB3ID0gKG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XSkgfHwgMTtcbiAgICAgICAgbmV3RHN0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeiArIG1bMTJdKSAvIHc7XG4gICAgICAgIG5ld0RzdFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSkgLyB3O1xuICAgICAgICBuZXdEc3RbMl0gPSAobVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdKSAvIHc7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSB2ZWMzIGJ5IHVwcGVyIDN4MyBtYXRyaXggaW5zaWRlIDR4NCBtYXRyaXguXG4gICAgICogQHBhcmFtIHYgLSBUaGUgZGlyZWN0aW9uLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gb3B0aW9uYWwgdmVjMyB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0VXBwZXIzeDModiwgbSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHZlYzMgYnkgM3gzIG1hdHJpeFxuICAgICAqXG4gICAgICogQHBhcmFtIHYgLSB0aGUgdmVjdG9yXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtTWF0Myh2LCBtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHggPSB2WzBdO1xuICAgICAgICBjb25zdCB5ID0gdlsxXTtcbiAgICAgICAgY29uc3QgeiA9IHZbMl07XG4gICAgICAgIG5ld0RzdFswXSA9IHggKiBtWzBdICsgeSAqIG1bNF0gKyB6ICogbVs4XTtcbiAgICAgICAgbmV3RHN0WzFdID0geCAqIG1bMV0gKyB5ICogbVs1XSArIHogKiBtWzldO1xuICAgICAgICBuZXdEc3RbMl0gPSB4ICogbVsyXSArIHkgKiBtWzZdICsgeiAqIG1bMTBdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHZlYzMgYnkgUXVhdGVybmlvblxuICAgICAqIEBwYXJhbSB2IC0gdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0gcSAtIHRoZSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSBieVxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCB2ZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1RdWF0KHYsIHEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgcXggPSBxWzBdO1xuICAgICAgICBjb25zdCBxeSA9IHFbMV07XG4gICAgICAgIGNvbnN0IHF6ID0gcVsyXTtcbiAgICAgICAgY29uc3QgdzIgPSBxWzNdICogMjtcbiAgICAgICAgY29uc3QgeCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHkgPSB2WzFdO1xuICAgICAgICBjb25zdCB6ID0gdlsyXTtcbiAgICAgICAgY29uc3QgdXZYID0gcXkgKiB6IC0gcXogKiB5O1xuICAgICAgICBjb25zdCB1dlkgPSBxeiAqIHggLSBxeCAqIHo7XG4gICAgICAgIGNvbnN0IHV2WiA9IHF4ICogeSAtIHF5ICogeDtcbiAgICAgICAgbmV3RHN0WzBdID0geCArIHV2WCAqIHcyICsgKHF5ICogdXZaIC0gcXogKiB1dlkpICogMjtcbiAgICAgICAgbmV3RHN0WzFdID0geSArIHV2WSAqIHcyICsgKHF6ICogdXZYIC0gcXggKiB1dlopICogMjtcbiAgICAgICAgbmV3RHN0WzJdID0geiArIHV2WiAqIHcyICsgKHF4ICogdXZZIC0gcXkgKiB1dlgpICogMjtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIGEgNC1ieS00IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDNcbiAgICAgKiBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMTJdO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzEzXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVsxNF07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXhpcyBvZiBhIDR4NCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXNcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpcyAwID0geCwgMSA9IHksIDIgPSB6O1xuICAgICAqIEByZXR1cm5zIFRoZSBheGlzIGNvbXBvbmVudCBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEF4aXMobSwgYXhpcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCBvZmYgPSBheGlzICogNDtcbiAgICAgICAgbmV3RHN0WzBdID0gbVtvZmYgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVtvZmYgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVtvZmYgKyAyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2NhbGluZyBjb21wb25lbnQgb2YgdGhlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBtIC0gVGhlIE1hdHJpeFxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgdmVjdG9yIHRvIHNldC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRTY2FsaW5nKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgY29uc3QgeHggPSBtWzBdO1xuICAgICAgICBjb25zdCB4eSA9IG1bMV07XG4gICAgICAgIGNvbnN0IHh6ID0gbVsyXTtcbiAgICAgICAgY29uc3QgeXggPSBtWzRdO1xuICAgICAgICBjb25zdCB5eSA9IG1bNV07XG4gICAgICAgIGNvbnN0IHl6ID0gbVs2XTtcbiAgICAgICAgY29uc3QgenggPSBtWzhdO1xuICAgICAgICBjb25zdCB6eSA9IG1bOV07XG4gICAgICAgIGNvbnN0IHp6ID0gbVsxMF07XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguc3FydCh4eCAqIHh4ICsgeHkgKiB4eSArIHh6ICogeHopO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLnNxcnQoeXggKiB5eCArIHl5ICogeXkgKyB5eiAqIHl6KTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5zcXJ0KHp4ICogenggKyB6eSAqIHp5ICsgenogKiB6eik7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHgtYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSByb3RhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVgoYSwgYiwgcmFkLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gICAgICAgIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgICAgICAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBwWzJdID0gYVsyXSAtIGJbMl07XG4gICAgICAgIC8vcGVyZm9ybSByb3RhdGlvblxuICAgICAgICByWzBdID0gcFswXTtcbiAgICAgICAgclsxXSA9IHBbMV0gKiBNYXRoLmNvcyhyYWQpIC0gcFsyXSAqIE1hdGguc2luKHJhZCk7XG4gICAgICAgIHJbMl0gPSBwWzFdICogTWF0aC5zaW4ocmFkKSArIHBbMl0gKiBNYXRoLmNvcyhyYWQpO1xuICAgICAgICAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICAgIG5ld0RzdFswXSA9IHJbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSByWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gclsyXSArIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHRoZSByb3RhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVkoYSwgYiwgcmFkLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGNvbnN0IHAgPSBbXTtcbiAgICAgICAgY29uc3QgciA9IFtdO1xuICAgICAgICAvLyB0cmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuICAgICAgICBwWzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgcFsyXSA9IGFbMl0gLSBiWzJdO1xuICAgICAgICAvLyBwZXJmb3JtIHJvdGF0aW9uXG4gICAgICAgIHJbMF0gPSBwWzJdICogTWF0aC5zaW4ocmFkKSArIHBbMF0gKiBNYXRoLmNvcyhyYWQpO1xuICAgICAgICByWzFdID0gcFsxXTtcbiAgICAgICAgclsyXSA9IHBbMl0gKiBNYXRoLmNvcyhyYWQpIC0gcFswXSAqIE1hdGguc2luKHJhZCk7XG4gICAgICAgIC8vIHRyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICAgIG5ld0RzdFswXSA9IHJbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSByWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gclsyXSArIGJbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHotYXhpc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gICAgICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGVaKGEsIGIsIHJhZCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMykpO1xuICAgICAgICBjb25zdCBwID0gW107XG4gICAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgICAgLy8gdHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgICAgICAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBwWzFdID0gYVsxXSAtIGJbMV07XG4gICAgICAgIHBbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgLy8gcGVyZm9ybSByb3RhdGlvblxuICAgICAgICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgICAgICAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gICAgICAgIHJbMl0gPSBwWzJdO1xuICAgICAgICAvLyB0cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuICAgICAgICBuZXdEc3RbMF0gPSByWzBdICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gclsxXSArIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHJbMl0gKyBiWzJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmVhdCBhIDNEIHZlY3RvciBhcyBhIGRpcmVjdGlvbiBhbmQgc2V0IGl0J3MgbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjMyB0byBsZW5ndGhlblxuICAgICAqIEBwYXJhbSBsZW4gVGhlIGxlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3RvclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGhlbmVkIHZlY3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldExlbmd0aChhLCBsZW4sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDMpKTtcbiAgICAgICAgbm9ybWFsaXplKGEsIG5ld0RzdCk7XG4gICAgICAgIHJldHVybiBtdWxTY2FsYXIobmV3RHN0LCBsZW4sIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuc3VyZSBhIHZlY3RvciBpcyBub3QgbG9uZ2VyIHRoYW4gYSBtYXggbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBUaGUgdmVjMyB0byBsaW1pdFxuICAgICAqIEBwYXJhbSBtYXhMZW4gVGhlIGxvbmdlc3QgbGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yXG4gICAgICogQHJldHVybnMgVGhlIHZlY3Rvciwgc2hvcnRlbmVkIHRvIG1heExlbiBpZiBpdCdzIHRvbyBsb25nXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUoYSwgbWF4TGVuLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIGlmIChsZW5ndGgoYSkgPiBtYXhMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRMZW5ndGgoYSwgbWF4TGVuLCBuZXdEc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3B5KGEsIG5ld0RzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdmVjdG9yIGV4YWN0bHkgYmV0d2VlbiAyIGVuZHBvaW50IHZlY3RvcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIEVuZHBvaW50IDFcbiAgICAgKiBAcGFyYW0gYiBFbmRwb2ludCAyXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBleGFjdGx5IHJlc2lkaW5nIGJldHdlZW4gZW5kcG9pbnRzIDEgYW5kIDJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtaWRwb2ludChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigzKSk7XG4gICAgICAgIHJldHVybiBsZXJwKGEsIGIsIDAuNSwgbmV3RHN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBmcm9tVmFsdWVzLFxuICAgICAgICBzZXQsXG4gICAgICAgIGNlaWwsXG4gICAgICAgIGZsb29yLFxuICAgICAgICByb3VuZCxcbiAgICAgICAgY2xhbXAsXG4gICAgICAgIGFkZCxcbiAgICAgICAgYWRkU2NhbGVkLFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgc3VidHJhY3QsXG4gICAgICAgIHN1YixcbiAgICAgICAgZXF1YWxzQXBwcm94aW1hdGVseSxcbiAgICAgICAgZXF1YWxzLFxuICAgICAgICBsZXJwLFxuICAgICAgICBsZXJwVixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIG11bFNjYWxhcixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIGRpdlNjYWxhcixcbiAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgaW52ZXJ0LFxuICAgICAgICBjcm9zcyxcbiAgICAgICAgZG90LFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGxlbixcbiAgICAgICAgbGVuZ3RoU3EsXG4gICAgICAgIGxlblNxLFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgZGlzdCxcbiAgICAgICAgZGlzdGFuY2VTcSxcbiAgICAgICAgZGlzdFNxLFxuICAgICAgICBub3JtYWxpemUsXG4gICAgICAgIG5lZ2F0ZSxcbiAgICAgICAgY29weSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIG11bHRpcGx5LFxuICAgICAgICBtdWwsXG4gICAgICAgIGRpdmlkZSxcbiAgICAgICAgZGl2LFxuICAgICAgICByYW5kb20sXG4gICAgICAgIHplcm8sXG4gICAgICAgIHRyYW5zZm9ybU1hdDQsXG4gICAgICAgIHRyYW5zZm9ybU1hdDRVcHBlcjN4MyxcbiAgICAgICAgdHJhbnNmb3JtTWF0MyxcbiAgICAgICAgdHJhbnNmb3JtUXVhdCxcbiAgICAgICAgZ2V0VHJhbnNsYXRpb24sXG4gICAgICAgIGdldEF4aXMsXG4gICAgICAgIGdldFNjYWxpbmcsXG4gICAgICAgIHJvdGF0ZVgsXG4gICAgICAgIHJvdGF0ZVksXG4gICAgICAgIHJvdGF0ZVosXG4gICAgICAgIHNldExlbmd0aCxcbiAgICAgICAgdHJ1bmNhdGUsXG4gICAgICAgIG1pZHBvaW50LFxuICAgIH07XG59XG5jb25zdCBjYWNoZSQ0ID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0QVBJJDQoQ3Rvcikge1xuICAgIGxldCBhcGkgPSBjYWNoZSQ0LmdldChDdG9yKTtcbiAgICBpZiAoIWFwaSkge1xuICAgICAgICBhcGkgPSBnZXRBUElJbXBsJDQoQ3Rvcik7XG4gICAgICAgIGNhY2hlJDQuc2V0KEN0b3IsIGFwaSk7XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMiBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogR2VuZXJhdGVzIGEgdHlwZWQgQVBJIGZvciBNYXQzXG4gKiAqL1xuZnVuY3Rpb24gZ2V0QVBJSW1wbCQzKEN0b3IpIHtcbiAgICBjb25zdCB2ZWMyID0gZ2V0QVBJJDUoQ3Rvcik7XG4gICAgY29uc3QgdmVjMyA9IGdldEFQSSQ0KEN0b3IpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIE1hdDMgZnJvbSB2YWx1ZXNcbiAgICAgKlxuICAgICAqIE5vdGU6IFNpbmNlIHBhc3NpbmcgaW4gYSByYXcgSmF2YVNjcmlwdCBhcnJheVxuICAgICAqIGlzIHZhbGlkIGluIGFsbCBjaXJjdW1zdGFuY2VzLCBpZiB5b3Ugd2FudCB0b1xuICAgICAqIGZvcmNlIGEgSmF2YVNjcmlwdCBhcnJheSBpbnRvIGEgTWF0MydzIHNwZWNpZmllZCB0eXBlXG4gICAgICogaXQgd291bGQgYmUgZmFzdGVyIHRvIHVzZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY29uc3QgbSA9IG1hdDMuY2xvbmUoc29tZUpTQXJyYXkpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIHYwIC0gdmFsdWUgZm9yIGVsZW1lbnQgMFxuICAgICAqIEBwYXJhbSB2MSAtIHZhbHVlIGZvciBlbGVtZW50IDFcbiAgICAgKiBAcGFyYW0gdjIgLSB2YWx1ZSBmb3IgZWxlbWVudCAyXG4gICAgICogQHBhcmFtIHYzIC0gdmFsdWUgZm9yIGVsZW1lbnQgM1xuICAgICAqIEBwYXJhbSB2NCAtIHZhbHVlIGZvciBlbGVtZW50IDRcbiAgICAgKiBAcGFyYW0gdjUgLSB2YWx1ZSBmb3IgZWxlbWVudCA1XG4gICAgICogQHBhcmFtIHY2IC0gdmFsdWUgZm9yIGVsZW1lbnQgNlxuICAgICAqIEBwYXJhbSB2NyAtIHZhbHVlIGZvciBlbGVtZW50IDdcbiAgICAgKiBAcGFyYW0gdjggLSB2YWx1ZSBmb3IgZWxlbWVudCA4XG4gICAgICogQHJldHVybnMgbWF0cml4IGNyZWF0ZWQgZnJvbSB2YWx1ZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlKHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gbmV3IEN0b3IoMTIpO1xuICAgICAgICAvLyB0byBtYWtlIHRoZSBhcnJheSBob21vZ2Vub3VzXG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBpZiAodjAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjA7XG4gICAgICAgICAgICBpZiAodjEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IHYxO1xuICAgICAgICAgICAgICAgIGlmICh2MiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IHYyO1xuICAgICAgICAgICAgICAgICAgICBpZiAodjMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzRdID0gdjM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodjQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs1XSA9IHY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2NSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs2XSA9IHY1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzhdID0gdjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs5XSA9IHY3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2OCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFsxMF0gPSB2ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWVzIG9mIGEgTWF0M1xuICAgICAqIEFsc28gc2VlIHtAbGluayBtYXQzLmNyZWF0ZX0gYW5kIHtAbGluayBtYXQzLmNvcHl9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdjAgLSB2YWx1ZSBmb3IgZWxlbWVudCAwXG4gICAgICogQHBhcmFtIHYxIC0gdmFsdWUgZm9yIGVsZW1lbnQgMVxuICAgICAqIEBwYXJhbSB2MiAtIHZhbHVlIGZvciBlbGVtZW50IDJcbiAgICAgKiBAcGFyYW0gdjMgLSB2YWx1ZSBmb3IgZWxlbWVudCAzXG4gICAgICogQHBhcmFtIHY0IC0gdmFsdWUgZm9yIGVsZW1lbnQgNFxuICAgICAqIEBwYXJhbSB2NSAtIHZhbHVlIGZvciBlbGVtZW50IDVcbiAgICAgKiBAcGFyYW0gdjYgLSB2YWx1ZSBmb3IgZWxlbWVudCA2XG4gICAgICogQHBhcmFtIHY3IC0gdmFsdWUgZm9yIGVsZW1lbnQgN1xuICAgICAqIEBwYXJhbSB2OCAtIHZhbHVlIGZvciBlbGVtZW50IDhcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIE1hdDMgc2V0IGZyb20gdmFsdWVzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldCh2MCwgdjEsIHYyLCB2MywgdjQsIHY1LCB2NiwgdjcsIHY4LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MDtcbiAgICAgICAgbmV3RHN0WzFdID0gdjE7XG4gICAgICAgIG5ld0RzdFsyXSA9IHYyO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSB2MztcbiAgICAgICAgbmV3RHN0WzVdID0gdjQ7XG4gICAgICAgIG5ld0RzdFs2XSA9IHY1O1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB2NjtcbiAgICAgICAgbmV3RHN0WzldID0gdjc7XG4gICAgICAgIG5ld0RzdFsxMF0gPSB2ODtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNYXQzIGZyb20gdGhlIHVwcGVyIGxlZnQgM3gzIHBhcnQgb2YgYSBNYXQ0XG4gICAgICogQHBhcmFtIG00IC0gc291cmNlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0MyBtYWRlIGZyb20gbTRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tTWF0NChtNCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbTRbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IG00WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtNFsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gbTRbNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IG00WzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSBtNFs2XTtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gbTRbOF07XG4gICAgICAgIG5ld0RzdFs5XSA9IG00WzldO1xuICAgICAgICBuZXdEc3RbMTBdID0gbTRbMTBdO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIE1hdDMgcm90YXRpb24gbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0MyBtYWRlIGZyb20gcVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21RdWF0KHEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IHggPSBxWzBdO1xuICAgICAgICBjb25zdCB5ID0gcVsxXTtcbiAgICAgICAgY29uc3QgeiA9IHFbMl07XG4gICAgICAgIGNvbnN0IHcgPSBxWzNdO1xuICAgICAgICBjb25zdCB4MiA9IHggKyB4O1xuICAgICAgICBjb25zdCB5MiA9IHkgKyB5O1xuICAgICAgICBjb25zdCB6MiA9IHogKyB6O1xuICAgICAgICBjb25zdCB4eCA9IHggKiB4MjtcbiAgICAgICAgY29uc3QgeXggPSB5ICogeDI7XG4gICAgICAgIGNvbnN0IHl5ID0geSAqIHkyO1xuICAgICAgICBjb25zdCB6eCA9IHogKiB4MjtcbiAgICAgICAgY29uc3QgenkgPSB6ICogeTI7XG4gICAgICAgIGNvbnN0IHp6ID0geiAqIHoyO1xuICAgICAgICBjb25zdCB3eCA9IHcgKiB4MjtcbiAgICAgICAgY29uc3Qgd3kgPSB3ICogeTI7XG4gICAgICAgIGNvbnN0IHd6ID0gdyAqIHoyO1xuICAgICAgICBuZXdEc3RbMF0gPSAxIC0geXkgLSB6ejtcbiAgICAgICAgbmV3RHN0WzFdID0geXggKyB3ejtcbiAgICAgICAgbmV3RHN0WzJdID0genggLSB3eTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0geXggLSB3ejtcbiAgICAgICAgbmV3RHN0WzVdID0gMSAtIHh4IC0geno7XG4gICAgICAgIG5ld0RzdFs2XSA9IHp5ICsgd3g7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHp4ICsgd3k7XG4gICAgICAgIG5ld0RzdFs5XSA9IHp5IC0gd3g7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxIC0geHggLSB5eTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYSBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgLW0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gbmVnYXRlKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IC1tWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSAtbVsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gLW1bMl07XG4gICAgICAgIG5ld0RzdFs0XSA9IC1tWzRdO1xuICAgICAgICBuZXdEc3RbNV0gPSAtbVs1XTtcbiAgICAgICAgbmV3RHN0WzZdID0gLW1bNl07XG4gICAgICAgIG5ld0RzdFs4XSA9IC1tWzhdO1xuICAgICAgICBuZXdEc3RbOV0gPSAtbVs5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IC1tWzEwXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbXVsdGlwbHkgYSBtYXRyaXggYnkgYSBzY2FsYXIgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gcyAtIHRoZSBzY2FsYXJcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIG0gKiBzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG0sIHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMF0gKiBzO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzFdICogcztcbiAgICAgICAgbmV3RHN0WzJdID0gbVsyXSAqIHM7XG4gICAgICAgIG5ld0RzdFs0XSA9IG1bNF0gKiBzO1xuICAgICAgICBuZXdEc3RbNV0gPSBtWzVdICogcztcbiAgICAgICAgbmV3RHN0WzZdID0gbVs2XSAqIHM7XG4gICAgICAgIG5ld0RzdFs4XSA9IG1bOF0gKiBzO1xuICAgICAgICBuZXdEc3RbOV0gPSBtWzldICogcztcbiAgICAgICAgbmV3RHN0WzEwXSA9IG1bMTBdICogcztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbXVsdGlwbHkgYSBtYXRyaXggYnkgYSBzY2FsYXIgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gcyAtIHRoZSBzY2FsYXJcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIG0gKiBzLlxuICAgICAqL1xuICAgIGNvbnN0IG11bFNjYWxhciA9IG11bHRpcGx5U2NhbGFyO1xuICAgIC8qKlxuICAgICAqIGFkZCAyIG1hdHJpY2VzLlxuICAgICAqIEBwYXJhbSBhIC0gbWF0cml4IDEuXG4gICAgICogQHBhcmFtIGIgLSBtYXRyaXggMi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIGEgKyBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgICAgICBuZXdEc3RbNF0gPSBhWzRdICsgYls0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gYVs1XSArIGJbNV07XG4gICAgICAgIG5ld0RzdFs2XSA9IGFbNl0gKyBiWzZdO1xuICAgICAgICBuZXdEc3RbOF0gPSBhWzhdICsgYls4XTtcbiAgICAgICAgbmV3RHN0WzldID0gYVs5XSArIGJbOV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSBtYXRyaXguIChzYW1lIGFzIHtAbGluayBtYXQzLmNsb25lfSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgbWF0My5jcmVhdGV9IGFuZCB7QGxpbmsgbWF0My5zZXR9XG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvcHkobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVsyXTtcbiAgICAgICAgbmV3RHN0WzRdID0gbVs0XTtcbiAgICAgICAgbmV3RHN0WzVdID0gbVs1XTtcbiAgICAgICAgbmV3RHN0WzZdID0gbVs2XTtcbiAgICAgICAgbmV3RHN0WzhdID0gbVs4XTtcbiAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IG1bMTBdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSBtYXRyaXggKHNhbWUgYXMge0BsaW5rIG1hdDMuY29weX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIG1hdDMuY3JlYXRlfSBhbmQge0BsaW5rIG1hdDMuc2V0fVxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgbS5cbiAgICAgKi9cbiAgICBjb25zdCBjbG9uZSA9IGNvcHk7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiBtYXRyaWNlcyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEBwYXJhbSBiIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbWF0cmljZXMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHNBcHByb3hpbWF0ZWx5KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMl0gLSBiWzJdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNF0gLSBiWzRdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNV0gLSBiWzVdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNl0gLSBiWzZdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbOF0gLSBiWzhdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbOV0gLSBiWzldKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMTBdIC0gYlsxMF0pIDwgRVBTSUxPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiBtYXRyaWNlcyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqIEBwYXJhbSBhIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEBwYXJhbSBiIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbWF0cmljZXMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSA9PT0gYlswXSAmJlxuICAgICAgICAgICAgYVsxXSA9PT0gYlsxXSAmJlxuICAgICAgICAgICAgYVsyXSA9PT0gYlsyXSAmJlxuICAgICAgICAgICAgYVs0XSA9PT0gYls0XSAmJlxuICAgICAgICAgICAgYVs1XSA9PT0gYls1XSAmJlxuICAgICAgICAgICAgYVs2XSA9PT0gYls2XSAmJlxuICAgICAgICAgICAgYVs4XSA9PT0gYls4XSAmJlxuICAgICAgICAgICAgYVs5XSA9PT0gYls5XSAmJlxuICAgICAgICAgICAgYVsxMF0gPT09IGJbMTBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIGlkZW50aXR5IG1hdHJpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSAzLWJ5LTMgaWRlbnRpdHkgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlkZW50aXR5KGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgdHJhbnNwb3NlIG9mIGEgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc3Bvc2Ugb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc3Bvc2UobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgaWYgKG5ld0RzdCA9PT0gbSkge1xuICAgICAgICAgICAgbGV0IHQ7XG4gICAgICAgICAgICAvLyAwIDEgMlxuICAgICAgICAgICAgLy8gNCA1IDZcbiAgICAgICAgICAgIC8vIDggOSAxMFxuICAgICAgICAgICAgdCA9IG1bMV07XG4gICAgICAgICAgICBtWzFdID0gbVs0XTtcbiAgICAgICAgICAgIG1bNF0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bMl07XG4gICAgICAgICAgICBtWzJdID0gbVs4XTtcbiAgICAgICAgICAgIG1bOF0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bNl07XG4gICAgICAgICAgICBtWzZdID0gbVs5XTtcbiAgICAgICAgICAgIG1bOV0gPSB0O1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbMF0gPSBtMDA7XG4gICAgICAgIG5ld0RzdFsxXSA9IG0xMDtcbiAgICAgICAgbmV3RHN0WzJdID0gbTIwO1xuICAgICAgICBuZXdEc3RbNF0gPSBtMDE7XG4gICAgICAgIG5ld0RzdFs1XSA9IG0xMTtcbiAgICAgICAgbmV3RHN0WzZdID0gbTIxO1xuICAgICAgICBuZXdEc3RbOF0gPSBtMDI7XG4gICAgICAgIG5ld0RzdFs5XSA9IG0xMjtcbiAgICAgICAgbmV3RHN0WzEwXSA9IG0yMjtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSAzLWJ5LTMgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnNlIG9mIG0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52ZXJzZShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBiMDEgPSBtMjIgKiBtMTEgLSBtMTIgKiBtMjE7XG4gICAgICAgIGNvbnN0IGIxMSA9IC1tMjIgKiBtMTAgKyBtMTIgKiBtMjA7XG4gICAgICAgIGNvbnN0IGIyMSA9IG0yMSAqIG0xMCAtIG0xMSAqIG0yMDtcbiAgICAgICAgY29uc3QgaW52RGV0ID0gMSAvIChtMDAgKiBiMDEgKyBtMDEgKiBiMTEgKyBtMDIgKiBiMjEpO1xuICAgICAgICBuZXdEc3RbMF0gPSBiMDEgKiBpbnZEZXQ7XG4gICAgICAgIG5ld0RzdFsxXSA9ICgtbTIyICogbTAxICsgbTAyICogbTIxKSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzJdID0gKG0xMiAqIG0wMSAtIG0wMiAqIG0xMSkgKiBpbnZEZXQ7XG4gICAgICAgIG5ld0RzdFs0XSA9IGIxMSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzVdID0gKG0yMiAqIG0wMCAtIG0wMiAqIG0yMCkgKiBpbnZEZXQ7XG4gICAgICAgIG5ld0RzdFs2XSA9ICgtbTEyICogbTAwICsgbTAyICogbTEwKSAqIGludkRldDtcbiAgICAgICAgbmV3RHN0WzhdID0gYjIxICogaW52RGV0O1xuICAgICAgICBuZXdEc3RbOV0gPSAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgKiBpbnZEZXQ7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAobTExICogbTAwIC0gbTAxICogbTEwKSAqIGludkRldDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gbSAtIHRoZSBtYXRyaXhcbiAgICAgKiBAcmV0dXJucyB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZXRlcm1pbmFudChtKSB7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTIxID0gbVsyICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzIgKiA0ICsgMl07XG4gICAgICAgIHJldHVybiBtMDAgKiAobTExICogbTIyIC0gbTIxICogbTEyKSAtXG4gICAgICAgICAgICBtMTAgKiAobTAxICogbTIyIC0gbTIxICogbTAyKSArXG4gICAgICAgICAgICBtMjAgKiAobTAxICogbTEyIC0gbTExICogbTAyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSAzLWJ5LTMgbWF0cml4LiAoc2FtZSBhcyBpbnZlcnNlKVxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnNlIG9mIG0uXG4gICAgICovXG4gICAgY29uc3QgaW52ZXJ0ID0gaW52ZXJzZTtcbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIHR3byAzLWJ5LTMgbWF0cmljZXMgd2l0aCBhIG9uIHRoZSBsZWZ0IGFuZCBiIG9uIHRoZSByaWdodFxuICAgICAqIEBwYXJhbSBhIC0gVGhlIG1hdHJpeCBvbiB0aGUgbGVmdC5cbiAgICAgKiBAcGFyYW0gYiAtIFRoZSBtYXRyaXggb24gdGhlIHJpZ2h0LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCBwcm9kdWN0IG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgY29uc3QgYTAwID0gYVswXTtcbiAgICAgICAgY29uc3QgYTAxID0gYVsxXTtcbiAgICAgICAgY29uc3QgYTAyID0gYVsyXTtcbiAgICAgICAgY29uc3QgYTEwID0gYVs0ICsgMF07XG4gICAgICAgIGNvbnN0IGExMSA9IGFbNCArIDFdO1xuICAgICAgICBjb25zdCBhMTIgPSBhWzQgKyAyXTtcbiAgICAgICAgY29uc3QgYTIwID0gYVs4ICsgMF07XG4gICAgICAgIGNvbnN0IGEyMSA9IGFbOCArIDFdO1xuICAgICAgICBjb25zdCBhMjIgPSBhWzggKyAyXTtcbiAgICAgICAgY29uc3QgYjAwID0gYlswXTtcbiAgICAgICAgY29uc3QgYjAxID0gYlsxXTtcbiAgICAgICAgY29uc3QgYjAyID0gYlsyXTtcbiAgICAgICAgY29uc3QgYjEwID0gYls0ICsgMF07XG4gICAgICAgIGNvbnN0IGIxMSA9IGJbNCArIDFdO1xuICAgICAgICBjb25zdCBiMTIgPSBiWzQgKyAyXTtcbiAgICAgICAgY29uc3QgYjIwID0gYls4ICsgMF07XG4gICAgICAgIGNvbnN0IGIyMSA9IGJbOCArIDFdO1xuICAgICAgICBjb25zdCBiMjIgPSBiWzggKyAyXTtcbiAgICAgICAgbmV3RHN0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyO1xuICAgICAgICBuZXdEc3RbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDI7XG4gICAgICAgIG5ld0RzdFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMjtcbiAgICAgICAgbmV3RHN0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICAgICAgICBuZXdEc3RbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gICAgICAgIG5ld0RzdFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgICAgICAgbmV3RHN0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyO1xuICAgICAgICBuZXdEc3RbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjI7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjI7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdHdvIDMtYnktMyBtYXRyaWNlcyB3aXRoIGEgb24gdGhlIGxlZnQgYW5kIGIgb24gdGhlIHJpZ2h0IChzYW1lIGFzIG11bHRpcGx5KVxuICAgICAqIEBwYXJhbSBhIC0gVGhlIG1hdHJpeCBvbiB0aGUgbGVmdC5cbiAgICAgKiBAcGFyYW0gYiAtIFRoZSBtYXRyaXggb24gdGhlIHJpZ2h0LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCBwcm9kdWN0IG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3QgbXVsID0gbXVsdGlwbHk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIGEgMy1ieS0zIG1hdHJpeCB0byB0aGUgZ2l2ZW5cbiAgICAgKiB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGEgLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggd2l0aCB0cmFuc2xhdGlvbiBzZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRpb24oYSwgdiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gaWRlbnRpdHkoKSk7XG4gICAgICAgIGlmIChhICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IGFbMF07XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSBhWzFdO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gYVsyXTtcbiAgICAgICAgICAgIG5ld0RzdFs0XSA9IGFbNF07XG4gICAgICAgICAgICBuZXdEc3RbNV0gPSBhWzVdO1xuICAgICAgICAgICAgbmV3RHN0WzZdID0gYVs2XTtcbiAgICAgICAgfVxuICAgICAgICBuZXdEc3RbOF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbOV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIGEgMy1ieS0zIG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDNcbiAgICAgKiBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyB2ZWMyLmNyZWF0ZSgpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbVs4XTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVs5XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBheGlzIG9mIGEgM3gzIG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDIgZW50cmllc1xuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYXhpcyAtIFRoZSBheGlzIDAgPSB4LCAxID0geSxcbiAgICAgKiBAcmV0dXJucyBUaGUgYXhpcyBjb21wb25lbnQgb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBeGlzKG0sIGF4aXMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzIuY3JlYXRlKCkpO1xuICAgICAgICBjb25zdCBvZmYgPSBheGlzICogNDtcbiAgICAgICAgbmV3RHN0WzBdID0gbVtvZmYgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVtvZmYgKyAxXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBheGlzIG9mIGEgM3gzIG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDIgZW50cmllc1xuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIHRoZSBheGlzIHZlY3RvclxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXMgIDAgPSB4LCAxID0geTtcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIG1hdHJpeCB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB3aXRoIGF4aXMgc2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEF4aXMobSwgdiwgYXhpcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPT09IG0gPyBtIDogY29weShtLCBkc3QpKTtcbiAgICAgICAgY29uc3Qgb2ZmID0gYXhpcyAqIDQ7XG4gICAgICAgIG5ld0RzdFtvZmYgKyAwXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFtvZmYgKyAxXSA9IHZbMV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFwiMmRcIiBzY2FsaW5nIGNvbXBvbmVudCBvZiB0aGUgbWF0cml4XG4gICAgICogQHBhcmFtIG0gLSBUaGUgTWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNjYWxpbmcobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMi5jcmVhdGUoKSk7XG4gICAgICAgIGNvbnN0IHh4ID0gbVswXTtcbiAgICAgICAgY29uc3QgeHkgPSBtWzFdO1xuICAgICAgICBjb25zdCB5eCA9IG1bNF07XG4gICAgICAgIGNvbnN0IHl5ID0gbVs1XTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5zcXJ0KHh4ICogeHggKyB4eSAqIHh5KTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5zcXJ0KHl4ICogeXggKyB5eSAqIHl5KTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgXCIzZFwiIHNjYWxpbmcgY29tcG9uZW50IG9mIHRoZSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBNYXRyaXhcbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIHZlY3RvciB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0M0RTY2FsaW5nKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzMuY3JlYXRlKCkpO1xuICAgICAgICBjb25zdCB4eCA9IG1bMF07XG4gICAgICAgIGNvbnN0IHh5ID0gbVsxXTtcbiAgICAgICAgY29uc3QgeHogPSBtWzJdO1xuICAgICAgICBjb25zdCB5eCA9IG1bNF07XG4gICAgICAgIGNvbnN0IHl5ID0gbVs1XTtcbiAgICAgICAgY29uc3QgeXogPSBtWzZdO1xuICAgICAgICBjb25zdCB6eCA9IG1bOF07XG4gICAgICAgIGNvbnN0IHp5ID0gbVs5XTtcbiAgICAgICAgY29uc3QgenogPSBtWzEwXTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5zcXJ0KHh4ICogeHggKyB4eSAqIHh5ICsgeHogKiB4eik7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGguc3FydCh5eCAqIHl4ICsgeXkgKiB5eSArIHl6ICogeXopO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLnNxcnQoenggKiB6eCArIHp5ICogenkgKyB6eiAqIHp6KTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDMtYnktMyBtYXRyaXggd2hpY2ggdHJhbnNsYXRlcyBieSB0aGUgZ2l2ZW4gdmVjdG9yIHYuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yIGJ5IHdoaWNoIHRvIHRyYW5zbGF0ZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRpb24odiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gMTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzldID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IgYnkgd2hpY2ggdG8gdHJhbnNsYXRlLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgbTAwID0gbVswXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVsxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVsyXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gbTAwO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gbTAxO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gbTAyO1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gbTEwO1xuICAgICAgICAgICAgbmV3RHN0WzVdID0gbTExO1xuICAgICAgICAgICAgbmV3RHN0WzZdID0gbTEyO1xuICAgICAgICB9XG4gICAgICAgIG5ld0RzdFs4XSA9IG0wMCAqIHYwICsgbTEwICogdjEgKyBtMjA7XG4gICAgICAgIG5ld0RzdFs5XSA9IG0wMSAqIHYwICsgbTExICogdjEgKyBtMjE7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBtMDIgKiB2MCArIG0xMiAqIHYxICsgbTIyO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCByb3RhdGVzICBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjO1xuICAgICAgICBuZXdEc3RbMV0gPSBzO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAtcztcbiAgICAgICAgbmV3RHN0WzVdID0gYztcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjICogbTAwICsgcyAqIG0xMDtcbiAgICAgICAgbmV3RHN0WzFdID0gYyAqIG0wMSArIHMgKiBtMTE7XG4gICAgICAgIG5ld0RzdFsyXSA9IGMgKiBtMDIgKyBzICogbTEyO1xuICAgICAgICBuZXdEc3RbNF0gPSBjICogbTEwIC0gcyAqIG0wMDtcbiAgICAgICAgbmV3RHN0WzVdID0gYyAqIG0xMSAtIHMgKiBtMDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBtWzhdO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gbVs5XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeC1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb25YKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBjO1xuICAgICAgICBuZXdEc3RbNl0gPSBzO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAtcztcbiAgICAgICAgbmV3RHN0WzEwXSA9IGM7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuXG4gICAgICogYW5nbGUuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVgobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bNF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bNV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bNl07XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bOF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bOV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMTBdO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbNF0gPSBjICogbTEwICsgcyAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzVdID0gYyAqIG0xMSArIHMgKiBtMjE7XG4gICAgICAgIG5ld0RzdFs2XSA9IGMgKiBtMTIgKyBzICogbTIyO1xuICAgICAgICBuZXdEc3RbOF0gPSBjICogbTIwIC0gcyAqIG0xMDtcbiAgICAgICAgbmV3RHN0WzldID0gYyAqIG0yMSAtIHMgKiBtMTE7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjICogbTIyIC0gcyAqIG0xMjtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gbVswXTtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IG1bMV07XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBtWzJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSAzLWJ5LTMgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB5LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGlvblkoYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGM7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IC1zO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSAxO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSBzO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gYztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYyAqIG0wMCAtIHMgKiBtMjA7XG4gICAgICAgIG5ld0RzdFsxXSA9IGMgKiBtMDEgLSBzICogbTIxO1xuICAgICAgICBuZXdEc3RbMl0gPSBjICogbTAyIC0gcyAqIG0yMjtcbiAgICAgICAgbmV3RHN0WzhdID0gYyAqIG0yMCArIHMgKiBtMDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IGMgKiBtMjEgKyBzICogbTAxO1xuICAgICAgICBuZXdEc3RbMTBdID0gYyAqIG0yMiArIHMgKiBtMDI7XG4gICAgICAgIGlmIChtICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFs0XSA9IG1bNF07XG4gICAgICAgICAgICBuZXdEc3RbNV0gPSBtWzVdO1xuICAgICAgICAgICAgbmV3RHN0WzZdID0gbVs2XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgY29uc3Qgcm90YXRpb25aID0gcm90YXRpb247XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBhcm91bmQgdGhlIHotYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgY29uc3Qgcm90YXRlWiA9IHJvdGF0ZTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgMy1ieS0zIG1hdHJpeCB3aGljaCBzY2FsZXMgaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50IGdpdmVuIGJ5XG4gICAgICogdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhcyB0d29cbiAgICAgKiBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSB2IC0gQSB2ZWN0b3Igb2ZcbiAgICAgKiAgICAgMiBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsaW5nKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGdpdmVuIDMtYnktMyBtYXRyaXggaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50XG4gICAgICogZ2l2ZW4gYnkgdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhc1xuICAgICAqIHR3byBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gdiAtIEEgdmVjdG9yIG9mIDIgZW50cmllcyBzcGVjaWZ5aW5nIHRoZVxuICAgICAqICAgICBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsZShtLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzBdID0gdjAgKiBtWzAgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHYwICogbVswICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB2MCAqIG1bMCAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzRdID0gdjEgKiBtWzEgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFs1XSA9IHYxICogbVsxICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbNl0gPSB2MSAqIG1bMSAqIDQgKyAyXTtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzhdID0gbVs4XTtcbiAgICAgICAgICAgIG5ld0RzdFs5XSA9IG1bOV07XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDMtYnktMyBtYXRyaXggd2hpY2ggc2NhbGVzIGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudCBnaXZlbiBieVxuICAgICAqIHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXMgdGhyZWVcbiAgICAgKiBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSB2IC0gQSB2ZWN0b3Igb2ZcbiAgICAgKiAgICAgMyBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlIGZhY3RvciBieSB3aGljaCB0byBzY2FsZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsaW5nM0QodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHZbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgZ2l2ZW4gMy1ieS0zIG1hdHJpeCBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnRcbiAgICAgKiBnaXZlbiBieSB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzXG4gICAgICogdGhyZWUgZW50cmllcy5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXggdG8gYmUgbW9kaWZpZWQuXG4gICAgICogQHBhcmFtIHYgLSBBIHZlY3RvciBvZiAzIGVudHJpZXMgc3BlY2lmeWluZyB0aGVcbiAgICAgKiAgICAgZmFjdG9yIGJ5IHdoaWNoIHRvIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2NhbGUzRChtLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHYwICogbVswICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbNF0gPSB2MSAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gdjEgKiBtWzEgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHYxICogbVsxICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbOF0gPSB2MiAqIG1bMiAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzldID0gdjIgKiBtWzIgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSB2MiAqIG1bMiAqIDQgKyAyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDMtYnktMyBtYXRyaXggd2hpY2ggc2NhbGVzIHVuaWZvcm1seSBpbiB0aGUgWCBhbmQgWSBkaW1lbnNpb25zXG4gICAgICogQHBhcmFtIHMgLSBBbW91bnQgdG8gc2NhbGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmlmb3JtU2NhbGluZyhzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBzO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSBnaXZlbiAzLWJ5LTMgbWF0cml4IGluIHRoZSBYIGFuZCBZIGRpbWVuc2lvbiBieSBhbiBhbW91bnRcbiAgICAgKiBnaXZlbi5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXggdG8gYmUgbW9kaWZpZWQuXG4gICAgICogQHBhcmFtIHMgLSBBbW91bnQgdG8gc2NhbGUuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmlmb3JtU2NhbGUobSwgcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTIpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcyAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gcyAqIG1bMCAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gcyAqIG1bMCAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzRdID0gcyAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gcyAqIG1bMSAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gcyAqIG1bMSAqIDQgKyAyXTtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzhdID0gbVs4XTtcbiAgICAgICAgICAgIG5ld0RzdFs5XSA9IG1bOV07XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDMtYnktMyBtYXRyaXggd2hpY2ggc2NhbGVzIHVuaWZvcm1seSBpbiBlYWNoIGRpbWVuc2lvblxuICAgICAqIEBwYXJhbSBzIC0gQW1vdW50IHRvIHNjYWxlXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGluZyBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gdW5pZm9ybVNjYWxpbmczRChzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxMikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBzO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gcztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NhbGVzIHRoZSBnaXZlbiAzLWJ5LTMgbWF0cml4IGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudFxuICAgICAqIGdpdmVuLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gcyAtIEFtb3VudCB0byBzY2FsZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuaWZvcm1TY2FsZTNEKG0sIHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDEyKSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHMgKiBtWzAgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHMgKiBtWzAgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHMgKiBtWzAgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFs0XSA9IHMgKiBtWzEgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFs1XSA9IHMgKiBtWzEgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHMgKiBtWzEgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFs4XSA9IHMgKiBtWzIgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFs5XSA9IHMgKiBtWzIgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSBzICogbVsyICogNCArIDJdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIGNsb25lLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGRldGVybWluYW50LFxuICAgICAgICBlcXVhbHMsXG4gICAgICAgIGVxdWFsc0FwcHJveGltYXRlbHksXG4gICAgICAgIGZyb21NYXQ0LFxuICAgICAgICBmcm9tUXVhdCxcbiAgICAgICAgZ2V0M0RTY2FsaW5nLFxuICAgICAgICBnZXRBeGlzLFxuICAgICAgICBnZXRTY2FsaW5nLFxuICAgICAgICBnZXRUcmFuc2xhdGlvbixcbiAgICAgICAgaWRlbnRpdHksXG4gICAgICAgIGludmVyc2UsXG4gICAgICAgIGludmVydCxcbiAgICAgICAgbXVsLFxuICAgICAgICBtdWxTY2FsYXIsXG4gICAgICAgIG11bHRpcGx5LFxuICAgICAgICBtdWx0aXBseVNjYWxhcixcbiAgICAgICAgbmVnYXRlLFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIHJvdGF0ZVgsXG4gICAgICAgIHJvdGF0ZVksXG4gICAgICAgIHJvdGF0ZVosXG4gICAgICAgIHJvdGF0aW9uLFxuICAgICAgICByb3RhdGlvblgsXG4gICAgICAgIHJvdGF0aW9uWSxcbiAgICAgICAgcm90YXRpb25aLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUzRCxcbiAgICAgICAgc2NhbGluZyxcbiAgICAgICAgc2NhbGluZzNELFxuICAgICAgICBzZXQsXG4gICAgICAgIHNldEF4aXMsXG4gICAgICAgIHNldFRyYW5zbGF0aW9uLFxuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHRyYW5zbGF0aW9uLFxuICAgICAgICB0cmFuc3Bvc2UsXG4gICAgICAgIHVuaWZvcm1TY2FsZSxcbiAgICAgICAgdW5pZm9ybVNjYWxlM0QsXG4gICAgICAgIHVuaWZvcm1TY2FsaW5nLFxuICAgICAgICB1bmlmb3JtU2NhbGluZzNELFxuICAgIH07XG59XG5jb25zdCBjYWNoZSQzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0QVBJJDMoQ3Rvcikge1xuICAgIGxldCBhcGkgPSBjYWNoZSQzLmdldChDdG9yKTtcbiAgICBpZiAoIWFwaSkge1xuICAgICAgICBhcGkgPSBnZXRBUElJbXBsJDMoQ3Rvcik7XG4gICAgICAgIGNhY2hlJDMuc2V0KEN0b3IsIGFwaSk7XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdHlwZWQgQVBJIGZvciBNYXQ0XG4gKiAqL1xuZnVuY3Rpb24gZ2V0QVBJSW1wbCQyKEN0b3IpIHtcbiAgICBjb25zdCB2ZWMzID0gZ2V0QVBJJDQoQ3Rvcik7XG4gICAgLyoqXG4gICAgICogNHg0IE1hdHJpeCBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICAgICAqXG4gICAgICogQWxtb3N0IGFsbCBmdW5jdGlvbnMgdGFrZSBhbiBvcHRpb25hbCBgbmV3RHN0YCBhcmd1bWVudC4gSWYgaXQgaXMgbm90IHBhc3NlZCBpbiB0aGVcbiAgICAgKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgbWF0cml4LiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAgICAgKlxuICAgICAqICAgICBjb25zdCBtYXQgPSBtYXQ0LnRyYW5zbGF0aW9uKFsxLCAyLCAzXSk7ICAvLyBDcmVhdGVzIGEgbmV3IHRyYW5zbGF0aW9uIG1hdHJpeFxuICAgICAqXG4gICAgICogb3JcbiAgICAgKlxuICAgICAqICAgICBjb25zdCBtYXQgPSBtYXQ0LmNyZWF0ZSgpO1xuICAgICAqICAgICBtYXQ0LnRyYW5zbGF0aW9uKFsxLCAyLCAzXSwgbWF0KTsgIC8vIFB1dHMgdHJhbnNsYXRpb24gbWF0cml4IGluIG1hdC5cbiAgICAgKlxuICAgICAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAgICAgKiBhcyB0aGVyZSBpcyBhbG1vc3QgbmV2ZXIgYWxsb2NhdGlvbiB3aXRoIHRoZSBzZWNvbmQgc3R5bGUuXG4gICAgICpcbiAgICAgKiBJdCBpcyBhbHdheXMgc2F2ZSB0byBwYXNzIGFueSBtYXRyaXggYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICAgICAqXG4gICAgICogICAgIGNvbnN0IG1hdCA9IG1hdDQuaWRlbnRpdHkoKTtcbiAgICAgKiAgICAgY29uc3QgdHJhbnMgPSBtYXQ0LnRyYW5zbGF0aW9uKFsxLCAyLCAzXSk7XG4gICAgICogICAgIG1hdDQubXVsdGlwbHkobWF0LCB0cmFucywgbWF0KTsgIC8vIE11bHRpcGxpZXMgbWF0ICogdHJhbnMgYW5kIHB1dHMgcmVzdWx0IGluIG1hdC5cbiAgICAgKlxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIE1hdDQgZnJvbSB2YWx1ZXNcbiAgICAgKlxuICAgICAqIE5vdGU6IFNpbmNlIHBhc3NpbmcgaW4gYSByYXcgSmF2YVNjcmlwdCBhcnJheVxuICAgICAqIGlzIHZhbGlkIGluIGFsbCBjaXJjdW1zdGFuY2VzLCBpZiB5b3Ugd2FudCB0b1xuICAgICAqIGZvcmNlIGEgSmF2YVNjcmlwdCBhcnJheSBpbnRvIGEgTWF0NCdzIHNwZWNpZmllZCB0eXBlXG4gICAgICogaXQgd291bGQgYmUgZmFzdGVyIHRvIHVzZVxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogY29uc3QgbSA9IG1hdDQuY2xvbmUoc29tZUpTQXJyYXkpO1xuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIHYwIC0gdmFsdWUgZm9yIGVsZW1lbnQgMFxuICAgICAqIEBwYXJhbSB2MSAtIHZhbHVlIGZvciBlbGVtZW50IDFcbiAgICAgKiBAcGFyYW0gdjIgLSB2YWx1ZSBmb3IgZWxlbWVudCAyXG4gICAgICogQHBhcmFtIHYzIC0gdmFsdWUgZm9yIGVsZW1lbnQgM1xuICAgICAqIEBwYXJhbSB2NCAtIHZhbHVlIGZvciBlbGVtZW50IDRcbiAgICAgKiBAcGFyYW0gdjUgLSB2YWx1ZSBmb3IgZWxlbWVudCA1XG4gICAgICogQHBhcmFtIHY2IC0gdmFsdWUgZm9yIGVsZW1lbnQgNlxuICAgICAqIEBwYXJhbSB2NyAtIHZhbHVlIGZvciBlbGVtZW50IDdcbiAgICAgKiBAcGFyYW0gdjggLSB2YWx1ZSBmb3IgZWxlbWVudCA4XG4gICAgICogQHBhcmFtIHY5IC0gdmFsdWUgZm9yIGVsZW1lbnQgOVxuICAgICAqIEBwYXJhbSB2MTAgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMFxuICAgICAqIEBwYXJhbSB2MTEgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMVxuICAgICAqIEBwYXJhbSB2MTIgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMlxuICAgICAqIEBwYXJhbSB2MTMgLSB2YWx1ZSBmb3IgZWxlbWVudCAxM1xuICAgICAqIEBwYXJhbSB2MTQgLSB2YWx1ZSBmb3IgZWxlbWVudCAxNFxuICAgICAqIEBwYXJhbSB2MTUgLSB2YWx1ZSBmb3IgZWxlbWVudCAxNVxuICAgICAqIEByZXR1cm5zIGNyZWF0ZWQgZnJvbSB2YWx1ZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlKHYwLCB2MSwgdjIsIHYzLCB2NCwgdjUsIHY2LCB2NywgdjgsIHY5LCB2MTAsIHYxMSwgdjEyLCB2MTMsIHYxNCwgdjE1KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IG5ldyBDdG9yKDE2KTtcbiAgICAgICAgaWYgKHYwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IHYwO1xuICAgICAgICAgICAgaWYgKHYxICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSB2MTtcbiAgICAgICAgICAgICAgICBpZiAodjIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSB2MjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFszXSA9IHYzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbNF0gPSB2NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbNV0gPSB2NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs2XSA9IHY2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbN10gPSB2NztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbOF0gPSB2ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHY5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RzdFs5XSA9IHY5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYxMCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzEwXSA9IHYxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjExICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzExXSA9IHYxMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYxMiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTJdID0gdjEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYxMyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzEzXSA9IHYxMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodjE0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzE0XSA9IHYxNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYxNSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEc3RbMTVdID0gdjE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlcyBvZiBhIE1hdDRcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgbWF0NC5jcmVhdGV9IGFuZCB7QGxpbmsgbWF0NC5jb3B5fVxuICAgICAqXG4gICAgICogQHBhcmFtIHYwIC0gdmFsdWUgZm9yIGVsZW1lbnQgMFxuICAgICAqIEBwYXJhbSB2MSAtIHZhbHVlIGZvciBlbGVtZW50IDFcbiAgICAgKiBAcGFyYW0gdjIgLSB2YWx1ZSBmb3IgZWxlbWVudCAyXG4gICAgICogQHBhcmFtIHYzIC0gdmFsdWUgZm9yIGVsZW1lbnQgM1xuICAgICAqIEBwYXJhbSB2NCAtIHZhbHVlIGZvciBlbGVtZW50IDRcbiAgICAgKiBAcGFyYW0gdjUgLSB2YWx1ZSBmb3IgZWxlbWVudCA1XG4gICAgICogQHBhcmFtIHY2IC0gdmFsdWUgZm9yIGVsZW1lbnQgNlxuICAgICAqIEBwYXJhbSB2NyAtIHZhbHVlIGZvciBlbGVtZW50IDdcbiAgICAgKiBAcGFyYW0gdjggLSB2YWx1ZSBmb3IgZWxlbWVudCA4XG4gICAgICogQHBhcmFtIHY5IC0gdmFsdWUgZm9yIGVsZW1lbnQgOVxuICAgICAqIEBwYXJhbSB2MTAgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMFxuICAgICAqIEBwYXJhbSB2MTEgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMVxuICAgICAqIEBwYXJhbSB2MTIgLSB2YWx1ZSBmb3IgZWxlbWVudCAxMlxuICAgICAqIEBwYXJhbSB2MTMgLSB2YWx1ZSBmb3IgZWxlbWVudCAxM1xuICAgICAqIEBwYXJhbSB2MTQgLSB2YWx1ZSBmb3IgZWxlbWVudCAxNFxuICAgICAqIEBwYXJhbSB2MTUgLSB2YWx1ZSBmb3IgZWxlbWVudCAxNVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0NCBjcmVhdGVkIGZyb20gdmFsdWVzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldCh2MCwgdjEsIHYyLCB2MywgdjQsIHY1LCB2NiwgdjcsIHY4LCB2OSwgdjEwLCB2MTEsIHYxMiwgdjEzLCB2MTQsIHYxNSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdjA7XG4gICAgICAgIG5ld0RzdFsxXSA9IHYxO1xuICAgICAgICBuZXdEc3RbMl0gPSB2MjtcbiAgICAgICAgbmV3RHN0WzNdID0gdjM7XG4gICAgICAgIG5ld0RzdFs0XSA9IHY0O1xuICAgICAgICBuZXdEc3RbNV0gPSB2NTtcbiAgICAgICAgbmV3RHN0WzZdID0gdjY7XG4gICAgICAgIG5ld0RzdFs3XSA9IHY3O1xuICAgICAgICBuZXdEc3RbOF0gPSB2ODtcbiAgICAgICAgbmV3RHN0WzldID0gdjk7XG4gICAgICAgIG5ld0RzdFsxMF0gPSB2MTA7XG4gICAgICAgIG5ld0RzdFsxMV0gPSB2MTE7XG4gICAgICAgIG5ld0RzdFsxMl0gPSB2MTI7XG4gICAgICAgIG5ld0RzdFsxM10gPSB2MTM7XG4gICAgICAgIG5ld0RzdFsxNF0gPSB2MTQ7XG4gICAgICAgIG5ld0RzdFsxNV0gPSB2MTU7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNYXQ0IGZyb20gYSBNYXQzXG4gICAgICogQHBhcmFtIG0zIC0gc291cmNlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgTWF0NCBtYWRlIGZyb20gbTNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tTWF0MyhtMywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gbTNbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IG0zWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBtM1syXTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gbTNbNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IG0zWzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSBtM1s2XTtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gbTNbOF07XG4gICAgICAgIG5ld0RzdFs5XSA9IG0zWzldO1xuICAgICAgICBuZXdEc3RbMTBdID0gbTNbMTBdO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBNYXQ0IHJvdGF0aW9uIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIE1hdDQgbWFkZSBmcm9tIHFcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmcm9tUXVhdChxLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCB4ID0gcVswXTtcbiAgICAgICAgY29uc3QgeSA9IHFbMV07XG4gICAgICAgIGNvbnN0IHogPSBxWzJdO1xuICAgICAgICBjb25zdCB3ID0gcVszXTtcbiAgICAgICAgY29uc3QgeDIgPSB4ICsgeDtcbiAgICAgICAgY29uc3QgeTIgPSB5ICsgeTtcbiAgICAgICAgY29uc3QgejIgPSB6ICsgejtcbiAgICAgICAgY29uc3QgeHggPSB4ICogeDI7XG4gICAgICAgIGNvbnN0IHl4ID0geSAqIHgyO1xuICAgICAgICBjb25zdCB5eSA9IHkgKiB5MjtcbiAgICAgICAgY29uc3QgenggPSB6ICogeDI7XG4gICAgICAgIGNvbnN0IHp5ID0geiAqIHkyO1xuICAgICAgICBjb25zdCB6eiA9IHogKiB6MjtcbiAgICAgICAgY29uc3Qgd3ggPSB3ICogeDI7XG4gICAgICAgIGNvbnN0IHd5ID0gdyAqIHkyO1xuICAgICAgICBjb25zdCB3eiA9IHcgKiB6MjtcbiAgICAgICAgbmV3RHN0WzBdID0gMSAtIHl5IC0geno7XG4gICAgICAgIG5ld0RzdFsxXSA9IHl4ICsgd3o7XG4gICAgICAgIG5ld0RzdFsyXSA9IHp4IC0gd3k7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IHl4IC0gd3o7XG4gICAgICAgIG5ld0RzdFs1XSA9IDEgLSB4eCAtIHp6O1xuICAgICAgICBuZXdEc3RbNl0gPSB6eSArIHd4O1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB6eCArIHd5O1xuICAgICAgICBuZXdEc3RbOV0gPSB6eSAtIHd4O1xuICAgICAgICBuZXdEc3RbMTBdID0gMSAtIHh4IC0geXk7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyBhIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyAtbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZWdhdGUobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLW1bMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC1tWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAtbVsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gLW1bM107XG4gICAgICAgIG5ld0RzdFs0XSA9IC1tWzRdO1xuICAgICAgICBuZXdEc3RbNV0gPSAtbVs1XTtcbiAgICAgICAgbmV3RHN0WzZdID0gLW1bNl07XG4gICAgICAgIG5ld0RzdFs3XSA9IC1tWzddO1xuICAgICAgICBuZXdEc3RbOF0gPSAtbVs4XTtcbiAgICAgICAgbmV3RHN0WzldID0gLW1bOV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSAtbVsxMF07XG4gICAgICAgIG5ld0RzdFsxMV0gPSAtbVsxMV07XG4gICAgICAgIG5ld0RzdFsxMl0gPSAtbVsxMl07XG4gICAgICAgIG5ld0RzdFsxM10gPSAtbVsxM107XG4gICAgICAgIG5ld0RzdFsxNF0gPSAtbVsxNF07XG4gICAgICAgIG5ld0RzdFsxNV0gPSAtbVsxNV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGFkZCAyIG1hdHJpY2VzLlxuICAgICAqIEBwYXJhbSBhIC0gbWF0cml4IDEuXG4gICAgICogQHBhcmFtIGIgLSBtYXRyaXggMi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIGEgKyBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSArIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKyBiWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgYlszXTtcbiAgICAgICAgbmV3RHN0WzRdID0gYVs0XSArIGJbNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IGFbNV0gKyBiWzVdO1xuICAgICAgICBuZXdEc3RbNl0gPSBhWzZdICsgYls2XTtcbiAgICAgICAgbmV3RHN0WzddID0gYVs3XSArIGJbN107XG4gICAgICAgIG5ld0RzdFs4XSA9IGFbOF0gKyBiWzhdO1xuICAgICAgICBuZXdEc3RbOV0gPSBhWzldICsgYls5XTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gICAgICAgIG5ld0RzdFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICAgICAgICBuZXdEc3RbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gICAgICAgIG5ld0RzdFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICAgICAgICBuZXdEc3RbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIG1hdHJpeCBieSBhIHNjYWxhclxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gcyAtIFRoZSBzY2FsYXJcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIG0gKiBzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG0sIHMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMF0gKiBzO1xuICAgICAgICBuZXdEc3RbMV0gPSBtWzFdICogcztcbiAgICAgICAgbmV3RHN0WzJdID0gbVsyXSAqIHM7XG4gICAgICAgIG5ld0RzdFszXSA9IG1bM10gKiBzO1xuICAgICAgICBuZXdEc3RbNF0gPSBtWzRdICogcztcbiAgICAgICAgbmV3RHN0WzVdID0gbVs1XSAqIHM7XG4gICAgICAgIG5ld0RzdFs2XSA9IG1bNl0gKiBzO1xuICAgICAgICBuZXdEc3RbN10gPSBtWzddICogcztcbiAgICAgICAgbmV3RHN0WzhdID0gbVs4XSAqIHM7XG4gICAgICAgIG5ld0RzdFs5XSA9IG1bOV0gKiBzO1xuICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF0gKiBzO1xuICAgICAgICBuZXdEc3RbMTFdID0gbVsxMV0gKiBzO1xuICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl0gKiBzO1xuICAgICAgICBuZXdEc3RbMTNdID0gbVsxM10gKiBzO1xuICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF0gKiBzO1xuICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV0gKiBzO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgbWF0cml4IGJ5IGEgc2NhbGFyXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBzIC0gVGhlIHNjYWxhclxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgbSAqIHMuXG4gICAgICovXG4gICAgY29uc3QgbXVsU2NhbGFyID0gbXVsdGlwbHlTY2FsYXI7XG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgbWF0cml4LiAoc2FtZSBhcyB7QGxpbmsgbWF0NC5jbG9uZX0pXG4gICAgICogQWxzbyBzZWUge0BsaW5rIG1hdDQuY3JlYXRlfSBhbmQge0BsaW5rIG1hdDQuc2V0fVxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gVGhlIG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb3B5KG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IG1bMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IG1bMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IG1bMl07XG4gICAgICAgIG5ld0RzdFszXSA9IG1bM107XG4gICAgICAgIG5ld0RzdFs0XSA9IG1bNF07XG4gICAgICAgIG5ld0RzdFs1XSA9IG1bNV07XG4gICAgICAgIG5ld0RzdFs2XSA9IG1bNl07XG4gICAgICAgIG5ld0RzdFs3XSA9IG1bN107XG4gICAgICAgIG5ld0RzdFs4XSA9IG1bOF07XG4gICAgICAgIG5ld0RzdFs5XSA9IG1bOV07XG4gICAgICAgIG5ld0RzdFsxMF0gPSBtWzEwXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IG1bMTFdO1xuICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl07XG4gICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IG1bMTRdO1xuICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIG1hdHJpeCAoc2FtZSBhcyB7QGxpbmsgbWF0NC5jb3B5fSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgbWF0NC5jcmVhdGV9IGFuZCB7QGxpbmsgbWF0NC5zZXR9XG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBUaGUgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgY29weSBvZiBtLlxuICAgICAqL1xuICAgIGNvbnN0IGNsb25lID0gY29weTtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIG1hdHJpY2VzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgbWF0cmljZXMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHNBcHByb3hpbWF0ZWx5KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFbMF0gLSBiWzBdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMV0gLSBiWzFdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMl0gLSBiWzJdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbM10gLSBiWzNdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNF0gLSBiWzRdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNV0gLSBiWzVdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbNl0gLSBiWzZdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbN10gLSBiWzddKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbOF0gLSBiWzhdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbOV0gLSBiWzldKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMTBdIC0gYlsxMF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxMV0gLSBiWzExXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzEyXSAtIGJbMTJdKSA8IEVQU0lMT04gJiZcbiAgICAgICAgICAgIE1hdGguYWJzKGFbMTNdIC0gYlsxM10pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxNF0gLSBiWzE0XSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzE1XSAtIGJbMTVdKSA8IEVQU0lMT047XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgbWF0cmljZXMgYXJlIGV4YWN0bHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgbWF0cml4LlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBtYXRyaXguXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBtYXRyaWNlcyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmXG4gICAgICAgICAgICBhWzFdID09PSBiWzFdICYmXG4gICAgICAgICAgICBhWzJdID09PSBiWzJdICYmXG4gICAgICAgICAgICBhWzNdID09PSBiWzNdICYmXG4gICAgICAgICAgICBhWzRdID09PSBiWzRdICYmXG4gICAgICAgICAgICBhWzVdID09PSBiWzVdICYmXG4gICAgICAgICAgICBhWzZdID09PSBiWzZdICYmXG4gICAgICAgICAgICBhWzddID09PSBiWzddICYmXG4gICAgICAgICAgICBhWzhdID09PSBiWzhdICYmXG4gICAgICAgICAgICBhWzldID09PSBiWzldICYmXG4gICAgICAgICAgICBhWzEwXSA9PT0gYlsxMF0gJiZcbiAgICAgICAgICAgIGFbMTFdID09PSBiWzExXSAmJlxuICAgICAgICAgICAgYVsxMl0gPT09IGJbMTJdICYmXG4gICAgICAgICAgICBhWzEzXSA9PT0gYlsxM10gJiZcbiAgICAgICAgICAgIGFbMTRdID09PSBiWzE0XSAmJlxuICAgICAgICAgICAgYVsxNV0gPT09IGJbMTVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IGlkZW50aXR5IG1hdHJpeC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSA0LWJ5LTQgaWRlbnRpdHkgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlkZW50aXR5KGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSB0cmFuc3Bvc2Ugb2YgYSBtYXRyaXguXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zcG9zZSBvZiBtLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRyYW5zcG9zZShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBpZiAobmV3RHN0ID09PSBtKSB7XG4gICAgICAgICAgICBsZXQgdDtcbiAgICAgICAgICAgIHQgPSBtWzFdO1xuICAgICAgICAgICAgbVsxXSA9IG1bNF07XG4gICAgICAgICAgICBtWzRdID0gdDtcbiAgICAgICAgICAgIHQgPSBtWzJdO1xuICAgICAgICAgICAgbVsyXSA9IG1bOF07XG4gICAgICAgICAgICBtWzhdID0gdDtcbiAgICAgICAgICAgIHQgPSBtWzNdO1xuICAgICAgICAgICAgbVszXSA9IG1bMTJdO1xuICAgICAgICAgICAgbVsxMl0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bNl07XG4gICAgICAgICAgICBtWzZdID0gbVs5XTtcbiAgICAgICAgICAgIG1bOV0gPSB0O1xuICAgICAgICAgICAgdCA9IG1bN107XG4gICAgICAgICAgICBtWzddID0gbVsxM107XG4gICAgICAgICAgICBtWzEzXSA9IHQ7XG4gICAgICAgICAgICB0ID0gbVsxMV07XG4gICAgICAgICAgICBtWzExXSA9IG1bMTRdO1xuICAgICAgICAgICAgbVsxNF0gPSB0O1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIzID0gbVsyICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTMyID0gbVszICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgICAgIG5ld0RzdFswXSA9IG0wMDtcbiAgICAgICAgbmV3RHN0WzFdID0gbTEwO1xuICAgICAgICBuZXdEc3RbMl0gPSBtMjA7XG4gICAgICAgIG5ld0RzdFszXSA9IG0zMDtcbiAgICAgICAgbmV3RHN0WzRdID0gbTAxO1xuICAgICAgICBuZXdEc3RbNV0gPSBtMTE7XG4gICAgICAgIG5ld0RzdFs2XSA9IG0yMTtcbiAgICAgICAgbmV3RHN0WzddID0gbTMxO1xuICAgICAgICBuZXdEc3RbOF0gPSBtMDI7XG4gICAgICAgIG5ld0RzdFs5XSA9IG0xMjtcbiAgICAgICAgbmV3RHN0WzEwXSA9IG0yMjtcbiAgICAgICAgbmV3RHN0WzExXSA9IG0zMjtcbiAgICAgICAgbmV3RHN0WzEyXSA9IG0wMztcbiAgICAgICAgbmV3RHN0WzEzXSA9IG0xMztcbiAgICAgICAgbmV3RHN0WzE0XSA9IG0yMztcbiAgICAgICAgbmV3RHN0WzE1XSA9IG0zMztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSA0LWJ5LTQgbWF0cml4LlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnNlIG9mIG0uXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52ZXJzZShtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzAgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVswICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMDMgPSBtWzAgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTExID0gbVsxICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzEgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIzID0gbVsyICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMzAgPSBtWzMgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTMyID0gbVszICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMzMgPSBtWzMgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IHRtcDAgPSBtMjIgKiBtMzM7XG4gICAgICAgIGNvbnN0IHRtcDEgPSBtMzIgKiBtMjM7XG4gICAgICAgIGNvbnN0IHRtcDIgPSBtMTIgKiBtMzM7XG4gICAgICAgIGNvbnN0IHRtcDMgPSBtMzIgKiBtMTM7XG4gICAgICAgIGNvbnN0IHRtcDQgPSBtMTIgKiBtMjM7XG4gICAgICAgIGNvbnN0IHRtcDUgPSBtMjIgKiBtMTM7XG4gICAgICAgIGNvbnN0IHRtcDYgPSBtMDIgKiBtMzM7XG4gICAgICAgIGNvbnN0IHRtcDcgPSBtMzIgKiBtMDM7XG4gICAgICAgIGNvbnN0IHRtcDggPSBtMDIgKiBtMjM7XG4gICAgICAgIGNvbnN0IHRtcDkgPSBtMjIgKiBtMDM7XG4gICAgICAgIGNvbnN0IHRtcDEwID0gbTAyICogbTEzO1xuICAgICAgICBjb25zdCB0bXAxMSA9IG0xMiAqIG0wMztcbiAgICAgICAgY29uc3QgdG1wMTIgPSBtMjAgKiBtMzE7XG4gICAgICAgIGNvbnN0IHRtcDEzID0gbTMwICogbTIxO1xuICAgICAgICBjb25zdCB0bXAxNCA9IG0xMCAqIG0zMTtcbiAgICAgICAgY29uc3QgdG1wMTUgPSBtMzAgKiBtMTE7XG4gICAgICAgIGNvbnN0IHRtcDE2ID0gbTEwICogbTIxO1xuICAgICAgICBjb25zdCB0bXAxNyA9IG0yMCAqIG0xMTtcbiAgICAgICAgY29uc3QgdG1wMTggPSBtMDAgKiBtMzE7XG4gICAgICAgIGNvbnN0IHRtcDE5ID0gbTMwICogbTAxO1xuICAgICAgICBjb25zdCB0bXAyMCA9IG0wMCAqIG0yMTtcbiAgICAgICAgY29uc3QgdG1wMjEgPSBtMjAgKiBtMDE7XG4gICAgICAgIGNvbnN0IHRtcDIyID0gbTAwICogbTExO1xuICAgICAgICBjb25zdCB0bXAyMyA9IG0xMCAqIG0wMTtcbiAgICAgICAgY29uc3QgdDAgPSAodG1wMCAqIG0xMSArIHRtcDMgKiBtMjEgKyB0bXA0ICogbTMxKSAtXG4gICAgICAgICAgICAodG1wMSAqIG0xMSArIHRtcDIgKiBtMjEgKyB0bXA1ICogbTMxKTtcbiAgICAgICAgY29uc3QgdDEgPSAodG1wMSAqIG0wMSArIHRtcDYgKiBtMjEgKyB0bXA5ICogbTMxKSAtXG4gICAgICAgICAgICAodG1wMCAqIG0wMSArIHRtcDcgKiBtMjEgKyB0bXA4ICogbTMxKTtcbiAgICAgICAgY29uc3QgdDIgPSAodG1wMiAqIG0wMSArIHRtcDcgKiBtMTEgKyB0bXAxMCAqIG0zMSkgLVxuICAgICAgICAgICAgKHRtcDMgKiBtMDEgKyB0bXA2ICogbTExICsgdG1wMTEgKiBtMzEpO1xuICAgICAgICBjb25zdCB0MyA9ICh0bXA1ICogbTAxICsgdG1wOCAqIG0xMSArIHRtcDExICogbTIxKSAtXG4gICAgICAgICAgICAodG1wNCAqIG0wMSArIHRtcDkgKiBtMTEgKyB0bXAxMCAqIG0yMSk7XG4gICAgICAgIGNvbnN0IGQgPSAxIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcbiAgICAgICAgbmV3RHN0WzBdID0gZCAqIHQwO1xuICAgICAgICBuZXdEc3RbMV0gPSBkICogdDE7XG4gICAgICAgIG5ld0RzdFsyXSA9IGQgKiB0MjtcbiAgICAgICAgbmV3RHN0WzNdID0gZCAqIHQzO1xuICAgICAgICBuZXdEc3RbNF0gPSBkICogKCh0bXAxICogbTEwICsgdG1wMiAqIG0yMCArIHRtcDUgKiBtMzApIC1cbiAgICAgICAgICAgICh0bXAwICogbTEwICsgdG1wMyAqIG0yMCArIHRtcDQgKiBtMzApKTtcbiAgICAgICAgbmV3RHN0WzVdID0gZCAqICgodG1wMCAqIG0wMCArIHRtcDcgKiBtMjAgKyB0bXA4ICogbTMwKSAtXG4gICAgICAgICAgICAodG1wMSAqIG0wMCArIHRtcDYgKiBtMjAgKyB0bXA5ICogbTMwKSk7XG4gICAgICAgIG5ld0RzdFs2XSA9IGQgKiAoKHRtcDMgKiBtMDAgKyB0bXA2ICogbTEwICsgdG1wMTEgKiBtMzApIC1cbiAgICAgICAgICAgICh0bXAyICogbTAwICsgdG1wNyAqIG0xMCArIHRtcDEwICogbTMwKSk7XG4gICAgICAgIG5ld0RzdFs3XSA9IGQgKiAoKHRtcDQgKiBtMDAgKyB0bXA5ICogbTEwICsgdG1wMTAgKiBtMjApIC1cbiAgICAgICAgICAgICh0bXA1ICogbTAwICsgdG1wOCAqIG0xMCArIHRtcDExICogbTIwKSk7XG4gICAgICAgIG5ld0RzdFs4XSA9IGQgKiAoKHRtcDEyICogbTEzICsgdG1wMTUgKiBtMjMgKyB0bXAxNiAqIG0zMykgLVxuICAgICAgICAgICAgKHRtcDEzICogbTEzICsgdG1wMTQgKiBtMjMgKyB0bXAxNyAqIG0zMykpO1xuICAgICAgICBuZXdEc3RbOV0gPSBkICogKCh0bXAxMyAqIG0wMyArIHRtcDE4ICogbTIzICsgdG1wMjEgKiBtMzMpIC1cbiAgICAgICAgICAgICh0bXAxMiAqIG0wMyArIHRtcDE5ICogbTIzICsgdG1wMjAgKiBtMzMpKTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGQgKiAoKHRtcDE0ICogbTAzICsgdG1wMTkgKiBtMTMgKyB0bXAyMiAqIG0zMykgLVxuICAgICAgICAgICAgKHRtcDE1ICogbTAzICsgdG1wMTggKiBtMTMgKyB0bXAyMyAqIG0zMykpO1xuICAgICAgICBuZXdEc3RbMTFdID0gZCAqICgodG1wMTcgKiBtMDMgKyB0bXAyMCAqIG0xMyArIHRtcDIzICogbTIzKSAtXG4gICAgICAgICAgICAodG1wMTYgKiBtMDMgKyB0bXAyMSAqIG0xMyArIHRtcDIyICogbTIzKSk7XG4gICAgICAgIG5ld0RzdFsxMl0gPSBkICogKCh0bXAxNCAqIG0yMiArIHRtcDE3ICogbTMyICsgdG1wMTMgKiBtMTIpIC1cbiAgICAgICAgICAgICh0bXAxNiAqIG0zMiArIHRtcDEyICogbTEyICsgdG1wMTUgKiBtMjIpKTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IGQgKiAoKHRtcDIwICogbTMyICsgdG1wMTIgKiBtMDIgKyB0bXAxOSAqIG0yMikgLVxuICAgICAgICAgICAgKHRtcDE4ICogbTIyICsgdG1wMjEgKiBtMzIgKyB0bXAxMyAqIG0wMikpO1xuICAgICAgICBuZXdEc3RbMTRdID0gZCAqICgodG1wMTggKiBtMTIgKyB0bXAyMyAqIG0zMiArIHRtcDE1ICogbTAyKSAtXG4gICAgICAgICAgICAodG1wMjIgKiBtMzIgKyB0bXAxNCAqIG0wMiArIHRtcDE5ICogbTEyKSk7XG4gICAgICAgIG5ld0RzdFsxNV0gPSBkICogKCh0bXAyMiAqIG0yMiArIHRtcDE2ICogbTAyICsgdG1wMjEgKiBtMTIpIC1cbiAgICAgICAgICAgICh0bXAyMCAqIG0xMiArIHRtcDIzICogbTIyICsgdG1wMTcgKiBtMDIpKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAgICAgKiBAcGFyYW0gbSAtIHRoZSBtYXRyaXhcbiAgICAgKiBAcmV0dXJucyB0aGUgZGV0ZXJtaW5hbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZXRlcm1pbmFudChtKSB7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgdG1wMCA9IG0yMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wMSA9IG0zMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wMiA9IG0xMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wMyA9IG0zMiAqIG0xMztcbiAgICAgICAgY29uc3QgdG1wNCA9IG0xMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wNSA9IG0yMiAqIG0xMztcbiAgICAgICAgY29uc3QgdG1wNiA9IG0wMiAqIG0zMztcbiAgICAgICAgY29uc3QgdG1wNyA9IG0zMiAqIG0wMztcbiAgICAgICAgY29uc3QgdG1wOCA9IG0wMiAqIG0yMztcbiAgICAgICAgY29uc3QgdG1wOSA9IG0yMiAqIG0wMztcbiAgICAgICAgY29uc3QgdG1wMTAgPSBtMDIgKiBtMTM7XG4gICAgICAgIGNvbnN0IHRtcDExID0gbTEyICogbTAzO1xuICAgICAgICBjb25zdCB0MCA9ICh0bXAwICogbTExICsgdG1wMyAqIG0yMSArIHRtcDQgKiBtMzEpIC1cbiAgICAgICAgICAgICh0bXAxICogbTExICsgdG1wMiAqIG0yMSArIHRtcDUgKiBtMzEpO1xuICAgICAgICBjb25zdCB0MSA9ICh0bXAxICogbTAxICsgdG1wNiAqIG0yMSArIHRtcDkgKiBtMzEpIC1cbiAgICAgICAgICAgICh0bXAwICogbTAxICsgdG1wNyAqIG0yMSArIHRtcDggKiBtMzEpO1xuICAgICAgICBjb25zdCB0MiA9ICh0bXAyICogbTAxICsgdG1wNyAqIG0xMSArIHRtcDEwICogbTMxKSAtXG4gICAgICAgICAgICAodG1wMyAqIG0wMSArIHRtcDYgKiBtMTEgKyB0bXAxMSAqIG0zMSk7XG4gICAgICAgIGNvbnN0IHQzID0gKHRtcDUgKiBtMDEgKyB0bXA4ICogbTExICsgdG1wMTEgKiBtMjEpIC1cbiAgICAgICAgICAgICh0bXA0ICogbTAxICsgdG1wOSAqIG0xMSArIHRtcDEwICogbTIxKTtcbiAgICAgICAgcmV0dXJuIG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDQtYnktNCBtYXRyaXguIChzYW1lIGFzIGludmVyc2UpXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVyc2Ugb2YgbS5cbiAgICAgKi9cbiAgICBjb25zdCBpbnZlcnQgPSBpbnZlcnNlO1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdHdvIDQtYnktNCBtYXRyaWNlcyB3aXRoIGEgb24gdGhlIGxlZnQgYW5kIGIgb24gdGhlIHJpZ2h0XG4gICAgICogQHBhcmFtIGEgLSBUaGUgbWF0cml4IG9uIHRoZSBsZWZ0LlxuICAgICAqIEBwYXJhbSBiIC0gVGhlIG1hdHJpeCBvbiB0aGUgcmlnaHQuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBhMDAgPSBhWzBdO1xuICAgICAgICBjb25zdCBhMDEgPSBhWzFdO1xuICAgICAgICBjb25zdCBhMDIgPSBhWzJdO1xuICAgICAgICBjb25zdCBhMDMgPSBhWzNdO1xuICAgICAgICBjb25zdCBhMTAgPSBhWzQgKyAwXTtcbiAgICAgICAgY29uc3QgYTExID0gYVs0ICsgMV07XG4gICAgICAgIGNvbnN0IGExMiA9IGFbNCArIDJdO1xuICAgICAgICBjb25zdCBhMTMgPSBhWzQgKyAzXTtcbiAgICAgICAgY29uc3QgYTIwID0gYVs4ICsgMF07XG4gICAgICAgIGNvbnN0IGEyMSA9IGFbOCArIDFdO1xuICAgICAgICBjb25zdCBhMjIgPSBhWzggKyAyXTtcbiAgICAgICAgY29uc3QgYTIzID0gYVs4ICsgM107XG4gICAgICAgIGNvbnN0IGEzMCA9IGFbMTIgKyAwXTtcbiAgICAgICAgY29uc3QgYTMxID0gYVsxMiArIDFdO1xuICAgICAgICBjb25zdCBhMzIgPSBhWzEyICsgMl07XG4gICAgICAgIGNvbnN0IGEzMyA9IGFbMTIgKyAzXTtcbiAgICAgICAgY29uc3QgYjAwID0gYlswXTtcbiAgICAgICAgY29uc3QgYjAxID0gYlsxXTtcbiAgICAgICAgY29uc3QgYjAyID0gYlsyXTtcbiAgICAgICAgY29uc3QgYjAzID0gYlszXTtcbiAgICAgICAgY29uc3QgYjEwID0gYls0ICsgMF07XG4gICAgICAgIGNvbnN0IGIxMSA9IGJbNCArIDFdO1xuICAgICAgICBjb25zdCBiMTIgPSBiWzQgKyAyXTtcbiAgICAgICAgY29uc3QgYjEzID0gYls0ICsgM107XG4gICAgICAgIGNvbnN0IGIyMCA9IGJbOCArIDBdO1xuICAgICAgICBjb25zdCBiMjEgPSBiWzggKyAxXTtcbiAgICAgICAgY29uc3QgYjIyID0gYls4ICsgMl07XG4gICAgICAgIGNvbnN0IGIyMyA9IGJbOCArIDNdO1xuICAgICAgICBjb25zdCBiMzAgPSBiWzEyICsgMF07XG4gICAgICAgIGNvbnN0IGIzMSA9IGJbMTIgKyAxXTtcbiAgICAgICAgY29uc3QgYjMyID0gYlsxMiArIDJdO1xuICAgICAgICBjb25zdCBiMzMgPSBiWzEyICsgM107XG4gICAgICAgIG5ld0RzdFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMiArIGEzMCAqIGIwMztcbiAgICAgICAgbmV3RHN0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyICsgYTMxICogYjAzO1xuICAgICAgICBuZXdEc3RbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDIgKyBhMzIgKiBiMDM7XG4gICAgICAgIG5ld0RzdFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMiArIGEzMyAqIGIwMztcbiAgICAgICAgbmV3RHN0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyICsgYTMwICogYjEzO1xuICAgICAgICBuZXdEc3RbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTIgKyBhMzEgKiBiMTM7XG4gICAgICAgIG5ld0RzdFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMiArIGEzMiAqIGIxMztcbiAgICAgICAgbmV3RHN0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyICsgYTMzICogYjEzO1xuICAgICAgICBuZXdEc3RbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjIgKyBhMzAgKiBiMjM7XG4gICAgICAgIG5ld0RzdFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMiArIGEzMSAqIGIyMztcbiAgICAgICAgbmV3RHN0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMiArIGEzMiAqIGIyMztcbiAgICAgICAgbmV3RHN0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMiArIGEzMyAqIGIyMztcbiAgICAgICAgbmV3RHN0WzEyXSA9IGEwMCAqIGIzMCArIGExMCAqIGIzMSArIGEyMCAqIGIzMiArIGEzMCAqIGIzMztcbiAgICAgICAgbmV3RHN0WzEzXSA9IGEwMSAqIGIzMCArIGExMSAqIGIzMSArIGEyMSAqIGIzMiArIGEzMSAqIGIzMztcbiAgICAgICAgbmV3RHN0WzE0XSA9IGEwMiAqIGIzMCArIGExMiAqIGIzMSArIGEyMiAqIGIzMiArIGEzMiAqIGIzMztcbiAgICAgICAgbmV3RHN0WzE1XSA9IGEwMyAqIGIzMCArIGExMyAqIGIzMSArIGEyMyAqIGIzMiArIGEzMyAqIGIzMztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gNC1ieS00IG1hdHJpY2VzIHdpdGggYSBvbiB0aGUgbGVmdCBhbmQgYiBvbiB0aGUgcmlnaHQgKHNhbWUgYXMgbXVsdGlwbHkpXG4gICAgICogQHBhcmFtIGEgLSBUaGUgbWF0cml4IG9uIHRoZSBsZWZ0LlxuICAgICAqIEBwYXJhbSBiIC0gVGhlIG1hdHJpeCBvbiB0aGUgcmlnaHQuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBjb25zdCBtdWwgPSBtdWx0aXBseTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSA0LWJ5LTQgbWF0cml4IHRvIHRoZSBnaXZlblxuICAgICAqIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG1hdHJpeCB3aXRoIHRyYW5zbGF0aW9uIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGlvbihhLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBpZGVudGl0eSgpKTtcbiAgICAgICAgaWYgKGEgIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gYVswXTtcbiAgICAgICAgICAgIG5ld0RzdFsxXSA9IGFbMV07XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBhWzJdO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gYVszXTtcbiAgICAgICAgICAgIG5ld0RzdFs0XSA9IGFbNF07XG4gICAgICAgICAgICBuZXdEc3RbNV0gPSBhWzVdO1xuICAgICAgICAgICAgbmV3RHN0WzZdID0gYVs2XTtcbiAgICAgICAgICAgIG5ld0RzdFs3XSA9IGFbN107XG4gICAgICAgICAgICBuZXdEc3RbOF0gPSBhWzhdO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gYVs5XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSBhWzEwXTtcbiAgICAgICAgICAgIG5ld0RzdFsxMV0gPSBhWzExXTtcbiAgICAgICAgfVxuICAgICAgICBuZXdEc3RbMTJdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFsxNF0gPSB2WzJdO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLy8vKipcbiAgICAvLyAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzXG4gICAgLy8gKiBlbnRyaWVzLlxuICAgIC8vICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgIC8vICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAvLyAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgbS5cbiAgICAvLyAqL1xuICAgIGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG0sIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzMuY3JlYXRlKCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBtWzEyXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVsxM107XG4gICAgICAgIG5ld0RzdFsyXSA9IG1bMTRdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGF4aXMgb2YgYSA0eDQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXMgMCA9IHgsIDEgPSB5LCAyID0gejtcbiAgICAgKiBAcmV0dXJucyBUaGUgYXhpcyBjb21wb25lbnQgb2YgbS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRBeGlzKG0sIGF4aXMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzMuY3JlYXRlKCkpO1xuICAgICAgICBjb25zdCBvZmYgPSBheGlzICogNDtcbiAgICAgICAgbmV3RHN0WzBdID0gbVtvZmYgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gbVtvZmYgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gbVtvZmYgKyAyXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBheGlzIG9mIGEgNHg0IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllc1xuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeC5cbiAgICAgKiBAcGFyYW0gdiAtIHRoZSBheGlzIHZlY3RvclxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXMgIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSBtYXRyaXggdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXRyaXggd2l0aCBheGlzIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBeGlzKG0sIHYsIGF4aXMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID09PSBtKSA/IGRzdCA6IGNvcHkobSwgZHN0KTtcbiAgICAgICAgY29uc3Qgb2ZmID0gYXhpcyAqIDQ7XG4gICAgICAgIG5ld0RzdFtvZmYgKyAwXSA9IHZbMF07XG4gICAgICAgIG5ld0RzdFtvZmYgKyAxXSA9IHZbMV07XG4gICAgICAgIG5ld0RzdFtvZmYgKyAyXSA9IHZbMl07XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFwiM2RcIiBzY2FsaW5nIGNvbXBvbmVudCBvZiB0aGUgbWF0cml4XG4gICAgICogQHBhcmFtIG0gLSBUaGUgTWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIFRoZSB2ZWN0b3IgdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFNjYWxpbmcobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gdmVjMy5jcmVhdGUoKSk7XG4gICAgICAgIGNvbnN0IHh4ID0gbVswXTtcbiAgICAgICAgY29uc3QgeHkgPSBtWzFdO1xuICAgICAgICBjb25zdCB4eiA9IG1bMl07XG4gICAgICAgIGNvbnN0IHl4ID0gbVs0XTtcbiAgICAgICAgY29uc3QgeXkgPSBtWzVdO1xuICAgICAgICBjb25zdCB5eiA9IG1bNl07XG4gICAgICAgIGNvbnN0IHp4ID0gbVs4XTtcbiAgICAgICAgY29uc3QgenkgPSBtWzldO1xuICAgICAgICBjb25zdCB6eiA9IG1bMTBdO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLnNxcnQoeHggKiB4eCArIHh5ICogeHkgKyB4eiAqIHh6KTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5zcXJ0KHl4ICogeXggKyB5eSAqIHl5ICsgeXogKiB5eik7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGguc3FydCh6eCAqIHp4ICsgenkgKiB6eSArIHp6ICogenopO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGFuZ3VsYXIgaGVpZ2h0XG4gICAgICogb2YgdGhlIGZydXN0dW0sIHRoZSBhc3BlY3QgcmF0aW8sIGFuZCB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIFRoZVxuICAgICAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAgICAgKiBhbmdsZSBpcyB0aGUgdmVydGljYWwgYW5nbGUgb2YgdGhlIGZydXN0dW0sIGFuZCB0aGUgaG9yaXpvbnRhbCBhbmdsZSBpc1xuICAgICAqIGRldGVybWluZWQgdG8gcHJvZHVjZSB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLiAgVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlXG4gICAgICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAgICAgKiBhcmUgbm90IHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZVxuICAgICAqIHotYXhpcy4gIFRoZSBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LlxuICAgICAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAgICAgKiBmcm9tIDAgdG8gMSBpbiB0aGUgeiBkaW1lbnNpb24uXG4gICAgICpcbiAgICAgKiBOb3RlOiBJZiB5b3UgcGFzcyBgSW5maW5pdHlgIGZvciB6RmFyIHRoZW4gaXQgd2lsbCBwcm9kdWNlIGEgcHJvamVjdGlvbiBtYXRyaXhcbiAgICAgKiByZXR1cm5zIC1JbmZpbml0eSBmb3IgWiB3aGVuIHRyYW5zZm9ybWluZyBjb29yZGluYXRlcyB3aXRoIFogPD0gMCBhbmQgK0luZmluaXR5IGZvciBaXG4gICAgICogb3RoZXJ3aXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZpZWxkT2ZWaWV3WUluUmFkaWFucyAtIFRoZSBjYW1lcmEgYW5nbGUgZnJvbSB0b3AgdG8gYm90dG9tIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gYXNwZWN0IC0gVGhlIGFzcGVjdCByYXRpbyB3aWR0aCAvIGhlaWdodC5cbiAgICAgKiBAcGFyYW0gek5lYXIgLSBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAgICAgKiAgICAgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXG4gICAgICogQHBhcmFtIHpGYXIgLSBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAgICAgKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcGVyc3BlY3RpdmUoZmllbGRPZlZpZXdZSW5SYWRpYW5zLCBhc3BlY3QsIHpOZWFyLCB6RmFyLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3WUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGYgLyBhc3BlY3Q7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IGY7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAtMTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMDtcbiAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh6RmFyKSkge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VJbnYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gekZhciAqIHJhbmdlSW52O1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IHpGYXIgKiB6TmVhciAqIHJhbmdlSW52O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IC0xO1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IC16TmVhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCByZXZlcnNlLXogcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBhbmd1bGFyIGhlaWdodFxuICAgICAqIG9mIHRoZSBmcnVzdHVtLCB0aGUgYXNwZWN0IHJhdGlvLCBhbmQgdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBUaGVcbiAgICAgKiBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bSBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiAgVGhlIGdpdmVuXG4gICAgICogYW5nbGUgaXMgdGhlIHZlcnRpY2FsIGFuZ2xlIG9mIHRoZSBmcnVzdHVtLCBhbmQgdGhlIGhvcml6b250YWwgYW5nbGUgaXNcbiAgICAgKiBkZXRlcm1pbmVkIHRvIHByb2R1Y2UgdGhlIGdpdmVuIGFzcGVjdCByYXRpby4gIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZVxuICAgICAqIHRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBOb3RlIHRoYXQgbmVhciBhbmQgZmFyXG4gICAgICogYXJlIG5vdCB6IGNvb3JkaW5hdGVzLCBidXQgcmF0aGVyIHRoZXkgYXJlIGRpc3RhbmNlcyBhbG9uZyB0aGUgbmVnYXRpdmVcbiAgICAgKiB6LWF4aXMuICBUaGUgbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC5cbiAgICAgKiBXZSBhc3N1bWUgYSB1bml0IGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kXG4gICAgICogZnJvbSAxIChhdCAtek5lYXIpIHRvIDAgKGF0IC16RmFyKSBpbiB0aGUgeiBkaW1lbnNpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZmllbGRPZlZpZXdZSW5SYWRpYW5zIC0gVGhlIGNhbWVyYSBhbmdsZSBmcm9tIHRvcCB0byBib3R0b20gKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBhc3BlY3QgLSBUaGUgYXNwZWN0IHJhdGlvIHdpZHRoIC8gaGVpZ2h0LlxuICAgICAqIEBwYXJhbSB6TmVhciAtIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICAgICAqICAgICBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZS5cbiAgICAgKiBAcGFyYW0gekZhciAtIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICAgICAqICAgICBvZiB0aGUgZmFyIGNsaXBwaW5nIHBsYW5lLiAoZGVmYXVsdCA9IEluZmluaXR5KVxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cbiAgICAgKi8gZnVuY3Rpb24gcGVyc3BlY3RpdmVSZXZlcnNlWihmaWVsZE9mVmlld1lJblJhZGlhbnMsIGFzcGVjdCwgek5lYXIsIHpGYXIgPSBJbmZpbml0eSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgZiA9IDEgLyBNYXRoLnRhbihmaWVsZE9mVmlld1lJblJhZGlhbnMgKiAwLjUpO1xuICAgICAgICBuZXdEc3RbMF0gPSBmIC8gYXNwZWN0O1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBmO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTFdID0gLTE7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDA7XG4gICAgICAgIGlmICh6RmFyID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gek5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByYW5nZUludiA9IDEgLyAoekZhciAtIHpOZWFyKTtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSB6TmVhciAqIHJhbmdlSW52O1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IHpGYXIgKiB6TmVhciAqIHJhbmdlSW52O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IG9ydGhvZ29uYWwgdHJhbnNmb3JtYXRpb24gbWF0cml4IHRoYXQgdHJhbnNmb3JtcyBmcm9tXG4gICAgICogdGhlIGdpdmVuIHRoZSBsZWZ0LCByaWdodCwgYm90dG9tLCBhbmQgdG9wIGRpbWVuc2lvbnMgdG8gLTEgKzEgaW4geCwgYW5kIHlcbiAgICAgKiBhbmQgMCB0byArMSBpbiB6LlxuICAgICAqIEBwYXJhbSBsZWZ0IC0gTGVmdCBzaWRlIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICAgICAqIEBwYXJhbSByaWdodCAtIFJpZ2h0IHNpZGUgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gICAgICogQHBhcmFtIGJvdHRvbSAtIEJvdHRvbSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAgICAgKiBAcGFyYW0gdG9wIC0gVG9wIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICAgICAqIEBwYXJhbSBuZWFyIC0gVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gICAgICogICAgIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxuICAgICAqIEBwYXJhbSBmYXIgLSBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAgICAgKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gT3V0cHV0IG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgb3J0aG9ncmFwaGljIHByb2plY3Rpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9ydGhvKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDIgLyAodG9wIC0gYm90dG9tKTtcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gKHJpZ2h0ICsgbGVmdCkgLyAobGVmdCAtIHJpZ2h0KTtcbiAgICAgICAgbmV3RHN0WzEzXSA9ICh0b3AgKyBib3R0b20pIC8gKGJvdHRvbSAtIHRvcCk7XG4gICAgICAgIG5ld0RzdFsxNF0gPSBuZWFyIC8gKG5lYXIgLSBmYXIpO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBsZWZ0LCByaWdodCxcbiAgICAgKiB0b3AsIGJvdHRvbSwgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gVGhlIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtXG4gICAgICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICAgICAqIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gTm90ZSB0aGF0IG5lYXIgYW5kIGZhciBhcmUgbm90XG4gICAgICogeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlIHotYXhpcy4gVGhlXG4gICAgICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICAgICAqIGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kIGZyb20gMCB0byAxIGluIHRoZSB6XG4gICAgICogZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBsZWZ0IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSByaWdodCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIGJvdHRvbSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSB0b3AgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBuZWFyIC0gVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgbmVhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBmYXIgLSBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gT3V0cHV0IG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJ1c3R1bShsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgZHggPSAocmlnaHQgLSBsZWZ0KTtcbiAgICAgICAgY29uc3QgZHkgPSAodG9wIC0gYm90dG9tKTtcbiAgICAgICAgY29uc3QgZHogPSAobmVhciAtIGZhcik7XG4gICAgICAgIG5ld0RzdFswXSA9IDIgKiBuZWFyIC8gZHg7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDIgKiBuZWFyIC8gZHk7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IChsZWZ0ICsgcmlnaHQpIC8gZHg7XG4gICAgICAgIG5ld0RzdFs5XSA9ICh0b3AgKyBib3R0b20pIC8gZHk7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBmYXIgLyBkejtcbiAgICAgICAgbmV3RHN0WzExXSA9IC0xO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSBuZWFyICogZmFyIC8gZHo7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAwO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCByZXZlcnNlLXogcGVyc3BlY3RpdmUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBsZWZ0LCByaWdodCxcbiAgICAgKiB0b3AsIGJvdHRvbSwgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gVGhlIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtXG4gICAgICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICAgICAqIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gTm90ZSB0aGF0IG5lYXIgYW5kIGZhciBhcmUgbm90XG4gICAgICogeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlIHotYXhpcy4gVGhlXG4gICAgICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICAgICAqIGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kIGZyb20gMSAoLW5lYXIpIHRvIDAgKC1mYXIpIGluIHRoZSB6XG4gICAgICogZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBsZWZ0IC0gVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSByaWdodCAtIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gICAgICogQHBhcmFtIGJvdHRvbSAtIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSB0b3AgLSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBuZWFyIC0gVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgbmVhciBwbGFuZSBvZiB0aGUgYm94LlxuICAgICAqIEBwYXJhbSBmYXIgLSBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAgICAgKiBAcGFyYW0gZHN0IC0gT3V0cHV0IG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJ1c3R1bVJldmVyc2VaKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyID0gSW5maW5pdHksIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IGR4ID0gKHJpZ2h0IC0gbGVmdCk7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRvcCAtIGJvdHRvbSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDIgKiBuZWFyIC8gZHg7XG4gICAgICAgIG5ld0RzdFsxXSA9IDA7XG4gICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDIgKiBuZWFyIC8gZHk7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IChsZWZ0ICsgcmlnaHQpIC8gZHg7XG4gICAgICAgIG5ld0RzdFs5XSA9ICh0b3AgKyBib3R0b20pIC8gZHk7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAtMTtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMDtcbiAgICAgICAgaWYgKGZhciA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIG5ld0RzdFsxMF0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IG5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByYW5nZUludiA9IDEgLyAoZmFyIC0gbmVhcik7XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gbmVhciAqIHJhbmdlSW52O1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IGZhciAqIG5lYXIgKiByYW5nZUludjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICBjb25zdCB4QXhpcyA9IHZlYzMuY3JlYXRlKCk7XG4gICAgY29uc3QgeUF4aXMgPSB2ZWMzLmNyZWF0ZSgpO1xuICAgIGNvbnN0IHpBeGlzID0gdmVjMy5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyBhIDQtYnktNCBhaW0gdHJhbnNmb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGEgbWF0cml4IHdoaWNoIHBvc2l0aW9ucyBhbiBvYmplY3QgYWltaW5nIGRvd24gcG9zaXRpdmUgWi5cbiAgICAgKiB0b3dhcmQgdGhlIHRhcmdldC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHRoaXMgaXMgKipOT1QqKiB0aGUgaW52ZXJzZSBvZiBsb29rQXQgYXMgbG9va0F0IGxvb2tzIGF0IG5lZ2F0aXZlIFouXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IC0gVGhlIHBvc2l0aW9uIG1lYW50IHRvIGJlIGFpbWVkIGF0LlxuICAgICAqIEBwYXJhbSB1cCAtIEEgdmVjdG9yIHBvaW50aW5nIHVwLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGFpbSBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWltKHBvc2l0aW9uLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLnN1YnRyYWN0KHRhcmdldCwgcG9zaXRpb24sIHpBeGlzKSwgekF4aXMpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLmNyb3NzKHVwLCB6QXhpcywgeEF4aXMpLCB4QXhpcyk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuY3Jvc3MoekF4aXMsIHhBeGlzLCB5QXhpcyksIHlBeGlzKTtcbiAgICAgICAgbmV3RHN0WzBdID0geEF4aXNbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHhBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSB4QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0geUF4aXNbMF07XG4gICAgICAgIG5ld0RzdFs1XSA9IHlBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbNl0gPSB5QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gekF4aXNbMF07XG4gICAgICAgIG5ld0RzdFs5XSA9IHpBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbMTBdID0gekF4aXNbMl07XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gcG9zaXRpb25bMF07XG4gICAgICAgIG5ld0RzdFsxM10gPSBwb3NpdGlvblsxXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IHBvc2l0aW9uWzJdO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgYSA0LWJ5LTQgY2FtZXJhIGFpbSB0cmFuc2Zvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBtYXRyaXggd2hpY2ggcG9zaXRpb25zIGFuIG9iamVjdCBhaW1pbmcgZG93biBuZWdhdGl2ZSBaLlxuICAgICAqIHRvd2FyZCB0aGUgdGFyZ2V0LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBpcyB0aGUgaW52ZXJzZSBvZiBgbG9va0F0YFxuICAgICAqXG4gICAgICogQHBhcmFtIGV5ZSAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgcG9zaXRpb24gbWVhbnQgdG8gYmUgYWltZWQgYXQuXG4gICAgICogQHBhcmFtIHVwIC0gQSB2ZWN0b3IgcG9pbnRpbmcgdXAuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgYWltIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW1lcmFBaW0oZXllLCB0YXJnZXQsIHVwLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLnN1YnRyYWN0KGV5ZSwgdGFyZ2V0LCB6QXhpcyksIHpBeGlzKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUodmVjMy5jcm9zcyh1cCwgekF4aXMsIHhBeGlzKSwgeEF4aXMpO1xuICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh2ZWMzLmNyb3NzKHpBeGlzLCB4QXhpcywgeUF4aXMpLCB5QXhpcyk7XG4gICAgICAgIG5ld0RzdFswXSA9IHhBeGlzWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSB4QXhpc1sxXTtcbiAgICAgICAgbmV3RHN0WzJdID0geEF4aXNbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IHlBeGlzWzBdO1xuICAgICAgICBuZXdEc3RbNV0gPSB5QXhpc1sxXTtcbiAgICAgICAgbmV3RHN0WzZdID0geUF4aXNbMl07XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHpBeGlzWzBdO1xuICAgICAgICBuZXdEc3RbOV0gPSB6QXhpc1sxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHpBeGlzWzJdO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IGV5ZVswXTtcbiAgICAgICAgbmV3RHN0WzEzXSA9IGV5ZVsxXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IGV5ZVsyXTtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgNC1ieS00IHZpZXcgdHJhbnNmb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGEgdmlldyBtYXRyaXggd2hpY2ggdHJhbnNmb3JtcyBhbGwgb3RoZXIgb2JqZWN0c1xuICAgICAqIHRvIGJlIGluIHRoZSBzcGFjZSBvZiB0aGUgdmlldyBkZWZpbmVkIGJ5IHRoZSBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV5ZSAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YXJnZXQgLSBUaGUgcG9zaXRpb24gbWVhbnQgdG8gYmUgYWltZWQgYXQuXG4gICAgICogQHBhcmFtIHVwIC0gQSB2ZWN0b3IgcG9pbnRpbmcgdXAuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbG9vay1hdCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUodmVjMy5zdWJ0cmFjdChleWUsIHRhcmdldCwgekF4aXMpLCB6QXhpcyk7XG4gICAgICAgIHZlYzMubm9ybWFsaXplKHZlYzMuY3Jvc3ModXAsIHpBeGlzLCB4QXhpcyksIHhBeGlzKTtcbiAgICAgICAgdmVjMy5ub3JtYWxpemUodmVjMy5jcm9zcyh6QXhpcywgeEF4aXMsIHlBeGlzKSwgeUF4aXMpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4QXhpc1swXTtcbiAgICAgICAgbmV3RHN0WzFdID0geUF4aXNbMF07XG4gICAgICAgIG5ld0RzdFsyXSA9IHpBeGlzWzBdO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSB4QXhpc1sxXTtcbiAgICAgICAgbmV3RHN0WzVdID0geUF4aXNbMV07XG4gICAgICAgIG5ld0RzdFs2XSA9IHpBeGlzWzFdO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSB4QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzldID0geUF4aXNbMl07XG4gICAgICAgIG5ld0RzdFsxMF0gPSB6QXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAtKHhBeGlzWzBdICogZXllWzBdICsgeEF4aXNbMV0gKiBleWVbMV0gKyB4QXhpc1syXSAqIGV5ZVsyXSk7XG4gICAgICAgIG5ld0RzdFsxM10gPSAtKHlBeGlzWzBdICogZXllWzBdICsgeUF4aXNbMV0gKiBleWVbMV0gKyB5QXhpc1syXSAqIGV5ZVsyXSk7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAtKHpBeGlzWzBdICogZXllWzBdICsgekF4aXNbMV0gKiBleWVbMV0gKyB6QXhpc1syXSAqIGV5ZVsyXSk7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCB0cmFuc2xhdGVzIGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IgYnlcbiAgICAgKiAgICAgd2hpY2ggdG8gdHJhbnNsYXRlLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGlvbih2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSAxO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSAxO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gMTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMTNdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IHZbMl07XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yIGJ5XG4gICAgICogICAgIHdoaWNoIHRvIHRyYW5zbGF0ZS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2xhdGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUobSwgdiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgbTAwID0gbVswXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVsxXTtcbiAgICAgICAgY29uc3QgbTAyID0gbVsyXTtcbiAgICAgICAgY29uc3QgbTAzID0gbVszXTtcbiAgICAgICAgY29uc3QgbTEwID0gbVsxICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzEgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTEzID0gbVsxICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzIgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTIyID0gbVsyICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzIgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTMxID0gbVszICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMzIgPSBtWzMgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gbTAwO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gbTAxO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gbTAyO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gbTAzO1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gbTEwO1xuICAgICAgICAgICAgbmV3RHN0WzVdID0gbTExO1xuICAgICAgICAgICAgbmV3RHN0WzZdID0gbTEyO1xuICAgICAgICAgICAgbmV3RHN0WzddID0gbTEzO1xuICAgICAgICAgICAgbmV3RHN0WzhdID0gbTIwO1xuICAgICAgICAgICAgbmV3RHN0WzldID0gbTIxO1xuICAgICAgICAgICAgbmV3RHN0WzEwXSA9IG0yMjtcbiAgICAgICAgICAgIG5ld0RzdFsxMV0gPSBtMjM7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RHN0WzEyXSA9IG0wMCAqIHYwICsgbTEwICogdjEgKyBtMjAgKiB2MiArIG0zMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IG0wMSAqIHYwICsgbTExICogdjEgKyBtMjEgKiB2MiArIG0zMTtcbiAgICAgICAgbmV3RHN0WzE0XSA9IG0wMiAqIHYwICsgbTEyICogdjEgKyBtMjIgKiB2MiArIG0zMjtcbiAgICAgICAgbmV3RHN0WzE1XSA9IG0wMyAqIHYwICsgbTEzICogdjEgKyBtMjMgKiB2MiArIG0zMztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uWChhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gMTtcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgbmV3RHN0WzNdID0gMDtcbiAgICAgICAgbmV3RHN0WzRdID0gMDtcbiAgICAgICAgbmV3RHN0WzVdID0gYztcbiAgICAgICAgbmV3RHN0WzZdID0gcztcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gLXM7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuXG4gICAgICogYW5nbGUuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVgobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IG0xMCA9IG1bNF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bNV07XG4gICAgICAgIGNvbnN0IG0xMiA9IG1bNl07XG4gICAgICAgIGNvbnN0IG0xMyA9IG1bN107XG4gICAgICAgIGNvbnN0IG0yMCA9IG1bOF07XG4gICAgICAgIGNvbnN0IG0yMSA9IG1bOV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMTBdO1xuICAgICAgICBjb25zdCBtMjMgPSBtWzExXTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzRdID0gYyAqIG0xMCArIHMgKiBtMjA7XG4gICAgICAgIG5ld0RzdFs1XSA9IGMgKiBtMTEgKyBzICogbTIxO1xuICAgICAgICBuZXdEc3RbNl0gPSBjICogbTEyICsgcyAqIG0yMjtcbiAgICAgICAgbmV3RHN0WzddID0gYyAqIG0xMyArIHMgKiBtMjM7XG4gICAgICAgIG5ld0RzdFs4XSA9IGMgKiBtMjAgLSBzICogbTEwO1xuICAgICAgICBuZXdEc3RbOV0gPSBjICogbTIxIC0gcyAqIG0xMTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IGMgKiBtMjIgLSBzICogbTEyO1xuICAgICAgICBuZXdEc3RbMTFdID0gYyAqIG0yMyAtIHMgKiBtMTM7XG4gICAgICAgIGlmIChtICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IG1bMF07XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSBtWzFdO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gbVsyXTtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IG1bM107XG4gICAgICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl07XG4gICAgICAgICAgICBuZXdEc3RbMTNdID0gbVsxM107XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF07XG4gICAgICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRpb24gbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uWShhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYztcbiAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgbmV3RHN0WzJdID0gLXM7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IDA7XG4gICAgICAgIG5ld0RzdFs1XSA9IDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IDA7XG4gICAgICAgIG5ld0RzdFs3XSA9IDA7XG4gICAgICAgIG5ld0RzdFs4XSA9IHM7XG4gICAgICAgIG5ld0RzdFs5XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMF0gPSBjO1xuICAgICAgICBuZXdEc3RbMTFdID0gMDtcbiAgICAgICAgbmV3RHN0WzEyXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxM10gPSAwO1xuICAgICAgICBuZXdEc3RbMTRdID0gMDtcbiAgICAgICAgbmV3RHN0WzE1XSA9IDE7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB5LWF4aXMgYnkgdGhlIGdpdmVuXG4gICAgICogYW5nbGUuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVkobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDE2KSk7XG4gICAgICAgIGNvbnN0IG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgICAgICAgY29uc3QgbTAxID0gbVswICogNCArIDFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzAgKiA0ICsgMl07XG4gICAgICAgIGNvbnN0IG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgICAgICAgY29uc3QgbTIwID0gbVsyICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzIgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTIzID0gbVsyICogNCArIDNdO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjICogbTAwIC0gcyAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzFdID0gYyAqIG0wMSAtIHMgKiBtMjE7XG4gICAgICAgIG5ld0RzdFsyXSA9IGMgKiBtMDIgLSBzICogbTIyO1xuICAgICAgICBuZXdEc3RbM10gPSBjICogbTAzIC0gcyAqIG0yMztcbiAgICAgICAgbmV3RHN0WzhdID0gYyAqIG0yMCArIHMgKiBtMDA7XG4gICAgICAgIG5ld0RzdFs5XSA9IGMgKiBtMjEgKyBzICogbTAxO1xuICAgICAgICBuZXdEc3RbMTBdID0gYyAqIG0yMiArIHMgKiBtMDI7XG4gICAgICAgIG5ld0RzdFsxMV0gPSBjICogbTIzICsgcyAqIG0wMztcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzRdID0gbVs0XTtcbiAgICAgICAgICAgIG5ld0RzdFs1XSA9IG1bNV07XG4gICAgICAgICAgICBuZXdEc3RbNl0gPSBtWzZdO1xuICAgICAgICAgICAgbmV3RHN0WzddID0gbVs3XTtcbiAgICAgICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XTtcbiAgICAgICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSByb3RhdGlvbiBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRpb25aKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBuZXdEc3RbMF0gPSBjO1xuICAgICAgICBuZXdEc3RbMV0gPSBzO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAtcztcbiAgICAgICAgbmV3RHN0WzVdID0gYztcbiAgICAgICAgbmV3RHN0WzZdID0gMDtcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0gMDtcbiAgICAgICAgbmV3RHN0WzldID0gMDtcbiAgICAgICAgbmV3RHN0WzEwXSA9IDE7XG4gICAgICAgIG5ld0RzdFsxMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTJdID0gMDtcbiAgICAgICAgbmV3RHN0WzEzXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNF0gPSAwO1xuICAgICAgICBuZXdEc3RbMTVdID0gMTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIHotYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWihtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgY29uc3QgbTAwID0gbVswICogNCArIDBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzAgKiA0ICsgMV07XG4gICAgICAgIGNvbnN0IG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgICAgICAgY29uc3QgbTAzID0gbVswICogNCArIDNdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzEgKiA0ICsgMF07XG4gICAgICAgIGNvbnN0IG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgICAgICAgY29uc3QgbTEyID0gbVsxICogNCArIDJdO1xuICAgICAgICBjb25zdCBtMTMgPSBtWzEgKiA0ICsgM107XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgICAgIG5ld0RzdFswXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICAgICAgICBuZXdEc3RbMV0gPSBjICogbTAxICsgcyAqIG0xMTtcbiAgICAgICAgbmV3RHN0WzJdID0gYyAqIG0wMiArIHMgKiBtMTI7XG4gICAgICAgIG5ld0RzdFszXSA9IGMgKiBtMDMgKyBzICogbTEzO1xuICAgICAgICBuZXdEc3RbNF0gPSBjICogbTEwIC0gcyAqIG0wMDtcbiAgICAgICAgbmV3RHN0WzVdID0gYyAqIG0xMSAtIHMgKiBtMDE7XG4gICAgICAgIG5ld0RzdFs2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICAgICAgICBuZXdEc3RbN10gPSBjICogbTEzIC0gcyAqIG0wMztcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzhdID0gbVs4XTtcbiAgICAgICAgICAgIG5ld0RzdFs5XSA9IG1bOV07XG4gICAgICAgICAgICBuZXdEc3RbMTBdID0gbVsxMF07XG4gICAgICAgICAgICBuZXdEc3RbMTFdID0gbVsxMV07XG4gICAgICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl07XG4gICAgICAgICAgICBuZXdEc3RbMTNdID0gbVsxM107XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF07XG4gICAgICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIGdpdmVuIGF4aXMgYnkgdGhlIGdpdmVuXG4gICAgICogYW5nbGUuXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpc1xuICAgICAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIG1hdHJpeCB3aGljaCByb3RhdGVzIGFuZ2xlIHJhZGlhbnNcbiAgICAgKiAgICAgYXJvdW5kIHRoZSBheGlzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGF4aXNSb3RhdGlvbihheGlzLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbGV0IHggPSBheGlzWzBdO1xuICAgICAgICBsZXQgeSA9IGF4aXNbMV07XG4gICAgICAgIGxldCB6ID0gYXhpc1syXTtcbiAgICAgICAgY29uc3QgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICAgICAgICB4IC89IG47XG4gICAgICAgIHkgLz0gbjtcbiAgICAgICAgeiAvPSBuO1xuICAgICAgICBjb25zdCB4eCA9IHggKiB4O1xuICAgICAgICBjb25zdCB5eSA9IHkgKiB5O1xuICAgICAgICBjb25zdCB6eiA9IHogKiB6O1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuICAgICAgICBuZXdEc3RbMF0gPSB4eCArICgxIC0geHgpICogYztcbiAgICAgICAgbmV3RHN0WzFdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICAgICAgICBuZXdEc3RbMl0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gICAgICAgIG5ld0RzdFszXSA9IDA7XG4gICAgICAgIG5ld0RzdFs0XSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgICAgICAgbmV3RHN0WzVdID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gICAgICAgIG5ld0RzdFs2XSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgICAgICAgbmV3RHN0WzddID0gMDtcbiAgICAgICAgbmV3RHN0WzhdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICAgICAgICBuZXdEc3RbOV0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gICAgICAgIG5ld0RzdFsxMF0gPSB6eiArICgxIC0genopICogYztcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGUgZ2l2ZW5cbiAgICAgKiBhbmdsZS4gKHNhbWUgYXMgYXhpc1JvdGF0aW9uKVxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXNcbiAgICAgKiAgICAgYWJvdXQgd2hpY2ggdG8gcm90YXRlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBtYXRyaXggd2hpY2ggcm90YXRlcyBhbmdsZSByYWRpYW5zXG4gICAgICogICAgIGFyb3VuZCB0aGUgYXhpcy5cbiAgICAgKi9cbiAgICBjb25zdCByb3RhdGlvbiA9IGF4aXNSb3RhdGlvbjtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGVcbiAgICAgKiBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gbSAtIFRoZSBtYXRyaXguXG4gICAgICogQHBhcmFtIGF4aXMgLSBUaGUgYXhpc1xuICAgICAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgcm90YXRlZCBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gYXhpc1JvdGF0ZShtLCBheGlzLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbGV0IHggPSBheGlzWzBdO1xuICAgICAgICBsZXQgeSA9IGF4aXNbMV07XG4gICAgICAgIGxldCB6ID0gYXhpc1syXTtcbiAgICAgICAgY29uc3QgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICAgICAgICB4IC89IG47XG4gICAgICAgIHkgLz0gbjtcbiAgICAgICAgeiAvPSBuO1xuICAgICAgICBjb25zdCB4eCA9IHggKiB4O1xuICAgICAgICBjb25zdCB5eSA9IHkgKiB5O1xuICAgICAgICBjb25zdCB6eiA9IHogKiB6O1xuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICAgICAgICBjb25zdCBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuICAgICAgICBjb25zdCByMDAgPSB4eCArICgxIC0geHgpICogYztcbiAgICAgICAgY29uc3QgcjAxID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICAgICAgICBjb25zdCByMDIgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gICAgICAgIGNvbnN0IHIxMCA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgICAgICAgY29uc3QgcjExID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gICAgICAgIGNvbnN0IHIxMiA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgICAgICAgY29uc3QgcjIwID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICAgICAgICBjb25zdCByMjEgPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gICAgICAgIGNvbnN0IHIyMiA9IHp6ICsgKDEgLSB6eikgKiBjO1xuICAgICAgICBjb25zdCBtMDAgPSBtWzBdO1xuICAgICAgICBjb25zdCBtMDEgPSBtWzFdO1xuICAgICAgICBjb25zdCBtMDIgPSBtWzJdO1xuICAgICAgICBjb25zdCBtMDMgPSBtWzNdO1xuICAgICAgICBjb25zdCBtMTAgPSBtWzRdO1xuICAgICAgICBjb25zdCBtMTEgPSBtWzVdO1xuICAgICAgICBjb25zdCBtMTIgPSBtWzZdO1xuICAgICAgICBjb25zdCBtMTMgPSBtWzddO1xuICAgICAgICBjb25zdCBtMjAgPSBtWzhdO1xuICAgICAgICBjb25zdCBtMjEgPSBtWzldO1xuICAgICAgICBjb25zdCBtMjIgPSBtWzEwXTtcbiAgICAgICAgY29uc3QgbTIzID0gbVsxMV07XG4gICAgICAgIG5ld0RzdFswXSA9IHIwMCAqIG0wMCArIHIwMSAqIG0xMCArIHIwMiAqIG0yMDtcbiAgICAgICAgbmV3RHN0WzFdID0gcjAwICogbTAxICsgcjAxICogbTExICsgcjAyICogbTIxO1xuICAgICAgICBuZXdEc3RbMl0gPSByMDAgKiBtMDIgKyByMDEgKiBtMTIgKyByMDIgKiBtMjI7XG4gICAgICAgIG5ld0RzdFszXSA9IHIwMCAqIG0wMyArIHIwMSAqIG0xMyArIHIwMiAqIG0yMztcbiAgICAgICAgbmV3RHN0WzRdID0gcjEwICogbTAwICsgcjExICogbTEwICsgcjEyICogbTIwO1xuICAgICAgICBuZXdEc3RbNV0gPSByMTAgKiBtMDEgKyByMTEgKiBtMTEgKyByMTIgKiBtMjE7XG4gICAgICAgIG5ld0RzdFs2XSA9IHIxMCAqIG0wMiArIHIxMSAqIG0xMiArIHIxMiAqIG0yMjtcbiAgICAgICAgbmV3RHN0WzddID0gcjEwICogbTAzICsgcjExICogbTEzICsgcjEyICogbTIzO1xuICAgICAgICBuZXdEc3RbOF0gPSByMjAgKiBtMDAgKyByMjEgKiBtMTAgKyByMjIgKiBtMjA7XG4gICAgICAgIG5ld0RzdFs5XSA9IHIyMCAqIG0wMSArIHIyMSAqIG0xMSArIHIyMiAqIG0yMTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHIyMCAqIG0wMiArIHIyMSAqIG0xMiArIHIyMiAqIG0yMjtcbiAgICAgICAgbmV3RHN0WzExXSA9IHIyMCAqIG0wMyArIHIyMSAqIG0xMyArIHIyMiAqIG0yMztcbiAgICAgICAgaWYgKG0gIT09IG5ld0RzdCkge1xuICAgICAgICAgICAgbmV3RHN0WzEyXSA9IG1bMTJdO1xuICAgICAgICAgICAgbmV3RHN0WzEzXSA9IG1bMTNdO1xuICAgICAgICAgICAgbmV3RHN0WzE0XSA9IG1bMTRdO1xuICAgICAgICAgICAgbmV3RHN0WzE1XSA9IG1bMTVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZVxuICAgICAqIGdpdmVuIGFuZ2xlLiAoc2FtZSBhcyByb3RhdGUpXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBheGlzIC0gVGhlIGF4aXNcbiAgICAgKiAgICAgYWJvdXQgd2hpY2ggdG8gcm90YXRlLlxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICAgICAqIEBwYXJhbSBkc3QgLSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHJvdGF0ZWQgbWF0cml4LlxuICAgICAqL1xuICAgIGNvbnN0IHJvdGF0ZSA9IGF4aXNSb3RhdGU7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggc2NhbGVzIGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudCBnaXZlbiBieVxuICAgICAqIHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXMgdGhyZWVcbiAgICAgKiBlbnRyaWVzLlxuICAgICAqIEBwYXJhbSB2IC0gQSB2ZWN0b3Igb2ZcbiAgICAgKiAgICAgdGhyZWUgZW50cmllcyBzcGVjaWZ5aW5nIHRoZSBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGluZyBtYXRyaXguXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2NhbGluZyh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSB2WzFdO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gdlsyXTtcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50XG4gICAgICogZ2l2ZW4gYnkgdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhc1xuICAgICAqIHRocmVlIGVudHJpZXMuXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4IHRvIGJlIG1vZGlmaWVkLlxuICAgICAqIEBwYXJhbSB2IC0gQSB2ZWN0b3Igb2YgdGhyZWUgZW50cmllcyBzcGVjaWZ5aW5nIHRoZVxuICAgICAqICAgICBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY2FsZShtLCB2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBuZXdEc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IHYwICogbVswICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbM10gPSB2MCAqIG1bMCAqIDQgKyAzXTtcbiAgICAgICAgbmV3RHN0WzRdID0gdjEgKiBtWzEgKiA0ICsgMF07XG4gICAgICAgIG5ld0RzdFs1XSA9IHYxICogbVsxICogNCArIDFdO1xuICAgICAgICBuZXdEc3RbNl0gPSB2MSAqIG1bMSAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzddID0gdjEgKiBtWzEgKiA0ICsgM107XG4gICAgICAgIG5ld0RzdFs4XSA9IHYyICogbVsyICogNCArIDBdO1xuICAgICAgICBuZXdEc3RbOV0gPSB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHYyICogbVsyICogNCArIDJdO1xuICAgICAgICBuZXdEc3RbMTFdID0gdjIgKiBtWzIgKiA0ICsgM107XG4gICAgICAgIGlmIChtICE9PSBuZXdEc3QpIHtcbiAgICAgICAgICAgIG5ld0RzdFsxMl0gPSBtWzEyXTtcbiAgICAgICAgICAgIG5ld0RzdFsxM10gPSBtWzEzXTtcbiAgICAgICAgICAgIG5ld0RzdFsxNF0gPSBtWzE0XTtcbiAgICAgICAgICAgIG5ld0RzdFsxNV0gPSBtWzE1XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCBzY2FsZXMgYSB1bmlmb3JtIGFtb3VudCBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gcyAtIHRoZSBhbW91bnQgdG8gc2NhbGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmlmb3JtU2NhbGluZyhzLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3RvcigxNikpO1xuICAgICAgICBuZXdEc3RbMF0gPSBzO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICBuZXdEc3RbNF0gPSAwO1xuICAgICAgICBuZXdEc3RbNV0gPSBzO1xuICAgICAgICBuZXdEc3RbNl0gPSAwO1xuICAgICAgICBuZXdEc3RbN10gPSAwO1xuICAgICAgICBuZXdEc3RbOF0gPSAwO1xuICAgICAgICBuZXdEc3RbOV0gPSAwO1xuICAgICAgICBuZXdEc3RbMTBdID0gcztcbiAgICAgICAgbmV3RHN0WzExXSA9IDA7XG4gICAgICAgIG5ld0RzdFsxMl0gPSAwO1xuICAgICAgICBuZXdEc3RbMTNdID0gMDtcbiAgICAgICAgbmV3RHN0WzE0XSA9IDA7XG4gICAgICAgIG5ld0RzdFsxNV0gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2FsZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggaW4gZWFjaCBkaW1lbnNpb24gYnkgYSB1bmlmb3JtIHNjYWxlLlxuICAgICAqIEBwYXJhbSBtIC0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAgICAgKiBAcGFyYW0gcyAtIFRoZSBhbW91bnQgdG8gc2NhbGUuXG4gICAgICogQHBhcmFtIGRzdCAtIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgc2NhbGVkIG1hdHJpeC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmlmb3JtU2NhbGUobSwgcywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoMTYpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcyAqIG1bMCAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzFdID0gcyAqIG1bMCAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gcyAqIG1bMCAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gcyAqIG1bMCAqIDQgKyAzXTtcbiAgICAgICAgbmV3RHN0WzRdID0gcyAqIG1bMSAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzVdID0gcyAqIG1bMSAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzZdID0gcyAqIG1bMSAqIDQgKyAyXTtcbiAgICAgICAgbmV3RHN0WzddID0gcyAqIG1bMSAqIDQgKyAzXTtcbiAgICAgICAgbmV3RHN0WzhdID0gcyAqIG1bMiAqIDQgKyAwXTtcbiAgICAgICAgbmV3RHN0WzldID0gcyAqIG1bMiAqIDQgKyAxXTtcbiAgICAgICAgbmV3RHN0WzEwXSA9IHMgKiBtWzIgKiA0ICsgMl07XG4gICAgICAgIG5ld0RzdFsxMV0gPSBzICogbVsyICogNCArIDNdO1xuICAgICAgICBpZiAobSAhPT0gbmV3RHN0KSB7XG4gICAgICAgICAgICBuZXdEc3RbMTJdID0gbVsxMl07XG4gICAgICAgICAgICBuZXdEc3RbMTNdID0gbVsxM107XG4gICAgICAgICAgICBuZXdEc3RbMTRdID0gbVsxNF07XG4gICAgICAgICAgICBuZXdEc3RbMTVdID0gbVsxNV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICBhaW0sXG4gICAgICAgIGF4aXNSb3RhdGUsXG4gICAgICAgIGF4aXNSb3RhdGlvbixcbiAgICAgICAgY2FtZXJhQWltLFxuICAgICAgICBjbG9uZSxcbiAgICAgICAgY29weSxcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBkZXRlcm1pbmFudCxcbiAgICAgICAgZXF1YWxzLFxuICAgICAgICBlcXVhbHNBcHByb3hpbWF0ZWx5LFxuICAgICAgICBmcm9tTWF0MyxcbiAgICAgICAgZnJvbVF1YXQsXG4gICAgICAgIGZydXN0dW0sXG4gICAgICAgIGZydXN0dW1SZXZlcnNlWixcbiAgICAgICAgZ2V0QXhpcyxcbiAgICAgICAgZ2V0U2NhbGluZyxcbiAgICAgICAgZ2V0VHJhbnNsYXRpb24sXG4gICAgICAgIGlkZW50aXR5LFxuICAgICAgICBpbnZlcnNlLFxuICAgICAgICBpbnZlcnQsXG4gICAgICAgIGxvb2tBdCxcbiAgICAgICAgbXVsLFxuICAgICAgICBtdWxTY2FsYXIsXG4gICAgICAgIG11bHRpcGx5LFxuICAgICAgICBtdWx0aXBseVNjYWxhcixcbiAgICAgICAgbmVnYXRlLFxuICAgICAgICBvcnRobyxcbiAgICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICAgIHBlcnNwZWN0aXZlUmV2ZXJzZVosXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgcm90YXRlWCxcbiAgICAgICAgcm90YXRlWSxcbiAgICAgICAgcm90YXRlWixcbiAgICAgICAgcm90YXRpb24sXG4gICAgICAgIHJvdGF0aW9uWCxcbiAgICAgICAgcm90YXRpb25ZLFxuICAgICAgICByb3RhdGlvblosXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBzY2FsaW5nLFxuICAgICAgICBzZXQsXG4gICAgICAgIHNldEF4aXMsXG4gICAgICAgIHNldFRyYW5zbGF0aW9uLFxuICAgICAgICB0cmFuc2xhdGUsXG4gICAgICAgIHRyYW5zbGF0aW9uLFxuICAgICAgICB0cmFuc3Bvc2UsXG4gICAgICAgIHVuaWZvcm1TY2FsZSxcbiAgICAgICAgdW5pZm9ybVNjYWxpbmcsXG4gICAgfTtcbn1cbmNvbnN0IGNhY2hlJDIgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRBUEkkMihDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlJDIuZ2V0KEN0b3IpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICAgIGFwaSA9IGdldEFQSUltcGwkMihDdG9yKTtcbiAgICAgICAgY2FjaGUkMi5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW0gdHlwZWQgQVBJIGZvciBRdWRcbiAqICovXG5mdW5jdGlvbiBnZXRBUElJbXBsJDEoQ3Rvcikge1xuICAgIGNvbnN0IHZlYzMgPSBnZXRBUEkkNChDdG9yKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcXVhdDQ7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgeiB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gdyAtIEluaXRpYWwgdyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUoeCwgeSwgeiwgdykge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSBuZXcgQ3Rvcig0KTtcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgUXVhdDsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLiAoc2FtZSBhcyBjcmVhdGUpXG4gICAgICogQHBhcmFtIHggLSBJbml0aWFsIHggdmFsdWUuXG4gICAgICogQHBhcmFtIHkgLSBJbml0aWFsIHkgdmFsdWUuXG4gICAgICogQHBhcmFtIHogLSBJbml0aWFsIHogdmFsdWUuXG4gICAgICogQHBhcmFtIHogLSBJbml0aWFsIHcgdmFsdWUuXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgY29uc3QgZnJvbVZhbHVlcyA9IGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZXMgb2YgYSBRdWF0XG4gICAgICogQWxzbyBzZWUge0BsaW5rIHF1YXQuY3JlYXRlfSBhbmQge0BsaW5rIHF1YXQuY29weX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IGZpcnN0IHZhbHVlXG4gICAgICogQHBhcmFtIHkgc2Vjb25kIHZhbHVlXG4gICAgICogQHBhcmFtIHogdGhpcmQgdmFsdWVcbiAgICAgKiBAcGFyYW0gdyBmb3VydGggdmFsdWVcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHdpdGggaXRzIGVsZW1lbnRzIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXQoeCwgeSwgeiwgdywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICBuZXdEc3RbM10gPSB3O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgIGF4aXMsXG4gICAgICogdGhlbiByZXR1cm5zIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGF4aXMgLSB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gdGhlIGFuZ2xlXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHF1YXRlcm5pb24gdGhhdCByZXByZXNlbnRzIHRoZSBnaXZlbiBheGlzIGFuZCBhbmdsZVxuICAgICAqKi9cbiAgICBmdW5jdGlvbiBmcm9tQXhpc0FuZ2xlKGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGhhbGZBbmdsZSA9IGFuZ2xlSW5SYWRpYW5zICogMC41O1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oaGFsZkFuZ2xlKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcyAqIGF4aXNbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IHMgKiBheGlzWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBzICogYXhpc1syXTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5jb3MoaGFsZkFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcm90YXRpb24gYXhpcyBhbmQgYW5nbGVcbiAgICAgKiBAcGFyYW0gcSAtIHF1YXRlcm5pb24gdG8gY29tcHV0ZSBmcm9tXG4gICAgICogQHBhcmFtIGRzdCAtIFZlYzMgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybiBhbmdsZSBhbmQgYXhpc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRvQXhpc0FuZ2xlKHEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IHZlYzMuY3JlYXRlKDMpKTtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmFjb3MocVszXSkgKiAyO1xuICAgICAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUgKiAwLjUpO1xuICAgICAgICBpZiAocyA+IEVQU0lMT04pIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IHFbMF0gLyBzO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gcVsxXSAvIHM7XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSBxWzJdIC8gcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IDE7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBhbmdsZSwgYXhpczogbmV3RHN0IH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFuZ2xlIGluIGRlZ3JlZXMgYmV0d2VlbiB0d28gcm90YXRpb25zIGEgYW5kIGIuXG4gICAgICogQHBhcmFtIGEgLSBxdWF0ZXJuaW9uIGFcbiAgICAgKiBAcGFyYW0gYiAtIHF1YXRlcm5pb24gYlxuICAgICAqIEByZXR1cm4gYW5nbGUgaW4gcmFkaWFucyBiZXR3ZWVuIHRoZSB0d28gcXVhdGVybmlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkb3QoYSwgYik7XG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoMiAqIGQgKiBkIC0gMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgdHdvIHF1YXRlcm5pb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSAtIHRoZSBmaXJzdCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIGIgLSB0aGUgc2Vjb25kIHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGEgKiBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBjb25zdCBheCA9IGFbMF07XG4gICAgICAgIGNvbnN0IGF5ID0gYVsxXTtcbiAgICAgICAgY29uc3QgYXogPSBhWzJdO1xuICAgICAgICBjb25zdCBhdyA9IGFbM107XG4gICAgICAgIGNvbnN0IGJ4ID0gYlswXTtcbiAgICAgICAgY29uc3QgYnkgPSBiWzFdO1xuICAgICAgICBjb25zdCBieiA9IGJbMl07XG4gICAgICAgIGNvbnN0IGJ3ID0gYlszXTtcbiAgICAgICAgbmV3RHN0WzBdID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgICAgICAgbmV3RHN0WzFdID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBiejtcbiAgICAgICAgbmV3RHN0WzJdID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDtcbiAgICAgICAgbmV3RHN0WzNdID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyB0d28gcXVhdGVybmlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIC0gdGhlIGZpcnN0IHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gYiAtIHRoZSBzZWNvbmQgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYSAqIGJcbiAgICAgKi9cbiAgICBjb25zdCBtdWwgPSBtdWx0aXBseTtcbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIHRoZSBnaXZlbiBxdWF0ZXJuaW9uIGFyb3VuZCB0aGUgWCBheGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAgICAgKiBAcGFyYW0gcSAtIHF1YXRlcm5pb24gdG8gcm90YXRlXG4gICAgICogQHBhcmFtIGFuZ2xlSW5SYWRpYW5zIC0gVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZVxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSByZXN1bHQgb2YgYSAqIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3RhdGVYKHEsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGhhbGZBbmdsZSA9IGFuZ2xlSW5SYWRpYW5zICogMC41O1xuICAgICAgICBjb25zdCBxeCA9IHFbMF07XG4gICAgICAgIGNvbnN0IHF5ID0gcVsxXTtcbiAgICAgICAgY29uc3QgcXogPSBxWzJdO1xuICAgICAgICBjb25zdCBxdyA9IHFbM107XG4gICAgICAgIGNvbnN0IGJ4ID0gTWF0aC5zaW4oaGFsZkFuZ2xlKTtcbiAgICAgICAgY29uc3QgYncgPSBNYXRoLmNvcyhoYWxmQW5nbGUpO1xuICAgICAgICBuZXdEc3RbMF0gPSBxeCAqIGJ3ICsgcXcgKiBieDtcbiAgICAgICAgbmV3RHN0WzFdID0gcXkgKiBidyArIHF6ICogYng7XG4gICAgICAgIG5ld0RzdFsyXSA9IHF6ICogYncgLSBxeSAqIGJ4O1xuICAgICAgICBuZXdEc3RbM10gPSBxdyAqIGJ3IC0gcXggKiBieDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgZ2l2ZW4gcXVhdGVybmlvbiBhcm91bmQgdGhlIFkgYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gICAgICogQHBhcmFtIHEgLSBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxuICAgICAqIEBwYXJhbSBhbmdsZUluUmFkaWFucyAtIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGEgKiBiXG4gICAgICovXG4gICAgZnVuY3Rpb24gcm90YXRlWShxLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBjb25zdCBoYWxmQW5nbGUgPSBhbmdsZUluUmFkaWFucyAqIDAuNTtcbiAgICAgICAgY29uc3QgcXggPSBxWzBdO1xuICAgICAgICBjb25zdCBxeSA9IHFbMV07XG4gICAgICAgIGNvbnN0IHF6ID0gcVsyXTtcbiAgICAgICAgY29uc3QgcXcgPSBxWzNdO1xuICAgICAgICBjb25zdCBieSA9IE1hdGguc2luKGhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IGJ3ID0gTWF0aC5jb3MoaGFsZkFuZ2xlKTtcbiAgICAgICAgbmV3RHN0WzBdID0gcXggKiBidyAtIHF6ICogYnk7XG4gICAgICAgIG5ld0RzdFsxXSA9IHF5ICogYncgKyBxdyAqIGJ5O1xuICAgICAgICBuZXdEc3RbMl0gPSBxeiAqIGJ3ICsgcXggKiBieTtcbiAgICAgICAgbmV3RHN0WzNdID0gcXcgKiBidyAtIHF5ICogYnk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIGdpdmVuIHF1YXRlcm5pb24gYXJvdW5kIHRoZSBaIGF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byByb3RhdGVcbiAgICAgKiBAcGFyYW0gYW5nbGVJblJhZGlhbnMgLSBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhICogYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0ZVoocSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgaGFsZkFuZ2xlID0gYW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHF4ID0gcVswXTtcbiAgICAgICAgY29uc3QgcXkgPSBxWzFdO1xuICAgICAgICBjb25zdCBxeiA9IHFbMl07XG4gICAgICAgIGNvbnN0IHF3ID0gcVszXTtcbiAgICAgICAgY29uc3QgYnogPSBNYXRoLnNpbihoYWxmQW5nbGUpO1xuICAgICAgICBjb25zdCBidyA9IE1hdGguY29zKGhhbGZBbmdsZSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHF4ICogYncgKyBxeSAqIGJ6O1xuICAgICAgICBuZXdEc3RbMV0gPSBxeSAqIGJ3IC0gcXggKiBiejtcbiAgICAgICAgbmV3RHN0WzJdID0gcXogKiBidyArIHF3ICogYno7XG4gICAgICAgIG5ld0RzdFszXSA9IHF3ICogYncgLSBxeiAqIGJ6O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTcGhlcmljYWxseSBsaW5lYXIgaW50ZXJwb2xhdGUgYmV0d2VlbiB0d28gcXVhdGVybmlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhIC0gc3RhcnRpbmcgdmFsdWVcbiAgICAgKiBAcGFyYW0gYiAtIGVuZGluZyB2YWx1ZVxuICAgICAqIEBwYXJhbSB0IC0gdmFsdWUgd2hlcmUgMCA9IGEgYW5kIDEgPSBiXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhICogYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNsZXJwKGEsIGIsIHQsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgY29uc3QgYXggPSBhWzBdO1xuICAgICAgICBjb25zdCBheSA9IGFbMV07XG4gICAgICAgIGNvbnN0IGF6ID0gYVsyXTtcbiAgICAgICAgY29uc3QgYXcgPSBhWzNdO1xuICAgICAgICBsZXQgYnggPSBiWzBdO1xuICAgICAgICBsZXQgYnkgPSBiWzFdO1xuICAgICAgICBsZXQgYnogPSBiWzJdO1xuICAgICAgICBsZXQgYncgPSBiWzNdO1xuICAgICAgICBsZXQgY29zT21lZ2EgPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3O1xuICAgICAgICBpZiAoY29zT21lZ2EgPCAwKSB7XG4gICAgICAgICAgICBjb3NPbWVnYSA9IC1jb3NPbWVnYTtcbiAgICAgICAgICAgIGJ4ID0gLWJ4O1xuICAgICAgICAgICAgYnkgPSAtYnk7XG4gICAgICAgICAgICBieiA9IC1iejtcbiAgICAgICAgICAgIGJ3ID0gLWJ3O1xuICAgICAgICB9XG4gICAgICAgIGxldCBzY2FsZTA7XG4gICAgICAgIGxldCBzY2FsZTE7XG4gICAgICAgIGlmICgxLjAgLSBjb3NPbWVnYSA+IEVQU0lMT04pIHtcbiAgICAgICAgICAgIGNvbnN0IG9tZWdhID0gTWF0aC5hY29zKGNvc09tZWdhKTtcbiAgICAgICAgICAgIGNvbnN0IHNpbk9tZWdhID0gTWF0aC5zaW4ob21lZ2EpO1xuICAgICAgICAgICAgc2NhbGUwID0gTWF0aC5zaW4oKDEgLSB0KSAqIG9tZWdhKSAvIHNpbk9tZWdhO1xuICAgICAgICAgICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbk9tZWdhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICAgICAgICAgIHNjYWxlMSA9IHQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RHN0WzBdID0gc2NhbGUwICogYXggKyBzY2FsZTEgKiBieDtcbiAgICAgICAgbmV3RHN0WzFdID0gc2NhbGUwICogYXkgKyBzY2FsZTEgKiBieTtcbiAgICAgICAgbmV3RHN0WzJdID0gc2NhbGUwICogYXogKyBzY2FsZTEgKiBiejtcbiAgICAgICAgbmV3RHN0WzNdID0gc2NhbGUwICogYXcgKyBzY2FsZTEgKiBidztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgaW52ZXJzZSBvZiBhIHF1YXRlcm5pb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byBjb21wdXRlIHRoZSBpbnZlcnNlIG9mXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBhICogYlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGludmVyc2UocSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBjb25zdCBhMCA9IHFbMF07XG4gICAgICAgIGNvbnN0IGExID0gcVsxXTtcbiAgICAgICAgY29uc3QgYTIgPSBxWzJdO1xuICAgICAgICBjb25zdCBhMyA9IHFbM107XG4gICAgICAgIGNvbnN0IGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gICAgICAgIGNvbnN0IGludkRvdCA9IGRvdCA/IDEgLyBkb3QgOiAwO1xuICAgICAgICBuZXdEc3RbMF0gPSAtYTAgKiBpbnZEb3Q7XG4gICAgICAgIG5ld0RzdFsxXSA9IC1hMSAqIGludkRvdDtcbiAgICAgICAgbmV3RHN0WzJdID0gLWEyICogaW52RG90O1xuICAgICAgICBuZXdEc3RbM10gPSBhMyAqIGludkRvdDtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB0aGUgY29uanVnYXRlIG9mIGEgcXVhdGVybmlvblxuICAgICAqIEZvciBxdWF0ZXJuaW9ucyB3aXRoIGEgbWFnbml0dWRlIG9mIDEgKGEgdW5pdCBxdWF0ZXJuaW9uKVxuICAgICAqIHRoaXMgcmV0dXJucyB0aGUgc2FtZSBhcyB0aGUgaW52ZXJzZSBidXQgaXMgZmFzdGVyIHRvIGNhbGN1bGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBxIC0gcXVhdGVybmlvbiB0byBjb21wdXRlIHRoZSBjb25qdWdhdGUgb2YuXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGNvbmp1Z2F0ZSBvZiBxXG4gICAgICovXG4gICAgZnVuY3Rpb24gY29uanVnYXRlKHEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLXFbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC1xWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAtcVsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gcVszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gcm90YXRpb24gbWF0cml4LlxuICAgICAqXG4gICAgICogVGhlIGNyZWF0ZWQgcXVhdGVybmlvbiBpcyBub3Qgbm9ybWFsaXplZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtIC0gcm90YXRpb24gbWF0cml4XG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZyb21NYXQobSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICAvKlxuICAgICAgICAwIDEgMlxuICAgICAgICAzIDQgNVxuICAgICAgICA2IDcgOFxuICAgICAgXG4gICAgICAgIDAgMSAyXG4gICAgICAgIDQgNSA2XG4gICAgICAgIDggOSAxMFxuICAgICAgICAgKi9cbiAgICAgICAgLy8gQWxnb3JpdGhtIGluIEtlbiBTaG9lbWFrZSdzIGFydGljbGUgaW4gMTk4NyBTSUdHUkFQSCBjb3Vyc2Ugbm90ZXNcbiAgICAgICAgLy8gYXJ0aWNsZSBcIlF1YXRlcm5pb24gQ2FsY3VsdXMgYW5kIEZhc3QgQW5pbWF0aW9uXCIuXG4gICAgICAgIGNvbnN0IHRyYWNlID0gbVswXSArIG1bNV0gKyBtWzEwXTtcbiAgICAgICAgaWYgKHRyYWNlID4gMC4wKSB7XG4gICAgICAgICAgICAvLyB8d3wgPiAxLzIsIG1heSBhcyB3ZWxsIGNob29zZSB3ID4gMS8yXG4gICAgICAgICAgICBjb25zdCByb290ID0gTWF0aC5zcXJ0KHRyYWNlICsgMSk7IC8vIDJ3XG4gICAgICAgICAgICBuZXdEc3RbM10gPSAwLjUgKiByb290O1xuICAgICAgICAgICAgY29uc3QgaW52Um9vdCA9IDAuNSAvIHJvb3Q7IC8vIDEvKDR3KVxuICAgICAgICAgICAgbmV3RHN0WzBdID0gKG1bNl0gLSBtWzldKSAqIGludlJvb3Q7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAobVs4XSAtIG1bMl0pICogaW52Um9vdDtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IChtWzFdIC0gbVs0XSkgKiBpbnZSb290O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gfHd8IDw9IDEvMlxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgaWYgKG1bNV0gPiBtWzBdKSB7XG4gICAgICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobVsxMF0gPiBtW2kgKiA0ICsgaV0pIHtcbiAgICAgICAgICAgICAgICBpID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGogPSAoaSArIDEpICUgMztcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoaSArIDIpICUgMztcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBNYXRoLnNxcnQobVtpICogNCArIGldIC0gbVtqICogNCArIGpdIC0gbVtrICogNCArIGtdICsgMS4wKTtcbiAgICAgICAgICAgIG5ld0RzdFtpXSA9IDAuNSAqIHJvb3Q7XG4gICAgICAgICAgICBjb25zdCBpbnZSb290ID0gMC41IC8gcm9vdDtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IChtW2ogKiA0ICsga10gLSBtW2sgKiA0ICsgal0pICogaW52Um9vdDtcbiAgICAgICAgICAgIG5ld0RzdFtqXSA9IChtW2ogKiA0ICsgaV0gKyBtW2kgKiA0ICsgal0pICogaW52Um9vdDtcbiAgICAgICAgICAgIG5ld0RzdFtrXSA9IChtW2sgKiA0ICsgaV0gKyBtW2kgKiA0ICsga10pICogaW52Um9vdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6IHVzaW5nIHRoZSBwcm92aWRlZCBpbnRyaW5zaWMgb3JkZXIgZm9yIHRoZSBjb252ZXJzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHhBbmdsZUluUmFkaWFucyAtIGFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWCBheGlzIGluIHJhZGlhbnMuXG4gICAgICogQHBhcmFtIHlBbmdsZUluUmFkaWFucyAtIGFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWSBheGlzIGluIHJhZGlhbnMuXG4gICAgICogQHBhcmFtIHpBbmdsZUluUmFkaWFucyAtIGFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWiBheGlzIGluIHJhZGlhbnMuXG4gICAgICogQHBhcmFtIG9yZGVyIC0gb3JkZXIgdG8gYXBwbHkgZXVsZXIgYW5nbGVzXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHJlcHJlc2VudGluZyB0aGUgc2FtZSByb3RhdGlvbiBhcyB0aGUgZXVsZXIgYW5nbGVzIGFwcGxpZWQgaW4gdGhlIGdpdmVuIG9yZGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZnJvbUV1bGVyKHhBbmdsZUluUmFkaWFucywgeUFuZ2xlSW5SYWRpYW5zLCB6QW5nbGVJblJhZGlhbnMsIG9yZGVyLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IHhIYWxmQW5nbGUgPSB4QW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHlIYWxmQW5nbGUgPSB5QW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHpIYWxmQW5nbGUgPSB6QW5nbGVJblJhZGlhbnMgKiAwLjU7XG4gICAgICAgIGNvbnN0IHN4ID0gTWF0aC5zaW4oeEhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IGN4ID0gTWF0aC5jb3MoeEhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN5ID0gTWF0aC5zaW4oeUhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IGN5ID0gTWF0aC5jb3MoeUhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN6ID0gTWF0aC5zaW4oekhhbGZBbmdsZSk7XG4gICAgICAgIGNvbnN0IGN6ID0gTWF0aC5jb3MoekhhbGZBbmdsZSk7XG4gICAgICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ3h5eic6XG4gICAgICAgICAgICAgICAgbmV3RHN0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IGN4ICogc3kgKiBjeiAtIHN4ICogY3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSBjeCAqIGN5ICogc3ogKyBzeCAqIHN5ICogY3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gY3ggKiBjeSAqIGN6IC0gc3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneHp5JzpcbiAgICAgICAgICAgICAgICBuZXdEc3RbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0gY3ggKiBzeSAqIGN6IC0gc3ggKiBjeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSBjeCAqIGN5ICogY3ogKyBzeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5eHonOlxuICAgICAgICAgICAgICAgIG5ld0RzdFswXSA9IHN4ICogY3kgKiBjeiArIGN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSBjeCAqIHN5ICogY3ogLSBzeCAqIGN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gY3ggKiBjeSAqIHN6IC0gc3ggKiBzeSAqIGN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3l6eCc6XG4gICAgICAgICAgICAgICAgbmV3RHN0WzBdID0gc3ggKiBjeSAqIGN6ICsgY3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsxXSA9IGN4ICogc3kgKiBjeiArIHN4ICogY3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMl0gPSBjeCAqIGN5ICogc3ogLSBzeCAqIHN5ICogY3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gY3ggKiBjeSAqIGN6IC0gc3ggKiBzeSAqIHN6O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnenh5JzpcbiAgICAgICAgICAgICAgICBuZXdEc3RbMF0gPSBzeCAqIGN5ICogY3ogLSBjeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzFdID0gY3ggKiBzeSAqIGN6ICsgc3ggKiBjeSAqIHN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFsyXSA9IGN4ICogY3kgKiBzeiArIHN4ICogc3kgKiBjejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbM10gPSBjeCAqIGN5ICogY3ogLSBzeCAqIHN5ICogc3o7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd6eXgnOlxuICAgICAgICAgICAgICAgIG5ld0RzdFswXSA9IHN4ICogY3kgKiBjeiAtIGN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gY3ggKiBjeSAqIHN6IC0gc3ggKiBzeSAqIGN6O1xuICAgICAgICAgICAgICAgIG5ld0RzdFszXSA9IGN4ICogY3kgKiBjeiArIHN4ICogc3kgKiBzejtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJvdGF0aW9uIG9yZGVyOiAke29yZGVyfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIHF1YXRlcm5pb24uIChzYW1lIGFzIHtAbGluayBxdWF0LmNsb25lfSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgcXVhdC5jcmVhdGV9IGFuZCB7QGxpbmsgcXVhdC5zZXR9XG4gICAgICogQHBhcmFtIHEgLSBUaGUgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyBhIGNvcHkgb2YgcVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvcHkocSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBxWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBxWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBxWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBxWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9uZXMgYSBxdWF0ZXJuaW9uLiAoc2FtZSBhcyB7QGxpbmsgcXVhdC5jb3B5fSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgcXVhdC5jcmVhdGV9IGFuZCB7QGxpbmsgcXVhdC5zZXR9XG4gICAgICogQHBhcmFtIHEgLSBUaGUgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgcS5cbiAgICAgKi9cbiAgICBjb25zdCBjbG9uZSA9IGNvcHk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0d28gcXVhdGVybmlvbnM7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHF1YXRlcm5pb24gdGhhdCBpcyB0aGUgc3VtIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSArIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgYlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gYVszXSArIGJbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0d28gcXVhdGVybmlvbnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBxdWF0ZXJuaW9uIHRoYXQgaXMgdGhlIGRpZmZlcmVuY2Ugb2YgYSBhbmQgYi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gLSBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAtIGJbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gLSBiWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdHdvIHF1YXRlcm5pb25zLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCBxdWF0ZXJuaW9uLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgcXVhdGVybmlvbiB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHF1YXRlcm5pb24gYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gKiBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdICogaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAqIGs7XG4gICAgICAgIG5ld0RzdFszXSA9IHZbM10gKiBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgcXVhdGVybmlvbiBieSBhIHNjYWxhci4gKHNhbWUgYXMgbXVsU2NhbGFyKVxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGsgLSBUaGUgc2NhbGFyLlxuICAgICAqIEBwYXJhbSBkc3QgLSBxdWF0ZXJuaW9uIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgcXVhdGVybmlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBzY2FsZSA9IG11bFNjYWxhcjtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gayAtIFRoZSBzY2FsYXIuXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHNjYWxlZCBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpdlNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gLyBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdIC8gaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAvIGs7XG4gICAgICAgIG5ld0RzdFszXSA9IHZbM10gLyBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHF1YXRlcm5pb25zXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHJldHVybnMgZG90IHByb2R1Y3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb3QoYSwgYikge1xuICAgICAgICByZXR1cm4gKGFbMF0gKiBiWzBdKSArIChhWzFdICogYlsxXSkgKyAoYVsyXSAqIGJbMl0pICsgKGFbM10gKiBiWzNdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHF1YXRlcm5pb25zLlxuICAgICAqIEdpdmVuIHF1YXRlcm5pb25zIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gdCAtIEludGVycG9sYXRpb24gY29lZmZpY2llbnQuXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIHQgKiAoYlsyXSAtIGFbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgdCAqIChiWzNdIC0gYVszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSB2IC0gcXVhdGVybmlvbi5cbiAgICAgKiBAcmV0dXJucyBsZW5ndGggb2YgcXVhdGVybmlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZW5ndGgodikge1xuICAgICAgICBjb25zdCB2MCA9IHZbMF07XG4gICAgICAgIGNvbnN0IHYxID0gdlsxXTtcbiAgICAgICAgY29uc3QgdjIgPSB2WzJdO1xuICAgICAgICBjb25zdCB2MyA9IHZbM107XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2Myk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgcXVhdGVybmlvbiAoc2FtZSBhcyBsZW5ndGgpXG4gICAgICogQHBhcmFtIHYgLSBxdWF0ZXJuaW9uLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGNvbnN0IGxlbiA9IGxlbmd0aDtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSB2IC0gcXVhdGVybmlvbi5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlbmd0aFNxKHYpIHtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgdjMgPSB2WzNdO1xuICAgICAgICByZXR1cm4gdjAgKiB2MCArIHYxICogdjEgKyB2MiAqIHYyICsgdjMgKiB2MztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHF1YXRlcm5pb24gKHNhbWUgYXMgbGVuZ3RoU3EpXG4gICAgICogQHBhcmFtIHYgLSBxdWF0ZXJuaW9uLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHF1YXRlcm5pb24uXG4gICAgICovXG4gICAgY29uc3QgbGVuU3EgPSBsZW5ndGhTcTtcbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgcXVhdGVybmlvbiBieSBpdHMgRXVjbGlkZWFuIGxlbmd0aCBhbmQgcmV0dXJucyB0aGUgcXVvdGllbnQuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbm9ybWFsaXplZCBxdWF0ZXJuaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHYzID0gdlszXTtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2MiArIHYzICogdjMpO1xuICAgICAgICBpZiAobGVuID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjAgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSB2MSAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IHYyIC8gbGVuO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gdjMgLyBsZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbM10gPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIDIgcXVhdGVybmlvbnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgcXVhdGVybmlvbi5cbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHF1YXRlcm5pb25zIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXF1YWxzQXBwcm94aW1hdGVseShhLCBiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhhWzBdIC0gYlswXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzFdIC0gYlsxXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzJdIC0gYlsyXSkgPCBFUFNJTE9OICYmXG4gICAgICAgICAgICBNYXRoLmFicyhhWzNdIC0gYlszXSkgPCBFUFNJTE9OO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiAyIHF1YXRlcm5pb25zIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHF1YXRlcm5pb24uXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiBxdWF0ZXJuaW9ucyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGlkZW50aXR5IHF1YXRlcm5pb25cbiAgICAgKiBAcGFyYW0gZHN0IC0gcXVhdGVybmlvbiB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBhbiBpZGVudGl0eSBxdWF0ZXJuaW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAxO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICBjb25zdCB0ZW1wVmVjMyA9IHZlYzMuY3JlYXRlKCk7XG4gICAgY29uc3QgeFVuaXRWZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgICBjb25zdCB5VW5pdFZlYzMgPSB2ZWMzLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lIHZlY3RvciB0byBhbm90aGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGFVbml0IC0gdGhlIHN0YXJ0IHZlY3RvclxuICAgICAqIEBwYXJhbSBiVW5pdCAtIHRoZSBlbmQgdmVjdG9yXG4gICAgICogQHBhcmFtIGRzdCAtIHF1YXRlcm5pb24gdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJvdGF0aW9uVG8oYVVuaXQsIGJVbml0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IGRvdCA9IHZlYzMuZG90KGFVbml0LCBiVW5pdCk7XG4gICAgICAgIGlmIChkb3QgPCAtMC45OTk5OTkpIHtcbiAgICAgICAgICAgIHZlYzMuY3Jvc3MoeFVuaXRWZWMzLCBhVW5pdCwgdGVtcFZlYzMpO1xuICAgICAgICAgICAgaWYgKHZlYzMubGVuKHRlbXBWZWMzKSA8IDAuMDAwMDAxKSB7XG4gICAgICAgICAgICAgICAgdmVjMy5jcm9zcyh5VW5pdFZlYzMsIGFVbml0LCB0ZW1wVmVjMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWMzLm5vcm1hbGl6ZSh0ZW1wVmVjMywgdGVtcFZlYzMpO1xuICAgICAgICAgICAgZnJvbUF4aXNBbmdsZSh0ZW1wVmVjMywgTWF0aC5QSSwgbmV3RHN0KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzJdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVjMy5jcm9zcyhhVW5pdCwgYlVuaXQsIHRlbXBWZWMzKTtcbiAgICAgICAgICAgIG5ld0RzdFswXSA9IHRlbXBWZWMzWzBdO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gdGVtcFZlYzNbMV07XG4gICAgICAgICAgICBuZXdEc3RbMl0gPSB0ZW1wVmVjM1syXTtcbiAgICAgICAgICAgIG5ld0RzdFszXSA9IDEgKyBkb3Q7XG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsaXplKG5ld0RzdCwgbmV3RHN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0ZW1wUXVhdDEgPSBuZXcgQ3Rvcig0KTtcbiAgICBjb25zdCB0ZW1wUXVhdDIgPSBuZXcgQ3Rvcig0KTtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGEgLSB0aGUgZmlyc3QgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBiIC0gdGhlIHNlY29uZCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIGMgLSB0aGUgdGhpcmQgcXVhdGVybmlvblxuICAgICAqIEBwYXJhbSBkIC0gdGhlIGZvdXJ0aCBxdWF0ZXJuaW9uXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IDAgdG8gMVxuICAgICAqIEByZXR1cm5zIHJlc3VsdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNxbGVycChhLCBiLCBjLCBkLCB0LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIHNsZXJwKGEsIGQsIHQsIHRlbXBRdWF0MSk7XG4gICAgICAgIHNsZXJwKGIsIGMsIHQsIHRlbXBRdWF0Mik7XG4gICAgICAgIHNsZXJwKHRlbXBRdWF0MSwgdGVtcFF1YXQyLCAyICogdCAqICgxIC0gdCksIG5ld0RzdCk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgZnJvbVZhbHVlcyxcbiAgICAgICAgc2V0LFxuICAgICAgICBmcm9tQXhpc0FuZ2xlLFxuICAgICAgICB0b0F4aXNBbmdsZSxcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIG11bHRpcGx5LFxuICAgICAgICBtdWwsXG4gICAgICAgIHJvdGF0ZVgsXG4gICAgICAgIHJvdGF0ZVksXG4gICAgICAgIHJvdGF0ZVosXG4gICAgICAgIHNsZXJwLFxuICAgICAgICBpbnZlcnNlLFxuICAgICAgICBjb25qdWdhdGUsXG4gICAgICAgIGZyb21NYXQsXG4gICAgICAgIGZyb21FdWxlcixcbiAgICAgICAgY29weSxcbiAgICAgICAgY2xvbmUsXG4gICAgICAgIGFkZCxcbiAgICAgICAgc3VidHJhY3QsXG4gICAgICAgIHN1YixcbiAgICAgICAgbXVsU2NhbGFyLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgZGl2U2NhbGFyLFxuICAgICAgICBkb3QsXG4gICAgICAgIGxlcnAsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbGVuLFxuICAgICAgICBsZW5ndGhTcSxcbiAgICAgICAgbGVuU3EsXG4gICAgICAgIG5vcm1hbGl6ZSxcbiAgICAgICAgZXF1YWxzQXBwcm94aW1hdGVseSxcbiAgICAgICAgZXF1YWxzLFxuICAgICAgICBpZGVudGl0eSxcbiAgICAgICAgcm90YXRpb25UbyxcbiAgICAgICAgc3FsZXJwLFxuICAgIH07XG59XG5jb25zdCBjYWNoZSQxID0gbmV3IE1hcCgpO1xuLyoqXG4gKlxuICogUXVhdDQgbWF0aCBmdW5jdGlvbnMuXG4gKlxuICogQWxtb3N0IGFsbCBmdW5jdGlvbnMgdGFrZSBhbiBvcHRpb25hbCBgbmV3RHN0YCBhcmd1bWVudC4gSWYgaXQgaXMgbm90IHBhc3NlZCBpbiB0aGVcbiAqIGZ1bmN0aW9ucyB3aWxsIGNyZWF0ZSBhIG5ldyBgUXVhdDRgLiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAqXG4gKiAgICAgY29uc3QgdiA9IHF1YXQ0LmNyb3NzKHYxLCB2Mik7ICAvLyBDcmVhdGVzIGEgbmV3IFF1YXQ0IHdpdGggdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2Mi5cbiAqXG4gKiBvclxuICpcbiAqICAgICBjb25zdCB2ID0gcXVhdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQuY3Jvc3ModjEsIHYyLCB2KTsgIC8vIFB1dHMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2MiBpbiB2XG4gKlxuICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICogYXMgdGhlcmUgaXMgYWxtb3N0IG5ldmVyIGFsbG9jYXRpb24gd2l0aCB0aGUgc2Vjb25kIHN0eWxlLlxuICpcbiAqIEl0IGlzIGFsd2F5cyBzYWZlIHRvIHBhc3MgYW55IHZlY3RvciBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gKlxuICogICAgIHF1YXQ0LmNyb3NzKHYxLCB2MiwgdjEpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHYxXG4gKlxuICovXG5mdW5jdGlvbiBnZXRBUEkkMShDdG9yKSB7XG4gICAgbGV0IGFwaSA9IGNhY2hlJDEuZ2V0KEN0b3IpO1xuICAgIGlmICghYXBpKSB7XG4gICAgICAgIGFwaSA9IGdldEFQSUltcGwkMShDdG9yKTtcbiAgICAgICAgY2FjaGUkMS5zZXQoQ3RvciwgYXBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn1cblxuLypcbiAqIENvcHlyaWdodCAyMDIyIEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBHZW5lcmF0ZXMgYW0gdHlwZWQgQVBJIGZvciBWZWM0XG4gKiAqL1xuZnVuY3Rpb24gZ2V0QVBJSW1wbChDdG9yKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHZlYzQ7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0geCAtIEluaXRpYWwgeCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geSAtIEluaXRpYWwgeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geiAtIEluaXRpYWwgeiB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gdyAtIEluaXRpYWwgdyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGUoeCwgeSwgeiwgdykge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSBuZXcgQ3Rvcig0KTtcbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0geDtcbiAgICAgICAgICAgIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICAgICAgICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzJdID0gejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RHN0WzNdID0gdztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgdmVjNDsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLiAoc2FtZSBhcyBjcmVhdGUpXG4gICAgICogQHBhcmFtIHggLSBJbml0aWFsIHggdmFsdWUuXG4gICAgICogQHBhcmFtIHkgLSBJbml0aWFsIHkgdmFsdWUuXG4gICAgICogQHBhcmFtIHogLSBJbml0aWFsIHogdmFsdWUuXG4gICAgICogQHBhcmFtIHogLSBJbml0aWFsIHcgdmFsdWUuXG4gICAgICogQHJldHVybnMgdGhlIGNyZWF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgY29uc3QgZnJvbVZhbHVlcyA9IGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZXMgb2YgYSBWZWM0XG4gICAgICogQWxzbyBzZWUge0BsaW5rIHZlYzQuY3JlYXRlfSBhbmQge0BsaW5rIHZlYzQuY29weX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB4IGZpcnN0IHZhbHVlXG4gICAgICogQHBhcmFtIHkgc2Vjb25kIHZhbHVlXG4gICAgICogQHBhcmFtIHogdGhpcmQgdmFsdWVcbiAgICAgKiBAcGFyYW0gdyBmb3VydGggdmFsdWVcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHdpdGggaXRzIGVsZW1lbnRzIHNldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXQoeCwgeSwgeiwgdywgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSB4O1xuICAgICAgICBuZXdEc3RbMV0gPSB5O1xuICAgICAgICBuZXdEc3RbMl0gPSB6O1xuICAgICAgICBuZXdEc3RbM10gPSB3O1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGguY2VpbCB0byBlYWNoIGVsZW1lbnQgb2YgdmVjdG9yXG4gICAgICogQHBhcmFtIHYgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIGNlaWwgb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2VpbCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGguY2VpbCh2WzBdKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5jZWlsKHZbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLmNlaWwodlsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IE1hdGguY2VpbCh2WzNdKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBNYXRoLmZsb29yIHRvIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gdiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZmxvb3Igb2YgZWFjaCBlbGVtZW50IG9mIHYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmxvb3IodiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBNYXRoLmZsb29yKHZbMF0pO1xuICAgICAgICBuZXdEc3RbMV0gPSBNYXRoLmZsb29yKHZbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLmZsb29yKHZbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBNYXRoLmZsb29yKHZbM10pO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIE1hdGgucm91bmQgdG8gZWFjaCBlbGVtZW50IG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSByb3VuZCBvZiBlYWNoIGVsZW1lbnQgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByb3VuZCh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IE1hdGgucm91bmQodlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgucm91bmQodlsxXSk7XG4gICAgICAgIG5ld0RzdFsyXSA9IE1hdGgucm91bmQodlsyXSk7XG4gICAgICAgIG5ld0RzdFszXSA9IE1hdGgucm91bmQodlszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsYW1wIGVhY2ggZWxlbWVudCBvZiB2ZWN0b3IgYmV0d2VlbiBtaW4gYW5kIG1heFxuICAgICAqIEBwYXJhbSB2IC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIG1heCAtIE1pbiB2YWx1ZSwgZGVmYXVsdCAwXG4gICAgICogQHBhcmFtIG1pbiAtIE1heCB2YWx1ZSwgZGVmYXVsdCAxXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IHRoZSBjbGFtcGVkIHZhbHVlIG9mIGVhY2ggZWxlbWVudCBvZiB2LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsYW1wKHYsIG1pbiA9IDAsIG1heCA9IDEsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbMF0pKTtcbiAgICAgICAgbmV3RHN0WzFdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbMV0pKTtcbiAgICAgICAgbmV3RHN0WzJdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbMl0pKTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHZbM10pKTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyB0d28gdmVjdG9yczsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHN1bSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZChhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gKyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIGJbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gKyBiWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHR3byB2ZWN0b3JzLCBzY2FsaW5nIHRoZSAybmQ7IGFzc3VtZXMgYSBhbmQgYiBoYXZlIHRoZSBzYW1lIGRpbWVuc2lvbi5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHNjYWxlIC0gQW1vdW50IHRvIHNjYWxlIGJcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIEEgdmVjdG9yIHRoYXQgaXMgdGhlIHN1bSBvZiBhICsgYiAqIHNjYWxlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFNjYWxlZChhLCBiLCBzY2FsZSwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJ0cmFjdHMgdHdvIHZlY3RvcnMuXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gYVswXSAtIGJbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gLSBiWzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gYVszXSAtIGJbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnRyYWN0cyB0d28gdmVjdG9ycy5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIHZlY3RvciB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgY29uc3Qgc3ViID0gc3VidHJhY3Q7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiB2ZWN0b3JzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdmVjdG9ycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFsc0FwcHJveGltYXRlbHkoYSwgYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoYVswXSAtIGJbMF0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsxXSAtIGJbMV0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVsyXSAtIGJbMl0pIDwgRVBTSUxPTiAmJlxuICAgICAgICAgICAgTWF0aC5hYnMoYVszXSAtIGJbM10pIDwgRVBTSUxPTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgMiB2ZWN0b3JzIGFyZSBleGFjdGx5IGVxdWFsXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdmVjdG9ycyBhcmUgZXhhY3RseSBlcXVhbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAgICAgKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50LlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIHQgKiAoYlsyXSAtIGFbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgdCAqIChiWzNdIC0gYVszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9uIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB2ZWN0b3IgdCwgcmV0dXJuc1xuICAgICAqIGEgKyB0ICogKGIgLSBhKS5cbiAgICAgKiBAcGFyYW0gYSAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHQgLSBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50cyB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgbGluZWFyIGludGVycG9sYXRlZCByZXN1bHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVycFYoYSwgYiwgdCwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICsgdFswXSAqIChiWzBdIC0gYVswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IGFbMV0gKyB0WzFdICogKGJbMV0gLSBhWzFdKTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSArIHRbMl0gKiAoYlsyXSAtIGFbMl0pO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICsgdFszXSAqIChiWzNdIC0gYVszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBtYXggdmFsdWVzIG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gICAgICogW21heChhWzBdLCBiWzBdKSwgbWF4KGFbMV0sIGJbMV0pLCBtYXgoYVsyXSwgYlsyXSldLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtYXggY29tcG9uZW50cyB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWF4KGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBtaW4gdmFsdWVzIG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gICAgICogW21pbihhWzBdLCBiWzBdKSwgbWluKGFbMV0sIGJbMV0pLCBtaW4oYVsyXSwgYlsyXSldLlxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBtaW4gY29tcG9uZW50cyB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWluKGEsIGIsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gICAgICAgIG5ld0RzdFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICAgICAgICBuZXdEc3RbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgICAgICAgbmV3RHN0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gKiBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdICogaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAqIGs7XG4gICAgICAgIG5ld0RzdFszXSA9IHZbM10gKiBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLiAoc2FtZSBhcyBtdWxTY2FsYXIpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IHNjYWxlID0gbXVsU2NhbGFyO1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBrIC0gVGhlIHNjYWxhci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBzY2FsZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpdlNjYWxhcih2LCBrLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IHZbMF0gLyBrO1xuICAgICAgICBuZXdEc3RbMV0gPSB2WzFdIC8gaztcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXSAvIGs7XG4gICAgICAgIG5ld0RzdFszXSA9IHZbM10gLyBrO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnNlIGEgdmVjdG9yLlxuICAgICAqIEBwYXJhbSB2IC0gVGhlIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBpbnZlcnRlZCB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW52ZXJzZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IDEgLyB2WzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSAxIC8gdlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gMSAvIHZbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IDEgLyB2WzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZlcnQgYSB2ZWN0b3IuIChzYW1lIGFzIGludmVyc2UpXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIGludmVydGVkIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBpbnZlcnQgPSBpbnZlcnNlO1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkb3QgcHJvZHVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gICAgICAgIHJldHVybiAoYVswXSAqIGJbMF0pICsgKGFbMV0gKiBiWzFdKSArIChhWzJdICogYlsyXSkgKyAoYVszXSAqIGJbM10pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGxlbmd0aCBvZiB2ZWN0b3IuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGVuZ3RoKHYpIHtcbiAgICAgICAgY29uc3QgdjAgPSB2WzBdO1xuICAgICAgICBjb25zdCB2MSA9IHZbMV07XG4gICAgICAgIGNvbnN0IHYyID0gdlsyXTtcbiAgICAgICAgY29uc3QgdjMgPSB2WzNdO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2MiArIHYzICogdjMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgbGVuZ3RoIG9mIHZlY3RvciAoc2FtZSBhcyBsZW5ndGgpXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBjb25zdCBsZW4gPSBsZW5ndGg7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICAgICAqIEBwYXJhbSB2IC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsZW5ndGhTcSh2KSB7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHYzID0gdlszXTtcbiAgICAgICAgcmV0dXJuIHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2MiArIHYzICogdjM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3IgKHNhbWUgYXMgbGVuZ3RoU3EpXG4gICAgICogQHBhcmFtIHYgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0IGxlblNxID0gbGVuZ3RoU3E7XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHNcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYVswXSAtIGJbMF07XG4gICAgICAgIGNvbnN0IGR5ID0gYVsxXSAtIGJbMV07XG4gICAgICAgIGNvbnN0IGR6ID0gYVsyXSAtIGJbMl07XG4gICAgICAgIGNvbnN0IGR3ID0gYVszXSAtIGJbM107XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6ICsgZHcgKiBkdyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzIChzYW1lIGFzIGRpc3RhbmNlKVxuICAgICAqIEBwYXJhbSBhIC0gdmVjdG9yLlxuICAgICAqIEBwYXJhbSBiIC0gdmVjdG9yLlxuICAgICAqIEByZXR1cm5zIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGNvbnN0IGRpc3QgPSBkaXN0YW5jZTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gICAgICogQHBhcmFtIGEgLSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSB2ZWN0b3IuXG4gICAgICogQHJldHVybnMgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkaXN0YW5jZVNxKGEsIGIpIHtcbiAgICAgICAgY29uc3QgZHggPSBhWzBdIC0gYlswXTtcbiAgICAgICAgY29uc3QgZHkgPSBhWzFdIC0gYlsxXTtcbiAgICAgICAgY29uc3QgZHogPSBhWzJdIC0gYlsyXTtcbiAgICAgICAgY29uc3QgZHcgPSBhWzNdIC0gYlszXTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5ICsgZHogKiBkeiArIGR3ICogZHc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBwb2ludHMgKHNhbWUgYXMgZGlzdGFuY2VTcSlcbiAgICAgKiBAcGFyYW0gYSAtIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIHZlY3Rvci5cbiAgICAgKiBAcmV0dXJucyBzcXVhcmUgb2YgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICAgICAqL1xuICAgIGNvbnN0IGRpc3RTcSA9IGRpc3RhbmNlU3E7XG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBieSBpdHMgRXVjbGlkZWFuIGxlbmd0aCBhbmQgcmV0dXJucyB0aGUgcXVvdGllbnQuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIG5vcm1hbGl6ZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2LCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IHYwID0gdlswXTtcbiAgICAgICAgY29uc3QgdjEgPSB2WzFdO1xuICAgICAgICBjb25zdCB2MiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHYzID0gdlszXTtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5zcXJ0KHYwICogdjAgKyB2MSAqIHYxICsgdjIgKiB2MiArIHYzICogdjMpO1xuICAgICAgICBpZiAobGVuID4gMC4wMDAwMSkge1xuICAgICAgICAgICAgbmV3RHN0WzBdID0gdjAgLyBsZW47XG4gICAgICAgICAgICBuZXdEc3RbMV0gPSB2MSAvIGxlbjtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IHYyIC8gbGVuO1xuICAgICAgICAgICAgbmV3RHN0WzNdID0gdjMgLyBsZW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICAgICAgbmV3RHN0WzFdID0gMDtcbiAgICAgICAgICAgIG5ld0RzdFsyXSA9IDA7XG4gICAgICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgLXYuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbmVnYXRlKHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gLXZbMF07XG4gICAgICAgIG5ld0RzdFsxXSA9IC12WzFdO1xuICAgICAgICBuZXdEc3RbMl0gPSAtdlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gLXZbM107XG4gICAgICAgIHJldHVybiBuZXdEc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIHZlY3Rvci4gKHNhbWUgYXMge0BsaW5rIHZlYzQuY2xvbmV9KVxuICAgICAqIEFsc28gc2VlIHtAbGluayB2ZWM0LmNyZWF0ZX0gYW5kIHtAbGluayB2ZWM0LnNldH1cbiAgICAgKiBAcGFyYW0gdiAtIFRoZSB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGRzdCAtIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBpbiBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyBBIGNvcHkgb2Ygdi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb3B5KHYsIGRzdCkge1xuICAgICAgICBjb25zdCBuZXdEc3QgPSAoZHN0ID8/IG5ldyBDdG9yKDQpKTtcbiAgICAgICAgbmV3RHN0WzBdID0gdlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gdlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gdlsyXTtcbiAgICAgICAgbmV3RHN0WzNdID0gdlszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvbmVzIGEgdmVjdG9yLiAoc2FtZSBhcyB7QGxpbmsgdmVjNC5jb3B5fSlcbiAgICAgKiBBbHNvIHNlZSB7QGxpbmsgdmVjNC5jcmVhdGV9IGFuZCB7QGxpbmsgdmVjNC5zZXR9XG4gICAgICogQHBhcmFtIHYgLSBUaGUgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgQSBjb3B5IG9mIHYuXG4gICAgICovXG4gICAgY29uc3QgY2xvbmUgPSBjb3B5O1xuICAgIC8qKlxuICAgICAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kIGIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSBhWzBdICogYlswXTtcbiAgICAgICAgbmV3RHN0WzFdID0gYVsxXSAqIGJbMV07XG4gICAgICAgIG5ld0RzdFsyXSA9IGFbMl0gKiBiWzJdO1xuICAgICAgICBuZXdEc3RbM10gPSBhWzNdICogYlszXTtcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gICAgICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC4gKHNhbWUgYXMgbXVsKVxuICAgICAqIEBwYXJhbSBhIC0gT3BlcmFuZCB2ZWN0b3IuXG4gICAgICogQHBhcmFtIGIgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3Igb2YgcHJvZHVjdHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IG11bCA9IG11bHRpcGx5O1xuICAgIC8qKlxuICAgICAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICAgICAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRpdmlkZShhLCBiLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5ld0RzdFswXSA9IGFbMF0gLyBiWzBdO1xuICAgICAgICBuZXdEc3RbMV0gPSBhWzFdIC8gYlsxXTtcbiAgICAgICAgbmV3RHN0WzJdID0gYVsyXSAvIGJbMl07XG4gICAgICAgIG5ld0RzdFszXSA9IGFbM10gLyBiWzNdO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAgICAgKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLiAoc2FtZSBhcyBkaXZpZGUpXG4gICAgICogQHBhcmFtIGEgLSBPcGVyYW5kIHZlY3Rvci5cbiAgICAgKiBAcGFyYW0gYiAtIE9wZXJhbmQgdmVjdG9yLlxuICAgICAqIEBwYXJhbSBkc3QgLSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgaW4gYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gICAgICogQHJldHVybnMgVGhlIHZlY3RvciBvZiBxdW90aWVudHMgb2YgZW50cmllcyBvZiBhIGFuZCBiLlxuICAgICAqL1xuICAgIGNvbnN0IGRpdiA9IGRpdmlkZTtcbiAgICAvKipcbiAgICAgKiBaZXJvJ3MgYSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0gZHN0IC0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGluIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSB6ZXJvZWQgdmVjdG9yLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHplcm8oZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBuZXdEc3RbMF0gPSAwO1xuICAgICAgICBuZXdEc3RbMV0gPSAwO1xuICAgICAgICBuZXdEc3RbMl0gPSAwO1xuICAgICAgICBuZXdEc3RbM10gPSAwO1xuICAgICAgICByZXR1cm4gbmV3RHN0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB0cmFuc2Zvcm0gdmVjNCBieSA0eDQgbWF0cml4XG4gICAgICogQHBhcmFtIHYgLSB0aGUgdmVjdG9yXG4gICAgICogQHBhcmFtIG0gLSBUaGUgbWF0cml4LlxuICAgICAqIEBwYXJhbSBkc3QgLSBvcHRpb25hbCB2ZWM0IHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAgICAgKiBAcmV0dXJucyB0aGUgdHJhbnNmb3JtZWQgdmVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NCh2LCBtLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIGNvbnN0IHggPSB2WzBdO1xuICAgICAgICBjb25zdCB5ID0gdlsxXTtcbiAgICAgICAgY29uc3QgeiA9IHZbMl07XG4gICAgICAgIGNvbnN0IHcgPSB2WzNdO1xuICAgICAgICBuZXdEc3RbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gICAgICAgIG5ld0RzdFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgICAgICAgbmV3RHN0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgICAgICAgbmV3RHN0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgICAgICAgcmV0dXJuIG5ld0RzdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJlYXQgYSA0RCB2ZWN0b3IgYXMgYSBkaXJlY3Rpb24gYW5kIHNldCBpdCdzIGxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZlYzQgdG8gbGVuZ3RoZW5cbiAgICAgKiBAcGFyYW0gbGVuIFRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3JcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoZW5lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRMZW5ndGgoYSwgbGVuLCBkc3QpIHtcbiAgICAgICAgY29uc3QgbmV3RHN0ID0gKGRzdCA/PyBuZXcgQ3Rvcig0KSk7XG4gICAgICAgIG5vcm1hbGl6ZShhLCBuZXdEc3QpO1xuICAgICAgICByZXR1cm4gbXVsU2NhbGFyKG5ld0RzdCwgbGVuLCBuZXdEc3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmUgYSB2ZWN0b3IgaXMgbm90IGxvbmdlciB0aGFuIGEgbWF4IGxlbmd0aFxuICAgICAqXG4gICAgICogQHBhcmFtIGEgVGhlIHZlYzQgdG8gbGltaXRcbiAgICAgKiBAcGFyYW0gbWF4TGVuIFRoZSBsb25nZXN0IGxlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3RvclxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3IsIHNob3J0ZW5lZCB0byBtYXhMZW4gaWYgaXQncyB0b28gbG9uZ1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRydW5jYXRlKGEsIG1heExlbiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICBpZiAobGVuZ3RoKGEpID4gbWF4TGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0TGVuZ3RoKGEsIG1heExlbiwgbmV3RHN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29weShhLCBuZXdEc3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHZlY3RvciBleGFjdGx5IGJldHdlZW4gMiBlbmRwb2ludCB2ZWN0b3JzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBFbmRwb2ludCAxXG4gICAgICogQHBhcmFtIGIgRW5kcG9pbnQgMlxuICAgICAqIEByZXR1cm5zIFRoZSB2ZWN0b3IgZXhhY3RseSByZXNpZGluZyBiZXR3ZWVuIGVuZHBvaW50cyAxIGFuZCAyXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWlkcG9pbnQoYSwgYiwgZHN0KSB7XG4gICAgICAgIGNvbnN0IG5ld0RzdCA9IChkc3QgPz8gbmV3IEN0b3IoNCkpO1xuICAgICAgICByZXR1cm4gbGVycChhLCBiLCAwLjUsIG5ld0RzdCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgZnJvbVZhbHVlcyxcbiAgICAgICAgc2V0LFxuICAgICAgICBjZWlsLFxuICAgICAgICBmbG9vcixcbiAgICAgICAgcm91bmQsXG4gICAgICAgIGNsYW1wLFxuICAgICAgICBhZGQsXG4gICAgICAgIGFkZFNjYWxlZCxcbiAgICAgICAgc3VidHJhY3QsXG4gICAgICAgIHN1YixcbiAgICAgICAgZXF1YWxzQXBwcm94aW1hdGVseSxcbiAgICAgICAgZXF1YWxzLFxuICAgICAgICBsZXJwLFxuICAgICAgICBsZXJwVixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIG11bFNjYWxhcixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIGRpdlNjYWxhcixcbiAgICAgICAgaW52ZXJzZSxcbiAgICAgICAgaW52ZXJ0LFxuICAgICAgICBkb3QsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbGVuLFxuICAgICAgICBsZW5ndGhTcSxcbiAgICAgICAgbGVuU3EsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBkaXN0LFxuICAgICAgICBkaXN0YW5jZVNxLFxuICAgICAgICBkaXN0U3EsXG4gICAgICAgIG5vcm1hbGl6ZSxcbiAgICAgICAgbmVnYXRlLFxuICAgICAgICBjb3B5LFxuICAgICAgICBjbG9uZSxcbiAgICAgICAgbXVsdGlwbHksXG4gICAgICAgIG11bCxcbiAgICAgICAgZGl2aWRlLFxuICAgICAgICBkaXYsXG4gICAgICAgIHplcm8sXG4gICAgICAgIHRyYW5zZm9ybU1hdDQsXG4gICAgICAgIHNldExlbmd0aCxcbiAgICAgICAgdHJ1bmNhdGUsXG4gICAgICAgIG1pZHBvaW50LFxuICAgIH07XG59XG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbi8qKlxuICpcbiAqIFZlYzQgbWF0aCBmdW5jdGlvbnMuXG4gKlxuICogQWxtb3N0IGFsbCBmdW5jdGlvbnMgdGFrZSBhbiBvcHRpb25hbCBgbmV3RHN0YCBhcmd1bWVudC4gSWYgaXQgaXMgbm90IHBhc3NlZCBpbiB0aGVcbiAqIGZ1bmN0aW9ucyB3aWxsIGNyZWF0ZSBhIG5ldyBgVmVjNGAuIEluIG90aGVyIHdvcmRzIHlvdSBjYW4gZG8gdGhpc1xuICpcbiAqICAgICBjb25zdCB2ID0gdmVjNC5jcm9zcyh2MSwgdjIpOyAgLy8gQ3JlYXRlcyBhIG5ldyBWZWM0IHdpdGggdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2Mi5cbiAqXG4gKiBvclxuICpcbiAqICAgICBjb25zdCB2ID0gdmVjNC5jcmVhdGUoKTtcbiAqICAgICB2ZWM0LmNyb3NzKHYxLCB2Miwgdik7ICAvLyBQdXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIgaW4gdlxuICpcbiAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAqXG4gKiBJdCBpcyBhbHdheXMgc2FmZSB0byBwYXNzIGFueSB2ZWN0b3IgYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICpcbiAqICAgICB2ZWM0LmNyb3NzKHYxLCB2MiwgdjEpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHYxXG4gKlxuICovXG5mdW5jdGlvbiBnZXRBUEkoQ3Rvcikge1xuICAgIGxldCBhcGkgPSBjYWNoZS5nZXQoQ3Rvcik7XG4gICAgaWYgKCFhcGkpIHtcbiAgICAgICAgYXBpID0gZ2V0QVBJSW1wbChDdG9yKTtcbiAgICAgICAgY2FjaGUuc2V0KEN0b3IsIGFwaSk7XG4gICAgfVxuICAgIHJldHVybiBhcGk7XG59XG5cbi8qKlxuICogU29tZSBkb2NzXG4gKiBAbmFtZXNwYWNlIHdncHUtbWF0cml4XG4gKi9cbi8qKlxuICogR2VuZXJhdGUgd2dwdS1tYXRyaXggQVBJIGZvciB0eXBlXG4gKi9cbmZ1bmN0aW9uIHdncHVNYXRyaXhBUEkoTWF0M0N0b3IsIE1hdDRDdG9yLCBRdWF0Q3RvciwgVmVjMkN0b3IsIFZlYzNDdG9yLCBWZWM0Q3Rvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKiBAbmFtZXNwYWNlIG1hdDMgKi9cbiAgICAgICAgbWF0MzogZ2V0QVBJJDMoTWF0M0N0b3IpLFxuICAgICAgICAvKiogQG5hbWVzcGFjZSBtYXQ0ICovXG4gICAgICAgIG1hdDQ6IGdldEFQSSQyKE1hdDRDdG9yKSxcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgcXVhdCAqL1xuICAgICAgICBxdWF0OiBnZXRBUEkkMShRdWF0Q3RvciksXG4gICAgICAgIC8qKiBAbmFtZXNwYWNlIHZlYzIgKi9cbiAgICAgICAgdmVjMjogZ2V0QVBJJDUoVmVjMkN0b3IpLFxuICAgICAgICAvKiogQG5hbWVzcGFjZSB2ZWMzICovXG4gICAgICAgIHZlYzM6IGdldEFQSSQ0KFZlYzNDdG9yKSxcbiAgICAgICAgLyoqIEBuYW1lc3BhY2UgdmVjNCAqL1xuICAgICAgICB2ZWM0OiBnZXRBUEkoVmVjNEN0b3IpLFxuICAgIH07XG59XG5jb25zdCB7IFxuLyoqXG4gKiAzeDMgTWF0cml4IGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbm1hdDMsIFxuLyoqXG4gKiA0eDQgTWF0cml4IGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbm1hdDQsIFxuLyoqXG4gKiBRdWF0ZXJuaW9uIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnF1YXQsIFxuLyoqXG4gKiBWZWMyIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzIsIFxuLyoqXG4gKiBWZWMzIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzMsIFxuLyoqXG4gKiBWZWMzIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDMyQXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzQsIH0gPSB3Z3B1TWF0cml4QVBJKEZsb2F0MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQzMkFycmF5LCBGbG9hdDMyQXJyYXkpO1xuY29uc3QgeyBcbi8qKlxuICogM3gzIE1hdHJpeCBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgRmxvYXQ2NEFycmF5YFxuICogQG5hbWVzcGFjZVxuICovXG5tYXQzOiBtYXQzZCwgXG4vKipcbiAqIDR4NCBNYXRyaXggZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0NjRBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xubWF0NDogbWF0NGQsIFxuLyoqXG4gKiBRdWF0ZXJuaW9uIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDY0QXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnF1YXQ6IHF1YXRkLCBcbi8qKlxuICogVmVjMiBmdW5jdGlvbnMgdGhhdCBkZWZhdWx0IHRvIHJldHVybmluZyBgRmxvYXQ2NEFycmF5YFxuICogQG5hbWVzcGFjZVxuICovXG52ZWMyOiB2ZWMyZCwgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYEZsb2F0NjRBcnJheWBcbiAqIEBuYW1lc3BhY2VcbiAqL1xudmVjMzogdmVjM2QsIFxuLyoqXG4gKiBWZWMzIGZ1bmN0aW9ucyB0aGF0IGRlZmF1bHQgdG8gcmV0dXJuaW5nIGBGbG9hdDY0QXJyYXlgXG4gKiBAbmFtZXNwYWNlXG4gKi9cbnZlYzQ6IHZlYzRkLCB9ID0gd2dwdU1hdHJpeEFQSShGbG9hdDY0QXJyYXksIEZsb2F0NjRBcnJheSwgRmxvYXQ2NEFycmF5LCBGbG9hdDY0QXJyYXksIEZsb2F0NjRBcnJheSwgRmxvYXQ2NEFycmF5KTtcbmNvbnN0IHsgXG4vKipcbiAqIDN4MyBNYXRyaXggZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG5tYXQzOiBtYXQzbiwgXG4vKipcbiAqIDR4NCBNYXRyaXggZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG5tYXQ0OiBtYXQ0biwgXG4vKipcbiAqIFF1YXRlcm5pb24gZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG5xdWF0OiBxdWF0biwgXG4vKipcbiAqIFZlYzIgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG52ZWMyOiB2ZWMybiwgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG52ZWMzOiB2ZWMzbiwgXG4vKipcbiAqIFZlYzMgZnVuY3Rpb25zIHRoYXQgZGVmYXVsdCB0byByZXR1cm5pbmcgYG51bWJlcltdYFxuICogQG5hbWVzcGFjZVxuICovXG52ZWM0OiB2ZWM0biwgfSA9IHdncHVNYXRyaXhBUEkoWmVyb0FycmF5LCBBcnJheSwgQXJyYXksIEFycmF5LCBBcnJheSwgQXJyYXkpO1xuXG5leHBvcnQgeyBtYXQzLCBtYXQzZCwgbWF0M24sIG1hdDQsIG1hdDRkLCBtYXQ0biwgcXVhdCwgcXVhdGQsIHF1YXRuLCB1dGlscywgdmVjMiwgdmVjMmQsIHZlYzJuLCB2ZWMzLCB2ZWMzZCwgdmVjM24sIHZlYzQsIHZlYzRkLCB2ZWM0biB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2dwdS1tYXRyaXgubW9kdWxlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNhbWVyYSA9IHZvaWQgMDtcbmNvbnN0IHdncHVfbWF0cml4XzEgPSByZXF1aXJlKFwid2dwdS1tYXRyaXhcIik7XG5jb25zdCB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuLi90cmFuc2Zvcm1cIik7XG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyAtLS0gRGlydHkgRmxhZ3MgLS0tXG4gICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSB0cnVlO1xuICAgICAgICAvLyBJbml0aWFsaXplIG1hdHJpY2VzIHVzaW5nIHdncHUtbWF0cml4IGlkZW50aXR5XG4gICAgICAgIHRoaXMuX3Byb2plY3Rpb25NYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQuaWRlbnRpdHkoKTtcbiAgICAgICAgdGhpcy5fdmlld01hdHJpeCA9IHdncHVfbWF0cml4XzEubWF0NC5pZGVudGl0eSgpO1xuICAgICAgICAvLyBNYXJrIGFzIGRpcnR5IGluaXRpYWxseSB0byBmb3JjZSBjYWxjdWxhdGlvbiBvbiBmaXJzdCBhY2Nlc3NcbiAgICAgICAgdGhpcy5faXNQcm9qZWN0aW9uRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIC8vIC0tLSBHZXR0ZXJzIGZvciBNYXRyaWNlcyAod2l0aCBsYXp5IGNhbGN1bGF0aW9uKSAtLS1cbiAgICBnZXQgcHJvamVjdGlvbk1hdHJpeCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdGlvbk1hdHJpeDtcbiAgICB9XG4gICAgZ2V0IHZpZXdNYXRyaXgoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1ZpZXdEaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3TWF0cml4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdNYXRyaXg7XG4gICAgfVxuICAgIC8vIE9wdGlvbmFsOiBNZXRob2QgdG8gZm9yY2UgdXBkYXRlIGJvdGggbWF0cmljZXMgaWYgbmVlZGVkXG4gICAgdXBkYXRlTWF0cmljZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzVmlld0RpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXdNYXRyaXgoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQ2FtZXJhID0gQ2FtZXJhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk9ydGhvZ3JhcGhpY0NhbWVyYSA9IGV4cG9ydHMuUGVyc3BlY3RpdmVDYW1lcmEgPSBleHBvcnRzLkNhbWVyYSA9IHZvaWQgMDtcbnZhciBjYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNhbWVyYVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FtZXJhXzEuQ2FtZXJhOyB9IH0pO1xudmFyIHBlcnNwZWN0aXZlX2NhbWVyYV8xID0gcmVxdWlyZShcIi4vcGVyc3BlY3RpdmUtY2FtZXJhXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUGVyc3BlY3RpdmVDYW1lcmFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcnNwZWN0aXZlX2NhbWVyYV8xLlBlcnNwZWN0aXZlQ2FtZXJhOyB9IH0pO1xudmFyIG9ydGhvZ3JhcGhpY19jYW1lcmFfMSA9IHJlcXVpcmUoXCIuL29ydGhvZ3JhcGhpYy1jYW1lcmFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJPcnRob2dyYXBoaWNDYW1lcmFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9ydGhvZ3JhcGhpY19jYW1lcmFfMS5PcnRob2dyYXBoaWNDYW1lcmE7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuT3J0aG9ncmFwaGljQ2FtZXJhID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IGNhbWVyYV8xID0gcmVxdWlyZShcIi4vY2FtZXJhXCIpO1xuY2xhc3MgT3J0aG9ncmFwaGljQ2FtZXJhIGV4dGVuZHMgY2FtZXJhXzEuQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGxlZnQgPSAtMSwgLy8gRGVmYXVsdCBmcnVzdHVtIHNwYW5zIC0xIHRvIDEgaW4gWCBhbmQgWVxuICAgIHJpZ2h0ID0gMSwgYm90dG9tID0gLTEsIHRvcCA9IDEsIG5lYXIgPSAwLjEsIGZhciA9IDEwMDAuMCwgcG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDAsIDEwKSwgLy8gRGVmYXVsdCBwb3NpdGlvblxuICAgIHRhcmdldCA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMCwgMCwgMCksIC8vIERlZmF1bHQgdGFyZ2V0IChvcmlnaW4pXG4gICAgdXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDEsIDApLCAvLyBEZWZhdWx0IHVwIHZlY3RvciAoWS1heGlzKVxuICAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICAgICAgdGhpcy50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMubmVhciA9IG5lYXI7XG4gICAgICAgIHRoaXMuZmFyID0gZmFyO1xuICAgICAgICAvLyBVc2UgY3JlYXRlIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGNvcHlcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5jbG9uZShwb3NpdGlvbik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNsb25lKHRhcmdldCk7XG4gICAgICAgIHRoaXMudXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY2xvbmUodXApO1xuICAgIH1cbiAgICAvLyAtLS0gTWV0aG9kcyB0byBVcGRhdGUgTWF0cmljZXMgLS0tXG4gICAgdXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpIHtcbiAgICAgICAgLy8gY29uc29sZS50cmFjZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIE9ydGhvZ3JhcGhpYyBQcm9qZWN0aW9uIE1hdHJpeFwiKTsgLy8gRm9yIGRlYnVnZ2luZ1xuICAgICAgICAvLyBVc2Ugd2dwdS1tYXRyaXggb3J0aG8gZnVuY3Rpb25cbiAgICAgICAgLy8gbWF0NC5vcnRobyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZGVzdGluYXRpb25NYXRyaXg/KVxuICAgICAgICAvLyBJdCByZXR1cm5zIGEgbmV3IG1hdHJpeCBpZiBkZXN0aW5hdGlvbiBpcyBub3QgcHJvdmlkZWQuXG4gICAgICAgIHRoaXMuX3Byb2plY3Rpb25NYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQub3J0aG8odGhpcy5sZWZ0LCB0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSwgdGhpcy50b3AsIHRoaXMubmVhciwgdGhpcy5mYXIpO1xuICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IGZhbHNlO1xuICAgIH1cbiAgICB1cGRhdGVWaWV3TWF0cml4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIE9ydGhvZ3JhcGhpYyBWaWV3IE1hdHJpeFwiKTsgLy8gRm9yIGRlYnVnZ2luZ1xuICAgICAgICAvLyBVc2Ugd2dwdS1tYXRyaXggbG9va0F0IGZ1bmN0aW9uXG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQubG9va0F0KHRoaXMucG9zaXRpb24sIHRoaXMudGFyZ2V0LCB0aGlzLnVwKTtcbiAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gLS0tIE1ldGhvZHMgdG8gTW9kaWZ5IENhbWVyYSBQcm9wZXJ0aWVzIChhbmQgbWFyayBkaXJ0eSkgLS0tXG4gICAgLy8gVXNpbmcgdmVjMy5lcXVhbHMgZm9yIGNvbXBhcmlzb24gYW5kIHZlYzMuY29weSBmb3Igc2V0dGluZ1xuICAgIHNldFBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgICAgc3VwZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSh4LCB5LCB6KTtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMucG9zaXRpb24sIG5ld1Bvc2l0aW9uKSkge1xuICAgICAgICAgICAgLy8gVXNlIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBpbnB1dCBhcnJheSBpZiBpdCdzIHJldXNlZCBlbHNld2hlcmVcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY29weShuZXdQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7IC8vIGNvcHkoc3JjLCBkc3Q/KVxuICAgICAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRhcmdldChuZXdUYXJnZXQpIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMudGFyZ2V0LCBuZXdUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1RhcmdldCwgdGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFVwKG5ld1VwKSB7XG4gICAgICAgIGlmICghd2dwdV9tYXRyaXhfMS52ZWMzLmVxdWFscyh0aGlzLnVwLCBuZXdVcCkpIHtcbiAgICAgICAgICAgIHRoaXMudXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY29weShuZXdVcCwgdGhpcy51cCk7XG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2V0dGVycyBmb3Igb3J0aG9ncmFwaGljIHByb3BlcnRpZXNcbiAgICBzZXRMZWZ0KG5ld0xlZnQpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdCAhPT0gbmV3TGVmdCkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRSaWdodChuZXdSaWdodCkge1xuICAgICAgICBpZiAodGhpcy5yaWdodCAhPT0gbmV3UmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSBuZXdSaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRCb3R0b20obmV3Qm90dG9tKSB7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbSAhPT0gbmV3Qm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IG5ld0JvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRUb3AobmV3VG9wKSB7XG4gICAgICAgIGlmICh0aGlzLnRvcCAhPT0gbmV3VG9wKSB7XG4gICAgICAgICAgICB0aGlzLnRvcCA9IG5ld1RvcDtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXROZWFyKG5ld05lYXIpIHtcbiAgICAgICAgaWYgKHRoaXMubmVhciAhPT0gbmV3TmVhcikge1xuICAgICAgICAgICAgdGhpcy5uZWFyID0gbmV3TmVhcjtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGYXIobmV3RmFyKSB7XG4gICAgICAgIGlmICh0aGlzLmZhciAhPT0gbmV3RmFyKSB7XG4gICAgICAgICAgICB0aGlzLmZhciA9IG5ld0ZhcjtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3cG9ydFJlc2l6ZWQoXykge1xuICAgICAgICAvLyBub3BcbiAgICB9XG59XG5leHBvcnRzLk9ydGhvZ3JhcGhpY0NhbWVyYSA9IE9ydGhvZ3JhcGhpY0NhbWVyYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QZXJzcGVjdGl2ZUNhbWVyYSA9IHZvaWQgMDtcbmNvbnN0IHdncHVfbWF0cml4XzEgPSByZXF1aXJlKFwid2dwdS1tYXRyaXhcIik7XG5jb25zdCBjYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYVwiKTtcbmNsYXNzIFBlcnNwZWN0aXZlQ2FtZXJhIGV4dGVuZHMgY2FtZXJhXzEuQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGZvdiA9IE1hdGguUEkgLyA0LCAvLyBEZWZhdWx0OiA0NSBkZWdyZWVzIEZPVlxuICAgIGFzcGVjdCA9IDE2IC8gOSwgLy8gRGVmYXVsdDogQ29tbW9uIGFzcGVjdCByYXRpb1xuICAgIG5lYXIgPSAwLjEsIGZhciA9IDEwMDAuMCwgcG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDAsIDEwKSwgLy8gVXNlIHZlYzMuY3JlYXRlIGZvciBkZWZhdWx0XG4gICAgdGFyZ2V0ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSgwLCAwLCAwKSwgLy8gVXNlIHZlYzMuY3JlYXRlIGZvciBkZWZhdWx0XG4gICAgdXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDEsIDApLCAvLyBVc2UgdmVjMy5jcmVhdGUgZm9yIGRlZmF1bHRcbiAgICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZm92ID0gZm92O1xuICAgICAgICB0aGlzLmFzcGVjdCA9IGFzcGVjdDtcbiAgICAgICAgdGhpcy5uZWFyID0gbmVhcjtcbiAgICAgICAgdGhpcy5mYXIgPSBmYXI7XG4gICAgICAgIC8vIFVzZSBjcmVhdGUgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgY29weVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNsb25lKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY2xvbmUodGFyZ2V0KTtcbiAgICAgICAgdGhpcy51cCA9IHdncHVfbWF0cml4XzEudmVjMy5jbG9uZSh1cCk7XG4gICAgfVxuICAgIC8vIC0tLSBNZXRob2RzIHRvIFVwZGF0ZSBNYXRyaWNlcyAtLS1cbiAgICB1cGRhdGVQcm9qZWN0aW9uTWF0cml4KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIFByb2plY3Rpb24gTWF0cml4IHVzaW5nIHdncHUtbWF0cml4XCIpO1xuICAgICAgICB0aGlzLl9wcm9qZWN0aW9uTWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0LnBlcnNwZWN0aXZlKHRoaXMuZm92LCB0aGlzLmFzcGVjdCwgdGhpcy5uZWFyLCB0aGlzLmZhcik7XG4gICAgICAgIHRoaXMuX2lzUHJvamVjdGlvbkRpcnR5ID0gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZVZpZXdNYXRyaXgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgVmlldyBNYXRyaXggdXNpbmcgd2dwdS1tYXRyaXhcIik7XG4gICAgICAgIHRoaXMuX3ZpZXdNYXRyaXggPSB3Z3B1X21hdHJpeF8xLm1hdDQubG9va0F0KHRoaXMucG9zaXRpb24sIHRoaXMudGFyZ2V0LCB0aGlzLnVwKTtcbiAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gLS0tIE1ldGhvZHMgdG8gTW9kaWZ5IENhbWVyYSBQcm9wZXJ0aWVzIChhbmQgbWFyayBkaXJ0eSkgLS0tXG4gICAgLy8gVXNpbmcgdmVjMy5lcXVhbHMgZm9yIGNvbXBhcmlzb24gYW5kIHZlYzMuY29weSBmb3Igc2V0dGluZ1xuICAgIHNldFBvc2l0aW9uKHgsIHksIHopIHtcbiAgICAgICAgc3VwZXIuc2V0UG9zaXRpb24oeCwgeSwgeik7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSh4LCB5LCB6KTtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMucG9zaXRpb24sIG5ld1Bvc2l0aW9uKSkge1xuICAgICAgICAgICAgLy8gVXNlIGNvcHkgdG8gYXZvaWQgbW9kaWZ5aW5nIHRoZSBpbnB1dCBhcnJheSBpZiBpdCdzIHJldXNlZCBlbHNld2hlcmVcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY29weShuZXdQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7IC8vIGNvcHkoc3JjLCBkc3Q/KVxuICAgICAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRhcmdldChuZXdUYXJnZXQpIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMudGFyZ2V0LCBuZXdUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHdncHVfbWF0cml4XzEudmVjMy5jb3B5KG5ld1RhcmdldCwgdGhpcy50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5faXNWaWV3RGlydHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFVwKG5ld1VwKSB7XG4gICAgICAgIGlmICghd2dwdV9tYXRyaXhfMS52ZWMzLmVxdWFscyh0aGlzLnVwLCBuZXdVcCkpIHtcbiAgICAgICAgICAgIHRoaXMudXAgPSB3Z3B1X21hdHJpeF8xLnZlYzMuY29weShuZXdVcCwgdGhpcy51cCk7XG4gICAgICAgICAgICB0aGlzLl9pc1ZpZXdEaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Rm92KG5ld0Zvdikge1xuICAgICAgICBpZiAodGhpcy5mb3YgIT09IG5ld0Zvdikge1xuICAgICAgICAgICAgdGhpcy5mb3YgPSBuZXdGb3Y7XG4gICAgICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXNwZWN0KG5ld0FzcGVjdCkge1xuICAgICAgICBpZiAodGhpcy5hc3BlY3QgIT09IG5ld0FzcGVjdCkge1xuICAgICAgICAgICAgdGhpcy5hc3BlY3QgPSBuZXdBc3BlY3Q7XG4gICAgICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0TmVhcihuZXdOZWFyKSB7XG4gICAgICAgIGlmICh0aGlzLm5lYXIgIT09IG5ld05lYXIpIHtcbiAgICAgICAgICAgIHRoaXMubmVhciA9IG5ld05lYXI7XG4gICAgICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0RmFyKG5ld0Zhcikge1xuICAgICAgICBpZiAodGhpcy5mYXIgIT09IG5ld0Zhcikge1xuICAgICAgICAgICAgdGhpcy5mYXIgPSBuZXdGYXI7XG4gICAgICAgICAgICB0aGlzLl9pc1Byb2plY3Rpb25EaXJ0eSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmlld3BvcnRSZXNpemVkKHNpemUpIHtcbiAgICAgICAgdGhpcy5zZXRBc3BlY3Qoc2l6ZVswXSAvIHNpemVbMV0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUGVyc3BlY3RpdmVDYW1lcmEgPSBQZXJzcGVjdGl2ZUNhbWVyYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db2xvciA9IHZvaWQgMDtcbmNvbnN0IHdncHVfbWF0cml4XzEgPSByZXF1aXJlKFwid2dwdS1tYXRyaXhcIik7XG5jbGFzcyBDb2xvciB7XG4gICAgY29uc3RydWN0b3IociwgZywgYiwgYSA9IDEpIHtcbiAgICAgICAgdGhpcy5yID0gcjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5iID0gYjtcbiAgICAgICAgdGhpcy5hID0gYTtcbiAgICB9XG4gICAgdW5pZm9ybVZhbHVlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuYnVmZmVyKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5idWZmZXIgPSB3Z3B1X21hdHJpeF8xLnZlYzQuY3JlYXRlKCkpO1xuICAgICAgICB0aGlzLmJ1ZmZlci5zZXQoW3RoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gICAgfVxufVxuZXhwb3J0cy5Db2xvciA9IENvbG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXB1dGVUYXNrID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNsYXNzIENvbXB1dGVUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXG4gICAgICAgICAgICB0aGlzLmxhYmVsLFxuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5zaGFkZXIubGFiZWwsXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLmVudHJ5UG9pbnQsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAoY29uc3QgYnVmIG9mIHRoaXMuX29wdGlvbnMuYnVmZmVycyB8fCBbXSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGJ1Zi5idWZmZXIubGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdGV4IG9mIHRoaXMuX29wdGlvbnMudGV4dHVyZXMgfHwgW10pIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh0ZXgudGV4dHVyZS5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBrZXlzLmpvaW4oXCI6XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXk7XG4gICAgfVxuICAgIGdldCBzaGFkZXJNb2R1bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnNoYWRlcjtcbiAgICB9XG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sYWJlbCB8fCBcIkNvbXB1dGUgVGFza1wiO1xuICAgIH1cbiAgICBnZXQgZGlzcGF0Y2hDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnMuZGlzcGF0Y2hDb3VudCB8fCB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDgsIDgsIDEpO1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwTGF5b3V0RGVzY3JpcHRvcigpIHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBsZXQgYmluZGluZyA9IDA7XG4gICAgICAgIGNvbnN0IHsgdGV4dHVyZXMsIGJ1ZmZlcnMsIHNhbXBsZXJzIH0gPSB0aGlzLl9vcHRpb25zO1xuICAgICAgICBpZiAoKHNhbXBsZXJzID09PSBudWxsIHx8IHNhbXBsZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzYW1wbGVycy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoc2FtcGxlcnMgPT09IG51bGwgfHwgc2FtcGxlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhbXBsZXJzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHNhbXBsZXJzW2ldLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmluZGluZysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgodGV4dHVyZXMgPT09IG51bGwgfHwgdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRleHR1cmVzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0ZXh0dXJlcyA9PT0gbnVsbCB8fCB0ZXh0dXJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGV4dHVyZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4ID0gdGV4dHVyZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld0RpbWVuc2lvbiA9IHRleC5kaW1lbnNpb24gfHwgdGV4LnRleHR1cmUuZGltZW5zaW9uO1xuICAgICAgICAgICAgICAgIGlmICh0ZXguYWNjZXNzVHlwZSA9PT0gXCJzYW1wbGVcIikge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IEdQVVNoYWRlclN0YWdlLkNPTVBVVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlVHlwZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlzYW1wbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBhY2Nlc3NUeXBlIH0gPSB0ZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2VzcyA9IGFjY2Vzc1R5cGUgPT09IFwic3RvcmFnZVJlYWRXcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicmVhZC13cml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFjY2Vzc1R5cGUgPT09IFwic3RvcmFnZVdyaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwid3JpdGUtb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJlYWQtb25seVwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXQgPSB0ZXguZm9ybWF0IHx8IHRleC50ZXh0dXJlLmZvcm1hdDtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBHUFVTaGFkZXJTdGFnZS5DT01QVVRFLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmluZGluZysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoYnVmZmVycyA9PT0gbnVsbCB8fCBidWZmZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidWZmZXJzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChidWZmZXJzID09PSBudWxsIHx8IGJ1ZmZlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1ZmZlcnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuQ09NUFVURSxcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB7IHR5cGU6IGJ1ZmZlcnNbaV0udHlwZSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXQgPSB7XG4gICAgICAgICAgICBsYWJlbDogYCR7dGhpcy5sYWJlbH0gQmluZEdyb3VwIExheW91dGAsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwRW50cmllcygpIHtcbiAgICAgICAgbGV0IGJpbmRpbmcgPSAwO1xuICAgICAgICBjb25zdCB7IHRleHR1cmVzLCBidWZmZXJzLCBzYW1wbGVycyB9ID0gdGhpcy5fb3B0aW9ucztcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBpZiAoKHNhbXBsZXJzID09PSBudWxsIHx8IHNhbXBsZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzYW1wbGVycy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoc2FtcGxlcnMgPT09IG51bGwgfHwgc2FtcGxlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNhbXBsZXJzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiBzYW1wbGVyc1tpXS5zYW1wbGVyLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKHRleHR1cmVzID09PSBudWxsIHx8IHRleHR1cmVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZXh0dXJlcy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGV4dHVyZXMgPT09IG51bGwgfHwgdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRleHR1cmVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlOiB0ZXh0dXJlc1tpXS50ZXh0dXJlLnZpZXcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmluZGluZysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoYnVmZmVycyA9PT0gbnVsbCB8fCBidWZmZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidWZmZXJzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChidWZmZXJzID09PSBudWxsIHx8IGJ1ZmZlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1ZmZlcnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHsgYnVmZmVyOiBidWZmZXJzW2ldLmJ1ZmZlciB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICB9XG4gICAgZ2V0QmluZEdyb3VwTGF5b3V0KGRldmljZSkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwTGF5b3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwTGF5b3V0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cExheW91dCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXBMYXlvdXQodGhpcy5iaW5kR3JvdXBMYXlvdXREZXNjcmlwdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRHcm91cExheW91dDtcbiAgICB9XG4gICAgZ2V0QmluZEdyb3VwKGRldmljZSkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuZ2V0QmluZEdyb3VwTGF5b3V0KGRldmljZSk7XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cCA9IGRldmljZS5jcmVhdGVCaW5kR3JvdXAoe1xuICAgICAgICAgICAgbGFiZWw6IGAke3RoaXMubGFiZWx9IEJpbmRHcm91cGAsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICBlbnRyaWVzOiB0aGlzLmJpbmRHcm91cEVudHJpZXMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcHV0ZVRhc2sgPSBDb21wdXRlVGFzaztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZsdWlkU2ltdWxhdGlvbiA9IGV4cG9ydHMuRmx1aWRTaW11bGF0aW9uT3B0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHdncHVfbWF0cml4XzEgPSByZXF1aXJlKFwid2dwdS1tYXRyaXhcIik7XG5jb25zdCBjb21wdXRlX3Rhc2tfMSA9IHJlcXVpcmUoXCIuLi9jb21wdXRlL2NvbXB1dGUtdGFza1wiKTtcbmNvbnN0IHN0cnVjdHNfd2dzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYWRlcnMvc3RydWN0cy53Z3NsXCIpKTtcbmNvbnN0IHN0YWdlMV93Z3NsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2hhZGVycy9zdGFnZTEud2dzbFwiKSk7XG5jb25zdCBzdGFnZTJfd2dzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYWRlcnMvc3RhZ2UyLndnc2xcIikpO1xuY29uc3Qgc3RhZ2UzX3dnc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zaGFkZXJzL3N0YWdlMy53Z3NsXCIpKTtcbmNvbnN0IHVuaWZvcm1fdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91bmlmb3JtLXV0aWxzXCIpO1xuY2xhc3MgRmx1aWRTaW11bGF0aW9uT3B0aW9ucyB7XG4gICAgY29uc3RydWN0b3IocGFydGljbGVzLCBncmlkU2l6ZSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHBhcnRpY2xlcztcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IGdyaWRTaXplO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSAzO1xuICAgICAgICB0aGlzLmR0ID0gMWUtNDtcbiAgICAgICAgdGhpcy5keCA9IDEuMCAvIHRoaXMuZ3JpZFNpemU7XG4gICAgICAgIHRoaXMuaW52RHggPSB0aGlzLmdyaWRTaXplO1xuICAgICAgICB0aGlzLnBhcnRpY2xlSW5pdGlhbFZvbHVtZSA9IE1hdGgucG93KCgxLjAgLyB0aGlzLmdyaWRTaXplKSAqIDAuNSwgdGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZU1hc3MgPSAxLjA7IC8vIE1hdGgucG93KCgxLjAgLyB0aGlzLmdyaWRTaXplKSAqIDAuNSwgdGhpcy5kaW1lbnNpb25zKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gOS44O1xuICAgICAgICB0aGlzLm11MCA9IDVlMyAvICgyLjAgKiAoMS4wICsgMC4yKSk7XG4gICAgICAgIHRoaXMubGFtYmRhMCA9ICg1ZTMgKiAwLjIpIC8gKCgxLjAgKyAwLjIpICogKDEuMCAtIDIuMCAqIDAuMikpO1xuICAgICAgICB0aGlzLmZsdWlkU3RpZmZuZXNzRWYgPSA0MDA7XG4gICAgICAgIHRoaXMuc25vd1BsYXN0aWNpdHlIRmFjdG9yID0gMTA7XG4gICAgICAgIHRoaXMuc25vd1lpZWxkTWluID0gMS4wIC0gMi41ZS0yO1xuICAgICAgICB0aGlzLnNub3dZaWVsZE1heCA9IDEuMCArIDQuNGUtMztcbiAgICAgICAgdGhpcy5ib3VuZGFyeUV4dGVudCA9IDM7XG4gICAgfVxuICAgIGFzVW5pZm9ybUl0ZW1zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJkdFwiLCB2YWx1ZTogdGhpcy5kdCwgdHlwZTogXCJmMzJcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImR4XCIsIHZhbHVlOiB0aGlzLmR4LCB0eXBlOiBcImYzMlwiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiaW52X2R4XCIsIHZhbHVlOiB0aGlzLmludkR4LCB0eXBlOiBcImYzMlwiIH0sIC8vIE5hbWUgaW4gV0dTTCBpcyBpbnZfZHhcbiAgICAgICAgICAgIHsgbmFtZTogXCJncmlkX3NpemVcIiwgdmFsdWU6IHRoaXMuZ3JpZFNpemUsIHR5cGU6IFwidTMyXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaW1lbnNpb25zXCIsIHZhbHVlOiB0aGlzLmRpbWVuc2lvbnMsIHR5cGU6IFwidTMyXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJudW1fcGFydGljbGVzXCIsIHZhbHVlOiB0aGlzLnBhcnRpY2xlcywgdHlwZTogXCJ1MzJcIiB9LCAvLyBOYW1lIGluIFdHU0wgaXMgbnVtX3BhcnRpY2xlc1xuICAgICAgICAgICAgeyBuYW1lOiBcInBhcnRpY2xlX2luaXRpYWxfdm9sdW1lXCIsIHZhbHVlOiB0aGlzLnBhcnRpY2xlSW5pdGlhbFZvbHVtZSwgdHlwZTogXCJmMzJcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInBhcnRpY2xlX21hc3NfcGFyYW1cIiwgdmFsdWU6IHRoaXMucGFydGljbGVNYXNzLCB0eXBlOiBcImYzMlwiIH0sIC8vIE5hbWUgaW4gV0dTTFxuICAgICAgICAgICAgeyBuYW1lOiBcImdyYXZpdHlcIiwgdmFsdWU6IHRoaXMuZ3Jhdml0eSwgdHlwZTogXCJmMzJcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIm11XzBcIiwgdmFsdWU6IHRoaXMubXUwLCB0eXBlOiBcImYzMlwiIH0sIC8vIE5hbWUgaW4gV0dTTFxuICAgICAgICAgICAgeyBuYW1lOiBcImxhbWJkYV8wXCIsIHZhbHVlOiB0aGlzLmxhbWJkYTAsIHR5cGU6IFwiZjMyXCIgfSwgLy8gTmFtZSBpbiBXR1NMXG4gICAgICAgICAgICB7IG5hbWU6IFwiZmx1aWRfc3RpZmZuZXNzX0VmXCIsIHZhbHVlOiB0aGlzLmZsdWlkU3RpZmZuZXNzRWYsIHR5cGU6IFwiZjMyXCIgfSwgLy8gTmFtZSBpbiBXR1NMXG4gICAgICAgICAgICB7IG5hbWU6IFwic25vd19wbGFzdGljaXR5X2hfZmFjdG9yXCIsIHZhbHVlOiB0aGlzLnNub3dQbGFzdGljaXR5SEZhY3RvciwgdHlwZTogXCJmMzJcIiB9LCAvLyBOYW1lIGluIFdHU0xcbiAgICAgICAgICAgIHsgbmFtZTogXCJzbm93X3lpZWxkX21pblwiLCB2YWx1ZTogdGhpcy5zbm93WWllbGRNaW4sIHR5cGU6IFwiZjMyXCIgfSwgLy8gTmFtZSBpbiBXR1NMXG4gICAgICAgICAgICB7IG5hbWU6IFwic25vd195aWVsZF9tYXhcIiwgdmFsdWU6IHRoaXMuc25vd1lpZWxkTWF4LCB0eXBlOiBcImYzMlwiIH0sIC8vIE5hbWUgaW4gV0dTTFxuICAgICAgICAgICAgeyBuYW1lOiBcImJvdW5kYXJ5X2V4dGVudFwiLCB2YWx1ZTogdGhpcy5ib3VuZGFyeUV4dGVudCwgdHlwZTogXCJ1MzJcIiB9LCAvLyBOYW1lIGluIFdHU0xcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn1cbmV4cG9ydHMuRmx1aWRTaW11bGF0aW9uT3B0aW9ucyA9IEZsdWlkU2ltdWxhdGlvbk9wdGlvbnM7XG5jbGFzcyBGbHVpZFNpbXVsYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBvcHRpb25zID0gbmV3IEZsdWlkU2ltdWxhdGlvbk9wdGlvbnMoNDAgKiA0MCAqIDQwLCAxMjgpKSB7XG4gICAgICAgIHRoaXMucGluZ3BvbmcgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGdyaWRFbGVtZW50cyA9IE1hdGgucG93KG9wdGlvbnMuZ3JpZFNpemUsIG9wdGlvbnMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuZ3JpZE1hc3NCdWZmZXIgPSByZW5kZXJlci5jcmVhdGVCdWZmZXIobmV3IFVpbnQzMkFycmF5KGdyaWRFbGVtZW50cyksIEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCk7XG4gICAgICAgIHRoaXMuZ3JpZE1vbWVudHVtQnVmZmVyID0gcmVuZGVyZXIuY3JlYXRlQnVmZmVyKG5ldyBVaW50MzJBcnJheShncmlkRWxlbWVudHMgKiB0aGlzLm9wdGlvbnMuZGltZW5zaW9ucyksIEdQVUJ1ZmZlclVzYWdlLlNUT1JBR0UgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCk7XG4gICAgICAgIHRoaXMuZ3JpZFZlbG9jaXR5QnVmZmVyID0gcmVuZGVyZXIuY3JlYXRlQnVmZmVyKG5ldyBGbG9hdDMyQXJyYXkoZ3JpZEVsZW1lbnRzICogdGhpcy5vcHRpb25zLmRpbWVuc2lvbnMpLCBHUFVCdWZmZXJVc2FnZS5TVE9SQUdFIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5DT1BZX1NSQyk7XG4gICAgICAgIHRoaXMudW5pZm9ybUFyciA9ICgwLCB1bmlmb3JtX3V0aWxzXzEucGFja1VuaWZvcm1zKSh0aGlzLm9wdGlvbnMuYXNVbmlmb3JtSXRlbXMoKSwgdGhpcy51bmlmb3JtQXJyKTtcbiAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVyID0gKDAsIHVuaWZvcm1fdXRpbHNfMS51cGxvYWRVbmlmb3JtQnVmZmVyKSh0aGlzLnVuaWZvcm1BcnIsIHRoaXMucmVuZGVyZXIuZGV2aWNlKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZUJ1ZmZlckEgPSB0aGlzLmluaXRpYWxpemVQYXJ0aWNsZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlQnVmZmVyQiA9IHRoaXMuaW5pdGlhbGl6ZVBhcnRpY2xlQnVmZmVyKCk7XG4gICAgICAgIGNvbnN0IHN0YWdlMVNoYWRlck1vZHVsZSA9IHJlbmRlcmVyLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgICAgICBjb2RlOiBzdHJ1Y3RzX3dnc2xfMS5kZWZhdWx0ICsgc3RhZ2UxX3dnc2xfMS5kZWZhdWx0LFxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhZ2UgMVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3RhZ2UyU2hhZGVyTW9kdWxlID0gcmVuZGVyZXIuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgIGNvZGU6IHN0cnVjdHNfd2dzbF8xLmRlZmF1bHQgKyBzdGFnZTJfd2dzbF8xLmRlZmF1bHQsXG4gICAgICAgICAgICBsYWJlbDogXCJTdGFnZSAyXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdGFnZTNTaGFkZXJNb2R1bGUgPSByZW5kZXJlci5jcmVhdGVTaGFkZXJNb2R1bGUoe1xuICAgICAgICAgICAgY29kZTogc3RydWN0c193Z3NsXzEuZGVmYXVsdCArIHN0YWdlM193Z3NsXzEuZGVmYXVsdCxcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0YWdlIDNcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlV29ya2dyb3VwU2l6ZVggPSA2NDsgLy8gQHdvcmtncm91cF9zaXplKDY0LDEsMSlcbiAgICAgICAgY29uc3QgczEzU2l6ZSA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMucGFydGljbGVzIC8gcGFydGljbGVXb3JrZ3JvdXBTaXplWCk7XG4gICAgICAgIGNvbnN0IHMyU2l6ZSA9IE1hdGguY2VpbCh0aGlzLm9wdGlvbnMuZ3JpZFNpemUgLyA0KTsgLy8gQHdvcmtncm91cF9zaXplKDQsIDQsIDQpXG4gICAgICAgIHRoaXMuc3RhZ2UxID0gW1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcHV0ZVBhc3MoXCJTdGFnZSAxIEFcIiwgd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZShzMTNTaXplLCAxLCAxKSwgc3RhZ2UxU2hhZGVyTW9kdWxlLCBbXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlciwgdHlwZTogXCJ1bmlmb3JtXCIgfSxcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy5ncmlkTWFzc0J1ZmZlciwgdHlwZTogXCJzdG9yYWdlXCIgfSxcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy5ncmlkTW9tZW50dW1CdWZmZXIsIHR5cGU6IFwic3RvcmFnZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMucGFydGljbGVCdWZmZXJBLCB0eXBlOiBcInJlYWQtb25seS1zdG9yYWdlXCIgfSxcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy5wYXJ0aWNsZUJ1ZmZlckIsIHR5cGU6IFwic3RvcmFnZVwiIH0sXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXB1dGVQYXNzKFwiU3RhZ2UgMSBCXCIsIHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoczEzU2l6ZSwgMSwgMSksIHN0YWdlMVNoYWRlck1vZHVsZSwgW1xuICAgICAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXIsIHR5cGU6IFwidW5pZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMuZ3JpZE1hc3NCdWZmZXIsIHR5cGU6IFwic3RvcmFnZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMuZ3JpZE1vbWVudHVtQnVmZmVyLCB0eXBlOiBcInN0b3JhZ2VcIiB9LFxuICAgICAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLnBhcnRpY2xlQnVmZmVyQiwgdHlwZTogXCJyZWFkLW9ubHktc3RvcmFnZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMucGFydGljbGVCdWZmZXJBLCB0eXBlOiBcInN0b3JhZ2VcIiB9LFxuICAgICAgICAgICAgXSksXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhZ2UyID0gdGhpcy5pbml0aWFsaXplQ29tcHV0ZVBhc3MoXCJTdGFnZSAyXCIsIHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoczJTaXplLCBzMlNpemUsIHMyU2l6ZSksIHN0YWdlMlNoYWRlck1vZHVsZSwgW1xuICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMudW5pZm9ybUJ1ZmZlciwgdHlwZTogXCJ1bmlmb3JtXCIgfSxcbiAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLmdyaWRNYXNzQnVmZmVyLCB0eXBlOiBcInN0b3JhZ2VcIiB9LFxuICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMuZ3JpZE1vbWVudHVtQnVmZmVyLCB0eXBlOiBcInN0b3JhZ2VcIiB9LFxuICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMuZ3JpZFZlbG9jaXR5QnVmZmVyLCB0eXBlOiBcInN0b3JhZ2VcIiB9LFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5zdGFnZTMgPSBbXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wdXRlUGFzcyhcIlN0YWdlIDMgQVwiLCB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKHMxM1NpemUsIDEsIDEpLCBzdGFnZTNTaGFkZXJNb2R1bGUsIFtcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy51bmlmb3JtQnVmZmVyLCB0eXBlOiBcInVuaWZvcm1cIiB9LFxuICAgICAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLmdyaWRWZWxvY2l0eUJ1ZmZlciwgdHlwZTogXCJyZWFkLW9ubHktc3RvcmFnZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMucGFydGljbGVCdWZmZXJBLCB0eXBlOiBcInJlYWQtb25seS1zdG9yYWdlXCIgfSxcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy5wYXJ0aWNsZUJ1ZmZlckIsIHR5cGU6IFwic3RvcmFnZVwiIH0sXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXB1dGVQYXNzKFwiU3RhZ2UgMyBCXCIsIHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoczEzU2l6ZSwgMSwgMSksIHN0YWdlM1NoYWRlck1vZHVsZSwgW1xuICAgICAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLnVuaWZvcm1CdWZmZXIsIHR5cGU6IFwidW5pZm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgeyBidWZmZXI6IHRoaXMuZ3JpZFZlbG9jaXR5QnVmZmVyLCB0eXBlOiBcInJlYWQtb25seS1zdG9yYWdlXCIgfSxcbiAgICAgICAgICAgICAgICB7IGJ1ZmZlcjogdGhpcy5wYXJ0aWNsZUJ1ZmZlckIsIHR5cGU6IFwicmVhZC1vbmx5LXN0b3JhZ2VcIiB9LFxuICAgICAgICAgICAgICAgIHsgYnVmZmVyOiB0aGlzLnBhcnRpY2xlQnVmZmVyQSwgdHlwZTogXCJzdG9yYWdlXCIgfSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdO1xuICAgICAgICAvLyBJbiB0aGUgY29uc3RydWN0b3I6XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlU3RydWN0U2l6ZUJ5dGVzID0gMTQ0O1xuICAgICAgICBjb25zdCB0b3RhbFBhcnRpY2xlRGF0YUJ5dGVzID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcyAqIHBhcnRpY2xlU3RydWN0U2l6ZUJ5dGVzO1xuICAgICAgICB0aGlzLnBhcnRpY2xlU3RhZ2luZ0J1ZmZlciA9IHRoaXMucmVuZGVyZXIuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiB0b3RhbFBhcnRpY2xlRGF0YUJ5dGVzLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVUJ1ZmZlclVzYWdlLkNPUFlfRFNUIHwgR1BVQnVmZmVyVXNhZ2UuTUFQX1JFQUQsIC8vIEZvciBjb3B5aW5nIHRvLCBhbmQgbWFwcGluZyBmb3IgQ1BVIHJlYWRcbiAgICAgICAgICAgIGxhYmVsOiBcIlBhcnRpY2xlU3RhZ2luZ0J1ZmZlclwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZURhdGFGb3JSZWFkYmFjayA9IG5ldyBBcnJheUJ1ZmZlcih0b3RhbFBhcnRpY2xlRGF0YUJ5dGVzKTtcbiAgICAgICAgdGhpcy5ncmlkVmVsb2NpdHlTdGFnaW5nQnVmZmVyID0gdGhpcy5yZW5kZXJlci5kZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgICAgIHNpemU6IGdyaWRFbGVtZW50cyAqIG9wdGlvbnMuZGltZW5zaW9ucyAqIDQsXG4gICAgICAgICAgICB1c2FnZTogR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfCBHUFVCdWZmZXJVc2FnZS5NQVBfUkVBRCwgLy8gRm9yIGNvcHlpbmcgdG8sIGFuZCBtYXBwaW5nIGZvciBDUFUgcmVhZFxuICAgICAgICAgICAgbGFiZWw6IFwiVmVsb2NpdHlTdGFnaW5nQnVmZmVyXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcHV0ZVBhc3MobGFiZWwsIGRpc3BhdGNoQ291bnQsIHNoYWRlciwgYnVmZmVycykge1xuICAgICAgICBjb25zdCB0YXNrID0gbmV3IGNvbXB1dGVfdGFza18xLkNvbXB1dGVUYXNrKHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgc2hhZGVyLFxuICAgICAgICAgICAgZW50cnlQb2ludDogXCJtYWluXCIsXG4gICAgICAgICAgICBkaXNwYXRjaENvdW50LFxuICAgICAgICAgICAgYnVmZmVycyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJpbmRHcm91cCA9IHRhc2suZ2V0QmluZEdyb3VwKHRoaXMucmVuZGVyZXIuZGV2aWNlKTtcbiAgICAgICAgY29uc3QgcGlwZWxpbmUgPSB0aGlzLnJlbmRlcmVyLmNvbXB1dGVQaXBlbGluZUZvcih0YXNrKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgICBiaW5kR3JvdXAsXG4gICAgICAgICAgICBwaXBlbGluZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVBhcnRpY2xlQnVmZmVyKCkge1xuICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoKSxcbiAgICAgICAgICAgIGFmZmluZU1hdHJpeEM6IHdncHVfbWF0cml4XzEubWF0My5jcmVhdGUoKSxcbiAgICAgICAgICAgIGRlZm9ybWF0aW9uR3JhZGllbnRGOiB3Z3B1X21hdHJpeF8xLm1hdDMuaWRlbnRpdHkoKSxcbiAgICAgICAgICAgIG1hc3M6IHRoaXMub3B0aW9ucy5wYXJ0aWNsZU1hc3MsXG4gICAgICAgICAgICBKZjogMS4wLFxuICAgICAgICAgICAgSnA6IDEuMCxcbiAgICAgICAgICAgIG1hdGVyaWFsSW5kZXg6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKChrKSA9PiAoeyBuYW1lOiBrIH0pKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBjb25zdCBwYWNrZWQgPSAoMCwgdW5pZm9ybV91dGlsc18xLnBhY2tVbmlmb3JtcykoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGFydGljbGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBhcnRpY2xlXCIsXG4gICAgICAgICAgICAgICAgbWVtYmVycyxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBwYWNrZWRBcnIgPSBuZXcgVWludDhBcnJheShwYWNrZWQpO1xuICAgICAgICBjb25zdCBwYXJ0aWNsZVNpemUgPSBwYWNrZWQuYnl0ZUxlbmd0aDtcbiAgICAgICAgY29uc3QgcGFydGljbGVCdWZmZXJTaXplID0gcGFydGljbGVTaXplICogdGhpcy5vcHRpb25zLnBhcnRpY2xlcztcbiAgICAgICAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkocGFydGljbGVCdWZmZXJTaXplKTtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAyLjA7XG4gICAgICAgIGNvbnN0IHBvcyA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoKTtcbiAgICAgICAgY29uc3QgcG9zQnVmID0gbmV3IFVpbnQ4QXJyYXkocG9zLmJ1ZmZlcik7XG4gICAgICAgIGNvbnN0IHNpZGVMZW4gPSBNYXRoLmNlaWwoTWF0aC5jYnJ0KHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMucGFydGljbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGkgLyAoc2lkZUxlbiAqIHNpZGVMZW4pKSAtIHNpZGVMZW4gKiAwLjU7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcigoaSAlIChzaWRlTGVuICogc2lkZUxlbikpIC8gc2lkZUxlbikgLSBzaWRlTGVuICogMC41O1xuICAgICAgICAgICAgY29uc3QgeiA9IChpICUgc2lkZUxlbikgLSBzaWRlTGVuICogMC41O1xuICAgICAgICAgICAgcG9zLnNldChbeCwgeSwgel0pO1xuICAgICAgICAgICAgd2dwdV9tYXRyaXhfMS52ZWMzLm11bFNjYWxhcihwb3MsIHNjYWxlLCBwb3MpO1xuICAgICAgICAgICAgcGFja2VkQXJyLnNldChwb3NCdWYsIDApO1xuICAgICAgICAgICAgYnVmLnNldChwYWNrZWRBcnIsIGkgKiBwYXJ0aWNsZVNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlQnVmZmVyKGJ1ZiwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QgfFxuICAgICAgICAgICAgR1BVQnVmZmVyVXNhZ2UuQ09QWV9TUkMgfFxuICAgICAgICAgICAgR1BVQnVmZmVyVXNhZ2UuU1RPUkFHRSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkIHBvc2l0aW9uIGJ1ZmZlciBpbiAke3BlcmZvcm1hbmNlLm5vdygpIC0gbm93fW1zYCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRFbmNvZGVyID0gdGhpcy5yZW5kZXJlci5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgICAgY29tbWFuZEVuY29kZXIuY2xlYXJCdWZmZXIodGhpcy5ncmlkTWFzc0J1ZmZlciwgMCk7XG4gICAgICAgIGNvbW1hbmRFbmNvZGVyLmNsZWFyQnVmZmVyKHRoaXMuZ3JpZE1vbWVudHVtQnVmZmVyLCAwKTtcbiAgICAgICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpbkNvbXB1dGVQYXNzKCk7XG4gICAgICAgIGNvbnN0IHN0YWdlMSA9IHRoaXMuc3RhZ2UxW3RoaXMucGluZ3BvbmddO1xuICAgICAgICBjb25zdCBzdGFnZTIgPSB0aGlzLnN0YWdlMjtcbiAgICAgICAgY29uc3Qgc3RhZ2UzID0gdGhpcy5zdGFnZTNbdGhpcy5waW5ncG9uZ107XG4gICAgICAgIGNvbnN0IHN0YWdlMVNpemUgPSBzdGFnZTEudGFzay5kaXNwYXRjaENvdW50O1xuICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZShzdGFnZTEucGlwZWxpbmUpO1xuICAgICAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgc3RhZ2UxLmJpbmRHcm91cCk7XG4gICAgICAgIHBhc3NFbmNvZGVyLmRpc3BhdGNoV29ya2dyb3VwcyhzdGFnZTFTaXplWzBdLCBzdGFnZTFTaXplWzFdLCBzdGFnZTFTaXplWzJdKTtcbiAgICAgICAgY29uc3Qgc3RhZ2UyU2l6ZSA9IHN0YWdlMi50YXNrLmRpc3BhdGNoQ291bnQ7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldFBpcGVsaW5lKHN0YWdlMi5waXBlbGluZSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgwLCBzdGFnZTIuYmluZEdyb3VwKTtcbiAgICAgICAgcGFzc0VuY29kZXIuZGlzcGF0Y2hXb3JrZ3JvdXBzKHN0YWdlMlNpemVbMF0sIHN0YWdlMlNpemVbMV0sIHN0YWdlMlNpemVbMl0pO1xuICAgICAgICBjb25zdCBzdGFnZTNTaXplID0gc3RhZ2UzLnRhc2suZGlzcGF0Y2hDb3VudDtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0UGlwZWxpbmUoc3RhZ2UzLnBpcGVsaW5lKTtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHN0YWdlMy5iaW5kR3JvdXApO1xuICAgICAgICBwYXNzRW5jb2Rlci5kaXNwYXRjaFdvcmtncm91cHMoc3RhZ2UzU2l6ZVswXSwgc3RhZ2UzU2l6ZVsxXSwgc3RhZ2UzU2l6ZVsyXSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICAvLyBJbnNpZGUgdGljaygpLCBhZnRlciBwYXNzRW5jb2Rlci5lbmQoKVxuICAgICAgICAvLyBDaG9vc2Ugd2hpY2ggcGFydGljbGUgYnVmZmVyIGhhcyB0aGUgbGF0ZXN0IGRhdGEuIEFmdGVyIHBpbmdwb25nLCBpdCdzIHRoaXMuc3RhZ2UxWzEtdGhpcy5waW5ncG9uZ10udGFzay5idWZmZXJzWzRdLmJ1ZmZlclxuICAgICAgICAvLyBvciBtb3JlIHNpbXBseSwgaWYgcGluZ3BvbmcgZmxpcHMgYXQgdGhlIGVuZCBvZiB0aWNrLCB0aGUgXCJ3cml0dGVuLXRvXCIgYnVmZmVyIGluIHRoZSAqbmV4dCogZnJhbWUncyBQMkcgaW5wdXRcbiAgICAgICAgLy8gd291bGQgYmUgdGhlIG9uZSB0aGF0IHdhcyBqdXN0IGZ1bGx5IHVwZGF0ZWQuXG4gICAgICAgIC8vIExldCdzIGFzc3VtZSBjdXJyZW50UGFydGljbGVSZWFkQnVmZmVyIChmcm9tIHlvdXIgcGluZy1wb25nIGxvZ2ljKSBob2xkcyB0aGUgZGF0YSB5b3Ugd2FudCB0byBpbnNwZWN0LlxuICAgICAgICAvLyBJZiBwaW5ncG9uZyBpcyAwIGJlZm9yZSB0aGUgZmxpcCwgc3RhZ2UxWzBdIHVzZWQgQSBhcyBpbnB1dCwgQiBhcyBvdXRwdXQuIHN0YWdlM1swXSB1c2VkIEIgYXMgaW5wdXQsIEEgYXMgb3V0cHV0LlxuICAgICAgICAvLyBTbywgaWYgdGhpcy5waW5ncG9uZyBpcyAwIChtZWFuaW5nIG5leHQgZnJhbWUgaXQgd2lsbCBiZSAxKSwgdGhlbiBwYXJ0aWNsZUJ1ZmZlckEgd2FzIHRoZSBmaW5hbCBvdXRwdXQuXG4gICAgICAgIC8vIElmIHRoaXMucGluZ3BvbmcgaXMgMSAobWVhbmluZyBuZXh0IGZyYW1lIGl0IHdpbGwgYmUgMCksIHRoZW4gcGFydGljbGVCdWZmZXJCIHdhcyB0aGUgZmluYWwgb3V0cHV0LlxuICAgICAgICBjb25zdCBmaW5hbE91dHB1dFBhcnRpY2xlQnVmZmVyID0gdGhpcy5waW5ncG9uZyA9PT0gMCA/IHRoaXMucGFydGljbGVCdWZmZXJBIDogdGhpcy5wYXJ0aWNsZUJ1ZmZlckI7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlU3RydWN0U2l6ZUJ5dGVzID0gMTQ0O1xuICAgICAgICBjb25zdCB0b3RhbFBhcnRpY2xlRGF0YUJ5dGVzID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcyAqIHBhcnRpY2xlU3RydWN0U2l6ZUJ5dGVzO1xuICAgICAgICBjb21tYW5kRW5jb2Rlci5jb3B5QnVmZmVyVG9CdWZmZXIoZmluYWxPdXRwdXRQYXJ0aWNsZUJ1ZmZlciwgLy8gU291cmNlOiBUaGUgR1BVIGJ1ZmZlciB3aXRoIGxhdGVzdCBwYXJ0aWNsZSBkYXRhXG4gICAgICAgIDAsIC8vIFNvdXJjZSBvZmZzZXRcbiAgICAgICAgdGhpcy5wYXJ0aWNsZVN0YWdpbmdCdWZmZXIsIC8vIERlc3RpbmF0aW9uOiBUaGUgbWFwcGFibGUgc3RhZ2luZyBidWZmZXJcbiAgICAgICAgMCwgLy8gRGVzdGluYXRpb24gb2Zmc2V0XG4gICAgICAgIHRvdGFsUGFydGljbGVEYXRhQnl0ZXMpO1xuICAgICAgICAvLyBOb3cgZW5jb2RlIHRoZSBjb3B5IGZvciBncmlkVmVsb2NpdHlCdWZmZXJcbiAgICAgICAgY29tbWFuZEVuY29kZXIuY29weUJ1ZmZlclRvQnVmZmVyKHRoaXMuZ3JpZFZlbG9jaXR5QnVmZmVyLCAwLCB0aGlzLmdyaWRWZWxvY2l0eVN0YWdpbmdCdWZmZXIsIC8vIFlvdXIgbmV3IHN0YWdpbmcgYnVmZmVyIGZvciB2ZWxvY2l0aWVzXG4gICAgICAgIDAsIHRoaXMuZ3JpZFZlbG9jaXR5QnVmZmVyLnNpemUpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgICAgIHRoaXMucGluZ3BvbmcgPSAxIC0gdGhpcy5waW5ncG9uZztcbiAgICB9XG4gICAgLy8gQWRkIGEgbWV0aG9kIHRvIHlvdXIgRmx1aWRTaW11bGF0aW9uIGNsYXNzXG4gICAgaW5zcGVjdFBhcnRpY2xlcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChudW1QYXJ0aWNsZXNUb0xvZyA9IDUpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBBRlRFUiB0aGUgcXVldWUuc3VibWl0KCkgY29udGFpbmluZyB0aGUgY29weUJ1ZmZlclRvQnVmZmVyIGhhcyBwcm9jZXNzZWQuXG4gICAgICAgICAgICAvLyBBIHJvYnVzdCB3YXkgaXMgdG8gdXNlIGRldmljZS5xdWV1ZS5vblN1Ym1pdHRlZFdvcmtEb25lKCkgaWYgeW91J3JlIG5vdCBkb2luZyBpdCBwZXIgZnJhbWUuXG4gICAgICAgICAgICAvLyBGb3Igc2ltcGxpY2l0eSwgaWYgY2FsbGVkIHJpZ2h0IGFmdGVyIGEgdGljaygpLCB3ZSBob3BlIHRoZSBjb3B5IGlzIGRvbmUuXG4gICAgICAgICAgICAvLyBBIGJldHRlciBwYXR0ZXJuIGlzIHRvIGRvIHRoZSBtYXBBc3luYyBpbiB0aGUgbmV4dCBmcmFtZSdzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBjYWxsYmFjayxcbiAgICAgICAgICAgIC8vIG9yIGFmdGVyIG9uU3VibWl0dGVkV29ya0RvbmUoKS5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5wYXJ0aWNsZVN0YWdpbmdCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFELCAwLCAvLyBPZmZzZXRcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlU3RhZ2luZ0J1ZmZlci5zaXplKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRSYW5nZSA9IHRoaXMucGFydGljbGVTdGFnaW5nQnVmZmVyLmdldE1hcHBlZFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZGF0YSBzbyB3ZSBjYW4gdW5tYXAgdGhlIGJ1ZmZlciBxdWlja2x5XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGVEYXRhQ29weSA9IG1hcHBlZFJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVTdGFnaW5nQnVmZmVyLnVubWFwKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGVzID0gW107IC8vIE9yIHlvdXIgZGVmaW5lZCBQYXJ0aWNsZSBKUy9UUyBvYmplY3QgdHlwZVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlU2l6ZSA9IDE0NDsgLy8gQnl0ZXMgcGVyIHBhcnRpY2xlLCBmcm9tIHlvdXIgc2V0dXBcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhwYXJ0aWNsZURhdGFDb3B5KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKG51bVBhcnRpY2xlc1RvTG9nLCB0aGlzLm9wdGlvbnMucGFydGljbGVzKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGkgKiBwYXJ0aWNsZVNpemU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB7fTsgLy8gT3IgbmV3IFlvdXJQYXJ0aWNsZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVucGFjayBmaWVsZHMgYmFzZWQgb24geW91ciBQYXJ0aWNsZSBzdHJ1Y3Qgb3JkZXIgYW5kIGFsaWdubWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBpbnZlcnNlIG9mIHlvdXIgcGFja1VuaWZvcm1zIGxvZ2ljIGZvciBhIHNpbmdsZSBwYXJ0aWNsZVxuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyAncG9zaXRpb24nIGlzIGZpcnN0ICh2ZWMzZiwgMTIgYnl0ZXMsIDE2LWJ5dGUgYWxpZ25lZCBibG9jaylcbiAgICAgICAgICAgICAgICAgICAgcC5wb3NpdGlvbiA9IHdncHVfbWF0cml4XzEudmVjMy5mcm9tVmFsdWVzKGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgMCwgdHJ1ZSksIGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgNCwgdHJ1ZSksIGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgOCwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyAndmVsb2NpdHknIGlzIG5leHQgKHZlYzNmLCAxMiBieXRlcywgMTYtYnl0ZSBhbGlnbmVkIGJsb2NrKVxuICAgICAgICAgICAgICAgICAgICBwLnZlbG9jaXR5ID0gd2dwdV9tYXRyaXhfMS52ZWMzLmZyb21WYWx1ZXMoZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAxNiwgdHJ1ZSksIGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgMjAsIHRydWUpLCBkYXRhVmlldy5nZXRGbG9hdDMyKG9mZnNldCArIDI0LCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFmZmluZU1hdHJpeEM6IG1hdDN4M2YuIEVhY2ggY29sdW1uIGlzIHZlYzNmLCBhbGlnbmVkIHRvIDE2IGJ5dGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBUb3RhbCAzICogMTYgPSA0OCBieXRlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sdW1uIDBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzB4ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAzMiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGMweSA9IGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgMzYsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjMHogPSBkYXRhVmlldy5nZXRGbG9hdDMyKG9mZnNldCArIDQwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sdW1uIDFcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzF4ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAzMiArIDE2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzF5ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAzNiArIDE2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzF6ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyA0MCArIDE2LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sdW1uIDJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzJ4ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAzMiArIDMyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzJ5ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAzNiArIDMyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzJ6ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyA0MCArIDMyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcC5hZmZpbmVNYXRyaXhDID0gd2dwdV9tYXRyaXhfMS5tYXQzLmNyZWF0ZShjMHgsIGMweSwgYzB6LCBjMXgsIGMxeSwgYzF6LCBjMngsIGMyeSwgYzJ6KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmb3JtYXRpb25HcmFkaWVudEY6IG1hdDN4M2YgKGFub3RoZXIgNDggYnl0ZXMpXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyBhdCBvZmZzZXQgKyAzMiArIDQ4ID0gb2Zmc2V0ICsgODBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZjB4ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyA4MCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLiAodW5wYWNrIGFsbCA5IGNvbXBvbmVudHMgc2ltaWxhcmx5IHRvIEMpIC4uLlxuICAgICAgICAgICAgICAgICAgICBwLmRlZm9ybWF0aW9uR3JhZGllbnRGID0gd2dwdV9tYXRyaXhfMS5tYXQzLmlkZW50aXR5KCk7IC8vIFBsYWNlaG9sZGVyLCB1bnBhY2sgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFzczogZjMyIChzdGFydHMgYWZ0ZXIgRiwgaS5lLiwgb2Zmc2V0ICsgODAgKyA0OCA9IG9mZnNldCArIDEyOClcbiAgICAgICAgICAgICAgICAgICAgcC5tYXNzID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAxMjgsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBKcDogZjMyIChvZmZzZXQgKyAxMjggKyA0ID0gb2Zmc2V0ICsgMTMyKVxuICAgICAgICAgICAgICAgICAgICBwLkpwID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAxMzIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBKZjogZjMyIChvZmZzZXQgKyAxMzIgKyA0ID0gb2Zmc2V0ICsgMTM2KVxuICAgICAgICAgICAgICAgICAgICBwLkpmID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyAxMzYsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXRlcmlhbEluZGV4OiB1MzIgKG9mZnNldCArIDEzNiArIDQgPSBvZmZzZXQgKyAxNDApXG4gICAgICAgICAgICAgICAgICAgIHAubWF0ZXJpYWxJbmRleCA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgKyAxNDAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkYmFjayBQYXJ0aWNsZXM6XCIsIEpTT04uc3RyaW5naWZ5KHBhcnRpY2xlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIG1hcCBzdGFnaW5nIGJ1ZmZlciBvciByZWFkIHBhcnRpY2xlczpcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnNwZWN0R3JpZFZlbG9jaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAobnVtQ2VsbHNUb0xvZyA9IDEwMCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmdyaWRWZWxvY2l0eVN0YWdpbmdCdWZmZXIubWFwQXN5bmMoR1BVTWFwTW9kZS5SRUFELCAwLCB0aGlzLmdyaWRWZWxvY2l0eVN0YWdpbmdCdWZmZXIuc2l6ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkUmFuZ2UgPSB0aGlzLmdyaWRWZWxvY2l0eVN0YWdpbmdCdWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ29weSA9IG1hcHBlZFJhbmdlLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFZlbG9jaXR5U3RhZ2luZ0J1ZmZlci51bm1hcCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlbG9jaXRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhkYXRhQ29weSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtR3JpZENlbGxzID0gTWF0aC5wb3codGhpcy5vcHRpb25zLmdyaWRTaXplLCB0aGlzLm9wdGlvbnMuZGltZW5zaW9ucyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihudW1DZWxsc1RvTG9nLCBudW1HcmlkQ2VsbHMpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gaSAqIDMgKiA0OyAvLyAzIGZsb2F0cyBwZXIgY2VsbCwgNCBieXRlcyBwZXIgZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdnggPSBkYXRhVmlldy5nZXRGbG9hdDMyKG9mZnNldCArIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2eSA9IGRhdGFWaWV3LmdldEZsb2F0MzIob2Zmc2V0ICsgNCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZ6ID0gZGF0YVZpZXcuZ2V0RmxvYXQzMihvZmZzZXQgKyA4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZ4ICE9PSAwIHx8IHZ5ICE9PSAwIHx8IHZ6ICE9PSAwKSB7IC8vIE9ubHkgbG9nIG5vbi16ZXJvIHZlbG9jaXRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXMucHVzaCh7IHg6IHZ4LCB5OiB2eSwgejogdnogfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZlbG9jaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWRiYWNrIEdyaWQgVmVsb2NpdGllcyAobm9uLXplcm8pOlwiLCBKU09OLnN0cmluZ2lmeSh2ZWxvY2l0aWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWRiYWNrIEdyaWQgVmVsb2NpdGllczogQWxsIGxvZ2dlZCBjZWxscyBhcmUgemVyby5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIG1hcCBvciByZWFkIGdyaWQgdmVsb2NpdHkgc3RhZ2luZyBidWZmZXI6XCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkZsdWlkU2ltdWxhdGlvbiA9IEZsdWlkU2ltdWxhdGlvbjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi8vIEJpbmRpbmdzXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbkBncm91cCgwKSBAYmluZGluZygwKSB2YXI8dW5pZm9ybT4gcGFyYW1zOiBTaW1QYXJhbXM7XFxuQGdyb3VwKDApIEBiaW5kaW5nKDEpIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBncmlkX21hc3NfYXRvbWljOiBhcnJheTxhdG9taWM8aTMyPj47XFxuQGdyb3VwKDApIEBiaW5kaW5nKDIpIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBncmlkX21vbWVudHVtX2F0b21pYzogYXJyYXk8YXRvbWljPGkzMj4+O1xcbkBncm91cCgwKSBAYmluZGluZygzKSB2YXI8c3RvcmFnZSwgcmVhZD4gcGFydGljbGVzX2luOiBhcnJheTxQYXJ0aWNsZT47XFxuQGdyb3VwKDApIEBiaW5kaW5nKDQpIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBwYXJ0aWNsZXNfb3V0OiBhcnJheTxQYXJ0aWNsZT47XFxuXFxuQGNvbXB1dGUgQHdvcmtncm91cF9zaXplKDY0KSAvLyBPciB5b3VyIHByZWZlcnJlZCB3b3JrZ3JvdXAgc2l6ZVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIGlkOiB2ZWMzPHUzMj4pIHtcXG4gICAgaWYgKGlkLnggPj0gcGFyYW1zLm51bV9wYXJ0aWNsZXMpIHtcXG4gICAgICAgIHJldHVybjtcXG4gICAgfVxcblxcbiAgICBsZXQgcCA9IHBhcnRpY2xlc19pbltpZC54XTtcXG5cXG4gICAgLy8gMS4gQ2FsY3VsYXRlIHBhcnRpY2xlIHBvc2l0aW9uIGluIGdyaWQgdW5pdHMgYW5kIGJhc2UgY2VsbCBmb3IgQVBJQyBzdGVuY2lsXFxuICAgIGxldCBwYXJ0aWNsZV9wb3NfZ3JpZF91bml0cyA9IHAucG9zaXRpb24gKiBwYXJhbXMuaW52X2R4O1xcbiAgICAvLyBjZWxsSW5kZXhfYmFzZV9pbnQgaXMgdGhlIGludGVnZXIgZ3JpZCBjZWxsIGluZGV4IGZvciB0aGUgY2VudGVyIG9mIHRoZSAzeDN4MyBzdGVuY2lsXFxuICAgIGxldCBjZWxsSW5kZXhfYmFzZV9mbG9hdCA9IHBhcnRpY2xlX3Bvc19ncmlkX3VuaXRzIC0gMC41O1xcbiAgICBsZXQgY2VsbEluZGV4X2Jhc2VfaW50ID0gdmVjMzxpMzI+KGZsb29yKGNlbGxJbmRleF9iYXNlX2Zsb2F0KSk7XFxuICAgIC8vIGNlbGxEaWZmX2Zyb21fYmFzZV9jZW50ZXIgaXMgcGFydGljbGUncyBzdWItZ3JpZCBwb3MgcmVsYXRpdmUgdG8gdGhlIGNlbnRlciBvZiBjZWxsSW5kZXhfYmFzZV9pbnQncyBjZWxsXFxuICAgIGxldCBjZWxsRGlmZl9mcm9tX2Jhc2VfY2VudGVyID0gY2VsbEluZGV4X2Jhc2VfZmxvYXQgLSB2ZWMzPGYzMj4oY2VsbEluZGV4X2Jhc2VfaW50KTtcXG5cXG4gICAgLy8gMi4gQ2FsY3VsYXRlIDFEIEItc3BsaW5lIHdlaWdodHMgZm9yIHRoZSAzIHN0ZW5jaWwgbm9kZXMgaW4gZWFjaCBkaW1lbnNpb25cXG4gICAgLy8gICAgcmVsYXRpdmUgdG8gY2VsbEluZGV4X2Jhc2VfaW50XFxuICAgIHZhciBic3BsaW5lX3dlaWdodHNfMUQ6IGFycmF5PHZlYzM8ZjMyPiwgMz47IC8vIFtkaW1faWR4XVtvZmZzZXRfaWR4IGZyb20gY2VudGVyOiAtMSwgMCwgKzFdXFxuICAgIGZvciAodmFyIGQgPSAwdTsgZCA8IDN1OyBkID0gZCArIDF1KSB7XFxuICAgICAgICBsZXQgdV9wYXJ0aWNsZV9vZmZzZXQgPSBjZWxsRGlmZl9mcm9tX2Jhc2VfY2VudGVyW2RdO1xcbiAgICAgICAgYnNwbGluZV93ZWlnaHRzXzFEW2RdWzBdID0gcXVhZHJhdGljX2JzcGxpbmVfTih1X3BhcnRpY2xlX29mZnNldCArIDEuMCk7IC8vIFN0ZW5jaWwgb2Zmc2V0IC0xXFxuICAgICAgICBic3BsaW5lX3dlaWdodHNfMURbZF1bMV0gPSBxdWFkcmF0aWNfYnNwbGluZV9OKHVfcGFydGljbGVfb2Zmc2V0KTsgICAgICAgLy8gU3RlbmNpbCBvZmZzZXQgIDBcXG4gICAgICAgIGJzcGxpbmVfd2VpZ2h0c18xRFtkXVsyXSA9IHF1YWRyYXRpY19ic3BsaW5lX04odV9wYXJ0aWNsZV9vZmZzZXQgLSAxLjApOyAvLyBTdGVuY2lsIG9mZnNldCArMVxcbiAgICB9XFxuXFxuICAgIC8vIDMuIEl0ZXJhdGUgb3ZlciAzeDN4MyBzdGVuY2lsXFxuICAgIGZvciAodmFyIGd4X29mZnNldF9pZHggPSAwdTsgZ3hfb2Zmc2V0X2lkeCA8IDN1OyBneF9vZmZzZXRfaWR4ID0gZ3hfb2Zmc2V0X2lkeCArIDF1KSB7XFxuICAgICAgICBmb3IgKHZhciBneV9vZmZzZXRfaWR4ID0gMHU7IGd5X29mZnNldF9pZHggPCAzdTsgZ3lfb2Zmc2V0X2lkeCA9IGd5X29mZnNldF9pZHggKyAxdSkge1xcbiAgICAgICAgICAgIGZvciAodmFyIGd6X29mZnNldF9pZHggPSAwdTsgZ3pfb2Zmc2V0X2lkeCA8IDN1OyBnel9vZmZzZXRfaWR4ID0gZ3pfb2Zmc2V0X2lkeCArIDF1KSB7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxfd2VpZ2h0ID0gYnNwbGluZV93ZWlnaHRzXzFEWzBdW2d4X29mZnNldF9pZHhdICpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzcGxpbmVfd2VpZ2h0c18xRFsxXVtneV9vZmZzZXRfaWR4XSAqXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBic3BsaW5lX3dlaWdodHNfMURbMl1bZ3pfb2Zmc2V0X2lkeF07XFxuXFxuICAgICAgICAgICAgICAgIGlmIChmaW5hbF93ZWlnaHQgPT0gMC4wKSB7IGNvbnRpbnVlOyB9XFxuXFxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRfZ3JpZF9ub2RlX2Fic19pZHggPSBjZWxsSW5kZXhfYmFzZV9pbnQgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjMzxpMzI+KGkzMihneF9vZmZzZXRfaWR4KSwgaTMyKGd5X29mZnNldF9pZHgpLCBpMzIoZ3pfb2Zmc2V0X2lkeCkpIC1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlYzM8aTMyPigxLCAxLCAxKTtcXG5cXG4gICAgICAgICAgICAgICAgLy8gQm91bmRhcnkgY2hlY2sgZm9yIHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeFxcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X2dyaWRfbm9kZV9hYnNfaWR4LnggPCAwIHx8IHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeC54ID49IGkzMihwYXJhbXMuZ3JpZF9zaXplKSB8fFxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2dyaWRfbm9kZV9hYnNfaWR4LnkgPCAwIHx8IHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeC55ID49IGkzMihwYXJhbXMuZ3JpZF9zaXplKSB8fFxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X2dyaWRfbm9kZV9hYnNfaWR4LnogPCAwIHx8IHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeC56ID49IGkzMihwYXJhbXMuZ3JpZF9zaXplKSkge1xcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGxldCBmbGF0X3RhcmdldF9pZHggPSBncmlkX2lkeF9mbGF0KHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeCwgcGFyYW1zLmdyaWRfc2l6ZSk7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgQVBJQyBtb21lbnR1bSB0ZXJtIGNvbnRyaWJ1dGlvblxcbiAgICAgICAgICAgICAgICAvLyBjZWxsRGlzdF93b3JsZCBpcyB2ZWN0b3IgZnJvbSBwYXJ0aWNsZSB0byBjdXJyZW50IGdyaWQgbm9kZSdzIGNlbnRlciAod29ybGQgdW5pdHMpXFxuICAgICAgICAgICAgICAgIGxldCBncmlkX25vZGVfd29ybGRfcG9zID0gKHZlYzM8ZjMyPih0YXJnZXRfZ3JpZF9ub2RlX2Fic19pZHgpICsgMC41KSAqIHBhcmFtcy5keDtcXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxEaXN0X3dvcmxkID0gZ3JpZF9ub2RlX3dvcmxkX3BvcyAtIHAucG9zaXRpb247XFxuICAgICAgICAgICAgICAgIGxldCBRX2FmZmluZV9jb3JyZWN0aW9uID0gcC5hZmZpbmVfbWF0cml4X0MgKiBjZWxsRGlzdF93b3JsZDtcXG5cXG4gICAgICAgICAgICAgICAgLy8gQ29udHJpYnV0aW9uc1xcbiAgICAgICAgICAgICAgICBsZXQgbWFzc19jb250cmliID0gZmluYWxfd2VpZ2h0ICogcC5tYXNzO1xcbiAgICAgICAgICAgICAgICBsZXQgbW9tZW50dW1fY29udHJpYl92ZWMgPSBmaW5hbF93ZWlnaHQgKiAocC5tYXNzICogcC52ZWxvY2l0eSArIFFfYWZmaW5lX2NvcnJlY3Rpb24pO1xcblxcbiAgICAgICAgICAgICAgICAvLyBBdG9taWMgYWRkc1xcbiAgICAgICAgICAgICAgICBhdG9taWNBZGQoJmdyaWRfbWFzc19hdG9taWNbZmxhdF90YXJnZXRfaWR4XSwgZW5jb2RlRml4ZWRQb2ludChtYXNzX2NvbnRyaWIpKTtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGxldCBtb21feF9pZHggPSBmbGF0X3RhcmdldF9pZHggKiAzdSArIDB1O1xcbiAgICAgICAgICAgICAgICBsZXQgbW9tX3lfaWR4ID0gZmxhdF90YXJnZXRfaWR4ICogM3UgKyAxdTtcXG4gICAgICAgICAgICAgICAgbGV0IG1vbV96X2lkeCA9IGZsYXRfdGFyZ2V0X2lkeCAqIDN1ICsgMnU7XFxuXFxuICAgICAgICAgICAgICAgIGF0b21pY0FkZCgmZ3JpZF9tb21lbnR1bV9hdG9taWNbbW9tX3hfaWR4XSwgZW5jb2RlRml4ZWRQb2ludChtb21lbnR1bV9jb250cmliX3ZlYy54KSk7XFxuICAgICAgICAgICAgICAgIGF0b21pY0FkZCgmZ3JpZF9tb21lbnR1bV9hdG9taWNbbW9tX3lfaWR4XSwgZW5jb2RlRml4ZWRQb2ludChtb21lbnR1bV9jb250cmliX3ZlYy55KSk7XFxuICAgICAgICAgICAgICAgIGF0b21pY0FkZCgmZ3JpZF9tb21lbnR1bV9hdG9taWNbbW9tX3pfaWR4XSwgZW5jb2RlRml4ZWRQb2ludChtb21lbnR1bV9jb250cmliX3ZlYy56KSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHBhcnRpY2xlc19vdXRbaWQueF0gPSBwO1xcbn1cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4vLyBCaW5kaW5nc1xcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHBhcmFtczogU2ltUGFyYW1zO1xcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gZ3JpZF9tYXNzX2luOiBhcnJheTxhdG9taWM8aTMyPj47ICAgICAvLyBSZWFkIHRoZSBhdG9taWNhbGx5IHN1bW1lZCBtYXNzXFxuQGdyb3VwKDApIEBiaW5kaW5nKDIpIHZhcjxzdG9yYWdlLCByZWFkX3dyaXRlPiBncmlkX21vbWVudHVtX2luOiBhcnJheTxhdG9taWM8aTMyPj47IC8vIFJlYWQgdGhlIGF0b21pY2FsbHkgc3VtbWVkIG1vbWVudHVtIChmbGF0KVxcbkBncm91cCgwKSBAYmluZGluZygzKSB2YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gZ3JpZF92ZWxvY2l0eV9vdXQ6IGFycmF5PHZlYzM8ZjMyPj47IC8vIFdyaXRlIGZpbmFsIGYzMiB2ZWxvY2l0aWVzXFxuXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi8vIE1haW4gQ29tcHV0ZSBTaGFkZXJcXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuQGNvbXB1dGUgQHdvcmtncm91cF9zaXplKDQsIDQsIDQpIC8vIEV4YW1wbGUgM0Qgd29ya2dyb3VwIHNpemUsIHRvdGFsIDUxMi4gQWRqdXN0IGFzIG5lZWRlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNwYXRjaCB3b3VsZCBiZSBjZWlsKGdyaWRfc2l6ZS84KSBpbiBlYWNoIGRpbWVuc2lvbi5cXG5mbiBtYWluKEBidWlsdGluKGdsb2JhbF9pbnZvY2F0aW9uX2lkKSBncmlkX2Nvb3Jkc19hYnNfdTMyOiB2ZWMzPHUzMj4pIHtcXG4gICAgLy8gZ3JpZF9jb29yZHNfYWJzX3UzMiBhcmUgdGhlIGFic29sdXRlIDNEIGludGVnZXIgY29vcmRpbmF0ZXMgb2YgdGhlIGN1cnJlbnQgZ3JpZCBjZWxsXFxuXFxuICAgIGlmIChncmlkX2Nvb3Jkc19hYnNfdTMyLnggPj0gcGFyYW1zLmdyaWRfc2l6ZSB8fFxcbiAgICAgICAgZ3JpZF9jb29yZHNfYWJzX3UzMi55ID49IHBhcmFtcy5ncmlkX3NpemUgfHxcXG4gICAgICAgIGdyaWRfY29vcmRzX2Fic191MzIueiA+PSBwYXJhbXMuZ3JpZF9zaXplKSB7XFxuICAgICAgICByZXR1cm47IC8vIE91dCBvZiBib3VuZHMgZm9yIHRoZSBncmlkXFxuICAgIH1cXG5cXG4gICAgLy8gQ29udmVydCAzRCBncmlkIGNvb3JkcyB0byAxRCBmbGF0IGluZGV4IGZvciBhY2Nlc3NpbmcgaW5wdXQgYnVmZmVyc1xcbiAgICBsZXQgZmxhdF9pZHggPSBncmlkX2Nvb3Jkc19hYnNfdTMyLnggKiBwYXJhbXMuZ3JpZF9zaXplICogcGFyYW1zLmdyaWRfc2l6ZSArXFxuICAgICAgICAgICAgICAgICAgIGdyaWRfY29vcmRzX2Fic191MzIueSAqIHBhcmFtcy5ncmlkX3NpemUgK1xcbiAgICAgICAgICAgICAgICAgICBncmlkX2Nvb3Jkc19hYnNfdTMyLno7XFxuXFxuICAgIGlmIChmbGF0X2lkeCA9PSAwdSkgeyAvLyBUZXN0IGZvciB0aGUgZmlyc3QgZ3JpZCBjZWxsXFxuICAgICAgICBsZXQgdGVzdF9mbG9hdDogZjMyID0gMS4yMztcXG4gICAgICAgIGxldCBlbmNvZGVkX3Rlc3Q6IGkzMiA9IGVuY29kZUZpeGVkUG9pbnQodGVzdF9mbG9hdCk7IC8vIFVzZXMgRklYRURfUE9JTlRfTVVMVElQTElFUiBmcm9tIHN0cnVjdHMud2dzbFxcbiAgICAgICAgbGV0IGRlY29kZWRfdGVzdDogZjMyID0gZGVjb2RlRml4ZWRQb2ludChlbmNvZGVkX3Rlc3QpO1xcbiAgICAgICAgZ3JpZF92ZWxvY2l0eV9vdXRbZmxhdF9pZHhdID0gdmVjMzxmMzI+KGYzMihlbmNvZGVkX3Rlc3QpLCBkZWNvZGVkX3Rlc3QsIHRlc3RfZmxvYXQpO1xcbiAgICAgICAgcmV0dXJuOyAvLyBPbmx5IHByb2Nlc3MgdGhpcyBvbmUgY2VsbCBmb3IgdGhpcyB0ZXN0XFxuICAgIH1cXG5cXG4gICAgLy8gMS4gRGVjb2RlIG1hc3NcXG4gICAgLy8gYXRvbWljTG9hZCBpcyBub3Qgc3RyaWN0bHkgbmVjZXNzYXJ5IGlmIFN0YWdlIDEgUDJHIGlzIGd1YXJhbnRlZWQgdG8gZmluaXNoIGJlZm9yZSB0aGlzLlxcbiAgICAvLyBXZSBjYW4gdHJlYXQgdGhlbSBhcyByZWd1bGFyIGkzMiBhZnRlciB0aGUgUDJHIHBhc3MuXFxuICAgIC8vIEZvciBjbGFyaXR5IG9mIGludGVudCAodGhhdCB0aGVzZSB3ZXJlIGF0b21pY2FsbHkgd3JpdHRlbik6XFxuICAgIGxldCBtYXNzX2ZpeGVkcG9pbnQgPSBhdG9taWNMb2FkKCZncmlkX21hc3NfaW5bZmxhdF9pZHhdKTtcXG4gICAgbGV0IG1hc3NfZmxvYXQgPSAxLjA7IC8vZGVjb2RlRml4ZWRQb2ludChtYXNzX2ZpeGVkcG9pbnQpO1xcblxcbiAgICB2YXIgZmluYWxfdmVsb2NpdHkgPSB2ZWMzPGYzMj4oMC4wLCAwLjAsIDAuMCk7XFxuXFxuICAgIGlmIChtYXNzX2Zsb2F0ID4gMWUtOSkgeyAvLyBPciBzb21lIG90aGVyIHNtYWxsIGVwc2lsb24gdG8gYXZvaWQgZGl2aXNpb24gYnkgemVyb1xcbiAgICAgICAgLy8gMi4gRGVjb2RlIG1vbWVudHVtXFxuICAgICAgICBsZXQgbW9tX3hfZml4ZWRwb2ludCA9IGF0b21pY0xvYWQoJmdyaWRfbW9tZW50dW1faW5bZmxhdF9pZHggKiBESU1FTlNJT05TICsgMHVdKTtcXG4gICAgICAgIGxldCBtb21feV9maXhlZHBvaW50ID0gYXRvbWljTG9hZCgmZ3JpZF9tb21lbnR1bV9pbltmbGF0X2lkeCAqIERJTUVOU0lPTlMgKyAxdV0pO1xcbiAgICAgICAgbGV0IG1vbV96X2ZpeGVkcG9pbnQgPSBhdG9taWNMb2FkKCZncmlkX21vbWVudHVtX2luW2ZsYXRfaWR4ICogRElNRU5TSU9OUyArIDJ1XSk7XFxuXFxuICAgICAgICB2YXIgbW9tZW50dW1fZmxvYXQgPSB2ZWMzPGYzMj4oXFxuICAgICAgICAgICAgZGVjb2RlRml4ZWRQb2ludChtb21feF9maXhlZHBvaW50KSxcXG4gICAgICAgICAgICBkZWNvZGVGaXhlZFBvaW50KG1vbV95X2ZpeGVkcG9pbnQpLFxcbiAgICAgICAgICAgIGRlY29kZUZpeGVkUG9pbnQobW9tX3pfZml4ZWRwb2ludClcXG4gICAgICAgICk7XFxuXFxuICAgICAgICAvLyAzLiBOb3JtYWxpemUgdG8gZ2V0IHZlbG9jaXR5XFxuICAgICAgICBmaW5hbF92ZWxvY2l0eSA9IG1vbWVudHVtX2Zsb2F0IC8gbWFzc19mbG9hdDtcXG5cXG4gICAgICAgIC8vIGZpbmFsX3ZlbG9jaXR5LnkgPSBmaW5hbF92ZWxvY2l0eS55IC0gOS44ICogMC4wMDAxO1xcblxcbiAgICAgICAgLy8gNC4gQXBwbHkgR3Jhdml0eVxcbiAgICAgICAgZmluYWxfdmVsb2NpdHkueSA9IGZpbmFsX3ZlbG9jaXR5LnkgLSBwYXJhbXMuZ3Jhdml0eSAqIHBhcmFtcy5kdDtcXG5cXG4gICAgICAgIC8vIDUuIEFwcGx5IEJvdW5kYXJ5IENvbmRpdGlvbnNcXG4gICAgICAgIC8vIFVzaW5nIGdyaWRfY29vcmRzX2Fic191MzIgKHdoaWNoIGFyZSAwIHRvIGdyaWRfc2l6ZS0xKVxcbiAgICAgICAgbGV0IGJvdW5kYXJ5X21pbiA9IGYzMihwYXJhbXMuYm91bmRhcnlfZXh0ZW50KTtcXG4gICAgICAgIGxldCBib3VuZGFyeV9tYXggPSBmMzIocGFyYW1zLmdyaWRfc2l6ZSkgLSBmMzIocGFyYW1zLmJvdW5kYXJ5X2V4dGVudCkgLTEuMDsgLy8gLTEgYmVjYXVzZSBncmlkX2Nvb3JkcyBhcmUgMC1pbmRleGVkXFxuXFxuICAgICAgICAvLyBYLWF4aXMgYm91bmRhcmllc1xcbiAgICAgICAgLy8gaWYgKGYzMihncmlkX2Nvb3Jkc19hYnNfdTMyLngpIDwgYm91bmRhcnlfbWluICYmIGZpbmFsX3ZlbG9jaXR5LnggPCAwLjApIHtcXG4gICAgICAgIC8vICAgICBmaW5hbF92ZWxvY2l0eS54ID0gMC4wO1xcbiAgICAgICAgLy8gfVxcbiAgICAgICAgLy8gaWYgKGYzMihncmlkX2Nvb3Jkc19hYnNfdTMyLngpID4gYm91bmRhcnlfbWF4ICYmIGZpbmFsX3ZlbG9jaXR5LnggPiAwLjApIHtcXG4gICAgICAgIC8vICAgICBmaW5hbF92ZWxvY2l0eS54ID0gMC4wO1xcbiAgICAgICAgLy8gfVxcblxcbiAgICAgICAgLy8gLy8gWS1heGlzIGJvdW5kYXJpZXNcXG4gICAgICAgIC8vIGlmIChmMzIoZ3JpZF9jb29yZHNfYWJzX3UzMi55KSA8IGJvdW5kYXJ5X21pbiAmJiBmaW5hbF92ZWxvY2l0eS55IDwgMC4wKSB7XFxuICAgICAgICAvLyAgICAgZmluYWxfdmVsb2NpdHkueSA9IDAuMDtcXG4gICAgICAgIC8vIH1cXG4gICAgICAgIC8vIGlmIChmMzIoZ3JpZF9jb29yZHNfYWJzX3UzMi55KSA+IGJvdW5kYXJ5X21heCAmJiBmaW5hbF92ZWxvY2l0eS55ID4gMC4wKSB7XFxuICAgICAgICAvLyAgICAgLy8gRXhhbXBsZTogU3RpY2t5IHRvcCBib3VuZGFyeSBvciBqdXN0IHJlZmxlY3QvemVyb1xcbiAgICAgICAgLy8gICAgIGZpbmFsX3ZlbG9jaXR5LnkgPSAwLjA7XFxuICAgICAgICAvLyB9XFxuXFxuICAgICAgICAvLyAvLyBaLWF4aXMgYm91bmRhcmllc1xcbiAgICAgICAgLy8gaWYgKGYzMihncmlkX2Nvb3Jkc19hYnNfdTMyLnopIDwgYm91bmRhcnlfbWluICYmIGZpbmFsX3ZlbG9jaXR5LnogPCAwLjApIHtcXG4gICAgICAgIC8vICAgICBmaW5hbF92ZWxvY2l0eS56ID0gMC4wO1xcbiAgICAgICAgLy8gfVxcbiAgICAgICAgLy8gaWYgKGYzMihncmlkX2Nvb3Jkc19hYnNfdTMyLnopID4gYm91bmRhcnlfbWF4ICYmIGZpbmFsX3ZlbG9jaXR5LnogPiAwLjApIHtcXG4gICAgICAgIC8vICAgICBmaW5hbF92ZWxvY2l0eS56ID0gMC4wO1xcbiAgICAgICAgLy8gfVxcbiAgICB9XFxuICAgIC8vIEVsc2UgKG1hc3MgaXMgemVybyksIGZpbmFsX3ZlbG9jaXR5IHJlbWFpbnMgKDAsMCwwKVxcblxcbiAgICAvLyA2LiBXcml0ZSB0byBvdXRwdXQgdmVsb2NpdHkgYnVmZmVyXFxuICAgIGdyaWRfdmVsb2NpdHlfb3V0W2ZsYXRfaWR4XSA9IGZpbmFsX3ZlbG9jaXR5O1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4vLyBCaW5kaW5nc1xcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5AZ3JvdXAoMCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHBhcmFtczogU2ltUGFyYW1zO1xcbkBncm91cCgwKSBAYmluZGluZygxKSB2YXI8c3RvcmFnZSwgcmVhZD4gZ3JpZF92ZWxvY2l0eV9pbjogYXJyYXk8dmVjMzxmMzI+PjtcXG5AZ3JvdXAoMCkgQGJpbmRpbmcoMikgdmFyPHN0b3JhZ2UsIHJlYWQ+IHBhcnRpY2xlc19pbjogYXJyYXk8UGFydGljbGU+O1xcbkBncm91cCgwKSBAYmluZGluZygzKSB2YXI8c3RvcmFnZSwgcmVhZF93cml0ZT4gcGFydGljbGVzX291dDogYXJyYXk8UGFydGljbGU+O1xcblxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4vLyBNYWluIENvbXB1dGUgU2hhZGVyXFxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbkBjb21wdXRlIEB3b3JrZ3JvdXBfc2l6ZSg2NCwgMSwgMSkgLy8gRXhhbXBsZSB3b3JrZ3JvdXAgc2l6ZVxcbmZuIG1haW4oQGJ1aWx0aW4oZ2xvYmFsX2ludm9jYXRpb25faWQpIGlkOiB2ZWMzPHUzMj4pIHtcXG4gICAgaWYgKGlkLnggPj0gcGFyYW1zLm51bV9wYXJ0aWNsZXMpIHtcXG4gICAgICAgIHJldHVybjtcXG4gICAgfVxcblxcbiAgICBsZXQgcF9pbiA9IHBhcnRpY2xlc19pbltpZC54XTtcXG4gICAgdmFyIHBfb3V0ID0gcF9pbjsgLy8gSW5pdGlhbGl6ZSBvdXRwdXQgcGFydGljbGUgd2l0aCBpbnB1dCB2YWx1ZXNcXG5cXG4gICAgLy8gMS4gQ2FsY3VsYXRlIHBhcnRpY2xlIHBvc2l0aW9uIGluIGdyaWQgdW5pdHMgYW5kIGJhc2UgY2VsbCBmb3IgQVBJQyBzdGVuY2lsXFxuICAgIGxldCBwYXJ0aWNsZV9wb3NfZ3JpZF91bml0cyA9IHBfaW4ucG9zaXRpb24gKiBwYXJhbXMuaW52X2R4O1xcbiAgICAvLyBjZWxsSW5kZXhfYmFzZV9pbnQgaXMgdGhlIGludGVnZXIgZ3JpZCBjZWxsIGluZGV4IGZvciB0aGUgY2VudGVyIG9mIHRoZSAzeDN4MyBzdGVuY2lsXFxuICAgIGxldCBjZWxsSW5kZXhfYmFzZV9mbG9hdCA9IHBhcnRpY2xlX3Bvc19ncmlkX3VuaXRzIC0gMC41O1xcbiAgICBsZXQgY2VsbEluZGV4X2Jhc2VfaW50ID0gdmVjMzxpMzI+KGZsb29yKGNlbGxJbmRleF9iYXNlX2Zsb2F0KSk7XFxuICAgIC8vIGNlbGxEaWZmX2Zyb21fYmFzZV9jZW50ZXIgaXMgcGFydGljbGUncyBzdWItZ3JpZCBwb3MgcmVsYXRpdmUgdG8gdGhlIGNlbnRlciBvZiBjZWxsSW5kZXhfYmFzZV9pbnQncyBjZWxsXFxuICAgIGxldCBjZWxsRGlmZl9mcm9tX2Jhc2VfY2VudGVyID0gY2VsbEluZGV4X2Jhc2VfZmxvYXQgLSB2ZWMzPGYzMj4oY2VsbEluZGV4X2Jhc2VfaW50KTtcXG5cXG4gICAgLy8gMi4gQ2FsY3VsYXRlIDFEIEItc3BsaW5lIHdlaWdodHMgKHNhbWUgYXMgaW4gUDJHKVxcbiAgICB2YXIgYnNwbGluZV93ZWlnaHRzXzFEOiBhcnJheTx2ZWMzPGYzMj4sIDM+OyAvLyBbZGltX2lkeF1bb2Zmc2V0X2lkeCBmcm9tIGNlbnRlcjogLTEsIDAsICsxXVxcbiAgICBmb3IgKHZhciBkID0gMHU7IGQgPCAzdTsgZCA9IGQgKyAxdSkge1xcbiAgICAgICAgbGV0IHVfcGFydGljbGVfb2Zmc2V0ID0gY2VsbERpZmZfZnJvbV9iYXNlX2NlbnRlcltkXTtcXG4gICAgICAgIGJzcGxpbmVfd2VpZ2h0c18xRFtkXVswXSA9IHF1YWRyYXRpY19ic3BsaW5lX04odV9wYXJ0aWNsZV9vZmZzZXQgKyAxLjApOyAvLyBTdGVuY2lsIG9mZnNldCAtMVxcbiAgICAgICAgYnNwbGluZV93ZWlnaHRzXzFEW2RdWzFdID0gcXVhZHJhdGljX2JzcGxpbmVfTih1X3BhcnRpY2xlX29mZnNldCk7ICAgICAgIC8vIFN0ZW5jaWwgb2Zmc2V0ICAwXFxuICAgICAgICBic3BsaW5lX3dlaWdodHNfMURbZF1bMl0gPSBxdWFkcmF0aWNfYnNwbGluZV9OKHVfcGFydGljbGVfb2Zmc2V0IC0gMS4wKTsgLy8gU3RlbmNpbCBvZmZzZXQgKzFcXG4gICAgfVxcblxcbiAgICB2YXIgbmV3X3BhcnRpY2xlX3ZlbG9jaXR5ID0gdmVjMzxmMzI+KDAuMCwgMC4wLCAwLjApO1xcbiAgICB2YXIgbmV3X3BhcnRpY2xlX0MgPSBtYXQzeDM8ZjMyPigpOyAvLyBaZXJvIG1hdHJpeFxcblxcbiAgICAvLyAzLiBJdGVyYXRlIG92ZXIgM3gzeDMgc3RlbmNpbCB0byBpbnRlcnBvbGF0ZSB2ZWxvY2l0eSBhbmQgQyBtYXRyaXhcXG4gICAgZm9yICh2YXIgZ3hfb2Zmc2V0X2lkeCA9IDB1OyBneF9vZmZzZXRfaWR4IDwgM3U7IGd4X29mZnNldF9pZHggPSBneF9vZmZzZXRfaWR4ICsgMXUpIHtcXG4gICAgICAgIGZvciAodmFyIGd5X29mZnNldF9pZHggPSAwdTsgZ3lfb2Zmc2V0X2lkeCA8IDN1OyBneV9vZmZzZXRfaWR4ID0gZ3lfb2Zmc2V0X2lkeCArIDF1KSB7XFxuICAgICAgICAgICAgZm9yICh2YXIgZ3pfb2Zmc2V0X2lkeCA9IDB1OyBnel9vZmZzZXRfaWR4IDwgM3U7IGd6X29mZnNldF9pZHggPSBnel9vZmZzZXRfaWR4ICsgMXUpIHtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIGxldCBmaW5hbF93ZWlnaHQgPSBic3BsaW5lX3dlaWdodHNfMURbMF1bZ3hfb2Zmc2V0X2lkeF0gKlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNwbGluZV93ZWlnaHRzXzFEWzFdW2d5X29mZnNldF9pZHhdICpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJzcGxpbmVfd2VpZ2h0c18xRFsyXVtnel9vZmZzZXRfaWR4XTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsX3dlaWdodCA9PSAwLjApIHsgY29udGludWU7IH1cXG5cXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldF9ncmlkX25vZGVfYWJzX2lkeCA9IGNlbGxJbmRleF9iYXNlX2ludCArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMzPGkzMj4oaTMyKGd4X29mZnNldF9pZHgpLCBpMzIoZ3lfb2Zmc2V0X2lkeCksIGkzMihnel9vZmZzZXRfaWR4KSkgLVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjMzxpMzI+KDEsIDEsIDEpOyAvLyBBYnNvbHV0ZSBncmlkIGluZGljZXNcXG5cXG4gICAgICAgICAgICAgICAgLy8gRm9yIEcyUCwgd2UgcmVhZCBmcm9tIGdyaWQuIEJvdW5kYXJ5IGhhbmRsaW5nIGZvciByZWFkcyBpcyBvZnRlbiBkb25lIGJ5IGNsYW1waW5nXFxuICAgICAgICAgICAgICAgIC8vIGluZGljZXMgaW4gdGhlIGdyaWRfaWR4X2ZsYXQgZnVuY3Rpb24gb3IgZW5zdXJpbmcgcGFydGljbGVzIGRvbid0IGdldCB0b28gY2xvc2UuXFxuICAgICAgICAgICAgICAgIC8vIFRoZSBncmlkX2lkeF9mbGF0IGFib3ZlIGluY2x1ZGVzIGNsYW1waW5nLlxcbiAgICAgICAgICAgICAgICBsZXQgZmxhdF90YXJnZXRfaWR4ID0gZ3JpZF9pZHhfZmxhdF9jbGFtcCh0YXJnZXRfZ3JpZF9ub2RlX2Fic19pZHgsIHBhcmFtcy5ncmlkX3NpemUpO1xcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZF9ub2RlX3ZlbCA9IGdyaWRfdmVsb2NpdHlfaW5bZmxhdF90YXJnZXRfaWR4XTtcXG5cXG4gICAgICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGUgcGFydGljbGUgdmVsb2NpdHlcXG4gICAgICAgICAgICAgICAgbmV3X3BhcnRpY2xlX3ZlbG9jaXR5ID0gbmV3X3BhcnRpY2xlX3ZlbG9jaXR5ICsgZmluYWxfd2VpZ2h0ICogZ3JpZF9ub2RlX3ZlbDtcXG5cXG4gICAgICAgICAgICAgICAgLy8gSW50ZXJwb2xhdGUgQyBtYXRyaXggKEFQSUMpXFxuICAgICAgICAgICAgICAgIC8vIGRpc3RfZ3JpZF9ub2RlX3RvX3BhcnRpY2xlX3dvcmxkIGlzIHZlY3RvciBmcm9tIGdyaWQgbm9kZSBjZW50ZXIgdG8gcGFydGljbGUgKHdvcmxkIHVuaXRzKVxcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZF9ub2RlX3dvcmxkX3BvcyA9ICh2ZWMzPGYzMj4odGFyZ2V0X2dyaWRfbm9kZV9hYnNfaWR4KSArIDAuNSkgKiBwYXJhbXMuZHg7XFxuICAgICAgICAgICAgICAgIGxldCBkaXN0X2dyaWRfbm9kZV90b19wYXJ0aWNsZV93b3JsZCA9IHBfaW4ucG9zaXRpb24gLSBncmlkX25vZGVfd29ybGRfcG9zO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgLy8gT3JpZ2luYWwgTUxTLU1QTS9BUElDIEMgdXBkYXRlOiBDICs9IDQgKiBpbnZfZHheMiAqIHdlaWdodCAqIHZlbF9ncmlkICogKHBvc19ncmlkIC0gcG9zX3BhcnRpY2xlKV93b3JsZFxcbiAgICAgICAgICAgICAgICAvLyBUaGUgZmFjdG9yIGludl9keF4yIGlzIG9mdGVuIGJlY2F1c2UgQyBpdHNlbGYgcmVwcmVzZW50cyBkdi9keCwgYW5kIGRwb3MgaXMgZHguXFxuICAgICAgICAgICAgICAgIC8vIFB5dGhvbjogbmV3X0MgKz0gNCAqIGludl9keCAqIHdlaWdodCAqIGdfdi5vdXRlcl9wcm9kdWN0KGRwb3MpIHdoZXJlIGRwb3MgaXMgKG9mZnNldF9mbG9hdCAtIGZ4X25vcm0pXFxuICAgICAgICAgICAgICAgIC8vIChvZmZzZXRfZmxvYXQgLSBmeF9ub3JtKSBpcyBsaWtlIChncmlkX25vZGVfcmVsX3RvX2Jhc2UgLSBwYXJ0aWNsZV9wb3NfcmVsX3RvX2Jhc2UpXFxuICAgICAgICAgICAgICAgIC8vID0gKGdyaWRfbm9kZV9hYnMgLSBwYXJ0aWNsZV9wb3NfYWJzKSBpbiBncmlkIHVuaXRzXFxuICAgICAgICAgICAgICAgIC8vIFNvIGRwb3NfZ3JpZF91bml0cyA9IHZlYzM8ZjMyPih0YXJnZXRfZ3JpZF9ub2RlX2Fic19pZHgpIC0gcGFydGljbGVfcG9zX2dyaWRfdW5pdHNcXG4gICAgICAgICAgICAgICAgbGV0IGRwb3NfZ3JpZF91bml0cyA9IHZlYzM8ZjMyPih0YXJnZXRfZ3JpZF9ub2RlX2Fic19pZHgpIC0gcGFydGljbGVfcG9zX2dyaWRfdW5pdHM7XFxuXFxuICAgICAgICAgICAgICAgIGxldCB0ZXJtX291dGVyX3Byb2R1Y3QgPSBjYWxjdWxhdGVfb3V0ZXJfcHJvZHVjdChncmlkX25vZGVfdmVsLCBkcG9zX2dyaWRfdW5pdHMpO1xcbiAgICAgICAgICAgICAgICBuZXdfcGFydGljbGVfQyA9IG5ld19wYXJ0aWNsZV9DICsgKCAoNC4wICogcGFyYW1zLmludl9keCkgKiBmaW5hbF93ZWlnaHQpICogdGVybV9vdXRlcl9wcm9kdWN0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyA0LiBVcGRhdGUgcGFydGljbGUgc3RhdGVcXG4gICAgcF9vdXQudmVsb2NpdHkgPSBuZXdfcGFydGljbGVfdmVsb2NpdHk7XFxuICAgIHBfb3V0LmFmZmluZV9tYXRyaXhfQyA9IG5ld19wYXJ0aWNsZV9DO1xcblxcbiAgICAvLyBVcGRhdGUgSmYgKGVsYXN0aWMgdm9sdW1lIGRldGVybWluYW50KSAtIGFzIGluIG1sc19tcG0ucHkgRzJQXFxuICAgIC8vIEpmW3BdICo9IDEgKyBkdCAqIG5ld19DLnRyYWNlKClcXG4gICAgbGV0IHRyYWNlX0MgPSBuZXdfcGFydGljbGVfQ1swXVswXSArIG5ld19wYXJ0aWNsZV9DWzFdWzFdICsgbmV3X3BhcnRpY2xlX0NbMl1bMl07XFxuICAgIHBfb3V0LkpmID0gcF9pbi5KZiAqICgxLjAgKyBwYXJhbXMuZHQgKiB0cmFjZV9DKTtcXG5cXG4gICAgLy8gQWR2ZWN0IHBhcnRpY2xlIHBvc2l0aW9uICh1c2luZyBuZXcgdmVsb2NpdHkpXFxuICAgIHBfb3V0LnBvc2l0aW9uID0gcF9pbi5wb3NpdGlvbiArIG5ld19wYXJ0aWNsZV92ZWxvY2l0eSAqIHBhcmFtcy5kdDtcXG4gICAgXFxuICAgIC8vIEYgYW5kIEpwIHdlcmUgdXBkYXRlZCBpbiBQMkcuIE1hc3MgYW5kIG1hdGVyaWFsX2lkeCBhcmUgdW5jaGFuZ2VkLlxcbiAgICBwYXJ0aWNsZXNfb3V0W2lkLnhdID0gcF9vdXQ7XFxufVxcblxcbmZuIGNhbGN1bGF0ZV9vdXRlcl9wcm9kdWN0KGE6IHZlYzM8ZjMyPiwgYjogdmVjMzxmMzI+KSAtPiBtYXQzeDM8ZjMyPiB7XFxuICAgIGxldCBjb2wwID0gYSAqIGIueDtcXG4gICAgbGV0IGNvbDEgPSBhICogYi55O1xcbiAgICBsZXQgY29sMiA9IGEgKiBiLno7XFxuICAgIHJldHVybiBtYXQzeDM8ZjMyPihjb2wwLCBjb2wxLCBjb2wyKTtcXG59XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuLy8gU3RydWN0dXJlc1xcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5zdHJ1Y3QgU2ltUGFyYW1zIHtcXG4gICAgZHQ6IGYzMixcXG4gICAgZHg6IGYzMixcXG4gICAgaW52X2R4OiBmMzIsXFxuICAgIGdyaWRfc2l6ZTogdTMyLFxcbiAgICBkaW1lbnNpb25zOiB1MzIsXFxuICAgIG51bV9wYXJ0aWNsZXM6IHUzMixcXG5cXG4gICAgcGFydGljbGVfaW5pdGlhbF92b2x1bWU6IGYzMixcXG4gICAgcGFydGljbGVfbWFzc19wYXJhbTogZjMyLFxcbiAgICBncmF2aXR5OiBmMzIsXFxuXFxuICAgIG11XzA6IGYzMixcXG4gICAgbGFtYmRhXzA6IGYzMixcXG4gICAgZmx1aWRfc3RpZmZuZXNzX0VmOiBmMzIsXFxuXFxuICAgIHNub3dfcGxhc3RpY2l0eV9oX2ZhY3RvcjogZjMyLFxcbiAgICBzbm93X3lpZWxkX21pbjogZjMyLFxcbiAgICBzbm93X3lpZWxkX21heDogZjMyLFxcblxcbiAgICBib3VuZGFyeV9leHRlbnQ6IHUzMixcXG59O1xcblxcbnN0cnVjdCBQYXJ0aWNsZSB7XFxuICAgIHBvc2l0aW9uOiB2ZWMzPGYzMj4sXFxuICAgIHZlbG9jaXR5OiB2ZWMzPGYzMj4sXFxuICAgIGFmZmluZV9tYXRyaXhfQzogbWF0M3gzPGYzMj4sXFxuICAgIGRlZm9ybWF0aW9uX2dyYWRpZW50X0Y6IG1hdDN4MzxmMzI+LFxcbiAgICBtYXNzOiBmMzIsXFxuICAgIEpwOiBmMzIsXFxuICAgIEpmOiBmMzIsXFxuICAgIG1hdGVyaWFsX2lkeDogdTMyLFxcbn07XFxuXFxuY29uc3QgRklYRURfUE9JTlRfTVVMVElQTElFUjogZjMyID0gMTAwMDAuMDsgLy8gRGVmaW5lIHlvdXIgbXVsdGlwbGllclxcbmNvbnN0IEZJWEVEX1BPSU5UX01VTFRJUExJRVJfSU5WOiBmMzIgPSAxLjAgLyBGSVhFRF9QT0lOVF9NVUxUSVBMSUVSO1xcbmNvbnN0IERJTUVOU0lPTlMgPSAzdTtcXG5cXG5mbiBlbmNvZGVGaXhlZFBvaW50KHZhbDogZjMyKSAtPiBpMzIge1xcbiAgICByZXR1cm4gaTMyKHZhbCAqIEZJWEVEX1BPSU5UX01VTFRJUExJRVIpO1xcbn1cXG5cXG5mbiBkZWNvZGVGaXhlZFBvaW50KGZpeGVkX3ZhbDogaTMyKSAtPiBmMzIge1xcbiAgICByZXR1cm4gZjMyKGZpeGVkX3ZhbCkgKiBGSVhFRF9QT0lOVF9NVUxUSVBMSUVSX0lOVjtcXG59XFxuXFxuZm4gZ3JpZF9pZHhfZmxhdF9jbGFtcChjZWxsX2Nvb3Jkc19hYnM6IHZlYzM8aTMyPiwgbl9ncmlkOiB1MzIpIC0+IHUzMiB7XFxuICAgIC8vIEVuc3VyZSBwb3NpdGl2ZSBiZWZvcmUgY2FzdGluZyBmb3Igc2FmZXR5IGlmIGNlbGxfY29vcmRzX2FicyBjYW4gYmUgbmVnYXRpdmVcXG4gICAgLy8gSG93ZXZlciwgZm9yIHJlYWRpbmcsIHdlIGV4cGVjdCB0aGVtIHRvIGJlIHZhbGlkIGFmdGVyIGJvdW5kYXJ5IGNoZWNrcyBpZiBhbnkuXFxuICAgIC8vIEZvciBHMlAsIHBhcnRpY2xlIGNhbiBiZSBuZWFyIGJvdW5kYXJ5LCBzbyBzdGVuY2lsIG5vZGVzIGNhbiBiZSBvdXQgb2YgYm91bmRzLlxcbiAgICBsZXQgeCA9IHUzMihjbGFtcChjZWxsX2Nvb3Jkc19hYnMueCwgMCwgaTMyKG5fZ3JpZCAtIDF1KSkpO1xcbiAgICBsZXQgeSA9IHUzMihjbGFtcChjZWxsX2Nvb3Jkc19hYnMueSwgMCwgaTMyKG5fZ3JpZCAtIDF1KSkpO1xcbiAgICBsZXQgeiA9IHUzMihjbGFtcChjZWxsX2Nvb3Jkc19hYnMueiwgMCwgaTMyKG5fZ3JpZCAtIDF1KSkpO1xcbiAgICByZXR1cm4geCAqIG5fZ3JpZCAqIG5fZ3JpZCArIHkgKiBuX2dyaWQgKyB6O1xcbn1cXG5cXG5mbiBncmlkX2lkeF9mbGF0KGNlbGxfY29vcmRzX2FiczogdmVjMzxpMzI+LCBuX2dyaWQ6IHUzMikgLT4gdTMyIHtcXG4gICAgcmV0dXJuIHUzMihjZWxsX2Nvb3Jkc19hYnMueCkgKiBuX2dyaWQgKiBuX2dyaWQgK1xcbiAgICAgICAgICAgdTMyKGNlbGxfY29vcmRzX2Ficy55KSAqIG5fZ3JpZCArXFxuICAgICAgICAgICB1MzIoY2VsbF9jb29yZHNfYWJzLnopO1xcbn1cXG5cXG4vLyBIZWxwZXIgdG8gY29udmVydCAxRCBmbGF0IGdyaWQgaW5kZXggdG8gM0QgaW50ZWdlciBncmlkIGNvb3JkaW5hdGVzXFxuZm4gZmxhdF9pZHhfdG9fM2RfY29vcmRzKGZsYXRfaWR4OiB1MzIsIG5fZ3JpZDogdTMyKSAtPiB2ZWMzPGkzMj4ge1xcbiAgICBsZXQgeiA9IGkzMihmbGF0X2lkeCAvIChuX2dyaWQgKiBuX2dyaWQpKTtcXG4gICAgbGV0IHJlbWFpbmRlciA9IGZsYXRfaWR4ICUgKG5fZ3JpZCAqIG5fZ3JpZCk7XFxuICAgIGxldCB5ID0gaTMyKHJlbWFpbmRlciAvIG5fZ3JpZCk7XFxuICAgIGxldCB4ID0gaTMyKHJlbWFpbmRlciAlIG5fZ3JpZCk7XFxuICAgIHJldHVybiB2ZWMzPGkzMj4oeCwgeSwgeik7XFxufVxcblxcbi8vIEhlbHBlciBmb3IgQVBJQyBCLVNwbGluZVxcbi8vIHUgaXMgZGlzdGFuY2UgZnJvbSBwYXJ0aWNsZSB0byBncmlkIG5vZGUgY2VudGVyLCBpbiB1bml0cyBvZiBjZWxsIHNpemVzXFxuZm4gcXVhZHJhdGljX2JzcGxpbmVfTih1IDogZjMyKSAtPiBmMzIge1xcbiAgICBsZXQgYWJzX3UgPSBhYnModSk7XFxuICAgIHZhciBOX3UgPSAwLjA7XFxuICAgIGlmIChhYnNfdSA8IDAuNSkge1xcbiAgICAgICAgTl91ID0gMC43NSAtIGFic191ICogYWJzX3U7XFxuICAgIH0gZWxzZSBpZiAoYWJzX3UgPCAxLjUpIHtcXG4gICAgICAgIE5fdSA9IDAuNSAqICgxLjUgLSBhYnNfdSkgKiAoMS41IC0gYWJzX3UpO1xcbiAgICB9XFxuICAgIHJldHVybiBOX3U7XFxufVxcblwiOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CaWdUcmlhbmdsZSA9IHZvaWQgMDtcbmNvbnN0IGdlb21ldHJ5XzEgPSByZXF1aXJlKFwiLi9nZW9tZXRyeVwiKTtcbmNsYXNzIEJpZ1RyaWFuZ2xlIGV4dGVuZHMgZ2VvbWV0cnlfMS5HZW9tZXRyeSB7XG4gICAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3QgdmVydGV4QnVmZmVyID0gcmVuZGVyZXIuY3JlYXRlQnVmZmVyKG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgLTEsIC0xLCAwLCAvKiAqLyAwLCAwLCAvKiAqLyAwLCAwLCAxLFxuICAgICAgICAgICAgMywgLTEsIDAsIC8qICovIDIsIDAsIC8qICovIDAsIDAsIDEsXG4gICAgICAgICAgICAtMSwgMywgMCwgLyogKi8gMCwgMiwgLyogKi8gMCwgMCwgMVxuICAgICAgICBdKSwgR1BVQnVmZmVyVXNhZ2UuVkVSVEVYKTtcbiAgICAgICAgY29uc3QgaW5kZXhCdWZmZXIgPSByZW5kZXJlci5jcmVhdGVCdWZmZXIobmV3IFVpbnQxNkFycmF5KFswLCAxLCAyXSksIEdQVUJ1ZmZlclVzYWdlLklOREVYKTtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIHZlcnRleEJ1ZmZlciwgaW5kZXhCdWZmZXIsIDMsIDMpO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBcImJpZy10cmlhbmdsZVwiO1xuICAgIH1cbiAgICBnZXQgYnVmZmVyTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTG9jYXRpb246IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZmxvYXQzMngzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAzICogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmbG9hdDMyeDJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTG9jYXRpb246IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDUgKiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZsb2F0MzJ4M1wiLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhcnJheVN0cmlkZTogOCAqIDQsXG4gICAgICAgICAgICAgICAgc3RlcE1vZGU6IFwidmVydGV4XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxufVxuZXhwb3J0cy5CaWdUcmlhbmdsZSA9IEJpZ1RyaWFuZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkN1YmVHZW9tZXRyeSA9IHZvaWQgMDtcbmNvbnN0IGdlb21ldHJ5XzEgPSByZXF1aXJlKFwiLi9nZW9tZXRyeVwiKTtcbmZ1bmN0aW9uIF9jcmVhdGVDdWJlR2VvbWV0cnlEYXRhKCkge1xuICAgIGNvbnN0IGZsb2F0c1BlclZlcnRleCA9IDg7IC8vIHBvc2l0aW9uICgzKSArIHV2ICgyKSArIG5vcm1hbCAoMylcbiAgICBjb25zdCBhcnJheVN0cmlkZSA9IGZsb2F0c1BlclZlcnRleCAqIDQ7IC8vIEJ5dGVzIHBlciB2ZXJ0ZXhcbiAgICBjb25zdCBmYWNlRGF0YSA9IFtcbiAgICAgICAgLy8gRnJvbnQgZmFjZSAoK1opIC0gTm9ybWFsOiBbMCwgMCwgMV1cbiAgICAgICAgLy8gVmVydGljZXM6IEJMLCBCUiwgVFIsIFRMIChCb3R0b21MZWZ0LCBCb3R0b21SaWdodCwgVG9wUmlnaHQsIFRvcExlZnQpXG4gICAgICAgIFstMC41LCAtMC41LCAwLjUsIDAsIDEsIDAsIDAsIDFdLFxuICAgICAgICBbMC41LCAtMC41LCAwLjUsIDEsIDEsIDAsIDAsIDFdLFxuICAgICAgICBbMC41LCAwLjUsIDAuNSwgMSwgMCwgMCwgMCwgMV0sXG4gICAgICAgIFstMC41LCAwLjUsIDAuNSwgMCwgMCwgMCwgMCwgMV0sXG4gICAgICAgIC8vIEJhY2sgZmFjZSAoLVopIC0gTm9ybWFsOiBbMCwgMCwgLTFdXG4gICAgICAgIC8vIFZlcnRpY2VzOiBCUiwgQkwsIFRMLCBUUiAoVVZzIGFyZSBmbGlwcGVkIGZvciBzdGFuZGFyZCB0ZXh0dXJlIG1hcHBpbmcgb24gYmFjaylcbiAgICAgICAgWzAuNSwgLTAuNSwgLTAuNSwgMSwgMSwgMCwgMCwgLTFdLFxuICAgICAgICBbLTAuNSwgLTAuNSwgLTAuNSwgMCwgMSwgMCwgMCwgLTFdLFxuICAgICAgICBbLTAuNSwgMC41LCAtMC41LCAwLCAwLCAwLCAwLCAtMV0sXG4gICAgICAgIFswLjUsIDAuNSwgLTAuNSwgMSwgMCwgMCwgMCwgLTFdLFxuICAgICAgICAvLyBSaWdodCBmYWNlICgrWCkgLSBOb3JtYWw6IFsxLCAwLCAwXVxuICAgICAgICAvLyBWZXJ0aWNlczogQkwsIEJSLCBUUiwgVExcbiAgICAgICAgWzAuNSwgLTAuNSwgMC41LCAwLCAxLCAxLCAwLCAwXSxcbiAgICAgICAgWzAuNSwgLTAuNSwgLTAuNSwgMSwgMSwgMSwgMCwgMF0sXG4gICAgICAgIFswLjUsIDAuNSwgLTAuNSwgMSwgMCwgMSwgMCwgMF0sXG4gICAgICAgIFswLjUsIDAuNSwgMC41LCAwLCAwLCAxLCAwLCAwXSxcbiAgICAgICAgLy8gTGVmdCBmYWNlICgtWCkgLSBOb3JtYWw6IFstMSwgMCwgMF1cbiAgICAgICAgLy8gVmVydGljZXM6IEJSLCBCTCwgVEwsIFRSXG4gICAgICAgIFstMC41LCAtMC41LCAtMC41LCAxLCAxLCAtMSwgMCwgMF0sXG4gICAgICAgIFstMC41LCAtMC41LCAwLjUsIDAsIDEsIC0xLCAwLCAwXSxcbiAgICAgICAgWy0wLjUsIDAuNSwgMC41LCAwLCAwLCAtMSwgMCwgMF0sXG4gICAgICAgIFstMC41LCAwLjUsIC0wLjUsIDEsIDAsIC0xLCAwLCAwXSxcbiAgICAgICAgLy8gVG9wIGZhY2UgKCtZKSAtIE5vcm1hbDogWzAsIDEsIDBdXG4gICAgICAgIC8vIFZlcnRpY2VzOiBCTCwgQlIsIFRSLCBUTFxuICAgICAgICBbLTAuNSwgMC41LCAwLjUsIDAsIDEsIDAsIDEsIDBdLFxuICAgICAgICBbMC41LCAwLjUsIDAuNSwgMSwgMSwgMCwgMSwgMF0sXG4gICAgICAgIFswLjUsIDAuNSwgLTAuNSwgMSwgMCwgMCwgMSwgMF0sXG4gICAgICAgIFstMC41LCAwLjUsIC0wLjUsIDAsIDAsIDAsIDEsIDBdLFxuICAgICAgICAvLyBCb3R0b20gZmFjZSAoLVkpIC0gTm9ybWFsOiBbMCwgLTEsIDBdXG4gICAgICAgIC8vIFZlcnRpY2VzOiBUTCwgVFIsIEJSLCBCTFxuICAgICAgICBbLTAuNSwgLTAuNSwgLTAuNSwgMCwgMSwgMCwgLTEsIDBdLFxuICAgICAgICBbMC41LCAtMC41LCAtMC41LCAxLCAxLCAwLCAtMSwgMF0sXG4gICAgICAgIFswLjUsIC0wLjUsIDAuNSwgMSwgMCwgMCwgLTEsIDBdLFxuICAgICAgICBbLTAuNSwgLTAuNSwgMC41LCAwLCAwLCAwLCAtMSwgMF0sXG4gICAgXTtcbiAgICBjb25zdCB2ZXJ0aWNlc0FycmF5ID0gW107XG4gICAgZmFjZURhdGEuZm9yRWFjaCgoZmFjZVZlcnRpY2VzKSA9PiB2ZXJ0aWNlc0FycmF5LnB1c2goLi4uZmFjZVZlcnRpY2VzKSk7XG4gICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzQXJyYXkpO1xuICAgIGNvbnN0IGdlbmVyYXRlZFZlcnRleENvdW50ID0gZmFjZURhdGEubGVuZ3RoOyAvLyAyNCB2ZXJ0aWNlc1xuICAgIGNvbnN0IGluZGljZXNBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJhc2VJbmRleCA9IGkgKiA0O1xuICAgICAgICBpbmRpY2VzQXJyYXkucHVzaChiYXNlSW5kZXggKyAwLCBiYXNlSW5kZXggKyAxLCBiYXNlSW5kZXggKyAyLCBiYXNlSW5kZXggKyAwLCBiYXNlSW5kZXggKyAyLCBiYXNlSW5kZXggKyAzKTtcbiAgICB9XG4gICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShpbmRpY2VzQXJyYXkpO1xuICAgIGNvbnN0IGluZGV4Q291bnQgPSBpbmRpY2VzLmxlbmd0aDsgLy8gMzYgaW5kaWNlc1xuICAgIHJldHVybiB7XG4gICAgICAgIHZlcnRpY2VzLFxuICAgICAgICBpbmRpY2VzLFxuICAgICAgICB2ZXJ0ZXhDb3VudDogZ2VuZXJhdGVkVmVydGV4Q291bnQsXG4gICAgICAgIGluZGV4Q291bnQsXG4gICAgICAgIGFycmF5U3RyaWRlLFxuICAgICAgICBmbG9hdHNQZXJWZXJ0ZXgsXG4gICAgfTtcbn1cbmNsYXNzIEN1YmVHZW9tZXRyeSBleHRlbmRzIGdlb21ldHJ5XzEuR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgICAgIGNvbnN0IHsgdmVydGljZXMsIGluZGljZXMsIHZlcnRleENvdW50LCBpbmRleENvdW50LCBhcnJheVN0cmlkZSB9ID0gX2NyZWF0ZUN1YmVHZW9tZXRyeURhdGEoKTtcbiAgICAgICAgY29uc3QgdmVydGV4R1BVQnVmZmVyID0gcmVuZGVyZXIuY3JlYXRlQnVmZmVyKHZlcnRpY2VzLCBHUFVCdWZmZXJVc2FnZS5WRVJURVggfCBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCk7XG4gICAgICAgIGNvbnN0IGluZGV4R1BVQnVmZmVyID0gcmVuZGVyZXIuY3JlYXRlQnVmZmVyKGluZGljZXMsIEdQVUJ1ZmZlclVzYWdlLklOREVYIHwgR1BVQnVmZmVyVXNhZ2UuQ09QWV9EU1QpO1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgdmVydGV4R1BVQnVmZmVyLCBpbmRleEdQVUJ1ZmZlciwgaW5kZXhDb3VudCwgdmVydGV4Q291bnQpO1xuICAgICAgICB0aGlzLl9hcnJheVN0cmlkZSA9IGFycmF5U3RyaWRlO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBcIkN1YmVHZW9tZXRyeVwiO1xuICAgIH1cbiAgICBnZXQgYnVmZmVyTGF5b3V0KCkge1xuICAgICAgICAvLyBUaGlzIGxheW91dCBkZXNjcmliZXMgdGhlIHNpbmdsZSBpbnRlcmxlYXZlZCB2ZXJ0ZXggYnVmZmVyLlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFycmF5U3RyaWRlOiB0aGlzLl9hcnJheVN0cmlkZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkZXJMb2NhdGlvbjogMCwgLy8gQ29ycmVzcG9uZHMgdG8gQGxvY2F0aW9uKDApIGluIFdHU0xcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJmbG9hdDMyeDNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlckxvY2F0aW9uOiAxLCAvLyBDb3JyZXNwb25kcyB0byBAbG9jYXRpb24oMSkgaW4gV0dTTFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAzICogNCwgLy8gT2Zmc2V0IGFmdGVyIDMgcG9zaXRpb24gZmxvYXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiZmxvYXQzMngyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTG9jYXRpb246IDIsIC8vIENvcnJlc3BvbmRzIHRvIEBsb2NhdGlvbigyKSBpbiBXR1NMXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6ICgzICsgMikgKiA0LCAvLyBPZmZzZXQgYWZ0ZXIgMyBwb3NpdGlvbiBmbG9hdHMgKyAyIFVWIGZsb2F0c1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcImZsb2F0MzJ4M1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgIH1cbn1cbmV4cG9ydHMuQ3ViZUdlb21ldHJ5ID0gQ3ViZUdlb21ldHJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdlb21ldHJ5ID0gdm9pZCAwO1xuY2xhc3MgR2VvbWV0cnkge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCB2ZXJ0ZXhCdWZmZXIsIGluZGV4QnVmZmVyLCBpbmRleENvdW50LCB2ZXJ0ZXhDb3VudCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLl92ZXJ0ZXhCdWZmZXIgPSB2ZXJ0ZXhCdWZmZXI7XG4gICAgICAgIHRoaXMuX2luZGV4QnVmZmVyID0gaW5kZXhCdWZmZXI7XG4gICAgICAgIHRoaXMuX2luZGV4Q291bnQgPSBpbmRleENvdW50O1xuICAgICAgICB0aGlzLl92ZXJ0ZXhDb3VudCA9IHZlcnRleENvdW50O1xuICAgIH1cbiAgICBnZXQgZGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXIuZGV2aWNlO1xuICAgIH1cbiAgICBnZXQgdmVydGV4QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVydGV4QnVmZmVyO1xuICAgIH1cbiAgICBnZXQgaW5kZXhCdWZmZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleEJ1ZmZlcjtcbiAgICB9XG4gICAgZ2V0IGluZGV4Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleENvdW50O1xuICAgIH1cbiAgICBnZXQgdmVydGV4Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZXJ0ZXhDb3VudDtcbiAgICB9XG4gICAgZ2V0IHV2QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXZCdWZmZXI7XG4gICAgfVxufVxuZXhwb3J0cy5HZW9tZXRyeSA9IEdlb21ldHJ5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdlb21ldHJ5ID0gZXhwb3J0cy5CaWdUcmlhbmdsZSA9IGV4cG9ydHMuQ3ViZUdlb21ldHJ5ID0gdm9pZCAwO1xudmFyIGN1YmVfMSA9IHJlcXVpcmUoXCIuL2N1YmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDdWJlR2VvbWV0cnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN1YmVfMS5DdWJlR2VvbWV0cnk7IH0gfSk7XG52YXIgYmlnX3RyaWFuZ2xlXzEgPSByZXF1aXJlKFwiLi9iaWctdHJpYW5nbGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCaWdUcmlhbmdsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYmlnX3RyaWFuZ2xlXzEuQmlnVHJpYW5nbGU7IH0gfSk7XG52YXIgZ2VvbWV0cnlfMSA9IHJlcXVpcmUoXCIuL2dlb21ldHJ5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2VvbWV0cnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlb21ldHJ5XzEuR2VvbWV0cnk7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICB2YXIgYXIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgICAgICAgICByZXR1cm4gYXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBvd25LZXlzKG8pO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICAgICAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mbHVpZCA9IGV4cG9ydHMuY29tcHV0ZSA9IGV4cG9ydHMubWF0ZXJpYWwgPSBleHBvcnRzLmdlb21ldHJ5ID0gZXhwb3J0cy5jYW1lcmEgPSBleHBvcnRzLlRyYW5zZm9ybSA9IGV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLkltYWdlVGV4dHVyZSA9IGV4cG9ydHMuRGVmYXVsdFRleHR1cmUgPSBleHBvcnRzLkNvbG9yID0gZXhwb3J0cy5SZW5kZXJlciA9IHZvaWQgMDtcbnZhciByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcmVuZGVyZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSZW5kZXJlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVuZGVyZXJfMS5SZW5kZXJlcjsgfSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4vY29sb3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb2xvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29sb3JfMS5Db2xvcjsgfSB9KTtcbnZhciB0ZXh0dXJlXzEgPSByZXF1aXJlKFwiLi90ZXh0dXJlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRGVmYXVsdFRleHR1cmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHR1cmVfMS5EZWZhdWx0VGV4dHVyZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkltYWdlVGV4dHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dHVyZV8xLkltYWdlVGV4dHVyZTsgfSB9KTtcbnZhciBzY2VuZV8xID0gcmVxdWlyZShcIi4vc2NlbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTY2VuZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NlbmVfMS5TY2VuZTsgfSB9KTtcbnZhciB0cmFuc2Zvcm1fMSA9IHJlcXVpcmUoXCIuL3RyYW5zZm9ybVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRyYW5zZm9ybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJhbnNmb3JtXzEuVHJhbnNmb3JtOyB9IH0pO1xuZXhwb3J0cy5jYW1lcmEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vY2FtZXJhXCIpKTtcbmV4cG9ydHMuZ2VvbWV0cnkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZ2VvbWV0cnlcIikpO1xuZXhwb3J0cy5tYXRlcmlhbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9tYXRlcmlhbHNcIikpO1xuZXhwb3J0cy5jb21wdXRlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbXB1dGUvY29tcHV0ZS10YXNrXCIpKTtcbmV4cG9ydHMuZmx1aWQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vZmx1aWRcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJhc2ljTWF0ZXJpYWwgPSB2b2lkIDA7XG5jb25zdCBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbG9yXCIpO1xuY29uc3QgdGV4dHVyZV8xID0gcmVxdWlyZShcIi4uL3RleHR1cmVcIik7XG5jb25zdCBtYXRlcmlhbF8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxcIik7XG5jb25zdCB1bmlmb3JtX21hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi91bmlmb3JtLW1hbmFnZXJcIik7XG5jb25zdCBoZWFkZXJfd2dzbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFkZXJzL2hlYWRlci53Z3NsXCIpKTtcbmNvbnN0IGJhc2ljX21hdGVyaWFsX3dnc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9iYXNpYy1tYXRlcmlhbC53Z3NsXCIpKTtcbmNsYXNzIEJhc2ljTWF0ZXJpYWwgZXh0ZW5kcyBtYXRlcmlhbF8xLk1hdGVyaWFsIHtcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2UsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBCYXNpY01hdGVyaWFsLnByZWNvbXBpbGUoZGV2aWNlKTtcbiAgICAgICAgY29uc3QgdW5pZm9ybU1hbmFnZXIgPSBuZXcgdW5pZm9ybV9tYW5hZ2VyXzEuVW5pZm9ybU1hbmFnZXIoZGV2aWNlLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb2xvclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zLmNvbG9yIHx8IG5ldyBjb2xvcl8xLkNvbG9yKDEsIDEsIDEpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgW29wdGlvbnMubWFwIHx8IHRleHR1cmVfMS5EZWZhdWx0VGV4dHVyZS5pbnN0YW5jZV0sIFtdLCBcIkJhc2ljTWF0ZXJpYWxcIik7XG4gICAgICAgIHN1cGVyKHVuaWZvcm1NYW5hZ2VyKTtcbiAgICB9XG4gICAgZ2V0IGNhY2hlS2V5KCkge1xuICAgICAgICByZXR1cm4gXCJiYXNpYy1tYXRlcmlhbFwiO1xuICAgIH1cbiAgICBnZXQgc2hhZGVyQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIEJhc2ljTWF0ZXJpYWwuc2hhZGVyTW9kdWxlO1xuICAgIH1cbiAgICBzdGF0aWMgcHJlY29tcGlsZShkZXZpY2UpIHtcbiAgICAgICAgaWYgKCFCYXNpY01hdGVyaWFsLnNoYWRlck1vZHVsZSkge1xuICAgICAgICAgICAgQmFzaWNNYXRlcmlhbC5zaGFkZXJNb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJiYXNpYy1tYXRlcmlhbC1zaGFkZXJcIixcbiAgICAgICAgICAgICAgICBjb2RlOiBgXG4ke2hlYWRlcl93Z3NsXzEuZGVmYXVsdH1cbiR7YmFzaWNfbWF0ZXJpYWxfd2dzbF8xLmRlZmF1bHR9XG5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkJhc2ljTWF0ZXJpYWwgPSBCYXNpY01hdGVyaWFsO1xuQmFzaWNNYXRlcmlhbC5zaGFkZXJNb2R1bGUgPSBudWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVWTWF0ZXJpYWwgPSBleHBvcnRzLlNoYWRlck1hdGVyaWFsID0gZXhwb3J0cy5CYXNpY01hdGVyaWFsID0gZXhwb3J0cy5NYXRlcmlhbCA9IHZvaWQgMDtcbnZhciBtYXRlcmlhbF8xID0gcmVxdWlyZShcIi4vbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0ZXJpYWxfMS5NYXRlcmlhbDsgfSB9KTtcbnZhciBiYXNpY19tYXRlcmlhbF8xID0gcmVxdWlyZShcIi4vYmFzaWMtbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCYXNpY01hdGVyaWFsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNpY19tYXRlcmlhbF8xLkJhc2ljTWF0ZXJpYWw7IH0gfSk7XG52YXIgc2hhZGVyX21hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9zaGFkZXItbWF0ZXJpYWxcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTaGFkZXJNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2hhZGVyX21hdGVyaWFsXzEuU2hhZGVyTWF0ZXJpYWw7IH0gfSk7XG52YXIgdXZfbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL3V2LW1hdGVyaWFsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVVZNYXRlcmlhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdXZfbWF0ZXJpYWxfMS5VVk1hdGVyaWFsOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1hdGVyaWFsID0gdm9pZCAwO1xuY2xhc3MgTWF0ZXJpYWwge1xuICAgIGNvbnN0cnVjdG9yKHVuaWZvcm1NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyID0gdW5pZm9ybU1hbmFnZXI7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX3VuaWZvcm1NYW5hZ2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmluZEdyb3VwTGF5b3V0O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl91bmlmb3JtTWFuYWdlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJpbmRHcm91cDtcbiAgICB9XG4gICAgdXBkYXRlVW5pZm9ybSh1bmlmb3JtKSB7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0odW5pZm9ybSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl91bmlmb3JtTWFuYWdlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnVwZGF0ZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWF0ZXJpYWwgPSBNYXRlcmlhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaGFkZXJNYXRlcmlhbCA9IHZvaWQgMDtcbmNvbnN0IG1hdGVyaWFsXzEgPSByZXF1aXJlKFwiLi9tYXRlcmlhbFwiKTtcbmNvbnN0IHVuaWZvcm1fbWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL3VuaWZvcm0tbWFuYWdlclwiKTtcbmNvbnN0IGhlYWRlcl93Z3NsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvaGVhZGVyLndnc2xcIikpO1xuY2xhc3MgU2hhZGVyTWF0ZXJpYWwgZXh0ZW5kcyBtYXRlcmlhbF8xLk1hdGVyaWFsIHtcbiAgICBjb25zdHJ1Y3RvcihkZXZpY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdW5pZm9ybU1hbmFnZXIgPSBuZXcgdW5pZm9ybV9tYW5hZ2VyXzEuVW5pZm9ybU1hbmFnZXIoZGV2aWNlLCBvcHRpb25zLnVuaWZvcm1zLCBvcHRpb25zLnRleHR1cmVzLCBvcHRpb25zLmJ1ZmZlcnMsIFwiU2hhZGVyTWF0ZXJpYWxcIik7XG4gICAgICAgIHN1cGVyKHVuaWZvcm1NYW5hZ2VyKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY29tcGlsZShkZXZpY2UpO1xuICAgIH1cbiAgICBjb21waWxlKGRldmljZSkge1xuICAgICAgICB0aGlzLl9zaGFkZXJNb2R1bGUgPSBkZXZpY2UuY3JlYXRlU2hhZGVyTW9kdWxlKHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNoYWRlck1vZHVsZVwiLFxuICAgICAgICAgICAgY29kZTogYFxuJHtoZWFkZXJfd2dzbF8xLmRlZmF1bHR9XG4ke3RoaXMuX29wdGlvbnMuY29kZX1cbiAgICAgIGAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBidG9hKHRoaXMuX29wdGlvbnMuY29kZSk7XG4gICAgfVxuICAgIGdldCBzaGFkZXJDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhZGVyTW9kdWxlO1xuICAgIH1cbn1cbmV4cG9ydHMuU2hhZGVyTWF0ZXJpYWwgPSBTaGFkZXJNYXRlcmlhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VVk1hdGVyaWFsID0gdm9pZCAwO1xuY29uc3QgbWF0ZXJpYWxfMSA9IHJlcXVpcmUoXCIuL21hdGVyaWFsXCIpO1xuY29uc3QgaGVhZGVyX3dnc2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhZGVycy9oZWFkZXIud2dzbFwiKSk7XG5jb25zdCB1dl9tYXRlcmlhbF93Z3NsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3NoYWRlcnMvdXYtbWF0ZXJpYWwud2dzbFwiKSk7XG5jbGFzcyBVVk1hdGVyaWFsIGV4dGVuZHMgbWF0ZXJpYWxfMS5NYXRlcmlhbCB7XG4gICAgY29uc3RydWN0b3IoZGV2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFVWTWF0ZXJpYWwucHJlY29tcGlsZShkZXZpY2UpO1xuICAgIH1cbiAgICBnZXQgY2FjaGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBcIlVWTWF0ZXJpYWxcIjtcbiAgICB9XG4gICAgZ2V0IHNoYWRlckNvZGUoKSB7XG4gICAgICAgIHJldHVybiBVVk1hdGVyaWFsLnNoYWRlck1vZHVsZTtcbiAgICB9XG4gICAgc3RhdGljIHByZWNvbXBpbGUoZGV2aWNlKSB7XG4gICAgICAgIGlmICghVVZNYXRlcmlhbC5zaGFkZXJNb2R1bGUpIHtcbiAgICAgICAgICAgIFVWTWF0ZXJpYWwuc2hhZGVyTW9kdWxlID0gZGV2aWNlLmNyZWF0ZVNoYWRlck1vZHVsZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiYmFzaWMtbWF0ZXJpYWwtc2hhZGVyXCIsXG4gICAgICAgICAgICAgICAgY29kZTogYFxuJHtoZWFkZXJfd2dzbF8xLmRlZmF1bHR9XG4ke3V2X21hdGVyaWFsX3dnc2xfMS5kZWZhdWx0fVxuYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5VVk1hdGVyaWFsID0gVVZNYXRlcmlhbDtcblVWTWF0ZXJpYWwuc2hhZGVyTW9kdWxlID0gbnVsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZXNoID0gdm9pZCAwO1xuY29uc3QgdHJhbnNmb3JtXzEgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1cIik7XG5jb25zdCB1bmlmb3JtX21hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL3VuaWZvcm0tbWFuYWdlclwiKTtcbmNsYXNzIE1lc2ggZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSwgbWF0LCBnZW8sIGluc3RhbmNlcyA9IDEsIGJ1ZmZlcnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbWF0O1xuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvO1xuICAgICAgICB0aGlzLl9pbnN0YW5jZXMgPSBpbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyID0gbmV3IHVuaWZvcm1fbWFuYWdlcl8xLlVuaWZvcm1NYW5hZ2VyKGRldmljZSwgW3sgbmFtZTogXCJtb2RlbFwiLCB2YWx1ZTogdGhpcy53b3JsZE1hdHJpeCB9XSwgW10sIGJ1ZmZlcnMgfHwgW10sIFwiTWVzaFwiKTtcbiAgICB9XG4gICAgZ2V0IGNhY2hlS2V5KCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZW9tZXRyeS5jYWNoZUtleX0tJHt0aGlzLm1hdGVyaWFsLmNhY2hlS2V5fWA7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlVW5pZm9ybSh7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy53b3JsZE1hdHJpeCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5pZm9ybU1hbmFnZXIuYmluZEdyb3VwTGF5b3V0O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5pZm9ybU1hbmFnZXIuYmluZEdyb3VwO1xuICAgIH1cbiAgICBnZXQgYnVmZmVyTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW9tZXRyeS5idWZmZXJMYXlvdXQ7XG4gICAgfVxuICAgIGdldCBidWZmZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdW5pZm9ybU1hbmFnZXIuYnVmZmVycztcbiAgICB9XG4gICAgZ2V0IGluc3RhbmNlQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZXM7XG4gICAgfVxufVxuZXhwb3J0cy5NZXNoID0gTWVzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlcmVyID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IG9ydGhvZ3JhcGhpY19jYW1lcmFfMSA9IHJlcXVpcmUoXCIuL2NhbWVyYS9vcnRob2dyYXBoaWMtY2FtZXJhXCIpO1xuY29uc3QgcGVyc3BlY3RpdmVfY2FtZXJhXzEgPSByZXF1aXJlKFwiLi9jYW1lcmEvcGVyc3BlY3RpdmUtY2FtZXJhXCIpO1xuY29uc3QgbWVzaF8xID0gcmVxdWlyZShcIi4vbWVzaFwiKTtcbmNvbnN0IHNjZW5lXzEgPSByZXF1aXJlKFwiLi9zY2VuZVwiKTtcbmNvbnN0IHRleHR1cmVfMSA9IHJlcXVpcmUoXCIuL3RleHR1cmVcIik7XG5jbGFzcyBSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aEZvcm1hdCA9IFwiZGVwdGgyNHBsdXMtc3RlbmNpbDhcIjtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBcImJncmE4dW5vcm1cIjtcbiAgICAgICAgdGhpcy5jYW52YXNTaXplID0gd2dwdV9tYXRyaXhfMS52ZWMyLmNyZWF0ZSgxLCAxKTtcbiAgICAgICAgdGhpcy5zaXplRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9waXBlbGluZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jb21wdXRlUGlwZWxpbmVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgKF9hID0gdGhpcy5jYW52YXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW5kZXJlciBpbml0aWFsaXplZFwiKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLmdwdSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdQVSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IHlpZWxkIG5hdmlnYXRvci5ncHUucmVxdWVzdEFkYXB0ZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gR1BVIGFkYXB0ZXIgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHlpZWxkIHRoaXMuYWRhcHRlci5yZXF1ZXN0RGV2aWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdQVSBkZXZpY2UgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDYW52YXModGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdENhbnZhcyhjYW52YXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gKF9hID0gdGhpcy5jYW52YXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRDb250ZXh0KFwid2ViZ3B1XCIpO1xuICAgICAgICBpZiAoIXRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCBXZWJHUFUgY29udGV4dFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1hdCA9IG5hdmlnYXRvci5ncHUuZ2V0UHJlZmVycmVkQ2FudmFzRm9ybWF0KCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5jb25maWd1cmUoe1xuICAgICAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcbiAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICBhbHBoYU1vZGU6IFwicHJlbXVsdGlwbGllZFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLmNhbnZhc1NpemVbMF0gJiYgaGVpZ2h0ID09PSB0aGlzLmNhbnZhc1NpemVbMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jYW52YXNTaXplLnNldChbd2lkdGgsIGhlaWdodF0pO1xuICAgICAgICAgICAgdGhpcy5zaXplRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDYW52YXMgc2l6ZVwiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuZGVwdGhUZXh0dXJlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5kZXB0aFRleHR1cmUgPSB0aGlzLmRldmljZS5jcmVhdGVUZXh0dXJlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXB0aCB0ZXh0dXJlXCIsXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aCwgaGVpZ2h0IH0sXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmRlcHRoRm9ybWF0LFxuICAgICAgICAgICAgICAgIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuUkVOREVSX0FUVEFDSE1FTlQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGVwdGhUZXh0dXJlVmlldyA9IHRoaXMuZGVwdGhUZXh0dXJlLmNyZWF0ZVZpZXcoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlcHRoIHRleHR1cmUgdmlldyBcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG9uUmVzaXplKTtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY2FudmFzKTtcbiAgICAgICAgb25SZXNpemUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW52YXMgaW5pdGlhbGl6ZWRcIik7XG4gICAgfVxuICAgIGNyZWF0ZVNoYWRlck1vZHVsZShkZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZS5jcmVhdGVTaGFkZXJNb2R1bGUoZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIGNyZWF0ZUJ1ZmZlcihhcnIsIHVzYWdlKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUJ1ZmZlcih7XG4gICAgICAgICAgICBzaXplOiAoYXJyLmJ5dGVMZW5ndGggKyAzKSAmIH4zLFxuICAgICAgICAgICAgdXNhZ2UsXG4gICAgICAgICAgICBtYXBwZWRBdENyZWF0aW9uOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFyciBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgICAgICAgICAgY29uc3Qgd3JpdGVBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmdldE1hcHBlZFJhbmdlKCkpO1xuICAgICAgICAgICAgd3JpdGVBcnJheS5zZXQoYXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcnIgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xuICAgICAgICAgICAgY29uc3Qgd3JpdGVBcnJheSA9IG5ldyBVaW50MzJBcnJheShidWZmZXIuZ2V0TWFwcGVkUmFuZ2UoKSk7XG4gICAgICAgICAgICB3cml0ZUFycmF5LnNldChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyciBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCB3cml0ZUFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIHdyaXRlQXJyYXkuc2V0KGFycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJyIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgY29uc3Qgd3JpdGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5nZXRNYXBwZWRSYW5nZSgpKTtcbiAgICAgICAgICAgIHdyaXRlQXJyYXkuc2V0KGFycik7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnVubWFwKCk7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuICAgIGNyZWF0ZVNpemVkQnVmZmVyKHNpemUsIHVzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZS5jcmVhdGVCdWZmZXIoe1xuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIHVzYWdlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGlwZWxpbmVGb3Ioc2NlbmUsIG1lc2gpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBtZXNoLmNhY2hlS2V5O1xuICAgICAgICBpZiAodGhpcy5fcGlwZWxpbmVDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGlwZWxpbmVDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNoYWRlckNvZGUgPSBtZXNoLm1hdGVyaWFsLnNoYWRlckNvZGU7XG4gICAgICAgIGNvbnN0IGJ1ZmZlckxheW91dCA9IG1lc2guYnVmZmVyTGF5b3V0O1xuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmRldmljZS5jcmVhdGVQaXBlbGluZUxheW91dCh7XG4gICAgICAgICAgICBsYWJlbDogXCJQaXBlbGluZSBMYXlvdXRcIixcbiAgICAgICAgICAgIGJpbmRHcm91cExheW91dHM6IFtcbiAgICAgICAgICAgICAgICBzY2VuZS5iaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICAgICAgbWVzaC5iaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICAgICAgbWVzaC5tYXRlcmlhbC5iaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGlwZWxpbmUgPSB0aGlzLmRldmljZS5jcmVhdGVSZW5kZXJQaXBlbGluZSh7XG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB2ZXJ0ZXg6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHNoYWRlckNvZGUsXG4gICAgICAgICAgICAgICAgYnVmZmVyczogYnVmZmVyTGF5b3V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyYWdtZW50OiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBzaGFkZXJDb2RlLFxuICAgICAgICAgICAgICAgIHRhcmdldHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaW1pdGl2ZToge1xuICAgICAgICAgICAgICAgIHRvcG9sb2d5OiBcInRyaWFuZ2xlLWxpc3RcIixcbiAgICAgICAgICAgICAgICBzdHJpcEluZGV4Rm9ybWF0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZnJvbnRGYWNlOiBcImNjd1wiLFxuICAgICAgICAgICAgICAgIGN1bGxNb2RlOiBcImJhY2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXB0aFN0ZW5jaWw6IHtcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXB0aENvbXBhcmU6IFwibGVzc1wiLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogXCJkZXB0aDI0cGx1cy1zdGVuY2lsOFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3BpcGVsaW5lQ2FjaGUuc2V0KGNhY2hlS2V5LCBwaXBlbGluZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGlwZWxpbmUgY3JlYXRlZFwiLCBjYWNoZUtleSk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZTtcbiAgICB9XG4gICAgcmVuZGVyKHNjZW5lLCBjYW1lcmEpIHtcbiAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gdGhpcy5jYW52YXNTaXplO1xuICAgICAgICBjb25zdCBvdXRwdXRUZXh0dXJlID0gdGhpcy5jb250ZXh0LmdldEN1cnJlbnRUZXh0dXJlKCk7XG4gICAgICAgIGNvbnN0IG91dHB1dFRleHR1cmVWaWV3ID0gb3V0cHV0VGV4dHVyZS5jcmVhdGVWaWV3KHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNhbnZhcyBvdXRwdXQgdGV4dHVyZSB2aWV3XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW5kZXJQYXNzRGVzYyA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlJlbmRlciBwYXNzXCIsXG4gICAgICAgICAgICBjb2xvckF0dGFjaG1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2aWV3OiBvdXRwdXRUZXh0dXJlVmlldyxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJWYWx1ZTogWzAsIDAsIDAsIDFdLFxuICAgICAgICAgICAgICAgICAgICBsb2FkT3A6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVPcDogXCJzdG9yZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVwdGhTdGVuY2lsQXR0YWNobWVudDoge1xuICAgICAgICAgICAgICAgIHZpZXc6IHRoaXMuZGVwdGhUZXh0dXJlVmlldyxcbiAgICAgICAgICAgICAgICBkZXB0aENsZWFyVmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgZGVwdGhMb2FkT3A6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgICBkZXB0aFN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgICAgICAgICAgICBzdGVuY2lsTG9hZE9wOiBcImNsZWFyXCIsXG4gICAgICAgICAgICAgICAgc3RlbmNpbFN0b3JlT3A6IFwic3RvcmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbW1hbmRFbmNvZGVyID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tbWFuZEVuY29kZXIoKTtcbiAgICAgICAgY29uc3QgcGFzc0VuY29kZXIgPSBjb21tYW5kRW5jb2Rlci5iZWdpblJlbmRlclBhc3MocmVuZGVyUGFzc0Rlc2MpO1xuICAgICAgICBwYXNzRW5jb2Rlci5zZXRWaWV3cG9ydCgwLCAwLCB3aWR0aCwgaGVpZ2h0LCAwLCAxKTtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0U2Npc3NvclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLnNpemVEaXJ0eSkge1xuICAgICAgICAgICAgY2FtZXJhLnZpZXdwb3J0UmVzaXplZCh0aGlzLmNhbnZhc1NpemUpO1xuICAgICAgICAgICAgdGhpcy5zaXplRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzY2VuZS51cGRhdGUoY2FtZXJhLCB0aGlzLmNhbnZhc1NpemUpO1xuICAgICAgICBjb25zdCBzY2VuZUJpbmRHcm91cCA9IHNjZW5lLmJpbmRHcm91cDtcbiAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDAsIHNjZW5lQmluZEdyb3VwKTtcbiAgICAgICAgc2NlbmUudHJhdmVyc2UoKG9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIG1lc2hfMS5NZXNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzaCA9IG9iajtcbiAgICAgICAgICAgICAgICBtZXNoLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBpcGVsaW5lID0gdGhpcy5waXBlbGluZUZvcihzY2VuZSwgbWVzaCk7XG4gICAgICAgICAgICAgICAgcGFzc0VuY29kZXIuc2V0UGlwZWxpbmUocGlwZWxpbmUpO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLnNldEJpbmRHcm91cCgxLCBtZXNoLmJpbmRHcm91cCk7XG4gICAgICAgICAgICAgICAgcGFzc0VuY29kZXIuc2V0QmluZEdyb3VwKDIsIG1lc2gubWF0ZXJpYWwuYmluZEdyb3VwKTtcbiAgICAgICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRWZXJ0ZXhCdWZmZXIoMCwgbWVzaC5nZW9tZXRyeS52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLnNldEluZGV4QnVmZmVyKG1lc2guZ2VvbWV0cnkuaW5kZXhCdWZmZXIsIFwidWludDE2XCIpO1xuICAgICAgICAgICAgICAgIHBhc3NFbmNvZGVyLmRyYXdJbmRleGVkKG1lc2guZ2VvbWV0cnkuaW5kZXhDb3VudCwgbWVzaC5pbnN0YW5jZUNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgfVxuICAgIGNvbXB1dGVQaXBlbGluZUZvcih0YXNrKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29tcHV0ZVBpcGVsaW5lQ2FjaGVbdGFzay5jYWNoZUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGJnbCA9IHRhc2suZ2V0QmluZEdyb3VwTGF5b3V0KHRoaXMuZGV2aWNlKTtcbiAgICAgICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuZGV2aWNlLmNyZWF0ZVBpcGVsaW5lTGF5b3V0KHtcbiAgICAgICAgICAgICAgICBsYWJlbDogYCR7dGFzay5sYWJlbH0gUGlwZWxpbmUgTGF5b3V0YCxcbiAgICAgICAgICAgICAgICBiaW5kR3JvdXBMYXlvdXRzOiBbYmdsXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gdGhpcy5kZXZpY2UuY3JlYXRlQ29tcHV0ZVBpcGVsaW5lKHtcbiAgICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgICAgY29tcHV0ZToge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IHRhc2suc2hhZGVyTW9kdWxlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbXB1dGVQaXBlbGluZUNhY2hlW3Rhc2suY2FjaGVLZXldID0gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wdXRlUGlwZWxpbmVDYWNoZVt0YXNrLmNhY2hlS2V5XTtcbiAgICB9XG4gICAgY29tcHV0ZSh0YXNrcykge1xuICAgICAgICBjb25zdCBjb21tYW5kRW5jb2RlciA9IHRoaXMuZGV2aWNlLmNyZWF0ZUNvbW1hbmRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IHBhc3NFbmNvZGVyID0gY29tbWFuZEVuY29kZXIuYmVnaW5Db21wdXRlUGFzcygpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGVsaW5lID0gdGhpcy5jb21wdXRlUGlwZWxpbmVGb3IodGFzayk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gdGFzay5kaXNwYXRjaENvdW50O1xuICAgICAgICAgICAgY29uc3QgYmcgPSB0YXNrLmdldEJpbmRHcm91cCh0aGlzLmRldmljZSk7XG4gICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRQaXBlbGluZShwaXBlbGluZSk7XG4gICAgICAgICAgICBwYXNzRW5jb2Rlci5zZXRCaW5kR3JvdXAoMCwgYmcpO1xuICAgICAgICAgICAgcGFzc0VuY29kZXIuZGlzcGF0Y2hXb3JrZ3JvdXBzKHNpemVbMF0sIHNpemVbMV0sIHNpemVbMl0pO1xuICAgICAgICB9XG4gICAgICAgIHBhc3NFbmNvZGVyLmVuZCgpO1xuICAgICAgICB0aGlzLmRldmljZS5xdWV1ZS5zdWJtaXQoW2NvbW1hbmRFbmNvZGVyLmZpbmlzaCgpXSk7XG4gICAgfVxuICAgIGNyZWF0ZU1hdGVyaWFsKGMsIG8pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjKHRoaXMuZGV2aWNlLCBvKTtcbiAgICB9XG4gICAgY3JlYXRlR2VvbWV0cnkoYykge1xuICAgICAgICByZXR1cm4gbmV3IGModGhpcyk7XG4gICAgfVxuICAgIGNyZWF0ZU1lc2goZ2VvLCBtYXQsIGluc3RhbmNlcywgYnVmZmVycykge1xuICAgICAgICByZXR1cm4gbmV3IG1lc2hfMS5NZXNoKHRoaXMuZGV2aWNlLCBtYXQsIGdlbywgaW5zdGFuY2VzLCBidWZmZXJzKTtcbiAgICB9XG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgc2NlbmVfMS5TY2VuZSh0aGlzLmRldmljZSk7XG4gICAgfVxuICAgIGNyZWF0ZVBlcnNwZWN0aXZlQ2FtZXJhKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwZXJzcGVjdGl2ZV9jYW1lcmFfMS5QZXJzcGVjdGl2ZUNhbWVyYShvcHRpb25zKTtcbiAgICB9XG4gICAgY3JlYXRlT3J0aG9ncmFwaGljQ2FtZXJhKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvcnRob2dyYXBoaWNfY2FtZXJhXzEuT3J0aG9ncmFwaGljQ2FtZXJhKG9wdGlvbnMpO1xuICAgIH1cbiAgICBsb2FkSW1hZ2VUZXh0dXJlKHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmV0ID0gbmV3IHRleHR1cmVfMS5JbWFnZVRleHR1cmUodXJsKTtcbiAgICAgICAgICAgIHlpZWxkIHJldC5sb2FkKCk7XG4gICAgICAgICAgICByZXQudXBsb2FkKHRoaXMuZGV2aWNlKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVUZXh0dXJlKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3QgdGV4ID0gbmV3IHRleHR1cmVfMS5NYXBwZWRUZXh0dXJlKGRlc2NyaXB0b3IpO1xuICAgICAgICB0ZXgudXBsb2FkKHRoaXMuZGV2aWNlKTtcbiAgICAgICAgcmV0dXJuIHRleDtcbiAgICB9XG4gICAgY3JlYXRlU2FtcGxlcihkZXNjcmlwdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldmljZS5jcmVhdGVTYW1wbGVyKGRlc2NyaXB0b3IpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyZXIgPSBSZW5kZXJlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2VuZSA9IHZvaWQgMDtcbmNvbnN0IHRyYW5zZm9ybV8xID0gcmVxdWlyZShcIi4vdHJhbnNmb3JtXCIpO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmNvbnN0IHVuaWZvcm1fbWFuYWdlcl8xID0gcmVxdWlyZShcIi4vdW5pZm9ybS1tYW5hZ2VyXCIpO1xuY2xhc3MgU2NlbmUgZXh0ZW5kcyB0cmFuc2Zvcm1fMS5UcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl91bmlmb3JtTWFuYWdlciA9IG5ldyB1bmlmb3JtX21hbmFnZXJfMS5Vbmlmb3JtTWFuYWdlcihkZXZpY2UsIFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJwcm9qZWN0aW9uIG1hdHJpeFwiLCB2YWx1ZTogd2dwdV9tYXRyaXhfMS5tYXQ0LmNyZWF0ZSgpIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwidmlldyBtYXRyaXhcIiwgdmFsdWU6IHdncHVfbWF0cml4XzEubWF0NC5jcmVhdGUoKSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImNhbWVyYSBwb3NpdGlvblwiLCB2YWx1ZTogd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSgpIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVzb2x1dGlvblwiLCB2YWx1ZTogd2dwdV9tYXRyaXhfMS52ZWMyLmNyZWF0ZSgxLCAxKSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInRpbWVcIiwgdmFsdWU6IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCB9LFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgdXBkYXRlKGNhbWVyYSwgcmVzb2x1dGlvbikge1xuICAgICAgICB0aGlzLl91bmlmb3JtTWFuYWdlci51cGRhdGVVbmlmb3JtKHsgbmFtZTogXCJwcm9qZWN0aW9uIG1hdHJpeFwiLCB2YWx1ZTogY2FtZXJhLnByb2plY3Rpb25NYXRyaXggfSk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0oeyBuYW1lOiBcInZpZXcgbWF0cml4XCIsIHZhbHVlOiBjYW1lcmEudmlld01hdHJpeCB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlVW5pZm9ybSh7IG5hbWU6IFwiY2FtZXJhIHBvc2l0aW9uXCIsIHZhbHVlOiBjYW1lcmEucG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0oeyBuYW1lOiBcInJlc29sdXRpb25cIiwgdmFsdWU6IHJlc29sdXRpb24gfSk7XG4gICAgICAgIHRoaXMuX3VuaWZvcm1NYW5hZ2VyLnVwZGF0ZVVuaWZvcm0oeyBuYW1lOiBcInRpbWVcIiwgdmFsdWU6IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCB9KTtcbiAgICAgICAgdGhpcy5fdW5pZm9ybU1hbmFnZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmlmb3JtTWFuYWdlci5iaW5kR3JvdXBMYXlvdXQ7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91bmlmb3JtTWFuYWdlci5iaW5kR3JvdXA7XG4gICAgfVxufVxuZXhwb3J0cy5TY2VuZSA9IFNjZW5lO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJzdHJ1Y3QgVW5pZm9ybXMge1xcbiAgY29sb3I6IHZlYzQ8ZjMyPlxcbn1cXG5cXG5AZ3JvdXAoQkdfVU5JRk9STVMpIEBiaW5kaW5nKDApIHZhcjx1bmlmb3JtPiB1bmlmb3JtczogVW5pZm9ybXM7XFxuQGdyb3VwKEJHX1VOSUZPUk1TKSBAYmluZGluZygxKSB2YXIgdGV4X3NhbXBsZXI6IHNhbXBsZXI7XFxuQGdyb3VwKEJHX1VOSUZPUk1TKSBAYmluZGluZygyKSB2YXIgdGV4X21hcDogdGV4dHVyZV8yZDxmMzI+O1xcblxcbnN0cnVjdCBWU091dCB7XFxuICAgIEBidWlsdGluKHBvc2l0aW9uKSBwb3NpdGlvbjogdmVjNDxmMzI+LFxcbiAgICBAbG9jYXRpb24oMCkgdXY6IHZlYzI8ZjMyPixcXG59XFxuXFxuQHZlcnRleFxcbmZuIHZzX21haW4oaW46IFZTSW4pIC0+IFZTT3V0IHtcXG4gIGxldCBtb2RlbFZpZXdQcm9qOiBtYXQ0eDQ8ZjMyPiA9IHNjZW5lX3VuaWZvcm1zLnByb2plY3Rpb24gKiBzY2VuZV91bmlmb3Jtcy52aWV3ICogbW9kZWxfdW5pZm9ybXMubW9kZWw7XFxuXFxuICBsZXQgdnNfb3V0OiBWU091dCA9IFZTT3V0KFxcbiAgICBtb2RlbFZpZXdQcm9qICogdmVjNDxmMzI+KGluLnBvc2l0aW9uLCAxLjApLFxcbiAgICBpbi51dixcXG4gICk7XFxuICByZXR1cm4gdnNfb3V0O1xcbn1cXG5cXG5AZnJhZ21lbnRcXG5mbiBmc19tYWluKHZzX291dDogVlNPdXQpIC0+IEBsb2NhdGlvbigwKSB2ZWM0PGYzMj4ge1xcbiAgbGV0IGNvbG9yOiB2ZWM0PGYzMj4gPSB0ZXh0dXJlU2FtcGxlKHRleF9tYXAsIHRleF9zYW1wbGVyLCB2c19vdXQudXYpO1xcbiAgcmV0dXJuIGNvbG9yICogdW5pZm9ybXMuY29sb3I7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiY29uc3QgQkdfU0NFTkU6IHUzMiA9IDA7XFxuY29uc3QgQkdfTU9ERUw6IHUzMiA9IDE7XFxuY29uc3QgQkdfVU5JRk9STVM6IHUzMiA9IDI7XFxuXFxuc3RydWN0IFNjZW5lVW5pZm9ybXMge1xcbiAgcHJvamVjdGlvbjogbWF0NHg0PGYzMj4sXFxuICB2aWV3OiBtYXQ0eDQ8ZjMyPixcXG4gIGNhbWVyYV9wb3NpdGlvbjogdmVjMzxmMzI+LFxcbiAgcmVzb2x1dGlvbjogdmVjMjxmMzI+LFxcbiAgdGltZTogZjMyLFxcbn1cXG5cXG5zdHJ1Y3QgTW9kZWxVbmlmb3JtcyB7XFxuICBtb2RlbDogbWF0NHg0PGYzMj4sXFxufVxcblxcbnN0cnVjdCBWU0luIHtcXG4gIEBsb2NhdGlvbigwKSBwb3NpdGlvbjogdmVjM2YsXFxuICBAbG9jYXRpb24oMSkgdXY6IHZlYzJmLFxcbiAgQGxvY2F0aW9uKDIpIG5vcm1hbDogdmVjM2YsXFxufVxcblxcbkBncm91cChCR19TQ0VORSkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IHNjZW5lX3VuaWZvcm1zOiBTY2VuZVVuaWZvcm1zO1xcbkBncm91cChCR19NT0RFTCkgQGJpbmRpbmcoMCkgdmFyPHVuaWZvcm0+IG1vZGVsX3VuaWZvcm1zOiBNb2RlbFVuaWZvcm1zO1xcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwic3RydWN0IFZTT3V0IHtcXG4gICAgQGJ1aWx0aW4ocG9zaXRpb24pIHBvc2l0aW9uOiB2ZWM0PGYzMj4sXFxuICAgIEBsb2NhdGlvbigwKSB1djogdmVjMjxmMzI+LFxcbn1cXG5cXG5AdmVydGV4XFxuZm4gdnNfbWFpbihpbjogVlNJbikgLT4gVlNPdXQge1xcbiAgbGV0IG1vZGVsVmlld1Byb2o6IG1hdDR4NDxmMzI+ID0gc2NlbmVfdW5pZm9ybXMucHJvamVjdGlvbiAqIHNjZW5lX3VuaWZvcm1zLnZpZXcgKiBtb2RlbF91bmlmb3Jtcy5tb2RlbDtcXG5cXG4gIGxldCB2c19vdXQ6IFZTT3V0ID0gVlNPdXQoXFxuICAgIG1vZGVsVmlld1Byb2ogKiB2ZWM0PGYzMj4oaW4ucG9zaXRpb24sIDEuMCksXFxuICAgIGluLnV2LFxcbiAgKTtcXG4gIHJldHVybiB2c19vdXQ7XFxufVxcblxcbkBmcmFnbWVudFxcbmZuIGZzX21haW4odnNfb3V0OiBWU091dCkgLT4gQGxvY2F0aW9uKDApIHZlYzQ8ZjMyPiB7XFxuICByZXR1cm4gdmVjNCh2c19vdXQudXYsIDAuMCwgMS4wKTtcXG59XFxuXCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW1hZ2VUZXh0dXJlID0gZXhwb3J0cy5EZWZhdWx0VGV4dHVyZSA9IGV4cG9ydHMuTWFwcGVkVGV4dHVyZSA9IGV4cG9ydHMuVGV4dHVyZSA9IHZvaWQgMDtcbmNsYXNzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5leHBvcnRzLlRleHR1cmUgPSBUZXh0dXJlO1xuY2xhc3MgTWFwcGVkVGV4dHVyZSBleHRlbmRzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRvcjtcbiAgICB9XG4gICAgZ2V0IHZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlldykge1xuICAgICAgICAgICAgdGhpcy5fdmlldyA9IHRoaXMuX3RleHR1cmUuY3JlYXRlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3O1xuICAgIH1cbiAgICB1cGxvYWQoZGV2aWNlKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBkZXZpY2UuY3JlYXRlVGV4dHVyZSh0aGlzLmRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLl90ZXh0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZS53aWR0aDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmUuaGVpZ2h0O1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlLmxhYmVsO1xuICAgIH1cbiAgICBnZXQgZm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZS5mb3JtYXQ7XG4gICAgfVxuICAgIGdldCBkaW1lbnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlLmRpbWVuc2lvbjtcbiAgICB9XG59XG5leHBvcnRzLk1hcHBlZFRleHR1cmUgPSBNYXBwZWRUZXh0dXJlO1xuY2xhc3MgRGVmYXVsdFRleHR1cmUgZXh0ZW5kcyBUZXh0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RleHR1cmVWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGl4ZWxEYXRhID0gbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTUsIDI1NV0pO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0b3IoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxLCBoZWlnaHQ6IDEsIGRlcHRoT3JBcnJheUxheWVyczogMSB9LFxuICAgICAgICAgICAgZm9ybWF0OiBcInJnYmE4dW5vcm1cIixcbiAgICAgICAgICAgIHVzYWdlOiBHUFVUZXh0dXJlVXNhZ2UuVEVYVFVSRV9CSU5ESU5HIHwgR1BVVGV4dHVyZVVzYWdlLkNPUFlfRFNULFxuICAgICAgICAgICAgZGltZW5zaW9uOiBcIjJkXCIsXG4gICAgICAgICAgICBtaXBMZXZlbENvdW50OiAxLFxuICAgICAgICAgICAgc2FtcGxlQ291bnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2aWV3KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5fdGV4dHVyZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGV4dHVyZSBub3QgY3JlYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLl90ZXh0dXJlVmlldykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX3RleHR1cmVWaWV3ID0gdGhpcy5fdGV4dHVyZS5jcmVhdGVWaWV3KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZVZpZXc7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIFwiRGVmYXVsdCBUZXh0dXJlXCI7XG4gICAgfVxuICAgIGdldCBmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlLmZvcm1hdDtcbiAgICB9XG4gICAgZ2V0IGRpbWVuc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmUuZGltZW5zaW9uO1xuICAgIH1cbiAgICB1cGxvYWQoZGV2aWNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90ZXh0dXJlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IGRldmljZS5jcmVhdGVUZXh0dXJlKHRoaXMuZGVzY3JpcHRvcik7XG4gICAgICAgIGRldmljZS5xdWV1ZS53cml0ZVRleHR1cmUoeyB0ZXh0dXJlOiB0aGlzLl90ZXh0dXJlLCBtaXBMZXZlbDogMCwgb3JpZ2luOiB7IHg6IDAsIHk6IDAsIHo6IDAgfSB9LCB0aGlzLl9waXhlbERhdGEsIHsgb2Zmc2V0OiAwLCBieXRlc1BlclJvdzogNCwgcm93c1BlckltYWdlOiAxIH0sIHsgd2lkdGg6IDEsIGhlaWdodDogMSwgZGVwdGhPckFycmF5TGF5ZXJzOiAxIH0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuX3RleHR1cmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLl90ZXh0dXJlVmlldyA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5EZWZhdWx0VGV4dHVyZSA9IERlZmF1bHRUZXh0dXJlO1xuRGVmYXVsdFRleHR1cmUuaW5zdGFuY2UgPSBuZXcgRGVmYXVsdFRleHR1cmUoKTtcbmNsYXNzIEltYWdlVGV4dHVyZSBleHRlbmRzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGltYWdlU3JjKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5fdGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RleHR1cmVWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW1hZ2VkYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zcmMgPSBpbWFnZVNyYztcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlUmVzcCA9IHlpZWxkIGZldGNoKHRoaXMuc3JjKTtcbiAgICAgICAgICAgIGlmICghaW1hZ2VSZXNwLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBpbWFnZTogJHt0aGlzLnNyY31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmxvYiA9IHlpZWxkIGltYWdlUmVzcC5ibG9iKCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZUJpdG1hcCA9IHlpZWxkIGNyZWF0ZUltYWdlQml0bWFwKGltYWdlQmxvYik7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZWRhdGEgPSBpbWFnZUJpdG1hcDtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gaW1hZ2VCaXRtYXAud2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSBpbWFnZUJpdG1hcC5oZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0b3IoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRlcHRoT3JBcnJheUxheWVyczogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXQ6IFwicmdiYTh1bm9ybVwiLFxuICAgICAgICAgICAgdXNhZ2U6IEdQVVRleHR1cmVVc2FnZS5URVhUVVJFX0JJTkRJTkcgfFxuICAgICAgICAgICAgICAgIEdQVVRleHR1cmVVc2FnZS5DT1BZX0RTVCB8XG4gICAgICAgICAgICAgICAgR1BVVGV4dHVyZVVzYWdlLlJFTkRFUl9BVFRBQ0hNRU5ULFxuICAgICAgICAgICAgZGltZW5zaW9uOiBcIjJkXCIsXG4gICAgICAgICAgICBtaXBMZXZlbENvdW50OiAxLFxuICAgICAgICAgICAgc2FtcGxlQ291bnQ6IDEsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCB2aWV3KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5fdGV4dHVyZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGV4dHVyZSBub3QgY3JlYXRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLl90ZXh0dXJlVmlldykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX3RleHR1cmVWaWV3ID0gdGhpcy5fdGV4dHVyZS5jcmVhdGVWaWV3KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZVZpZXc7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIGBJbWFnZVRleHR1cmUgJHt0aGlzLnNyY31gO1xuICAgIH1cbiAgICBnZXQgZm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZS5mb3JtYXQ7XG4gICAgfVxuICAgIGdldCBkaW1lbnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlLmRpbWVuc2lvbjtcbiAgICB9XG4gICAgdXBsb2FkKGRldmljZSkge1xuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faW1hZ2VkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBub3QgbG9hZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBkZXZpY2UuY3JlYXRlVGV4dHVyZSh0aGlzLmRlc2NyaXB0b3IpO1xuICAgICAgICBkZXZpY2UucXVldWUuY29weUV4dGVybmFsSW1hZ2VUb1RleHR1cmUoeyBzb3VyY2U6IHRoaXMuX2ltYWdlZGF0YSwgb3JpZ2luOiB7IHg6IDAsIHk6IDAgfSwgZmxpcFk6IHRydWUgfSwgeyB0ZXh0dXJlOiB0aGlzLl90ZXh0dXJlLCBvcmlnaW46IHsgeDogMCwgeTogMCB9IH0sIHsgd2lkdGg6IHRoaXMuX3dpZHRoLCBoZWlnaHQ6IHRoaXMuX2hlaWdodCwgZGVwdGhPckFycmF5TGF5ZXJzOiAxIH0pO1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAoX2EgPSB0aGlzLl9pbWFnZWRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbG9zZSgpO1xuICAgICAgICAoX2IgPSB0aGlzLl90ZXh0dXJlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl90ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdGV4dHVyZVZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbWFnZWRhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLl93aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5JbWFnZVRleHR1cmUgPSBJbWFnZVRleHR1cmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNmb3JtID0gdm9pZCAwO1xuY29uc3Qgd2dwdV9tYXRyaXhfMSA9IHJlcXVpcmUoXCJ3Z3B1LW1hdHJpeFwiKTtcbmZ1bmN0aW9uIGNvbXBvc2UocG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSwgZHN0KSB7XG4gICAgaWYgKCFkc3QpIHtcbiAgICAgICAgZHN0ID0gd2dwdV9tYXRyaXhfMS5tYXQ0LmNyZWF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBbeCwgeSwgeiwgd10gPSByb3RhdGlvbjtcbiAgICBjb25zdCB4MiA9IHggKyB4O1xuICAgIGNvbnN0IHkyID0geSArIHk7XG4gICAgY29uc3QgejIgPSB6ICsgejtcbiAgICBjb25zdCB4eCA9IHggKiB4MjtcbiAgICBjb25zdCB5eSA9IHkgKiB5MjtcbiAgICBjb25zdCB6eiA9IHogKiB6MjtcbiAgICBjb25zdCB4eSA9IHggKiB5MjtcbiAgICBjb25zdCB4eiA9IHggKiB6MjtcbiAgICBjb25zdCB5eiA9IHkgKiB6MjtcbiAgICBjb25zdCB3eCA9IHcgKiB4MjtcbiAgICBjb25zdCB3eSA9IHcgKiB5MjtcbiAgICBjb25zdCB3eiA9IHcgKiB6MjtcbiAgICBjb25zdCBbc3gsIHN5LCBzel0gPSBzY2FsZTtcbiAgICBkc3RbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgICBkc3RbMV0gPSAoeHkgKyB3eikgKiBzeDtcbiAgICBkc3RbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgICBkc3RbM10gPSAwO1xuICAgIGRzdFs0XSA9ICh4eSAtIHd6KSAqIHN5O1xuICAgIGRzdFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICAgIGRzdFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICAgIGRzdFs3XSA9IDA7XG4gICAgZHN0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gICAgZHN0WzldID0gKHl6IC0gd3gpICogc3o7XG4gICAgZHN0WzEwXSA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICAgIGRzdFsxMV0gPSAwO1xuICAgIGRzdFsxMl0gPSBwb3NpdGlvblswXTtcbiAgICBkc3RbMTNdID0gcG9zaXRpb25bMV07XG4gICAgZHN0WzE0XSA9IHBvc2l0aW9uWzJdO1xuICAgIGRzdFsxNV0gPSAxO1xuICAgIHJldHVybiBkc3Q7XG59XG5jbGFzcyBUcmFuc2Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBIaWVyYXJjaHlcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY3JlYXRlKDAsIDAsIDApO1xuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHdncHVfbWF0cml4XzEucXVhdC5pZGVudGl0eSgpO1xuICAgICAgICB0aGlzLl9zY2FsZSA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuX2xvY2FsTWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0LmlkZW50aXR5KCk7XG4gICAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gd2dwdV9tYXRyaXhfMS5tYXQ0LmlkZW50aXR5KCk7XG4gICAgICAgIHRoaXMuX2xvY2FsRGlydHkgPSB0cnVlOyAvLyBOZWVkcyBpbml0aWFsIGNhbGN1bGF0aW9uXG4gICAgICAgIHRoaXMuX3dvcmxkRGlydHkgPSB0cnVlOyAvLyBOZWVkcyBpbml0aWFsIGNhbGN1bGF0aW9uXG4gICAgfVxuICAgIC8vIC0tLSBHZXR0ZXJzIGZvciBMb2NhbCBDb21wb25lbnRzIC0tLVxuICAgIGdldCBwb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uOyAvLyBSZXR1cm4gc3RvcmVkIGxvY2FsIHZhbHVlXG4gICAgfVxuICAgIGdldCBxdWF0ZXJuaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb247IC8vIFJldHVybiBzdG9yZWQgbG9jYWwgdmFsdWVcbiAgICB9XG4gICAgZ2V0IHNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7IC8vIFJldHVybiBzdG9yZWQgbG9jYWwgdmFsdWVcbiAgICB9XG4gICAgLy8gLS0tIFNldHRlcnMgZm9yIExvY2FsIENvbXBvbmVudHMgKE1hcmsgRGlydHkpIC0tLVxuICAgIHNldCBwb3NpdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEudmVjMy5lcXVhbHModGhpcy5fcG9zaXRpb24sIHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB3Z3B1X21hdHJpeF8xLnZlYzMuY29weSh2YWx1ZSwgdGhpcy5fcG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5tYWtlRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgcXVhdGVybmlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXdncHVfbWF0cml4XzEucXVhdC5lcXVhbHModGhpcy5fcm90YXRpb24sIHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fcm90YXRpb24gPSB3Z3B1X21hdHJpeF8xLnF1YXQuY29weSh2YWx1ZSwgdGhpcy5fcm90YXRpb24pO1xuICAgICAgICAgICAgdGhpcy5tYWtlRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgc2NhbGUodmFsdWUpIHtcbiAgICAgICAgaWYgKCF3Z3B1X21hdHJpeF8xLnZlYzMuZXF1YWxzKHRoaXMuX3NjYWxlLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NjYWxlID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNvcHkodmFsdWUsIHRoaXMuX3NjYWxlKTtcbiAgICAgICAgICAgIHRoaXMubWFrZURpcnR5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UG9zaXRpb24oeCwgeSwgeikge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gd2dwdV9tYXRyaXhfMS52ZWMzLmNyZWF0ZSh4LCB5LCB6KTtcbiAgICB9XG4gICAgc2V0Um90YXRpb24oeFZhbHVlLCB5VmFsdWUsIHpWYWx1ZSwgb3JkZXIgPSBcInh5elwiKSB7XG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gd2dwdV9tYXRyaXhfMS5xdWF0LmZyb21FdWxlcih4VmFsdWUsIHlWYWx1ZSwgelZhbHVlLCBvcmRlcik7XG4gICAgICAgIHRoaXMubWFrZURpcnR5KCk7XG4gICAgfVxuICAgIHNldFNjYWxlKHgsIHksIHopIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHdncHVfbWF0cml4XzEudmVjMy5jcmVhdGUoeCwgeSwgeik7XG4gICAgfVxuICAgIC8vIC0tLSBNYXRyaXggR2V0dGVycyAoVXBkYXRlIGlmIERpcnR5KSAtLS1cbiAgICAvKiogR2V0cyB0aGUgbG9jYWwgdHJhbnNmb3JtYXRpb24gbWF0cml4LCByZWNhbGN1bGF0aW5nIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICBnZXQgbG9jYWxNYXRyaXgoKSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2NhbERpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsTWF0cml4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsTWF0cml4O1xuICAgIH1cbiAgICAvKiogR2V0cyB0aGUgd29ybGQgdHJhbnNmb3JtYXRpb24gbWF0cml4LCByZWNhbGN1bGF0aW5nIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICBnZXQgd29ybGRNYXRyaXgoKSB7XG4gICAgICAgIC8vIEZvcmNlIHVwZGF0ZSBpZiBsb2NhbCBvciB3b3JsZCBpcyBkaXJ0eS5cbiAgICAgICAgLy8gR2V0dGluZyBwYXJlbnQud29ybGRNYXRyaXggd2lsbCByZWN1cnNpdmVseSB1cGRhdGUgdGhlIGNoYWluIGlmIG5lZWRlZC5cbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsRGlydHkgfHwgdGhpcy5fd29ybGREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZE1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JsZE1hdHJpeDtcbiAgICB9XG4gICAgLy8gLS0tIFVwZGF0ZSBMb2dpYyAtLS1cbiAgICAvKiogUmVjYWxjdWxhdGVzIHRoZSBsb2NhbCBtYXRyaXggZnJvbSBwb3NpdGlvbiwgcm90YXRpb24sIGFuZCBzY2FsZS4gKi9cbiAgICB1cGRhdGVMb2NhbE1hdHJpeCgpIHtcbiAgICAgICAgY29tcG9zZSh0aGlzLl9wb3NpdGlvbiwgdGhpcy5fcm90YXRpb24sIHRoaXMuX3NjYWxlLCB0aGlzLl9sb2NhbE1hdHJpeCk7XG4gICAgICAgIHRoaXMuX2xvY2FsRGlydHkgPSBmYWxzZTtcbiAgICAgICAgLy8gV29ybGQgbWF0cml4IGFsc28gYmVjb21lcyBkaXJ0eSB3aGVuZXZlciBsb2NhbCBtYXRyaXggY2hhbmdlc1xuICAgICAgICB0aGlzLl93b3JsZERpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgLyoqIFJlY2FsY3VsYXRlcyB0aGUgd29ybGQgbWF0cml4IGJhc2VkIG9uIHBhcmVudCBhbmQgbG9jYWwgbWF0cmljZXMuICovXG4gICAgdXBkYXRlV29ybGRNYXRyaXgoKSB7XG4gICAgICAgIC8vIEVuc3VyZSBsb2NhbCBtYXRyaXggaXMgdXAtdG8tZGF0ZSBmaXJzdFxuICAgICAgICBpZiAodGhpcy5fbG9jYWxEaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbE1hdHJpeCgpOyAvLyBUaGlzIHdpbGwgYWxzbyBzZXQgX3dvcmxkRGlydHkgPSB0cnVlLCB3aGljaCBpcyBmaW5lXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdvcmxkIG1hdHJpeDogcGFyZW50V29ybGQgKiBsb2NhbFxuICAgICAgICAgICAgd2dwdV9tYXRyaXhfMS5tYXQ0Lm11bHRpcGx5KHRoaXMuX3BhcmVudC53b3JsZE1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCwgdGhpcy5fd29ybGRNYXRyaXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gcGFyZW50LCB3b3JsZCBtYXRyaXggaXMgdGhlIHNhbWUgYXMgbG9jYWwgbWF0cml4XG4gICAgICAgICAgICB3Z3B1X21hdHJpeF8xLm1hdDQuY29weSh0aGlzLmxvY2FsTWF0cml4LCB0aGlzLl93b3JsZE1hdHJpeCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd29ybGREaXJ0eSA9IGZhbHNlOyAvLyBXb3JsZCBtYXRyaXggaXMgbm93IHVwLXRvLWRhdGVcbiAgICAgICAgLy8gSW1wb3J0YW50OiBOb3RpZnkgY2hpbGRyZW4gdGhhdCB0aGVpciB3b3JsZCBtYXRyaWNlcyBhcmUgbm93IGRpcnR5XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNoaWxkLl93b3JsZERpcnR5ID0gdHJ1ZTsgLy8gT3IgY2FsbCBjaGlsZC5tYWtlRGlydHkoKSBpZiBpdCBoYW5kbGVzIHByb3BhZ2F0aW9uXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIE1hcmtzIHRoaXMgdHJhbnNmb3JtIGFuZCBpdHMgZGVzY2VuZGFudHMgYXMgZGlydHkuICovXG4gICAgbWFrZURpcnR5KCkge1xuICAgICAgICB0aGlzLl9sb2NhbERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fd29ybGREaXJ0eSA9IHRydWU7XG4gICAgICAgIC8vIFByb3BhZ2F0ZSBkaXJ0aW5lc3MgZG93biB0aGUgaGllcmFyY2h5XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIGluZmluaXRlIGxvb3BzIGlmIGNoaWxkIGFscmVhZHkgbWFya2VkIGRpcnR5IGJ5IHBhcmVudCB1cGRhdGVcbiAgICAgICAgICAgIGlmICghY2hpbGQuX3dvcmxkRGlydHkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5tYWtlV29ybGREaXJ0eSgpOyAvLyBDaGlsZCBvbmx5IG5lZWRzIHdvcmxkIHVwZGF0ZSwgbm90IG5lY2Vzc2FyaWx5IGxvY2FsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIE1hcmtzIHRoaXMgdHJhbnNmb3JtJ3Mgd29ybGQgbWF0cml4IGFuZCBkZXNjZW5kYW50cycgd29ybGQgbWF0cmljZXMgYXMgZGlydHkuICovXG4gICAgbWFrZVdvcmxkRGlydHkoKSB7XG4gICAgICAgIGlmICghdGhpcy5fd29ybGREaXJ0eSkge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICB0aGlzLl93b3JsZERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5tYWtlV29ybGREaXJ0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIC0tLSBIaWVyYXJjaHkgTWFuYWdlbWVudCAtLS1cbiAgICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgICB9XG4gICAgYWRkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5fcGFyZW50ID09PSB0aGlzKVxuICAgICAgICAgICAgcmV0dXJuOyAvLyBBbHJlYWR5IGEgY2hpbGRcbiAgICAgICAgaWYgKGNoaWxkLl9wYXJlbnQpIHtcbiAgICAgICAgICAgIGNoaWxkLl9wYXJlbnQucmVtb3ZlKGNoaWxkKTsgLy8gUmVtb3ZlIGZyb20gcHJldmlvdXMgcGFyZW50XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgIGNoaWxkLm1ha2VXb3JsZERpcnR5KCk7IC8vIENoaWxkJ3Mgd29ybGQgdHJhbnNmb3JtIGlzIG5vdyByZWxhdGl2ZSB0byB0aGlzIG9uZVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZShjaGlsZCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2hpbGQuX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoaWxkLm1ha2VXb3JsZERpcnR5KCk7IC8vIENoaWxkJ3Mgd29ybGQgdHJhbnNmb3JtIG5lZWRzIHJlY2FsY3VsYXRpb24gKG5vdyByZWxhdGl2ZSB0byByb290KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuX2NoaWxkcmVuKSB7XG4gICAgICAgICAgICBjaGlsZC5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2hpbGQubWFrZVdvcmxkRGlydHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIH1cbiAgICB0cmF2ZXJzZShmbikge1xuICAgICAgICBmbih0aGlzKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xuICAgICAgICAgICAgY2hpbGQudHJhdmVyc2UoZm4pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UcmFuc2Zvcm0gPSBUcmFuc2Zvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVW5pZm9ybU1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCB1bmlmb3JtX3V0aWxzXzEgPSByZXF1aXJlKFwiLi91bmlmb3JtLXV0aWxzXCIpO1xuY2xhc3MgVW5pZm9ybU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGRldmljZSwgdW5pZm9ybXMsIHRleHR1cmVzLCBidWZmZXJzLCBsYWJlbCkge1xuICAgICAgICB0aGlzLl91bmlmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl90ZXh0dXJlc0RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZGV2aWNlID0gZGV2aWNlO1xuICAgICAgICB0aGlzLl91bmlmb3JtcyA9IHVuaWZvcm1zO1xuICAgICAgICB0aGlzLl90ZXh0dXJlcyA9IHRleHR1cmVzO1xuICAgICAgICB0aGlzLl9idWZmZXJzID0gYnVmZmVycztcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5fdW5pZm9ybURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZVVuaWZvcm0odW5pZm9ybSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHRvVXBkYXRlID0gKF9hID0gdGhpcy5fdW5pZm9ybXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maW5kKCh1KSA9PiB1Lm5hbWUgPT09IHVuaWZvcm0ubmFtZSk7XG4gICAgICAgIHRvVXBkYXRlLnZhbHVlID0gdW5pZm9ybS52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRVbmlmb3Jtc0RpcnR5KCk7XG4gICAgfVxuICAgIHVwZGF0ZVRleHR1cmVzKHRleHR1cmVzKSB7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzID0gdGV4dHVyZXM7XG4gICAgICAgIHRoaXMuX3RleHR1cmVzRGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl91bmlmb3JtRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuX3VuaWZvcm1BcnIgPSAoMCwgdW5pZm9ybV91dGlsc18xLnBhY2tVbmlmb3JtcykodGhpcy5fdW5pZm9ybXMgfHwgW10sIHRoaXMuX3VuaWZvcm1BcnIpO1xuICAgICAgICAgICAgdGhpcy5fdW5pZm9ybUJ1ZmZlciA9ICgwLCB1bmlmb3JtX3V0aWxzXzEudXBsb2FkVW5pZm9ybUJ1ZmZlcikodGhpcy5fdW5pZm9ybUFyciwgdGhpcy5fZGV2aWNlLCB0aGlzLl9sYWJlbCwgdGhpcy5fdW5pZm9ybUJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLl91bmlmb3JtRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGV4dHVyZXNEaXJ0eSkge1xuICAgICAgICAgICAgKHRoaXMuX3RleHR1cmVzIHx8IFtdKS5mb3JFYWNoKCh0KSA9PiB0LnVwbG9hZCh0aGlzLl9kZXZpY2UpKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRUZXh0dXJlc0RpcnR5KCkge1xuICAgICAgICB0aGlzLl90ZXh0dXJlc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0VW5pZm9ybXNEaXJ0eSgpIHtcbiAgICAgICAgdGhpcy5fdW5pZm9ybURpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0RGlydHkoKSB7XG4gICAgICAgIHRoaXMuc2V0VGV4dHVyZXNEaXJ0eSgpO1xuICAgICAgICB0aGlzLnNldFVuaWZvcm1zRGlydHkoKTtcbiAgICB9XG4gICAgZ2V0IHNhbXBsZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fc2FtcGxlcikge1xuICAgICAgICAgICAgdGhpcy5fc2FtcGxlciA9IHRoaXMuX2RldmljZS5jcmVhdGVTYW1wbGVyKHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhbXBsZXI7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBMYXlvdXREZXNjcmlwdG9yKCkge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGxldCBiaW5kaW5nID0gMDtcbiAgICAgICAgY29uc3QgeyBfdW5pZm9ybXMsIF90ZXh0dXJlcywgX2J1ZmZlcnMgfSA9IHRoaXM7XG4gICAgICAgIGlmICgoX3VuaWZvcm1zID09PSBudWxsIHx8IF91bmlmb3JtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3VuaWZvcm1zLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGJpbmRpbmc6IDAsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuVkVSVEVYIHwgR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidW5pZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICBoYXNEeW5hbWljT2Zmc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQmluZGluZ1NpemU6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmluZGluZysrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoX3RleHR1cmVzID09PSBudWxsIHx8IF90ZXh0dXJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RleHR1cmVzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsXG4gICAgICAgICAgICAgICAgc2FtcGxlcjogeyB0eXBlOiBcImZpbHRlcmluZ1wiIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKF90ZXh0dXJlcyA9PT0gbnVsbCB8fCBfdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90ZXh0dXJlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiBpICsgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogR1BVU2hhZGVyU3RhZ2UuRlJBR01FTlQsXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVR5cGU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdEaW1lbnNpb246IFwiMmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpc2FtcGxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChfYnVmZmVycyA9PT0gbnVsbCB8fCBfYnVmZmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2J1ZmZlcnMubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKF9idWZmZXJzID09PSBudWxsIHx8IF9idWZmZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYnVmZmVycy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBfYnVmZmVyc1tpXS52aXNpYmlsaXR5LFxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHsgdHlwZTogX2J1ZmZlcnNbaV0udHlwZSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXQgPSB7XG4gICAgICAgICAgICBsYWJlbDogYCR7dGhpcy5fbGFiZWx9IEJpbmRHcm91cCBMYXlvdXRgLFxuICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgZ2V0IGJpbmRHcm91cExheW91dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JpbmRHcm91cExheW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRHcm91cExheW91dDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iaW5kR3JvdXBMYXlvdXQgPSB0aGlzLl9kZXZpY2UuY3JlYXRlQmluZEdyb3VwTGF5b3V0KHRoaXMuYmluZEdyb3VwTGF5b3V0RGVzY3JpcHRvcik7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kR3JvdXBMYXlvdXQ7XG4gICAgfVxuICAgIGdldCBiaW5kR3JvdXBEZXNjcmlwdG9yKCkge1xuICAgICAgICBsZXQgYmluZGluZyA9IDA7XG4gICAgICAgIGNvbnN0IHsgX3VuaWZvcm1zLCBfdGV4dHVyZXMsIF9idWZmZXJzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGlmICgoX3VuaWZvcm1zID09PSBudWxsIHx8IF91bmlmb3JtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3VuaWZvcm1zLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIGJpbmRpbmcsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6IHsgYnVmZmVyOiB0aGlzLl91bmlmb3JtQnVmZmVyIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKF90ZXh0dXJlcyA9PT0gbnVsbCB8fCBfdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90ZXh0dXJlcy5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLFxuICAgICAgICAgICAgICAgIHJlc291cmNlOiB0aGlzLnNhbXBsZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJpbmRpbmcrKztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKF90ZXh0dXJlcyA9PT0gbnVsbCB8fCBfdGV4dHVyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90ZXh0dXJlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiBpICsgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IF90ZXh0dXJlc1tpXS52aWV3LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgoX2J1ZmZlcnMgPT09IG51bGwgfHwgX2J1ZmZlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9idWZmZXJzLmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChfYnVmZmVycyA9PT0gbnVsbCB8fCBfYnVmZmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2J1ZmZlcnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6IHsgYnVmZmVyOiBfYnVmZmVyc1tpXS5idWZmZXIgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiBgJHt0aGlzLl9sYWJlbH0gQmluZEdyb3VwYCxcbiAgICAgICAgICAgIGxheW91dDogdGhpcy5iaW5kR3JvdXBMYXlvdXQsXG4gICAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgYmluZEdyb3VwKCkge1xuICAgICAgICBpZiAodGhpcy5fYmluZEdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRHcm91cCA9IHRoaXMuX2RldmljZS5jcmVhdGVCaW5kR3JvdXAodGhpcy5iaW5kR3JvdXBEZXNjcmlwdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRHcm91cDtcbiAgICB9XG4gICAgZ2V0IGJ1ZmZlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXJzO1xuICAgIH1cbn1cbmV4cG9ydHMuVW5pZm9ybU1hbmFnZXIgPSBVbmlmb3JtTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYWNrVW5pZm9ybXMgPSBwYWNrVW5pZm9ybXM7XG5leHBvcnRzLnVwbG9hZFVuaWZvcm1CdWZmZXIgPSB1cGxvYWRVbmlmb3JtQnVmZmVyO1xuY29uc3QgY29sb3JfMSA9IHJlcXVpcmUoXCIuL2NvbG9yXCIpOyAvLyBBc3N1bWluZyBDb2xvciBjbGFzcyBleGlzdHMgYW5kIGhhcyBhIHVuaWZvcm1WYWx1ZSgpIG1ldGhvZFxuY29uc3QgQkFTRV9UWVBFX0xBWU9VVF9JTkZPID0ge1xuICAgIGYzMjogeyB0eXBlTmFtZTogXCJmMzJcIiwgYWxpZ246IDQsIHNpemU6IDQsIGFkdmFuY2VBbW91bnQ6IDQgfSxcbiAgICBpMzI6IHsgdHlwZU5hbWU6IFwiaTMyXCIsIGFsaWduOiA0LCBzaXplOiA0LCBhZHZhbmNlQW1vdW50OiA0IH0sXG4gICAgdTMyOiB7IHR5cGVOYW1lOiBcInUzMlwiLCBhbGlnbjogNCwgc2l6ZTogNCwgYWR2YW5jZUFtb3VudDogNCB9LFxuICAgIHZlYzI6IHsgdHlwZU5hbWU6IFwidmVjMlwiLCBhbGlnbjogOCwgc2l6ZTogOCwgYWR2YW5jZUFtb3VudDogOCB9LFxuICAgIHZlYzM6IHsgdHlwZU5hbWU6IFwidmVjM1wiLCBhbGlnbjogMTYsIHNpemU6IDEyLCBhZHZhbmNlQW1vdW50OiAxNiB9LFxuICAgIHZlYzQ6IHsgdHlwZU5hbWU6IFwidmVjNFwiLCBhbGlnbjogMTYsIHNpemU6IDE2LCBhZHZhbmNlQW1vdW50OiAxNiB9LFxuICAgIGNvbG9yOiB7IHR5cGVOYW1lOiBcImNvbG9yXCIsIGFsaWduOiAxNiwgc2l6ZTogMTYsIGFkdmFuY2VBbW91bnQ6IDE2IH0sIC8vIFRyZWF0ZWQgbGlrZSB2ZWM0XG4gICAgbWF0Mzoge1xuICAgICAgICB0eXBlTmFtZTogXCJtYXQzXCIsXG4gICAgICAgIGFsaWduOiAxNixcbiAgICAgICAgc2l6ZTogMzYsXG4gICAgICAgIGFkdmFuY2VBbW91bnQ6IDQ4LFxuICAgICAgICBwYWRkZWRTdHJpZGU6IDE2LFxuICAgIH0sXG4gICAgbWF0NDoge1xuICAgICAgICB0eXBlTmFtZTogXCJtYXQ0XCIsXG4gICAgICAgIGFsaWduOiAxNixcbiAgICAgICAgc2l6ZTogNjQsXG4gICAgICAgIGFkdmFuY2VBbW91bnQ6IDY0LFxuICAgICAgICBwYWRkZWRTdHJpZGU6IDE2LFxuICAgIH0sXG59O1xuY29uc3QgY29tcHV0ZWRTdHJ1Y3RMYXlvdXRDYWNoZSA9IHt9O1xuLyoqXG4gKiBJbmZlcnMgdGhlIFdHU0wgYmFzZSBkYXRhIHR5cGUgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldERhdGFUeXBlRnJvbVZhbHVlKHZhbHVlLCBpdGVtTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpID8gXCJ1MzJcIiA6IFwiZjMyXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY29sb3JfMS5Db2xvcikge1xuICAgICAgICByZXR1cm4gXCJjb2xvclwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlYzJcIjtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZWMzXCI7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmVjNFwiO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAxMjogLy8gPz9cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJtYXQzXCI7XG4gICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm1hdDRcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBGbG9hdDMyQXJyYXkgbGVuZ3RoIGZvciBpdGVtIFwiJHtpdGVtTmFtZX1cIiBmb3IgdHlwZSBpbmZlcmVuY2U6ICR7dmFsdWUubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvdWxkIG5vdCBiZSBjYWxsZWQgZm9yIHN0cnVjdHMsIGFzIHRoZWlyIHR5cGUgbXVzdCBiZSBleHBsaWNpdCBvciBkZWZpbmVkIHdpdGggJ21lbWJlcnMnLlxuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGluZmVyIGJhc2UgdHlwZSBmb3IgaXRlbSBcIiR7aXRlbU5hbWV9XCIuIFZhbHVlIHR5cGU6ICR7dHlwZW9mIHZhbHVlfS4gSWYgaXQncyBhIHN0cnVjdCwgaXRzICd0eXBlJyAoYW5kICdtZW1iZXJzJyBpZiBuZXcpIG11c3QgYmUgZGVmaW5lZC5gKTtcbn1cbmZ1bmN0aW9uIGdldExheW91dEluZm8oaXRlbSkge1xuICAgIGxldCB0eXBlTmFtZVRvVXNlID0gaXRlbS50eXBlO1xuICAgIGNvbnN0IG1lbWJlcnMgPSBpdGVtLm1lbWJlcnM7XG4gICAgY29uc3QgaXRlbU5hbWUgPSBpdGVtLm5hbWU7IC8vIEZvciBlcnJvciBtZXNzYWdlc1xuICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgIC8vIEl0J3MgYSBzdHJ1Y3QgZGVmaW5pdGlvbiBvciBhIHN0cnVjdCB0eXBlIHdpdGggbWVtYmVycyBwcm92aWRlZFxuICAgICAgICBpZiAoIXR5cGVOYW1lVG9Vc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3RydWN0IGl0ZW0gXCIke2l0ZW1OYW1lfVwiIG11c3QgaGF2ZSBhICd0eXBlJyBwcm9wZXJ0eSBkZWZpbmluZyBpdHMgbmFtZSB3aGVuICdtZW1iZXJzJyBhcmUgcHJvdmlkZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGVkU3RydWN0TGF5b3V0Q2FjaGVbdHlwZU5hbWVUb1VzZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlZFN0cnVjdExheW91dENhY2hlW3R5cGVOYW1lVG9Vc2VdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50U3RydWN0T2Zmc2V0ID0gMDtcbiAgICAgICAgbGV0IHN0cnVjdE1heE1lbWJlckFsaWduID0gMDtcbiAgICAgICAgY29uc3QgbWVtYmVyTGF5b3V0cyA9IHt9O1xuICAgICAgICBjb25zdCBzdHJ1Y3RWYWx1ZU9iamVjdCA9IGl0ZW0udmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS52YWx1ZSAhPT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgaXRlbS52YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBmb3Igc3RydWN0IFwiJHtpdGVtTmFtZX1cIiBtdXN0IGJlIGFuIG9iamVjdCB3aGVuICdtZW1iZXJzJyBhcmUgZGVmaW5lZCBmb3IgbGF5b3V0IGNhbGN1bGF0aW9uLmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbWVtYmVyRGVmIG9mIG1lbWJlcnMpIHtcbiAgICAgICAgICAgIC8vIG1lbWJlckRlZiBpcyBVbmlmb3JtTGF5b3V0TWVtYmVyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJOYW1lID0gbWVtYmVyRGVmLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJWYWwgPSBzdHJ1Y3RWYWx1ZU9iamVjdFttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgIGlmIChtZW1iZXJWYWwgPT09IHVuZGVmaW5lZCAmJiAhbWVtYmVyRGVmLnR5cGUgJiYgIW1lbWJlckRlZi5tZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBlcnJvciBpZiB2YWx1ZSBpcyBuZWVkZWQgZm9yIGluZmVyZW5jZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgZm9yIHN0cnVjdCBtZW1iZXIgXCIke21lbWJlck5hbWV9XCIgb2Ygc3RydWN0IFwiJHt0eXBlTmFtZVRvVXNlfVwiIG5vdCBwcm92aWRlZCwgYW5kIHR5cGUgY2Fubm90IGJlIGluZmVycmVkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1lbWJlclR5cGVTdHJpbmcgPSBtZW1iZXJEZWYudHlwZTtcbiAgICAgICAgICAgIGlmICghbWVtYmVyVHlwZVN0cmluZyAmJiAhbWVtYmVyRGVmLm1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJbmZlciBpZiBiYXNlIHR5cGUgYW5kIG5vIGV4cGxpY2l0IHR5cGVcbiAgICAgICAgICAgICAgICBpZiAobWVtYmVyVmFsID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgZm9yIHN0cnVjdCBtZW1iZXIgXCIke21lbWJlck5hbWV9XCIgbmVlZGVkIGZvciB0eXBlIGluZmVyZW5jZS5gKTtcbiAgICAgICAgICAgICAgICBtZW1iZXJUeXBlU3RyaW5nID0gZ2V0RGF0YVR5cGVGcm9tVmFsdWUobWVtYmVyVmFsLCBgJHtpdGVtTmFtZX0uJHttZW1iZXJOYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIW1lbWJlclR5cGVTdHJpbmcgJiYgbWVtYmVyRGVmLm1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJbmxpbmUgbmVzdGVkIHN0cnVjdCBkZWZpbml0aW9uIHdpdGhvdXQgYSB0eXBlIG5hbWUgZm9yIGl0c2VsZlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW5saW5lIG5lc3RlZCBzdHJ1Y3QgbWVtYmVyIFwiJHttZW1iZXJOYW1lfVwiIHdpdGhpbiBcIiR7dHlwZU5hbWVUb1VzZX1cIiBtdXN0IGhhdmUgaXRzIG93biAndHlwZScgKG5hbWUpIGRlZmluZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJJdGVtRm9yTGF5b3V0ID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1lbWJlck5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1lbWJlclZhbCwgLy8gUGFzcyB0aGUgYWN0dWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgdHlwZTogbWVtYmVyVHlwZVN0cmluZywgLy8gVXNlIGV4cGxpY2l0IG9yIGluZmVycmVkIHR5cGVcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBtZW1iZXJEZWYubWVtYmVycywgLy8gUGFzcyBuZXN0ZWQgc3RydWN0IGRlZmluaXRpb24gaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBtZW1iZXJMYXlvdXQgPSBnZXRMYXlvdXRJbmZvKG1lbWJlckl0ZW1Gb3JMYXlvdXQpO1xuICAgICAgICAgICAgc3RydWN0TWF4TWVtYmVyQWxpZ24gPSBNYXRoLm1heChzdHJ1Y3RNYXhNZW1iZXJBbGlnbiwgbWVtYmVyTGF5b3V0LmFsaWduKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlckFsaWduID0gbWVtYmVyTGF5b3V0LmFsaWduO1xuICAgICAgICAgICAgY29uc3QgcGFkZGluZyA9IChtZW1iZXJBbGlnbiAtIChjdXJyZW50U3RydWN0T2Zmc2V0ICUgbWVtYmVyQWxpZ24pKSAlIG1lbWJlckFsaWduO1xuICAgICAgICAgICAgY3VycmVudFN0cnVjdE9mZnNldCArPSBwYWRkaW5nO1xuICAgICAgICAgICAgbWVtYmVyTGF5b3V0c1ttZW1iZXJOYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWVtYmVyTGF5b3V0KSwgeyByZWxhdGl2ZU9mZnNldDogY3VycmVudFN0cnVjdE9mZnNldCB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRTdHJ1Y3RPZmZzZXQgKz0gbWVtYmVyTGF5b3V0LmFkdmFuY2VBbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RydWN0QWxpZ24gPSBzdHJ1Y3RNYXhNZW1iZXJBbGlnbjtcbiAgICAgICAgY29uc3QgZmluYWxTdHJ1Y3RQYWRkaW5nID0gKHN0cnVjdEFsaWduIC0gKGN1cnJlbnRTdHJ1Y3RPZmZzZXQgJSBzdHJ1Y3RBbGlnbikpICUgc3RydWN0QWxpZ247XG4gICAgICAgIGNvbnN0IHN0cnVjdFRvdGFsU2l6ZSA9IGN1cnJlbnRTdHJ1Y3RPZmZzZXQgKyBmaW5hbFN0cnVjdFBhZGRpbmc7XG4gICAgICAgIGNvbnN0IHN0cnVjdExheW91dCA9IHtcbiAgICAgICAgICAgIGFsaWduOiBzdHJ1Y3RBbGlnbixcbiAgICAgICAgICAgIHNpemU6IHN0cnVjdFRvdGFsU2l6ZSxcbiAgICAgICAgICAgIGFkdmFuY2VBbW91bnQ6IHN0cnVjdFRvdGFsU2l6ZSxcbiAgICAgICAgICAgIGlzU3RydWN0OiB0cnVlLFxuICAgICAgICAgICAgbWVtYmVyc0xheW91dDogbWVtYmVyTGF5b3V0cyxcbiAgICAgICAgICAgIHR5cGVOYW1lOiB0eXBlTmFtZVRvVXNlLFxuICAgICAgICB9O1xuICAgICAgICBjb21wdXRlZFN0cnVjdExheW91dENhY2hlW3R5cGVOYW1lVG9Vc2VdID0gc3RydWN0TGF5b3V0O1xuICAgICAgICByZXR1cm4gc3RydWN0TGF5b3V0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlTmFtZVRvVXNlKSB7XG4gICAgICAgIC8vIFR5cGUgaXMgZXhwbGljaXRseSBwcm92aWRlZCwgbm90IGEgbmV3IHN0cnVjdCBkZWZpbml0aW9uIHdpdGggbWVtYmVyc1xuICAgICAgICBpZiAoQkFTRV9UWVBFX0xBWU9VVF9JTkZPW3R5cGVOYW1lVG9Vc2VdKSB7XG4gICAgICAgICAgICByZXR1cm4gQkFTRV9UWVBFX0xBWU9VVF9JTkZPW3R5cGVOYW1lVG9Vc2VdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlZFN0cnVjdExheW91dENhY2hlW3R5cGVOYW1lVG9Vc2VdKSB7XG4gICAgICAgICAgICAvLyBJdCdzIGEgcHJlLWRlZmluZWQgc3RydWN0IHR5cGVcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlZFN0cnVjdExheW91dENhY2hlW3R5cGVOYW1lVG9Vc2VdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBleHBsaWNpdCB0eXBlIFwiJHt0eXBlTmFtZVRvVXNlfVwiIGZvciBpdGVtIFwiJHtpdGVtTmFtZX1cIiBhbmQgbm90IGEgZGVmaW5lZCBzdHJ1Y3QgaW4gY2FjaGUuYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBObyB0eXBlLCBubyBtZW1iZXJzIC0gaW5mZXIgYmFzZSB0eXBlIGZyb20gdmFsdWVcbiAgICAgICAgY29uc3QgaW5mZXJyZWRUeXBlID0gZ2V0RGF0YVR5cGVGcm9tVmFsdWUoaXRlbS52YWx1ZSwgaXRlbU5hbWUpO1xuICAgICAgICBpZiAoQkFTRV9UWVBFX0xBWU9VVF9JTkZPW2luZmVycmVkVHlwZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBCQVNFX1RZUEVfTEFZT1VUX0lORk9baW5mZXJyZWRUeXBlXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBnZXQgbGF5b3V0IGZvciBpbmZlcnJlZCB0eXBlIFwiJHtpbmZlcnJlZFR5cGV9XCIgZm9yIGl0ZW0gXCIke2l0ZW1OYW1lfVwiLmApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhY2tVbmlmb3JtcyhpdGVtcywgdGFyZ2V0QnVmZmVyLCB0YXJnZXRPZmZzZXQgPSAwKSB7XG4gICAgbGV0IGN1cnJlbnRCdWZmZXJPZmZzZXQgPSAwO1xuICAgIGxldCBtYXhCdWZmZXJBbGlnbm1lbnQgPSAwO1xuICAgIGNvbnN0IGl0ZW1MYXlvdXRzV2l0aE9mZnNldHMgPSBbXTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRCdWZmZXIgfHwgbmV3IEFycmF5QnVmZmVyKDApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgY29uc3QgbGF5b3V0SW5mbyA9IGdldExheW91dEluZm8oaXRlbSk7XG4gICAgICAgIG1heEJ1ZmZlckFsaWdubWVudCA9IE1hdGgubWF4KG1heEJ1ZmZlckFsaWdubWVudCwgbGF5b3V0SW5mby5hbGlnbik7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAobGF5b3V0SW5mby5hbGlnbiAtIChjdXJyZW50QnVmZmVyT2Zmc2V0ICUgbGF5b3V0SW5mby5hbGlnbikpICVcbiAgICAgICAgICAgIGxheW91dEluZm8uYWxpZ247XG4gICAgICAgIGN1cnJlbnRCdWZmZXJPZmZzZXQgKz0gcGFkZGluZztcbiAgICAgICAgaXRlbUxheW91dHNXaXRoT2Zmc2V0cy5wdXNoKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbGF5b3V0SW5mbyksIHsgcmVsYXRpdmVPZmZzZXQ6IGN1cnJlbnRCdWZmZXJPZmZzZXQsIGl0ZW1EYXRhOiBpdGVtIH0pKTtcbiAgICAgICAgY3VycmVudEJ1ZmZlck9mZnNldCArPSBsYXlvdXRJbmZvLmFkdmFuY2VBbW91bnQ7XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsQnVmZmVyUGFkZGluZyA9IChtYXhCdWZmZXJBbGlnbm1lbnQgLSAoY3VycmVudEJ1ZmZlck9mZnNldCAlIG1heEJ1ZmZlckFsaWdubWVudCkpICVcbiAgICAgICAgbWF4QnVmZmVyQWxpZ25tZW50O1xuICAgIGNvbnN0IHRvdGFsU2l6ZU5lZWRlZEZvckl0ZW1zID0gY3VycmVudEJ1ZmZlck9mZnNldCArIGZpbmFsQnVmZmVyUGFkZGluZztcbiAgICBsZXQgYnVmZmVyVG9Xcml0ZTtcbiAgICBsZXQgYmFzZVdyaXRlT2Zmc2V0O1xuICAgIGlmICh0YXJnZXRCdWZmZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldEJ1ZmZlci5ieXRlTGVuZ3RoIDwgdGFyZ2V0T2Zmc2V0ICsgdG90YWxTaXplTmVlZGVkRm9ySXRlbXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGFyZ2V0IGJ1ZmZlciB0b28gc21hbGwuIE5lZWQgJHt0b3RhbFNpemVOZWVkZWRGb3JJdGVtc30gYXQgb2Zmc2V0ICR7dGFyZ2V0T2Zmc2V0fSwgYnV0IGJ1ZmZlciBoYXMgJHt0YXJnZXRCdWZmZXIuYnl0ZUxlbmd0aH0gYnl0ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyVG9Xcml0ZSA9IHRhcmdldEJ1ZmZlcjtcbiAgICAgICAgYmFzZVdyaXRlT2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYnVmZmVyVG9Xcml0ZSA9IG5ldyBBcnJheUJ1ZmZlcih0b3RhbFNpemVOZWVkZWRGb3JJdGVtcyk7XG4gICAgICAgIGJhc2VXcml0ZU9mZnNldCA9IDA7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyVG9Xcml0ZSk7XG4gICAgY29uc3QgYnVmZmVyQXNGbG9hdHMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlclRvV3JpdGUpO1xuICAgIGZ1bmN0aW9uIHdyaXRlRGF0YUl0ZW0oaXRlbVZhbHVlLCBpdGVtTGF5b3V0LCBjdXJyZW50QWJzb2x1dGVPZmZzZXQpIHtcbiAgICAgICAgaWYgKGl0ZW1MYXlvdXQuaXNTdHJ1Y3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbVZhbHVlICE9PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhbiBvYmplY3QgZm9yIHN0cnVjdCB2YWx1ZSBcIiR7aXRlbUxheW91dC50eXBlTmFtZX1cIiwgYnV0IGdvdCAke3R5cGVvZiBpdGVtVmFsdWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHJ1Y3RWYWx1ZSA9IGl0ZW1WYWx1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWVtYmVyTmFtZSBpbiBpdGVtTGF5b3V0Lm1lbWJlcnNMYXlvdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXJMYXlvdXRJbmZvID0gaXRlbUxheW91dC5tZW1iZXJzTGF5b3V0W21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlclZhbHVlID0gc3RydWN0VmFsdWVbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1lbWJlclZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBmb3Igc3RydWN0IG1lbWJlciBcIiR7bWVtYmVyTmFtZX1cIiBvZiBzdHJ1Y3QgXCIke2l0ZW1MYXlvdXQudHlwZU5hbWV9XCIgbm90IHByb3ZpZGVkLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3cml0ZURhdGFJdGVtKG1lbWJlclZhbHVlLCBtZW1iZXJMYXlvdXRJbmZvLCBjdXJyZW50QWJzb2x1dGVPZmZzZXQgKyBtZW1iZXJMYXlvdXRJbmZvLnJlbGF0aXZlT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbUxheW91dC50eXBlTmFtZSAvLyBVc2UgdHlwZU5hbWUgZm9yIGRpcmVjdCBzd2l0Y2hcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ1MzJcIjpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50MzIoY3VycmVudEFic29sdXRlT2Zmc2V0LCBpdGVtVmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZjMyXCI6XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuc2V0RmxvYXQzMihjdXJyZW50QWJzb2x1dGVPZmZzZXQsIGl0ZW1WYWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQoaXRlbVZhbHVlLnVuaWZvcm1WYWx1ZSgpLCBjdXJyZW50QWJzb2x1dGVPZmZzZXQgLyA0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZlYzJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVjNFwiOlxuICAgICAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQoaXRlbVZhbHVlLCBjdXJyZW50QWJzb2x1dGVPZmZzZXQgLyA0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZlYzNcIjpcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQXNGbG9hdHMuc2V0KGl0ZW1WYWx1ZSwgY3VycmVudEFic29sdXRlT2Zmc2V0IC8gNCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXQ0XCI6XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckFzRmxvYXRzLnNldChpdGVtVmFsdWUsIGN1cnJlbnRBYnNvbHV0ZU9mZnNldCAvIDQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWF0M1wiOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXQzZGF0YSA9IGl0ZW1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uU3RyaWRlRmxvYXRzID0gaXRlbUxheW91dC5wYWRkZWRTdHJpZGUgLyA0O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlT2Zmc2V0ID0gaSAqIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0T2Zmc2V0RmxvYXRzID0gY3VycmVudEFic29sdXRlT2Zmc2V0IC8gNCArIGkgKiBjb2x1bW5TdHJpZGVGbG9hdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJBc0Zsb2F0cy5zZXQobWF0M2RhdGEuc3ViYXJyYXkoc291cmNlT2Zmc2V0LCBzb3VyY2VPZmZzZXQgKyAzKSwgZGVzdE9mZnNldEZsb2F0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0eXBlTmFtZSBmb3Igd3JpdGluZzogXCIke2l0ZW1MYXlvdXQudHlwZU5hbWV9XCIgYXQgb2Zmc2V0ICR7Y3VycmVudEFic29sdXRlT2Zmc2V0fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbVdpdGhPZmZzZXQgb2YgaXRlbUxheW91dHNXaXRoT2Zmc2V0cykge1xuICAgICAgICB3cml0ZURhdGFJdGVtKGl0ZW1XaXRoT2Zmc2V0Lml0ZW1EYXRhLnZhbHVlLCBpdGVtV2l0aE9mZnNldCwgYmFzZVdyaXRlT2Zmc2V0ICsgaXRlbVdpdGhPZmZzZXQucmVsYXRpdmVPZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyVG9Xcml0ZTtcbn1cbmZ1bmN0aW9uIHVwbG9hZFVuaWZvcm1CdWZmZXIocGFja2VkVW5pZm9ybXMsIGRldmljZSwgbGFiZWwgPSBcIlVuaWZvcm0gQnVmZmVyXCIsIGJ1ZmZlcikge1xuICAgIGJ1ZmZlciAhPT0gbnVsbCAmJiBidWZmZXIgIT09IHZvaWQgMCA/IGJ1ZmZlciA6IChidWZmZXIgPSBkZXZpY2UuY3JlYXRlQnVmZmVyKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHNpemU6IHBhY2tlZFVuaWZvcm1zLmJ5dGVMZW5ndGgsXG4gICAgICAgIHVzYWdlOiBHUFVCdWZmZXJVc2FnZS5DT1BZX0RTVCB8IEdQVUJ1ZmZlclVzYWdlLlVOSUZPUk0sXG4gICAgfSkpO1xuICAgIGRldmljZS5xdWV1ZS53cml0ZUJ1ZmZlcihidWZmZXIsIDAsIHBhY2tlZFVuaWZvcm1zLCAwLCBwYWNrZWRVbmlmb3Jtcy5ieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gYnVmZmVyO1xufVxuLy8gLS0tIEV4YW1wbGUgVXNhZ2UgLS0tXG4vKlxuY29uc3QgcG9pbnRMaWdodE1lbWJlcnM6IFVuaWZvcm1MYXlvdXRNZW1iZXJbXSA9IFtcbiAgICB7IG5hbWU6IFwicG9zaXRpb25cIiwgdmFsdWU6IG5ldyBGbG9hdDMyQXJyYXkoWzAsMCwwXSkgfSwgLy8gVHlwZSAndmVjMycgd2lsbCBiZSBpbmZlcnJlZFxuICAgIHsgbmFtZTogXCJjb2xvclwiLCB2YWx1ZTogbmV3IEZsb2F0MzJBcnJheShbMCwwLDBdKSB9LCAgICAvLyBUeXBlICd2ZWMzJyB3aWxsIGJlIGluZmVycmVkXG4gICAgeyBuYW1lOiBcImludGVuc2l0eVwiLCB2YWx1ZTogMCB9LCAvLyBUeXBlICdmMzInIHdpbGwgYmUgaW5mZXJyZWRcbiAgICB7IG5hbWU6IFwicmFkaXVzXCIsIHZhbHVlOiAwIH0sICAgIC8vIFR5cGUgJ2YzMicgd2lsbCBiZSBpbmZlcnJlZFxuICAgIC8vIElmIGEgbWVtYmVyIHdhcyBhbm90aGVyIHN0cnVjdCwgZS5nLiwgJ2F0dGVudWF0aW9uJywgaXRzICd0eXBlJyAoc3RydWN0IG5hbWUpIHdvdWxkIGJlIHJlcXVpcmVkOlxuICAgIC8vIHsgbmFtZTogXCJhdHRlbnVhdGlvblwiLCB0eXBlOiBcIkF0dGVudWF0aW9uUGFyYW1zXCIsIG1lbWJlcnM6IFsuLi5dIH1cbl07XG5cbmNvbnN0IHNjZW5lVW5pZm9ybUl0ZW1zOiBVbmlmb3JtSXRlbVtdID0gW1xuICAgIHsgLy8gU3RydWN0IGRlZmluZWQgaW5saW5lXG4gICAgICAgIG5hbWU6IFwibGlnaHQxXCIsXG4gICAgICAgIHR5cGU6IFwiUG9pbnRMaWdodEN1c3RvbVwiLCAvLyBOYW1lIGZvciB0aGlzIHN0cnVjdCB0eXBlICh1c2VkIGZvciBjYWNoaW5nIGl0cyBsYXlvdXQpXG4gICAgICAgIG1lbWJlcnM6IFsgLy8gRGVmaW5lIG1lbWJlcnM7IHRoZWlyIGJhc2UgdHlwZXMgY2FuIG5vdyBiZSBpbmZlcnJlZCBmcm9tICd2YWx1ZScgZm9yIGxpZ2h0MVxuICAgICAgICAgICAgeyBuYW1lOiBcInBvc2l0aW9uXCIgfSwgLy8gVHlwZSB3aWxsIGJlIGluZmVycmVkIGZyb20gbGlnaHQxLnZhbHVlLnBvc2l0aW9uXG4gICAgICAgICAgICB7IG5hbWU6IFwiY29sb3JcIiB9LCAgICAvLyBUeXBlIHdpbGwgYmUgaW5mZXJyZWQgZnJvbSBsaWdodDEudmFsdWUuY29sb3JcbiAgICAgICAgICAgIHsgbmFtZTogXCJpbnRlbnNpdHlcIiB9LC8vIFR5cGUgd2lsbCBiZSBpbmZlcnJlZCBmcm9tIGxpZ2h0MS52YWx1ZS5pbnRlbnNpdHlcbiAgICAgICAgICAgIHsgbmFtZTogXCJyYWRpdXNcIiB9LCAgIC8vIFR5cGUgd2lsbCBiZSBpbmZlcnJlZCBmcm9tIGxpZ2h0MS52YWx1ZS5yYWRpdXNcbiAgICAgICAgXSxcbiAgICAgICAgdmFsdWU6IHsgLy8gUHJvdmlkZSB2YWx1ZXMgZm9yIGFsbCBtZW1iZXJzXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IEZsb2F0MzJBcnJheShbMTAsIDIwLCAzMF0pLFxuICAgICAgICAgICAgY29sb3I6IG5ldyBGbG9hdDMyQXJyYXkoWzEuMCwgMC44LCAwLjVdKSxcbiAgICAgICAgICAgIGludGVuc2l0eTogMS41LFxuICAgICAgICAgICAgcmFkaXVzOiAxMDAuMCxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgeyAvLyBCYXNlIHR5cGUsIHR5cGUgaXMgaW5mZXJyZWRcbiAgICAgICAgbmFtZTogXCJhbWJpZW50Q29sb3JcIixcbiAgICAgICAgdmFsdWU6IG5ldyBGbG9hdDMyQXJyYXkoWzAuMSwgMC4xLCAwLjE1LCAxLjBdKSAvLyBJbmZlcnJlZCBhcyB2ZWM0XG4gICAgfSxcbiAgICB7IC8vIEJhc2UgdHlwZSwgdHlwZSBpcyBpbmZlcnJlZFxuICAgICAgICBuYW1lOiBcInRpbWVcIixcbiAgICAgICAgdmFsdWU6IDAuMCAvLyBJbmZlcnJlZCBhcyBmMzJcbiAgICB9LFxuICAgIHsgLy8gVXNpbmcgYSBwcmUtZGVmaW5lZCAobm93IGNhY2hlZCkgc3RydWN0IHR5cGVcbiAgICAgICAgbmFtZTogXCJsaWdodDJcIixcbiAgICAgICAgdHlwZTogXCJQb2ludExpZ2h0Q3VzdG9tXCIsIC8vIFJlZmVycyB0byB0aGUgbGF5b3V0IGNhY2hlZCBmcm9tIFwibGlnaHQxXCJcbiAgICAgICAgLy8gTm8gJ21lbWJlcnMnIG5lZWRlZCBoZXJlIGFzIFwiUG9pbnRMaWdodEN1c3RvbVwiIGxheW91dCBpcyBhbHJlYWR5IGtub3duL2NhY2hlZC5cbiAgICAgICAgdmFsdWU6IHsgLy8gVmFsdWVzIG11c3QgbWF0Y2ggdGhlIHN0cnVjdHVyZSBvZiBQb2ludExpZ2h0Q3VzdG9tXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IEZsb2F0MzJBcnJheShbLTUsIDUsIDVdKSxcbiAgICAgICAgICAgIGNvbG9yOiBuZXcgRmxvYXQzMkFycmF5KFswLjUsIDAuOCwgMS4wXSksXG4gICAgICAgICAgICBpbnRlbnNpdHk6IDAuOCxcbiAgICAgICAgICAgIHJhZGl1czogNTAuMCxcbiAgICAgICAgfVxuICAgIH1cbl07XG5cbi8vIFRvIHBhY2sgdGhlc2U6XG4vLyBjb25zdCBwYWNrZWRCdWZmZXIgPSBwYWNrVW5pZm9ybXMoc2NlbmVVbmlmb3JtSXRlbXMpO1xuLy8gY29uc29sZS5sb2coXCJQYWNrZWQgQnVmZmVyIEJ5dGUgTGVuZ3RoOlwiLCBwYWNrZWRCdWZmZXIuYnl0ZUxlbmd0aCk7IC8vIFNob3VsZCBiZSA4MCAoZm9yIGxpZ2h0MSwgYW1iaWVudCwgdGltZSkgKyA0OCAoZm9yIGxpZ2h0MikgPSAxMjhcblxuLy8gVG8gdmVyaWZ5IChyZXF1aXJlcyBhIHdheSB0byByZWFkIGJhY2sgZnJvbSBBcnJheUJ1ZmZlciBhY2NvcmRpbmcgdG8gbGF5b3V0KTpcbi8vIGNvbnN0IGZsb2F0VmlldyA9IG5ldyBGbG9hdDMyQXJyYXkocGFja2VkQnVmZmVyKTtcbi8vIGNvbnNvbGUubG9nKFwiTGlnaHQxIFBvc2l0aW9uIFg6XCIsIGZsb2F0Vmlld1swXSk7IC8vIDEwXG4vLyBjb25zb2xlLmxvZyhcIkxpZ2h0MSBDb2xvciBSOlwiLCBmbG9hdFZpZXdbMTYvNCArIDBdKTsgLy8gMS4wXG4vLyBjb25zb2xlLmxvZyhcIkxpZ2h0MSBJbnRlbnNpdHk6XCIsIGZsb2F0Vmlld1syOC80XSk7IC8vIDEuNVxuLy8gY29uc29sZS5sb2coXCJMaWdodDEgUmFkaXVzOlwiLCBmbG9hdFZpZXdbMzIvNF0pOyAvLyAxMDAuMFxuLy8gY29uc29sZS5sb2coXCJBbWJpZW50IFI6XCIsIGZsb2F0Vmlld1s0OC80XSk7IC8vIDAuMVxuLy8gY29uc29sZS5sb2coXCJUaW1lOlwiLCBmbG9hdFZpZXdbNjQvNF0pOyAvLyAwLjBcbi8vIGNvbnNvbGUubG9nKFwiTGlnaHQyIFBvc2l0aW9uIFg6XCIsIGZsb2F0Vmlld1s4MC80ICsgMF0pOyAvLyAtNVxuKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=