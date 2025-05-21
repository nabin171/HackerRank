function jumpingOnClouds(c, k) {
  let energy = 100;
  let currentPosition = 0;

  do {
    currentPosition = (currentPosition + k) % c.length;
    energy--;
    if (c[currentPosition] == 1) {
      energy = energy - 2;
   
    }
  } while (currentPosition != 0);
  return energy;
}
let c = [0, 0, 1, 0];
let k = 2;
console.log(jumpingOnClouds(c, k));
