//functions
const clearResult = function(){
document.querySelector('.result').innerHTML = '';
}

const clearSearch = function(){
document.querySelector('#user-input').value=''
}


const bigButton = function (){
    clearResult();
    let inputText = document.querySelector('#user-input').value
    let number = Number(inputText);
    document.querySelector('.result').innerText = biggify(number);
    clearSearch();
}

const nasaBtn = function (){
    clearResult();
    let inputText = document.querySelector('#user-input');
    let result = nasafy(Number(inputText.value))
    for(let i = 0; i<result.length; i++){
        let newLi = document.createElement('li')
        newLi.innerText = result[i]
        document.querySelector('.result').appendChild(newLi)
    }
    clearSearch();
}

const crazyBtn = function (){
clearResult();
let inputText = document.querySelector('#user-input').value
document.querySelector('.result').innerText = crazify(inputText);
clearSearch();
}

const reverseBtn = function (){
clearResult();
let inputText = document.querySelector('#user-input').value
document.querySelector('.result').innerText = reversify(inputText);
clearSearch();
}

const titleBtn = function (){
    clearResult();
    let inputText = document.querySelector('#user-input').value
document.querySelector('.result').innerText = titleify(inputText);
clearSearch();
}



//Event Selectors

document.querySelector('.biggify').addEventListener('click', bigButton);
document.querySelector('.nasafy').addEventListener('click', nasaBtn);
document.querySelector('.crazify').addEventListener('click', crazyBtn);
document.querySelector('.reversify').addEventListener('click', reverseBtn);
document.querySelector('.titleify').addEventListener('click', titleBtn);
