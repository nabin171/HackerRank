function squareOfEveryDigits(n) {
  while (n >= 10) {
    let output = 0;
    while (n != 0) {
      rem = n % 10;
      n = Math.floor(n / 10);
      output = output + rem ** 2;
    }
    n = output;
  }
  return n;
}
let n = 45;
console.log(squareOfEveryDigits(n));
