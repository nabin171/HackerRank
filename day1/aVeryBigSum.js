function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
let array = [1, 2, 3, 4];
console.log(aVeryBigSum(array));
