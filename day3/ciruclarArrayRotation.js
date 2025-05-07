function circularArrayRotation(a, k, queries) {
  // Write your code here
  let result = queries;
  for (let i = 0; i < k; i++) {
    let last = a.pop();
    a.unshift(last);
  }

  return queries.map((item) => {
    return a[item];
  });
}

let array = [3, 4, 5, 6, 7];
let k = 3;
let queries = [1, 4];
console.log(circularArrayRotation(array, k, queries));
