function compareTriplets(a, b) {
  let output = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      output[0] += 1;
    } else if (a[i] < b[i]) {
      output[1] += 1;
    }
  }
  return output;
}

let array1 = [2, 0, 2];
let array2 = [3, 0, 1];
console.log(compareTriplets(array1, array2));
