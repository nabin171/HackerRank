// let array = [
//   ["abc", "def", "ghi"],
//   ["jkl", "mno", "pqr"],
// ];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     for (let k = 0; k < array[i][j].length; k++) {
//       console.log(array[i][j][k]);
//     }
//   }
// }

let array1 = [1, 2, 3, 4, 10, 40];
let array2 = [];
let array3 = [
  {
    name: "ram",
  },
  { name: "sita" },
];

// let sum = array1.reduce((sum1, item) => {
//   if (item % 2 === 0) {
//     return sum1 + item;
//   }
//   return sum1 + item * 2;
// }, 0);
// console.log(sum);

let obj = {};
let array = [
  ["name", "nabin"],
  ["class", "12"],
  ["rollNo", "54"],
];

for (let i = 0; i < array.length; i++) {
  obj[array[i][0]] = array[i][1];
}
console.log(obj);

let object = {
  name: "nabin",
  rollNo: "34",
  addres: "balkot",
  class: "12",
  fullName: {
    firstName: "nabin",
    lastName: "karki",
  },
};
console.log(object.fullName.firstName);
console.log(object["fullName"]["firstName"]);
object.phoneno = "9862276291";
let string = "ageee";
object[string] = 34;
console.log(object);

// let sum1 = 0;
// array1.forEach((item) => {
//   sum1 += item;
// });
// console.log(sum1);

// let sum = 0;
// for (let i = 0; i < array1.length; i++) {
//   sum += array1[i];
// }
// console.log(sum);

// let array = array1.map((item) => {
//   if (item % 2 === 0) {
//     return item * 2;
//   }
//   return item;
// });
// console.log(array);

// let array3 = array1.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(array3);

// let array4 = array1.filter((num) => {
//   return num % 3 === 0;
// });
// console.log(array4);

// for (let i = 0; i < array1.length; i++) {
//   {
//     array2.push(array1[i] * 2);
//   }
// }
// console.log(array2);
