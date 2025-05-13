function countingValleys(steps, path) {
  // Write your code here
  let intialPosition = 0,
    vallyeCount = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "U") {
      intialPosition++;
    }
    if (path[i] == "D") {
      if (intialPosition == 0) {
        vallyeCount++;
      }
      intialPosition--;
    }
  }
  return vallyeCount;
}
let steps = 8;
let path = "UDDDUDUU";
console.log(countingValleys(steps, path));
