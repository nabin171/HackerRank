function stringConstruction(s) {
  // Write your code here

  const p = new Set();
  let cost = 0;
  for (let i = 0; i < s.length; i++) {
    p.add(s[i]);
  }
  return p.size;
}
let s = "abba";
console.log(stringConstruction(s));
