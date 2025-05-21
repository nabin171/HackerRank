function migratoryBirds(arr) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    if (!object[arr[i]]) {
      object[arr[i]] = 0;
    }
    object[arr[i]]++;
  }
  let array = Object.entries(object);
  console.log(array);
  let max = 0;
  let key;
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] > max) {
      max = array[i][1];
      key = array[i][0];
    }
  }
  return key;
}
let arr = [1, 2, 2, 2, 2, 3, 1, 1];
console.log(migratoryBirds(arr));
