<template>
  <div>
    <InvalidInput
      v-if="!outputData.rate"
      msg="No exchange rate found for selected currency"
    />
    <OutputMessage v-else :msgObj="outputData"/>
  </div>
</template>

<script>
  import InvalidInput from './InvalidInputMessage.vue';
  import OutputMessage from './OutputMessage.vue';

  export default {
    name: 'OutputRow',
    props: [ 'outputData' ],
    components: {
      InvalidInput,
      OutputMessage
    }
  }
</script>

<style>
</style>
