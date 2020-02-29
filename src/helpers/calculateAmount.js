const calculateAmount = (
  currencyRates,
  baseCurrency,
  targetCurrency,
  inputAmount,
  isTargetAmount
) => {
  const findExchangeRate = currencyRates.find(
    item => item.baseCurrency === baseCurrency
      && item.targetCurrency === targetCurrency
  );

  let result;
  if (isTargetAmount) {
    result = ((findExchangeRate?.value ?? 0) * inputAmount).toFixed(2);
  } else {
    result = ((1/findExchangeRate?.value ?? 0) * inputAmount).toFixed(2);
  }

  return {
    baseAmount: isTargetAmount ? inputAmount : result,
    targetAmount: isTargetAmount ? result: inputAmount,
    rate: findExchangeRate ,
    value: result
  };
};

export default calculateAmount;