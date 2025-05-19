function squares(a, b) {
  // Write your code here
  let count = 0;
  let a1 = Math.ceil(Math.sqrt(a));
  let b1 = Math.floor(Math.sqrt(b));

  return b1 - a1 + 1;
}

let a = 5;
let b = 50;
console.log(squares(a, b));
