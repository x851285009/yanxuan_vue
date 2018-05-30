import Vue from 'vue'
import Router from 'vue-router'

// 懒加载主路由
const Home = () => import('../pages/Home')
const Topic = () => import('../pages/Topic')
const List = () => import('../pages/List')
const ShopCart = () => import('../pages/ShopCart')
const Personal = () => import('../pages/Personal')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/topic',
      component: Topic,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: false
      }
    }
  ]
})
