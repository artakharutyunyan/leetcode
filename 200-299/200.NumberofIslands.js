var numIslands = function (grid) {
  let counter = 0;
  let rowsL = grid.length;
  let colsL = grid[0].length;
  if (grid.length === 0) return 0;

  function markHeighbour(grid, R, C) {
    grid[R][C] = 'X';
    if (grid[R][C - 1] === '1') {
      markHeighbour(grid, R, C - 1);
    }
    if (grid[R][C + 1] === '1') {
      markHeighbour(grid, R, C + 1);
    }
    if (grid?.[R - 1]?.[C] === '1') {
      markHeighbour(grid, R - 1, C);
    }
    if (grid?.[R + 1]?.[C] === '1') {
      markHeighbour(grid, R + 1, C);
    }
  }

  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (grid[R][C] === '1') {
        counter++;
        markHeighbour(grid, R, C);
      }
    }
  }

  return counter;
};
