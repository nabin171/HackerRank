function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let n = (x2 - x1) / (v1 - v2);
  if (n === Infinity) {
    return "NO";
  }
  if (n >= 0 && n === Math.floor(n)) {
    return "YES";
  } else {
    return "NO";
  }
}
let x1 = 1,
  v1 = 5;
let x2 = 2,
  v2 = 10;
console.log(kangaroo(x1, v1, x2, v2));
