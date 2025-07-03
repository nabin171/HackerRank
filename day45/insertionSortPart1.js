function insertionSort1(n, arr) {
  // Write your code here

  let value = arr[n - 1];
  for (let i = 0; i < n; i++) {
    if (value < arr[n - i - 2]) {
      arr[n - i - 1] = arr[n - i - 2];
      console.log(arr.join(" "));
    } else {
      arr[n - i - 1] = value;
      console.log(arr.join(" "));
      break;
    }
  }
}
let arr = [1, 2, 4, 5, 0];
let n = 5;
console.log(insertionSort1(n, arr));
