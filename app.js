const backdrop = document.querySelector('.backdrop');
const navList = document.querySelector('.header-nav-list');
const aside = document.querySelector('aside');
const mobileMenu = document.querySelector('.doc-menu');

const menuClickHandler = () => {
	const style = window.getComputedStyle(navList);
	const currentStyle = style.getPropertyValue('display');
	if (currentStyle === 'none') {
		navList.classList.add('active');
		navList.classList.add('mobile-nav');
		aside ? aside.classList.add('mobile-nav') : null;

		backdrop.classList.add('active');
	} else {
		navList.classList.remove('active');
		navList.classList.remove('mobile-nav');
		aside.classList.remove('mobile-nav');
		backdrop.classList.remove('active');
	}
};

const backdropClickHandler = () => {
	navList.classList.remove('active');
	navList.classList.remove('mobile-nav');
	aside ? aside.classList.remove('mobile-nav') : null;
	backdrop.classList.remove('active');
};

mobileMenu.addEventListener('click', menuClickHandler);

backdrop.addEventListener('click', backdropClickHandler);
