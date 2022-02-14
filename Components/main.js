const leftToastBtn = document.querySelector('.left-toast-btn');
const rightToastBtn = document.querySelector('.right-toast-btn');
const leftToast = document.querySelector('.toast.left');
const rightToast = document.querySelector('.toast.right');
const cancelToasts = Array.from(document.querySelectorAll('.toast-btn-container>i'));

const toastHandler = (toast) => {
	if (toast === 'left') {
		leftToast.classList.remove('hide');
		setTimeout(() => leftToast.classList.add('hide'), 5000);
	} else if (toast === 'right') {
		rightToast.classList.remove('hide');
		setTimeout(() => rightToast.classList.add('hide'), 5000);
	}
};

const cancelToastHandler = (e) => {
	e.target.offsetParent.classList.add('hide');
};

leftToastBtn.addEventListener('click', () => toastHandler('left'));
rightToastBtn.addEventListener('click', () => toastHandler('right'));

cancelToasts.map((cancelToast) => cancelToast.addEventListener('click', cancelToastHandler));
