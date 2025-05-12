function pageCount(n, p) {
  // Write your code here
  let front = Math.ceil((p - 1) / 2);
  let back;
  if (n % 2 != 0) {
    back = Math.floor((n - p) / 2);
  }
  if (n % 2 == 0) {
    back = Math.ceil((n - p) / 2);
  }
  return Math.min(front, back);
}
let n = 20;
let p = 11;
console.log(pageCount(n, p));
