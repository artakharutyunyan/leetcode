var removeNthFromEnd = function (head, n) {
  let h = new ListNode(0);
  let ll = h;
  let rr = h;

  h.next = head;

  for (let i = 0; i < n + 1; i++) {
    rr = rr.next;
  }

  while (rr !== null) {
    ll = ll.next;
    rr = rr.next;
  }

  ll.next = ll.next.next;

  return h.next;
};
