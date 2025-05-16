function utopianTree(n) {
  // Write your code here
  let height = 1;
  for (let period = 1; period <= n; period++) {
    if (period % 2 == 0) {
      height = height + 1;
    } else {
      height = height * 2;
    }
  }
  return height;
}
let n = 5;
console.log(utopianTree(n));
