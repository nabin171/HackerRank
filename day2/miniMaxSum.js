function miniMaxSum(arr) {
  let sum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum - max, sum - min);
}
let array = [12, 2, 3, 4, 5];
miniMaxSum(array);
