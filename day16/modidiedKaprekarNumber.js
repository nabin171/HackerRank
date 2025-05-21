function kaprekarNumbers(p, q) {
  // Write your code here
  let arr = [];
  let count = 0;
  for (let n = p; n <= q; n++) {
    let b = n;
    let d = 0;
    let square = n * n;
    while (b != 0) {
      d++;
      b = Math.floor(b / 10);
    }
    let right = square % 10 ** d;
    let left = Math.floor(square / 10 ** d);

    if (n === left + right) {
      arr.push(n);
    }
  }

  if (arr.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(arr.join(" "));
  }
}
let p = 1;
let q = 100;
console.log(kaprekarNumbers(p, q));
