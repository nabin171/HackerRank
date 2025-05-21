function simpleArraySum(ar) {
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < ar.length; i++) {
    leftSum += ar[i][i];
    rightSum += ar[i][ar.length - (i + 1)];
  }
  return Math.abs(leftSum - rightSum);
}
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 11],
];
console.log(simpleArraySum(array));
