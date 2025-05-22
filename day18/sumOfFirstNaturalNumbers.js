function sumOfFirstNaturalNumbers(n) {
  let sum = 0;
  //n=5  ; 1+2+3+4+5=15
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
let n = 5;
console.log(sumOfFirstNaturalNumbers(n));
