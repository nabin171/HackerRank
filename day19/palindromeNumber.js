function palindromeNumber(n) {
  let num = n;
  let output = 0;
  let rem;
  while (n != 0) {
    rem = n % 10;
    n = Math.floor(n / 10);
    output = output * 10 + rem;
  }
  if (num === output) {
    return "Palindrome";
  } else {
    return "not Palindrome";
  }
}
let n = 121;
console.log(palindromeNumber(n));
