<template>
  <div>
    <template v-if="gistErr">
      <img 
        id="notFound" 
        height="100%"
        width="100%"
        src="https://user-images.githubusercontent.com/883233/102043641-d4817580-3d89-11eb-885d-2786373932d4.png" 
        alt="404">
    </template>
    <template v-else>
      <app-gist-core :gist-div="gistData" />
    </template>
  </div>
</template>

<script>
import VueGistCore from "./VueGistCore.vue";
import jsonp from "jsonp";

export default {
  components: {
    appGistCore: VueGistCore,
  },
  props: {
    gistId: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      gistData: "loading...",
      gistUrl: "https://gist.github.com/",
      gistErr: false,
    };
  },
  computed: {
    url() {
      return `${this.gistUrl}${this.gistId}.json`;
    },
    params() {
      if (this.file.length > 0) {
        return `file=${this.file}`;
      }
      return "";
    },
    fullUrl() {
      return `${this.url}?${this.params}`;
    },
  },
  watch: {
    gistId: {
      handler: function () {
        this.$data.gistErr = false;
        this.$data.gistData = "loading...";
        this.getGistData();
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getGistData() {
      jsonp(this.fullUrl, { timeout: 20000 }, (err, response) => {
        if (err) {
          this.$data.gistErr = true;
          return;
        }
        this.gistData = response.div;
      });
    },
  },
};
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
