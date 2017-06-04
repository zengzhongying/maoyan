<template lang="html">
  <div class="container">
    <div class="download">
      <div class="image">
        <img src="//ms0.meituan.net/canary/img/avatar.png" alt="">
      </div>
      <div class="maoyan-text">
        <h2>猫眼电影</h2>
        <div class="des">在线选座，热门影讯，爱上看电影</div>
      </div>
      <div class="open">打开</div>
    </div>
    <div class="change-city">
      <router-link to="/" class="return"></router-link>
      <div class="nav-title">切换城市</div>
    </div>
    <div class="cities">
      <h3>热门城市</h3>
      <h3>A</h3>
      <h3>B</h3>
      <h3>C</h3>
      <h3>D</h3>
      <h3>E</h3>
      <h3>F</h3>
      <h3>G</h3>
      <h3>H</h3>
      <h3>J</h3>
      <h3>K</h3>
      <h3>L</h3>
      <h3>M</h3>
      <h3>N</h3>
      <h3>P</h3>
      <h3>Q</h3>
      <h3>R</h3>
      <h3>S</h3>
      <h3>T</h3>
      <h3>W</h3>
      <h3>X</h3>
      <h3>Y</h3>
      <h3>Z</h3>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.container{
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.download {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
}
.image {
  margin-right: 20px;
}
h2 {
  font-size: 35px;
}
.des {
  color: #999;
  font-size: 25px;
  line-height: 40px;
}
.open {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #f34d41;
  color: #fff;
  font-size: 25px;
  border-radius: 10px;
  margin-left: 125px;
  margin-top: 20px;
}
.change-city {
  width: 100%;
  height: 100px;
  background-color: #f34d41;
  display: -webkit-flex;
  display: flex;
}
.return {
  width: 30px;
  height: 30px;
  background-color: #f34d41;
  transform: rotate(45deg);
  margin-top: 30px;
  margin-left: 30px;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
}
.nav-title {
  font-size: 35px;
  color: #fff;
  margin-left: 250px;
  margin-top: 25px;
}
.cities h3{
  font-size: 30px;
  border-bottom: 1px solid #ccc;
  height: 80px;
  padding-left: 35px;
  line-height: 80px;
}
.cities h3::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  left: 670px;
  background-color: #fff;
  transform: rotate(-45deg);
  margin-top: 30px;
  margin-left: 30px;
  border-left: 5px solid #ccc;
  border-bottom: 5px solid #ccc;
}
</style>
