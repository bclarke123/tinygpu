import { Vec2, Vec3 } from "wgpu-matrix";
import { Camera } from "./camera";
export interface OrthographicCameraProps {
    left: number;
    right: number;
    bottom: number;
    top: number;
    near: number;
    far: number;
    position: Vec3;
    target: Vec3;
    up: Vec3;
}
export declare class OrthographicCamera extends Camera {
    target: Vec3;
    up: Vec3;
    left: number;
    right: number;
    bottom: number;
    top: number;
    near: number;
    far: number;
    constructor({ left, // Default frustum spans -1 to 1 in X and Y
    right, bottom, top, near, far, position, // Default position
    target, // Default target (origin)
    up }?: {
        left?: number;
        right?: number;
        bottom?: number;
        top?: number;
        near?: number;
        far?: number;
        position?: Float32Array<ArrayBufferLike>;
        target?: Float32Array<ArrayBufferLike>;
        up?: Float32Array<ArrayBufferLike>;
    });
    updateProjectionMatrix(): void;
    updateViewMatrix(): void;
    setPosition(newPosition: Vec3): void;
    setTarget(newTarget: Vec3): void;
    setUp(newUp: Vec3): void;
    setLeft(newLeft: number): void;
    setRight(newRight: number): void;
    setBottom(newBottom: number): void;
    setTop(newTop: number): void;
    setNear(newNear: number): void;
    setFar(newFar: number): void;
    viewportResized(_: Vec2): void;
}
