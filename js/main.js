(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (document.documentElement.scrollTop > 50) {
      header.classList.add("header_active");
		} else {
			header.classList.remove("header_active");
		}
	};
}());

// Burger hundler

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav_close'); 
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
	})
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove("header__nav_active");
	})
}())