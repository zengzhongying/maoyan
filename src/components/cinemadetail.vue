<template lang="html">
  <div class="container">
    <div class="header">
      <div @click="clickcinema" class="return"></div>
      <div class="cinema-name">{{cinemadetail.cinemaDetailModel.nm}}</div>
    </div>
    <div class="bg">
      <div class="cinema-place">
        <div class="cinema_name">{{cinemadetail.cinemaDetailModel.nm}}</div>
        <div class="place">{{cinemadetail.cinemaDetailModel.addr}}</div>
      </div>
      <i class="phone">&#xe621;</i>
    </div>
    <ul class="show-movies">
      <li @click="clickfilmdetail(index)" v-for="(movie,index) in cinemadetail.movies">
        <div><img v-bind:src="movie.img"></div>
        <div class="right">
          <div>{{movie.nm}}</div>
          <div v-if="movie.isShowing" class="isshowing">已上映</div>
          <div class="notshowing" v-else>未上映</div>
          <div class="movie-type">{{movie.ver}}</div>
          <div v-if="movie.isShowing" @click="clickbuy(index)" class="buy">立即购买</div>
          <div class="prebuy" @click="clickprebuy(index)" v-else>立即抢票</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cinemadetail:{
        cinemaDetailModel:{},
        movies:{},
        Dates:{}
      }
    }
  },
  render: function (createElement) {
        debugger;
      let items = res.data.data.filmdetail;
          //items = JSON.stringify(items);
      let num = objectLength(items);
    },
  created () {
    this.$http.get(`api/cinemadetail/${this.$route.params.id}`).then((res) => {
      this.cinemadetail = res.data.data;
      // console.log(this.cinemadetail);
      // console.log(this.cinemadetail.movies);
      // console.log(JSON.parse(res.replace(/\\/g, '')));
    })
  },
  methods: {
    clickcinema: function() {
      this.$router.push('/cinema');
    },
    clickfilmdetail: function(index) {
      // console.log(index);
      this.$router.push(`/filmdetail/${this.cinemadetail.movies[index].id}`);
    },
    clickbuy: function(index) {
      this.$router.push(`/buy/${this.cinemadetail.movies[index].id}`);
      this.$store.state.cinemanm = this.cinemadetail.cinemaDetailModel.nm;
      this.$store.state.choosecinema = false;
      // console.log(this.$store.state.choosecinema)
      event.stopPropagation();
      let d = new Date();
      let str0 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let str1 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+1);
      let str2 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+2);
      let str3 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+3);
      let buyday = [];
      buyday.push(str0,str1,str2,str3);
      this.$store.state.day = buyday;
      // console.log(this.cinemadetail.cinemaDetailModel.nm)
    },
    clickprebuy: function(index) {
      this.$router.push(`/buy/${this.cinemadetail.movies[index].id}`);
      this.$store.state.cinemanm = this.cinemadetail.cinemaDetailModel.nm;
      this.$store.state.choosecinema = false;
      event.stopPropagation();
      let dd = new Date();
      let str0 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+1);
      let str1 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+2);
      let str2 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+3);
      let str3 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+4);
      let prebuyday = [];
      prebuyday.push(str0,str1,str2,str3);
      this.$store.state.day = prebuyday;
    }
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 324706 */
  src: url('//at.alicdn.com/t/font_bxtqj9viyheel8fr.eot');
  src: url('//at.alicdn.com/t/font_bxtqj9viyheel8fr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_bxtqj9viyheel8fr.woff') format('woff'),
  url('//at.alicdn.com/t/font_bxtqj9viyheel8fr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_bxtqj9viyheel8fr.svg#iconfont') format('svg');
}
.container {
  position: absolute;
  width: 100%;
  /*height: 100%;*/
  top: 0;
  background-color: rgb(240,239,237);
}
.header {
  width: 100%;
  height: 100px;
  background-color: #f34d41;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.return {
  width: 30px;
  height: 30px;
  left: 30px;
  background-color: #f34d41;
  transform: rotate(45deg);
  margin-top: 30px;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: absolute;
}
.bg {
  width: 100%;
  background-color: #fff;
  padding-top: 30px;
  display: -webkit-flex;
  display: flex;
  /*margin-bottom: -20px;*/
}
.cinema-name {
  font-size: 40px;
  color: #fff;
  margin-top: 25px;
  width: 530px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.cinema-place {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  line-height: 45px;
  margin-bottom: 40px;
}
.cinema-place::after {
  content:'';
  position: absolute;
  width: 50px;
  height: 60px;
  border-right: 2px solid #d8d8d8;
  left: 600px;
  top: 150px;
}
.cinema_name {
  font-size: 30px;
}
.place {
  width: 600px;
  font-size: 25px;
  color: #666;
  word-wrap: break-word;
}
.phone {
  font-family: "iconfont";
  font-size: 60px;
  font-style: normal;
  color: rgb(0,186,165);
  position: absolute;
  left: 690px;
  top: 150px;
}
.show-movies li{
  background: #fff;
  display: -webkit-flex;
  display: flex;
  font-size: 30px;
  height: 180px;
  margin-top: 10px;
}
.show-movies li img {
  width: 140px;
  height: 172px;
  border: 4px solid yellow;
}
.right {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.buy {
  /*border: 1px solid red;*/
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #f34d41;
  color: #fff;
  text-align: center;
  line-height: 50px;
  margin-left: 450px;
}
.prebuy {
  /*border: 1px solid red;*/
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #52B0EB;
  color: #fff;
  text-align: center;
  line-height: 50px;
  margin-left: 450px;
}
</style>
