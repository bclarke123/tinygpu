import { vec3, Vec3, quat, Quat, mat4, Mat4, mat3, Mat3 } from "wgpu-matrix"; // Added mat3 and Mat3
import { Transform } from "./transform";

const EPS = 0.000001;

// Helper function to clamp a value between a min and max
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

class Spherical {
  radius: number;
  phi: number; // polar angle (from y-axis)
  theta: number; // azimuthal angle (around y-axis)

  constructor(radius = 1, phi = 0, theta = 0) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
  }

  set(radius: number, phi: number, theta: number): this {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this;
  }

  copy(other: Spherical): this {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;
    return this;
  }

  makeSafe(): this {
    this.phi = clamp(this.phi, EPS, Math.PI - EPS);
    return this;
  }

  setFromVec3(v: Vec3, target: Vec3 = vec3.create(0, 0, 0)): this {
    const offset = vec3.subtract(v, target);
    this.radius = vec3.length(offset);
    if (this.radius === 0) {
      this.phi = 0;
      this.theta = 0;
    } else {
      this.phi = Math.acos(clamp(offset[1] / this.radius, -1, 1));
      this.theta = Math.atan2(offset[0], offset[2]);
    }
    return this;
  }

  setToVec3(target: Vec3 = vec3.create(0, 0, 0), out?: Vec3): Vec3 {
    if (!out) out = vec3.create();
    const sinPhiRadius = Math.sin(this.phi) * this.radius;
    out[0] = sinPhiRadius * Math.sin(this.theta) + target[0];
    out[1] = Math.cos(this.phi) * this.radius + target[1];
    out[2] = sinPhiRadius * Math.cos(this.theta) + target[2];
    return out;
  }
}

export class OrbitControls {
  public object: Transform;
  public domElement: HTMLElement;
  public enabled: boolean = true;
  public target: Vec3 = vec3.create(0, 0, 0);
  public minDistance: number = 0.1;
  public maxDistance: number = Infinity;
  public minPolarAngle: number = 0;
  public maxPolarAngle: number = Math.PI;
  public minAzimuthAngle: number = -Infinity;
  public maxAzimuthAngle: number = Infinity;
  public enablePan: boolean = true;
  public panSpeed: number = 1.0;
  public screenSpacePanning: boolean = true;
  public enableRotate: boolean = true;
  public rotateSpeed: number = 1.0;
  public enableZoom: boolean = true;
  public zoomSpeed: number = 1.0;
  public enableDamping: boolean = false;
  public dampingFactor: number = 0.05;

  protected spherical: Spherical = new Spherical();
  protected sphericalDelta: Spherical = new Spherical();
  protected targetDelta: Vec3 = vec3.create(0, 0, 0);
  protected panOffset: Vec3 = vec3.create();
  protected zoomChanged: boolean = false;
  protected rotateStart = { x: 0, y: 0 };
  protected panStart = { x: 0, y: 0 };
  protected dollyStart = { x: 0, y: 0 };

