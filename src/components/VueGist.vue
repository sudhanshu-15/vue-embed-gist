<template>
  <div>
    <app-gist-core
      v-if="!gistError"
      :gist-div="gistData"
    />
    <slot v-else>
      <p class="gist-error">Error fetching the gist</p>
    </slot>
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
      gistError: false,
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
  created() {
    this.getGistData(this.gistId);
  },
  methods: {
    getGistData(gistId) {
      jsonp(this.fullUrl, { timeout: 20000 }, (err, response) => {
        if (err) {
          this.gistError = true;
          console.log(err);
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

.gist-error {
  padding: 0.5rem 1rem;
  background: #ffdfe2;
  color: #8e0000;
  border-radius: 5px;
}
</style>
