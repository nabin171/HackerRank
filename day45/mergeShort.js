function mergeShort(arr) {
  let arr2 = [];
  let arr3 = [];
  while (!arr.length === 8) {
    for (let i = 0; i < arr.length; i++) {
      if (i >= 0 && i < Math.floor(arr.length / 2)) {
        arr2.push(arr[i]);
      } else {
        arr3.push(arr[i]);
      }
    }
  }
  console.log(arr2, arr3);
}

let arr = [1, 2, 3, 4, 5, 6];
mergeShort(arr);
