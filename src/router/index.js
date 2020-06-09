import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AppIndex from '@/components/home/AppIndex'
import ProductManage from '@/components/product/ProductIndex'
import UserManage from '@/components/home/UserManage'
import Statistic from '@/components/home/Statistic'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/productmanage',
          name: 'ProductManage',
          component: ProductManage,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/usermanage',
          name: 'UserManage',
          component: UserManage,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/statistic',
          name: 'Statistic',
          component: Statistic,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
