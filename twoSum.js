/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = new Map();
    let result = [];
    for(let i = 0; i < nums.length; i++) {
       let complement = target - nums[i];
        if(temp.has(complement)) {
            result.push(temp.get(complement));
            result.push(i);
            return result;
        }else {
            temp.set(nums[i], i);   
        }   
    }
};