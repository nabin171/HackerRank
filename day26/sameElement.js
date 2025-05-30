function sameElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let count1 = {},
    count2 = {};

  for (let num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }

  for (let num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}
