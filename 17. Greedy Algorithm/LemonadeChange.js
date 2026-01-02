/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let wallets = [0, 0]; // $5 count, $10 count

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      ++wallets[0]; // increasing count of $5 notes
    } else if (bills[i] === 10) {
      ++wallets[1]; // increasing count of $10 note
      --wallets[0]; // decreasing count of $5 note
    } else if (bills[i] === 20) {
      if (wallets[1]) {
        --wallets[1];
        --wallets[0];
      } else {
        wallets[0] = wallets[0] - 3;
      }
    }

    if (wallets[0] < 0) return false;
  }
  return true;
};
