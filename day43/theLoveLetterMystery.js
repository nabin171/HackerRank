function theLoveLetterMystery(s) {
  let count = 0;
  for (let i = 0; i < s.length / 2; i++) {
    let leftSide = s.charCodeAt(i);
    let rightSide = s.charCodeAt(s.length - i - 1);

    if (rightSide > leftSide) {
      count += rightSide - leftSide;
    }
    if (leftSide > rightSide) {
      count += leftSide - rightSide;
    }
  }
  return count;
}
let s = "cdefghmnopqrstuvw";
console.log(theLoveLetterMystery(s));
// abccba
// abcba
