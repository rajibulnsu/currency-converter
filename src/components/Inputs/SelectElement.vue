<template>
  <div>
    <select class="select__menu" v-model="selectedAmount">
      <option v-for="(item,i) in itemList" :key="i">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectElement',
  props: ['selectedItem', 'itemList'],
  computed: {
    selectedAmount: {
      get() {
        return this.selectedItem;
      },
      set(value) {
        this.$emit('onSelectChange', value);
      }
    }
  }
}
</script>

<style scoped>
.select__menu{
  width: 175px;
  height: 45px;
  padding: 10px;
  -webkit-appearance: none;
  font-size: 16px;
  border: 1px solid #DFE1E5;
  background: url(https://www.ellis.co.nz/resources/assets/images/dropdown_icon.png) 96% / 10% no-repeat #fff;
  margin: 5px;
}
</style>