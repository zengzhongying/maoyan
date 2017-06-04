<template>
  <div id="app">
    <Home_header></Home_header>
    <router-view></router-view>
  </div>
</template>

<script>
import Home_header from './components/Home_header'
// import film from './components/film'
// import cinema from './components/cinema'
// import buy from './components/buy'
export default {
  name: 'app',
  components: {
    Home_header,
    // film,
    // cinema,
    // buy
  }
}
</script>

<style>
@import '../static/index.css'
</style>
