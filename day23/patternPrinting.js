// function patternPrinting(num) {
//   for (let i = 1; i <= num; i++) {
//     let array = [];
//     for (let j = 0; j < i; j++) {
//       array.push(j + i);
//     }

//     console.log(array);
//   }
// }
// let num = 5;
// console.log(patternPrinting(num));

function counter(str1, str2) {
  let obj1 = {},
    obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 0;
    }
    obj1[str1[i]]++;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj2[str2[i]]) {
      obj2[str2[i]] = 0;
    }
    obj2[str2[i]]++;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  console.log(obj1[keys1]);

  //   if (keys1.length !== keys2.length) {
  //     return false;
  //   }
  //   for (let i = 0; i < keys1.length; i++) {
  //     if (obj1[keys1[i]] !== obj2[keys2[i]]) {
  //       return false;
  //     }
  //     return true;
  //   }
}
let str1 = "Nabin";
let str2 = "abinv";
console.log(counter(str1, str2));
