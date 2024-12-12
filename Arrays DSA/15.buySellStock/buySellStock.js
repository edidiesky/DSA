function buySellStock(stockPrices) {
  let maxProfit = 0;
  let start = 0;
  let end = 1;
  if (stockPrices.length < 2) {
    return 0;
  }
  while (end < stockPrices.length) {
    if (stockPrices[end] > stockPrices[start]) {
      maxProfit = Math.max(maxProfit, stockPrices[end] - stockPrices[start]);
    } else {
      start = end;
    }
    end++;
  }

  return maxProfit;
}
let prices = [8, 3, 6, 4, 7, 5];
console.log(buySellStock(prices));

