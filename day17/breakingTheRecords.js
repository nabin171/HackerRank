function breakingRecords(scores) {
  let record = [0, 0];
  let minimum = scores[0];
  let maximum = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maximum) {
      record[1]++;
      maximum = scores[i];
    }
    if (scores[i] < minimum) {
      record[0]++;
      minimum = scores[i];
    }
  }
  return record;
}
let scores = [1, 2, 3, 22, 12, 12];
console.log(breakingRecords(scores));
