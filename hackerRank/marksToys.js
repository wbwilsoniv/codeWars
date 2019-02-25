// https://www.hackerrank.com/challenges/mark-and-toys/problem?
// Given an array of prices and budget (k), return the most amount of toys Mark can buy

// Works!
function maximumToys(prices, k) {
  let sortedPrice = prices.sort((a, b) => a - b);
  let toys = 0;
  let cashLeft = k;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] <= cashLeft) {
      cashLeft = cashLeft - prices[i];
      toys++;
    }
  }
  return toys;
}

maximumToys([3, 7, 2, 9, 4], 15);

function reduce() {
  prices.reduce((budget, itemCost) => {
    if (itemCost < budget) {
      budget = budget - itemCost;
      toys++;
    } else {
      budget = budget;
    }
    return budget, toys;
  }, budget);
  console.log(toys);
}
