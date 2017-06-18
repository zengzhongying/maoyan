<template lang="html">
  <div class="container">
    <div class="film-name">
      <div @click="goreturn" class="return"></div>
      <div class="nav-title">{{filmdetail.nm}}</div>
    </div>
    <div class="movie-detail">
      <div class="movies-detail_left">
        <img v-bind:src="filmdetail.img">
      </div>
      <div class="movies-detail_right">
        <span class="movie-name">{{filmdetail.nm}}</span><br>
        <span class="score">用户评分:<span>{{filmdetail.sc}}</span>分</span>
        <div class="first">
          <span class="movie-cat">{{filmdetail.src}}</span>
          <span class="cinema-type">{{filmdetail.ver}}</span>
        </div>
        <div class="second">
          <div class="dur">片长:<span>{{filmdetail.dur}}</span>分钟</div>
        </div>
        <div class="third">
          <div class="movie-show">{{filmdetail.rt}}</div>
        </div>
      </div>
    </div>
    <div class="buy">
      <div v-if="filmdetail.showSnum" @click="buynow" class="buy-btn">立即购票</div>
      <div v-else @click="prebuynow" class="prebuy-btn">提前抢购</div>
      <div class="moviescm" v-html="filmdetail.dra"></div>
    </div>
    <div class="tips">
      <div class="tips-nav">观影小贴士</div>
      <div class="tip">
        <img src="http://p1.meituan.net/mmdb/e49359ae45d86640f5f050b002413b601915.png">
        <span class="tip-content">{{$store.state.tips[parseInt(3*Math.random())]}}</span>
      </div>
    </div>
    <video v-bind:src="filmdetail.vd" class="video" autoplay="true" controls></video>
    <div class="comment">
      <div class="comment-head">短评</div>
      <div v-for="item in hotcomment" class="comment-content">
        <div class="text">{{item.content}}</div>
        <div class="audience">
          <img v-bind:src="item.avatarurl">
          <span class="nick">{{item.nick}}</span>
          <div class="approve">
            <i class="zan">&#xe606;</i>
            <span class="zan-count">{{item.approve}}</span>
          </div>
          <div class="reply">
            <i class="huifu">&#xe62d;</i>
            <span class="huifu-count">{{item.reply}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filmdetail:{},
      filmcomment:{},
      hotcomment:{}
    }
  },
  render: function (createElement) {
        debugger;
      let items = res.data.data.filmdetail;
          //items = JSON.stringify(items);
      let num = objectLength(items);
    },
  created () {
    this.$http.get(`api/filmdetail/${this.$route.params.id}`).then((res) => {
      this.filmdetail = res.data.data.MovieDetailModel;
      this.filmcomment = res.data.data.CommentResponseModel;
      this.hotcomment = res.data.data.CommentResponseModel.hcmts;
      // console.log(this.filmdetail);
      // console.log(this.filmcomment);
      // console.log(this.hotcomment);
      // console.log(this.$store.state.movieid);
      // console.log(JSON.parse(res.replace(/\\/g, '')));
    })
  },
  methods: {
    goreturn: function() {
      this.$router.go(-1);
    },
    buynow: function() {
      let d = new Date();
      let str0 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let str1 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+1);
      let str2 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+2);
      let str3 = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+3);
      let buyday = [];
      buyday.push(str0,str1,str2,str3);
      // this.$store.state.day.push(str0,str1,str2,str3);
      this.$store.state.day = buyday;
      this.$router.push(`/buy/${this.filmdetail.id}`);
      this.$store.state.choosecinema = true;
    },
    prebuynow: function() {
      let dd = new Date();
      let str0 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+1);
      let str1 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+2);
      let str2 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+3);
      let str3 = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+(dd.getDate()+4);
      let prebuyday = [];
      prebuyday.push(str0,str1,str2,str3);
      this.$store.state.day = prebuyday;
      this.$router.push(`/buy/${this.filmdetail.id}`);
      this.$store.state.choosecinema = true;
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
  left: 0;
  top: 0;
  width: 100%;
  /*height: 100%;*/
  background-color: #e5e5e5;
}
.download {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
  background-color: #fff;
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
.film-name {
  width: 100%;
  height: 100px;
  background-color: #f34d41;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
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
.nav-title {
  font-size: 35px;
  color: #fff;
  margin-top: 25px;
  width: 530px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.movie-detail {
  display: -webkit-flex;
  display: flex;
  height: 360px;
  align-items: center;
  background-color: rgba(0,0,0,.7);
  font-size: 25px;
  /*opacity:0.3;*/
}
.movies-detail_left img {
  width: 210px;
  height: 290px;
  margin-left: 60px;
  margin-right: 50px;
}
.movies-detail_right {
  color: #ccc;
  line-height: 40px;
  margin-right: 50px;
}
.movie-name {
  font-size: 40px;
  color: #fff;
}
.score span {
  margin-left: 20px;
  color: #f90;
  font-size: 40px;
}
.buy {
  background-color: #fff;
  padding-top: 30px;
  border-bottom: 1px solid #ccc;
}
.buy-btn {
  background-color: #e54847;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  color: #fff;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
}
.prebuy-btn {
  background-color: #52B0EB;
  text-align: center;
  line-height: 80px;
  font-size: 35px;
  color: #fff;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
}
.moviescm {
  margin: 0 30px;
  font-size: 30px;
  margin-bottom: 30px;
}
.tips {
  margin-top: 30px;
  background-color: #fff;
}
.tip {
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  display: -webkit-flex;
  display: flex;
}
.tips-nav {
  font-size: 30px;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
}
.tip-content {
  margin-left: 30px;
  font-size: 30px;
  align-items: center;
}
.video {
  width: 780px;
}
.comment {
  margin-top: 20px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.comment-head {
  font-size: 35px;
  font-weight: bold;
  color: #666;
  border-bottom: 1px solid #ccc;
  height: 90px;
  line-height: 90px;
  padding-left: 30px;
}
.text {
  width: 730px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 30px;
  padding-left: 30px;
}
.audience {
  padding-left: 30px;
  padding-top: 20px;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  padding-bottom: 30px;
}
.nick {
  margin-left: 30px;
  font-size: 25px;
  color: #999;
}
.audience img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.zan {
  font-family: "iconfont";
  font-size: 35px;
  font-style: normal;
  position: absolute;
  right: 250px;
  line-height: 10px;
}
.huifu {
  font-family: "iconfont";
  font-size: 30px;
  font-style: normal;
  position: absolute;
  left: 620px;
  line-height: 16px;
}
.zan-count, .huifu-count {
  font-size: 25px;
  position: absolute;
  line-height: 12px;
}
.zan-count {
  left: 550px;
}
.huifu-count {
  left: 670px;
}
</style>
