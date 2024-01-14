<template>
  <view class="ReferralDetails">
    <scroll-view scroll-y @scrolltolower="bom" show-scrollbar>
      <div>
        <image
          src="../../static/icon/img1/顶部.jpg"
          mode="widthFix"
          style="width: 100%; border-radius: 0 0 30px 30px"
        />
        <div
          style="
            width: 90%;
            display: flex;
            margin-left: 15px;
            border-radius: 30rpx;
            background-color: #fff;
            position: absolute;
            top: 90px;
            left: 15rpx;
            height: 70px;
            /* margin-bottom: 100px; */
          "
        >
          <div
            v-for="(item, index) in aaa"
            :key="index"
            class="box"
            :class="aa.aa1 == index ? 'red' : ''"
            @click="add1(index)"
          >
            {{ item.title }}
          </div>
        </div>

        <div
          v-for="(item, index) in aaa"
          :key="index"
          style="
            width: 100%;

            overflow: auto;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            /* margin-bottom: 60px; */
          "
        >
          <div
            v-for="(itm, inex) in item?.goodsItems.items"
            @click="goshop(itm.id)"
            :key="inex"
            style="width: 45%; padding: 10px; background-color: #fff"
            v-show="aa.aa1 == index"
          >
            <img
              style="width: 200px; height: 200px"
              :src="itm.picture"
              alt=""
            />
            <p>{{ itm.name }}</p>
            <span>{{ itm.price }}</span>
          </div>
        </div>
      </div>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";
import Top from "./FatherToSon/top.vue";
import {
  referralApi0,
  referralApi1,
  referralApi2,
  referralApi3,
} from "@/api/referral";
import type { referralReturn, SubType, Item } from "@/api/types/referralType";

const bom = () => {
  console.log(111);
  page.page1++;
  pageSize.pageSize1++;
};

const aa = reactive({
  aa1: 0,
});

const goshop = (id: any) => {
  uni.navigateTo({
    url: `/pages/goshop/index?id=${id}`,
  });
};
const add1 = (index: any) => {
  aa.aa1 = index;
};

let index1 = reactive({
  index2: "",
});

let page = reactive({
  page1: 1,
});
let pageSize = reactive({
  pageSize1: 10,
});
onLoad((e) => {
  console.log(e?.index);
  index1.index2 = e?.index;
  add();
});

const aaa = ref<SubType[]>();
const aaa1 = ref<Item[]>();
const add = async () => {
  if (index1.index2 == "0") {
    try {
      const res = await referralApi0({
        page: page.page1,
        pageSize: pageSize.pageSize1,
      });
      aaa.value = [...(aaa.value || []), ...(res.result.subTypes || [])];
      aaa1.value = res.result.subTypes.goodsItems.items;

      console.log("mmm", res);
    } catch (error) {
      console.log(error);
    }
  }
  if (index1.index2 == "1") {
    try {
      const res = await referralApi1({
        page: page.page1,
        pageSize: pageSize.pageSize1,
      });
      aaa.value = [...(aaa.value || []), ...(res.result.subTypes || [])];
      aaa1.value = res.result.subTypes.goodsItems.items;

      console.log("mmm", res);
    } catch (error) {
      console.log(error);
    }
  }
  if (index1.index2 == "2") {
    try {
      const res = await referralApi2({
        page: page.page1,
        pageSize: pageSize.pageSize1,
      });
      aaa.value = [...(aaa.value || []), ...(res.result.subTypes || [])];
      aaa1.value = res.result.subTypes.goodsItems.items;

      console.log("mmm", res);
    } catch (error) {
      console.log(error);
    }
  }
  if (index1.index2 == "3") {
    try {
      const res = await referralApi3({
        page: page.page1,
        pageSize: pageSize.pageSize1,
      });
      aaa.value = [...(aaa.value || []), ...(res.result.subTypes || [])];
      aaa1.value = res.result.subTypes.goodsItems.items;

      console.log("mmm", res);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.ReferralDetails {
  // overflow: auto;
  height: 100vh;
  // width: 100vw;
  background-color: #f4f4f4;
  position: relative;
}
.box {
  // display: flex;
  // justify-content: space-around;
  // align-items: center;

  padding: 20px;
  width: 70%;
}
.red {
  border-bottom: 3px solid red;
}
</style>
