// articles datas
import Datas from './data';

const cards = document.querySelector('.articles-container');

export const card = Datas.map(article => {
	const image = document.createElement('img');
	image.setAttribute('src', `${article.image}`)
	
	const atcl = document.createElement('li');
	atcl.appendChild(image);
	cards.appendChild(atcl);
});