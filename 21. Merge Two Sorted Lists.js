/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // if both lists are empty
    if(!list1 && !list2){
        return list1
    }
    // if only list1 is empty
    if(!list1){
        return list2
    }
    // if only list2 is empty
    if(!list2){
        return list1
    }
    dummy = new ListNode(0);
    // pointer to keep track of the start of the sorted list
    head = dummy
    
    // while we have not reached the end of either lists
    while(list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }
    // if one of the list has been fully iterated through, attach the other list to the dummy
    if(list1 !== null){
        dummy.next = list1
    } else {
        dummy.next = list2
    }
    return head.next

};