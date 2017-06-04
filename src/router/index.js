import Vue from 'vue'
import Router from 'vue-router'
import Home_header from '../components/Home_header'
import film from '../components/film'
import cinema from '../components/cinema'
import city from '../components/city'
import buy from '../components/buy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: film
    },
    {
      path: '/film',
      component: film
    },
    {
      path: '/cinema',
      component: cinema
    },
    {
      path: '/city',
      component: city
    },
    {
      path: '/buy',
      component: buy
    }
  ]
})
