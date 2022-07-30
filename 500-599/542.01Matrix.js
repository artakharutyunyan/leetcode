var updateMatrix = function (mat) {
  let updatedMatrix = [];
  let newRow;
  let queue = [];
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  for (let y = 0; y < mat.length; y++) {
    (newRow = []).length = mat[0].length;
    updatedMatrix.push(newRow);
    for (let x = 0; x < mat[0].length; x++) {
      if (mat[y][x] === 0) {
        queue.push([y, x]);
        updatedMatrix[y][x] = 0;
      } else {
        updatedMatrix[y][x] = Infinity;
      }
    }
  }
  while (queue.length) {
    let [y, x] = queue.shift();
    let currentValue = updatedMatrix[y][x];
    for (let dir of dirs) {
      if (
        y + dir[0] < 0 ||
        y + dir[0] >= mat.length ||
        x + dir[1] < 0 ||
        x + dir[1] >= mat[0].length
      ) {
        continue;
      } else if (updatedMatrix[y + dir[0]][x + dir[1]] > currentValue + 1) {
        updatedMatrix[y + dir[0]][x + dir[1]] = currentValue + 1;
        queue.push([y + dir[0], x + dir[1]]);
      }
    }
  }
  return updatedMatrix;
};
