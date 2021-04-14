'use strict';

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let content1 = document.getElementById('damageless-article');
let content2 = document.getElementById('treatment-article');
let content3 = document.getElementById('headspa-article');
let content4 = document.getElementById('haircare-article');

let curUrl = location.href;
let lastUrl = curUrl.slice(-1);

if(lastUrl == 1){
	btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    content1.classList.remove('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');
    content4.classList.add('hidden');
}else if(lastUrl == 2){
	btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    content1.classList.add('hidden');
    content2.classList.remove('hidden');
    content3.classList.add('hidden');
    content4.classList.add('hidden');
}else if(lastUrl == 3){
	btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
    content1.classList.add('hidden');
    content2.classList.add('hidden');
    content3.classList.remove('hidden');
    content4.classList.add('hidden');
}else if(lastUrl == 4){
	btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
    content1.classList.add('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');
    content4.classList.remove('hidden');
}else{
	btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    content1.classList.remove('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');
    content4.classList.add('hidden');
}

btn1.onclick = function(e){
	e.preventDefault();
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    content1.classList.remove('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');
    content4.classList.add('hidden');
}
btn2.onclick = function(e){
	e.preventDefault();
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    content1.classList.add('hidden');
    content2.classList.remove('hidden');
    content3.classList.add('hidden');
    content4.classList.add('hidden');
}
btn3.onclick = function(e){
	e.preventDefault();
	btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
    content1.classList.add('hidden');
    content2.classList.add('hidden');
    content3.classList.remove('hidden');
    content4.classList.add('hidden');
}
btn4.onclick = function(e){
	e.preventDefault();
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
    content1.classList.add('hidden');
    content2.classList.add('hidden');
    content3.classList.add('hidden');
    content4.classList.remove('hidden');
}

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
