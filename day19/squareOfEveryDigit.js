// function squareOfEveryDigits(n) {
//   while (n >= 10) {
//     let output = 0;
//     while (n != 0) {
//       rem = n % 10;
//       n = Math.floor(n / 10);
//       output = output + rem ** 2;
//     }
//     n = output;
//   }
//   return n;
// }
// let n = 45;
// console.log(squareOfEveryDigits(n));

function maximum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
let array = [1, 5, 64, 2, 67];
console.log(maximum(array));
