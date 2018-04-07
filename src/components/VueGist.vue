<template>
  <div>
    <app-gist-core :gist-div="gistData"/>
  </div>
</template>

<script>
import VueGistCore from './VueGistCore.vue'
export default {
  components: {
      appGistCore: VueGistCore,
  },
  props: {
      gistId: {
          type: String,
          required: true
      },
      file: {
          type: String,
          required: false,
          default: ''
      }
  },
  data() {
      return {
          gistData: 'loading...',
      }
  }
}
</script>

<style scoped>
@import url('https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css');
</style>
