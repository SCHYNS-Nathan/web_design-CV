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

// Slider
(function() {
    const Slider = {
        init() {
            this.selector();
            this.addEventListeners();
            this.setInterval();
            this.autoScrollSlider();
        },
        selector() {
            this.slider = document.querySelector('.slider__ul');
            this.sliderImg = document.querySelector('.slider__img');
            this.sliderImgWidth = this.sliderImg.clientWidth;
        },
        setInterval() {
            setInterval(()=> {
                this.autoScrollSlider();
            }, 2500);
        },
        addEventListeners() {
            window.addEventListener('load', () => {
                this.sliderImgWidth = this.sliderImg.clientWidth;
            });
            window.addEventListener('resize', () => {
                this.sliderImgWidth = this.sliderImg.clientWidth;
            });
        },
        autoScrollSlider() {
            if (this.slider.scrollLeft >= this.slider.scrollWidth - this.slider.clientWidth) {
                this.slider.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                this.slider.scrollBy({
                    left: this.sliderImgWidth+5,
                    behavior: "smooth"
                });
            }
        }
    };
    Slider.init();
}) ();

// Canvas
import {Canvas} from "./Canvas";
import {Animation} from "./Animation";

class Main {
    private canvas: Canvas;
    private animation: Animation;

    constructor() {
        this.canvas = new Canvas();
        this.animation = new Animation(this.canvas);
    }
}
new Main();