function countingDigits(num) {
  let count = 0;
  while (num % 10 === 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
let num = 5000000;
console.log(countingDigits(num));
