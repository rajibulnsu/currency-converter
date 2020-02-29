
import { BASE_CURRENCY, TARGET_CURRENCY } from '../../common/constants';

const state = {
  baseAmount: 1,
  targetAmount: 0,
  baseCurrency: BASE_CURRENCY,
  targetCurrency: TARGET_CURRENCY,
  baseCurrencyList: [],
  targetCurrencyList: [],
  currencyRates: [],
  output: {}
};

export default state;