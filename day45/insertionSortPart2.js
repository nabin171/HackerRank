function insertionSort2(n, arr) {
  // Write your code here

  for (let i = 1; i < n; i++) {
    let numberToInsert = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  console.log(arr);
}
let arr = [3, 4, 2, 5, 6, 2, 1];
let n = 7;
console.log(insertionSort2(n, arr));
