function makeAdder() { 
  let total = 0; 
  return function(x) { 
    total += x; 
    return total; 
  } 
} 
 
const sum = makeAdder(); 
console.log(sum(3)); 
console.log(sum(5)); 
console.log(sum(21)); 





function Counters() {
  let count = 0;
  let initial = 0;

  this.first = function (x) {
      initial = x;
      return count = x;
  };
  this.step = function (x) {
      return count += x;
  };
  this.initial = function () {
      return initial;
  }
}

let counters = new Counters();