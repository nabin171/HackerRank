function stones(n, a, b) {
  // Write your code here
  let array = new Set();
  for (let i = 0; i < n; i++) {
    array.add(b * i + a * (n - 1 - i));
  }
  return Array.from(array).sort((a, b) => a - b);
}
let n = 3;
let a = 3;
let b = 4;
console.log(stones(n, a, b));

//4a+0b
//3a+1b
//2a+2b
//1a+3b
//0a+4b

// a=3 b=4 n=3
// 0,4,7  a+b
// 0,3,6  a+a
// 0,4,8  b+b
// 0,3,7  b+a
// output 6,7,8

// a=3 b=4 n=5
// 0,3,6,9,12 4a+0b
// 0,3,6,9,13, 3a+1b
// 0,3,6,10,13  3a+1b
//0,3,6,10,14  2a+2b
//0,3,7,10,13  3a+1b
//0,3,7,10,14  2a+2b
//0,3,7,11,14   2a+2b
//0,3,7,11,14  2a+2b
//0,4,7,10,13  1b+3a
//0,4,7,10,14  3b+1a
//0,4,7,11,14  2a+2b
//0,4,7,11,15  1a+3b
//0,4,8,11,15  3b+1a
//0,4,8,11,14  2a+2b
//0,4,8,12,15  3b+a
//0,4,8,12,16  4b+0a
