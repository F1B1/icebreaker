import { isMobile } from "./functions.js";
import Swiper from "swiper";

window.onload = function(){
	document.addEventListener("click", documentActions);
	
	function documentActions (e){
		const targetElement = e.target
		function _removeClasses(el, class_name) {
			for (var i = 0; i < el.length; i++) {
				el[i].classList.remove(class_name);
			}
		}

		if(innerWidth >768 && isMobile.any()){
			if(targetElement.classList.contains('bottom-header__arrow')){
				targetElement.closest('li').classList.toggle('_hover')
			}
			if(!targetElement.closest('li') && document.querySelectorAll('li._hover').length > 0){
				_removeClasses(document.querySelectorAll('li._hover'), '_hover')
			}

		}
		if(targetElement.classList.contains('top-header__btn')){
			document.querySelector('.top-header__search').classList.toggle('_active')
		}


	}

//====Tab===============================
const tabsContent  = document.querySelectorAll('.cnt-tab');
const tabsTitle = document.querySelectorAll('.path-year');

for(let item of tabsTitle){
	item.addEventListener("click", function(e) {
		tabsTitle.forEach(el => el.classList.remove('active-tab'))
		for (let el of tabsContent) {
			el.classList.add('hidden-tab')
		}
		const content = document.querySelector('#' + item.dataset.tab)
		content.classList.remove('hidden-tab')
		item.classList.add('active-tab')
	});
}



const tabMap =document.querySelectorAll('.contact__map');
const tabButton =document.querySelectorAll('.contact__button');

for (const map of tabButton) {
	map.addEventListener("click", function(e) {
		tabButton.forEach(element => element.classList.remove('active-btn'))
		for(let elem of tabMap){
			elem.classList.add('hidden-tab')
		}
		const cnt = document.querySelector('#'+ map.dataset.tab)
		cnt.classList.remove('hidden-tab')
		map.classList.add('active-btn')
	});
}
//======Burger======================================
	const iconMenu = document.querySelector('.icon-menu');
	const bodyMenu = document.querySelector('.bottom-header__list');

	if(innerWidth < 768 && isMobile.any()){
		iconMenu.addEventListener("click", function(e) {
			iconMenu.classList.toggle('_active')
			bodyMenu.classList.toggle('_active')
		});
	}


//======Swiper===========================================
	const swiperImg = new Swiper('.main-slider__img', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		speed: 2000,
		preloadImages: false,
		parallax: true,
	 });

	 const swiperText = new Swiper('.main-slider__text', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		speed: 2000,
		preloadImages: false,
		parallax: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	 });

	 swiperImg.controller.control = swiperText
	 swiperText.controller.control = swiperImg

	 const swiperProject = new Swiper('.project__content', {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 132,
			autoHeight: true,
			watchOverflow: true,
			speed: 800,
			loop: true,
			loopAdditionalSlides:3,
			preloadImages: false,
			parallax: true,
			navigation: {
				nextEl: '.project-button-next',
				prevEl: '.project-button-prev',
			},
	 });
	 
	 const swiperQuality = new Swiper('.quality__body', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 2000,
		preloadImages: false,
		parallax: true,
		navigation: {
		  nextEl: '.quality-button-next',
		  prevEl: '.quality-button-prev',
		},
	 });

}