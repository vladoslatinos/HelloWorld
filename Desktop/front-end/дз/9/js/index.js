function cloneObj(obj) {
  const object = {};
  for (let prop in obj) {
    object[prop] = obj[prop]
  }
  return object;
}


function getValues(obj) {
  var arr = [];
  for (key in obj) {
    arr.push(obj[key])
  }
  return arr;
}



        
function getKeys(obj) {
  var arr = [];
  for (key in obj) {
    arr.push(key)

  }
  return arr;
}



function getEntries(obj) {
  var arr = [];
  for (key in obj) {
   var newArr = [];
    for (var i = 0; i < 2; i++) {
      i == 0 ? newArr[i] = key : newArr[i] = obj[key]; 
     }
      arr.push(newArr);
  }
  return arr;
}


console.log(getEntries([1,2,3,4,5]));