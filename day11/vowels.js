function vowels(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(string[i])) {
      output = output + string[i].toUpperCase();
    }
  }
  return output;
}
let string = "my name is nabin";
console.log(vowels(string));
