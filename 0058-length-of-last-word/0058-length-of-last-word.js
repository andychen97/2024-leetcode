/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let removeSpace = s.split(' ');
    removeSpace = removeSpace.filter(Boolean);
    return removeSpace[removeSpace.length - 1].length;
};