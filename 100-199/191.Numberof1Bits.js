var hammingWeight = function (n) {
  let counter = 0;
  let arr = n.toString(2).split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      counter++;
    }
  }
  return counter;
};
