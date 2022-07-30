var intersect = function (nums1, nums2) {
  let result = [];

  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    let count = map[current];

    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }

  return result;
};
