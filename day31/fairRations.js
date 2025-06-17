function fairRations(B) {
  let count = 0;
  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 != 0) {
      B[i + 1] += 1;
      B[i]++;
      count += 2;
    }
  }
  //   for (let i = 0; i < B.length; i++) {
  if ((B.length - 1) % 2 != 0) {
    return "NO";
  }
  //   }
  else {
    return count;
  }
}
let b = [4, 5, 6, 7];
//  i=1 [4,6,7,8]  i=2 [4,6,8,8]
console.log(fairRations(b));
