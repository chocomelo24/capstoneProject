import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleCardView from "../views/SingleCardView.vue"

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component:()  => import ("../views/ProductsView.vue")
  },
  {
    path: '/Products/:id',
    name: 'SingleCardView',
    component: SingleCardView,
    props: true,
  },

  {
    path: '/',
    name: 'login',
    component:()  => import ("../views/LoginView.vue")
  },
  {
    path: '/register',
    name: 'register',
    component:() => import ("../views/RegisterView.vue")
  },

  {
    path: '/about',
    name: '/about',
    component:() => import ("../views/AboutView.vue")
  },

  {
    path: '/cart',
    name: '/cart',
    component:() => import ("../views/CartView.vue")
  },

  {
    path: '/contact',
    name: '/contact',
    component:() => import ("../views/ContactView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
