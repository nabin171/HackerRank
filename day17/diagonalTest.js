function diagonalDifference(arr) {
  let leftDifference = 0;
  let rightDifference = 0;
  for (let i = 0; i < arr.length; i++) {
    leftDifference = arr[i][i];
    rightDifference = arr[i][arr.length - (i + 1)];
  }
  return Math.abs(leftDifference - rightDifference);
}
let arr = [
  [1, 2, 1],
  [20, 2, 34],
  [4, 7, 8],
];
console.log(diagonalDifference(arr));
