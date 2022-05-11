<template>
  <section id="brand-header">
    <div class="navbar-brand container">
      <a class="navbar-item logo" target="_blank" :href="`${baseUrl}`">
        <img loading="lazy" :alt="translations.emqLogoAlt" src="./assets/images/brand-header/emq-logo.png" />
      </a>
      <div class="navbar-menu is-flex is-shadowless">
        <div class="navbar-start is-flex">
          <template v-for="(navs, index) in navsData">
            <a v-if="!navs.children" :key="index" class="navbar-item" target="_blank" :href="navs.link">
              {{ navs.text }}
            </a>
            <div v-else :key="index" class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link is-arrowless">{{ navs.text }} </a>
              <div class="navbar-dropdown moblie">
                <a v-for="item in navs.children" :key="item.link" class="navbar-item" target="_blank" :href="item.link">
                  {{ item.text }}
                </a>
              </div>
              <div :class="['navbar-dropdown', 'desktop', `is-${index + 1}th`]">
                <template v-if="index === 0">
                  <div class="columns is-gapless">
                    <div class="column is-8 vertical-line">
                      <div>
                        <div v-for="item in navs.leftCol" :key="item.icon" class="product-box is-flex not-last-mb-48">
                          <a class="product-banner is-block mr-5" :href="item.link" target="_blank" rel="noopener">
                            <img
                              loading="lazy"
                              :src="require(`@/EMQHeader/src/assets/images/brand-header/${item.poster}.png`)"
                              :alt="item.summary"
                              width="212"
                              height="140"
                            />
                          </a>
                          <div>
                            <img
                              loading="lazy"
                              class="mb-3"
                              :src="require(`@/EMQHeader/src/assets/images/brand-header/${item.icon}.png`)"
                              :alt="item.text"
                              width="36"
                              height="36"
                            />
                            <a
                              class="product-title is-block mb-3 is-size-6 has-text-weight-semibold"
                              :href="item.link"
                              target="_blank"
                              rel="noopener"
                            >
                              {{ item.text }}<span class="ml-2">→</span>
                            </a>
                            <p class="product-summary">{{ item.summary }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="column is-4">
                      <div>
                        <div class="not-last-mb-48" v-for="list in navs.rightCol" :key="list.type">
                          <div class="mb-5 product-type">{{ list.type }}</div>
                          <div class="columns">
                            <div v-for="item in list.list" :key="item.icon" class="column is-6">
                              <div class="is-flex is-align-items-center">
                                <img
                                  loading="lazy"
                                  class="mr-2"
                                  :src="require(`@/EMQHeader/src/assets/images/brand-header/${item.icon}.png`)"
                                  :alt="item.text"
                                  width="28"
                                  height="28"
                                />
                                <a
                                  class="product-title is-block is-size-6 has-text-weight-semibold"
                                  :href="item.link"
                                  target="_blank"
                                  rel="noopener"
                                >
                                  {{ item.text }}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useLinks from './utils/useLinks'
import translationsEN from './lang/en-US'
import translationsZH from './lang/zh-CN'

export default {
  name: 'EMQHeader',
  props: {
    lang: {
      type: String,
      default() {
        return 'en'
      },
    },
    product: {
      type: String,
      require: false,
    },
  },
  data() {
    return {
      starCount: '',
    }
  },
  computed: {
    baseUrl: function () {
      const { baseUrl } = useLinks(this.lang)
      return baseUrl
    },
    translations: function () {
      const translations = this.lang === 'zh' ? translationsZH : translationsEN
      return translations
    },
    navsData: function () {
      return [
        {
          text: this.translations.products,
          children: [
            {
              text: 'EMQX Cloud',
              link: `${this.baseUrl}/cloud`,
            },
            {
              text: 'EMQX Enterprise',
              link: `${this.baseUrl}/products/emqx`,
            },
            {
              text: 'HStreamDB',
              link: `${this.baseUrl}/products/hstreamdb`,
            },
            {
              text: 'Neuron',
              link: `${this.baseUrl}/products/neuron`,
            },
            {
              text: 'NanoMQ',
              link: `${this.baseUrl}/products/nanomq`,
            },
            {
              text: 'XMeter',
              link: `${this.baseUrl}/products/xmeter`,
            },
            {
              text: 'MQTT X',
              link: `${this.baseUrl}/products/mqttx`,
            },
          ],
          leftCol: [
            {
              icon: 'icon-cloud',
              poster: 'banner-cloud',
              text: 'EMQX Cloud',
              link: `${this.baseUrl}/cloud`,
              summary: this.translations.EMQXCloudDescription,
            },
            {
              icon: 'icon-emqx',
              poster: 'banner-enterprise',
              text: 'EMQX Enterprise',
              link: `${this.baseUrl}/products/emqx`,
              summary: this.translations.EMQXDescription,
            },
          ],
          rightCol: [
            {
              type: this.translations.streamingDatabase,
              list: [
                {
                  icon: 'icon-hstream',
                  text: 'HStreamDB',
                  link: `${this.baseUrl}/products/hstreamdb`,
                },
              ],
            },
            {
              type: this.translations.edgeComputing,
              list: [
                {
                  icon: 'icon-neuron',
                  text: 'Neuron',
                  link: `${this.baseUrl}/products/neuron`,
                },
                {
                  icon: 'icon-nanomq',
                  text: 'NanoMQ',
                  link: `${this.baseUrl}/products/nanomq`,
                },
              ],
            },
            {
              type: this.translations.serviceTools,
              list: [
                {
                  icon: 'icon-xmeter',
                  text: 'XMeter',
                  link: `${this.baseUrl}/products/xmeter`,
                },
                {
                  icon: 'icon-mqttx',
                  text: 'MQTT X',
                  link: `${this.baseUrl}/products/mqttx`,
                },
              ],
            },
          ],
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/header.scss';
</style>
