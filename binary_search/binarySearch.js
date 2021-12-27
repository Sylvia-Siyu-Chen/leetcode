/*
704. Binary Search 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
*/

const search = function(nums, target){
    const len = nums.length;
    const half = Math.floor(len/2);
    const pivot = nums[half];
    if(pivot === target) return pivot;
    if(pivot > target) return helper(0, half-1,nums, target);
    else return helper(half+1, len-1, nums, target);
 };

 const helper = function(start,end,nums,target){
     const half = Math.floor((end + start) / 2);
     const pivot = nums[half];
    //  console.log(pivot, start, end);
     if(pivot === target) return half;
     else{
         if(end === start) return -1;
         if(pivot > target){
             return helper(start, half, nums, target);
         }
         else{
             return helper(half,end,nums,target);
         }
     }
 }



console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],-2))
console.log(search([-1,0,3,5,9,12],2))