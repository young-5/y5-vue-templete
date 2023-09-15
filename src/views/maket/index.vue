<template>
  <div class="about">
    <h1>应用市场</h1>
    <div class="boxs">
      <div
        class="boxs-item"
        v-for="(item, indx) in datas"
      >
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const datas = []
</script>
<style lang="scss" scoped>
.about {
  h1 {
    margin-top: 16px;
    margin-bottom: 36px;
  }
  padding-left: 80px;
  .boxs {
    display: flex;
    justify-content: space-between;

    .boxs-item {
      width: 200px;
      min-height: 200px;
      padding: 10px;
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0px 10px 5px
          rgba(0, 0, 0, 0.1);
        background-color: rgba(0, 0, 0, 0.1);
        div {
          transform: scale(1.5);
        }
      }
    }
  }
}
</style>
