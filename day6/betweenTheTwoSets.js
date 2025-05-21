function getTotalX(a, b) {
  let count = 0;
  for (let n = Math.max(...a); n <= Math.min(...b); n++) {
    let condition1 = true;
    let condition2 = true;
    for (let i = 0; i < a.length; i++) {
      if (n % a[i] !== 0) {
        condition1 = false;
        break;
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i] % n !== 0) {
        condition2 = false;
        break;
      }
    }
    if (condition1 && condition2) {
      count++;
    }
  }
  return count;
}
let a = [2, 6];
let b = [24, 36, 48];
console.log(getTotalX(a, b));
