// Question:
// Write a function that takes an array of objects and returns a single object
// where each key is a unique "id" from the array elements,
// and each value is the corresponding "name".

// Example:
// Input: [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]
// Output: {
//   1: 'Alice',
//   2: 'Bob',
//   3: 'Charlie'
// }

function mapIdToName(arr) {
  const result = {};

  for (let item of arr) {
    result[item.id] = item.name;
  }

  return result;
}

// Test the function
const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const output = mapIdToName(input);

console.log(output); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }
