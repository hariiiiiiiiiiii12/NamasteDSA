// let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];

// const maxProfitBruteForceApproach = (prices) => {
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         let currentProfit = Math.abs(prices[i] - prices[j]);
//         if (currentProfit > profit) {
//           profit = currentProfit;
//         }
//       }
//     }
//   }
//   console.log(profit);
// };

// maxProfitBruteForceApproach(prices);

// ___________________________________________________________________________________________________________

let prices = [7, 6, 4, 8, 1];

const maxProfit = (prices) => {
  let currentProfit = 0;
  let maxProfit = 0;
  let minimum = +Infinity;
  let maximum = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
    }
    currentProfit = Math.abs(minimum - prices[i]);
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
};

console.log(maxProfit(prices));
