var intToRoman = function (num) {
  let str = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M']];
  let res = '';
  let i = 0;
  let tmp = 0;
  while (num > 0) {
    tmp = num % 10;
    if (tmp === 9) {
      res = str[i][0] + str[i + 1][0] + res;
    } else if (tmp >= 5) {
      res = str[i][1] + str[i][0].repeat(tmp - 5) + res;
    } else if (tmp === 4) {
      res = str[i][0] + str[i][1] + res;
    } else {
      res = str[i][0].repeat(tmp) + res;
    }
    num = Math.floor(num / 10);
    i++;
  }
  return res;
};
