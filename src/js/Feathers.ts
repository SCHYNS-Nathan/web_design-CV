import {settings} from "./settings";

export class Feathers {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private opacity: number;
    private speedX: { min: number; max: number };
    private speedY: { min: number; max: number };
    private positionX: number;
    private positionY: number;
    private sprite: HTMLImageElement;
    private chooseFeatherType: number;
    private maxFeathers: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.sprite = new Image();
        this.sprite.src = settings.sprite;

        this.init();
    }

    init() {
        this.opacity = settings.feathers.opacity;
        this.positionX = Math.random()*this.canvas.width;
        this.positionY = 0;
        this.chooseFeatherType = Math.random();
        this.calculateMaxFeathers();

        this.speedX = settings.feathers.speedX;
        this.speedY = settings.feathers.speedY;
    }

    calculateMaxFeathers() {
        this.maxFeathers = Math.floor(this.canvas.width/100);
    }

    draw() {
        if(this.chooseFeatherType <= 0.33) {
            this.ctx.drawImage(
                this.sprite,
                settings.feathers.frame1.sx,
                settings.feathers.frame1.sy,
                settings.feathers.frame1.sw,
                settings.feathers.frame1.sh,
                this.positionX,
                this.positionY,
                settings.feathers.frame1.dw,
                settings.feathers.frame1.dh
            );
        } else if(this.chooseFeatherType <= 0.66 && this.chooseFeatherType > 0.33) {
            this.ctx.drawImage(
                this.sprite,
                settings.feathers.frame2.sx,
                settings.feathers.frame2.sy,
                settings.feathers.frame2.sw,
                settings.feathers.frame2.sh,
                this.positionX,
                this.positionY,
                settings.feathers.frame2.dw,
                settings.feathers.frame2.dh
            );
        } else if(this.chooseFeatherType > 0.66) {
            this.ctx.drawImage(
                this.sprite,
                settings.feathers.frame3.sx,
                settings.feathers.frame3.sy,
                settings.feathers.frame3.sw,
                settings.feathers.frame3.sh,
                this.positionX,
                this.positionY,
                settings.feathers.frame3.dw,
                settings.feathers.frame3.dh
            );
        } else {
            this.ctx.drawImage(
                this.sprite,
                settings.feathers.frame1.sx,
                settings.feathers.frame1.sy,
                settings.feathers.frame1.sw,
                settings.feathers.frame1.sh,
                this.positionX,
                this.positionY,
                settings.feathers.frame1.dw,
                settings.feathers.frame1.dh
            );
        }
    }

    resize() {

    }

    animate() {
        if (this.positionY > this.canvas.height + 45) {
            this.init();
        }
        this.positionY += 1;
        this.draw();
    }
}