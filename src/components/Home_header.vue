<template>
<div>
  <div class="container">
    <!-- <router-link to="city" class="city">南昌</router-link> -->
    <!-- <a href="#" class="city" @click="selectcity = true">南昌</a> -->
    <div class="headText">爱电影</div>
  </div>
  <div class="choose">
    <router-link to="film" class="yingpian">影片</router-link>
    <router-link to="cinema" class="yingyuan">影院</router-link>
  </div>
</div>
</template>

<script>
import film from './film'
import cinema from './cinema'
export default {
  components: {
    film,
    cinema
  },
  data () {
    return {
      selectcity: false
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  background-color: rgb(229,72,71);
  display: -webkit-flex;
  display: flex;
  height: 100px;
}
.city {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
  font-size: 27px;
  color: #fff;
}
.city::after {
  content:"";
  position:absolute;
  border:12px solid transparent;
  border-left:13px solid #fff;
  border-bottom:13px solid #fff;
  transform: rotate(-45deg);
  margin-left: 8px;
  margin-top: -8px;
}
.headText {
  display: -webkit-flex;
  display: flex;
  align-items: center;
  font-size: 40px;
  color: #fff;
  height: 88px;
  margin:auto;
}
.choose {
  display: -webkit-flex;
  display: flex;
  border-bottom: 8px solid #ccc;
}
.yingpian {
  height: 70px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 25px;
  text-decoration: none;
  color: black;
}
.yingyuan {
  height: 70px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 25px;
  text-decoration: none;
  color: black;
}
</style>
