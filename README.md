# emq-header

🌌 EMQ Header.

## Usage

### Install package

```shell
yarn add @emqx/emq-header
```

`EMQHeader.ts`

```ts
import Vue from 'vue'
import EMQHeader from 'emqx-header'

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
    <EMQHeader :lang="$i18n.locale" />
</client-only>
```
