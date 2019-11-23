//functions

// const inputText = document.querySelector('#user-input').value   

let bigButton = function (){
let inputText = document.querySelector('#user-input').value
let number = Number(inputText);
document.querySelector('.result').innerText = biggify(number);
}






//Event Selectors

document.querySelector('.biggify').addEventListener('click', bigButton);
  