/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let scount = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[scount] === t[i]) scount++;
    }
    return scount === s.length;
};