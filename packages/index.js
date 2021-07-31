import EMQHeader from './EMQHeader'

const components = [EMQHeader]

const install = (Vue) => {
  components.map((component) => Vue.component(component.name, component))
}

const _window = window

if (typeof _window !== 'undefined' && _window.Vue) {
  install(_window.Vue)
}

const packages = {
  install,
}

export { EMQHeader }

export default packages
