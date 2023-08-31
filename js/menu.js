const menuIcon = document.getElementById('menuIcon');
console.log(menuIcon);
const menu = document.getElementsByClassName('menu');

menuIcon.addEventListener('click', function(){
	console.log('menuIconをクリックした');
	let menu = document.getElementsByClassName('menu');
	menu[0].style.right = '0';
});

let close = document.getElementsByClassName('menu');
close[0].addEventListener('click', function(){
	console.log('closeをクリックした');
	menu[0].style.right = '-100vw';
	
});