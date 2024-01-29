/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitted = s.split(' ');
    let newS = [];
    for (let i = splitted.length - 1; i >= 0; i--) {
        if (splitted[i] !== '') newS.push(splitted[i]);
    }
    return newS.join(' ');
};