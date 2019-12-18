var postorderTraversalHelper = function(root, arr) {
    if (root) {
        postorderTraversalHelper(root.left,arr);
        postorderTraversalHelper(root.right,arr);
        postorderTraversalHelper(null,arr.push(root.val));
    }
};
var postorderTraversal = function(root) {
    var arr=[];
    postorderTraversalHelper(root,arr);
    return arr;
};