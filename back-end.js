const biggify = function(num) {
    return num + 9000;
  }
  
  const nasafy = function(num) {
    const arr = [];
    let currentNum = num
    while (currentNum > 0){
  arr.push(currentNum);
  currentNum --
    }
    arr.push("Blast off!");
    return arr;
  }
  
  const reversify = function(str) {
    return str.split('').reverse().join('');
    }
  
  
  const titleify = function(str) {
    const arr = [];
    for (const word of str.split(' ')) {
      arr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  
    return arr.join(' ');
  }
  
  
  const crazify = function(str) {
    let newStr = '';
    let i = 0;
    
    for (const letter of str) {
      if (letter === ' ') {
        newStr += ' ';
      } else {
        newStr += i % 2 === 1 ? letter.toUpperCase() : letter.toLowerCase();
       i++;
      }
    }
  
    return newStr;
  }
  
  
  module.exports = {
    biggify,
    nasafy,
    reversify,
    titleify,
    crazify,
  }