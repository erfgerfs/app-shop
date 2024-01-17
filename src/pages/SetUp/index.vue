<template>
  <div class="SetUp">
    <uni-list-item
      v-show="store.token.length != 0"
      title="我的收货地址"
      clickable
      @click="onClick1"
      link
      style="margin-bottom: 20px; margin-top: 20px"
    ></uni-list-item>
    <uni-list-item
      title="关于小兔鲜儿"
      clickable
      @click="onClick2"
      link
      style="margin-bottom: 20px"
    ></uni-list-item>
    <button
      style="margin-bottom: 20px"
      @click="quit"
      v-show="store.token.length != 0"
    >
      退出登录
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
const store = useUserStore();

const onClick1 = () => {
  uni.navigateTo({
    url: "/pages/address/index",
  });
};

const quit = () => {
  uni.clearStorageSync();
  uni.switchTab({
    url: "/pages/my/index",
  });
};
</script>

<style lang="scss" scoped>
.SetUp {
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
}
.uni-list-item {
  margin-bottom: 20px;
}
</style>
