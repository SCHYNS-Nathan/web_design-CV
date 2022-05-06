class Main {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;


    constructor() {
        this.canvas = document.getElementById('draw') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
    }

    resizeCanvas() {
        let intro = document.querySelector('.main__intro');

        this.canvas.width = intro.clientWidth;
        this.canvas.height = 150;
    }
}
new Main();