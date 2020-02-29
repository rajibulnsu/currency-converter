<template>
  <div id="app">
    <Header :msg="'Currency Converter'"/>
    <OutputMessage :outputData="getOutput"/>
    <section>
      <InputRow
        :amount="getBaseAmount"
        @newInputValue="updateBaseAmount"
        
        :itemList="getBaseCurrencyList"
        :selectedItem="getBaseCurrency"
        @newSelectedItem="updateBaseCurrency"
      />
      <InputRow
        :amount="getTargetAmount"
        @newInputValue="updateTargetAmount"

        :itemList="getTargetCurrencyList"
        :selectedItem="getTargetCurrency"
        @newSelectedItem="updateTargetCurrency"
      />
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import OutputMessage from './components/Outputs/OutputRow.vue';
import InputRow from './components/Inputs/InputRow.vue';

import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    OutputMessage,
    InputRow
  },
  computed: {
    ...mapGetters([
      'getBaseAmount',
      'getBaseCurrency',
      'getBaseCurrencyList',

      'getTargetAmount',
      'getTargetCurrency',
      'getTargetCurrencyList',

      'getOutput'
    ])
  },
  methods:{
    ...mapActions([
      'calculateCurrency'
    ]),
    updateBaseAmount (value){
      this.calculateCurrency({baseAmountInput: value});
    },
    updateTargetAmount (value){
      this.calculateCurrency({targetAmountInput: value});
    },
    updateBaseCurrency (value){
      this.calculateCurrency({selectedBaseCurrency: value});
    },
    updateTargetCurrency (value){
      this.calculateCurrency({selectedTargetCurrency: value});
    }
  },
  beforeMount() {
    this.$store.dispatch('initializeState');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  display: grid;
  justify-content: center;
}
</style>
