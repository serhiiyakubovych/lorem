;(function() {
	class SliderElement {
		constructor(image, title, description, isButton) {
			this.image = image;
			this.title = title;
			this.description = description;
			this.isButton = isButton;
		}
	}
	var SliderList = [ new SliderElement('https://static1.squarespace.com/static/5446908be4b0e284a8fb3b30/5633efece4b0b8a4b6edae3e/58334cda6a4963cd4fbd4cdb/1479757140683/cover2web.jpg?format=750w',
			'Lorem ipsum dolor sit amet.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati omnis quisquam iusto consequatur, ex maiores dolores, fugiat veniam ipsam reprehenderit rem fuga voluptatibus voluptatem quasi nostrum eaque et placeat!',
			true),
		new SliderElement('http://inkygoodness.com/wp-content/uploads/kelsey-wrotten-comic.jpg',
			'Lorem ipsum dolor.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae non magnam expedita possimus facilis placeat.',
			true),
		new SliderElement('http://inkygoodness.com/wp-content/uploads/download_asset-23.jpg',
			'Lorem ipsum dolor.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, id!',
			true),
		new SliderElement('http://comicsalliance.com/files/2013/04/pinupdeath.jpg',
			'Lorem ipsum dolor.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat consectetur, dolorum quas tempora temporibus praesentium quam et asperiores. Eum, illum.',
			false) ],
		currentSliderElement = 0,
		sliderInterval,
		changeSliderElement = function(mode = "increase") {
			if (mode === "increase") {
				if (++currentSliderElement > SliderList.length - 1) { // Increase by default
					currentSliderElement = 0;
				}
			}
			else if (mode === "decrease") {
				if (--currentSliderElement < 0) {
					currentSliderElement = SliderList.length - 1;
				}
			}
			var sliderImage = document.getElementById('slider-photo');
			var sliderTitle = document.getElementById('slider-title');
			var sliderDescription = document.getElementById('slider-description');
			var sliderButton = document.getElementById('slider-button');
			sliderImage.style.backgroundImage = "url("+SliderList[currentSliderElement].image+")";
			sliderTitle.textContent = SliderList[currentSliderElement].title;
			sliderDescription.textContent = SliderList[currentSliderElement].description;
			if (SliderList[currentSliderElement].isButton) {
				sliderButton.style.display = "inline-block";
			}
			else {
				sliderButton.style.display = "none";
			}
			clearInterval(sliderInterval);
			sliderInterval = setInterval(changeSliderElement, 4000);
		};

	window.onload = function() { //When document is already
		// SLIDER
		sliderInterval = setInterval(changeSliderElement, 4000);
		var sliderButtonPrev = document.getElementById('slider-prev');
		var sliderButtonNext = document.getElementById('slider-next');
		
		sliderButtonPrev.addEventListener('click', function () {
			changeSliderElement("decrease");
		});
		sliderButtonNext.addEventListener('click', function () {
			changeSliderElement("increase");
		});
		// SLIDER END
	}
}());