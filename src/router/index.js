import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import PostDetail from '@/components/PostDetail'
import firebase from 'firebase'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
          requiresAuth: true
      }
  },
  ],
  mode:'history',
})
export default router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})