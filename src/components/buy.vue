<template lang="html">
  <div class="container">
    <div class="head">
      <div class="return"></div>
      <div class="film-name">神奇女侠</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
  height: 100%;
  background-color: #f0efed;
}
</style>
