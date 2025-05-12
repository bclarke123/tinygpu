import { Mat4, Quat, RotationOrder, Vec3 } from "wgpu-matrix";
export declare class Transform {
    protected _position: Vec3;
    protected _rotation: Quat;
    protected _scale: Vec3;
    protected _localMatrix: Mat4;
    protected _worldMatrix: Mat4;
    protected _localDirty: boolean;
    protected _worldDirty: boolean;
    protected _children: Transform[];
    protected _parent?: Transform;
    constructor();
    get position(): Vec3;
    get quaternion(): Quat;
    get scale(): Vec3;
    set position(value: Vec3);
    set quaternion(value: Quat);
    set scale(value: Vec3);
    setPosition(x: number, y: number, z: number): void;
    setRotation(xValue: number, yValue: number, zValue: number, order?: RotationOrder): void;
    setScale(x: number, y: number, z: number): void;
    /** Gets the local transformation matrix, recalculating if necessary. */
    get localMatrix(): Mat4;
    /** Gets the world transformation matrix, recalculating if necessary. */
    get worldMatrix(): Mat4;
    /** Recalculates the local matrix from position, rotation, and scale. */
    protected updateLocalMatrix(): void;
    /** Recalculates the world matrix based on parent and local matrices. */
    protected updateWorldMatrix(): void;
    /** Marks this transform and its descendants as dirty. */
    protected makeDirty(): void;
    /** Marks this transform's world matrix and descendants' world matrices as dirty. */
    protected makeWorldDirty(): void;
    get children(): Transform[];
    add(child: Transform): void;
    remove(child: Transform): void;
    clear(): void;
    traverse(fn: (xform: Transform) => void): void;
}
