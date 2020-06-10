// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/**
 * 钩子函数，即某些时机会被调用的函数
 * beforeEach 意思是在访问每个路由前调用
 */
router.beforeEach((to, from, next) => {
  // 判断访问的路径是否需要登录，已经登录才能next，否则回到login
  if (to.meta.requireAuth) {
    if (store.state.user) {
      next()
    } else {
      console.log("没有登录")
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
