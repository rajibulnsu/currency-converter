<template>
  <div>
    <input type="number" class="input__style" min=0 v-model="computedAmount" />
  </div>
</template>

<script>
export default {
  name: 'InputElement',
  props: ['amount'],
  computed: {
    computedAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        this.$emit('inputValue', value);
      }
    }
  }
}
</script>

<style scoped>
.input__style{
  width: 153px;
  height: 23px;
  padding: 10px;
  -webkit-appearance: none;
  font-size: 16px;
  border: 1px solid #DFE1E5;
  border-radius: 5px;
  margin: 5px;
}
</style>