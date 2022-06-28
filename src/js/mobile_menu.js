const burger_open = document.querySelector('.burger-open');
const burger_close = document.querySelector('.burger-close');

const navigation = document.querySelector('.navigation');
const request_invite = document.querySelector('.request-invite');

const Open_menu = (button) => {
	button.addEventListener('click', () => {
		burger_open.classList.add('dn');
		burger_close.classList.remove('dn');
		navigation.style.display = 'flex';
	})
}

const Close_menu = (button) => {
	button.addEventListener('click', () => {
		burger_open.classList.remove('dn');
		burger_close.classList.add('dn');
		navigation.style.display = 'none';
	})
}

export { Open_menu, Close_menu };