function bubbleShort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}

let arr = [9, 2, 4, 5, 58];
bubbleShort(arr);

//[9,2,4,5,58];
