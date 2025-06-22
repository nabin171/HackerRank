function camelcase(s) {
  // Write your code here
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    asciiValue = s.charCodeAt(i);
    if (asciiValue >= 65 && asciiValue <= 90) {
      count = count + 1;
    }
  }
  return count;
}
let s = "oneTwoThree";
console.log(camelcase(s));
