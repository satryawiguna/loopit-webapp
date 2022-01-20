import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Cars from '@/views/Cars.vue'
import CarForm from '@/views/CarForm.vue'
import Categories from '@/views/Categories.vue'
import CategoryForm from '@/views/CategoryForm.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/categories',
        component: Categories
      },
      {
        path: '/category/create',
        component: CategoryForm
      },
      {
        path: '/category/:id/edit',
        component: CategoryForm
      },
      {
        path: '/cars',
        component: Cars
      },
      {
        path: '/car/create',
        component: CarForm
      },
      {
        path: '/car/:id/edit',
        component: CarForm
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
