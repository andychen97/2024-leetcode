/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let removeSpace = s.trim().split(' ');
    return removeSpace[removeSpace.length - 1].length;
};