// let fruit = "banana";
// console.log(fruit);
let fruits = ["mango", "banana", "orange", "strawberry"];
// fruits[0] = "strawberry";
// fruits.push("dragon Fruit"); // add new elements at the end of the array;
// fruits.pop("banana"); // remove the last element of an array;
// console.log(fruits);
// fruits.unshift("guava")// add element in the beginning of an array;
// fruits.shift()// remove element from the first in the array
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); //undefined

//searching for the index
// let index = fruits.indexOf("lichi");
// console.log(index);

//loop through an array

// for (let i = 0; i < fruits.length; i += 2) {
//   console.log(fruits[i]);
// }

//reverse length of an arrayx
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
// fruits.sort().reverse();
// //array new form
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//pratice done by me

// numbers.reverse();
// console.log(numbers);
// function maximum(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// let numbers = [20, 0, 2, 45, 656];
// console.log(maximum(numbers));

//Create a JavaScript program that does the following with an array of car brands:
let cars = ["Tesla", "BMW", "Toyota", "Honda"];
//Replace the second item in the array ("BMW") with "Ford".
cars[1] = "Ford";

// Add "Hyundai" to the end of the array.
cars.push("Hyundai");

// Remove the first car from the array.
cars.shift();

// Add "Audi" to the beginning of the array.
cars.unshift("Audi");
console.log(cars);

// Print each car in the array using a for loop.
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Print the index of "Toyota". If not found, print "Toyota not found".
let index = cars.indexOf("Toyota");
if (index === 2) {
  console.log(`Toyota is an index at ${index}`);
} else {
  console.log("Toyota not found");
}
// Print the car names in reverse order.
cars.reverse();
console.log(cars);

// Sort the cars in alphabetical order and then print them using a for...of loop.
cars.sort();
for (let car of cars) {
  console.log(car);
}

let numbers = ["2", "5", "64", "10"];
for (let num of numbers) {
  console.log(numbers);
}
