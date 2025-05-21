function square(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] ** 2) {
        return "true";
      }
    }
  }
  return "false";
}
let array = [2, 3, 6, 4];
console.log(square(array));
