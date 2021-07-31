<template>
  <section id="brand-header">
    <div class="navbar-brand container">
      <a class="navbar-item logo" target="_blank" :href="`${baseUrl}`">
        <img loading="lazy" :alt="translations.emqLogoAlt" src="./assets/images/brand-header/emq-logo.png" />
      </a>
      <template v-for="(navs, index) in navsData">
        <a v-if="!navs.children" :key="index" class="navbar-item" target="_blank" :href="navs.link">
          {{ navs.text }}
        </a>
        <div v-else :key="index" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">{{ navs.text }} </a>
          <div class="navbar-dropdown moblie">
            <a v-for="item in navs.children" :key="item.link" class="navbar-item" target="_blank" :href="item.link">
              {{ item.text }}
            </a>
          </div>
          <div class="navbar-dropdown desktop">
            <div class="columns is-gapless">
              <div class="nav-list column">
                <div class="columns is-multiline is-gapless">
                  <div v-for="item in navs.children" :key="item.link" class="column is-6">
                    <a target="_blank" :href="item.link">
                      <div class="product-box">
                        <div :class="['navbar-icon', item.icon]"></div>
                        <div class="product-content">
                          <span class="product-title">{{ item.text }}</span>
                          <p>{{ item.summary }}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a target="_blank" :href="navs.cloudPromo.link">
                  <div class="brand-cloud columns is-gapless is-vcentered">
                    <div class="column">
                      <div class="p-5">
                        <p class="mb-4">
                          EMQ X Cloud
                          <br />
                          {{ navs.cloudPromo.title }}
                        </p>
                        <button class="button is-gradient py-2 is-size-7">{{ navs.cloudPromo.buttonText }}</button>
                      </div>
                    </div>
                    <div class="column">
                      <CloudSVG class="mr-5" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import useLinks from './utils/useLinks'
import CloudSVG from '././assets/images/brand-header/brand-cloud.svg'
import translationsEN from './lang/en-US'
import translationsZH from './lang/zh-CN'

export default {
  name: 'EMQHeader',
  components: {
    CloudSVG,
  },
  props: {
    lang: {
      type: String,
      default() {
        return 'en'
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    langSuffix: function () {
      const langSuffix = this.lang === 'zh' ? 'zh' : ''
      return langSuffix
    },
    baseUrl: function () {
      const { baseUrl } = useLinks(this.lang)
      return baseUrl
    },
    translations: function () {
      const translations = this.lang === 'zh' ? translationsZH : translationsEN
      return translations
    },
    navsData: function () {
      const { EMQCloudUrl } = useLinks(this.lang)
      return [
        {
          text: this.translations.products,
          children: [
            {
              icon: 'icon-emqx',
              text: 'EMQ X',
              link: `${this.baseUrl}/products/emqx`,
              summary: this.translations.EMQXDescription,
            },
            {
              icon: 'icon-hstream',
              text: 'HStreamDB',
              link: `${this.baseUrl}/products/hstreamdb`,
              summary: this.translations.HStreamDBDescription,
            },
            {
              icon: 'icon-nanomq',
              text: 'NanoMQ',
              link: `${this.baseUrl}/products/nanomq`,
              summary: this.translations.NanoMQDescription,
            },
            {
              icon: 'icon-neuron',
              text: 'Neuron',
              link: `${this.baseUrl}/products/neuron`,
              summary: this.translations.NeuronDescription,
            },
          ],
          cloudPromo: {
            title: this.translations.EMQXCloudDescription,
            buttonText: this.translations.trial,
            link: EMQCloudUrl,
          },
        },
        {
          text: this.translations.aboutEMQ,
          link: `${this.baseUrl}/about`,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
$navbar-icon-emqx: './assets/images/brand-header/navbar-icon-emqx.png';
$navbar-icon-z-haskell: './assets/images/brand-header/navbar-icon-z-haskell.png';
$navbar-icon-hamler: './assets/images/brand-header/navbar-icon-hamler.png';
$brand-cloud: './assets/images/brand-header/brand-cloud.png';
$navbar-icon-mqtt-websocket: './assets/images/brand-header/navbar-icon-mqtt-websocket.png';
$navbar-icon-hstream: './assets/images/brand-header/navbar-icon-hstream.png';
$navbar-icon-kuiper: './assets/images/brand-header/navbar-icon-kuiper.png';
$navbar-icon-xmeter: './assets/images/brand-header/navbar-icon-xmeter.png';
$navbar-icon-mqttx: './assets/images/brand-header/navbar-icon-mqttx.png';
$navbar-icon-emqx-bench: './assets/images/brand-header/navbar-icon-emqx-bench.png';
$navbar-icon-nanomq: './assets/images/brand-header/navbar-icon-nanomq.png';
$navbar-icon-neuron: './assets/images/brand-header/navbar-icon-neuron.png';
@import './assets/scss/header.scss';
</style>
