import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import './js/app.js';
import './scss/main.scss';
import '/index.html';

SwiperCore.use([Navigation, Pagination]);

const swiperService = new Swiper('.swiper-container--service', {
	width: 250,
	spaceBetween: 10,
	centeredSlides: true,


	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar'	
	// },
	// breakpoints: {
	// 	1140: {
	// 		scrollbar: {
	// 			el: ''
	// 		},
	// 	}
	// }
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