function hackerrankInString(s) {
  // Write your code here
  let text = "hackerrank";
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (text[index] === s[i]) {
      index++;
    }
  }
  if (text.length === index) {
    return "YES";
  }
  return "NO";
}

let s = "aaadcdchaccckrrank";
console.log(hackerrankInString(s));
