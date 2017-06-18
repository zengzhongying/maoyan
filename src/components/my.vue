<template lang="html">
  <div class="container">
    <div class="mycart">
      <div @click="goreturn" class="return"></div>
      <span>我的订单</span>
    </div>
    <ul class="cartlist">
      <div v-for="(item, index) in $store.state.cart" class="cartdetail">
        <li>
          <div>
            <span>电影:</span>
            <span>{{item.movienm}}</span>
          </div>
        </li>
        <li>
          <div>
            <span>影院:</span>
            <span>{{item.where}}</span>
          </div>
        </li>
        <li>
          <div>
            <span>时间:</span>
            <span>{{item.time}}</span>
          </div>
        </li>
        <div @click="del(index)" class="del">退票</div>
      </div>
    </ul>
    <div class="delmessage">
      <div class="delsuccess">退票成功</div>
      <div @click="close" class="one">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goreturn: function() {
      this.$router.go(-1);
    },
    del: function(index) {
      // console.log(index)
      this.$store.state.cart.splice(index,1);
      document.querySelector('.delmessage').style.display = 'block';
    },
    close: function() {
      document.querySelector('.delmessage').style.display = 'none';
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
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
.mycart {
  width: 100%;
  height: 100px;
  background-color: #f34d41;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: #fff;
  line-height: 100px;
}
.cartlist {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
}
.cartlist li {
  font-size: 35px;
}
.cartdetail {
  background-color: #f1f1f1;
  /*border-top: 2px solid #f34d41;*/
  border-bottom: 2px solid #f34d41;
  padding-top: 10px;
  padding-left: 10px;
}
.del {
  position: relative;
  font-size: 30px;
  margin-left: 600px;
  margin-right: 50px;
  margin-top: -30px;
  top: -20px;
  height: 50px;
  border: 4px solid #f34d41;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  color: #666;
  font-weight: 900;
}
.delmessage {
  position: fixed;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0,0,0,.8);
  font-size: 40px;
  color: #fff;
  z-index: 999;
  padding-top: 500px;
  display: none;
}
.delsuccess {
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
