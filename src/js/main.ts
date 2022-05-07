// Fade-in
(function() {
    const FadeIn = {
        init() {
            this.selector();
            for (const item of this.items) {
                item.classList.add('fade');
            }
            this.addClassToInview();
        },
        selector() {
            this.items = document.querySelectorAll('.fade-in');
        },
        addClassToInview() {
            const cb = function(entries){
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('inview');
                    }
                });
                this.obs = new IntersectionObserver(cb);
                for(let i=0 ; i<this.items.length ; i++){
                    this.obs.observe(this.items[i]);
                }
            }
        }
    };
    FadeIn.init();
})();

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