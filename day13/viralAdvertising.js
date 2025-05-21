function viralAdvertising(n) {
  // Write your code here

  let cumulativeLikes = 0;
  let shares = 5;
  for (let i = 1; i <= n; i++) {
   let likes = Math.floor(shares / 2);
    cumulativeLikes = cumulativeLikes + likes;
    shares = likes * 3;
  }
  return cumulativeLikes;
}
let n = 5;
console.log(viralAdvertising(n));
