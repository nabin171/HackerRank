function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k == 0) {
        count++;
      }
    }
  }
  return count;
}
let ar = [1, 3, 2, 6, 1, 2];
let n = ar.length;
let k = 3;
console.log(divisibleSumPairs(n, k, ar));
