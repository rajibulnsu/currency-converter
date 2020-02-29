import calculateAmount from '../../../helpers/calculateAmount';

const calculateCurrency = (context, payload) => {
  const {
    baseAmount,
    baseCurrency,
    targetCurrency,
    currencyRates
  } = context.state;

  const {
    baseAmountInput,
    targetAmountInput,
    selectedBaseCurrency,
    selectedTargetCurrency
  } = payload;

  let newOutput;

  if (baseAmountInput) {
    newOutput = calculateAmount(
      currencyRates,
      baseCurrency,
      targetCurrency,
      baseAmountInput,
      true
    );
    context.commit('setBaseAmount', baseAmountInput);
    context.commit('setTargetAmount', newOutput.value);
  }

  if (targetAmountInput) {
    newOutput = calculateAmount(
      currencyRates,
      baseCurrency,
      targetCurrency,
      targetAmountInput,
      false
    );
    context.commit('setTargetAmount', targetAmountInput);
    context.commit('setBaseAmount', newOutput.value);
  }

  if (selectedBaseCurrency) {
    newOutput = calculateAmount(
      currencyRates,
      selectedBaseCurrency,
      targetCurrency,
      baseAmount,
      true
    );
    context.commit('setBaseCurrency', selectedBaseCurrency);
    context.commit('setTargetAmount', newOutput.value);
  }

  if (selectedTargetCurrency) {
    newOutput = calculateAmount(
      currencyRates,
      baseCurrency,
      selectedTargetCurrency,
      baseAmount,
      true
    );
    context.commit('setTargetCurrency', selectedTargetCurrency);
    context.commit('setTargetAmount', newOutput.value);
  }

  context.commit('setOutput', newOutput);
};

export default calculateCurrency;