import Vue from 'vue'
import Router from 'vue-router'

//组件
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Car = () => import('views/car/Car')
const Profile = () => import('views/profile/Profile')


Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
