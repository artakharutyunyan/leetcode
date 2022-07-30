var lengthOfLongestSubstring = function (s) {
  let map = {};
  let len = s.length;
  let max = 0;
  let start = 0;
  for (let i = 0; i < len; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};
