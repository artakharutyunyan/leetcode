var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];

    if (current < minPrice) {
      minPrice = current;
    }

    if (current - minPrice > maxProfit) {
      maxProfit = current - minPrice;
    }
  }

  return maxProfit;
};
