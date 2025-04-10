(() => {
  const calcTotal = (prices: number[]) => {
    return prices.reduce((acum, currentValue) => acum + currentValue, 0);
  }

  console.log(calcTotal([31,32,2]))
})();
