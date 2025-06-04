import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerConf } from '@/config/router.conf'

Vue.use(VueRouter)

const getRouters = (list = routerConf) => {
  return list.map(item => {
    return {
      ...item,
      component: () => import(`@/${item.componentPath}.vue`),
    }
  })
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: getRouters()
})

export default router
