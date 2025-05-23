function patternPrinting(n) {
  for (let i = 1; i <= n; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push(j);
    }
    console.log(arr);
  }
}
let n = 4;
console.log(patternPrinting(n));
