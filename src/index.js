import { createResponseComposition } from 'msw';
import './less/index.less'

// Your code goes here!
const navButton = document.querySelectorAll('nav a');
const h1LogoHeading = document.querySelector('h1');
const introImg = document.querySelector('.intro img');
const h2Intro = document.querySelectorAll('.intro h2');
const pIntro = document.querySelector('.intro p');
const pTextContent = document.querySelectorAll('.text-content p');
const destination = document.querySelectorAll('.destination p');
const h2ContentDestination = document.querySelector('h2');
const pContentDestination = document.querySelector('p');
const button = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');
const h4Header = document.querySelectorAll('h4');
console.log(h4Header);

for(let i=0; i<navButton.length; i++) {
    navButton[i].addEventListener('click', function(event) {
    navButton[i].style.color = "skyblue"
    console.log("Looks like clicking on the Nav button is working by turning them into a blue font");
    console.log(event);
})
}

h1LogoHeading.addEventListener('pointerover', function(evt) {
    h1LogoHeading.style["font-size"] = "8rem";
    console.log("The pointer is over the logoHeading")
    console.log(`event type: ${evt.type}`);
    console.log(`event trgt: ${evt.target.nodeName}`);
})
introImg.addEventListener('pointerover', function(evt) {
    introImg.style.border = "thick dashed black";
    console.log("We moved the pointer over the main image");
    console.log(`event type is ${evt}`);
})
for(let i=0; i<pTextContent.length; i++) {
    pTextContent[i].addEventListener('pointerover', function(evt) {
    pTextContent[i].style.backgroundColor = "yellow";
    console.log("The background color should change Orange for the p-tags");
    console.log(`event type: ${evt.type}`);
})
}

    for(let i = 0; i<h4Header.length; i++) {
        h4Header[i].addEventListener('click', function (evt) {
        h4Header[i].style.color = "orange";
        console.log("Clicking on h4 turns the font to orange");
        console.log(`event Type: ${evt.type}`);
    })
    }