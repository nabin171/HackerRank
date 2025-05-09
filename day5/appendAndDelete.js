function appendAndDelete(s, t, k) {
  // Write your code here
  let moves = s.length + t.length;
  let max = s.length > t.length ? s.length : t.length;
  for (let i = 0; i < max; i++) {
    if (s[i] === t[i]) {
      moves = moves - 2;
    } else {
      break;
    }
  }
  if (moves <= k) {
    return "Yes";
  } else {
    return "No";
  }
}
let s = "y";
let t = "yu";
let k = 1;
console.log(appendAndDelete(s, t, k));
