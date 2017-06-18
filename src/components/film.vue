<template lang="html">
  <div>
    <div class="big-container">
      <div @click="clickfilm(index)" v-for="(movie, index) in movies" class="container">
        <img v-bind:src="movie.img" class="movie-img">
        <div class="movie-right">
          <div class="movie-detail">
            <div class="film">
              <span class="movie-name">{{movie.nm}}</span>
              <div class="film-type">
                <span v-bind:class="[movie['3d'] ? 'isthreed' : 'nothreed']">3D</span>
                <span v-bind:class="[movie.imax ? 'isimax' : 'noimax']">IMAX</span>
              </div>
              <span v-if="movie.preSale" class="wish">{{movie.wish}}</span>
              <span class="score" v-else>{{movie.sc}}</span>
            </div>
          </div>
          <p class="movie-type">{{movie.cat}}</p>
          <p class="star">主演:{{movie.star}}</p>
          <p class="movie-show">{{movie.rt}}</p>
          <div @click="clickprebuy(index)" v-if="movie.preSale" class="button pre-button">预售</div>
          <div @click="clickbuy(index)" class="button" v-else>购票</div>
        </div>
      </div>
    </div>
    <div @click="clickaboutme" class="about-me">
      <i class="aboutme-icon">&#xe643;</i>
      <span>关于我</span>
    </div>
    <div @click="clickmy" class="my">
      <i class="my-icon">&#xe605;</i>
      <span class="my-text">我的</span>
    </div>
  </div>
</template>

<script>
import buy from './buy'
import filmdetail from './filmdetail'
import my from './my'
export default {
  data () {
    return {
      movies:{}
    }
  },
  render: function (createElement) {
        debugger;
      let items = res.data.data.movies;
          //items = JSON.stringify(items);
      let num = objectLength(items);
    },
  created () {
    this.$http.get('api/film').then((res) => {
      this.movies = res.data.data.movies;
      // console.log(this.movies[0])
      // console.log(JSON.parse(res.replace(/\\/g, '')));
    })
  },
  methods: {
    clickfilm: function(index) {
      this.$router.push(`/filmdetail/${this.movies[index].id}`);
      this.$store.commit('filmindex', this.movies[index]);
      // this.$store.state.filmName = this.movies[index].nm;
      // this.$store.state.movieid = this.movies[index].id;
      // console.log(this.$store.state.movieid)
    },
    clickprebuy: function(index) {
      this.$router.push(`/buy/${this.movies[index].id}`);
      this.$store.commit('filmindex', this.movies[index]);
      event.stopPropagation();
      let dd = new Date();
      let str0 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+1);
      let str1 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+2);
      let str2 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+3);
      let str3 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+4);
      let prebuyday = [];
      prebuyday.push(str0,str1,str2,str3);
      this.$store.state.day = prebuyday;
      this.$store.state.choosecinema = true;
      // console.log(this.movies[index].id)
    },
    clickbuy: function(index) {
      this.$router.push(`/buy/${this.movies[index].id}`);
      this.$store.commit('filmindex', this.movies[index]);
      event.stopPropagation();
      let d = new Date();
      let str0 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let str1 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+1);
      let str2 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+2);
      let str3 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+3);
      let buyday = [];
      buyday.push(str0,str1,str2,str3);
      this.$store.state.day = buyday;
      this.$store.state.choosecinema = true;
    },
    clickmy: function() {
      this.$router.push({path:'/my'});
    },
    clickaboutme: function() {
      this.$router.push({path:'/aboutme'});
    }
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 327962 */
  src: url('//at.alicdn.com/t/font_pd3a7nu73ng3c8fr.eot');
  src: url('//at.alicdn.com/t/font_pd3a7nu73ng3c8fr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_pd3a7nu73ng3c8fr.woff') format('woff'),
  url('//at.alicdn.com/t/font_pd3a7nu73ng3c8fr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_pd3a7nu73ng3c8fr.svg#iconfont') format('svg');
}
.big-container {
  margin: 25px;
}
.container {
  margin-top: 20px;
  display: -webkit-flex;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  text-decoration: none;
  color: #000;
}
.film {
  display: -webkit-flex;
  display: flex;
}
.movie-img {
  height: 200px;
}
.movie-right {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.movie-detail {
  width: 600px;
  display: -webkit-flex;
  display: flex;
  height: 50px;
}
.movie-name {
  display: block;
  margin-right: 10px;
  max-width: 310px;
  font-size: 32px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.film-type {
  display: -webkit-flex;
  display: flex;
  margin-top: 8px;
}
.isthreed {
  display: block;
  font-size: 16px;
  color: #fff;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #8BB7CE;
  border-radius: 5px 0 0 5px;
}
.nothreed {
  display: none;
}
.isimax {
  font-size: 16px;
  color: #8BB7CE;
  display: block;
  width: 50px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border: 1px solid #8BB7CE;
}
.noimax {
  display: none;
}
.wish {
  position: absolute;
  line-height: 50px;
  font-size: 30px;
  color: #FFB400;
  /*right: 10px;*/
  right: 32px;
}
.wish::after {
  content:"人想看";
  font-size: 20px;
  color: #FFB400;
}
.score {
  position: absolute;
  line-height: 50px;
  font-size: 30px;
  color: #FFB400;
  right: 32px;
}
.score::after {
  content:"分";
  font-size: 20px;
  color: #FFB400;
}
.movie-right p {
  font-size: 25px;
  margin-top: 5px;
}
.movie-show {
  color: #999;
}
.movie-type, .star {
  color: #666;
}
.button {
  background-color: rgb(229,72,71);
  position: absolute;
  font-size: 25px;
  text-align: center;
  line-height: 55px;
  color: #fff;
  width: 95px;
  height: 55px;
  border-radius: 6px;
  margin-top: 150px;
  left: 660px;
  text-decoration: none;
}
.pre-button {
  background-color: #52B0EB;
}
.my {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  top: 1200px;
  left: 630px;
  /*border: 4px solid #999;*/
  width: 120px;
  height: 120px;
  border-radius: 50%;
  text-align: center;
  color: #e54847;
  box-shadow: 0 0 6px rgba(0,0,0,.25);
  background-color: #fff;
}
.my-icon {
  font-family: 'iconfont';
  font-style: normal;
  font-size: 45px;
  margin-top: 20px;
}
.my-text {
  font-size: 25px;
}
.about-me {
  position: fixed;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  z-index: 888;
  top: 1200px;
  left: 40px;
  /*border: 4px solid #999;*/
  width: 120px;
  height: 120px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: #e54847;
  box-shadow: 0 0 6px rgba(0,0,0,.25);
  background-color: #fff;
  font-size: 20px;
}
.aboutme-icon {
  font-family: 'iconfont';
  font-style: normal;
  font-size: 45px;
  margin-top: 10px;
}
</style>
