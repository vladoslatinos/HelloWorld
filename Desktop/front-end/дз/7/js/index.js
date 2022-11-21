var mul = [1,2,3,4,5,6,7,8,9];

function multiplication(mul){
  var result = [];
  for (var i = 0; i < mul.length; i++){
    var res = [];
    for (var j = 0; j < mul.length; j++){
      res.push((i + 1) * (j + 1 ))
    }
    result.push(res);
  }
  return result
}
console.log(multiplication(mul));