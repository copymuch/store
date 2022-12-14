let bgcolor = document.querySelector('.promo_container');
let arrows = document.querySelectorAll('.p_arrow');
let title1 = document.querySelector('h1');
let img = document.querySelector('.img_js');
let counter = 1;
let counter2 = 0;
let imgSrc = img.getAttribute('src');
let pop = document.querySelector('.pop');
let items = document.querySelectorAll('.items_item');
let close = document.querySelector('.close');
let gl = document.querySelector('.global');
let body = document.querySelector('body');
let burger = document.querySelector('.burger');
let header = document.querySelector('.header_nav_block');
let card = document.querySelector('.pop_card');
let message = document.querySelector('.message');
let shopCounter = document.querySelector('.shopCounter');

pop.style.display = 'none';
bgcolor.style.backgroundColor = '#DCE5E2';
gl.style.display = 'none';
body.style.overflowY = 'visible';
message.style.display = 'none';

arrows.forEach(function(arrow){
	arrow.onclick = function(){
	if (counter == 1) {
		bgcolor.style.backgroundColor = '#CEC4BF';
		title1.textContent = 'With this Macbook, everything possible.';
		img.setAttribute('src', 'img/pMacbook.png');
		bgcolor.classList.add('move');
		counter++;
	} else {
		bgcolor.style.backgroundColor = '#DCE5E2';
		img.setAttribute('src', 'img/pImg.png');
		counter--;
		title1.textContent = 'The new phones are here take a look.';
	}
}
})

items.forEach(function(item){
	item.onclick = function(){
		pop.style.display = 'block';
		gl.style.display = 'block';
		body.style.overflowY = 'hidden';
	}
})

close.onclick = function(){
	pop.style.display = 'none';
	body.style.overflowY = 'visible';
	gl.style.display = 'none';
	message.style.display = 'none';
}

burger.onclick = function(){
	burger.classList.toggle('burger_move');
}

card.onclick = function(){
	message.style.display = 'block';
	counter2++;
	shopCounter.textContent = counter2;
}