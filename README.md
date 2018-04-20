# vue-embed-gist

[![NPM version](https://img.shields.io/npm/v/vue-embed-gist.svg?style=flat)](https://npmjs.com/package/vue-embed-gist) [![NPM downloads](https://img.shields.io/npm/dm/vue-embed-gist.svg?style=flat)](https://npmjs.com/package/vue-embed-gist) [![CircleCI](https://circleci.com/gh/sudhanshu-15/vue-embed-gist/tree/master.svg?style=shield)](https://circleci.com/gh/sudhanshu-15/vue-embed-gist/tree/master)

Vue component to embed Github Gists, inspired by Blair Vanderhoof's gist-embed. (https://github.com/blairvanderhoof/gist-embed)

## Demo
[Demo of vue-embed-gist](https://sudhanshu-15.github.io/vue-embed-gist)

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
  <vue-embed-gist 
      gist-id="your gist id" 
      file="your file name"/>
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

### Props

#### gist-Id
**Type:** `String`
**Required:** `true`

:octocat: Github gist Id

#### file
**Type:** `String`
**Required:** `false` 

File name in the gist

## License

MIT &copy; [Sudhanshu Siddh](www.ssiddh.me)
