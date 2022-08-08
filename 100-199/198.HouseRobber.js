var rob = function (nums) {
  return helper([], 0, nums);
};

let helper = function (dp, i, nums) {
  if (i >= nums.length) return 0;
  if (dp[i] === undefined) {
    dp[i] = Math.max(
      helper(dp, i + 1, nums),
      nums[i] + helper(dp, i + 2, nums)
    );
  }
  return dp[i];
};
