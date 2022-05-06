import {Canvas} from "./Canvas";
import {Feathers} from "./Feathers";
import {settings} from "./settings";

export class Animation {
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.start();
    }

    start() {
        this.canvas.animate();
        requestAnimationFrame(() => this.start());
    }
}