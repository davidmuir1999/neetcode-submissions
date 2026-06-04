class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuyPrice = Infinity;
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++){
            if(prices[i] < minBuyPrice){
                minBuyPrice = prices[i];
            } else {
                const currentProfit = prices[i] - minBuyPrice;
                maxProfit = Math.max(maxProfit, currentProfit);
            }
        }
        return maxProfit;
    }
}
