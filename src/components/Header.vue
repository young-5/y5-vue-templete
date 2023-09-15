<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
defineProps<{
  msg: string
}>()
import { storeToRefs } from 'pinia'
import useUserObjStore from '@/stores/user'
import actions from '../../micros/action'
// const userState = storeToRefs(useUserObjStore()) //成为响应式
const userState = useUserObjStore()
const router = useRouter()
function goHome() {
  router.push('/')
}
actions.onGlobalStateChange((state, preState) => {
  console.log('父应用监听到：', state)
})
</script>

<template>
  <div class="greetings">
    <div class="logo" @click="goHome">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="30"
        height="30"
      />
      <h1 class="green">{{ msg }}</h1>
    </div>

    <nav class="nav">
      <RouterLink to="/react-templete"
        >微前端（react）</RouterLink
      >
      <RouterLink to="/">应用市场</RouterLink>
      <RouterLink to="/about">工具箱</RouterLink
      ><RouterLink to="/vue">框架</RouterLink>
      <RouterLink to="/user">用户中心</RouterLink>
      <div class="user-name" v-if="userState?.id">
        用户：<span>{{
          userState?.userName
        }}</span>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
} */
.greetings {
  display: flex;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid #eee;
}
.logo {
  display: flex;
  font-size: 14px;
  width: 30%;
  display: flex;
  align-items: center;
}
.green {
  color: $defaultColor;
}
.nav {
  width: 60%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: right;
}
.nav nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-name span {
  color: rgb(29, 195, 24);
}
/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
