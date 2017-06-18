<template lang="html">
  <div class="container">
    <div class="head">
      <div @click="goreturn" class="return"></div>
      <div class="film-name">
        <div class="movie-name">{{buymovie.nm}}</div>
      </div>
      <div @click="surebuy" class="buybtn">确定购买</div>
      <div class="nav">
        <div class="date_num"><span>日期:</span>{{this.$store.state.date}}</div>
        <div class="cinemanm"><span>影院:</span>{{this.$store.state.cinemanm}}</div>
      </div>
      <div class="choose-day">
        <div class="choosetext">请选择日期:</div>
        <div class="day" v-for="(item,index) of this.$store.state.day">
            <li @click="chooseday(index)" class="date">{{item}}</li>
        </div>
      </div>
      <div v-if="$store.state.choosecinema" class="choose-cinema">
        <div class="choosetext">请选择影院:</div>
        <ul class="cinema">
          <div v-for="(value, key) of cinema">
            <li @click="choosecinema(item)" v-for="(item, index) in value" class="cinema-name">{{item.nm}}</li>
          </div>
        </ul>
      </div>
    </div>
    <div class="message">
      <div class="success"></div>
      <div @click="close" class="one">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buymovie:{},
      cinema:{}
    }
  },
  render: function (createElement) {
        debugger;
      let items = res.data.data.filmdetail;
          //items = JSON.stringify(items);
      let num = objectLength(items);
      let cinemaitems = res.data.data.cinema;
          //items = JSON.stringify(items);
      let cinemanum = objectLength(cinemaitems);

    },
  created () {
    this.$http.get(`api/filmdetail/${this.$route.params.id}`).then((res) => {
      this.buymovie = res.data.data.MovieDetailModel;
      // console.log(this.buymovie)
    })
    this.$http.get('api/cinema').then((res) => {
      // console.log(res);
      this.cinema = res.data.data;
      // console.log(this.cinema);
      // console.log(this.$store.state.day)
    })
  },
  methods: {
    goreturn: function() {
      this.$router.go(-1);
      this.$store.state.date = "请选择日期";
      this.$store.state.cinemanm = "请选择影院";
    },
    chooseday: function(index) {
      this.$store.state.date = this.$store.state.day[index];
      // console.log(this.$store.state.date);
    },
    choosecinema: function(item) {
      this.$store.state.cinemanm = item.nm;
      // console.log(this.$store.state.cinemanm)
      // this.$store.state.cinemanm = this.item;
    },
    surebuy: function() {
      if(this.$store.state.date === "请选择日期" || this.$store.state.cinemanm === "请选择影院") {
        document.querySelector('.success').innerHTML = "请将信息填写完整";
      } else {
        document.querySelector('.success').innerHTML = "购买成功!";
        this.$store.state.cartlist.where = this.$store.state.cinemanm;
        this.$store.state.cartlist.time = this.$store.state.date;
        this.$store.state.cartlist.movienm = document.querySelector('.movie-name').innerHTML;
        this.$store.state.cart.push(this.$store.state.cartlist);
        this.$store.state.cartlist = {}
      }
      document.querySelector('.message').style.display = 'block';
    },
    close: function() {
      document.querySelector('.message').style.display = 'none';
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  position: absolute;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background-color: #f0efed;
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
.film-name {
  width: 100%;
  height: 100px;
  background-color: #f34d41;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.movie-name {
  font-size: 35px;
  color: #fff;
  margin-top: 25px;
  width: 530px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.choose-cinema {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.choosetext {
  font-size: 35px;
  height: 80px;
  line-height: 80px;
  border: 1px solid #999;
  padding-left: 20px;
}
.cinema-name, .date {
  background-color: #fff;
  border: 1px solid #999;
  font-size: 35px;
  height: 100px;
  line-height: 100px;
  display: block;
  padding-left: 20px;
}
.nav {
  background-color: #999;
  height: 100px;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
.date_num {
  font-size: 35px;
  border: 1px solid #red;
}
.cinemanm {
  font-size: 35px;
}
.buybtn {
  text-align: center;
  font-size: 40px;
  background-color: #666;
  height: 80px;
  line-height: 80px;
  border: 2px solid yellow;
  color: #fff;
  letter-spacing: 5px;
}
.message {
  position: fixed;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  font-size: 40px;
  color: #fff;
  z-index: 999;
  padding-top: 500px;
  display: none;
}
.success {
  text-align: center;
  margin-bottom: 100px;
}
.one {
  text-align: center;
  color: yellow;
  border: 2px solid yellow;
  width: 180px;
  margin-left: 295px;
  border-radius: 10px;
}
</style>
