import { createResponseComposition } from 'msw';
import './less/index.less'

// Your code goes here!
const firstNavButton = document.querySelector('nav a');
const h1LogoHeading = document.querySelector('h1');
const introImg = document.querySelector('.intro img');
const h2Intro = document.querySelector('.intro h2');
const pIntro = document.querySelector('.intro p');
const pTextContent = document.querySelector('.text-content p');
const destination = document.querySelectorAll('.destination p');
const h2ContentDestination = document.querySelector('h2');
const pContentDestination = document.querySelector('p');
const button = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');
const h4Header = document.querySelectorAll('h4');

firstNavButton.addEventListener('click', function(event) {
    firstNavButton.style.color = "skyblue"
    console.log("Looks like clicking on the Nav is working");
    console.log(event);
})

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
pTextContent.addEventListener('pointerover', function(evt) {
    // for(let i=0; i<pTextContent.length; i++) {
    pTextContent.style.backgroundColor = "orange";
    console.log("The background color should change Orange for the p-tags");
    console.log(`event type: ${evt.type}`);
})
h4Header.addEventListener('click', function (evt) {
    for(let i = 0; i<h4Header.length; i++) {
    h4Header[i].style.color = "orange"
    console.log("Clicking on h4 turns the font to orange");
    console.log(`event Type: ${evt.type}`);
    }
})
