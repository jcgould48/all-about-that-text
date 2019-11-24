//functions

// const inputText = document.querySelector('#user-input').value   

const bigButton = function (){
let inputText = document.querySelector('#user-input').value
let number = Number(inputText);
document.querySelector('.result').innerText = biggify(number);
}

const nasaBtn = function (){
let inputText = document.querySelector('#user-input').value
let number = Number(inputText);
document.querySelector('.result').innerText = nasafy(number);
}

const crazyBtn = function (){
let inputText = document.querySelector('#user-input').value

document.querySelector('.result').innerText = crazify(inputText);
}

const reverseBtn = function (){
let inputText = document.querySelector('#user-input').value

document.querySelector('.result').innerText = reversify(inputText);
}

const titleBtn = function (){
let inputText = document.querySelector('#user-input').value

document.querySelector('.result').innerText = titleify(inputText);
}






//Event Selectors

document.querySelector('.biggify').addEventListener('click', bigButton);
document.querySelector('.nasafy').addEventListener('click', nasaBtn);
document.querySelector('.crazify').addEventListener('click', crazyBtn);
document.querySelector('.reversify').addEventListener('click', reverseBtn);
document.querySelector('.titleify').addEventListener('click', titleBtn);
