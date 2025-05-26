function coutingLetters(word) {
  let vowels = 0;
  for (let i = 0; i < word.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(word[i])) {
      vowels++;
    }
  }
  console.log(vowels);
  let consonents = word.length - vowels;
  console.log(consonents);
}
let word = "aeroplane";
console.log(coutingLetters(word));
