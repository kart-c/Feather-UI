const backdrop = document.querySelector('.backdrop');
const navList = document.querySelector('.header-nav-list');
const mobileMenu = document.querySelector('.doc-menu');

const menuClickHandler = () => {
	const style = window.getComputedStyle(navList);
	const currentStyle = style.getPropertyValue('display');
	if (currentStyle === 'none') {
		navList.classList.add('active');
		navList.classList.add('mobile-nav');
		backdrop.classList.add('active');
	} else {
		navList.classList.remove('active');
		navList.classList.remove('mobile-nav');
		backdrop.classList.remove('active');
	}
};

const backdropClickHandler = () => {
	navList.classList.remove('active');
	navList.classList.remove('mobile-nav');
	backdrop.classList.remove('active');
};

mobileMenu.addEventListener('click', menuClickHandler);

backdrop.addEventListener('click', backdropClickHandler);
