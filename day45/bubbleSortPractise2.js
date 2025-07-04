function bubbleShort(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let array = [56, 20, 12, 58, 78];
bubbleShort(array);
console.log(array);
