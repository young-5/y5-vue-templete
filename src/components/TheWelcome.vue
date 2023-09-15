<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="home_box">
    <WelcomeItem :id="1">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>项目说明</template>

      基于vue3进行开发，结合相关生态，实现web端系统模板，包括
      ：vue3基础系统框架，vite构建打包，vue-router路由实现，pinia状态管理，typeScript类型校验
    </WelcomeItem>

    <WelcomeItem :id="2">
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading
        >vue基础语法列表</template
      >
      <div>生命周期</div>
      <div>template模板</div>
      <div>组件通信方式</div>
      <div>slot插槽</div>
    </WelcomeItem>
    <WelcomeItem :id="3">
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>项目基础配置</template>

      <div>vite配置</div>
      <div>pinia配置</div>
      <div>axios网络请求</div>
      <div>性能监控</div>
      <div>git Husky开发</div>
    </WelcomeItem>
    <WelcomeItem :id="4">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>vue原理剖析</template>
      <div>
        双向绑定的实现（proxy + 观察者模式）
      </div>
      <div>vNode + diff</div>
      <div>render 渲染 + 语法解析</div>
      <div>异步流程与任务队列</div>
    </WelcomeItem>

    <WelcomeItem :id="5">
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>业务基础</template>
      <div>登录验证</div>
      <div>鉴权</div>
      <div>主题</div>
      <div>国际化</div>
    </WelcomeItem>

    <WelcomeItem :id="6">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>系统优化</template>
      <div>请求优化</div>
      <div>渲染优化</div>
      <div>代码优化</div>
      <div>SEO优化</div>
    </WelcomeItem>

    <WelcomeItem :id="7">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>后端</template>
    </WelcomeItem>
    <WelcomeItem :id="8">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>测试</template>
    </WelcomeItem>
    <WelcomeItem :id="9">
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>开发流程汇总</template>
    </WelcomeItem>
  </div>
</template>
<style>
.home_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
