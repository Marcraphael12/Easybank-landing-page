# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Design preview for the EasyBank Landing Page coding challenge](./design/illustration.png)

### Links

- Solution URL: [see solution](https://www.frontendmentor.io/solutions/responsive-landing-page-using-webpack-and-scss-mixins-khp0AoiiAm)
- Live Site URL: [see live](https://easy-bank-landing-page-marc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS variables
- SCSS mixins
- Flexbox
- Mobile-first workflow
- Webpack configuration
- JavaScript DOM manipulation
- JavaScript event listeners
- JSON data file

### What I learned

To day's challenge was a great was to learn how to dynamically output a content with DOM manipulation, work with webpack professionaly. Also, I learned how to use scss Mixins to create media queries.

```html
<h1>Some HTML code I'm proud of</h1>
```
```scss
@mixin devices ($breakpoint) { //the name of the mixin is devices
  
	@if $breakpoint == 420 {    
		@media only screen and (min-width: 420px) {
			@content;
		}
	}

	@if $breakpoint == 600 {
		@media only screen and (min-width: 600px) {
			@content;
		}
	}

	@if $breakpoint == 700 {
		@media only screen and (min-width: 700px) {
			@content;
		}
	}
}

```

### Continued development
- JS Mouse events
- JS Objects
- JS JSON data file
- JS DOM manipulation
- SCSS variables & functions
- SCSS Mixins

## Author
- Frontend Mentor - [@Marcraphael12](https://www.frontendmentor.io/profile/Marcraphael12)