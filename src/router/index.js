import Vue from 'vue'
import Router from 'vue-router'
import Playground from '../components/Playground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Playground',
      component: Playground
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
})
