let width = [2, 3, 2, 1];
function serviceLane(n, cases) {
  // Write your code here
  let maximum = [];
  for (let i = 0; i < cases.length; i++) {
    maximum.push(Math.min(...width.slice(cases[i][0] - 1, cases[i][1])));
  }
  return maximum;
}
let n = 4;
let cases = [
  [1, 2],
  [2, 4],
];
console.log(serviceLane(n, cases));
