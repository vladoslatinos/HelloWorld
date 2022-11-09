var line = prompt('сколько строк');

var star = "";

for (var i = 0; i < line; i++) {
  star += "\n" + '*';
  for (var a = 1; a <= i; a++) {
    star += '**';
}
  
}
alert(star);



