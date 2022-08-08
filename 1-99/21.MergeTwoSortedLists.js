var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0);
  let now = head;
  let p1 = l1;
  let p2 = l2;
  while (p1 || p2) {
    if (p1 === null || (p2 !== null && p2.val < p1.val)) {
      now.next = p2;
      p2 = p2.next;
    } else {
      now.next = p1;
      p1 = p1.next;
    }
    now = now.next;
  }
  return head.next;
};
