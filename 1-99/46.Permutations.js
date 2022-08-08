var permute = function (nums) {
  let res = [];

  dfs(res, [], nums);

  return res;
};

let dfs = function (res, arr, nums) {
  let len = nums.length;
  let tmp1 = null;
  let tmp2 = null;

  if (!len) return res.push(arr);

  for (let i = 0; i < len; i++) {
    tmp1 = Array.from(arr);
    tmp1.push(nums[i]);

    tmp2 = Array.from(nums);
    tmp2.splice(i, 1);

    dfs(res, tmp1, tmp2);
  }
};
