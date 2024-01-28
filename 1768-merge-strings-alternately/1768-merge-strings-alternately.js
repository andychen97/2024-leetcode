/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newString = '';
    let longest = Math.max(word1.length, word2.length);
    for (let i = 0; i < longest; i++) {
        if (word1[i] !== undefined) newString += word1[i];
        if (word2[i] !== undefined) newString += word2[i];
    }
    return newString;
};