/*
704. Binary Search 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
*/

const search = function(nums, target){
    let [left, right] = [0, nums.length -1];
    while(left <= right){
        const median = Math.round((left+right) / 2);
        const pivot = nums[median];
        if(pivot === target) return median;
        else {
            if(pivot < target) left = median +1;
            else right = median -1 
        }
    }
    return -1;

 };



console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],-2))
console.log(search([-1,0,3,5,9,12],12))
console.log(search([5],3))