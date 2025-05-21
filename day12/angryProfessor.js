function angryProfessor(k, a) {
  // Write your code here
  let c1 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      c1++;
      console.log(c1);
    }
  }
  if (c1 >= k) {
    return "NO";
  } else {
    return "YES";
  }
}
let k = 3;
let a = [-2, -1, 0, 1, 2, 5, 6];
console.log(angryProfessor(k, a));
