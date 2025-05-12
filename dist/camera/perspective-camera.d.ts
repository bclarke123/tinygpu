import { Vec2, Vec3 } from "wgpu-matrix";
import { Camera } from "./camera";
export interface PerspectiveCameraProps {
    fov: number;
    aspect: number;
    near: number;
    far: number;
    position: Vec3;
    target: Vec3;
    up: Vec3;
}
export declare class PerspectiveCamera extends Camera {
    target: Vec3;
    up: Vec3;
    fov: number;
    aspect: number;
    near: number;
    far: number;
    constructor({ fov, // Default: 45 degrees FOV
    aspect, // Default: Common aspect ratio
    near, far, position, // Use vec3.create for default
    target, // Use vec3.create for default
    up, }?: {
        fov?: number;
        aspect?: number;
        near?: number;
        far?: number;
        position?: Float32Array<ArrayBufferLike>;
        target?: Float32Array<ArrayBufferLike>;
        up?: Float32Array<ArrayBufferLike>;
    });
    updateProjectionMatrix(): void;
    updateViewMatrix(): void;
    setPosition(x: number, y: number, z: number): void;
    setTarget(newTarget: Vec3): void;
    setUp(newUp: Vec3): void;
    setFov(newFov: number): void;
    setAspect(newAspect: number): void;
    setNear(newNear: number): void;
    setFar(newFar: number): void;
    viewportResized(size: Vec2): void;
}
