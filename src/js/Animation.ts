import {Canvas} from "./Canvas";

export class Animation {
    private canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.start();
    }

    start() {
        this.canvas.animate();
        requestAnimationFrame(() => this.start());
    }
}