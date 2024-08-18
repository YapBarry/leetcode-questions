/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) time complexity
// 0(1) constant space complexity
var maxProfit = function(prices) {
    let left = 0, right = 1
    let maxProfit = 0
    while(right < prices.length){
        if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
        right += 1    
    }
    return maxProfit
}