var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode();
  let carry = 0;
  let currentNode = dummyHead;

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    carry = Math.floor(sum / 10);

    currentNode.next = new ListNode(sum % 10);

    currentNode = currentNode.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummyHead.next;
};
