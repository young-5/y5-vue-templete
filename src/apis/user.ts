import axios from './index'

export function login(data: any) {
  return axios({
    url: '/koaurl/users/login',
    method: 'post',
    data
  })
}
