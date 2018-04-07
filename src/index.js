import VueGist from './components/VueGist.vue'
export default {
  name: 'vue-embed-gist',
  props: {
    gistId: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: false
    }
  },
  render(h) {
    return h(VueGist, {
      props: {
        gistId: this.gistId,
        file: this.file
      }
    })
  }
}