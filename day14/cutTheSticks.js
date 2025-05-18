function cutTheSticks(arr) {
  // Write your code here
  let output = [];
  while (arr.length != 0) {
    output.push(arr.length);
    let minimum = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - minimum;
    }
    arr = arr.filter((item) => {
      return item != 0;
    });
  }
  return output;
}

let arr = [1, 2, 3];
console.log(cutTheSticks(arr));
