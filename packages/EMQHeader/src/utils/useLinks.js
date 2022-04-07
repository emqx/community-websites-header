export default (lang) => {
  const emqENSite = 'https://www.emqx.com/en'
  const emqCNSite = 'https://www.emqx.com/zh'
  const baseUrl = lang === 'zh' ? emqCNSite : emqENSite
  const emqCloudENSite = 'https://www.emqx.com/en/cloud'
  const emqCloudCNSite = 'https://www.emqx.com/zh/cloud'
  const EMQCloudUrl = lang === 'zh' ? emqCloudCNSite : emqCloudENSite
  const emqDocsENSite = 'https://docs.emqx.io/en/'
  const emqDocsCNSite = 'https://docs.emqx.cn/'
  const EMQDocsUrl = lang === 'zh' ? emqDocsCNSite : emqDocsENSite
  const XMeterENSite = 'https://www.xmeter.net/'
  const XMeterCNSite = 'https://www.xmeter.net/zh/'
  const XMeterUrl = lang === 'zh' ? XMeterCNSite : XMeterENSite

  const slackInvite = {
    emqx: 'https://slack-invite.emqx.io/',
    hstreamdb: 'https://slack-invite.hstream.io/',
    nanomq: 'https://slack-invite.emqx.io/',
  }

  const forumsEN = {
    emqx: 'https://github.com/emqx/emqx/discussions',
    hstreamdb: 'https://github.com/hstreamdb/hstream/discussions',
    nanomq: 'https://github.com/emqx/nanomq/discussions',
  }
  const forumsCN = {
    emqx: 'https://askemq.com/c/emqx/5',
    hstreamdb: 'https://askemq.com/c/hstream/7',
    nanomq: 'https://askemq.com/c/nanomq/9',
    neuron: 'https://askemq.com/c/neuron/8',
  }
  const forums = lang === 'zh' ? forumsCN : forumsEN

  const githubRepos = {
    emqx: 'https://github.com/emqx/emqx',
    hstreamdb: 'https://github.com/hstreamdb/hstream',
    nanomq: 'https://github.com/emqx/nanomq',
  }

  const documentationsEN = {
    emqx: 'https://docs.emqx.io/en/broker/latest/',
    hstreamdb: 'https://docs.hstream.io/start/quickstart-with-docker/',
    nanomq: 'https://nanomq.io/docs/latest/',
    neuron: 'https://docs.emqx.io/en/neuron/latest/',
  }

  const documentationsCN = {
    emqx: 'https://docs.emqx.cn/broker/latest/',
    hstreamdb: 'https://docs.hstream.io/start/quickstart-with-docker/',
    nanomq: 'https://nanomq.io/zh/docs/latest/',
    neuron: 'https://docs.emqx.cn/neuron/latest/',
  }

  const documentations = lang === 'zh' ? documentationsCN : documentationsEN

  return {
    emqENSite,
    emqCNSite,
    baseUrl,
    emqCloudENSite,
    emqCloudCNSite,
    EMQCloudUrl,
    XMeterENSite,
    XMeterCNSite,
    XMeterUrl,
    emqDocsENSite,
    emqDocsCNSite,
    EMQDocsUrl,
    slackInvite,
    forums,
    githubRepos,
    documentations,
  }
}
