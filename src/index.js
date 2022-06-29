import _ from 'lodash';
import './style.css';

// background impoert
import backgroundMobile from './public/icons/bg-intro-mobile.svg';
import backgroundDesktop from './public/icons/bg-intro-desktop.svg';

// intro section's import
import mockups from './public/icons/image-mockups.png';
import mockups1 from './public/icons/image-mockups1.png';

// features section's imports
import logoWhhite from './public/icons/logowhite.svg';
import logo from './public/icons/logo.svg';
import burger from './public/icons/icon_hamburger.svg';
import close from './public/icons/icon-close.svg';
import api_icon from './public/icons/icon-api.svg';
import banking from './public/icons/icon-online.svg';
import onboarding from './public/icons/icon-onboarding.svg';
import budgeting from './public/icons/icon-budgeting.svg';

//footer's imports: social icons
import facebook from './public/icons/icon-facebook.svg';
import twitter from './public/icons/icon-twitter.svg';
import instagram from './public/icons/icon-instagram.svg';
import youtube from './public/icons/icon-youtube.svg';
import pinterest from './public/icons/icon-pinterest.svg';

// Background
const intro = document.querySelector('.intro');
intro.style.backgroundImage = `url(${backgroundMobile})`;

function changeBackground(x) {
  if (x.matches) { // If media query matches
    intro.style.backgroundImage = `url(${backgroundDesktop})`;
  } else {
    intro.style.backgroundImage = `url(${backgroundMobile})`;
  }
}

var size = window.matchMedia("(min-width: 700px)")
changeBackground(size) // Call listener function at run time
size.addListener(changeBackground) // Attach listener function on state changes

//mobile menu imports
import {Open_menu, Close_menu} from './js/mobile_menu.js';

const burger_open = document.querySelector('.burger-open');
const burger_close = document.querySelector('.burger-close');

Open_menu(burger_open);
Close_menu(burger_close);