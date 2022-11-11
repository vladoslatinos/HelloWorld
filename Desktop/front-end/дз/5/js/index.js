var string = prompt("введите что то");
var number = Number.parseInt(prompt("введите число"));
var padSymbol = prompt("введите символ");
var padSide = Number.parseInt(prompt("с кааой стороны 0-справа  1-слева"));

function padString(string, number, padSymbol, isSide) {
  for(let i = 0; i < arguments.length - 1; i++) {
    if(!arguments[i]) {
        return "одно из значений не правильное :)"
    }
}

  if (string.length >= number) {
    return string
  } 
  var isNumber = number -string.length;
  var extraString = "";
  for (var i = 0; i < isNumber; i++) {
    extraString += padSymbol;
  }
  if (isSide) {
   return extraString + string;
  }else {
    return string + extraString;
  }
 
}
alert(padString(string, number, padSymbol, !!padSide));


 