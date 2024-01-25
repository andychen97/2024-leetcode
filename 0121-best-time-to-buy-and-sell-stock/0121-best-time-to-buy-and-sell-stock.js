/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]; //2
    let maxProfit = 0; //4
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let current = prices[i] - minPrice;
            if (current > maxProfit) maxProfit = current;
        }
    }
    return maxProfit;
};