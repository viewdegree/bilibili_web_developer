/*
 * @Author: your name
 * @Date: 2020-02-22 07:32:39
 * @LastEditTime: 2020-02-22 11:57:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateAriticle from '../views/CreateArticle.vue'
import ListAriticle from '../views/ListArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-ariticle',
    component: ListAriticle
  },
  {
    path: '/articles/create',
    name: 'create-ariticle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: CreateAriticle
  },
  {
    //动态匹配
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
