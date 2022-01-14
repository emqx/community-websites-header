# community-websites-header

🌌 EMQ Community Websites Header.

## Usage

### Install package

```shell
yarn add @emqx/community-websites-header
```

### Nuxt

`EMQHeader.ts`

```ts
import Vue from 'vue'
import EMQHeader from '@emqx/community-websites-header'

Vue.use(EMQHeader)
```

`nuxt.config.ts`

```ts
{
    plugins: [{ src: '~/plugins/EMQHeader', ssr: false },],
}
```

`default.vue`

```ts
<client-only>
    <EMQHeader :lang="$i18n.locale" product="emqx" />
</client-only>
```

### Vuepress

`enhanceApp.js`

```js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {

    ...

  Vue.mixin({
    mounted() {
      const EMQHeader = require('@emqx/community-websites-header')
      Vue.use(EMQHeader)
    },
  })
}
```

`Layout.vue`

```html
<EMQHeader :lang="$lang === 'en' ? 'en' : 'zh'" product="emqx" />
```

### Attributes

| Attributes | Description       | Type   | Accepted Values                | Default |
| ---------- | ----------------- | ------ | ------------------------------ | ------- |
| lang       | Page Language     | string | en / zh                        | en      |
| product    | Show Github Stars | string | emqx / neuron / nanomq / mqttx | —       |
