import { getResistorOhms } from './resistor.js';

let answer = document.querySelector('.answer');
let lookUp = document.querySelector('.ceramic');

let band1 = document.querySelector('#color0');
let band2 = document.querySelector('#color1');
let multi = document.querySelector('#color2');
let toler = document.querySelector('#color3');

let color1 = 'red';
let color2 = 'green';
let multiplier = 'violet';
let tolerance = 'gold';

for (let i = 0; i < band1.childNodes.length; i++) {
    band1.childNodes[i].addEventListener('mousedown', (e) => {
        //console.log(e.target.classList[1]);

        color1 = e.target.classList[1];
        updateAnswer();
    });
}

for (let i = 0; i < band2.childNodes.length; i++) {
    band2.childNodes[i].addEventListener('mousedown', (e) => {
        //console.log(e.target.classList[1]);

        color2 = e.target.classList[1];
        updateAnswer();
    });
}

for (let i = 0; i < multi.childNodes.length; i++) {
    multi.childNodes[i].addEventListener('mousedown', (e) => {
        //console.log(e.target.classList[1]);

        multiplier = e.target.classList[1];
        updateAnswer();
    });
}

for (let i = 0; i < toler.childNodes.length; i++) {
    toler.childNodes[i].addEventListener('mousedown', (e) => {
        //console.log(e.target.classList[1]);

        lookUp.childNodes[7].classList.remove(tolerance);
        tolerance = e.target.classList[1];
        updateAnswer();
    });
}


updateAnswer();

function updateAnswer() {

    //update shown values
    let resistor = getResistorOhms({ color1: color1, color2: color2, multiplier: multiplier, tolerance: tolerance });
    answer.innerHTML = resistor;

    //Update colors
    lookUp.childNodes[1].classList = color1;
    lookUp.childNodes[3].classList = color2;
    lookUp.childNodes[5].classList = multiplier;
    lookUp.childNodes[7].classList.add(tolerance);
}