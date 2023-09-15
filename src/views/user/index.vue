<template>
  <div class="user">
    <div class="user-con">
      <h1>用户中心</h1>
      <div>
        <div>
          <Todo />
        </div>
        <div>
          <ProjectDo />
        </div>
      </div>
    </div>
    <div class="user-tools">
      <div
        class="user-login"
        v-if="!userState.userName"
      >
        <div>
          <label>用户名：</label>
          <input
            placeholder="请输入用户名"
            v-model="userName"
          />
          <!-- 

             :value="userName"
            @change="onChange"
          -->
        </div>
        <button @click="onLgin">
          用户模拟登录
        </button>
      </div>
      <div
        class="user-login"
        v-if="userState.userName"
      >
        <span
          >{{ userState.userName }} (在线中)</span
        >
        <a @click="goOut">[退出]</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  reactive,
  getCurrentInstance
} from 'vue'
import { storeToRefs } from 'pinia'
import Todo from './todo/index.vue'
import ProjectDo from './todo/ProjectDo.vue'
import { login } from '@/apis/user'
import useUserObjStore from '@/stores/user'
// import actions from '../../../micros/action'
const userState = useUserObjStore()
// const { id, userNmae, auths } = storeToRefs(
//   useUserObjStore
// )

const currentInstance = getCurrentInstance()
const { proxy } = currentInstance
const { $http } =
  currentInstance?.appContext.config
    .globalProperties
const userName = ref('')
function onChange(e: any) {
  userName.value = e.target.value
}
function onLgin() {
  if (userName.value) {
    // userState.setUser(userName.value)
    // userNmae = userName.value
    userState.$patch((state: any) => {
      state.id = 124342
      state.userName = userName.value
      state.auths = ['show']
    })
    // actions.setGlobalState({
    //   userInfo: {
    //     name: '杨文武(外部登录)',
    //     id: '4567345'
    //   }
    // })
    login({
      username: 'admin',
      password: '123456'
    }).then((res) => {
      console.log('api')
      console.log(res)
    })

    $http({
      url: '/koaurl/users/login',
      method: 'post',
      data: {
        username: 'admin',
        password: '123456'
      }
    }).then((res: any) => {
      console.log('$http')
      console.log(res)
    })
    proxy
      .$http({
        url: '/koaurl/users/login',
        method: 'post',
        data: {
          username: 'admin',
          password: '123456'
        }
      })
      .then((res: any) => {
        console.log('proxy')
        console.log(res)
      })
  } else {
    alert('不要忘记填写用户名讷')
  }
}
function goOut() {
  // userState.setUser('')
  userState.$reset()
}
</script>

<style>
.user {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-con {
  padding-left: 40px;
  width: 70%;
}
.user-tools {
  border-left: 1px solid #eee;
  padding: 10px;
  width: 25%;
}
.user-login {
  width: 100%;
  padding: 10px;
  border: 1px solid #eee;
}
.user-login > div {
  margin: 10px;
}
.user-login button {
  margin: 10px;
  width: 100px;
}
.user-login a {
  margin-left: 24px;
  cursor: pointer;
  color: red;
}
.user-login span {
  color: rgb(8, 143, 38);
}
</style>
