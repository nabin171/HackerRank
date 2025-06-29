function weightedUniformStrings(s, queries) {
  // Write your code here
  let array = [];
  let array2 = [];
  let current = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let weights = s.charCodeAt(i) - 96;

    if (current === s[i]) {
      count++;
    } else {
      count = 1;
      current = s[i];
    }
    array.push(count * weights);
  }
  for (let i = 0; i < queries.length; i++) {
    if (array.includes(queries[i])) {
      array2.push("Yes");
    } else {
      array2.push("No");
    }
  }
  return array2;
}
let s = "abbcccddd";
let queries = [1, 7, 5, 4, 15];
console.log(weightedUniformStrings(s, queries));
