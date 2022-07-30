var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (j > i) {
    let temp1 = s[i];
    let temp2 = s[j];
    let transfer = temp1;
    temp1 = temp2;
    delete s[j];
    s[j] = transfer;
    s[i] = temp1;
    i++;
    j--;
  }
  return s;
};
