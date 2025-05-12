function sockMerchant(n, ar) {
  // Write your code here
  let obj = {};
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 0;
    }
    obj[ar[i]]++;
  }
  let array = Object.values(obj);
  let pair = 0;
  for (let j = 0; j < array.length; j++) {
    pair = pair + Math.floor(array[j] / 2);
  }
  return pair;
}
let n = 8;
let ar = [10, 10, 10, 10, 20, 30, 20, 20];
console.log(sockMerchant(n, ar));