  protected STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  };
  protected state = this.STATE.NONE;

  protected onContextMenuWrapper: (event: Event) => void;
  protected onPointerDownWrapper: (event: PointerEvent) => void;
  protected onPointerMoveWrapper: (event: PointerEvent) => void;
  protected onPointerUpWrapper: (event: PointerEvent) => void;
  protected onMouseWheelWrapper: (event: WheelEvent) => void;

  // Temporary matrices for calculations to avoid allocations in the loop
  private _tempLookAtMatrix: Mat4 = mat4.create();
  private _tempRotationMatrix3: Mat3 = mat3.create();
  private _orbitTargetLast: Vec3 = vec3.create(); // To track target changes

  constructor(object: Transform, domElement?: HTMLElement) {
    this.object = object;
    this.domElement = domElement || document.body;
    this.updateSphericalsFromObject();
    vec3.copy(this.target, this._orbitTargetLast);

    this.onContextMenuWrapper = (event) => event.preventDefault();
    this.onPointerDownWrapper = this.onPointerDown.bind(this);
    this.onPointerMoveWrapper = this.onPointerMove.bind(this);
    this.onPointerUpWrapper = this.onPointerUp.bind(this);
    this.onMouseWheelWrapper = this.onMouseWheel.bind(this);

    this.addEventListeners();
  }

  protected addEventListeners(): void {
    this.domElement.addEventListener("contextmenu", this.onContextMenuWrapper);
    this.domElement.addEventListener("pointerdown", this.onPointerDownWrapper);
    this.domElement.addEventListener("wheel", this.onMouseWheelWrapper, {
      passive: false,
    });
  }

  public dispose(): void {
    this.domElement.removeEventListener(
      "contextmenu",
      this.onContextMenuWrapper,
    );
    this.domElement.removeEventListener(
      "pointerdown",
      this.onPointerDownWrapper,
    );
    this.domElement.removeEventListener(
      "pointermove",
      this.onPointerMoveWrapper,
    );
    this.domElement.removeEventListener("pointerup", this.onPointerUpWrapper);
    this.domElement.removeEventListener("wheel", this.onMouseWheelWrapper);
  }

  protected updateSphericalsFromObject(): void {
    this.spherical.setFromVec3(this.object.position, this.target);
  }

  protected getZoomScale(): number {
    return Math.pow(0.95, this.zoomSpeed);
  }

  protected rotateLeft(angle: number): void {
    this.sphericalDelta.theta -= angle;
  }

  protected rotateUp(angle: number): void {
    this.sphericalDelta.phi -= angle;
  }

  protected panLeft(distance: number, objectMatrix: Mat4): void {
    const v = vec3.fromValues(
      objectMatrix[0],
      objectMatrix[1],
      objectMatrix[2],
    );
    vec3.scale(v, -distance, v);
    vec3.add(this.panOffset, v, this.panOffset);
  }

  protected panUp(distance: number, objectMatrix: Mat4): void {
    const v = vec3.create();
    if (this.screenSpacePanning) {
      vec3.set(objectMatrix[4], objectMatrix[5], objectMatrix[6], v);
    } else {
      // Simplified world-space panning: Use world up vector for vertical panning direction
      // Cross camera's right vector with world up to get a more stable up pan direction
      const right = vec3.fromValues(
        objectMatrix[0],
        objectMatrix[1],
        objectMatrix[2],
      );
      vec3.cross(vec3.fromValues(0, 1, 0), right, v); // v is now camera's "up" in XZ plane
      vec3.normalize(v, v);
    }
    vec3.scale(v, distance, v);
    vec3.add(this.panOffset, v, this.panOffset);
  }

  protected pan(deltaX: number, deltaY: number): void {
    const offset = vec3.subtract(this.object.position, this.target);
    let targetDistance = vec3.length(offset);

    // Attempt to get camera FOV if available on the object, otherwise use a default
    const fov = (this.object as any).fov || 50; // Default FOV of 50 degrees
    targetDistance *= Math.tan(((fov / 2) * Math.PI) / 180.0);

    this.panLeft(
      (2 * deltaX * targetDistance) / this.domElement.clientHeight,
      this.object.worldMatrix,
    );
    this.panUp(
      (2 * deltaY * targetDistance) / this.domElement.clientHeight,
      this.object.worldMatrix,
    );
  }

  protected dollyOut(dollyScale: number): void {
    this.sphericalDelta.radius /= dollyScale;
  }

  protected dollyIn(dollyScale: number): void {
    this.sphericalDelta.radius *= dollyScale;
  }

  protected handlePointerDownRotate(event: PointerEvent): void {
    this.rotateStart.x = event.clientX;
    this.rotateStart.y = event.clientY;
  }

  protected handlePointerDownPan(event: PointerEvent): void {
    this.panStart.x = event.clientX;
    this.panStart.y = event.clientY;
  }

  protected handlePointerMoveRotate(event: PointerEvent): void {
    const element = this.domElement;
    const rotateEnd = { x: event.clientX, y: event.clientY };
    this.rotateLeft(
      ((2 * Math.PI * (rotateEnd.x - this.rotateStart.x)) /
        element.clientHeight) *
        this.rotateSpeed,
    );
    this.rotateUp(
      ((2 * Math.PI * (rotateEnd.y - this.rotateStart.y)) /
        element.clientHeight) *
        this.rotateSpeed,
    );
    this.rotateStart.x = rotateEnd.x;
    this.rotateStart.y = rotateEnd.y;
  }

  protected handlePointerMovePan(event: PointerEvent): void {
    const panEnd = { x: event.clientX, y: event.clientY };
    const deltaX = panEnd.x - this.panStart.x;
    const deltaY = panEnd.y - this.panStart.y;
    this.pan(deltaX * this.panSpeed, deltaY * this.panSpeed);
    this.panStart.x = panEnd.x;
    this.panStart.y = panEnd.y;
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!this.enabled) return;
    this.domElement.setPointerCapture(event.pointerId);
    this.domElement.addEventListener("pointermove", this.onPointerMoveWrapper);
    this.domElement.addEventListener("pointerup", this.onPointerUpWrapper);

    switch (event.button) {
      case 0:
        if (!this.enableRotate) return;
        this.handlePointerDownRotate(event);
        this.state = this.STATE.ROTATE;
        break;
      case 1:
        if (this.enablePan) {
          this.handlePointerDownPan(event);
          this.state = this.STATE.PAN;
        }
        break;
      case 2:
        if (!this.enablePan) return;
        this.handlePointerDownPan(event);
        this.state = this.STATE.PAN;
        break;
    }
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.enabled) return;
    switch (this.state) {
      case this.STATE.ROTATE:
        if (!this.enableRotate) return;
        this.handlePointerMoveRotate(event);
        break;
      case this.STATE.PAN:
        if (!this.enablePan) return;
        this.handlePointerMovePan(event);
        break;
    }
  }

  protected onPointerUp(event: PointerEvent): void {
    this.domElement.releasePointerCapture(event.pointerId);
    this.domElement.removeEventListener(
      "pointermove",
      this.onPointerMoveWrapper,
    );
    this.domElement.removeEventListener("pointerup", this.onPointerUpWrapper);
    this.state = this.STATE.NONE;
  }

  protected onMouseWheel(event: WheelEvent): void {
    if (
      !this.enabled ||
      !this.enableZoom ||
      (this.state !== this.STATE.NONE && this.state !== this.STATE.ROTATE)
    )
      return;
    event.preventDefault();
    event.stopPropagation();
    if (event.deltaY < 0) {
      this.dollyIn(this.getZoomScale());
    } else if (event.deltaY > 0) {
      this.dollyOut(this.getZoomScale());
    }
    this.zoomChanged = true;
  }

  public update(): boolean {
    if (!this.enabled) return false;

    const position = this.object.position; // Current position (Vec3)
    const currentOffset = vec3.subtract(position, this.target); // Reusable Vec3 for current offset

    // Update spherical from current offset (relative to current target)
    this.spherical.setFromVec3(position, this.target);

    if (this.enableRotate) {
      this.spherical.theta += this.sphericalDelta.theta;
      this.spherical.phi += this.sphericalDelta.phi;
    }

    // Apply pan offset to target
    if (this.enablePan) {
      vec3.add(this.target, this.panOffset, this.target);
      // vec3.add(this.target, this.targetDelta, this.target); // For damping pan momentum
    }

    this.spherical.phi = clamp(
      this.spherical.phi,
      this.minPolarAngle,
      this.maxPolarAngle,
    );
    this.spherical.makeSafe();
    this.spherical.theta = clamp(
      this.spherical.theta,
      this.minAzimuthAngle,
      this.maxAzimuthAngle,
    );
    this.spherical.radius *= this.sphericalDelta.radius;
    this.spherical.radius = clamp(
      this.spherical.radius,
      this.minDistance,
      this.maxDistance,
    );

    // Calculate new position based on possibly modified target and spherical coordinates
    const newPosition = this.spherical.setToVec3(this.target, vec3.create());

    if (this.enableDamping) {
      this.sphericalDelta.theta *= 1 - this.dampingFactor;
      this.sphericalDelta.phi *= 1 - this.dampingFactor;
      this.sphericalDelta.radius = Math.pow(
        this.sphericalDelta.radius,
        1 - this.dampingFactor,
      );
      if (Math.abs(this.sphericalDelta.radius - 1) < EPS)
        this.sphericalDelta.radius = 1;

      vec3.scale(this.panOffset, 1 - this.dampingFactor, this.panOffset);
      if (vec3.lengthSq(this.panOffset) < EPS * EPS)
        vec3.set(0, 0, 0, this.panOffset);

      // if (vec3.lengthSq(this.targetDelta) > EPS*EPS) { // For pan momentum
      //     vec3.scale(this.targetDelta, (1 - this.dampingFactor), this.targetDelta);
      // } else {
      //     vec3.zero(this.targetDelta);
      // }

      if (this.isMoving()) {
        this.zoomChanged = true;
      }
    } else {
      this.sphericalDelta.set(1, 0, 0);
      vec3.set(0, 0, 0, this.panOffset);
      // vec3.zero(this.targetDelta);
    }

    const positionChanged = !vec3.equals(this.object.position, newPosition);
    const targetChanged = !vec3.equals(this.target, this._orbitTargetLast);

    if (positionChanged || targetChanged || this.zoomChanged) {
      this.object.position = newPosition; // Set the new position

      // Calculate the new quaternion to look at the target
      // Use pre-allocated matrices to avoid GC churn
      mat4.lookAt(
        this.object.position,
        this.target,
        vec3.fromValues(0, 1, 0),
        this._tempLookAtMatrix,
      );
      mat3.fromMat4(this._tempRotationMatrix3, this._tempLookAtMatrix); // Extract Mat3 rotation
      quat.fromMat(this.object.quaternion, this._tempRotationMatrix3); // Convert Mat3 to Quat

      // Crucial: Trigger the setter in your Transform class if it has side effects (like setting a dirty flag)
      this.object.quaternion = this.object.quaternion;

      this.zoomChanged = false;
      vec3.copy(this.target, this._orbitTargetLast); // Update last target

      return true;
    }

    return false;
  }

  protected isMoving(): boolean {
    return (
      Math.abs(this.sphericalDelta.phi) > EPS ||
      Math.abs(this.sphericalDelta.theta) > EPS ||
      Math.abs(this.sphericalDelta.radius - 1) > EPS ||
      vec3.lengthSq(this.panOffset) > EPS //||
      //vec3.lengthSq(this.targetDelta) > EPS
    );
  }
}
