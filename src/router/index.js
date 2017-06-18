import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home_header from '../components/Home_header'
import film from '../components/film'
import cinema from '../components/cinema'
import buy from '../components/buy'
import filmdetail from '../components/filmdetail'
import cinemadetail from '../components/cinemadetail'
import my from '../components/my'
import aboutme from '../components/aboutme'

Vue.use(Vuex)
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
      path: '/buy/:id',
      component: buy
    },
    {
      path: '/filmdetail/:id',
      component: filmdetail
    },
    {
      path: '/cinemadetail/:id',
      component: cinemadetail
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/aboutme',
      component: aboutme
    }
  ]
})
