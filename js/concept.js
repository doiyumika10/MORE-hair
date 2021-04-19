'use strict';

let btn = [];
let content = [];

for (let h = 1; h < 5; h++) {
  btn.push(document.getElementById(`btn${h}`));
  content.push(document.getElementById(`content${h}`));
}

let curUrl = location.href;
let lastUrl = parseInt(curUrl.slice(-1));

for (let i = 0; i < btn.length; i++) {
  btn[i].classList.remove('active');
  content[i].classList.add('hidden');
}


if (lastUrl === 1) {
  btn[0].classList.add('active');
  content[0].classList.remove('hidden');
} else if (lastUrl === 2) {
  btn[1].classList.add('active');
  content[1].classList.remove('hidden');
} else if (lastUrl === 3) {
  btn[2].classList.add('active');
  content[2].classList.remove('hidden');
} else if (lastUrl === 4) {
  btn[3].classList.add('active');
  content[3].classList.remove('hidden');
} else {
  btn[0].classList.add('active');
  content[0].classList.remove('hidden');
}

for(let h = 0; h < btn.length; h++){
btn[h].onclick = function (e) {
  e.preventDefault();
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove('active');
    content[i].classList.add('hidden');
  }
  btn[h].classList.add('active');
  content[h].classList.remove('hidden');
}
}

/*ナビゲーションドロワー動作*/

let nav = document.getElementById('phone-nav');

let icon = document.getElementById('trigger');

let main = document.querySelector('main');

let header = document.querySelector('header');

icon.onclick = function () {
  nav.classList.toggle('show');
  this.classList.toggle('active');
};

main.onclick = function () {
  if (nav.className.length === 4) {
    nav.classList.remove('show');
    icon.classList.remove('active');
  }
};

header.onclick = function () {
  if (nav.className.length === 4) {
    nav.classList.remove('show');
    icon.classList.remove('active');
  }
};
