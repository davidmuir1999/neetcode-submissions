/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;

        const checkDepth = (node) => {
            if (node === null) return 0;

            const left = checkDepth(node.left);
            const right = checkDepth(node.right);

            if (Math.abs(left - right) > 1){
                balanced = false;
            }

            return Math.max(left,right) + 1;
        }
        checkDepth(root);

        return balanced;
    }
}
