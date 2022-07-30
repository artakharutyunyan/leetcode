var removePalindromeSub = function (s) {
  if (s.length === 0) return 0;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) == s.charAt(right)) {
      left += 1;
      right -= 1;
    } else return 2;
  }
  return 1;
};
