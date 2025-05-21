function findDigits(n) {
  let count = 0;
  let tempN = n;

  while (tempN != 0) {
    let lastDigit = tempN % 10;
    tempN = Math.floor(tempN / 10);
    if (n % lastDigit == 0) {
      count++;
    }
  }
  return count;
}
let n = 124;
console.log(findDigits(n)); // prints "ok"
