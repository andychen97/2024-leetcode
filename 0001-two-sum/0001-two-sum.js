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
        // create a temp variable to check value of target - nums[i]
        let possible = target - nums[i];
        // check map properties if temp value exist
        // if not then store property as nums[i] and value as i
        if (map[possible] === undefined) map[nums[i]] = i;
        // if exist then return both indexes
        else return [i, map[possible]];
    }
};