function diagonalDifference(arr) {
  let d1 = 0;
  let d2 = 0;

  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i];
    d2 += arr[i][arr.length - (i + 1)];
  }
  return Math.abs(d1 - d2);
}
let array1 = [
  [1, 2, 3],
  [23, 43, 83],
  [12, 5, 7],
];
console.log(diagonalDifference(array1));
// console.log(array1[1][2]);
