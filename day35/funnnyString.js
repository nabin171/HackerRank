function funnyString(s) {
  // Write your code here
  let reversee = s.split("").reverse().join("");
  console.log(reversee);
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let array4 = [];
  let diff;
  let diff2;
  for (let i = 0; i < s.length; i++) {
    array1.push(s.charCodeAt(i));
  }
  for (let j = 0; j < reversee.length; j++) {
    array2.push(reversee.charCodeAt(j));
  }
  for (let k = 0; k < s.length - 1; k++) {
    diff = Math.abs(array1[k] - array1[k + 1]);
    array3.push(diff);
    diff2 = Math.abs(array2[k] - array2[k + 1]);
    array4.push(diff2);
  }
  console.log(array3, array4);
  for (let l = 0; l < array3.length; l++) {
    if (array3[l] !== array4[l]) {
      return "Not Funny";
    }
  }
  return "Funny";
}
let s = "ball";
console.log(funnyString(s));
