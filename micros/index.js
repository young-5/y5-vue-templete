import { registerMicroApps, start } from 'qiankun'
import apps from './app'
registerMicroApps(apps, {
  beforeLoad: () => {}
})

start({
  sandbox: {
    strictStyleIsolation: true,
    experimentalStyleIsolation: true
  }
})
