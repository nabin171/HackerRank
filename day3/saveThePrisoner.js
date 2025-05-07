function saveThePrisoner(n, m, s) {
  // Write your code here
  let output = s - 1;
  for (let i = 0; i < m; i++) {
    output++;
    if (output > n) {
      output = 1;
    }
  }
  return output;
}

let n = 4;
let m = 5;
let s = 2;

console.log(saveThePrisoner(n, m, s));
