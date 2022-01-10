import './style.css';
import zorfLetters from './images/ZORF-letters-8.png';
import zorfClay from './images/zorf-clay-8.png';
import NFTs from './images/NFTs-2.png';
import original from './images/original-white-4.png'

var nav = document.querySelector('#nav-content');

nav.innerHTML = 
    '<div class="justify">'
    + '<a href="index.html">'
    + '<img src="'
    + zorfLetters
    + '">'
    + '</a>'
    + '<div class="alignTop" style="margin-left: 5px;">'
    + '<a href="https://opensea.io/collection/drinkablenft"> <span class="highlight link"> OPEN SEA</span> </a> &#160;'

    + '<a href="road-map.html"> <span class="highlight link"> ROAD MAP</span> </a> &#160;'

    + '<a href="https://twitter.com/itszorf"> <span class="highlight link"> TWITTER </span> </a>'
   
    + '</div>'
    + '</div>'

    + '<div>'
    + '<a href="index.html">'

    + '<img src="'
    + NFTs
    + '" style="margin-left: 3px;">'
    + '<img src="'
    + original
    + '" style="margin-left: 5px;">'
    + '</a>'

    + '</div>';

const navContent = document.querySelector('#nav-content');
const navStyle = getComputedStyle(navContent);

let root = document.documentElement;

root.style.setProperty('--navHeight', navStyle.height + "px");

let valTest = getComputedStyle(root).getPropertyValue('--navHeight');

console.log( valTest );
