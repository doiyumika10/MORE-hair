'use strict';
if (window.matchMedia('(max-width: 480px)').matches) {
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
  spaceBetween: 50,
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
} else if (window.matchMedia('(min-width: 480px)').matches) {
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
  loopedSlides: 6,
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
};


//$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
//});

/*ナビゲーションドロワー動作*/

let nav = document.getElementById('phone-nav');

let icon = document.getElementById('trigger');

let main = document.querySelector('main');

let header = document.querySelector('header');

icon.onclick = function () {
    nav.classList.toggle('show');
//    icon.classList.toggle('show');
    this.classList.toggle('active');
};

main.onclick = function () {
    if (nav.className.length === 4) {
        nav.classList.remove('show');
//        icon.classList.remove('show');
        icon.classList.remove('active');
    }
};

header.onclick = function () {
    if (nav.className.length === 4) {
        nav.classList.remove('show');
//        icon.classList.remove('show');
        icon.classList.remove('active');
    }
};
