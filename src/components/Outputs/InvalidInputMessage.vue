<template>
  <div>
    <h3>{{ errorMessage }}</h3>
  </div>
</template>

<script>
import string from '../../common/translations/selectTranslation';
export default {
  name: 'InvalidInputMessage',
  props: {
    msg: String
  },
  data() {
    return {
      errorMessage: string.NO_RATE_FOUND
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 20px 10px 20px 10px;
  color: #cd5c5c;
}
</style>
