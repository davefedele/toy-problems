/**
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){
    var value1 = addLinkedListValues(l1, []);
    var value2 = addLinkedListValues(l2, []);

    var result = parseInt(value1.join('')) + parseInt(value2.join(''));
    console.log('result is ', result);
    var resultLinkedList = numberToLinkedList(result);
    
    return resultLinkedList;
};

function addLinkedListValues( node, arr ){
    arr.unshift(node.val);
    if( node.next !== null ) {
        addLinkedListValues(node.next, arr);   
    }
    return arr;
}

function numberToLinkedList( num ) {
    var arr = num.toString().split('');
    
    var resultLinkedList = new ListNode(parseInt(arr[arr.length-1]));
    arr.pop();
    
    var arrayToLinkedList = function( arr, node ) {
        if( arr.length !== 0 ) {
            console.log(arr[arr.length-1]);
            node.next = new ListNode(parseInt(arr[arr.length-1]));
            arr.pop();
            arrayToLinkedList(arr, node.next);
        }
    };
    
    arrayToLinkedList(arr, resultLinkedList);
    
    return resultLinkedList;
}