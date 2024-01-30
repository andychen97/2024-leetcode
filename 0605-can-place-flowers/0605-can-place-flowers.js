/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;
    for (let i = 0; i < length; i++) {
        if ((i === 0 || flowerbed[i - 1] === 0) && 
            (i === length - 1 || flowerbed[i + 1] === 0) && 
            flowerbed[i] !== 1) {
            flowerbed[i] = 1;
            count++;
        }
    }
    return count >= n;
};