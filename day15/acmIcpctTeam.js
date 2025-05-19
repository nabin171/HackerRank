function acmTeam(topic) {
  // [Maximum Known Subjects, Number of Teams]
  let output = [0, 0];

  // Write your code here
  for (let i = 0; i < topic.length; i++) {
    // 10011
    for (let j = i + 1; j < topic.length; j++) {
      // 11001
      let knownSubjects = 0;

      for (let k = 0; k < topic[0].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          knownSubjects++;
        }
      }

      if (output[0] < knownSubjects) {
        output[0] = knownSubjects;
        output[1] = 1;
      } else if (output[0] === knownSubjects) {
        output[1]++;
      }
    }
  }

  return output;
}

let topic = ["10011", "11001", "00111", "11110"];
console.log(acmTeam(topic));
