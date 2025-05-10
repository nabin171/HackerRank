function breakingRecords(scores) {
  // Write your code here
  let array = [0, 0];
  let minimum = scores[0],
    maximum = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maximum) {
      maximum = scores[i];
      array[0]++;
    } else if (scores[i] < minimum) {
      array[1]++;
      minimum = scores[i];
    }
  }
  return array;
}
let scores = [12, 13, 10, 24];
console.log(breakingRecords(scores));
