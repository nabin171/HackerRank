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




// function saveThePrisoner(n, m, s) {
//     // Write your code here
//     let rem = m % n; // 1
  
//     // 2, 3, 4, 1
//     let startingPosition = s - 1 === 0 ? n : s - 1; // 4
  
//     let last = (startingPosition + rem) % n;
  
//     return last === 0 ? n : last;
//   }
