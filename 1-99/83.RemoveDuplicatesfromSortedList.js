var deleteDuplicates = function (head) {
  let now = head;
  while (now) {
    if (now.next && now.next.val === now.val) {
      now.next = now.next.next;
    } else {
      now = now.next;
    }
  }
  return head;
};
