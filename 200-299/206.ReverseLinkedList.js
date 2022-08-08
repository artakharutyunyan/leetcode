var reverseList = function (head) {
  let newHead = null;
  let tmp = null;
  while (head) {
    tmp = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
  }
  return newHead;
};
