function insertionSort2(n, arr) {
  // Write your code here

  for (let i = 0; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(arr.join(" "));
  }
}
let arr = [3, 4, 7, 5, 6, 2, 1];
let n = 7;
console.log(insertionSort2(n, arr));
