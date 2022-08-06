var reverseList = function (head) {
  var newHead = null;
  var tmp = null;
  while (head) {
    tmp = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
  }
  return newHead;
};
