//Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1

var firstMissingPositive = function(nums) {
    let next = 1;
    let index = 0;
    while(index < nums.length) {
        if(nums[index] == next) {
            next += 1;
            index = 0;
        } else {
            index += 1;
        }
    }
    return next;
};
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([1,2,0]));
