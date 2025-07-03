function introTutorial(V, arr) {
  // Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (V === arr[i]) {
      return i;
    }
  }
}
let array = [1, 3, 5, 7, 8];
let v = 5;
console.log(introTutorial(v, array));
