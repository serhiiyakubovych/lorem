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
	var SliderList = [ new Slide('https://static1.squarespace.com/static/5446908be4b0e284a8fb3b30/5633efece4b0b8a4b6edae3e/58334cda6a4963cd4fbd4cdb/1479757140683/cover2web.jpg?format=750w',
		'Lorem ipsum dolor sit amet.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati omnis quisquam iusto consequatur, ex maiores dolores, fugiat veniam ipsam reprehenderit rem fuga voluptatibus voluptatem quasi nostrum eaque et placeat!',
		true),
	new Slide('http://inkygoodness.com/wp-content/uploads/kelsey-wrotten-comic.jpg',
		'Lorem ipsum dolor.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non magnam expedita possimus facilis placeat.',
		true),
	new Slide('http://inkygoodness.com/wp-content/uploads/download_asset-23.jpg',
		'Lorem ipsum dolor.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, id!',
		true),
	new Slide('http://comicsalliance.com/files/2013/04/pinupdeath.jpg',
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