import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
import ElementUI from 'element-ui'
import './element-variables.scss'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import request from "./request";
import {  Table,
  TableColumn, } from 'element-ui';
// import _ from "lodash";

Vue.prototype=Object.assign(Vue.prototype,request)

require('./mock') // 正式环境打包注释掉

Vue.use(ElementUI)
Vue.use(VueRouter)


const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
// })

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app")

