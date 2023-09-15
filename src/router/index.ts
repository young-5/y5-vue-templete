import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Mark from '../views/maket/index.vue'

const router = createRouter({
  
  history: createWebHistory(
    import.meta.env.BASE_URL
  ),
  routes: [
    {
      path: '/',
      name: 'mark',
      component: Mark
    },
    {
      path: '/vue',
      name: 'vue',
      component: () =>
        import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../views/about/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../views/user/index.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('../views/docs/Detail.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!window.history.state.current) {
    window.history.state.current = to.fullPath
  }
  if (!window.history.state.back) {
    window.history.state.back = from.fullPath
  }
  return next()
})
export default router
