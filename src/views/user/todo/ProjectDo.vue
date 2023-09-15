<template>
  <div class="todo">
    <div class="todo-title">
      系统基础业务功能开发进度
    </div>
    <div class="todo-box">
      <div
        v-for="(item, index) in data"
        :key="index"
      >
        <div
          class="do"
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
import { storeToRefs } from 'pinia'
import useUserObjStore from '@/stores/user'
const userState = useUserObjStore()
const userName = ref('')
function onChange(e: any) {
  userName.value = e.target.value
}

const data = ref([
  {
    id: 1,
    name: '登录',
    desc: '用户登录 有效性  退出登录',
    do: 0.5
  },
  {
    id: 2,
    name: '鉴权',
    desc: '登录状态校验 token校验 角色及功能权限校验',
    do: 0
  },
  {
    id: 3,
    name: '主题',
    desc: 'scss全局样式变量',
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
