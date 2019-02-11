// https://www.hackerrank.com/challenges/mark-and-toys/problem?
// Given an array of prices and budget (k), return the most amount of toys Mark can buy
function maximumToys(prices, k) {
  let toys = 0;
  let budget = k;
  //   for (let i = 0; i <= prices.length - 1; i++) {
  //     let cost = prices[i];
  //     if (cost < budget) {
  //       budget = budget - cost;
  //       toys++;
  //       console.log(budget, toys);
  //     }
  //   }
  //   return toys;
  //   console.log(toys);
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

maximumToys([3, 7, 2, 9, 4], 15);
