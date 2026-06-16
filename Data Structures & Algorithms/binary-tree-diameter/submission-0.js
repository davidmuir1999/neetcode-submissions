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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxLength = 0;

        const nodeDepth = (node) => {
            if (node === null) {
                return 0;
            }

            const left = nodeDepth(node.left);
            const right = nodeDepth(node.right);

            maxLength = Math.max(maxLength, left + right);

            return Math.max(left, right) + 1;
        }
        nodeDepth(root);

        return maxLength;
    }
}
