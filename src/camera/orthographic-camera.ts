export class OrthographicCamera {
    constructor() {
        console.log("OrthographicCamera initialized");
    }

    setPosition(x: number, y: number, z: number) {
        console.log(`Camera position set to (${x}, ${y}, ${z})`);
    }
}
