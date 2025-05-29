function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  // Count characters in str1
  for (let char of str1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  // Count characters in str2
  for (let char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  // Compare the two objects
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(sameFrequency("aabbcc", "baccab")); // true
console.log(sameFrequency("hello", "bello")); // false
