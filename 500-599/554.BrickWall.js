var leastBricks = function (wall) {
  let map = {};
  let max = 0;

  wall.forEach((row) => {
    let sum = 0;
    for (let n = 0; n < row.length - 1; n++) {
      sum += row[n];
      map[sum] = map[sum] ? map[sum] + 1 : 1;
      max = Math.max(map[sum], max);
    }
  });

  return wall.length - max;
};
