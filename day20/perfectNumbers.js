//perfect number i.e 1+2+3=6 (6 is not included)
function perfectNumbers(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum = sum + i;
    }
  }

  if (n === sum) {
    console.log("perfect no");
  } else {
    console.log("Not perfect");
  }
}
let n = 8;
console.log(perfectNumbers(n));
