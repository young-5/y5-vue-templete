import './assets/main.css'
// import '@/style/minxin.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from '@/apis/index.ts'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 全局挂载 axios
app.config.globalProperties.$http = axios
app.use(createPinia())
app.use(router)

// app.mount('#app')
let instance: any = null
function render({ container, parentStore } = {}) {
  debugger
  app.mount(
    container
      ? container.querySelector('#app')
      : '#app'
  )
}

if (!window?.__POWERED_BY_QIANKUN__) {
  // 全局变量来判断环境
  render()
}

export async function bootstrap() {
  console.log(
    '现在进入子应用hello-app的bootstraped阶段'
  )
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  if (props.parentStore) {
    await props.parentStore.dispatch(
      'getResource',
      {
        name: 'hello-app应用的资源'
      }
    )
  }
  console.log(
    '现在进入子应用hello-app的mount周期',
    props
  )
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log(
    '现在进入子应用hello-app的unmount阶段'
  )
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props)
}
// import '../micros/index.js'
