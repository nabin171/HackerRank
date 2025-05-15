function subtract(array) {
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1] - array[i];
  }
  array.pop();
  console.log(array);
}
let array = [1, 3, 4, 6];
console.log(subtract(array));
