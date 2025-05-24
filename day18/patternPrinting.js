function patternPrinting(n) {
  for (let i = 1; i <= n; i++) {
    let array = [];
    for (let j = 1; j <= n; j++) {
      array.push(i * j);
    }
    console.log(array);
  }
}
let n = 5;
console.log(patternPrinting(n));
