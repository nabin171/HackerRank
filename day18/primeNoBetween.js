function primeNumbers(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
let n = 11;
console.log(primeNumbers(n));
let array = [];
for (let i = 1; i <= n; i++) {
  if (primeNumbers(i)) {
    array.push(i);
  }
}
console.log(array);
