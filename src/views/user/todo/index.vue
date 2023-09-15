<template>
  <div class="todo">
    <div class="todo-title">
      系统搭建与开发进度
    </div>
    <div class="todo-box">
      <div
        v-for="(item, index) in data"
        :key="index"
      >
        <div
          class="do"
          @click="goDocs"
          :class="{
            done: item.do == 1,
            doing: item.do !== 1
          }"
        >
          {{
            `${index + 1}: ${item.name} - ${
              item.desc
            } - ${
              item.do == 1
                ? '完成'
                : item.do * 100 + '%'
            }`
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useUserObjStore from '@/stores/user'
const router = useRouter()
const userState = useUserObjStore()
const userName = ref('')
function onChange(e: any) {
  userName.value = e.target.value
}
function goDocs() {
  router.push({
    path: 'docs',
    query: {
      id: 3
    }
  })
}
const data = ref([
  {
    id: 6,
    name: '项目基础结构',
    desc: '项目目录结构',
    do: 0.2
  },
  {
    id: 7,
    name: '项目开发规范配置',
    desc: '项目开发配置：包括格式eslint prttierrc ts git 配置 ',
    do: 0.5
  },
  {
    id: 1,
    name: 'vue-router路由系统',
    desc: '',
    do: 1
  },
  {
    id: 2,
    name: 'pinia 状态管理',
    desc: '跨组件通信',
    do: 1
  },
  {
    id: 3,
    name: 'axios请求',
    desc: 'http请求+vite 代理',
    do: 1
  },
  {
    id: 4,
    name: 'scss 支持',
    desc: 'scss scss-loader配置+vite css配置',
    do: 1
  },
  {
    id: 5,
    name: 'vue基础文档',
    desc: 'vue的基础api文档开发',
    do: 1
  },
  {
    id: 9,
    name: '前端监控',
    desc: '前端性能监控 异常监控 埋点sdk',
    do: 0
  },
  {
    id: 8,
    name: '项目开发规范',
    desc: 'vue开发规范 git规范等',
    do: 0
  }
])
</script>

<style scoped lang="scss">
.todo {
  border: 1px solid #eee;
  margin-top: 10px;
  padding: 10px;
}
.todo-title {
  font-size: 16px;
}
.todo-box {
}
@keyframes blink {
  0% {
    color: #eee;
  }
  50% {
    color: red;
  }
  100% {
    color: #eee;
  }
}
.do {
  cursor: pointer;
  &:hover {
    color: $defaultColor;
  }
}
.doing {
  color: red;
  animation: blink 1s infinite;
}
.done {
  color: green;
}
</style>
