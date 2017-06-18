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
  },
  data () {
    return {
      myData:[],
      idList:""
    }
  },
  methods: {
    show: function(){
       this.$http.jsonp("http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000",
       {//请求参数
         params: {
           wd:this.idList
         },
         jsonp:'cb'
       }).then(function(res){
         console.log(JSON.parse(res.bodyText).s)
         this.myData = JSON.parse(res.bodyText).s
         console.log(this.myData)
       },function(){
         console.log(1)
       });
    }
  }
}
</script>

<style>
@import '../static/index.css'
</style>
