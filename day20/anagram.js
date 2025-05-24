function anagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 0;
    }
    obj1[str1[i]]++;
  }

  for (let j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 0;
    }
    obj2[str2[j]]++;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  console.log(keys1);
  console.log(keys2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    if (obj1[keys1[i]] !== obj2[keys1[i]]) {
      return false;
    }
  }

  return true;
}

let str1 = "listeo";
let str2 = "silent";
console.log(anagram(str1, str2));
