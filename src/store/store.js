import Vue from 'vue';
import Vuex from 'vuex';
import currencyConverter from './modules/currencyConverter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    currencyConverter,
  }
});

export default store;