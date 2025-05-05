function plusMinus(arr) {
  // Write your code here
  let a1 = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      a1[0] += 1 / arr.length;
    } else if (arr[i] < 0) {
      a1[1] += 1 / arr.length;
    } else {
      a1[2] += 1 / arr.length;
    }
  }
  console.log(a1[0].toFixed(6));
  console.log(a1[1].toFixed(6));
  console.log(a1[2].toFixed(6));
}
let array = [1, 2, -3, -7, 0, 0];
plusMinus(array);
