function checkingVowelsAndConsonents(str1, str2) {
  let points = 0;
  if (str1.length === str2.length) {
    points += 2;
  }
  if (str1[0] === str2[0]) {
    if (["a", "e", "i", "o", "u"].includes(str1[0])) {
      points += 5;
    } else {
      points += 2;
    }
  }

  let count = {
    l: 1,
    o: 1,
    v: 1,
    e: 1,
  };

  for (let i = 0; i < str1.length; i++) {
    if (["l", "o", "v", "e"].includes(str1[i]) && count[str1[i]] === 1) {
      points++;
      count[str1[i]]--;
    }
  }

  count = {
    l: 1,
    o: 1,
    v: 1,
    e: 1,
  };

  for (let i = 0; i < str2.length; i++) {
    if (["l", "o", "v", "e"].includes(str2[i])) {
      points++;
    }
  }
  return points;
}
let str1 = "allice";
let str2 = "ram";
console.log(checkingVowelsAndConsonents(str1, str2));
