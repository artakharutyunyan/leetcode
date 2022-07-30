var setZeroes = function (matrix) {
  let ROWS = matrix.length;
  let COLS = matrix[0].length;
  let isCol = false;

  for (let i = 0; i < ROWS; i++) {
    if (matrix[i][0] === 0) {
      isCol = true;
    }

    for (let j = 1; j < COLS; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < ROWS; i++) {
    for (let j = 1; j < COLS; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < COLS; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isCol) {
    for (let i = 0; i < ROWS; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};
