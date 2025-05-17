function reverseNumber(i) {
  let output = 0;
  while (i != 0) {
    let rem = i % 10;
    i = Math.floor(i / 10);
    output = output * 10 + rem;
  }
  return output;
}
function beautifulDays(i, j, k) {
  let count = 0;
  // Write your code here
  let result;
  for (let a = i; a <= j; a++) {
    result = Math.abs(a - reverseNumber(a));

    if (result % k === 0) {
      count++;
    }
  }
  return count;
}
let i = 20;
let j = 23;
let k = 6;
console.log(beautifulDays(i, j, k));
