function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let max,
    output = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      max = keyboards[i] + drives[j];
      if (max <= b && max > output) {
        output = max;
      }
    }
  }
  return output;
}
let keyboards = [40, 50, 60];
let drives = [5, 8, 12];
let b = 60;
console.log(getMoneySpent(keyboards, drives, b));
