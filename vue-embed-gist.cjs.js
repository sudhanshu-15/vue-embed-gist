'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var $ = _interopDefault(require('jquery'));

var VueGistCore = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('p', { domProps: { "innerHTML": _vm._s(_vm.gistDiv) } })]);
    }, staticRenderFns: [], _scopeId: 'data-v-8cf532b0',
    props: {
        gistDiv: {
            type: String,
            required: true
        }
    }
};

var gistUrl = 'https://gist.github.com/';
var data = {};

var VueGist = { render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('app-gist-core', { attrs: { "gist-div": _vm.gistData } })], 1);
    }, staticRenderFns: [], _scopeId: 'data-v-aefc6a2e',
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
            default: ''
        }
    },
    data: function data() {
        return {
            gistData: 'loading...'
        };
    },
    created: function created() {
        this.getGistData(this.gistId);
    },
    methods: {
        getGistData: function getGistData(gistId) {
            var self = this;
            if (this.file.length > 0) {
                data.file = this.file;
            }
            $.ajax({
                url: gistUrl + gistId + '.json',
                data: data,
                dataType: 'jsonp',
                timeout: 20000,
                success: function (response) {
                    self.gistData = response.div;
                },
                error: function (response) {
                    console.log("error");
                }
            });
        }
    }
};

var index = {
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
  render: function render(h) {
    return h(VueGist, {
      props: {
        gistId: this.gistId,
        file: this.file
      }
    });
  }
};

module.exports = index;
