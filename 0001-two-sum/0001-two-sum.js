/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create a map
    let map = {};
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
        // create a variable to store value of target - nums[i]
        let possible = target - nums[i];
        // check map to see if variable value exist
        // if not then store key as nums[i] and value as i
        if (map[possible] === undefined) map[nums[i]] = i;
        // if it does then return i and map[variable value]
        else return [i, map[possible]];
    }
};