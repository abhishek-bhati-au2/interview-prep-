var preorderTraversal = function(root) {
    if (root === null) return [];
  var result = [];
  result.push(root.val);
  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));
  return result;
};