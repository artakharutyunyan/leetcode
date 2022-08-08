var minimumTotal = function (triangle) {
  let len = triangle.length;
  let len2 = 0;
  let res = Number.MAX_SAFE_INTEGER;
  let dp = Array(len);

  for (let i = 0; i < len; i++) {
    len2 = triangle[i].length;
    dp[i] = Array(len2).fill(0);
    for (let j = 0; j < len2; j++) {
      dp[i][j] = getMinParent(dp, i, j) + triangle[i][j];
      if (i === len - 1) res = Math.min(res, dp[i][j]);
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};

let getMinParent = function (dp, i, j) {
  let left = 0;
  let right = 0;

  if (i === 0) return 0;

  left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j - 1];

  right = j === dp[i - 1].length ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];

  return Math.min(left, right);
};
