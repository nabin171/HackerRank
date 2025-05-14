let m = [
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
];
function formingMagicSquare(s) {
  // Write your code here
  let min = Infinity;
  for (let k = 0; k < m.length; k++) {
    let cost = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        cost = cost + Math.abs(s[i][j] - m[k][i][j]);
      }
    }

    if (min > cost) {
      min = cost;
    }
  }
  return min;
}
let s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];
console.log(formingMagicSquare(s));
