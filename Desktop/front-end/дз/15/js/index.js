function palindrome(num) {
  let steps = 0;
  const reverseNum = (n) => parseInt(n.toString().split('').reverse().join(''));

  function findPalindrome(num) {
    steps++;
    const reversed = reverseNum(num);
    if (num === reversed) {
      return num;
    }
    return findPalindrome(num + reversed);
  }

  const result = findPalindrome(num);
  return { result, steps };
} 
console.log(palindrome(96 + 69))
