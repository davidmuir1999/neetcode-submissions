/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // If the list is empty, there's no cycle
        if (head === null) return false;

        let slow = head;
        let fast = head;

        // Why check fast AND fast.next?
        // Because fast jumps 2 steps. If fast is at the last node, 
        // trying to jump to fast.next.next will crash the program.
        while (fast !== null && fast.next !== null) {
            slow = slow.next;           // Move 1 step
            fast = fast.next.next;      // Move 2 steps

            // If they are physically standing on the exact same object in memory
            if (slow === fast) {
                return true; 
            }
        }

        // If the fast pointer breaks out of the loop, it hit the end of the line
        return false;
    }
}
