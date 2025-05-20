function beautifulTriplets(d, arr) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] != d) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] - arr[j] === d) {
          count++;
        }
      }
    }
  }
  return count;
}
let d = 1;
let arr = [2, 2, 3, 4, 5, 6];
console.log(beautifulTriplets(d, arr));
