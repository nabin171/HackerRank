function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log(arr);
}
let array = [3, 421, 54, 6, 765];
selectionSort(array);
