import {Canvas} from "./Canvas";
import {Feathers} from "./Feathers";
import {settings} from "./settings";

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