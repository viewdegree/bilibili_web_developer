/*
 * @Author: your name
 * @Date: 2020-02-22 07:32:39
 * @LastEditTime: 2020-02-22 09:44:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

//引入axios模块
import axios from 'axios'
// 创建一个axios请求的实例
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'  
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
