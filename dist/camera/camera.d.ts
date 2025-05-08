import { Mat4, Vec2 } from "wgpu-matrix";
import { Transform } from "../transform";
export declare abstract class Camera extends Transform {
    protected _projectionMatrix: Mat4;
    protected _viewMatrix: Mat4;
    protected _isProjectionDirty: boolean;
    protected _isViewDirty: boolean;
    constructor();
    get projectionMatrix(): Mat4;
    get viewMatrix(): Mat4;
    abstract updateProjectionMatrix(): void;
    abstract updateViewMatrix(): void;
    updateMatrices(): void;
    abstract viewportResized(size: Vec2): any;
}
