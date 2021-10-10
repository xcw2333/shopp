import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import Home from '../components/home'
Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:login,
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/home',
    component:Home,
    beforeEnter: (to, from, next) => {
      next()
      if(window.sessionStorage.tokin!=''&&window.sessionStorage.tokin!=undefined){
        next()
      }else{
        next('/login')
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
