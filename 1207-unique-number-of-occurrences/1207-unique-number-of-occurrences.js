/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) map[arr[i]] = 1;
        else map[arr[i]]++;
    }
    let values = Object.values(map);
    return values.length == new Set(values).size;
};