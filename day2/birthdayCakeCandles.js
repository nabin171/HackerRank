function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0;
  let max = Math.max(...candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      count += 1;
    }
  }
  return count;
}
let array = [2, 3, 5, 5];
console.log(birthdayCakeCandles(array));
