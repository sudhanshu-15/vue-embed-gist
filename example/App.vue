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
  </div>
</template>

<script>
import VueEmbedGist from '../src'

export default {
  components: {
    VueEmbedGist
  }
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