function chocolateFeast(n, c, m) {
  // Write your code here
  let count = Math.floor(n / c);
  let wrapper = count;
  while (wrapper >= m) {
    let newChocolate = Math.floor(wrapper / m);
    count += newChocolate;
    wrapper = (wrapper % m) + newChocolate;
  }
  return count;
}
let n = 15;
let c = 3;
let m = 2;
console.log(chocolateFeast(n, c, m));
