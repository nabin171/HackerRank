function cavityMap(grid) {
  // Write your code here
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i][j + 1]
      ) {
        grid[i] = grid[i].slice(0, j) + "X" + grid[i].slice(j + 1);
      }
    }
  }
  return grid;
}
let grid = ["989", "191", "111"];
console.log(cavityMap(grid));
