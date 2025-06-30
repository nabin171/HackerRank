function alternatingCharacters(s) {
  // Write your code here
  let string = "";
  let count = 0;
  let current = "";
  for (let i = 0; i < s.length; i++) {
    if (current === s[i]) {
      count++;
    } else {
      current = s[i];
    }
  }
  return count;
}
let string = "AAABBB";
console.log(alternatingCharacters(string));
