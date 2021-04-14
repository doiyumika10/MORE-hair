'use strict';


let grandmenu = [
	[
	{menu:'LADY’S DESIGN CUT レディースデザインカット', price: 4200},
	{menu:'MEN’S DESIGN CUT メンズデザインカット', price: 3500},
	{menu:'FRONT CUT 前髪カット', price: 1000},
	{menu:'EYE BLOW CUT 眉カット ＊単品予約は不可＊', price: 1000}
	],
 	[
	{menu:'COLOR カラー', price: 8400},
	{menu:'DAMAGE LESS COLOR ダメージレスカラー', price: 10400},
	{menu:'DESIGN COLOR デザインカラー', price: 10600},
	{menu:'DAMAGE LESS DESIGN COLOR ダメージレスデザインカラー', price: 12600}
 	],
	[
	{menu:'PERM  パーマ', price: 9900},
	{menu:'DAMMAGE LESS PERM  ダメージレス パーマ', price: 11900},
	{menu:'DIGITAL PERM  デジタルパーマ', price: 10900},
	{menu:'DAMAGE LESS DESIGN COLOR ダメージレスデザインカラー', price: 1000}
	],
	[
	{menu:'TREATMENT  トリートメント', price: 3900},
	{menu:'TREATMENT【9 STEP】', price: 5900},
	{menu:'TREATMENT【11 STEP】＊ホームケア付き＊', price: 8900},
	{menu:'TREATMENT【19 STEP】＊ホームケア付き＊', price: 11000}
	],
	[
	{menu:'AGING CARE SPA  エイジングケアスパ', price: 4500},
	{menu:'STRESS CARE SPA  ストレスケアスパ', price: 4500},
	{menu:'CREME SPA  クリームスパ', price: 3500},
	{menu:'BED CREME SPA  ベッドクリームスパ', price: 4000}
	]
];

const tax = 1.1;


for(let i = 0; i < grandmenu.length; i++){
	let tr = '';
	let array = grandmenu[i];
	for(let i = 0; i < array.length; i++){
		array[i].addTax = Math.floor(array[i].price * tax);
		array[i].price = array[i].price.toLocaleString("jp",{style:"currency",currency:"JPY"});
		array[i].addTax = `(税込${array[i].addTax.toLocaleString("jp",{style:"currency",currency:"JPY"})})`;
		tr = tr + `<tr><td class="menu">${array[i].menu}</td><td class="price">${array[i].price} ${array[i].addTax}</td></tr>`;
	};
	document.getElementById('menu'+(i+1)).insertAdjacentHTML('beforeend', tr);
};

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
