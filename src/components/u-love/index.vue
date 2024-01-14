<template>
  <div class="box">
    <scroll-view
      refresher-enabled
      scroll-y
      @refresherrefresh="flushed"
      :refresher-triggered="state.state1"
      @scrolltolower="bottom"
      refresher-background="red"
    >
      <div class="u-love">
        <div
          class="aaa"
          style="
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: center;
          "
        >
          <div>
            <img
              style="width: 20px; height: 20px"
              src="../../static/icon/images/bubble.png"
              alt=""
            />
          </div>
          <div>
            <h1 style="text-align: center; margin: 20px 20px">猜你喜欢</h1>
          </div>
          <div>
            <img
              style="width: 20px; height: 20px"
              src="../../static/icon/images/bubble.png"
              alt=""
            />
          </div>
        </div>

        <div
          style="
            width: 95%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          "
        >
          <div
            v-for="(item, index) in love"
            :key="index"
            style="padding: 10rpx; background-color: #fff; width: 45%"
            @click="add2(item.id)"
          >
            <img style="width: 100%" :src="item.picture" alt="" />
            <p>{{ item.name }}</p>
            <span style="color: red">{{ item.price }}</span>
          </div>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { loveApi } from "@/api/user";
import type { loveReturn, loveModel, Item } from "@/api/types/userType";
import { onLoad } from "@dcloudio/uni-app";

const props = defineProps();

const bottom = () => {
  console.log(1112222);
  page.page1++;
  pageSize.pageSize1++;
  add();
};
const state = reactive({
  state1: false,
});

const flushed = () => {
  state.state1 = true;
  add();
  state.state1 = false;
};

const add2 = (id: string) => {
  uni.navigateTo({
    url: `/pages/goshop/index?id=${id}`,
  });
};
const love = ref<Item[]>();
const page = reactive({
  page1: 1,
});
const pageSize = reactive({
  pageSize1: 10,
});
const add = async () => {
  try {
    const res = await loveApi({
      page: page.page1,
      pageSize: pageSize.pageSize1,
    });
    love.value = [...(love.value || []), ...(res.result.items || [])];
    console.log("wsq", res);
  } catch (error) {
    console.log(error);
  }
};
onLoad(() => {
  add();
});
</script>

<style lang="scss" scoped>
.u-love {
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
  // overflow: auto;
}
.aaa {
}
</style>
