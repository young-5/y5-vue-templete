<template>
  <div class="docs">
    <div class="goback" @click="goBack">
      返回 >
    </div>
    <div class="docs_box">
      <div class="docs_title">
        <div>{{ data?.[`${currid}`]?.name }}</div>
      </div>
      <div
        class="doc"
        v-for="(item, index) in data?.[currid]
          ?.data"
        :key="index"
      >
        <div class="doc_name">
          <div>{{ item.name }}:</div>
          <div
            v-if="currid == 3"
            class="showmore"
          >
            查看更多>
          </div>
        </div>
        <div
          class="doc_desc"
          v-if="Array.isArray(item.desc)"
          v-for="(descI, index) in item.desc"
          :key="index"
        >
          {{ index + 1 }}、 {{ descI }}
        </div>
        <div class="doc_desc" v-else>
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import data from './data.ts'
const router = useRouter()
const route = useRoute()
const query = route.query
const currid = ref(query.id)
function goBack() {
  router.go(-1)
}
</script>
<style scoped lang="scss">
.docs {
  min-height: 100vh;
  padding-bottom: 80px;
}
.goback {
  padding: 10px;
  padding-left: 40px;
}
.goback:hover {
  color: aquamarine;
  cursor: pointer;
}
.docs_box {
  min-height: 200px;
}
.docs_title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
}
.doc {
  margin: 10px 0 0 40px;
  border: 1px solid #eee;
  cursor: pointer;
}

.doc:hover {
  background-color: rgba(0, 0, 0, 0.01);
}

.doc:hover .doc_name {
  color: aquamarine;
}

.doc_name {
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .showmore {
    font-size: 12px;
    &:hover {
      color: $defaultColor;
    }
  }
}
.doc_desc {
  font-size: 14px;
  margin-left: 32px;
  margin-bottom: 10px;
  white-space: pre-wrap;
  padding-right: 100px;
  // text-indent: 20px;
  &:hover {
    color: $defaultColor;
  }
}
</style>
