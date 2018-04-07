<template>
  <div>
    <app-gist-core :gist-div="gistData"/>
  </div>
</template>

<script>
var gistUrl = 'https://gist.github.com/'
var data = {}

import VueGistCore from './VueGistCore.vue'
import $ from 'jquery'
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
  },
  created () {
      this.getGistData(this.gistId)
  },
  methods: {
      getGistData (gistId) {
          var self = this;
          if(this.file.length > 0){
              data.file = this.file;
          } 
          $.ajax({
              url: gistUrl + gistId + '.json',
              data: data,
              dataType: 'jsonp',
              timeout: 20000,
              success: function(response) {
                  self.gistData = response.div;
              },
              error: function(response) {
                  console.log("error")
              }
          });
      }
  },
}
</script>

<style scoped>
@import url('https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css');
</style>