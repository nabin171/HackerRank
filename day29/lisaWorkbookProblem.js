function workbook(n, k, arr) {
  // Write your code here
  let count = 0;
  let pageNo = 1;
  for (let i = 0; i < n; i++) {
    let currentProblem = 1;
    while (currentProblem <= arr[i]) {
      let pageNoEnd = Math.min(currentProblem + k - 1, arr[i]);
      if (pageNo === currentProblem < pageNoEnd) {
        count++;
      }
      console.log(pageNo, currentProblem, pageNoEnd);
      currentProblem = pageNoEnd + 1;
      pageNo++;
    }
  }
  return count;
}
let arr = [4, 2, 6, 1, 10];
let n = 5;
let k = 3;
console.log(workbook(n, k, arr));
