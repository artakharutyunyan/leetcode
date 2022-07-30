var orangesRotting = function (grid) {
  if (emptyOrchard(grid)) {
    return 0;
  }

  let stopwatch = 0;

  let cycleOranges = (grid) => {
    let checked = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 2 && !isDuplicate(checked, [i, j])) {
          let adjacent = adjacencies(grid, i, j);
          if (adjacent) {
            adjacent.forEach((freshOrange) => {
              grid[freshOrange[0]][freshOrange[1]] = 2;
              checked.push([freshOrange[0], freshOrange[1]]);
            });
          }
        }
      }
    }
    stopwatch++;
    return adjacenciesRemain(grid) ? cycleOranges(grid) : null;
  };
  cycleOranges(grid);
  return stopwatch > 0 && emptyOrchard(grid) ? stopwatch : -1;
};

let adjacenciesRemain = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2 && adjacencies(grid, i, j)) {
        return true;
      }
    }
  }
  return false;
};

let adjacencies = (tree, i, j) => {
  let adjacent = [];

  let right = tree[i][j + 1];
  let left = tree[i][j - 1];
  let up = tree[i - 1] === undefined ? undefined : tree[i - 1][j];
  let down = tree[i + 1] === undefined ? undefined : tree[i + 1][j];

  right === 1 ? adjacent.push([i, j + 1]) : null;
  up === 1 ? adjacent.push([i - 1, j]) : null;
  left === 1 ? adjacent.push([i, j - 1]) : null;
  down === 1 ? adjacent.push([i + 1, j]) : null;

  return adjacent.length > 0 ? adjacent : false;
};

let isDuplicate = (arr1, arr2) => {
  for (var i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) === JSON.stringify(arr2)) {
      return true;
    }
  }
  return false;
};

let emptyOrchard = (grid) => {
  let rotten = false;
  let fresh = false;
  let absent = false;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        rotten = true;
      } else if (grid[i][j] === 1) {
        fresh = true;
      } else if (grid[i][j] === 0) {
        absent = true;
      }
    }
  }
  return (rotten && !fresh) || (absent && !rotten & !fresh);
};
