function countingSimilarCharacters(word) {
  let object = {};
  for (let i = 0; i < word.length; i++) {
    if (!object[word[i]]) {
      object[word[i]] = 0;
    }
    object[word[i]]++;
  }
  return object;
}
let word = "aeroplane";
console.log(countingSimilarCharacters(word));
