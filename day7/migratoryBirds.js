function migratoryBirds(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]]++;
  }
  let newArray = Object.entries(obj);
  console.log(newArray);
  let max = 0;
  let currentNumber = 0;
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j][1] > max) {
      max = newArray[j][1];
      currentNumber = newArray[j][0];
    }
  }
  return currentNumber;
}
let arr = [1, 1, 2, 3, 4, 4, 4, 2];
console.log(migratoryBirds(arr));
