function Slider(selector, pause = 3000) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll('.slider-slide');
    this.currentSlide = 0;
    this.pause = pause;

    this.time = window.setTimeout(() => {
        this.nextSlide();
    }, this.pause);

    this.buttons();
};

Slider.prototype.changeSlide = function() {
    for (const el of this.slides) {
        el.classList.remove('slider-slide-active');
    }
    this.slides[this.currentSlide].classList.add('slider-slide-active');

    window.clearTimeout(this.time);
    this.time = window.setTimeout(() => {
        this.nextSlide();
    }, this.pause);
};

Slider.prototype.nextSlide = function() {
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) {
        this.currentSlide = 0;
    }

    this.changeSlide();
};

Slider.prototype.prevSlide = function() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length-1;
    }

    this.changeSlide();
};

Slider.prototype.buttons = function() {
    const btnNext = this.slider.querySelector('.slider-next');
    btnNext.addEventListener("click", () => {
        console.log("KLIKNIETO1");
        this.nextSlide();
    });

    const btnPrev = this.slider.querySelector('.slider-prev');
    btnPrev.addEventListener("click", () => {
        console.log("KLIKNIETO2");
        this.prevSlide();
    })
};


document.addEventListener('DOMContentLoaded', function() {
    const s1 = new Slider("#slider1");
    //s1.buttons();

    const s2 = new Slider("#slider2", 1000);
    //s2.buttons();

    const s3 = new Slider("#slider3", 2000);
    //s3.buttons();
});