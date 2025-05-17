function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here

  if (y1 > y2) {
    return 10000;
  }

  if (y1 === y2) {
    if (m1 > m2) {
      return 500 * (m1 - m2);
    }

    if (m1 === m2 && d1 > d2) {
      return 15 * Math.abs(d1 - d2);
    }
  }

  return 0;
}
let d1 = 9,
  m1 = 6,
  y1 = 2015;
let d2 = 6,
  m2 = 6,
  y2 = 2015;
console.log(libraryFine(d1, m1, y1, d2, m2, y2));
