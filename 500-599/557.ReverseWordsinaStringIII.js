var reverseWords = function (s) {
  return s.split(' ').map(reverse).join(' ');
};

const reverse = function (word) {
  let len = word.length;
  let res = '';
  for (let i = 0; i < len; i++) {
    res += word[len - i - 1];
  }
  return res;
};
