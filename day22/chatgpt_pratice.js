// Question:
// Write a function that takes an array of strings and returns an object
// where the keys are the strings, and the values are the number of times each string appears.

// Example:
// Input: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Output: { apple: 3, banana: 2, orange: 1 }

function countFruits(arr) {
  const count = {};

  for (let fruit of arr) {
    count[fruit] = (count[fruit] || 0) + 1;
  }

  return count;
}

// Test the function
const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
const result = countFruits(input);

console.log(result); // Output: { apple: 3, banana: 2, orange: 1 }
