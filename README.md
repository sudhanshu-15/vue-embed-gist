# vue-embed-gist

[![NPM version](https://img.shields.io/npm/v/vue-embed-gist.svg?style=flat)](https://npmjs.com/package/vue-embed-gist) [![NPM downloads](https://img.shields.io/npm/dm/vue-embed-gist.svg?style=flat)](https://npmjs.com/package/vue-embed-gist) [![CircleCI](https://circleci.com/gh/sudhanshu-15/vue-embed-gist/tree/master.svg?style=shield)](https://circleci.com/gh/sudhanshu-15/vue-embed-gist/tree/master)

Vue component to embed Github Gists, inspired by Blair Vanderhoof's gist-embed.

## Install

```bash
yarn add vue-embed-gist
```
or
```bash
npm install --save vue-embed-gist
```

<!-- CDN: [UNPKG](https://unpkg.com/vue-embed-gist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-embed-gist/) (available as `window.VueEmbedGist`) -->

## Usage

```vue
<template>
  <vue-embed-gist></vue-embed-gist>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
  components: {
    VueEmbedGist
  }
}
</script>
```

## License

MIT &copy; [Sudhanshu Siddh](www.ssiddh.me)
