function equalizeArray(arr) {
  // Write your code here

  const object = {};
  for (let i = 0; i < arr.length; i++) {
    if (!object[arr[i]]) {
      object[arr[i]] = 0;
    }
    object[arr[i]]++;
  }
  let newArray = Object.values(object);
  console.log(newArray);
  let max = Math.max(...newArray);
  return arr.length - max;
}

let arr = [3, 3, 2, 1, 3, 3, 5];
console.log(equalizeArray(arr));
