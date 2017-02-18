;(function() {
	'use strict';
	class Slide {
		constructor(image, title, description, isButton) {
			this.image = image;
			this.title = title;
			this.description = description;
			this.isButton = isButton;
		}
	}
	var SliderList = [ new Slide('img/slide-1.jpg',
		'Lorem ipsum dolor sit amet.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati omnis quisquam iusto consequatur, ex maiores dolores, fugiat veniam ipsam reprehenderit rem fuga voluptatibus voluptatem quasi nostrum eaque et placeat!',
		true),
	new Slide('img/slide-2.jpg',
		'Lorem ipsum dolor.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non magnam expedita possimus facilis placeat.',
		true),
	new Slide('img/slide-3.jpg',
		'Lorem ipsum dolor.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, id!',
		true),
	new Slide('img/slide-4.jpg',
		'Lorem ipsum dolor.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consectetur, dolorum quas tempora temporibus praesentium quam et asperiores. Eum, illum.',
		false) ];
	var currentSlide = 0;
	class Slider {
		constructor( element ) {
			this.element = document.querySelector( element );
			// this.currentSlide = 0; // can't correct use setInterval
			this.init();
		};
		init() {
			var self = this;
			self.sliderButtonPrev = document.getElementById('slider-prev');
			self.sliderButtonNext = document.getElementById('slider-next');
			self.sliderButtonPrev.addEventListener('click', function () {
				self.changeSlide("decrease");
			});
			self.sliderButtonNext.addEventListener('click', function () {
				self.changeSlide("increase");
			});
			self.sliderInterval = setInterval(self.changeSlide, 4000);
		}
		changeSlide(mode = "increase") {
			if (mode === "increase") {
				if (++currentSlide > SliderList.length - 1) { // Increase by default
					currentSlide = 0;
				}
			}
			else if (mode === "decrease") {
				if (--currentSlide < 0) {
					currentSlide = SliderList.length - 1;
				}
			}
			this.slider = document.getElementById('slider');
			this.sliderImage = document.getElementById('slider-photo');
			this.sliderTitle = document.getElementById('slider-title');
			this.sliderDescription = document.getElementById('slider-description');
			this.sliderButton = document.getElementById('slider-button');
			this.sliderImage.style.backgroundImage = "url("+SliderList[currentSlide].image+")";
			this.sliderTitle.textContent = SliderList[currentSlide].title;
			this.sliderDescription.textContent = SliderList[currentSlide].description;
			if (SliderList[currentSlide].isButton) {
				this.sliderButton.style.display = "inline-block";
			}
			else {
				this.sliderButton.style.display = "none";
			}
			clearInterval(this.sliderInterval); // Reset interval
			this.sliderInterval = setInterval(this.changeSlide, 4000);
		};
	}

	window.onload = function() { //When document is already
		var mainSlider = new Slider( '#slider' );
	}
}());