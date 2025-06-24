// const obj = {
//   namee: "nabin",
//   age: "23",
//   address: "balkot",
//   "user age is": "58",
// };
// obj.namee = "ram";
// delete obj.address;
// console.log(obj["user age is"]);
// console.log(obj);

//delete keyword
// let object = (function add(a) {
//   delete a;
//   return a;
// })(5);
// console.log(object);

//add values dynamically to the object
// let property = "firstName";
// const name = "Nabin Karki";
// const object = {
//   [property]: name,
// };
// console.log(object);

// print the key , value of an object through an array
// const obj1 = {
//   name: "nab",
//   age: "24",
// };
// for (let key in obj1) {
//   console.log(obj1[key]);
// }

//1.two same key with different value will results in the replacement of value of key 1 by the key 2 value.
// const obj = {
//   a: "2",
//   b: "4",
//   a: "5",
// };
// console.log(obj);

//2.create a function multiplyByTwo(0bj) tat multiplies all the numeric values of nums by 2.
// let nums = {
//   a: 100,
//   b: 200,
//   title: "Mynuns",
// };
// mutiplyByTwo(nums);
// function mutiplyByTwo(obj) {
//   for (let key in obj) {
//     if (typeof nums[key] === "number") {
//       nums[key] *= 2;
//     }
//   }
// }
// console.log(nums);

//3.what is the output of the following code?
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a);

//problem in this case
//4. What is Json.stringify and what is json.parse
// const obj = {
//   name: "nabin",
//   rollno: "45",
// };
// const strObj = JSON.stringify(obj);
// localStorage.setItem("test", obj);
// console.log(JSON.parse(strObj));

//5 what's the output?
//console.log([..."nabin"]);

//6. what's the output?
// let obj2 = { color: "Red", language: "hindi" };
// let obj3 = { ...obj2 };
// console.log(obj3);

//7/what's the output
// let settings = {
//   username: "nabin",
//   level: "7",
//   health: "full",
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// whats the output

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => {
//     2 * Math.PI * this.radius;
//   },
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

//destructuring the object
let user = {
  name: "nabin",
  color: "24",
  fullName: {
    firstName: "ram",
    lastName: "karki",
  },
};
const {
  fullName: { firstName },
} = user;
console.log(firstName);
