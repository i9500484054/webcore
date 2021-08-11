document.addEventListener('DOMContentLoaded', function() {
	//Табы
	document.querySelectorAll('.service-list__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
	
			document.querySelectorAll('.service-item').forEach(function(tabContent) {
				tabContent.classList.remove('services-item--active')
			})
	
			document.querySelectorAll('.service-list__link').forEach(function(tabContent) {
				tabContent.classList.remove('service-list__link--active')
			})
	
			document.querySelector(`[data-path="${path}"]`).classList.add('service-list__link--active')
			document.querySelector(`[data-target="${path}"]`).classList.add('services-item--active')
			})
		})

	// Кнопки Попап
	document.querySelectorAll('.button-js-open').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			let path = event.currentTarget.dataset.path
			
			document.querySelectorAll('.blok-js-active').forEach(function(tabContent) {
				tabContent.classList.remove('btn--active','btn--menu')
			})
	
			let test = document.querySelector(`[data-target="${path}"]`).getAttribute('data-target')
			
			if (test === 'six-btn') {
				let activeAsaid =	document.querySelector(`[data-target="${path}"]`)
				activeAsaid.classList.add('btn--menu')
			} else {
				let activePopup =	document.querySelector(`[data-target="${path}"]`)
				activePopup.classList.add('btn--active')
			}
			

		})
		document.querySelectorAll('.cps-js-bg').forEach(function(closeElem) {
			closeElem.addEventListener('click', function() {
				document.querySelectorAll('.blok-js-active').forEach(function(tabContent) {
					tabContent.classList.remove('btn--active','btn--menu')
				})
			})
		})
	})


	// Кнопки Показать все
	document.querySelectorAll('.service-brands__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function(event) {
			let path = event.currentTarget.dataset.path
				
			let test = document.querySelector(`[data-target="${path}"]`).getAttribute('data-target')
			
			if (test === 'three-allopen') {
				document.querySelector(`[data-target="${path}"]`).classList.toggle('all-open-content--active')
				tabsBtn.classList.toggle('qqoo')
			} else {
				document.querySelector(`[data-target="${path}"]`).classList.toggle('all-open--active')
				tabsBtn.classList.toggle('qqoo')
			}
			})
		})

	// Ссылки Показать все
	document.querySelectorAll('.nav-menu__link').forEach(function(tabsBtn) {
		tabsBtn.addEventListener('click', function() {
			
			document.querySelectorAll('.nav-menu__link').forEach(function(tabContent) {
				tabContent.classList.remove('nav-menu__link--active')
			})

			tabsBtn.classList.add('nav-menu__link--active')
			})
		})
	
})