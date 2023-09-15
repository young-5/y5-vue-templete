import { initGlobalState } from 'qiankun'

const initState = {
  userInfo: {},
  msg: 'ok'
}
const actions = initGlobalState(initState)
export default actions
