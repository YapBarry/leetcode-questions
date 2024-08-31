/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Time Complexity O(N)
var invertTree = function(root) {
    if(root == null){
        return root
    }
    // if root has both left and right AND both of them are leaf nodes, swap the child nodes
    if(root.left && root.right){ 
        if((root.left.left == null) && (root.left.right == null) && (root.right.left == null) && (root.right.right) == null){
            [root.left, root.right] = [root.right, root.left]
            return root
        }
    }
    root.left = invertTree(root.left)
    root.right = invertTree(root.right)
    temp = root.left
    root.left = root.right
    root.right = temp
    return root
    

};