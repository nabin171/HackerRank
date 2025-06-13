function timeInWords(h, m) {
  const obj = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "thirty",
  };

  if (m == 0) {
    return `${obj[h]} o' clock`;
  }
  if (m == 1) {
    return `${obj[m]} minute past ${obj[h]}`;
  }
  if (m == 15) {
    return `quarter past ${obj[h]} `;
  }
  if (m < 30) {
    return `${obj[m]} minutes past ${obj[h]}`;
  }
  if (m == 30) {
    return `half past ${obj[h]}`;
  }
  let hour = h == 12 ? 1 : h + 1;
  if (m == 45) {
    return `quarter to ${obj[hour]}`;
  }
  if (m == 59) {
    return `${obj[60 - m]} minute to ${obj[hour]} `;
  }
  if (m > 30) {
    return `${obj[60 - m]} minutes to ${obj[hour]} `;
  }
}
let h = 12;
let m = 59;
console.log(timeInWords(h, m));
