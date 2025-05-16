function hurdleRace(k, height) {
  // Write your code here
  let max = 0,
    jump;
  for (let i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i];
    }
  }
  jump = max - k;
  if (k >= max) {
    return 0;
  } else {
    return jump;
  }
}
let k = 1;
let height = [1, 2, 3, 3, 2];
console.log(hurdleRace(k, height));
