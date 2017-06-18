<template lang="html">
  <div class="container">
    <div class="aboutme-nav">
      <div class="aboutme">
        <div @click="goreturn" class="return"></div>
        <span class="about-text">关于我</span>
      </div>
      <div class="name">曾中应</div>
      <div class="iwant">
        <p>求职意向:</p>
        <span>Web前端实习生</span>
      </div>
      <div class="my-detail">
        <div class="main-detail">
          <span>个人信息:</span>
          <p>学校: 东华理工大学</p>
          <p>专业: 软件工程(本科)</p>
          <p>年级: 大三</p>
          <p>Github: <a href="https://github.com/zengzhongying">Github链接</a></p>
          <p>个人网站:  <a href="http://www.orangefe.com/">码农</a></p>
          <p>电话:13170887742</p>
        </div>
        <div class="other-detail">
          <span>其它信息:</span>
          <p>QQ:  1363421830</p>
          <p>微信:  qq1363421830</p>
          <p>E-mail:</p>
          <p>1363421830@qq.com</p>
          <p>掘金栏: <a href="https://juejin.im/user/58e63d78ac502e006c2868aa">掘金链接</a></p>
          <p>SegmentFault: </p>
          <p><a href="https://segmentfault.com/u/zi_58b295e5c2d7a">Segmentfault链接</a></p>
        </div>
      </div>

    </div>
    <div class="message">
      <div class="technology">
        <i class="technology-icon">&#xe603;<span>技术栈</span></i>
        <div class="technology_detail">
          <p>【前端】 Vue.js、CSS/CSS3、</p>
          <p>HTML/HTML5、JavaScript(ES5、ES6)、</p>
          <p>SASS(SCSS)、stylus、微信小程序...</p>
          <p>【后端】 Node.js(Express.js)</p>
          <p>【自动化构建】 Webpack、Gulp</p>
          <p>【版本管理】 Git</p>
        </div>
      </div>
      <div class="works">
        <i class="works-icon">&#xe60b;<span>作品</span></i>
        <div class="works_detail">
          <p>Vue.js全家桶DIY一个电影购票平台(参考猫眼电影)</p>
        </div>
      </div>
      <div class="Introduction">
        <i class="Introduction-icon">&#xe630;<span>个人简介</span></i>
        <div class="Introduction_detail">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;我是就读于东华理工大学的一名软件工程专业大三学生，在校有良好的编程基础，
            因对前端编程产生了较为浓厚的兴趣，所以自学了前端编程。本人崇尚开源，平时喜欢浏览一些技术博客，对新技术有渴望和热情，也有较强的学习能力。
          生活方面，我为人乐观开朗，善于与他人交流，极易与他人和平相处，希望能去到一家技术栈较为新颖的公司实习，在实习中不断成长，
        我坚信，在互联网时代里，只有不断学习进步，才不会被社会淘汰!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goreturn: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 329321 */
  src: url('//at.alicdn.com/t/font_shy9rvq2veryhkt9.eot');
  src: url('//at.alicdn.com/t/font_shy9rvq2veryhkt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_shy9rvq2veryhkt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_shy9rvq2veryhkt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_shy9rvq2veryhkt9.svg#iconfont') format('svg');
}
.container {
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  display: -webkit-flex;
  display: flex;
}
.aboutme-nav {
  width: 340px;
  background-color: rgb(229,72,71);
}
.aboutme {
  width: 340px;
  background-color: rgb(229,72,71);
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-bottom: 4px solid #fff;
}
.return {
  width: 25px;
  height: 25px;
  left: 30px;
  background-color: rgb(229,72,71);
  transform: rotate(45deg);
  /*margin-top: 30px;*/
  margin-left: -60px;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
}
.about-text {
  font-size: 40px;
  color: #fff;
  letter-spacing: 4px;
  margin-left: 20px;
}
.iwant {
  font-size: 30px;
  margin: 40px 10px 60px 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid #fff;
  color: #fff;
}
.iwant span {
  margin-left: 40px;
}
.name {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 900;
  margin-left: 10px;
  color: #fff;
}
.my-detail span {
  display: block;
  font-size: 35px;
  margin-bottom: 20px;
  margin-top: 50px;
}
.main-detail {
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 20px;
  font-size: 30px;
  color: #fff;
  line-height: 60px;
  border-bottom: 2px solid #fff;
}
.other-detail {
  padding-left: 10px;
  font-size: 30px;
  color: #fff;
  line-height: 60px;
}
.message {
  background-color: #fff;
  width: 442px;
  padding-left: 20px;
}
.technology-icon, .works-icon, .Introduction-icon {
  font-family: 'iconfont';
  font-style: normal;
  font-size: 40px;
  color: rgb(229,72,71);
  font-weight: 900;
}
.technology_detail, .works_detail, .Introduction_detail {
  font-size: 30px;
  color: rgb(229,72,71);
}
.technology, .works {
  margin-top: 20px;
  border-bottom: 2px solid rgb(229,72,71);
  margin-right: 10px;
  padding-bottom: 20px;
}
.Introduction {
  margin-top: 20px;
  margin-right: 10px;
}
</style>
