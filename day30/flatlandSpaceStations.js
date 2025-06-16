function flatlandSpaceStations(n, c) {
  let left = [];
  let right = [];
  let minimum = [];
  for (let i = 0; i < n; i++) {
    if (c.includes(i)) {
      left.push(0);
    } else if (i === 0) {
      left.push(Infinity);
    } else {
      left.push(left[i - 1] + 1);
    }
  }

  for (let j = n - 1; j >= 0; j--) {
    if (c.includes(j)) {
      right.push(0);
    } else if (j == n - 1) {
      right.push(Infinity);
    } else {
      right.push(right[right.length - 1] + 1);
    }
  }
  right.reverse();

  for (let k = 0; k < left.length; k++) {
    let min = minimum(left[k], right[k]);
    minimum.push(min);
  }
  return Math.max(...minimum);
}
let n = 5;
let c = [0, 4];
console.log(flatlandSpaceStations(n, c));
