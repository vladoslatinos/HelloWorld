function getPalindrome(n) {
  let steps = 0;
  let current = n;
  while (!isPalindrome(current)) {
    steps++;
    current = current + Number(current.toString().split('').reverse().join(''));
  }
  return {result: current, steps};
}

function isPalindrome(n) {
  let str = n.toString();
  return str === str.split('').reverse().join('');
} 
console.log(getPalindrome(96))
