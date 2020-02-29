<template>
  <div>
    <h1>{{ headerMsg }}</h1>
  </div>
</template>

<script>
import string from '../common/translations/selectTranslation';
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      headerMsg : string.CURRENCY_CONVERTER
    }
  }
}
</script>

<style>
</style>
