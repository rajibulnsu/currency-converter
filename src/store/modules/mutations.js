const mutations = {
  setBaseAmount: (state, baseAmount) => state.baseAmount = baseAmount,
  setBaseCurrency: (state, baseCurrency) => state.baseCurrency = baseCurrency,
  setBaseCurrencyList: (state, baseCurrencyList) => state.baseCurrencyList = baseCurrencyList,

  setTargetAmount: (state, targetAmount) => state.targetAmount = targetAmount,
  setTargetCurrency: (state, targetCurrency) => state.targetCurrency = targetCurrency,
  setTargetCurrencyList: (state, targetCurrencyList) => state.targetCurrencyList = targetCurrencyList,

  setCurrencyRate: (state, currencyRates) => state.currencyRates = currencyRates,
  setOutput: (state, output) => state.output = output,
};

export default mutations;