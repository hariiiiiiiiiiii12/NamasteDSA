var canCompleteCircuit = function (gas, cost) {
  let currentTank = 0; // gas in the car while moving from the chosen start
  let totalTank = 0; // overall gas surplus or deficit for the full circuit
  let startStation = 0; // possible starting index

  for (let i = 0; i < gas.length; i++) {
    let netGas = gas[i] - cost[i]; // gas gained or lost at this station

    currentTank += netGas;
    totalTank += netGas;

    // If we can't reach next station
    if (currentTank < 0) {
      startStation = i + 1; // try next station
      currentTank = 0; // reset tank
    }
  }

  // If total gas is insufficient, no solution exists
  return totalTank < 0 ? -1 : startStation;
};
