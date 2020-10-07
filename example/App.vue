<template>
  <div 
    id="app" 
    class="div-style">
    <h2>vue-embed-gist usage</h2>
    <br>
    <h3>Install vue-embed-gist using npm</h3>
    <vue-embed-gist 
      gist-id="8bab656a910829ab9c32d7700c570be6"
      file="npminstall.sh"/>
    <br>
    <h3>Usage</h3>
    <vue-embed-gist 
      gist-id="8bab656a910829ab9c32d7700c570be6" 
      file="usage.vue"/>
    <br>
    <h2>vue-embed-gist example</h2>
    <br>
    <h3>With gistId</h3>
    <vue-embed-gist 
      gist-id="8bab656a910829ab9c32d7700c570be6"/>
    <br>
    <h3>With gistId and file</h3>
    <vue-embed-gist 
      gist-id="8bab656a910829ab9c32d7700c570be6" 
      file="index.js"/>
    <br>
    <h3>Change the gist id dynamically</h3>
    <button  
      @click="changeGistId">
      <span>Click Me</span>
    </button>
    <vue-embed-gist 
      :gist-id="gistIdValue"/>

    <h3>Error Component</h3>
    <vue-embed-gist 
      :gist-id="gistIdValue"
      file="index.js"/>
    
  </div>
</template>

<script>
import VueEmbedGist from '../src'

export default {
  components: {
    VueEmbedGist
  },
  data() {
    return {
      gistIdValue : '0c9be8f1974d126b38206380c9544592',
    }
  },
  methods: {
    changeGistId(){
      if(this.$data.gistIdValue === '0c9be8f1974d126b38206380c9544592'){
        this.$data.gistIdValue = 'f284fdc92dd66f8f16e6dee335ff3cef';
      }else{
        this.$data.gistIdValue = '0c9be8f1974d126b38206380c9544592';
      }
    }
  },
}
</script>

<style scoped>
.div-style {
  width: 50%;
  align-self: center;
  align-content:center;
  text-align: center;
  margin: 0 auto; 
}
</style>