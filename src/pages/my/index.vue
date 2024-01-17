<template>
  <div
    class="my"
    style="width: 100vw; height: 100vh; overflow: auto; position: relative"
  >
    <div v-show="store.token.length == 0">
      <div class="box">
        <div
          style="
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-bottom: 90px;
            position: relative;
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
      <div
        style="
          width: 80%;
          margin-left: 24px;
          padding: 20px;
          position: absolute;
          top: 110px;
          left: 0;
          background-color: #fff;
          border-radius: 20rpx;
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          "
        >
          <h2>我的订单</h2>
          <p>查看全部订单></p>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-around;
          "
          class="box3"
        >
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/1.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/2.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/3.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/4.png"
            alt=""
          />
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
            position: relative;
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
              @click="moi"
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
      <div
        style="
          width: 80%;
          margin-left: 24px;
          padding: 20px;
          position: absolute;
          top: 110px;
          left: 0;
          background-color: #fff;
          border-radius: 20rpx;
        "
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          "
        >
          <h2>我的订单</h2>
          <p>查看全部订单></p>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-around;
          "
          class="box3"
        >
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/1.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/2.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/3.png"
            alt=""
          />
          <img
            style="width: 60px; height: 60px"
            src="../../static/icon/my/4.png"
            alt=""
          />
        </div>
      </div>
      <u-love></u-love>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { onLoad } from "@dcloudio/uni-app";

const moi=()=>{
  uni.navigateTo({ url: '/pages/moi/index' })
}

let store = useUserStore();
onLoad(() => {
  store = useUserStore();
});
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
.box3 {
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
