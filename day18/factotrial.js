function factorial(n) {
  let fact = 1;
  //factorial of 5 = 5*4*3*2*1;
  for (let i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}
let n = 5;
console.log(factorial(n));
