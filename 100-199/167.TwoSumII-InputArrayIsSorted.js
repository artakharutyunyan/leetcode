var twoSum = function (numbers, target) {
  let sum = 0;
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};
