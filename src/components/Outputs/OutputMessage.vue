<template>
  <div>
    <span>{{baseAmount}} {{rate.baseCurrency}} {{equals}}</span>
    <h2>{{targetAmount}} {{rate.targetCurrency}}</h2>
  </div>
</template>

<script>
import string from '../../common/translations/selectTranslation';
export default {
    name: 'OutputMessage',
    props: [ 'msgObj' ],
    data() {
      const { baseAmount, rate, targetAmount } = this.msgObj
      return {
        baseAmount,
        equals: string.EQUALS,
        rate,
        targetAmount
      }
    }
  }
</script>

<style scoped>
h2 {
  margin: 0px 0 20px 0;
}
</style>
