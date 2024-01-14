<template>
  <div class="my" style="width: 100vw; height: 100vh;overflow: auto;">
    <div v-show="store.token.length == 0">
      <div class="box">
        <div
          style="
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-bottom: 90px;
          "
        >
          <img
            src="../../static/icon/uploads/goods_big_1.jpg"
            style="width: 70px; height: 70px; border-radius: 50%"
            alt=""
          />
          <div>
            <h1 style="font-size: 20px; margin-bottom: 10px">未登录</h1>
            <p @click="go">点击登录账号</p>
          </div>
        </div>
        <div>
          <a
            href="#"
            @click="add"
            style="margin-right: 20px; margin-bottom: 90px"
            >设置</a
          >
        </div>
      </div>
      <u-love></u-love>
    </div>
    <div v-show="store.token.length != 0">
      <div class="box">
        <div
          style="
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-bottom: 90px;
          "
          @click="xiugai"
        >
          <img
            :src="store.Information.avatar"
            style="width: 70px; height: 70px; border-radius: 50%"
            alt=""
          />
          <div>
            <h1 style="font-size: 20px; margin-bottom: 10px">
              {{ store.Information.nickname }}
            </h1>
            <button
              style="
                /* padding: 5px; */
                border: 1px solid #fff;
                border-radius: 20px;
                color: #fff;
                background-color: #00c19d;
              "
            >
              更改头像昵称
            </button>
          </div>
        </div>
        <div>
          <a
            href="#"
            @click="add"
            style="margin-right: 20px; margin-bottom: 90px"
            >设置</a
          >
        </div>
      </div>
      <u-love></u-love>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
const store = useUserStore();

const add = () => {
  uni.navigateTo({
    url: "/pages/SetUp/index",
  });
};
const go = () => {
  console.log(111);

  uni.navigateTo({
    url: "/pages/login/index",
  });
};
</script>

<style lang="scss" scoped>
.box {
  background-image: url("../../static/icon/images/center_bg.png");
  background-size: 750rpx 450rpx;
  width: 100%;
  height: 250px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
</style>
