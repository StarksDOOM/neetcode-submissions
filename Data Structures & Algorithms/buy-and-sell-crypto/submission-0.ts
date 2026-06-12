class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Start your baseline buy-in at the very first day's price
        let minPrice = prices[0]; 
        
        // Start your record profit at 0 (since no trades have happened yet)
        let maxProfit = 0;

        // Loop through the prices day by day starting from Day 1
        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];

            if( currentPrice < minPrice ) {
                minPrice = currentPrice;
            } 

            if( (currentPrice - minPrice ) > maxProfit) {
                maxProfit = currentPrice - minPrice;
            }
        }

        return maxProfit;
    }
}
