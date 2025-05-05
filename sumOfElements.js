function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
}
let array = [2, 3, 44];
console.log(simpleArraySum(array));
