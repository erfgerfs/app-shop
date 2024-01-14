<template>
  <div>
    <input type="text" class="input1" placeholder="女靴" />
  </div>
  <div class="classify">
    <div
      style="
        margin-bottom: 20px;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: space-around;
      "
    >
      <div class="right">
        <div
          v-for="(item, index) in bbb"
          :key="index"
          class="box"
          :class="act.act1 == index ? 'red' : ''"
          @click="add1(index)"
        >
          {{ item?.name }}
        </div>
      </div>
      <div class="left">
        <swiper style="width: 100%" indicator-dots autoplay circular>
          <swiper-item v-for="(item, index) in lbt" :key="index">
            <img style="width: 100%" :src="item.imgUrl" alt="" />
          </swiper-item>
        </swiper>
        <div
          v-for="(item, index) in bbb"
          :key="index"
          v-show="act.act1 == index"
        >
          <div v-for="(itm, indx) in item.children" :key="indx">
            <h1 style="font-size: 24px">
              {{ itm.name }}
            </h1>
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
              "
            >
              <div
                v-for="(ite, inde) in itm.goods"
                :key="inde"
                style="width: 27%; height: 200px"
                @click="xq(ite.id)"
              >
                <img
                  :src="ite.picture"
                  alt=""
                  style="width: 100px; height: 100px"
                />
                <p>{{ ite.name }}</p>
                <span style="color: red">￥{{ ite.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { classshopReturn, Child } from "@/api/types/classshopType";
import { classshopApi } from "@/api/classshop";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { reactive } from "vue";
import { switchApi } from "@/api/user";
import type { SwitchReturn } from "./types/userType";

const xq = (id: any) => {
  uni.navigateTo({
    url: `/pages/goshop/index?id=${id}`,
  });
};

const act = reactive({
  act1: "",
});

const add1 = (index: any) => {
  act.act1 = index;
  console.log(act.act1);
};
const bbb = ref<classshopReturn>();
// const ccc = ref<Child[]>();
const add = async () => {
  try {
    const res = await classshopApi();
    bbb.value = res.result;

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const lbt = ref<SwitchReturn>();
const add2 = async () => {
  try {
    const res = await switchApi({
      distributionSite: 2,
    });
    console.log(res);
    lbt.value = res.result;
  } catch (error) {
    console.log(error);
  }
};
onLoad(() => {
  add();
  add2();
});
</script>

<style lang="scss" scoped>
.box {
  height: 70px;
  background-color: #f6f6f6;
  width: 100%;
  text-align: center;
  line-height: 70px;
  border-bottom: 1px solid #000;
}
.red {
  border-left: 10px solid #27ba9b;
  overflow: hidden;
  box-sizing: border-box;
}
.classify {
  margin-bottom: 20px;
  height: 100vh;
  width: 100vw;
  display: flex;
}
.input1 {
  width: 80%;
  background-color: #f3f4f4;
  padding: 20rpx;
  margin-left: 25rpx;
  border-radius: 20px;
  padding-left: 50px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.right {
  width: 25%;
  height: 100vh;
  overflow: auto;
}
.left {
  width: 75%;
  height: 100vh;
  overflow: auto;
}
</style>
