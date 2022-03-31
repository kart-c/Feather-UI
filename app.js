//  JS for backdrop and mobile menu
const backdrop = document.querySelector('.backdrop');
const navList = document.querySelector('.header-nav-list');
const aside = document.querySelector('aside');
const mobileMenu = document.querySelector('.doc-menu');
const rangeInput = document.querySelector('.range-input');
const rangeValue = document.querySelector('.range-value');

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

// JS for opening Modal

const simpleModal = document.querySelector('.modal');
const modalExampleBtn = document.querySelector('.modal-example > button');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCloseBtn = document.querySelector('.modal-header > i');
const actionModal = document.querySelectorAll('.modal')[1];
const modalOpener = document.querySelectorAll('.modal-example > button')[1];
const actionModalBackdrop = document.querySelector('.modal-backdrop.action-modal');
const actionModalCloseBtn = document.querySelector('.action-modal .modal-header > i');

const simpleModalHandler = () => {
	modalBackdrop.classList.remove('modal-hide');
	simpleModal.classList.remove('modal-hide');
};

const closeModal = () => {
	simpleModal.classList.add('modal-hide');
	modalBackdrop.classList.add('modal-hide');
};

modalExampleBtn ? modalExampleBtn.addEventListener('click', simpleModalHandler) : null;

modalBackdrop ? modalBackdrop.addEventListener('click', closeModal) : null;

modalCloseBtn ? modalCloseBtn.addEventListener('click', closeModal) : null;

const actionModalHandler = () => {
	actionModalBackdrop.classList.remove('modal-hide');
	actionModal.classList.remove('modal-hide');
};

const closeActionModal = () => {
	actionModalBackdrop.classList.add('modal-hide');
	actionModal.classList.add('modal-hide');
};

modalOpener ? modalOpener.addEventListener('click', actionModalHandler) : null;

actionModalBackdrop ? actionModalBackdrop.addEventListener('click', closeActionModal) : null;

actionModalCloseBtn ? actionModalCloseBtn.addEventListener('click', closeActionModal) : null;

// Range slider js

const sliderChangeHandler = (e) => {
	rangeValue.innerText = e.target.value;
};

rangeInput ? rangeInput.addEventListener('input', sliderChangeHandler) : null;
