// function nonDivisibleSubset(k, s) {
//   // Write your code here
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if ((s[i] + s[j]) % k != 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// let s = [1, 2];
// let k = 4;
// console.log(nonDivisibleSubset(k, s));
