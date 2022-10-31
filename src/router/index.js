import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      guard(to, from, next);
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

var guard = (to, from, next) => {
  if (to.path === '/e') {
    next();
  } else {
    next('/login');
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
