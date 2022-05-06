// Fade-in

const items = document.querySelectorAll('.fade-in');
for (const item of items) {
    item.classList.add('fade');
}

const cb = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }
    });
}

const obs = new IntersectionObserver(cb);
for(let i=0; i < items.length; i++){
    obs.observe(items[i]);
}





// Canvas

/*



let feathersArray = [];

resizeCanvas();
window.addEventListener('resize', () => {
    resizeCanvas();
})
function resizeCanvas() {

}



const FallingFeathers = {
    init() {
       this.maxFeathers();
       this.animate();
       this.addEventListeners();
    },

    maxFeathers() {
      this.maxFeather = Math.floor(canvas.width / 100);
    },

    animate() {
        this.feathers = [];

        if (this.feathers.length < this.maxFeather) {

            this.feathers.push(new Feathers(this.canvas, this.ctx));
            console.log(this.feathers)

        } else if (this.feathers.length > this.maxFeather) {
            this.feathers = this.feathers.slice(0, this.maxFeather);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.feathers.forEach((feather) => {
            // feather.update();
        })
        // requestAnimationFrame(this.animate.bind(this));
    },

    addEventListeners() {
        window.addEventListener('resize', () => {
            resizeCanvas();
            this.maxFeathers();
        })
        return this;
    }
}
class Feathers {
    constructor() {
        this.canvasElement = canvas;
        this.context = ctx;

        this.origin = {
            x: random(0, canvas.width - 40),
            y: 0
        }
        this.speed = random(1, 3);
        this.opacity = 1;

        this.sprite = new Image();
        this.sprite.src = './img/feathers.png';
        this.sprite.addEventListener('load', () => {
        })
    }

    update() {
        if (this.origin.y <= 0) {
            console.log(1)
            this.origin.y += this.speed.y;
            this.draw();

        }
        if (this.origin.y >= canvas.height) {
            console.log(2)
        }
    }

    draw() {
        this.context.drawImage(
            this.sprite,
            14,
            54,
            104,
            125,
            random(0, canvas.width - 40),
            this.origin.y,
            40,
            45
        );
        this.context.drawImage(
            this.sprite,
            161,
            7,
            131,
            179,
            random(0, canvas.width - 40),
            this.origin.y,
            40,
            45
        );
        this.context.drawImage(
            this.sprite,
            314,
            65,
            72,
            127,
            random(0, canvas.width - 40),
            this.origin.y,
            40,
            45
        );
    }
}



function random(min, max) {
    return min + Math.random() * (max - min);
}

FallingFeathers.init();
new Feathers();

 */


// Slider

const slider = document.querySelector('.slider__ul');
const sliderImg = document.querySelector('.slider__img');
let sliderImgWidth = sliderImg.clientWidth;

setInterval(()=> {
    scrollSlider();
}, 2500);

window.addEventListener('load', () => {
    sliderImgWidth = sliderImg.clientWidth;
})
window.addEventListener('resize', () => {
    sliderImgWidth = sliderImg.clientWidth;
})
function scrollSlider() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {

        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        slider.scrollBy({
            left: sliderImgWidth+5,
            behavior: "smooth"
        });
    }
}



