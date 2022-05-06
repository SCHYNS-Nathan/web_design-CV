import {Feathers} from "./Feathers";
import {Animation} from "./Animation";
import {settings} from "./settings";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private feathers: Feathers[];
    private sprite: HTMLImageElement;
    private animation: Animation;
    private maxFeathers: number;

    constructor() {
        this.canvas = document.getElementById('draw') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.feathers = [];
        this.maxFeathers = 0;

        this.sprite = new Image();
        this.sprite.src = settings.sprite;

        this.sprite.addEventListener("load", () => {
            this.resizeCanvas();
            this.maxFeathers = Math.floor(this.canvas.width/100);
            this.addEventListeners();
            for (let i=0; i<this.maxFeathers ; i++) {
                this.feathers.push(new Feathers(this.canvas, this.ctx));
            }
            this.feathers.forEach((feather: Feathers) => {
                feather.draw();
            })
            this.animate();
        })


    }

    resizeCanvas() {
        let windowWidth = window.innerWidth;
        let intro = document.querySelector('.main__intro');
        this.maxFeathers = Math.floor(this.canvas.width/100);

        this.canvas.width = intro.clientWidth;
        if (windowWidth >= 769 && windowWidth < 1025) {
            this.canvas.height = 394;
        } else if (windowWidth >= 1025) {
            this.canvas.height = 440;
        }
        else {
            this.canvas.height = 356;
        }
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
        })
    }
}