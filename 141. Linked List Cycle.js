/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// O(n) time complexity and O(1) space complexity

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    if(head == null){return false}
    while(fast.next  && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;

};