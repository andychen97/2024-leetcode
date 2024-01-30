/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highest = Math.max(...candies);
    let arr = [];
    for (let i = 0; i < candies.length; i++) {
        arr.push(candies[i] + extraCandies >= highest);
    }
    return arr;
};