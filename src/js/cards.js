// first we need our datas
import Datas from './data';

// now we need our global container previously created in htmml
const cards = document.querySelector('.articles-container');

// our articles are objects with differents values stored in an array, so we have to loop through
// let's use the map function to print out every data as a list for every article
export const card = Datas.map(article => {

	// we create an image and add as src the objetc image
	const image = document.createElement('img');
	image.setAttribute('src', `${article.image}`)

	// we create an li element to store each article values and append them
	const atcl = document.createElement('li');
	atcl.appendChild(image);
	cards.appendChild(atcl);
});