function taumBday(b, w, bc, wc, z) {
  // Write your code here
  if (bc > wc) {
    bc = Math.min(bc, wc + z);
  } else if (wc > bc) {
    wc = Math.min(wc, bc + z);
  }

  return b * bc + w * wc;
}

let b = 3,
  w = 5,
  bc = 3,
  wc = 4,
  z = 1;
console.log(taumBday(b, w, bc, wc, z));
