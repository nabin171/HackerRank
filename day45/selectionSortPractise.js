function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = i - 1;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      [arr[i - 1], arr[min]] = [arr[min], arr[i - 1]];
    }
  }
  console.log(arr);
}
let arr = [4, 5, 756, 225, 5];
selectionSort(arr);
