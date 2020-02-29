const getters = {
  getBaseAmount: state => state.baseAmount,
  getBaseCurrency: state => state.baseCurrency,
  getBaseCurrencyList: state => state.baseCurrencyList,

  getTargetAmount: state => state.targetAmount,
  getTargetCurrency: state => state.targetCurrency,
  getTargetCurrencyList: state => state.targetCurrencyList,

  getOutput: state => state.output,
};

export default getters;