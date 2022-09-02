let bgcolor = document.querySelector('.promo_container');
let arrowR = document.querySelector('.arrow_right');
let arrowL = document.querySelector('.arrow_left');
let title1 = document.querySelector('h1');
let img = document.querySelector('.img_js');
let counter = 1;
let imgSrc = img.getAttribute('src');
let pop = document.querySelector('.pop');
let items = document.querySelectorAll('.items_item');
let close = document.querySelector('.close');
pop.style.display = 'none';
bgcolor.style.backgroundColor = '#DCE5E2';
arrowR.onclick = function(){
	if (counter == 1) {
		bgcolor.style.backgroundColor = '#CEC4BF';
		title1.textContent = 'With this Macbook, everything possible.';
		img.setAttribute('src', 'img/pMacbook.png');
		bgcolor.classList.add('move');
		img.classList.add('fade')
		counter++;
	} else {
		bgcolor.style.backgroundColor = '#DCE5E2';
		img.setAttribute('src', 'img/pImg.png');
		counter--;
		title1.textContent = 'The new phones are here take a look.';
	}
}

arrowL.onclick = function(){
	if (counter == 1) {
		bgcolor.style.backgroundColor = '#CEC4BF';
		title1.textContent = 'With this Macbook, everything possible.';
		img.setAttribute('src', 'img/pMacbook.png');
		counter++;
	} else {
		bgcolor.style.backgroundColor = '#DCE5E2';
		img.setAttribute('src', 'img/pImg.png');
		counter--;
		title1.textContent = 'The new phones are here take a look.';
	}
}

items.forEach(function(item){
	item.onclick = function(){
		pop.style.display = 'block';
	}
})

close.onclick = function(){
	pop.style.display = 'none';
}

