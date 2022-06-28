const burger_open = document.querySelector('.burger-open');
const burger_close = document.querySelector('.burger-close');

const navigation = document.querySelector('.navigation');
const request_invite = document.querySelector('.request-invite');

const Open_menu = (button) => {
	button.addEventListener('click', () => {
		burger_open.classList.toggle('dn');
		burger_close.classList.toggle('df-row');
	})
}