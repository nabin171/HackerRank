function catAndMouse(x, y, z) {
  let x1 = Math.abs(x - z);
  let y1 = Math.abs(y - z);
  if (x1 < y1) {
    return "Cat A";
  } else if (y1 < x1) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
let x = 2;
let y = 5;
let z = 4;
console.log(catAndMouse(x, y, z));
