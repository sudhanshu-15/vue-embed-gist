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
      class="button" 
      @click="changeGistId">
      <span>Click Me</span>
    </button>
    <vue-embed-gist 
      gist-id="gistIdValue"/>
    
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

body .button {
  width: 400px;
  height: 100px;
  background: #f3f0f1;
  position: relative;
  background: #f3f0f1;
  margin-bottom: 25px;
  border-radius: 32px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
body .button span {
  line-height: 100px;
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: semibold;
}
body .button:nth-child(1) {
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #6f6cde;
}
body .button:nth-child(1):hover {
  opacity: 0.3;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}
body .button:nth-child(1):active {
  opacity: 1;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  color: #79e3b6;
}
body .button:nth-child(2) {
  opacity: 0.3;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #6f6cde;
}
body .button:nth-child(3) {
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  color: #79e3b6;
}
body .button:nth-child(3):hover {
  opacity: 1;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
}

</style>