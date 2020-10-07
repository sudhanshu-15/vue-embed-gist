<template>
  <div>
    <template v-if="gistErr">
      <div class="alert alert-danger" role="alert">
        <i class="material-icons">error</i>
        Oops! We hit a block, Please check the gist-id/filename.
      </div>
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

.alert {
  min-width: 64px;
  padding: 12px;
  margin-bottom: 18px;
  border: 2px solid transparent;
  border-radius: 3px;
}
.alert-danger {
  background-color: #e27c79;
  border-color: #dd6864;
  color: #801915;
}
.alert i {
  float: left;
  vertical-align: middle;
  font-size: 18px;
}
.shadow-1, .alert {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.shadow-2, .alert:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

</style>
