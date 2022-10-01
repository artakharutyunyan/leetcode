var isHappy = function (n) {
  let res = 0;
  let map = {};

  if (n < 1) return false;

  while (n !== 1 && !map[n]) {
    map[n] = true;
    res = 0;

    while (n > 0) {
      res += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = res;
  }

  return n === 1;
};