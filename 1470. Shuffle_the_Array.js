/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var output = [];

    for(i = 0; i< n; i++){
        output.push(nums[i]);
        output.push(nums[i+n]);
    }

    return output;
};
