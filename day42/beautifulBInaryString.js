function beautifulBinaryString(b) {
  let string = "010";
  let output = string.repeat(b.length / 3);
  let count = 0;
  let i = 0;
  while (i < b.length) {
    let sliceOfB = b.slice(i, i + 3);
    if (sliceOfB === string) {
      count++;
      i = i + 2;
    }
    i++;
  }
  return count;
}
let b = "0101010";
console.log(beautifulBinaryString(b));
