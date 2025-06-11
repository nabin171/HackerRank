function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let count = 0;
  for (let i = p; i > m; i = i - d) {
    if (s > i) {
      count += 1;
      s = s - i;
    } else {
      return count;
    }
  }
  count += Math.floor(s / m);
  return count;
}
let p = 100;
let d = 1;
let m = 1;
let s = 99;
console.log(howManyGames(p, d, m, s));
