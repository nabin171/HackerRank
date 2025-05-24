function trueOrFalse() {
  // true
  // false =>//false
  // +ve
  // -ve
  // 0  =>//false
  // string
  // '' =>//false
  // 'aesuthaoesunthaoe'
  // []
  // ['abc']
  // [0]
  // {}
  // {a: 1}
  // null   =>//false
  // undefined  =>//false
  // NaN    =>//false

  const x = NaN;

  if (x) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// trueOrFalse();

function test() {
  const word = "aaaaa";
  const count = {};

  for (let i = 0; i < word.length; i++) {
    // i = 0, 1
    if (!count[word[i]]) {
      count[word[i]] = 0;
    }

    count[word[i]]++;
  }

  console.log(count);
}

test();
