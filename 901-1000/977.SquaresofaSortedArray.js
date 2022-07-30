var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      right--;
    } else {
      result[resultIdx] = leftVal;
      left++;
    }
    resultIdx--;
  }
  return result;
};
