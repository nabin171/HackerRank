// function maximum(array) {
//   let maximum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maximum) {
//       maximum = array[i];
//     }
//   }
//   return maximum;
// }

function maximum(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

let array = [20, 30, 40, 2, 4, 5, 6];
console.log(maximum(array));
