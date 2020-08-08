import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp.vue'
import ClickMe from '@/components/ClickMe.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/ClickMe',
      name: 'ClickMe',
      component: ClickMe
    }

  ]
})
