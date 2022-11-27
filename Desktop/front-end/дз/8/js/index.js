function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array.at(i), i, array);
  }
}


function map(array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var res = callback(array.at(i), i, array);
    result.push(res);
  }
  return result;
}



        
function filter(array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var res = callback(array.at(i), i, array);

    if (res) {
      result.push(array.at(i));
    }
  }
  return result;
}


