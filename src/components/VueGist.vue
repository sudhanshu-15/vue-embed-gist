<template>
  <div>
    <app-gist-core :gist-div="gistData" />
  </div>
</template>

<script>
import VueGistCore from "./VueGistCore.vue";
import jsonp from 'jsonp';

export default {
  components: {
    appGistCore: VueGistCore
  },
  props: {
    gistId: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      gistData: "loading...",
      gistUrl: "https://gist.github.com/"
    };
  },
  watch: {
    gistId: {
      handler: function () {
        this.$data.gistData = "loading...";
        this.getGistData();
      },
      deep: true,
    },
  },
  computed: {
    url() {
      return `${this.gistUrl}${this.gistId}.json`
    },
    params() {
      if (this.file.length > 0) {
        return `file=${this.file}`;
      }
      return ''
    },
    fullUrl(){
      return `${this.url}?${this.params}`
    }
  },
    created() {
    this.getGistData(this.gistId);
  },
  methods: {
    getGistData(gistId) {
      jsonp(this.fullUrl,{ timeout: 20000 }, (err, response) => {
        if (err) {
            console.error(err.message);
            return
        }
          this.gistData = response.div;
        })
    }
  }
};
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>