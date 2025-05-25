function countDigitsAndLetters(input) {
  let digits = 0;
  let letters = 0;

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char >= "0" && char <= "9") {
      digits++;
    } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      letters++;
    }
  }

  console.log("Digits:", digits);
  console.log("Letters:", letters);
}

let input = "abc123XYZ";
countDigitsAndLetters(input);
