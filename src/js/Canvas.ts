import {Feathers} from "./Feathers";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private feathers: Feathers[];

    constructor() {
        this.canvas = document.getElementById('draw') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.feathers = [];

        this.resizeCanvas();
        this.addEventListeners();
    }

    resizeCanvas() {
        let intro = document.querySelector('.main__intro');

        this.canvas.width = intro.clientWidth;
        this.canvas.height = 150;
    }

    draw() {
        this.feathers.forEach((feather) => {
            feather.draw();
        })
    }

    animate() {
        this.feathers.forEach((feather) => {
            feather.animate();
        })
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        })
    }


}