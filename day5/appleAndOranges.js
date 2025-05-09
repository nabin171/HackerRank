function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < apples.length; i++) {
    let add1 = apples[i] + a;
    if (s <= add1 && add1 <= t) {
      count1++;
    }
  }
  console.log(count1);
  for (let i = 0; i < oranges.length; i++) {
    let add2 = oranges[i] + b;
    if (s <= add2 && add2 <= t) {
      count2++;
    }
  }
  console.log(count2);
}

let s = 7,
  t = 10,
  a = 4,
  b = 12,
  apples = [4, 5, -4],
  oranges = [3, -2, -4, -4];
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
