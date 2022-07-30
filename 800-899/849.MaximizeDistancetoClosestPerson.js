var maxDistToClosest = function (seats) {
  let max = 0;
  let count = 0;
  let i = 0;

  if (seats[i] === 0) {
    while (seats[i] === 0) {
      i++;
      count += 1;
    }
    max = count;
    count = 0;
  }

  for (let i = 0; i < seats.length; i++) {
    let current = seats[i];

    if (i === seats.length - 1 && current === 0) {
      count += 1;
      max = Math.max(max, count);
      break;
    }

    if (current === 1) {
      count = 0;
    } else {
      count += 1;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }

  return max;
};
