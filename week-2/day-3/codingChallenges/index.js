 //Given a linked list, rotate the list to the right by k places, where k is non-negative.

//Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation: rotate 1 steps to the right: 5->1->2->3->4->NULL rotate 2 steps to the right: 4->5->1->2->3->NULL

// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation: rotate 1 steps to the right: 2->0->1->NULL rotate 2 steps to the right: 1->2->0->NULL rotate 3 steps to the right: 0->1->2->NULL rotate 4 steps to the right: 2->0->1->NULL -->


 function rotateRight(head, k) {
    if (head == null || head.next == null)
        return head
    let len = 1, tmp = head, tmp1 = head;
    while (tmp.next != null) {
        tmp = tmp.next
        len++
    }
    let step = len - (k % len) - 1
    while (step > 0) {
        tmp1 = tmp1.next
        step--
    }
    tmp.next = head
    let tmp2 = tmp1.next
    tmp1.next = null
    return tmp2
}


console.log(rotateRight([1,2,3,4,5] , 2))
