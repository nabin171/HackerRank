function extraLongFactorials(n) {
  let factorial = (n) => {
    if (n === 0 || n === 1) {
      return BigInt(1);
    } else {
      return BigInt(n) * factorial(n - 1);
    }
  };
  // Write your code here
  console.log(BigInt(factorial(n)).toString());
}
let a = 25;
console.log(extraLongFactorials(a));
