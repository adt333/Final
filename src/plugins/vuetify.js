import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Router from '../router.js'

Vue.use(Router)
Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true
  }
})
