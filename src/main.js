// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios';

Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    filmName:"",
    movieid:"",
    tips: ["不用等了，木有彩蛋","小学生及学龄前儿童应在家长陪同下观看","影院内请勿喧哗"],
    cinemaid:"",
    day: [],
    date: "请选择日期",
    cinemanm: "请选择影院",
    choosecinema: true,
    cart: [],
    cartlist: {
      movienm:"",
      where:"",
      time:""
    }
  },
  mutations: {
    filmindex (state, movie) {
      state.filmName = movie.nm
      state.movieid = movie.id
    }

  }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
