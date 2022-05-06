import {random2, settings} from "./settings";

export class Feathers {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private speedY: { min: number; max: number };
    private positionX: number;
    private positionY: number;
    private angle: number;
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
        this.chooseFeatherType = Math.random();
        this.positionX = Math.random()*(this.canvas.width-45);
        this.positionY = random2(settings.feathers.positionY);
        this.angle = random2(settings.feathers.angle);
        this.calculateMaxFeathers();

        this.speedY = settings.feathers.speedY;
    }

    calculateMaxFeathers() {
        this.maxFeathers = Math.floor(this.canvas.width/100);
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.positionX + (settings.feathers.frame1.dw/2), this.positionY + (settings.feathers.frame1.dh/2));
        this.ctx.rotate(this.angle * Math.PI / 180);
        if(this.chooseFeatherType <= 0.33) {
            this.ctx.drawImage(
                this.sprite,
                settings.feathers.frame1.sx,
                settings.feathers.frame1.sy,
                settings.feathers.frame1.sw,
                settings.feathers.frame1.sh,
                -settings.feathers.frame1.dw/2,
                -settings.feathers.frame1.dh/2,
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
                -settings.feathers.frame2.dw/2,
                -settings.feathers.frame2.dh/2,
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
                -settings.feathers.frame3.dw/2,
                -settings.feathers.frame3.dh/2,
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
        this.ctx.restore();
    }

    resize() {

    }

    animate() {
        if (this.positionY > this.canvas.height + 45) {
            this.init();
        }
        this.positionY += 1;
        this.angle += 1;

        this.draw();
    }
}