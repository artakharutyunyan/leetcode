var trap = function (height) {
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  let left = 1;
  let right = height.length - 2;
  let total = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
      left += 1;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
      right -= 1;
    }
  }

  return total;
};
