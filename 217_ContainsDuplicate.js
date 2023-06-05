/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let memory = {};
    for (i=0; i<nums.length; i++){
        if(memory[nums[i]] === undefined){
            memory[nums[i]] = "haha";
        } else{
            return true;
        }
    }
    return false;
};
