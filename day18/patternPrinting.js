function patternPrinting(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      array.push(i * j);
    }
    console.log(array);
  }
}
let n = 5;
console.log(patternPrinting(n));
