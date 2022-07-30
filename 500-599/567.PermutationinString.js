var checkInclusion = function (s1, s2) {
  let [n1, n2] = [s1.length, s2.length];
  let occurences = Array(26).fill(0);

  const mutate = (charCode, dir) =>
    (occurences[charCode - 'a'.charCodeAt(0)] += dir);

  const isMatch = () => occurences.every((x) => x === 0);

  for (let i = 0; i < n1; i++) {
    mutate(s1.charCodeAt(i), +1);
  }

  for (let i = 0; i < n2; i++) {
    mutate(s2.charCodeAt(i), -1);
    if (i - n1 >= 0) mutate(s2.charCodeAt(i - n1), +1);

    if (isMatch()) return true;
  }

  return false;
};
