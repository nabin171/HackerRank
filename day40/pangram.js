function pangrams(s) {
  // Write your code here
  let array = [];
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      if (!array.includes(s[i])) {
        array.push(s[i]);
      }
    }
  }
  if (array.length == 26) {
    return "pangram";
  }
  return "not pangram";
}
let s = "the quick brown fox jump over the lazy dog";
console.log(pangrams(s));
