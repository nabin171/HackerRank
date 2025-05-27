// function maximum(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// let array = [20, 12, 3, 4, 5];
// console.log(maximum(array));

// function minimum(array) {
//   let minimum = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < minimum) {
//       minimum = array[i];
//     }
//   }
//   return minimum;
// }
// let array = [1, 2, 34, 512, 0];
// console.log(minimum(array));

function happyNumber(num) {
  while (num >= 10) {
    let rem;
    let sum = 0;
    while (num !== 0) {
      let rem = num % 10;
      num = Math.floor(num / 10);
      sum += rem ** 2;
    }
    num = sum;
  }
  if (num === 1) {
    console.log("Happy No");
  } else {
    console.log("Not happy number");
  }
}
let num = 20;
console.log(happyNumber(num));
