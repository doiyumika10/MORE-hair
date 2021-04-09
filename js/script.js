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

let dbtn = document.getElementById('dbtn');
let tbtn = document.getElementById('tbtn');
let hsbtn = document.getElementById('hsbtn');
let hcbtn = document.getElementById('hcbtn');

let dContent = document.getElementById('damageless-article');
let tContent = document.getElementById('treatment-article');
let hsContent = document.getElementById('headspa-article');
let hcContent = document.getElementById('haircare-article');

dbtn.onclick = function(){
    $('')
    this.classList.add('active');
    tbtn.classList.remove('active');
    hsbtn.classList.remove('active');
    hcbtn.classList.remove('active');
    dContent.classList.remove('hidden');
    tContent.classList.add('hidden');
    hsContent.classList.add('hidden');
    hcContent.classList.add('hidden');
}
tbtn.onclick = function(){
    dbtn.classList.remove('active');
    this.classList.add('active');
    hsbtn.classList.remove('active');
    hcbtn.classList.remove('active');
    dContent.classList.add('hidden');
    tContent.classList.remove('hidden');
    hsContent.classList.add('hidden');
    hcContent.classList.add('hidden');
}
hsbtn.onclick = function(){
    dbtn.classList.remove('active');
    tbtn.classList.remove('active');
    this.classList.add('active');
    hcbtn.classList.remove('active');
    dContent.classList.add('hidden');
    tContent.classList.add('hidden');
    hsContent.classList.remove('hidden');
    hcContent.classList.add('hidden');
}
hcbtn.onclick = function(){
    dbtn.classList.remove('active');
    tbtn.classList.remove('active');
    hsbtn.classList.remove('active');
    this.classList.add('active');
    dContent.classList.add('hidden');
    tContent.classList.add('hidden');
    hsContent.classList.add('hidden');
    hcContent.classList.remove('hidden');
}
