function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }
  console.log(arr);
}
let array = [332, 4, 20, 40, 50];
insertionSort(array);
