function marsExploration(s) {
  // Write your code here
  let string = "SOS";
  let output = string.repeat(s.length / 3);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === output[i]) {
      count++;
    }
  }
  return output.length - count;
}
let s = "SOSPOS";
console.log(marsExploration(s));
