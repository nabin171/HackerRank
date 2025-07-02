function twoStrings(s1, s2) {
  let array1 = [];
  for (let i = 0; i < s1.length; i++) {
    array1.push(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    if (array1.includes(s2[i])) {
      return "YES";
    }
  }
  return "NO";
}
let s1 = "abc";
let s2 = "ben";
console.log(twoStrings(s1, s2));
