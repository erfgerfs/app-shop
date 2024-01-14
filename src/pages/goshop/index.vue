<template>
  <view class="goshop">
    <!-- {{ id1.id2 }} -->
    <div class="ww"></div>
    <swiper style="height: 400px" indicator-dots autoplay circular>
      <swiper-item
        style="height: 400px"
        v-for="(item, index) in lb.lb1"
        :key="index"
      >
        <image :src="item" style="width: 100vw" mode="widthFix" />
        <!-- <img style="height: 100%" :src="item" alt="" /> -->
      </swiper-item>
    </swiper>
    <div
      style="
        width: 100%;
        padding: 20px;
        background-color: #35c8a9;
        font-size: 30px;
        color: #fff;
      "
    >
      ￥{{ love?.price }}
    </div>
    <div class="box">
      <div
        style="
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;

          padding-left: 20px;
        "
      >
        <h1 style="font-size: 24px; margin-bottom: 10px; margin-top: 10px">
          {{ love?.name }}
        </h1>
        <p style="color: red">{{ love?.desc }}</p>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">选择</span>
          <p style="margin-left: 20px">请选择商品规格</p>
        </div>
        <div style="margin-right: 20px">></div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">送至</span>
          <p style="margin-left: 20px">请选择收货地址</p>
        </div>
        <div style="margin-right: 20px">></div>
      </div>
      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ccc;
          font-size: 20px;
        "
      >
        <div style="display: flex; align-items: center">
          <span style="color: #ccc; margin-left: 20px">服务</span>
          <p style="margin-left: 20px">无忧退 快速退款 免费包邮</p>
        </div>
        <div style="margin-right: 20px">></div>
      </div>
    </div>
    <div class="box1">
      <b
        style="
          border-left: 5px solid #4fc6ad;
          padding-left: 10rpx;
          margin-bottom: 40px;
        "
        >详情</b
      ><br />
      <div
        v-for="(item, index) in aaa"
        :key="index"
        style="
          width: 100%;
          /* display: flex; */
          justify-content: center;

          margin: 20px 0;
          border-bottom: 3px dotted #ccc;
          padding-bottom: 20px;
        "
      >
        <span>{{ item.name }}</span>
        <span style="margin-left: 50px">{{ item.value }}</span>
      </div>
      <div v-for="(item, index) in aaa1" :key="index">
        <image :src="item" style="width: 100%" mode="widthFix" />
      </div>
    </div>
    <uni-goods-nav
      style="width: 100%; position: fixed; bottom: 0; left: 0"
      :fill="true"
      :options="gwc.options"
      :button-group="gwc.customButtonGroup"
      @click="onClick"
      @buttonClick="buttonClick"
    />
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";
import { xqApi } from "@/api/xq";
import type { xqReturn, Property } from "@/api/types/xqType";

const gwc = reactive({
  options: [
    {
      icon: "chat",
      text: "收藏",
    },

    {
      icon: "cart",
      text: "购物车",
    },
  ],
  buttonGroup: [
    {
      text: "加入购物车",
      backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
      color: "#fff",
    },
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff",
    },
  ],
  customButtonGroup: [
    {
      text: "加入购物车",
      backgroundColor: "linear-gradient(90deg, #1E83FF, #0053B8)",
      color: "#fff",
    },
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #60F3FF, #088FEB)",
      color: "#fff",
    },
  ],
  customButtonGroup1: [
    {
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff",
    },
  ],
});

const id1 = reactive({
  id2: "",
});

const love = ref<xqReturn>();
const lb = reactive({
  lb1: [],
});

const onClick = (e: any) => {
  uni.showToast({
    title: `点击${e.content.text}`,
    icon: "none",
  });
};
const buttonClick = (e: any) => {
  console.log(e);
  gwc.options.info++;
};

const aaa = ref<Property[]>();
const aaa1 = ref<string[]>();
const add = async () => {
  try {
    const res = await xqApi({ id: id1.id2 });
    console.log(res);
    love.value = res.result;
    lb.lb1 = res.result.mainPictures;
    aaa.value = res.result.details.properties;
    aaa1.value = res.result.details.pictures;
    // console.log(lb.lb1);
  } catch (error) {
    console.log(error);
  }
};

onLoad((e) => {
  // console.log(e?.id);
  id1.id2 = e?.id;
  add();
});
</script>

<style lang="scss" scoped>
.goshop {
  height: 100%;
  width: 100vw;
  background-color: #f4f4f4;
  overflow: auto;
  margin-bottom: 100px;
  position: relative;
}
// .ww {
//   width: 0;
//   height: 0;
//   border-width: 30px;
//   border-style: solid;

//   border-color: red transparent transparent transparent;
//   overflow: hidden;
//   font-size: 0;
//   line-height: 0;
// }
.box {
  background-color: #fff;
  width: 100vw;
}
.box1 {
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  width: 100vw;
}
.uni-tab__cart-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.uni-goods-nav {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
