import fetchData from '../../../helpers/fetchData';
import filterList from '../../../helpers/filterList';
import calculateAmount from '../../../helpers/calculateAmount';

const initializeState = async (context) => {
  const { baseAmount, baseCurrency, targetCurrency } = context.state;
  const fetchedData = await fetchData();

  if (fetchedData?.length === 0) {
    return;
  }

  const baseCurrencyList = filterList(fetchedData, 'baseCurrency');
  const targetCurrencyList = filterList(fetchedData, 'targetCurrency');
  const newOutput = calculateAmount(
    fetchedData,
    baseCurrency,
    targetCurrency,
    baseAmount,
    true
  );

  context.commit('setCurrencyRate', fetchedData);
  context.commit('setBaseCurrencyList', baseCurrencyList);
  context.commit('setTargetCurrencyList', targetCurrencyList);
  context.commit('setTargetAmount', newOutput.value);
  context.commit('setOutput', newOutput);
};

export default initializeState;