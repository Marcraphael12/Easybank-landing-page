const burger_open = document.querySelector('.burger-open');
const burger_close = document.querySelector('.burger-close');

const navigation = document.querySelector('.navigation');
const request_invite = document.querySelector('.request-invite');

const header = document.querySelector('header');
const head = document.querySelector('.head');

const Open_menu = (button) => {
	button.addEventListener('click', () => {
		burger_open.classList.add('dn');
		burger_close.classList.remove('dn');

		navigation.style.display = 'flex';

		request_invite.style.display = 'block';
		request_invite.style.marginTop = 'auto';

		header.classList.add('full-height');
		head.classList.add('cover');
	})
}

const Close_menu = (button) => {
	button.addEventListener('click', () => {
		burger_open.classList.remove('dn');
		burger_close.classList.add('dn');

		navigation.style.display = 'none';

		request_invite.style.display = 'none';
		request_invite.style.marginTop = '0';

		header.classList.remove('full-height');
		head.classList.remove('cover');
	})
}

export { Open_menu, Close_menu };