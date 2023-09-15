const DatasObj: any = {
  1: {
    name: '项目说明',
    data: [
      {
        name: '项目创建',
        desc: '该项目基于Vue3进行创建，通过 npm init vue@latest 进行项目初始化，创建后 npm install 加载依赖，最后npm run dev 启动项目'
      },
      {
        name: '项目基础依赖',
        desc: [
          'vite进行项目的构建打包 ',
          'ts进行项目校验  ',
          'vue-router路由实现  ',
          'pinia进行状态管理 ',
          'axios请求管理 ',
          'scss样式开发',
          'eslint prettierrc代码格式校验',
          'git 代码版本管理'
        ]
      }
    ]
  },
  2: {
    name: 'vue基础语法列表',
    data: [
      {
        name: '基础指令',
        desc: [
          '通过父组件：props绑定属性，defineProps获取, 透传 attribute,  继承 class 和 style 的合并, $attrs 这个实例属性来访问组件的所有透传 attribute。 v-on 监听器继承 深层组件继承',
          ' v-bind  /n 对dom设置 class style设置与对组件设置：透传是在有属性的基础上添加，多根节点可通过$attrs 获取props',
          ' v-on 修饰符：.stop（单击事件将停止传递），prevent（提交事件将不再重新加载页面），self（件处理器不来自子元素），capture（捕获模式），once（点击事件最多被触发一次），passive（以防其中包含 `event.preventDefault() ），按键keyup.enter/page-down等。\n注意：链式调用，@click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为，而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。event.target访问原生dom',
          ' v-model 修饰符：.lazy（在 "change" 事件后同步更新而不是 "input"）.number .trim',
          ' v-if v-else-if v-else v-show：v-if 是一个指令，他必须依附于某个元素，切换不止一个元素呢？在这种情况下我们可以在一个 <template> 元素上使用 v-if \n ** v-if与v-show的区别: v-show 会在 DOM 渲染中保留该元素；v-show 仅切换了该元素上名为 display 的 CSS 属性, v-show 不支持在 <template> 元素上使用，也不能和 v-else 搭配使用,v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销,频繁切换，使用 v-show \n ** v-if 和 v-for 同时存在于一个元素上的时候，v-if 会首先被执行',
          ' v-for  in/of  key  key值唯一  \nv-for 可以直接接受一个整数值。在这种用例中，会将该模板基于 1...n 的取值范围重复多次。',
          'ref this.$refs : 访问dom挂载实例, 函数模板引用:ref attribute 还可以绑定为一个函数, 组件上的 ref',
          'v-html：html元素渲染',
          '模板属性：data  methods  computed  watch slot emits  components setup mixins provide inject',
          'app全局属性：app.config.globalProperties ',
          'vue装饰器:扩展vue的语法'
        ]
      },
      {
        name: 'vue组件模板',
        desc: [
          '.vue模板文件一般包括： template ， script ，style',
          'template:html模板，注意一般一个根节点，多根节点通过<></>包裹',
          'script：data  methods  computed  watch slot emits  components setup mixins ',
          'style： css 样式设置，可通过scoped设置沙箱作用域 lang设置css扩展语言类型scss/less'
        ]
      },
      {
        name: '声明周期',
        desc: [
          'create :data 声明周期函数等挂载前后 dom没有渲染',
          'mount  :mounted 组件完成初始渲染并创建 DOM 节点后',
          'update ：更新前后',
          'unmount ：注销前后，去除副作用'
        ]
      },
      {
        name: '数据双向绑定',
        desc: [
          '在script中 通过vue 的 ref 或者 reactive设置监听对象，通过v-modal进行与页面双向绑定 ,深层响应式，更改深层次的对象和数组，也是会被监听到，watch不可以监听到深层',
          '对于数组，通过length改变 和 下标改变无法监听，但是通过push() pop() shift() unshift() splice() sort() reverse() 等改变数据是响应式的',
          'ref与reactive的区别：ref 需要通过.value读取 ，reactive通过Proxy实现响应式，ref通过Object.defineProperty()的get()和set()实现响应式（数据的劫持），ref定义基本类型reactive不可，ref也可用来定义对象和数组，它内部通过reactive转为代理对象 ',
          'vue不允许给已创建的实例动态添加新的根级响应式属性，可以通过Vue.set(vm.obj,"e",0)  或者 vm.$set（this.$set） 添加'
        ]
      },
      {
        name: '组件通信方式',
        desc: 'pros emit attrs ref/expose v-model slot  provide/inject  bus总线  vuex pinia  getCurrentInstance'
      },
      {
        name: '依赖注入',
        desc: 'provide 和 inject,  全局 app.provide ，局部 provide， inject获取 '
      },
      {
        name: '单向数据流与异步更新',
        desc: [
          '异步更新立即访问nextTick ，defineAsyncComponent异步组件：import 按需加载 ',
          'setup() 钩子可以是异步, <script setup>',
          'Suspense:组件树中协调对异步依赖的处理,组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。',
          '<Suspense> 组件 : pending、resolve 和 fallback,onErrorCaptured()'
        ]
      },
      {
        name: 'slot插槽',
        desc: [
          '插槽来分配内容, slot插槽分为：',
          '模板插槽  slot 默认展示children',
          '具名插槽（slot name， template v-slot/#） ',
          '作用域插槽( v-slot slot-scope,样式父组件说了算，内容显示子组件插槽绑定)'
        ]
      },
      {
        name: '组件注册',
        desc: '组件注册分为: 全局组件注册，app.component， 局部注册：components ，'
      },
      {
        name: '自定义指令和插件',
        desc: '自定义指令 通过实例注册 app.directive ，'
      },
      {
        name: 'mixin混入',
        desc: 'mixin混入,对代码逻辑的抽离封装，可以通过全局 app.mixin({}) 和组件局部mixins:[xxx]（在vue3中 通过封装实现逻辑的抽离,组合式函数，hooks Compositions API(外部js)，需要直接引用，代替mixin,避免数据来源的不清晰，命名空间冲突和隐式的跨mixin交流，耦合太重）'
      },
      {
        name: 'vue-router',
        desc: '通过引入vue-router 依赖包，配置router,再进行App.use(router)进行注册，再进行RouterView，占位，RouterLink 导航 \n使用 vue-router 相关api 可进行路由传参 跳转等功能，如 useRouter，useRoute'
      },
      {
        name: '逻辑复用',
        desc: [
          '组合式函数：hooks，代替了mixins，约定use开头',
          '自定义指令：directive，有声明周期等钩子函数',
          '插件：插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码，一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身'
        ]
      },
      {
        name: '内置组件',
        desc: [
          '<Suspense> :来在组件树中协调对异步依赖的处理。它让我们可以在组件树上层等待下层的多个嵌套异步依赖项解析完成，并可以在等待时渲染一个加载状态。',
          '<Transition/TransitionGroup> ：基于状态变化的过渡和动画：',
          '<KeepAlive>:多个组件间动态切换时缓存被移除的组件实例。',
          '<Teleport>:将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。'
        ]
      },
      {
        name: '开发工具与三方插件',
        desc: [
          'vue-devtool',
          '分步引导：intro.js'
        ]
      }
    ]
  },
  3: {
    name: '项目基础配置',
    data: [
      {
        name: 'vite配置',
        desc: '代理配置：server,css配置：css,插件：plugins，路径别名：resolve-alias'
      },
      {
        name: 'pinia',
        desc: 'pinia 简化了vuex，同时更轻便，其主要的api包括：createPinia,defineStore,state,getter,actions,presist,storeToRefs'
      },
      {
        name: 'axios配置+vite代理',
        desc: '引入axios依赖，封装继承功能，挂载到vue全局实例上去，配置vite serve代理配置，在开发过程中 axios可以挂载到vue全局实例中进行使用，也可以单独对请求api进行管理，统一导出请求方法'
      },
      {
        name: 'scss配置+vite代理',
        desc: '引入sass sass-loader,配置vite css ,注意配置里面如果引入全局的样式文件，需要注意 @import之后，在最后要加 ;,不然不会生效，引入了全局配置样式，在其他组件中就可使用配置的全局样式变量'
      },
      {
        name: '异常捕获与处理',
        desc: [
          '全局监听异常事件(意料之外的错误,运行时错误): window.onerror / window.addEventListener("error"), 缺点： 图片网络404无法捕获 资源加载错误无法捕获，onerror事件处理函数只能声明异常，不会重复执行多个回调',
          'window.addEventListener(unhandledrejection,evevt=>{}) 全局监听 Uncaught Promise Error,请求加载失败和promise异常',
          'try catch异常捕获 （特定的可预见错误）： try catch代码块包裹',
          'promise reject处理',
          'fetch xhr错误处理',
          '图片的 onerror',
          'performance.getEntries()',
          '封装异常错误捕获组件，显示特定报错页面，监控pageview',
          '数据监控：sdk埋点，采集用户的行为，指标有：pv/UV(页面浏览访问/点击量)，用户莫一项操作行为（埋点），访客来源'
        ]
      },
      {
        name: 'vscode配置',
        desc: ['插件：vue3 snippets,vetur']
      },
      {
        name: '前端项目部署，vue/react + git + jenkins + tomcat + nginx',
        desc: [
          'jenkins服务器：安装node , NodeJsPlugin: jenkins -Manage jenkins - Manage Plugins 搜索 Node Plugin, ',
          '项目配置 project:General git tomcat  Execute shell',
          'shell命令：\n cd  /data/jenkins-slave/workspace/test-platform-fe #进入jenkins工作空间下的项目目录 \n npm config set registry https://registry.npm.taobao.org #npm国内源 \n npm config get registry #检查切换源是否成功 \n npm install \n npm run build \n scp -r dist/* appsvr@192.168.1.1:/home/xxxx #移动文件到web服务器  \n ssh 192.168.1.1 #链接服务器 \n sh /home/xxxx #重启服务器'
        ]
      },
      {
        name: '性能监控',
        desc: [
          '系统性能监控注册  + 探针埋点',
          '性能包括：网络性能 渲染性能，异常，用户行为，',
          '方案：sdk（js运行时报错 + 资源加载错误 + api接口监控）  + logstash数据清洗 + es查询',
          '异常分类：资源加载异常 + 运行时js异常 + promise异常 + ajax异常  + 页面加载性能 + pageview监控（pv 停留时间等）',
          '监控组件：sentry / skywalking / Vue-dataAc / webfunny / 见微 / 埋埋机'
        ]
      }
    ]
  },
  4: {
    name: 'vue原理剖析'
  },
  5: {
    name: '业务基础',
    data: [
      {
        name: '国际化',
        desc: 'i18n,配置国际化配置，切换获取不同配置的语言'
      },
      {
        name: '主题配置',
        desc: '通过切换body theme-type属性，获取不同主题配置（主题less/scss变量）'
      },
      {
        name: '表单配置',
        desc: ''
      }
    ]
  },
  6: {
    name: '系统优化',
    data: [
      {
        name: '性能指标',
        desc: [
          '页面白屏时间（TTFB），首屏加载时间， dom树加载时间（domContentLoaded）,页面整体加载时间（onload）,用户可交互（TTI）',
          'performance Timing指标：DNS查询耗时（domainLookupStart/End）,TCP链接耗时（connectStart/End）,请求耗时（responseStart/End）,dom树解析耗时（domInteractive/domComplete）,白屏时间（TTFB，navigationStart/responseStart）,domready(用户可交互时间TTI，navigationStart/domContentLoadedEventEnd),onload时间（总下载时间 navigationStart/loadEventEnd）',
          'lightHose指标: CLS(累计布局偏移) LCP（最大渲染时间） FID（首次输入演出） FCP（首次内容绘制）  TTFB（首字节到达时间）'
        ]
      },
      {
        name: '性能分析工具',
        desc: [
          'lightHosue：指标评分',
          'performance:记录网站生命周期的各种时间来提高页面运行时的性能：触发监控 刷新 清除 上次下载，高级汇总 帧率 cpu net,火焰图 cpu堆叠的可视化 主线程时间 network请求详情，数据统计 报表事件时长顺序 调用顺序 先后顺序等',
          '2.1 window.performance查看信息：memory(内存信息)，navigation(重定向信息，type:0(非刷新重定向的正常进入)，1(刷新进入)，2(浏览器前进后退进入)，225(其他))，timing(时间)',
          '2.2 window.performance.getEntries(),页面所有的http请求',
          '2.3 window.performance.now():Fata.now是UNIX时间，p.now是相对performance.timing.navigationStart页面初始化时间',
          '2.4 w.p.mark():标记时间戳',
          '饼图：',
          '7.1: 蓝色(资源加载)黄色(脚本执行,长任务)紫色(页面渲染)绿色(图形绘制)白色(空闲，等待响应时间)',
          '7.2: 色块：长色块表示耗时长，左右上下：左侧线(请求前),浅色块(发送到服务器返回第一个字节给浏览器),深色块(服务器返回内容全部下载到浏览器),右侧线(等待主线程处理)',
          '7.3: 点击色块，查看耗时 大小 具体时长等',
          '瀑布图：蓝色(html) 紫色(css)黄色(js)绿色(图片)灰色(后台接口)',
          '火焰图：表示浏览器主线程的任务流：宏任务，微任务等。长任务：背景红色阴影，右上角红色的小三角',
          '12.1:瀑布图有，火焰没有，火焰图有，瀑布没有，'
        ]
      },
      {
        name: '优化方案',
        desc: [
          '构建优化：loader优化路径，代码压缩（js-uglifyJS css-postCSS）,公共代码提取，按需加载，tree-shaking, 缓存的使用',
          '网络传输优化：Http请求合并与减少，CDN的合理使用，浏览器缓存机制，Gzip压缩，DNS合理使用,雪碧图行内base64图片svg的使用',
          '页面加载优化：避免不必要的跳转，去除重复脚本，css在头部js在页低避免阻塞，使用外部js和css',
          '页面渲染优化：渲染原理避免阻塞，减少重绘重排，减少dom的读取操作，css选择器优化，页面骨架，根据页面功能优先加载',
          '高效js优化： 作用链与闭包的合理利用，事件委托，正则，懒加载预加载，web workers多线程，算法与流程',
          '用户体验提升：图片压缩，localStorage 响应式 骨架背景 等'
        ]
      },
      {
        name: '优化实践',
        desc: [
          'network插件资源请求响应和大小，lighthouse分析performance分析，打包bundle大小分析（）',
          '优化方案：',
          '2.1：分析未使用的包，异常',
          '2.2：三方依赖加载只需要的，或者寻找合适且小的包：momentjs -> daysJs,monentjs只需要中文等',
          '组件按需加载，路由懒加载：babel-plugin-component,babel-plugin-improt',
          '开启gizp压缩，webpack配置（compression-webpack-plugin） node配置 nginx配置等',
          '取消非必要的 preload prefetch等预加载 优先加载',
          'svg代替png等图片，svg压缩图标,制作雪碧图,图片压缩，svgo-sprite-loader  svgo-loader ',
          '较大的依赖包，不在组件库内安装，而是父文件的node_modules获取，配置config.externals',
          '打包不生成.map 的sourceMap文件',
          'treeShaking 去除console.log等',
          '提取公共代码文件',
          '配置缓存',
          'prefetch preload'
        ]
      }
    ]
  },
  7: {
    name: '后端',
    data: []
  },
  8: {
    name: '测试',
    data: []
  },
  9: {
    name: '开发流程汇总',
    data: [
      {
        name: '前端技术',
        desc: [
          '基础：js/es6  html/html5  css',
          '框架：react vue less/scss',
          '构建打包：webpack vite rollup',
          '发布：nginx node 微前端 cdn',
          '模块开发：三方库 工程化 策略',
          '代码版本管理：npm git',
          '浏览器：渲染原理 请求 性能优化 缓存 DNS',
          '规范：项目规范 开发规范 代码规范(eslint prettierrc) git规范',
          '网络：http/https tcp协议',
          '安全：xss crst 加解密(对称/非对称) 身份认证 ',
          '后端相关：node 数据库 算法 linux等'
        ]
      },
      {
        name: '初始化',
        desc: ['基础目录结构与样式']
      },
      {
        name: '开发',
        desc: ['实时编译 预编译']
      },
      {
        name: '构建',
        desc: ['预编译 合并 压缩']
      },
      {
        name: '发布',
        desc: ['构建后的静态文件发布上线']
      },
      {
        name: '打包',
        desc: ['资源路径转换 源码打包']
      },
      {
        name: '运营维护',
        desc: ['']
      }
    ]
  }
}

export default DatasObj
