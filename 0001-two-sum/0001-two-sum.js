/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let possible = target - nums[i];
        if (map[possible] === undefined) map[nums[i]] = i;
        else return [i, map[possible]];
    }
};