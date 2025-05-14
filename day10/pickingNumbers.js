function pickingNumbers(a) {
  // Write your code here
  let max = -Infinity;
  for (i = 0; i < a.length; i++) {
    let count = 1;
    for (j = i + 1; j < a.length; j++) {
      if (Math.abs(a[i] - a[j]) <= 1) {
        count++;
      }
    }
    if (max < count) {
      max = count;
    }
  }
  return max;
}
let a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
console.log(pickingNumbers(a));
