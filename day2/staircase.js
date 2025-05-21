function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - (i + 1)) + "#".repeat(i + 1));
  }
}
let num = 5;
staircase(num);
