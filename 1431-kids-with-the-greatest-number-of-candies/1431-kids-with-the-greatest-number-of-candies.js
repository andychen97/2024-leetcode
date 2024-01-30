/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highest = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] >= highest) highest = candies[i];
    }
    
    let arr = [];
    for (let j = 0; j < candies.length; j++) {
        if (candies[j] + extraCandies >= highest) arr.push(true);
        else arr.push(false);
    }
    return arr;
};