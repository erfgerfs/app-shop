<template>
  <div class="home">
    <div class="top" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <u-barindex></u-barindex>
      <u-Search></u-Search>
    </div>

    <div>
      <u-swiper></u-swiper>
      <u-category></u-category>
      <u-hot></u-hot>
      <u-love></u-love>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync();
console.log("safeAreaInsets", safeAreaInsets);
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  padding: 10px;
  background-color: #00c19e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.home {
  background-color: #f7f7f7;
  width: 100vw;
  height: 100vh;
  margin-bottom: 200rpx;
}
</style>
