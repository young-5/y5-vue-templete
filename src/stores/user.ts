import { defineStore } from 'pinia'

const useUserObjStore = defineStore('userObj', {
  state: () => ({
    id: '',
    userName: '',
    auths: []
  }),
  getters: {
    getUser(state: any) {
      return state.userName
    }
  },
  actions: {
    setUser(value: string) {
      this.userName = value
    }
  }
})
export default useUserObjStore
