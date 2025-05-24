function patternPrinting(n) {
  for (let i = 0; i <= n - 1; i++) {
    let array = [];
    for (let j = 0; j <= i; j++) {
      array.push(i + j + 1);
    }
    console.log(array);
  }
}
let n = 4;
console.log(patternPrinting(n));
