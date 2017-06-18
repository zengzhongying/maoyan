<template lang="html">
  <div>
    <div v-for="(value, key) of cinema">
      <div v-for="(item, index) of value"  @click="clickcinema(item)" class="container">
        <div class="first">
          <div class="cinema-name">{{item.nm}}</div>
          <div class="price">
            <span class="price_num">{{item.sellPrice}}</span>
            <span class="yuan">元起</span>
          </div>
        </div>
        <div class="second">
          <p class="adress">{{item.addr}}</p>
        </div>
        <div class="third">
          <div v-if="item.sell" class="seat">座</div>
          <div v-if="item.imax" class="imax">IMAX厅</div>
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
export default {
  data () {
    return {
      cinema:{}
    }
  },
  render: function (createElement) {
        debugger;
      let items = res.data.data.cinema;
          //items = JSON.stringify(items);
      let num = objectLength(items);
    },
  created () {
    this.$http.get('api/cinema').then((res) => {
      // console.log(res);
      this.cinema = res.data.data;
      // console.log(this.cinema["东湖区"][0].id);
      // console.log(JSON.parse(res.replace(/\\/g, '')));
    })
  },
  methods: {
    clickcinema: function(item) {
      // console.log(item)
      this.$router.push(`/cinemadetail/${item.id}`);
      this.$store.state.cinemaid = item.id;
      // console.log(item.id);
      // console.log(this.$store.state.cinemaid);
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
.container {
  padding: 25px 25px 35px 25px;
  border-bottom: 1px solid #ccc;
}
.first {
  display: -webkit-flex;
  display: flex;
}
.second {
  display: -webkit-flex;
  display: flex;
}
.cinema-name {
  font-size: 35px;
}
.price_num {
  margin-left: 40px;
  font-size: 35px;
  color: rgb(229,72,71);
}
.yuan {
  font-size: 20px;
  color: rgb(229,72,71);
}
.adress, .distance {
  color: rgb(120,120,120);
  font-size: 30px;
  line-height: 90px;
}
.adress {
  display: block;
  width: 670px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow: hidden;
}
.distance {
  margin-left: 30px;
}
.third {
  display: -webkit-flex;
  display: flex;
}
.seat {
  width: 40px;
  height: 40px;
  font-size: 25px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #589DAF;
  color: #589DAF;
  border-radius: 10px;
}
.imax {
  width: 105px;
  height: 40px;
  font-size: 25px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #589DAF;
  color: #589DAF;
  border-radius: 10px;
  margin-left: 15px;
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
