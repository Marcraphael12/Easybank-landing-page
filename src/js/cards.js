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

	// the author's name, the title, and the description
	const author = document.createElement('h3');
	author.innerText = `${article.author}`;

	const title = document.createElement('h2');
	title.innerText = `${article.title}`;

	const description = document.createElement('p');
	description.innerText = `${article.text}`;
	
	//we also need a block to keep the author name, the title, and the description
	const block = document.createElement('div');
	block.appendChild(author);
	block.appendChild(title);
	block.appendChild(description);

	// we create an li element to keep each article values and append them
	const artcl = document.createElement('li');
	artcl.setAttribute('class', `df-col just-spa-bet al-cen`)
	artcl.appendChild(image);
	artcl.appendChild(block);

	// Finally we append arcticle element into the global container
	cards.appendChild(artcl);
});