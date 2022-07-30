var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let rev = 0;

  while (x > rev) {
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x / 10);
  }

  return x === rev || x === Math.trunc(rev / 10);
};
