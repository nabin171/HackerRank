function productOfOddNo(n) {
  let product = 1;
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      product *= i;
    }
  }
  return product;
}
let n = 5;
console.log(productOfOddNo(n));
