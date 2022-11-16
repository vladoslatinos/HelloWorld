/*var firstNumber = Number.parseInt(prompt("введите число"));
var secondNumber = Number.parseInt(prompt("введите число"));
var mathsSymbol = prompt("введите maths символ");
var padSymbol = prompt("введите символ =");
var result;

function getResult(firstNumber, secondNumber, mathsSymbol, padsSymbol, isResult) {
  
if (padsSymbol === '=') {
  if (mathsSymbol === '+') {
  return isResult = firstNumber + secondNumber;
  } else if (mathsSymbol === '-') {
    return isResult = firstNumber - secondNumber;
  } else if (mathsSymbol === '*') {
    return isResult = firstNumber * secondNumber;
  } else if (mathsSymbol === '/') {
    return isResult = firstNumber / secondNumber;
  }
}

  
 
}
alert(getResult(firstNumber, secondNumber, mathsSymbol, padSymbol, result));*/




var line = prompt("введите строку");
var symbol = prompt("символ");
var whichOne = Number.parseInt(prompt("c какого символа начать поиск"));




function isCharPresent(isLine, isSymbol, isWhichOne) {
   
  for (var a = isWhichOne; a < isLine.length; a++) {
    if (isLine[a] === isSymbol) {
      return true
    } 

  }
    
  return false
    
   
  }
  alert(isCharPresent(line, symbol, whichOne));
  

  
var lines = prompt("введите строку");
var symbols = prompt("символ");
var whichOnes = Number.parseInt(prompt("c какого символа начать поиск"));




function charIndexOf(isLine, isSymbol, isWhichOne) {
   
  for (var a = isWhichOne; a < isLine.length; a++) {
    if (isLine[a] === isSymbol) {
      return a 
    } 

  }
    
  return -1
    
   
  }
  alert(charIndexOf(lines, symbols, whichOnes));