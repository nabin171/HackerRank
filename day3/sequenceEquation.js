function permutationEquation(p) {
  // Write your code here
  let array = [];
  for (let i = 1; i <= p.length; i++) {
    let result = p.indexOf(i) + 1;
    let final = p.indexOf(result) + 1;
    array.push(final);
  }
  return array;
}

let p = [5, 2, 1, 3, 4];
console.log(permutationEquation(p));
