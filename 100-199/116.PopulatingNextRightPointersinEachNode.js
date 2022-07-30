var connect = function (root) {
  let queue = [];

  if (root) queue.push(root);

  while (queue.length > 0) {
    tmp = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      tmp.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (i < len - 1) {
        node.next = queue[0];
      }
    }
  }

  return root;
};
