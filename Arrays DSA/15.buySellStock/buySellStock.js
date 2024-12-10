function buySellStock(stockPrices) {
  let startDate = 0;
  let endDate = 1;
  let maxProfit = 0;
  while (endDate < stockPrices.length) {
    if (stockPrices[endDate] > stockPrices[startDate]) {
      maxProfit = Math.max(
        maxProfit,
        stockPrices[endDate] - stockPrices[startDate]
      );
    } else {
      startDate = endDate;
    }
    endDate++;
  }
  return maxProfit;
}
