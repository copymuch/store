let bgcolor = document.querySelector('.promo_container');
let arrows = document.querySelectorAll('.p_arrow');
let title1 = document.querySelector('h1');
let img = document.querySelector('.img_js');
let counter = 1;
let imgSrc = img.getAttribute('src');
let pop = document.querySelector('.pop');
let items = document.querySelectorAll('.items_item');
let close = document.querySelector('.close');
let gl = document.querySelector('.global');
let body = document.querySelector('body');
pop.style.display = 'none';
bgcolor.style.backgroundColor = '#DCE5E2';
gl.style.display = 'none';
body.style.overflowY = 'visible';

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
	gl.style.display = 'none';
	body.style.overflowY = 'visible';
}

