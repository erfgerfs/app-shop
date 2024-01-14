<template>
  <div class="u-Search">
    <input type="text" placeholder="搜索商品" class="index1" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps();
</script>

<style lang="scss" scoped>
.index1 {
  width: 80%;
  margin-left: 5px;
  border-radius: 30px;
  background-color: #80e2d0;
  padding-left: 80rpx;
  margin-top: 14px;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
  color: #fff;
}
</style>
