const home = document.getElementById('home');
const system = document.getElementById('system');
const kal = document.getElementById('kal');
const karta = document.getElementById('karta');



const test = document.querySelector('.test');
const logo = document.querySelector('.logo');






window.onload = ()=>{
	const top = document.querySelector('.top');
	
home.onmouseover = function(){
	
		
		top.style.backgroundImage = 'url(image/ofice.jpg)';
		
	}
	system.onmouseover = function(){
		
		top.style.backgroundImage = 'url(image/splinker.png)';
		video.style.display = 'none'
		
	}

	kal.onmouseover = function(){
		top.style.backgroundImage = 'url(image/kal.jpg)';
		
							 

	}
	karta.onmouseover = function(){
		top.style.backgroundImage = 'url(image/karta.png)'; 
	
	}
	logo.onmouseover = function(){
let video = document.querySelector('.video');
		top.style.backgroundImage = 'url(image/ofice.jpg)';
			video.style.display = 'none'
		
	}
	logo.onclick = function(){
	
	}
}
