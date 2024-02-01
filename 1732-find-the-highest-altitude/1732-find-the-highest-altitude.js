/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let starting = 0;
    for (let i = 0; i < gain.length; i++) {
        if (starting + gain[i] > highest) {
            highest = starting + gain[i];
        }
        starting += gain[i];
    }
    return highest;
};