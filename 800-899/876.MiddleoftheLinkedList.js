var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (!fast.next) break;
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
