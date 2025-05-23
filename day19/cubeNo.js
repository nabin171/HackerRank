function cube(n) {
  let num = n;
  let rem;
  let output = 0;
  while (n != 0) {
    rem = n % 10;
    n = Math.floor(n / 10);
    console.log(rem);
    output = output + rem ** 3;
    console.log(output);
  }
  if (num === output) {
    console.log("cube");
  } else {
    console.log("not cube");
  }
}
let n = 153;
console.log(cube(n));
