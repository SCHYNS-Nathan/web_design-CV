// Fade-in

let items;
items = document.querySelectorAll('.fade-in');
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
for(let i=0 ; i<items.length ; i++){
    obs.observe(items[i]);
}



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