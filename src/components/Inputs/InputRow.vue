<template>
  <div class="inpur__row">
    <InputElement :amount="amount" @inputValue="listenInputChange" />
    <SelectElement :itemList="itemList" :selectedItem="selectedItem" @onSelectChange="listenSelectChange"/>
  </div>
</template>

<script>
import SelectElement from './SelectElement.vue';
import InputElement from './InputElement.vue';

export default {
  name: 'InputRow',
  props: ['amount', 'itemList', 'selectedItem'],
  components: {
    SelectElement,
    InputElement,
  },
  methods: {
    listenInputChange(value){
      this.$emit('newInputValue', value);
    },
    listenSelectChange(value){
      this.$emit('newSelectedItem', value);
    }
  }
}
</script>

<style>
  .inpur__row{
    display: inline-flex;
  }
</style>
