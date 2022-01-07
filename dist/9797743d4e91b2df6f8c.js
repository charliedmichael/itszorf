import './style.css';
import zorfLetters from './images/ZORF-letters-4.png';


var nav = document.querySelector('#nav-content');

nav.innerHTML = 
    '<div class="logo">'
    + '<a href="index.html">'
    + '<img src="'
    + zorfLetters
    + '">'
    + '</a>'
    + '</div>'

    + '<div>'
    + '<a href="https://opensea.io/collection/drinkablenft"> <span class="highlight"> OPEN SEA</span> </a> &#160;'

    + '<a href="road-map.html"> <span class="highlight"> ROAD MAP</span> </a> &#160;'

    + '<a href="https://twitter.com/itszorf"> <span class="highlight"> TWITTER </span> </a>'
    + '</div>';
