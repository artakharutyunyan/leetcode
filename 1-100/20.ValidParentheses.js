var isValid = function (s) {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== stack.pop()) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

function isClosedBracket(ch) {
  return [')', ']', '}'].indexOf(ch) > -1;
}
