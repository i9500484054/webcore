import Swiper from 'swiper';
import './js/app.js';
import './scss/main.scss';
import '/index.html';


const swiperService = new Swiper('.swiper-container--service', {
	// Optional parameters
	// loop: true,
	width: 250,
	spaceBetween: 10,
	centeredSlides: true,


	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperBrands = new Swiper('.swiper-container--brands', {
	// Optional parameters
	// loop: true,
	width: 240,
	spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperType = new Swiper('.swiper-container--type', {
	// Optional parameters
	// loop: true,
	width: 240,
	spaceBetween: 10,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

const swiperPrice = new Swiper('.swiper-container--price', {
	// Optional parameters
	// loop: true,
	width: 260,
	spaceBetween: 40,
	centeredSlides: true,


	// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});