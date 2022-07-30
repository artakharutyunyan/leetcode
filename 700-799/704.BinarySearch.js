var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const current = nums[middle];

    if (current > target) {
      right = middle - 1;
    } else if (current < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};
