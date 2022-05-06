import {Feathers} from "./Feathers";
import {Animation} from "./Animation";
import {settings} from "./settings";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private feathers: Feathers[];
    private sprite: HTMLImageElement;
    private animation: Animation;

    constructor() {
        this.canvas = document.getElementById('draw') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.feathers = [];

        this.sprite = new Image();
        this.sprite.src = settings.sprite;

        this.sprite.addEventListener("load", () => {
            this.resizeCanvas();
            this.addEventListeners();
            for (let i=0; i<5 ; i++) {
                this.feathers.push(new Feathers(this.canvas, this.ctx));
            }
            this.feathers.forEach((feather: Feathers) => {
                feather.draw();
            })
            this.animate();
        })


    }

    resizeCanvas() {
        let intro = document.querySelector('.main__intro');
        this.canvas.width = intro.clientWidth;
        this.canvas.height = 150;
    }

    animate() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.feathers.forEach((feather: Feathers) => {
            feather.animate();
        })

    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            for (let i=0; i<5 ; i++) {
                this.feathers.push(new Feathers(this.canvas, this.ctx));
            }
            this.feathers.forEach((feather: Feathers) => {
                feather.draw();
            })
        })
    }
}