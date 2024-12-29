var reverse = function (x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0;

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      result < Math.ceil(INT_MIN / 10) ||
      (result === Math.ceil(INT_MIN / 10) && digit < -8)
    ) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
};
