var letterCasePermutation = function (s) {
  const result = [];

  const dfs = (i, s, slate) => {
    //base case
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }
    // dfs recursive case
    let char = s[i];
    if (!Number.isInteger(parseInt(char))) {
      //uppercase
      slate.push(char.toUpperCase());
      dfs(i + 1, s, slate);
      slate.pop();
      //lowercase
      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, s, slate);
      slate.pop();
    }
  };
  dfs(0, s, []);
  return result;
};
