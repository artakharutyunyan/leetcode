var peakIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    console.log({
      s: arr[start],
      m: arr[middle],
      e: arr[end],
      start,
      middle,
      end,
    });

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
};
