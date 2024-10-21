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
 * @return {number}
 */
// O(n) time and space complexity
var maxDepth = function(root) {
    // DFS
    // base case
    if(root == null){
        return 0
    } else {
        return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
    }
};

// var maxDepth = function(root) {
//     // BFS
//     if(root == null){
//         return 0
//     }
//     let level = 0
//     let queue = [root]
//     while(queue.length){
//         let len = queue.length
//         for(i=0; i< len; i++){
//             let popped = queue.shift()
//             if(popped.left){
//                 queue.push(popped.left)
//             }
//             if(popped.right){
//                 queue.push(popped.right)
//             }            
//         }
//         level+= 1
//     }
//     return level
// };