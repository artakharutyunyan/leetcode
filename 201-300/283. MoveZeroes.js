var moveZeroes = function (nums) {
  let len = nums.length;
  let lastZeroIndex = -1;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0 && lastZeroIndex === -1) {
      lastZeroIndex = i;
    } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
      swap(nums, i, lastZeroIndex);
      lastZeroIndex += 1;
    }
  }
};

let swap = function (arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};
