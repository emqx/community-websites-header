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
        <div class="navbar-end is-flex is-hidden-touch">
          <template v-if="['emqx', 'neuron', 'nanomq', 'mqttx'].includes(product)">
            <a
              v-if="starCount"
              class="navbar-item has-text-weight-normal"
              :href="githubLink"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <div class="btn-github p-0 is-flex is-align-items-center">
                <div class="star is-flex is-align-items-center">
                  <img
                    loading="lazy"
                    class="mr-1"
                    alt="Slack"
                    src="./assets/images/brand-header/icon-github.png"
                    width="20"
                    height="20"
                  />
                  Star
                </div>
                <div class="count">{{ starCount }}</div>
              </div>
            </a>
            <a
              v-else
              class="navbar-item px-3 has-text-weight-normal"
              :href="githubLink"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img
                loading="lazy"
                class="mr-1"
                alt="GitHub"
                src="./assets/images/brand-header/icon-github.png"
                width="20"
                height="20"
              />
              Star
            </a>
          </template>
          <a
            class="navbar-item px-3 has-text-weight-normal"
            href="https://slack-invite.emqx.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              loading="lazy"
              class="mr-1"
              alt="Slack"
              src="./assets/images/brand-header/icon-slack.png"
              width="20"
              height="20"
            />
            Slack
          </a>
          <a
            class="navbar-item pl-3 pr-0 has-text-weight-normal"
            :href="youtobeLink"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              loading="lazy"
              class="mr-1"
              alt="Youtube"
              src="./assets/images/brand-header/icon-youtube.png"
              width="20"
              height="20"
            />
            Youtube
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
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
    githubLink: function () {
      const githubMap = new Map([
        ['emqx', 'https://github.com/emqx/emqx'],
        ['neuron', 'https://github.com/neugates/neuron'],
        ['nanomq', 'https://github.com/nanomq/nanomq'],
        ['mqttx', 'https://github.com/emqx/MQTTX'],
      ])
      return githubMap.get(this.product)
    },
    youtobeLink: function () {
      return this.lang === 'zh'
        ? 'https://www.youtube.com/channel/UCir_r04HIsLjf2qqyZ4A8Cg'
        : 'https://www.youtube.com/channel/UC5FjR77ErAxvZENEWzQaO5Q'
    },
  },
  methods: {
    getGitHubStar: async function () {
      const reopApiMap = new Map([
        ['emqx', 'https://api.github.com/repos/emqx/emqx'],
        ['neuron', 'https://api.github.com/repos/neugates/neuron'],
        ['nanomq', 'https://api.github.com/repos/nanomq/nanomq'],
        ['mqttx', 'https://api.github.com/repos/emqx/MQTTX'],
      ])
      const reopApi = reopApiMap.get(this.product)
      if (reopApi) {
        try {
          const { status, data } = await axios.get(reopApi)
          if (status === 200 && data) {
            this.starCount =
              data.stargazers_count > 1000
                ? Math.round(parseInt(data.stargazers_count, 10) / 100) / 10 + 'k'
                : data.stargazers_count
          }
        } catch (e) {}
      }
    },
  },
  created() {
    this.getGitHubStar()
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
