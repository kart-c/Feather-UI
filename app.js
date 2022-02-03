const backdrop = document.querySelector('.backdrop');
const navList = document.querySelector('.header-nav-list');
const mobileMenu = document.querySelector('.doc-menu');

const menuClickHandler = () => {
	navList.style.display = 'block';
	navList.parentElement.style.display = 'block';
	navList.classList.add('mobile-nav');
	backdrop.classList.add('active');
};

const backdropClickHandler = () => {
	navList.style.display = 'none';
	navList.parentElement.style.display = 'none';
	navList.classList.remove('mobile-nav');
	backdrop.classList.remove('active');
};

backdrop.addEventListener('click', backdropClickHandler);

mobileMenu.addEventListener('click', menuClickHandler);
