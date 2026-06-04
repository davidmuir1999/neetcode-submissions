public class Solution {
    public int MaxProfit(int[] prices) {
        int minBuyPrice = int.MaxValue;
        int maxProfit = 0;

        for(int i = 0; i < prices.Length; i++){
            if(prices[i] < minBuyPrice){
                minBuyPrice = prices[i];
            } else {
                int currentProfit = prices[i] - minBuyPrice;
                maxProfit = Math.Max(maxProfit, currentProfit);
            }
        }
        return maxProfit;
    }
}
