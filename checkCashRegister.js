function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  // Calculate the change due
  let changeDue = cash - price;

  // Calculate the total cash in the drawer
  let totalInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);

  // Check if the drawer has enough cash and if it can provide the exact change
  if (changeDue > totalInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue === totalInDrawer) {
    return { status: "CLOSED", change: cid };
  } else {
    // Calculate the change to be given
    let changeToGive = [];

    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const [unit, value] = currencyUnits[i];
      const availableAmount = cid[i][1];
      const maxUnits = Math.floor(availableAmount / value);
      const returnedUnits = Math.min(maxUnits, Math.floor(changeDue / value));
      const returnedAmount = returnedUnits * value;

      if (returnedUnits > 0) {
        changeToGive.push([unit, returnedAmount]);
        changeDue = parseFloat((changeDue - returnedAmount).toFixed(2));
      }
    }

    // Check if exact change cannot be given
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeToGive };
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);