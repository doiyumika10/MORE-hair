'use strict';

var mySwiper1 = new Swiper('.swiper1', {
  effect: 'fade',
  autoplay: {
  delay: 3000,
  stopOnLastSlide: false,
  disableOnInteraction: false,
  reverseDirection: false
},
  direction: 'horizontal',
	mousewheel: {
		forceToAxis: true,
		invert: false
	},
	keyboard: false,
  speed: 3000,
  loop: true,
  pagination: {
		el: '.page1',
		type: 'bullets',
		clickable: true
	}
});

var mySwiper2 = new Swiper('.swiper2', {
  spaceBetween: 10,
  slidesPerView: 4,
  loopedSlides: 5,
  direction: 'horizontal',
	mousewheel: {
		forceToAxis: true,
		invert: false
	},
	keyboard: false,
  speed: 1000,
  autoHeght: true,
  loop: true,
  breakpoints: {
		600: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 0
		},
		375: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 0
		}
	},
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});
